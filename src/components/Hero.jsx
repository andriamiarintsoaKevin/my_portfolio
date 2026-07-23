import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileDown, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { translations } from "../translations";

export default function Hero({ lang = "fr" }) {
  const t = translations[lang].hero;

  return (
    <section
      id="hero"
      className="pt-32 pb-20 md:pt-40 md:pb-28 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
    >
      {/* Informations principales */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="md:col-span-7 flex flex-col gap-5"
      >
        <div className="flex items-center gap-3">
          <span className="text-primary font-mono text-base md:text-lg font-semibold tracking-wide">
            {t.greeting}
          </span>
          <div className="w-12 h-0.5 bg-primary/80 rounded-full" />
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight tracking-tight">
          {t.role} <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-foreground via-primary/90 to-primary">
            {t.stack}
          </span>
        </h1>

        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl">
          {t.pitch}
        </p>

        {/* Liens d'action (CTA) */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          {/* Bouton Principal - Indigo */}
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40 hover:-translate-y-0.5"
          >
            <a href="#projects">
              {t.viewProjects} <ArrowRight className="w-4 h-4" />
            </a>
          </Button>

          {/* Bouton Secondaire - Outline */}
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-border bg-card/60 hover:bg-accent hover:text-foreground text-foreground gap-2 transition-all hover:-translate-y-0.5"
          >
            <a href="/cv.pdf" download="CV_Jensen.pdf">
              <FileDown className="w-4 h-4 text-primary" /> {t.downloadCv}
            </a>
          </Button>

          {/* Liens Réseaux Sociaux */}
          <div className="flex items-center gap-2 ml-auto md:ml-2">
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground hover:bg-accent rounded-full"
            >
              <a href="https://github.com" target="_blank" rel="noreferrer" title="GitHub">
                <GithubIcon className="w-5 h-5" />
              </a>
            </Button>

            <Button
              asChild
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground hover:bg-accent rounded-full"
            >
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Avatar avec halo Indigo Pro */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="md:col-span-5 flex justify-center items-center relative"
      >
        {/* Halo animé autour de l'image */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full border-2 border-primary/30 bg-primary/5 blur-xs shadow-2xl shadow-primary/30"
        />

        {/* Container Image */}
        <div className="relative z-10 w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-primary/50 bg-card shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600"
            alt="Jensen"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
