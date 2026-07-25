import { useState } from "react";
import { X, Smartphone, Tablet, Monitor, ExternalLink } from "lucide-react";

export default function LiveDemoModal({ isOpen, onClose, demoUrl, title }) {
  const [device, setDevice] = useState("desktop"); // "mobile" | "tablet" | "desktop"

  if (!isOpen || !demoUrl) return null;

  // Largeurs simulées selon le support
  const deviceWidths = {
    mobile: "w-[375px]",
    tablet: "w-[768px]",
    desktop: "w-full",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl h-[85vh] md:h-[88vh] bg-background border border-border/80 rounded-xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Barre de contrôle supérieure (Header de la Modale) */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/60 bg-card">
          <div className="flex items-center gap-2.5">
            <h3 className="font-bold text-xs md:text-sm text-foreground">{title}</h3>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
              HTML / Sass Live
            </span>
          </div>

          {/* Commutateur de Tailles (Mobile / Tablette / Desktop) */}
          <div className="hidden sm:flex items-center gap-1 bg-muted/60 p-0.5 rounded-lg border border-border/40">
            <button
              onClick={() => setDevice("mobile")}
              className={`p-1 rounded-md transition-all ${device === "mobile" ? "bg-background text-primary shadow-xs" : "text-muted-foreground hover:text-foreground"}`}
              title="Vue Mobile (375px)"
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setDevice("tablet")}
              className={`p-1 rounded-md transition-all ${device === "tablet" ? "bg-background text-primary shadow-xs" : "text-muted-foreground hover:text-foreground"}`}
              title="Vue Tablette (768px)"
            >
              <Tablet className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setDevice("desktop")}
              className={`p-1 rounded-md transition-all ${device === "desktop" ? "bg-background text-primary shadow-xs" : "text-muted-foreground hover:text-foreground"}`}
              title="Vue Desktop (100%)"
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Actions : Lien externe & Fermer */}
          <div className="flex items-center gap-1.5">
            <a
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted"
              title="Ouvrir dans un nouvel onglet"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Zone d'affichage de l'Iframe */}
        <div className="flex-1 bg-slate-950/50 flex items-center justify-center p-3 overflow-hidden">
          <iframe
            src={demoUrl}
            title={`Démo Live - ${title}`}
            className={`h-full bg-white transition-all duration-300 rounded-lg shadow-lg border-0 ${deviceWidths[device]}`}
          />
        </div>
      </div>
    </div>
  );
}
