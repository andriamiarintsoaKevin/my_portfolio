import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from "lucide-react";
import { translations } from "../translations";

export default function Academic({ lang = "fr" }) {
  const t = translations[lang]?.academic

  return (
    <section id="academic" className="relative py-20 transition-colors duration-300 overflow-hidden">

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* En-tête de section */}
        <div className="text-left mb-10">
          <div className="flex items-center gap-2">
            <span className="text-primary font-mono text-xs font-bold uppercase tracking-wider">
              {t.title}
            </span>
            <div className="w-8 h-0.5 bg-primary/80 rounded-full" />
          </div>
          <p className="text-muted-foreground max-w-xl text-xs md:text-sm mt-1.5">
            {t.subtitle}
          </p>
        </div>

        {/* Timeline Parcours Académique */}
        <div className="relative border-l-2 border-border/80 ml-5 md:ml-6 pl-6 max-[790px]:pl-4 flex flex-col gap-10">
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
                <div className={`absolute -left-6.5 md:-left-8.25 top-1.5 w-5 h-5 rounded-full border-2 flex items-center justify-center 
                transition-all duration-300 ${isInProgress
                    ? "bg-amber-500 border-amber-300 shadow-sm shadow-amber-500/20"
                    : "bg-primary border-background shadow-sm shadow-primary/20"
                  }`}>
                  <GraduationCap className="w-2.5 h-2.5 text-primary-foreground" />
                </div>

                {/* Carte de formation */}
                <div className="p-4 md:p-5 rounded-xl bg-card/80 border border-border/60 backdrop-blur-md shadow-xs hover:border-primary/50 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 flex flex-col gap-3">

                  {/* En-tête de la carte */}
                  <div className="flex flex-wrap items-start justify-between gap-2.5">
                    <div>
                      <h3 className="text-sm md:text-base font-bold text-foreground group-hover:text-primary transition-colors">
                        {item.degree}
                      </h3>
                      <p className="text-primary font-medium text-xs mt-0.5">
                        {item.institution}
                      </p>
                    </div>

                    {/* Badge de statut */}
                    {isInProgress ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/20 text-amber-500 border border-amber-500/30">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500" />
                        </span>
                        {t.labels.inProgress}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                        <CheckCircle2 className="w-3 h-3" />
                        {t.labels.completed}
                      </span>
                    )}
                  </div>

                  {/* Métadonnées : Période et Localisation */}
                  <div className="flex flex-wrap items-center gap-3 text-[11px] text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-primary" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-primary" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {item.description}
                  </p>

                  {/* Badges des compétences clés acquises */}
                  {item.skills && item.skills.length > 0 && (
                    <div className="pt-2.5 border-t border-border/50 flex flex-wrap gap-1.5 items-center">
                      <span className="text-[11px] text-muted-foreground font-semibold flex items-center gap-1 mr-1">
                        <Award className="w-3 h-3 text-primary" />
                        {t.labels.skills} :
                      </span>
                      {item.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded-md bg-muted/60 text-foreground text-[11px] font-medium border border-border/40"
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
