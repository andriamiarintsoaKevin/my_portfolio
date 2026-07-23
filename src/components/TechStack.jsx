import { motion } from "framer-motion";
import { Monitor, Server, Database, Terminal } from "lucide-react";
import { translations } from "../translations";

export default function TechStack({ lang = "fr" }) {
  const t = translations[lang].techStack;

  // Données techniques de compétences fixes couplées avec les titres traduits
  const rawCategories = [
    {
      icon: Monitor,
      skills: ["HTML", "CSS", "JavaScript", "ReactJS", "Tailwind CSS", "Sass", "Bootstrap"],
    },
    {
      icon: Server,
      skills: ["PHP (Laravel)", "Python (Django)", "Java"],
    },
    {
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "Supabase"],
    },
    {
      icon: Terminal,
      skills: ["Git", "GitHub", "Docker", "Vite", "VS Code"],
    },
  ];

  // Fusion des titres traduits et des icônes/compétences
  const categories = rawCategories.map((cat, index) => ({
    ...cat,
    title: t.categories[index]?.title || "",
  }));

  return (
    <section id="stack" className="py-20 bg-muted/30 border-y border-border/60 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Titre & Description */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            {t.title}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            {t.subtitle}
          </p>
        </div>

        {/* Grille des compétences */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-card/70 border border-border/60 backdrop-blur-xs rounded-xl p-6 flex flex-col gap-4 shadow-xs transition-all hover:border-primary/40 hover:shadow-md"
              >
                {/* Entête Catégorie */}
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg">{cat.title}</h3>
                </div>

                {/* Badges des Skills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-md bg-secondary/80 border border-border/80 text-secondary-foreground text-xs font-medium hover:border-primary/60 hover:text-primary transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
