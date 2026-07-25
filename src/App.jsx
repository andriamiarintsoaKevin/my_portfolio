import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import About from "./components/About";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Academic from "./components/Academic";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

export default function App() {
  const [lang, setLang] = useState("fr");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simule le temps de chargement initial (1.5s pour laisser l'animation se dérouler)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Écran de chargement professionnel avec animation de sortie */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      {/* Contenu principal révélé progressivement */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary selection:text-primary-foreground transition-colors duration-300 relative"
      >
        <Navbar lang={lang} setLang={setLang} />
        <main>
          <Hero lang={lang} />
          <div className="bg-muted/30">
            <About lang={lang} />
          </div>
          <Academic lang={lang} />
          <TechStack lang={lang} />
          <Projects lang={lang} />
          <Contact lang={lang} />
        </main>

        <Footer lang={lang} />
        <ScrollToTop />
      </motion.div>
    </>
  );
}
