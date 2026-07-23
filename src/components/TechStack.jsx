import { motion } from "framer-motion";
import { Monitor, Server, Database, Terminal } from "lucide-react";

export default function TechStack() {
  const categories = [
    {
      title: "Front-End",
      icon: Monitor,
      skills: ["HTML", "CSS", "JavaScript", "ReactJS", "Tailwind CSS", "Sass", "Bootstrap"],
    },
    {
      title: "Back-End",
      icon: Server,
      skills: ["PHP (Laravel)", "Python (Django)", "Java"],
    },
    {
      title: "Base de données",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "Supabase"],
    },
    {
      title: "DevOps & Outils",
      icon: Terminal,
      skills: ["Git", "GitHub", "Docker", "Vite", "VS Code"],
    },
  ];

  return (
    <section id="stack" className="py-20 bg-[#090d14]/60 border-y border-gray-800/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stack Technique</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Les outils et technologies que j'utilise au quotidien pour concevoir des applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-gray-900/40 border border-gray-800 rounded-xl p-6 flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#FF5533]/10 text-[#FF5533]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white text-lg">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-md bg-gray-800/80 border border-gray-700/50 text-gray-300 text-xs font-medium hover:border-[#FF5533]/50 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
