import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30 border-t border-border/60">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Titre et description */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Me Contacter
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Un projet en tête ou une opportunité d'embauche ? N'hésitez pas à me laisser un message.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Infos de contact direct */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 flex flex-col gap-6"
          >
            <div className="p-6 rounded-xl bg-card/60 border border-border/60 backdrop-blur-sm flex flex-col gap-6 shadow-xs">
              <h3 className="text-xl font-bold text-foreground">Coordonnées</h3>
              
              <div className="flex items-center gap-4 text-foreground">
                <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email professionnel</p>
                  <a 
                    href="mailto:jensen.dev@example.com" 
                    className="hover:text-primary transition-colors font-medium text-foreground"
                  >
                    jensen.dev@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-foreground">
                <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Localisation</p>
                  <p className="font-medium text-foreground">Paris, France (Disponible en remote)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulaire de Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-7"
          >
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Votre nom"
                  className="bg-card/50 border-border text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-primary"
                />
                <Input
                  type="email"
                  placeholder="Votre email"
                  className="bg-card/50 border-border text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-primary"
                />
              </div>

              <Textarea
                placeholder="Votre message..."
                rows={5}
                className="bg-card/50 border-border text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-primary"
              />

              <Button 
                type="submit" 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 shadow-lg shadow-primary/20 w-full md:w-auto self-start"
              >
                <Send className="w-4 h-4" /> Envoyer le message
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
