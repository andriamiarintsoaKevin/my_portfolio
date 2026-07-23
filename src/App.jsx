import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  // Langue par défaut : 'fr'
  const [lang, setLang] = useState("fr");

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary selection:text-primary-foreground transition-colors duration-300">
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Projects lang={lang} />
        <TechStack lang={lang} />
        <About lang={lang} />
        <Contact lang={lang} />
      </main>

      <footer className="py-8 text-center text-muted-foreground text-sm border-t border-border/60">
        © {new Date().getFullYear()} Jensen. Tous droits réservés.
      </footer>
    </div>
  );
}
