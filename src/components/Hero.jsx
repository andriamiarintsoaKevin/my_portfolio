import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileDown, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Hero() {
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
          <span className="text-primary font-mono text-lg font-bold">
            Hello, moi c'est Jensen
          </span>
          <div className="w-12 h-0.5 bg-primary" />
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight">
          Développeur Web <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-foreground via-muted-foreground to-primary">
            Full Stack
          </span>
        </h1>

        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
          Je construis des applications web performantes, de la base de données à l'interface utilisateur.
        </p>

        {/* Liens vitaux (CTA) */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          {/* Bouton Principal - Indigo */}
          <Button 
            asChild 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 shadow-lg shadow-primary/20"
          >
            <a href="#projects">
              Voir mes projets <ArrowRight className="w-4 h-4" />
            </a>
          </Button>

          {/* Bouton Secondaire - Outline */}
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="border-border bg-card/50 hover:bg-accent text-foreground gap-2"
          >
            <a href="/cv.pdf" download="CV_Jensen.pdf">
              <FileDown className="w-4 h-4 text-primary" /> Télécharger CV
            </a>
          </Button>

          {/* Social Links */}
          <div className="flex items-center gap-2 ml-auto md:ml-2">
            <Button 
              asChild 
              variant="ghost" 
              size="icon" 
              className="text-muted-foreground hover:text-foreground hover:bg-accent"
            >
              <a href="https://github.com" target="_blank" rel="noreferrer" title="GitHub">
                <GithubIcon className="w-5 h-5" />
              </a>
            </Button>

            <Button 
              asChild 
              variant="ghost" 
              size="icon" 
              className="text-muted-foreground hover:text-foreground hover:bg-accent"
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
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full border-2 border-primary/40 shadow-[0_0_80px_var(--color-primary)]"
        />

        <div className="relative z-10 w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-primary/60 bg-card">
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
