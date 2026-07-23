import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Layers, Server, Database } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function Projects() {
  const projectsList = [
    {
      title: "TaskFlow Pro",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
      pitch: "Plateforme de gestion de projets d'équipe en temps réel simplifiant la collaboration distante.",
      stack: {
        front: ["ReactJS", "Tailwind CSS"],
        back: ["Node.js", "Express"],
        db: ["PostgreSQL"],
      },
      demoUrl: "https://demo.com",
      githubUrl: "https://github.com",
    },
    {
      title: "E-Boutique Eco",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
      pitch: "Application E-commerce optimisée avec gestion complète du panier et paiement sécurisé Stripe.",
      stack: {
        front: ["ReactJS", "Sass"],
        back: ["PHP", "Laravel"],
        db: ["MySQL"],
      },
      demoUrl: "https://demo.com",
      githubUrl: "https://github.com",
    },
    {
      title: "DataViz Dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      pitch: "Outil d'analyse de métriques d'entreprises centralisant plusieurs API de paiement et d'audience.",
      stack: {
        front: ["ReactJS", "Bootstrap"],
        back: ["Python", "Django"],
        db: ["Supabase"],
      },
      demoUrl: "https://demo.com",
      githubUrl: "https://github.com",
    },
  ];

  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-6">
      {/* Entête de section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Projets Récents
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Découvrez une sélection de réalisations complètes, conçues de l'architecture backend au design frontend.
        </p>
      </div>

      {/* Grille des cartes projets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projectsList.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-card/60 border-border/60 backdrop-blur-sm text-card-foreground overflow-hidden h-full flex flex-col hover:border-primary/50 transition-colors shadow-xs group">
              
              {/* Image / Capture d'écran */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay discret pour uniformiser avec le thème sombre */}
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors" />
              </div>

              <CardContent className="p-6 flex-1 flex flex-col gap-4">
                <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                
                {/* Pitch */}
                <p className="text-muted-foreground text-sm leading-relaxed">{project.pitch}</p>

                {/* Stack Technique Séparée */}
                <div className="flex flex-col gap-2 mt-auto pt-4 border-t border-border/60 text-xs">
                  <div className="flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span className="text-muted-foreground font-semibold">Front:</span>
                    <span className="text-foreground/90">{project.stack.front.join(", ")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Server className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span className="text-muted-foreground font-semibold">Back:</span>
                    <span className="text-foreground/90">{project.stack.back.join(", ")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Database className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span className="text-muted-foreground font-semibold">BDD:</span>
                    <span className="text-foreground/90">{project.stack.db.join(", ")}</span>
                  </div>
                </div>
              </CardContent>

              {/* Boutons d'action */}
              <CardFooter className="p-6 pt-0 flex justify-between gap-4">
                <Button 
                  asChild 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-border bg-card/40 hover:bg-accent text-foreground gap-2"
                >
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    <GithubIcon className="w-4 h-4" /> Code
                  </a>
                </Button>
                <Button 
                  asChild 
                  size="sm" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 shadow-xs shadow-primary/20"
                >
                  <a href={project.demoUrl} target="_blank" rel="noreferrer">
                    <ExternalLink className="w-4 h-4" /> Démo
                  </a>
                </Button>
              </CardFooter>

            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
