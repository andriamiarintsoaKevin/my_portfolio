import { useState, useEffect } from "react";
import { Menu, Code2, Sun, Moon, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { translations } from "../translations";

export default function Navbar({ lang, setLang }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });

  const t = translations[lang].nav;

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
    { name: t.home, href: "#hero" },
    { name: t.projects, href: "#projects" },
    { name: t.stack, href: "#stack" },
    { name: t.about, href: "#about" },
    { name: t.contact, href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-md border-b border-border/60 z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 text-xl font-bold text-foreground tracking-wide hover:opacity-90">
          <Code2 className="w-6 h-6 text-primary" />
          <span>Jensen<span className="text-primary">.dev</span></span>
        </a>

        {/* Navigation Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              {link.name}
            </a>
          ))}

          {/* Sélecteur de Langue (FR / EN / MLG) */}
          <div className="flex items-center gap-1 bg-muted/60 p-1 rounded-lg border border-border/60 text-xs font-semibold">
            <Globe className="w-3.5 h-3.5 text-muted-foreground ml-1.5" />
            {["fr", "en", "mlg"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2 py-1 rounded-md transition-all uppercase ${lang === l
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Switch Thème */}
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-foreground hover:bg-accent rounded-full">
            {theme === "dark" ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-primary" />}
          </Button>

          <Button asChild size="sm" className="bg-primary text-primary-foreground shadow-sm shadow-primary/20">
            <a href="#contact">{t.btnContact}</a>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-2">
          {/* Selecteur de Langue Mobile */}
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="bg-muted text-foreground text-xs p-1.5 rounded-md border border-border outline-none uppercase font-semibold"
          >
            <option value="fr">FR</option>
            <option value="en">EN</option>
            <option value="mlg">MLG</option>
          </select>

          <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-foreground">
            {theme === "dark" ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-primary" />}
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card text-foreground">
              <SheetTitle className="text-left text-lg font-bold mb-4">Navigation</SheetTitle>
              <div className="flex flex-col gap-6 mt-8 text-center">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="text-lg text-muted-foreground hover:text-primary">
                    {link.name}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </nav>
  );
}
