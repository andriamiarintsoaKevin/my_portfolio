import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, Code2, Sun, Moon, Globe, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { translations } from "../translations";

export default function Navbar({ lang, setLang }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });

  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const t = translations[lang]?.nav || translations.fr.nav;

  // 1. Thème Sombre / Clair
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const navLinks = [
    { name: t.home, href: "#hero", id: "hero" },
    { name: t.about, href: "#about", id: "about" },
    { name: t.academic, href: "#academic", id: "academic" },
    { name: t.stack, href: "#stack", id: "stack" },
    { name: t.projects, href: "#projects", id: "projects" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1030) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 3. Détection de la section active au scroll (Corrigée)
  useEffect(() => {
    const sectionIds = ["hero", "about", "academic", "stack", "projects"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // threshold bas (10%) pour déclencher même si la section est très longue
        threshold: 0.1,
        // Zone d'intersection focalisée sur le milieu supérieur du viewport
        rootMargin: "-20% 0px -50% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []); // Dépendances vides pour ne pas réinstancier l'observer inutilement

  return (
    <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-md border-b border-border/60 z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 text-lg font-bold text-foreground tracking-wide hover:opacity-90 transition-opacity"
        >
          <div className="p-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20">
            <Code2 className="w-4 h-4" />
          </div>
          <span>
            Andriamiarintsoa<span className="text-primary font-mono">.dev</span>
          </span>
        </a>

        {/* Navigation Desktop */}
        <div className="hidden min-[1030px]:flex items-center gap-6">
          <div className="flex items-center gap-1 bg-card/60 p-1 rounded-full border border-border/60 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveSection(link.id)}
                  className={`relative px-3.5 py-1 text-xs font-semibold transition-colors duration-200 rounded-full ${
                    isActive
                      ? "text-primary font-bold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}

                  {isActive && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-primary rounded-full shadow-[0_0_8px_var(--color-primary)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Langue Desktop */}
          <div className="flex items-center gap-0.5 bg-card/80 p-0.5 rounded-lg border border-border/60 text-[11px] font-semibold">
            <Globe className="w-3 h-3 text-muted-foreground ml-1 shrink-0" />
            {["fr", "en", "mlg"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2 py-0.5 rounded-md transition-all uppercase font-bold ${
                  lang === l
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Theme */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="w-8 h-8 rounded-lg border border-border/40 text-foreground"
          >
            {theme === "dark" ? (
              <Sun className="w-3.5 h-3.5 text-amber-400" />
            ) : (
              <Moon className="w-3.5 h-3.5 text-primary" />
            )}
          </Button>

          {/* Contact */}
          <Button
            render={<a href="#contact" />}
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm gap-1.5 h-8 text-xs font-semibold"
          >
            <Send className="w-3 h-3" />
            {t.btnContact}
          </Button>
        </div>

        {/* Navigation Mobile */}
        <div className="min-[1030px]:hidden flex items-center gap-2">
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="bg-card text-foreground text-[11px] px-2 py-1 rounded-md border border-border/80 outline-none uppercase font-bold cursor-pointer"
          >
            <option value="fr">FR</option>
            <option value="en">EN</option>
            <option value="mlg">MLG</option>
          </select>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="w-8 h-8 border border-border/60 rounded-md text-foreground"
          >
            {theme === "dark" ? (
              <Sun className="w-3.5 h-3.5 text-amber-400" />
            ) : (
              <Moon className="w-3.5 h-3.5 text-primary" />
            )}
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="inline-flex items-center justify-center w-8 h-8 border border-border/80 text-foreground rounded-md hover:bg-accent transition-colors">
              <Menu className="h-4 w-4" />
            </SheetTrigger>

            <SheetContent
              side="top"
              className="w-[calc(100%-1.5rem)] max-w-md mx-auto mt-16 rounded-xl border border-primary/30 bg-card/98 backdrop-blur-xl text-foreground p-5 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.id;

                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => {
                          setActiveSection(link.id);
                          setOpen(false);
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                          isActive
                            ? "bg-primary text-primary-foreground border-primary font-bold shadow-[0_0_10px_var(--color-primary)]"
                            : "bg-background/50 border-border/60 text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        &gt; {link.name}
                      </a>
                    );
                  })}
                </div>

                <div className="h-px bg-border/60 w-full" />

                <Button
                  render={<a href="#contact" />}
                  size="sm"
                  className="w-full bg-primary text-primary-foreground font-mono font-bold rounded-lg py-2 text-xs gap-2"
                  onClick={() => setOpen(false)}
                >
                  <Send className="w-3.5 h-3.5" />
                  {t.btnContact}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </nav>
  );
}
