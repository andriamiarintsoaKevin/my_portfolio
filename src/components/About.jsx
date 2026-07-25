import { motion } from "framer-motion";
import { UserCheck, Users, Rocket } from "lucide-react";
import { translations } from "../translations";

export default function About({ lang = "fr" }) {
  const t = translations[lang].about;

  // Association des icônes avec les textes traduits
  const icons = [UserCheck, Users, Rocket];
  const highlights = t.highlights.map((item, index) => ({
    ...item,
    icon: icons[index],
  }));

  return (
    <section id="about" className="relative py-24 max-w-6xl mx-auto px-6 transition-colors duration-300 overflow-hidden">
      {/* Cercle lumineux d'arrière-plan */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center relative z-10">

        {/* Texte de présentation */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-7 flex flex-col gap-5"
        >
          <div className="flex items-center gap-2">
            <span className="text-primary font-mono text-xs font-bold uppercase tracking-wider">
              {t.title}
            </span>
            <div className="w-8 h-0.5 bg-primary/80 rounded-full" />
          </div>

          <p className="text-foreground/90 leading-relaxed text-sm md:text-base">
            {t.paragraph1}
          </p>

          <p className="text-muted-foreground leading-relaxed text-xs md:text-sm">
            {t.paragraph2}
          </p>

          {/* Section Langues */}
          {t.languages && (
            <div className="pt-3 border-t border-border/60">
              <h4 className="text-xs font-semibold text-foreground mb-2.5 uppercase tracking-wider font-mono">
                {t.JeParle}
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {t.languages.map((langItem, idx) => (
                  <div key={idx} className="px-2.5 py-1 rounded-md bg-card border border-border/80 text-[11px]">
                    <span className="font-bold text-foreground">{langItem.name} : </span>
                    <span className="text-muted-foreground">{langItem.level}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Atouts clés */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-5 flex flex-col gap-3.5"
        >
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-xl bg-card/80 border border-border/60 backdrop-blur-sm flex gap-3.5 items-start shadow-xs transition-all hover:border-primary/50 hover:shadow-md hover:shadow-primary/5"
              >
                {/* Icône avec badge */}
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0 shadow-inner">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-foreground font-bold mb-0.5 text-xs md:text-sm">{item.title}</h3>
                  <p className="text-muted-foreground text-[11px] md:text-xs leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
