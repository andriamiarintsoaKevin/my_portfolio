import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import WAVES from 'vanta/src/vanta.waves';

export default function VantaBg() {
  const myRef = useRef(null);
  const vantaRef = useRef(null); // On stocke l'instance Vanta dans un ref

  useEffect(() => {
    // 1. On n'initialise que si l'élément existe et si Vanta n'est pas déjà lancé
    if (!vantaRef.current && myRef.current) {
      vantaRef.current = WAVES({
        el: myRef.current,
        THREE: THREE,
        // --- Contrôles & Interactions ---
        mouseControls: true,
        touchControls: false, // Évite de bloquer le scroll tactile
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        // --- Performance & Rendu ---
        scale: 1.00,
        scaleMobile: 0.50,    // Réduit la charge GPU sur smartphone
        // --- Style Dark Mode ---
        color: 0x0f172a,      // Bleu nuit profond (Style Tailwind slate-900)
        shininess: 15.00,     // Atténue la brillance pour la lisibilité
        waveHeight: 8.00,     // Vagues plus calmes
        waveSpeed: 0.40,      // Animation fluide et sobre
        zoom: 0.85
      });
    }

    // 2. Nettoyage parfait du canvas WebGL au démontage
    return () => {
      if (vantaRef.current) {
        vantaRef.current.destroy();
        vantaRef.current = null; // Libération de la mémoire
      }
    };
  }, []); // Tableau de dépendances vide -> exécuté 1 seule fois au montage

  return (
    <div ref={myRef} className="relative w-full min-h-screen">
      {/* Overlay pour garantir le contraste du texte si besoin */}
      <div className="absolute inset-0 bg-slate-950/20 pointer-events-none z-0" />

      {/* Contenu par-dessus l'animation */}
      <div className="relative z-10 p-8 md:p-16 text-white max-w-4xl mx-auto">
        <h1 className="mb-4 text-4xl md:text-6xl font-bold tracking-tight">
          Bonjour, je suis développeur
        </h1>
        <p className="text-lg md:text-xl text-slate-300">
          Bienvenue sur mon portfolio.
        </p>
      </div>
    </div>
  );
}
