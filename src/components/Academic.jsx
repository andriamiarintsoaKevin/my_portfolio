import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from "lucide-react";
import { translations } from "../translations";

export default function Academic({ lang = "fr" }) {
  const t = translations[lang]?.academic

  return (
    <section id="academic" className="relative py-28 transition-colors duration-300 overflow-hidden">

      <div className="max-w-5xl mx-auto px-6 relative z-10">
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

        {/* Timeline Parcours Académique */}
        <div className="relative border-l-2 border-border/80 ml-6 md:ml-8 pl-7 max-[790px]:pl-5 flex flex-col gap-14">
          {t.items.map((item, index) => {
            const isInProgress = item.status === "in-progress";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`absolute -left-7.75 md:-left-9.75 top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center 
                transition-all duration-300 ${isInProgress
                    ? "bg-amber-500 border-amber-300 shadow-md shadow-amber-500/20"
                    : "bg-primary border-background shadow-md shadow-primary/20"
                  }`}>
                  <GraduationCap className="w-3 h-3 text-primary-foreground" />
                </div>

                {/* Carte de formation */}
                <div className="p-6 rounded-2xl bg-card/80 border border-border/60 backdrop-blur-md shadow-xs hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col gap-4">

                  {/* En-tête de la carte */}
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {item.degree}
                      </h3>
                      <p className="text-primary font-medium text-sm mt-0.5">
                        {item.institution}
                      </p>
                    </div>

                    {/* Badge de statut */}
                    {isInProgress ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-500 border border-amber-500/30">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                        </span>
                        {t.labels.inProgress}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {t.labels.completed}
                      </span>
                    )}
                  </div>

                  {/* Métadonnées : Période et Localisation */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Badges des compétences clés acquises */}
                  {item.skills && item.skills.length > 0 && (
                    <div className="pt-3 border-t border-border/50 flex flex-wrap gap-2 items-center">
                      <span className="text-xs text-muted-foreground font-semibold flex items-center gap-1 mr-1">
                        <Award className="w-3.5 h-3.5 text-primary" />
                        {t.labels.skills} :
                      </span>
                      {item.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-0.5 rounded-md bg-muted/60 text-foreground text-xs font-medium border border-border/40"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
