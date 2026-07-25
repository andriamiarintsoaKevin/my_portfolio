import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm({ t = {} }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'

  // Gestion propre du timer pour effacer le message de succès sans Memory Leak
  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => setStatus("idle"), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formspreeId = import.meta.env.VITE_FORMSPREE_ID || "YOUR_FORMSPREE_ID";

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {/* Champ Nom */}
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={t.namePlaceholder || "Votre nom"}
          required
          disabled={status === "loading"}
          className="h-9 text-xs bg-card/70 border-border/80 text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-primary"
        />

        {/* Champ Email */}
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={t.emailPlaceholder || "Votre email"}
          required
          disabled={status === "loading"}
          className="h-9 text-xs bg-card/70 border-border/80 text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-primary"
        />
      </div>

      {/* Champ Message */}
      <Textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder={t.messagePlaceholder || "Votre message..."}
        rows={4}
        required
        disabled={status === "loading"}
        className="text-xs bg-card/70 border-border/80 text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-primary resize-none"
      />

      {/* Zone de retours visuels (Accessibilité & Multilingue) */}
      <div aria-live="polite" className="space-y-1.5">
        {status === "success" && (
          <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs flex items-center gap-2 animate-in fade-in slide-in-from-top-1">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
            <span>{t.successMsg || "Message envoyé avec succès ! Je vous répondrai très vite."}</span>
          </div>
        )}

        {status === "error" && (
          <div className="p-2.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 text-xs flex items-center gap-2 animate-in fade-in slide-in-from-top-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{t.errorMsg || "Une erreur s'est produite. Veuillez réessayer plus tard."}</span>
          </div>
        )}
      </div>

      {/* Bouton d'envoi */}
      <Button
        type="submit"
        size="sm"
        disabled={status === "loading"}
        className="h-9 px-4 text-xs bg-primary hover:bg-primary/90 text-primary-foreground gap-1.5 shadow-md shadow-primary/20 w-full md:w-auto self-start transition-all hover:shadow-primary/30 active:scale-95 disabled:opacity-70 cursor-pointer disabled:cursor-not-allowed rounded-lg"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
            <span>{t.sendingBtn || "Envoi en cours..."}</span>
          </>
        ) : (
          <>
            <Send className="w-3.5 h-3.5" />
            <span>{t.sendBtn || "Envoyer"}</span>
          </>
        )}
      </Button>
    </form>
  );
}
