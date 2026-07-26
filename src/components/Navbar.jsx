import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, Sun, Moon, Globe, Send } from "lucide-react";
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
        threshold: 0.1,
        rootMargin: "-20% 0px -50% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-md border-b border-border/60 z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-2.5 flex justify-between items-center">

        {/* Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-1.5 text-foreground tracking-wide hover:opacity-95 transition-opacity overflow-hidden"
        >
          {/* Icône / Image du logo */}
          <div className="flex items-center justify-center p-0.5 text-primary transition-transform duration-300 group-hover:scale-105">
            <img
              src="/img/logo.png"
              alt="Logo Andriamiarintsoa"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-9 md:h-9 object-contain bg-transparent"
            />
          </div>

          {/* Texte du logo avec taille réduite et proportionnelle */}
          <span className="font-bold text-xs sm:text-[13px] md:text-sm truncate">
            Andriamiarintsoa<span className="text-primary font-mono">.dev</span>
          </span>
        </a>


        {/* Navigation Desktop */}
        <div className="hidden min-[1030px]:flex items-center gap-4">
          <div className="flex items-center gap-0.5 bg-card/60 p-0.5 rounded-full border border-border/60 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveSection(link.id)}
                  className={`relative px-3 py-0.5 text-[11px] font-semibold transition-colors duration-200 rounded-full ${isActive
                    ? "text-primary font-bold"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {link.name}

                  {isActive && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full shadow-[0_0_6px_var(--color-primary)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Langue Desktop */}
          <div className="flex items-center gap-0.5 bg-card/80 p-0.5 rounded-lg border border-border/60 text-[10px] font-semibold">
            <Globe className="w-2.5 h-2.5 text-muted-foreground ml-1 shrink-0" />
            {["fr", "en"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-1.5 py-0.5 rounded transition-all uppercase font-bold ${lang === l
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
            className="w-7 h-7 rounded-lg border border-border/40 text-foreground"
          >
            {theme === "dark" ? (
              <Sun className="w-3 h-3 text-amber-400" />
            ) : (
              <Moon className="w-3 h-3 text-primary" />
            )}
          </Button>

          {/* Contact */}
          <Button
            render={<a href="#contact" />}
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xs gap-1 h-7 px-3 text-[11px] font-semibold rounded-lg"
          >
            <Send className="w-2.5 h-2.5" />
            {t.btnContact}
          </Button>
        </div>

        {/* Navigation Mobile */}
        <div className="min-[1030px]:hidden flex items-center gap-2">
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="bg-card text-foreground text-[10px] px-1.5 py-1 rounded-md border border-border/80 outline-none uppercase font-bold cursor-pointer"
          >
            <option value="fr">FR</option>
            <option value="en">EN</option>
          </select>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="w-7 h-7 border border-border/60 rounded-md text-foreground"
          >
            {theme === "dark" ? (
              <Sun className="w-3 h-3 text-amber-400" />
            ) : (
              <Moon className="w-3 h-3 text-primary" />
            )}
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="inline-flex items-center justify-center w-7 h-7 border border-border/80 text-foreground rounded-md hover:bg-accent transition-colors">
              <Menu className="h-3.5 w-3.5" />
            </SheetTrigger>

            <SheetContent
              side="top"
              className="w-[calc(100%-1.5rem)] max-w-sm mx-auto mt-14 rounded-xl border border-primary/30 bg-card/98 backdrop-blur-xl text-foreground p-4 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
            >
              <div className="flex flex-col gap-3.5">
                <div className="flex flex-wrap gap-1.5">
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
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all border ${isActive
                          ? "bg-primary text-primary-foreground border-primary font-bold shadow-[0_0_8px_var(--color-primary)]"
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
                  className="w-full bg-primary text-primary-foreground font-mono font-bold rounded-lg py-1.5 text-[11px] gap-1.5"
                  onClick={() => setOpen(false)}
                >
                  <Send className="w-3 h-3" />
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
