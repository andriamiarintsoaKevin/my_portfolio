import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileDown, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { translations } from "../translations";

// Composant pour l'effet typewriter sans saut de ligne/layout shift
function DynamicRole({ roles }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const containerRef = useRef(null);

  // Observer si l'élément est visible à l'écran
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // S'active dès que 10% du composant est visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRoleIndex(0);
    setDisplayText("");
    setIsDeleting(false);
  }, [roles]);

  useEffect(() => {
    // Ne rien exécuter si le composant n'est pas à l'écran
    if (!roles || roles.length === 0 || !isVisible) return;

    const currentRole = roles[roleIndex % roles.length];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          currentRole.substring(0, displayText.length + (isDeleting ? -1 : 1))
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles, isVisible]);

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center gap-1 font-mono text-xs md:text-sm font-semibold text-primary min-h-5 whitespace-nowrap"
    >
      <span>{displayText}</span>
      <span className="w-1.5 h-3.5 bg-primary animate-pulse inline-block shrink-0" />
    </div>
  );
}

export default function Hero({ lang = "fr" }) {
  const t = translations[lang]?.hero || translations.fr.hero;

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* 1. Grille de fond subtile */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] 
      bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      {/* 2. Orbes lumineux dynamiques (Glow effects) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-110 md:h-110 bg-primary/15 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse duration-8000" />
      <div className="absolute top-1/3 left-1/4 w-52 h-52 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none -z-10" />

      {/* Contenu principal */}
      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col-reverse md:grid md:grid-cols-12 gap-10 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7 flex flex-col gap-4"
        >
          <div className="flex items-center gap-2.5">
            <span className="text-primary font-mono text-xs md:text-sm font-semibold tracking-wide">
              {t.greeting}
            </span>
            <div className="w-10 h-0.5 bg-primary/80 rounded-full" />
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight tracking-tight md:flex-col flex gap-1.5">
            {t.role} <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-foreground via-primary/90 to-primary">
              {t.stack}
            </span>
          </h1>

          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed max-w-xl">
            {t.pitch}
          </p>

          {/* Liens d'action */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              render={<a href="#projects" />}
              size="sm"
              className="h-9 px-4 text-xs bg-primary hover:bg-primary/90 text-primary-foreground gap-1.5 shadow-md shadow-primary/25 transition-all hover:shadow-primary/30 hover:-translate-y-0.5 rounded-lg"
            >
              {t.btnProjects} <ArrowRight className="w-3.5 h-3.5" />
            </Button>

            <Button
              render={<a href="/doc/cv.pdf" download="andriamiarintsoa_cv.pdf" />}
              variant="outline"
              size="sm"
              className="h-9 px-4 text-xs border-border bg-card/60 hover:bg-accent hover:text-foreground text-foreground gap-1.5 transition-all hover:-translate-y-0.5 rounded-lg"
            >
              <FileDown className="w-3.5 h-3.5 text-primary" /> {t.btnCv}
            </Button>

            <div className="flex items-center gap-1.5 ml-auto md:ml-1">
              <Button
                render={<a href="https://github.com" target="_blank" rel="noreferrer" title="GitHub" />}
                variant="ghost"
                size="icon"
                className="w-8 h-8 text-muted-foreground hover:text-foreground hover:bg-accent rounded-full"
              >
                <GithubIcon className="w-4 h-4" />
              </Button>

              <Button
                render={<a href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn" />}
                variant="ghost"
                size="icon"
                className="w-8 h-8 text-muted-foreground hover:text-foreground hover:bg-accent rounded-full"
              >
                <LinkedinIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* 2. Photo + Nom + Titres animés */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-5 flex flex-col justify-center items-center gap-5 relative"
        >
          <div className="relative flex justify-center items-center">
            {/* Halo animé */}
            <motion.div
              animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-56 h-56 md:w-64 md:h-64 rounded-full border-2 border-primary/30 bg-primary/5 blur-xs shadow-xl shadow-primary/30"
            />

            {/* Avatar Container */}
            <div className="relative z-10 w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-primary/50 bg-card shadow-lg">
              <img
                src={'img/me.png'}
                alt="Tsilavina Kevin ANDRIAMIARINTSOA"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Nom & Prénom + Rôle animé */}
          <div className="z-10 flex flex-col items-center gap-2 text-center">
            <h2 className="text-xl md:text-2xl font-black tracking-tight text-foreground">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/70">
                ANDRIAMIARINTSOA{" "}
              </span>
              Tsilavina Kevin
            </h2>

            <div className="flex items-center justify-center min-h-8 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 dark:bg-primary/10 backdrop-blur-sm shadow-xs">
              <DynamicRole roles={t.roles} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
