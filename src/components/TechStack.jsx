import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Monitor, Server, Database, Terminal, Smartphone } from "lucide-react";
import { translations } from "../translations";

export default function TechStack({ lang = "fr" }) {
  const t = translations[lang]?.techStack || translations.fr.techStack;

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const rawCategories = [
    {
      icon: Monitor,
      skills: [
        { name: "HTML / CSS", level: "Avancé", percentage: 90 },
        { name: "JavaScript", level: "Avancé", percentage: 85 },
        { name: "ReactJS", level: "Avancé", percentage: 80 },
        { name: "Tailwind CSS", level: "Avancé", percentage: 90 },
        { name: "Sass / Bootstrap", level: "Intermédiaire", percentage: 72 },
      ],
    },
    {
      icon: Server,
      skills: [
        { name: "PHP (Laravel)", level: "Avancé", percentage: 90 },
        { name: "Python (Django)", level: "Avancé", percentage: 80 },
        { name: "Odoo", level: "Bases", percentage: 50 },
        { name: "XML", level: "Bases", percentage: 40 },
        { name: "Java", level: "Bases", percentage: 50 },
      ],
    },
    {
      icon: Smartphone,
      skills: [
        { name: "React Native", level: "Bases", percentage: 30 },
        { name: "Flutter", level: "Bases", percentage: 50 },
      ],
    },
    {
      icon: Database,
      skills: [
        { name: "MySQL", level: "Avancé", percentage: 80 },
        { name: "PostgreSQL", level: "Intermédiaire", percentage: 70 },
      ],
    },
    {
      icon: Terminal,
      skills: [
        { name: "Git / GitHub", level: "Avancé", percentage: 85 },
        { name: "Docker", level: "Intermédiaire", percentage: 60 },
        { name: "VS Code", level: "Avancé", percentage: 90 },
        { name: "Cursor", level: "Avancé", percentage: 85 },
      ],
    },
  ];


  const categories = rawCategories.map((cat, index) => ({
    ...cat,
    title: t.categories?.[index]?.title || "",
  }));

  // Découpage en 3 blocs en haut et 2 blocs en bas
  const topCategories = categories.slice(0, 3);
  const bottomCategories = categories.slice(3, 5);

  const renderCategoryCard = (cat, idx) => {
    const Icon = cat.icon;
    return (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 15 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.3, delay: idx * 0.08 }}
        className="bg-card/75 border border-border/60 backdrop-blur-md rounded-xl p-4 sm:p-5 flex flex-col gap-3.5 shadow-xs hover:border-primary/40 transition-all duration-300"
      >
        {/* En-tête de Catégorie */}
        <div className="flex items-center gap-2.5 border-b border-border/40 pb-3">
          <div className="p-1.5 rounded-lg bg-primary/10 text-primary shrink-0 border border-primary/20">
            <Icon className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-foreground text-xs md:text-sm">{cat.title}</h3>
        </div>

        {/* Liste des compétences */}
        <div className="flex flex-col gap-3">
          {cat.skills.map((skill, sIdx) => (
            <div key={sIdx} className="flex flex-col gap-1">
              {/* Nom + Badge Niveau */}
              <div className="flex justify-between items-center text-xs">
                <span className="font-medium text-foreground text-[11px] md:text-xs">
                  {skill.name}
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">
                  {skill.level}
                </span>
              </div>

              {/* Barre de progression fine */}
              <div className="w-full h-1 bg-muted rounded-full overflow-hidden border border-border/30">
                <motion.div
                  className="h-full bg-linear-to-r from-primary/80 to-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: isVisible ? `${skill.percentage}%` : 0 }}
                  transition={{ duration: 0.6, delay: 0.05 + sIdx * 0.04, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="stack"
      className="py-16 md:py-24 bg-muted/30 border-y border-border/60 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-6">

        {/* En-tête compact */}
        <div className="text-left mb-4">
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

        {/* Ligne 1 : 3 blocs en haut */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {topCategories.map((cat, idx) => renderCategoryCard(cat, idx))}
        </div>

        {/* Ligne 2 : 2 blocs en bas (centrés) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto w-full">
          {bottomCategories.map((cat, idx) => renderCategoryCard(cat, idx + 3))}
        </div>

      </div>
    </section>
  );
}
