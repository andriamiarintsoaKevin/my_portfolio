import { Menu, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

export default function Navbar() {
  const navLinks = [
    { name: "Accueil", href: "#hero" },
    { name: "Projets", href: "#projects" },
    { name: "Stack", href: "#stack" },
    { name: "À propos", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-md border-b border-border/60 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a 
          href="#hero" 
          className="flex items-center gap-2 text-xl font-bold text-foreground tracking-wide hover:opacity-90 transition-opacity"
        >
          <Code2 className="w-6 h-6 text-primary" />
          <span>
            Jensen<span className="text-primary">.dev</span>
          </span>
        </a>

        {/* Navigation Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
          <Button 
            asChild 
            size="sm" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm shadow-primary/20"
          >
            <a href="#contact">Me contacter</a>
          </Button>
        </div>

        {/* Navigation Mobile */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground hover:bg-accent">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            
            <SheetContent side="right" className="bg-card border-border text-foreground">
              {/* Titre accessible indispensable pour Shadcn Sheet */}
              <SheetTitle className="text-left text-lg font-bold text-foreground mb-4">
                Navigation
              </SheetTitle>

              <div className="flex flex-col gap-6 mt-8 text-center">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg text-muted-foreground hover:text-primary transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                ))}
                
                <Button 
                  asChild 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground mt-4 w-full"
                >
                  <a href="#contact">Me contacter</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </nav>
  );
}
