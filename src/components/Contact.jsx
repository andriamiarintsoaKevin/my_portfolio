import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { translations } from "../translations";
import ContactForm from "./ContactForm";
export default function Contact({ lang = "fr" }) {
  const t = translations[lang].contact;

  return (
    <section id="contact" className="py-20 bg-muted/30 border-t border-border/60 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">

        {/* Titre et description */}
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

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Infos de contact direct */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 flex flex-col gap-5"
          >
            <div className="p-5 rounded-xl bg-card/70 border border-border/60 backdrop-blur-xs flex flex-col gap-5 shadow-xs">
              <h3 className="text-sm md:text-base font-bold text-foreground">{t.coordinatesTitle}</h3>

              {/* Email */}
              <div className="flex items-center gap-3.5 text-foreground">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-muted-foreground">{t.emailLabel}</p>
                  <a
                    href="mailto:andriamiarintsoatsilavinakevin@gmail.com"
                    className="hover:text-primary transition-colors font-medium text-xs text-foreground break-all"
                  >
                    andriamiarintsoatsilavinakevin@gmail.com
                  </a>
                </div>
              </div>

              {/* Localisation */}
              <div className="flex items-center gap-3.5 text-foreground">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-muted-foreground">{t.locationLabel}</p>
                  <p className="font-medium text-xs text-foreground">{t.locationValue}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulaire de Contact externe */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-7"
          >
            <ContactForm t={t} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
