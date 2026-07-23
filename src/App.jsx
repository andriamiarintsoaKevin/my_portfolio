import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import About from "./components/About";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Academic from "./components/Academic";
import Footer from "./components/Footer";

export default function App() {
  const [lang, setLang] = useState("fr");

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary selection:text-primary-foreground transition-colors duration-300 relative">
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <div className=" bg-muted/30">
          <About lang={lang} />
        </div>
        <Academic lang={lang} />
        <TechStack lang={lang} />
        <Projects lang={lang} />
        <Contact lang={lang} />
      </main>

      <Footer lang={lang} />
      <ScrollToTop />
    </div>
  );
}
