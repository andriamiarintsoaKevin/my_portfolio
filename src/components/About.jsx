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
    <section id="about" className="relative py-28 max-w-6xl mx-auto px-6 transition-colors duration-300 overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-75 h-75 bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">

        {/* Texte de présentation */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-7 flex flex-col gap-6"
        >
          <div className="flex items-center gap-2">
            <span className="text-primary font-mono text-sm font-bold uppercase tracking-wider">
              {t.title}
            </span>
            <div className="w-8 h-0.5 bg-primary/80 rounded-full" />
          </div>

          <p className="text-foreground/90 leading-relaxed text-base md:text-lg">
            {t.paragraph1}
          </p>

          <p className="text-muted-foreground leading-relaxed text-base">
            {t.paragraph2}
          </p>

          {/* SECTION LANGUES AJOUTÉE ICI */}
          {t.languages && (
            <div className="pt-4 border-t border-border/60">
              <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider font-mono">
                {t.JeParle}
              </h4>
              <div className="flex flex-wrap gap-3">
                {t.languages.map((langItem, idx) => (
                  <div key={idx} className="px-3 py-1.5 rounded-lg bg-card border border-border/80 text-xs">
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
          className="md:col-span-5 flex flex-col gap-4"
        >
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-5 rounded-xl bg-card/80 border border-border/60 backdrop-blur-sm flex gap-4 items-start shadow-xs transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Icône avec badge teinté de la couleur primaire */}
                <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0 shadow-inner">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-foreground font-bold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
