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
    <section id="about" className="py-20 max-w-6xl mx-auto px-6 transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Texte de présentation */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-7 flex flex-col gap-6"
        >
          <div className="flex items-center gap-3">
            <span className="text-primary font-mono text-sm font-bold uppercase tracking-wider">
              {t.badge}
            </span>
            <div className="w-8 h-0.5 bg-primary/80 rounded-full" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            {t.title}
          </h2>

          <p className="text-foreground/90 leading-relaxed text-base md:text-lg">
            {t.paragraph1}
          </p>

          <p className="text-muted-foreground leading-relaxed text-base">
            {t.paragraph2}
          </p>
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
              <div 
                key={index} 
                className="p-5 rounded-xl bg-card/70 border border-border/60 backdrop-blur-xs flex gap-4 items-start shadow-xs transition-all hover:border-primary/40 hover:shadow-md"
              >
                {/* Icône avec badge teinté de la couleur primaire */}
                <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-foreground font-bold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
