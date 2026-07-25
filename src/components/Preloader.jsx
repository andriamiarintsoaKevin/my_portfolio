import { motion } from "framer-motion";

export default function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-foreground"
    >
      {/* Container Logo / Initiales avec effet de pulsation */}
      <div className="relative flex items-center justify-center mb-6">
        {/* Logo / Monogramme au centre */}
        <span className="font-mono font-bold text-xs md:text-sm tracking-tight text-primary/80 animate-pulse">
          &lt;<span className="text-primary">Andriamiarintsoa.dev</span>/&gt;
        </span>
      </div>

      {/* Barre de progression fluide */}
      <div className="w-40 h-1 bg-muted rounded-full overflow-hidden relative">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="w-full h-full bg-primary rounded-full"
        />
      </div>
    </motion.div>
  );
}
