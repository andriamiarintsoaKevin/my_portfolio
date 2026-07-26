import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { translations } from "../translations";
import ProjectCard from "./ProjectCard";
import LiveDemoModal from "./LiveDemoModal";

const INITIAL_PROJECT_COUNT = 3; // 4 projets affichés par défaut

export default function Projects({ lang = "fr" }) {
  const t = translations[lang].projects;
  const [activeDemoProject, setActiveDemoProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const rawProjects = [
    {
      type: "internship",
      status: "completed",
      images: [
        "/img/prj1_1.png",
        "/img/prj1_2.png",
        "/img/prj1_3.png",
        "/img/prj1_4.png",
      ],
      stack: {
        front: ["ReactJS", "Tailwind", "Vite", "InertiaJS"],
        back: ["Laravel"],
        db: ["MySQL"],
      },
      demoUrl: null,
      githubUrl: null,
    },
    {
      type: "academic",
      status: "completed",
      images: [
        "/img/prj2_1.png",
        "/img/prj2_2.png",
        "/img/prj2_3.png",
      ],
      stack: {
        front: ["Laravel Blade", "Bootstrap"],
        back: ["Laravel"],
        db: ["MySQL"],
      },
      demoUrl: null,
      githubUrl: "https://github.com",
    },
    {
      type: "academic",
      status: "completed",
      images: [
        "/img/prj3_1.png",
        "/img/prj3_2.png",
      ],
      stack: {
        front: ["XML"],
        back: ["Python"],
        db: ["PostgreSQL"],
      },
      demoUrl: null,
      githubUrl: null,
    },
    // Projets supplémentaires (visibles au clic sur "Voir plus")
    {
      type: "personal",
      status: "in-progress",
      images: [
        "/img/prj4_1.png",
        "/img/prj4_2.png",
      ],
      stack: {
        front: ["ReactJS", "Tailwind", "Flutter"],
        back: ["Laravel"],
        db: ["SQLite"],
      },
      demoUrl: null,
      githubUrl: "https://github.com",
    },
  ];

  // Optimisation du calcul de la liste des projets
  const projectsList = useMemo(() => {
    return rawProjects.map((project, index) => ({
      ...project,
      title: t.items[index]?.title || `Projet ${index + 1}`,
      pitch: t.items[index]?.pitch || "",
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t.items]);

  const visibleProjects = showAll ? projectsList : projectsList.slice(0, INITIAL_PROJECT_COUNT);

  return (
    <section id="projects" className="relative py-16 md:py-24 transition-colors duration-300 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* En-tête */}
        <div className="text-left mb-10">
          <div className="flex items-center gap-2.5">
            <span className="text-primary font-mono text-xs md:text-sm font-bold uppercase tracking-wider">
              {t.title}
            </span>
            <div className="w-8 h-0.5 bg-primary/80 rounded-full" />
          </div>
          <p className="text-muted-foreground max-w-xl text-xs md:text-sm mt-2 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Grille sur 4 colonnes pour des cartes plus compactes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              lang={lang}
              t={t}
              onOpenDemo={setActiveDemoProject}
            />
          ))}
        </div>

        {/* Bouton Voir plus / Voir moins */}
        {projectsList.length > INITIAL_PROJECT_COUNT && (
          <div className="mt-10 text-center">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowAll(!showAll)}
              className="h-9 px-4 text-xs border-primary/30 hover:border-primary/85 bg-background/60 backdrop-blur-sm text-foreground gap-1.5 transition-all duration-300 hover:shadow-md hover:shadow-primary/10 rounded-lg"
            >
              <span>
                {showAll
                  ? (lang === "fr" ? "Voir moins" : "Show less")
                  : (lang === "fr" ? `Voir plus (${projectsList.length - INITIAL_PROJECT_COUNT})` : `Show more (${projectsList.length - INITIAL_PROJECT_COUNT})`)
                }
              </span>
              {showAll ? (
                <ChevronUp className="w-3.5 h-3.5 text-primary" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5 text-primary" />
              )}
            </Button>
          </div>
        )}

      </div>

      {/* Modal Démo */}
      <LiveDemoModal
        isOpen={!!activeDemoProject}
        onClose={() => setActiveDemoProject(null)}
        demoUrl={activeDemoProject?.demoUrl}
        title={activeDemoProject?.title}
      />
    </section>
  );
}
