import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Layers, Server, Database, GraduationCap, Briefcase, FolderGit2, Lock, Loader2, Clock } from "lucide-react";
import { GithubIcon } from "./Icons";
import { translations } from "../translations";

export default function Projects({ lang = "fr" }) {
  const t = translations[lang].projects;

  // Données techniques avec gestion du statut ("completed" | "in-progress")
  const rawProjects = [
    {
      type: "academic",
      status: "completed",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
      stack: {
        front: ["ReactJS", "Tailwind CSS"],
        back: ["Node.js", "Express"],
        db: ["PostgreSQL"],
      },
      demoUrl: "https://demo.com",
      githubUrl: "https://github.com",
    },
    {
      type: "personal",
      status: "in-progress",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      stack: {
        front: ["Next.js", "Tailwind CSS"],
        back: ["Node.js", "FastAPI"],
        db: ["Supabase"],
      },
      demoUrl: null,
      githubUrl: "https://github.com",
    },
    {
      type: "internship",
      status: "completed",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
      stack: {
        front: ["ReactJS", "Sass"],
        back: ["PHP", "Laravel"],
        db: ["MySQL"],
      },
      demoUrl: null,
      githubUrl: null,
    },
  ];

  // Helper pour afficher le badge de catégorie (Académique, Stage, Personnel)
  const getBadgeInfo = (type) => {
    switch (type) {
      case "academic":
        return {
          label: lang === "fr" ? "Académique" : "Academic",
          icon: GraduationCap,
          style: "bg-blue-600 text-white border-blue-400 shadow-blue-900/30",
        };
      case "internship":
        return {
          label: lang === "fr" ? "Stage" : "Internship",
          icon: Briefcase,
          style: "bg-amber-600 text-white border-amber-400 shadow-amber-900/30",
        };
      default:
        return {
          label: lang === "fr" ? "Personnel" : "Personal",
          icon: FolderGit2,
          style: "bg-emerald-600 text-white border-emerald-400 shadow-emerald-900/30",
        };
    }
  };

  // Fusion des données traduisibles et techniques
  const projectsList = rawProjects.map((project, index) => ({
    ...project,
    title: t.items[index]?.title || "",
    pitch: t.items[index]?.pitch || "",
  }));

  return (
    <section id="projects" className="relative py-28 transition-colors duration-300 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* En-tête de section */}
        <div className="text-left mb-16">
          <div className="flex items-center gap-2">
            <span className="text-primary font-mono text-sm font-bold uppercase tracking-wider">
              {t.title}
            </span>
            <div className="w-8 h-0.5 bg-primary/80 rounded-full" />
          </div>
          <p className="text-muted-foreground max-w-xl text-base mt-2">
            {t.subtitle}
          </p>
        </div>

        {/* Grille des cartes projets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsList.map((project, index) => {
            const badge = getBadgeInfo(project.type);
            const BadgeIcon = badge.icon;
            const isInProgress = project.status === "in-progress";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-card/80 border-border/60 backdrop-blur-md text-card-foreground overflow-hidden h-full flex flex-col hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">

                  {/* Image & Badges */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors" />

                    {isInProgress && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-500/90 text-slate-950 border border-amber-300 shadow-md backdrop-blur-md">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-900 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-900"></span>
                          </span>
                          {lang === "fr" ? "En cours" : "In Progress"}
                        </span>
                      </div>
                    )}

                    <div className="absolute top-3 right-3 z-10">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border shadow-md ${badge.style}`}>
                        <BadgeIcon className="w-3.5 h-3.5 shrink-0" />
                        {badge.label}
                      </span>
                    </div>
                  </div>

                  {/* Contenu */}
                  <CardContent className="p-6 flex-1 flex flex-col gap-4">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    {/* Pitch */}
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.pitch}</p>

                    {/* Stack Technique */}
                    <div className="flex flex-col gap-2 mt-auto pt-4 border-t border-border/60 text-xs">
                      <div className="flex items-center gap-2">
                        <Layers className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span className="text-muted-foreground font-semibold">{t.labels.front}:</span>
                        <span className="text-foreground/90 font-medium">{project.stack.front.join(", ")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Server className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span className="text-muted-foreground font-semibold">{t.labels.back}:</span>
                        <span className="text-foreground/90 font-medium">{project.stack.back.join(", ")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Database className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span className="text-muted-foreground font-semibold">{t.labels.db}:</span>
                        <span className="text-foreground/90 font-medium">{project.stack.db.join(", ")}</span>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="p-6 pt-0 flex gap-3">
                    {/* Caso 1: Projet 100% privé / NDA */}
                    {!project.githubUrl && !project.demoUrl && !isInProgress && (
                      <div className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-muted/40 border border-border/40 text-xs text-muted-foreground font-medium">
                        <Lock className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>{lang === "fr" ? "Projet confidentiel / Interne" : "Confidential / Internal Project"}</span>
                      </div>
                    )}

                    {/* Caso 2: Projet en cours sans aucun lien dispo */}
                    {!project.githubUrl && !project.demoUrl && isInProgress && (
                      <div className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs text-amber-500 font-medium">
                        <Clock className="w-3.5 h-3.5 shrink-0" />
                        <span>{lang === "fr" ? "Développement en cours..." : "Development in progress..."}</span>
                      </div>
                    )}

                    {/* Caso 3: Au moins un lien ou bouton d'état à afficher */}
                    {(project.githubUrl || project.demoUrl || (isInProgress && (project.githubUrl || !project.demoUrl))) && (
                      <>
                        {/* Bouton GitHub */}
                        {project.githubUrl ? (
                          <Button
                            render={<a href={project.githubUrl} target="_blank" rel="noreferrer" />}
                            variant="outline"
                            size="sm"
                            className="flex-1 border-border/80 bg-background/50 hover:bg-muted hover:border-primary/40 text-foreground gap-2 transition-all duration-200 group/btn"
                          >
                            <GithubIcon className="w-4 h-4 text-muted-foreground group-hover/btn:text-foreground transition-colors" />
                            <span className="font-medium">{t.labels.code}</span>
                          </Button>
                        ) : (
                          <Button
                            disabled
                            variant="outline"
                            size="sm"
                            className="flex-1 border-border/40 bg-muted/20 text-muted-foreground opacity-60 cursor-not-allowed gap-2"
                          >
                            <Lock className="w-3.5 h-3.5" />
                            <span className="font-medium">{lang === "fr" ? "Privé" : "Private"}</span>
                          </Button>
                        )}

                        {/* Bouton Démo */}
                        {project.demoUrl ? (
                          <Button
                            render={<a href={project.demoUrl} target="_blank" rel="noreferrer" />}
                            size="sm"
                            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground gap-2 shadow-sm shadow-primary/20 hover:shadow-md hover:shadow-primary/30 transition-all duration-200 group/btn"
                          >
                            <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                            <span className="font-medium">{t.labels.demo}</span>
                          </Button>
                        ) : isInProgress ? (
                          /* Si en cours et pas encore de démo */
                          <Button
                            disabled
                            variant="secondary"
                            size="sm"
                            className="flex-1 bg-amber-500/10 text-amber-500 border border-amber-500/20 opacity-80 cursor-not-allowed gap-1.5 text-xs"
                          >
                            <Loader2 className="w-3.5 h-3.5 animate-spin shrink-0" />
                            <span className="font-medium">{lang === "fr" ? "Bientôt dispo" : "Coming soon"}</span>
                          </Button>
                        ) : (
                          /* Si terminé mais pas hébergé */
                          <Button
                            disabled
                            variant="secondary"
                            size="sm"
                            className="flex-1 bg-muted/40 text-muted-foreground opacity-60 cursor-not-allowed gap-2"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span className="font-medium">{lang === "fr" ? "Non hébergé" : "No Demo"}</span>
                          </Button>
                        )}
                      </>
                    )}
                  </CardFooter>

                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
