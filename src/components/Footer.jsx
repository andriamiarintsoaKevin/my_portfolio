import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { translations } from "@/translations";

const GithubIcon = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const LinkedinIcon = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);


export default function Footer({ lang = "fr" }) {
    const t = translations[lang].footer;

    const socialLinks = [
        {
            name: "GitHub",
            href: "https://github.com",
            icon: GithubIcon,
        },
        {
            name: "LinkedIn",
            href: "https://linkedin.com",
            icon: LinkedinIcon,
        },
        {
            name: "Email",
            href: "mailto:andriamiarintsoatsilavinakevin@gmail.com",
            icon: Mail,
        },
    ];

    const quickLinks = [
        { name: t.nav.home, href: "#hero" },
        { name: t.nav.about, href: "#about" },
        { name: t.nav.academic, href: "#academic" },
        { name: t.nav.skills, href: "#stack" },
        { name: t.nav.projects, href: "#projects" },
    ];

    return (
        <footer className="relative transition-colors border-t border-border/60 backdrop-blur-md pt-12 pb-6 duration-300">
            <div className="max-w-6xl mx-auto px-6">
                {/* Grille principale du Footer */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-border/60">

                    {/* Section Branding / Presentation */}
                    <div className="md:col-span-5 flex flex-col gap-3">
                        <a href="#hero" className="flex items-center gap-2 text-base md:text-lg font-bold text-foreground tracking-wide w-fit">
                            <div className="flex items-center justify-center p-0.5 text-primary transition-transform duration-300 group-hover:scale-105">
                                <img
                                    src="/img/logo.png"
                                    alt="Logo Andriamiarintsoa"
                                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-9 md:h-9 object-contain bg-transparent"
                                />
                            </div>
                            <span>
                                Andriamiarintsoa<span className="text-primary font-mono">.dev</span>
                            </span>
                        </a>
                        <p className="text-muted-foreground text-xs leading-relaxed max-w-sm">
                            {t.description}
                        </p>

                        {/* Localisation & Disponibilité */}
                        <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground pt-0.5">
                            <MapPin className="w-3 h-3 text-primary shrink-0" />
                            <span>Antananarivo, Madagascar</span>
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 ml-1.5 animate-pulse" />
                            <span className="text-emerald-500 font-medium">
                                {t.available}
                            </span>
                        </div>
                    </div>

                    {/* Liens Rapides */}
                    <div className="md:col-span-3 flex flex-col gap-2.5">
                        <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-foreground">
                            {t.navTitle}
                        </h4>
                        <ul className="flex flex-col gap-1.5 text-xs">
                            {quickLinks.map((link, idx) => (
                                <li key={idx}>
                                    <a
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-1 group"
                                    >
                                        <span>{link.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contacts & Réseaux Sociaux */}
                    <div className="md:col-span-4 flex flex-col gap-3">
                        <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-foreground">
                            {t.connectTitle}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                            {t.connectText}
                        </p>

                        {/* Boutons Réseaux Sociaux */}
                        <div className="flex items-center gap-2 pt-0.5 flex-wrap">
                            {socialLinks.map((social, idx) => {
                                const Icon = social.icon;
                                return (
                                    <Button
                                        key={idx}
                                        variant="outline"
                                        size="sm"
                                        className="h-7 px-2.5 border-border/80 bg-background/50 hover:bg-primary/10 hover:border-primary/40 text-foreground gap-1.5 transition-all rounded-lg text-[11px]"
                                        render={
                                            <a href={social.href} target="_blank" rel="noreferrer">
                                                <Icon className="w-3.5 h-3.5 text-primary" />
                                                <span>{social.name}</span>
                                                <ArrowUpRight className="w-2.5 h-2.5 text-muted-foreground" />
                                            </a>
                                        }
                                    >

                                    </Button>
                                );
                            })}
                        </div>
                    </div>

                </div>

                {/* Bas de page / Copyright */}
                <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-muted-foreground">
                    <p>
                        © {new Date().getFullYear()} Andriamiarintsoa. {t.rights}
                    </p>

                    <p className="flex items-center gap-1 text-muted-foreground/80">
                        {t.builtWith} React & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}
