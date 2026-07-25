import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  Layers, 
  Server, 
  Database, 
  GraduationCap, 
  Briefcase, 
  FolderGit2, 
  Lock, 
  Loader2, 
  Clock 
} from "lucide-react";
import { GithubIcon } from "./Icons";
import ProjectImageSlider from "./ui/ProjectImageSlider";

export default function ProjectCard({ project, index, lang, t, onOpenDemo }) {
  const isInProgress = project.status === "in-progress";

  // Helper pour afficher le badge de catégorie
  const getBadgeInfo = (type) => {
    switch (type) {
      case "academic":
        return {
          label: lang === "fr" ? "Académique" : "Academic",
          icon: GraduationCap,
          style: "bg-blue-600 text-white border-blue-400 shadow-blue-950/30",
        };
      case "internship":
        return {
          label: lang === "fr" ? "Stage" : "Internship",
          icon: Briefcase,
          style: "bg-amber-600 text-white border-amber-400 shadow-amber-950/30",
        };
      default:
        return {
          label: lang === "fr" ? "Personnel" : "Personal",
          icon: FolderGit2,
          style: "bg-emerald-600 text-white border-emerald-400 shadow-emerald-950/30",
        };
    }
  };

  const badge = getBadgeInfo(project.type);
  const BadgeIcon = badge.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="h-full"
    >
      <Card className="bg-card/80 border-border/60 backdrop-blur-md text-card-foreground overflow-hidden h-full flex flex-col hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">

        {/* Section Image & Badges */}
        <div className="relative">
          <ProjectImageSlider images={project.images} title={project.title} />

          {isInProgress && (
            <div className="absolute top-2.5 left-2.5 z-10 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/90 text-slate-950 border border-amber-300 shadow-md backdrop-blur-md">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-900 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-slate-900"></span>
                </span>
                {lang === "fr" ? "En cours" : "In Progress"}
              </span>
            </div>
          )}

          <div className="absolute top-2.5 right-2.5 z-10 pointer-events-none">
            <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold border shadow-md ${badge.style}`}>
              <BadgeIcon className="w-3 h-3 shrink-0" />
              {badge.label}
            </span>
          </div>
        </div>

        {/* Contenu principal */}
        <CardContent className="p-4 sm:p-5 flex-1 flex flex-col gap-3">
          <h2 className="text-base md:text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {project.title}
          </h2>

          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed line-clamp-3">{project.pitch}</p>

          <div className="flex flex-col gap-1.5 mt-auto pt-3 border-t border-border/60 text-[11px] md:text-xs">
            <div className="flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-primary shrink-0" />
              <span className="text-muted-foreground font-semibold shrink-0">{t.labels.front}:</span>
              <span className="text-foreground/90 font-medium truncate">{project.stack.front.join(", ")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Server className="w-3.5 h-3.5 text-primary shrink-0" />
              <span className="text-muted-foreground font-semibold shrink-0">{t.labels.back}:</span>
              <span className="text-foreground/90 font-medium truncate">{project.stack.back.join(", ")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Database className="w-3.5 h-3.5 text-primary shrink-0" />
              <span className="text-muted-foreground font-semibold shrink-0">{t.labels.db}:</span>
              <span className="text-foreground/90 font-medium truncate">{project.stack.db.join(", ")}</span>
            </div>
          </div>
        </CardContent>

        {/* Pied de carte / Liens */}
        <CardFooter className="p-4 sm:p-5 pt-0 flex gap-2.5">
          {!project.githubUrl && !project.demoUrl && !isInProgress && (
            <div className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-muted/40 border border-border/40 text-[11px] text-muted-foreground font-medium">
              <Lock className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>{lang === "fr" ? "Projet confidentiel / Interne" : "Confidential / Internal Project"}</span>
            </div>
          )}

          {!project.githubUrl && !project.demoUrl && isInProgress && (
            <div className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-[11px] text-amber-500 font-medium">
              <Clock className="w-3.5 h-3.5 shrink-0" />
              <span>{lang === "fr" ? "Développement en cours..." : "Development in progress..."}</span>
            </div>
          )}

          {(project.githubUrl || project.demoUrl || (isInProgress && (project.githubUrl || !project.demoUrl))) && (
            <>
              {project.githubUrl ? (
                <Button
                  render={<a href={project.githubUrl} target="_blank" rel="noreferrer" />}
                  variant="outline"
                  size="sm"
                  className="flex-1 h-8 text-xs border-border/80 bg-background/50 hover:bg-muted hover:border-primary/40 text-foreground gap-1.5 transition-all duration-200 group/btn rounded-lg"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-muted-foreground group-hover/btn:text-foreground transition-colors" />
                  <span className="font-medium">{t.labels.code}</span>
                </Button>
              ) : (
                <Button
                  disabled
                  variant="outline"
                  size="sm"
                  className="flex-1 h-8 text-xs border-border/40 bg-muted/20 text-muted-foreground opacity-60 cursor-not-allowed gap-1.5 rounded-lg"
                >
                  <Lock className="w-3 h-3" />
                  <span className="font-medium">{lang === "fr" ? "Privé" : "Private"}</span>
                </Button>
              )}

              {project.demoUrl ? (
                <Button
                  onClick={() => onOpenDemo(project)}
                  size="sm"
                  className="flex-1 h-8 text-xs bg-primary hover:bg-primary/90 text-primary-foreground gap-1.5 shadow-xs shadow-primary/20 hover:shadow-sm hover:shadow-primary/30 transition-all duration-200 group/btn rounded-lg"
                >
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  <span className="font-medium">{t.labels.demo}</span>
                </Button>
              ) : isInProgress ? (
                <Button
                  disabled
                  variant="secondary"
                  size="sm"
                  className="flex-1 h-8 text-[11px] bg-amber-500/10 text-amber-500 border border-amber-500/20 opacity-80 cursor-not-allowed gap-1 rounded-lg"
                >
                  <Loader2 className="w-3 h-3 animate-spin shrink-0" />
                  <span className="font-medium">{lang === "fr" ? "Bientôt dispo" : "Coming soon"}</span>
                </Button>
              ) : (
                <Button
                  disabled
                  variant="secondary"
                  size="sm"
                  className="flex-1 h-8 text-xs bg-muted/40 text-muted-foreground opacity-60 cursor-not-allowed gap-1.5 rounded-lg"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span className="font-medium">{lang === "fr" ? "Non hébergé" : "No Demo"}</span>
                </Button>
              )}
            </>
          )}
        </CardFooter>

      </Card>
    </motion.div>
  );
}
