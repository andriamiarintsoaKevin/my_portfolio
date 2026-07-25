export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      projects: "Projets",
      stack: "Compétences",
      about: "À propos",
      contact: "Contact",
      btnContact: "Me contacter",
      academic: "Parcours"
    },
    hero: {
      greeting: "Bonjour, je suis Kevin",
      role: "Développeur",
      stack: "Full Stack",
      pitch: "Je conçois des applications web et mobiles performantes et sur mesure. De la structuration des bases de données jusqu'à l'expérience utilisateur, je donne vie à vos idées.",
      btnProjects: "Découvrir mes projets",
      btnCv: "Télécharger mon CV",
      roles: [
        "Développeur Full Stack",
        "Architecte Bases de Données",
        "Concepteur d'Applications",
        "Analyste Développeur"
      ],
    },
    about: {
      badge: "Culture & Profil",
      title: "À propos de moi",
      paragraph1: "Titulaire d'une Licence en Informatique, orienté vers le développement web et mobile, j'aime résoudre des problèmes complexes et mettre mes compétences numériques au service de projets à fort impact socio-économique.",
      paragraph2: "À mes yeux, le développement va bien au-delà des lignes de code. Il s'agit avant tout de comprendre les besoins du client, de communiquer efficacement avec l'équipe et d'architecturer des solutions pérennes, véritablement pensées pour l'utilisateur final.",
      highlights: [
        { title: "Autonomie & Rigueur", desc: "Je pilote les projets de A à Z, depuis la conception architecturale jusqu'au déploiement en production." },
        { title: "Esprit d'Équipe", desc: "Je privilégie une communication fluide et une collaboration transparente au sein d'équipes pluridisciplinaires." },
        { title: "Veille Technologique", desc: "J'explore constamment de nouveaux outils pour intégrer les meilleures pratiques du marché à mon travail." },
      ],
      languagesTitle: "Compétences Linguistiques",
      JeParle: "Langues parlées",
      languages: [
        { name: "Malagasy", level: "Langue maternelle" },
        { name: "Français", level: "Maitrise professionnelle" },
        { name: "Anglais", level: "Compréhension téchnique" }
      ]
    },
    contact: {
      title: "Prenons Contact",
      subtitle: "Vous avez un projet ambitieux, une idée de collaboration ou une opportunité professionnelle ? Discutons-en !",
      coordinatesTitle: "Coordonnées",
      emailLabel: "Email professionnel",
      locationLabel: "Localisation",
      locationValue: "Antananarivo, Madagascar",
      namePlaceholder: "Votre nom complet",
      emailPlaceholder: "Votre adresse email",
      messagePlaceholder: "Parlez-moi un peu de votre projet ou de votre demande...",
      sendBtn: "Envoyer le message",
    },
    projects: {
      title: "Projets Récents",
      subtitle: "Voici une sélection de mes réalisations professionnelles et académiques, illustrant mon savoir-faire technique.",
      labels: {
        front: "Frontend",
        back: "Backend",
        db: "Base de données",
        code: "Code source",
        demo: "Démo en ligne",
      },
      items: [
        {
          title: "Application de Recensement",
          pitch: "Conception et développement d'une application web pour le Ministère du Travail (Laravel & ReactJS) avec intégration d'un assistant IA (API Gemini).",
        },
        {
          title: "Gestion des Bulletins de Note",
          pitch: "Projet académique de mise en place d'un système de gestion des notes scolaires, développé avec Laravel et Bootstrap.",
        },
        {
          title: "Personnalisation Module Odoo",
          pitch: "Adaptation sur mesure du module Employés sous Odoo (Python, XML) dans le cadre de mon parcours académique.",
        },
      ],
    },
    techStack: {
      title: "Stack Technique",
      subtitle: "Les technologies, langages et outils que j'exploite au quotidien pour bâtir des solutions fiables.",
      categories: [
        { title: "Front-End" },
        { title: "Back-End" },
        { title: "Mobile" },
        { title: "Bases de Données" },
        { title: "DevOps & Outils" },
      ],
    },
    academic: {
      title: "Formation & Diplômes",
      subtitle: "Mon parcours académique, incluant mes diplômes et mes certifications professionnelles.",
      labels: {
        inProgress: "En cours",
        completed: "Obtenu",
        skills: "Compétences clés",
      },
      items: [
        {
          degree: "Master 1 en Informatique",
          institution: "IS-INFO (Institut Supérieur d'Informatique)",
          location: "Ampasamadinika, Antananarivo",
          period: "Présent",
          status: "in-progress",
          description: "Poursuite d'études supérieures en informatique, approfondissement de l'ingénierie logicielle et des architectures système.",
          skills: [],
        },
        {
          degree: "Licence Professionnelle en Informatique",
          institution: "IS-INFO (Institut Supérieur d'Informatique)",
          location: "Ampasamadinika, Antananarivo",
          period: "2023 - 2026",
          status: "completed",
          description: "Obtenue avec la mention Très Bien.",
          skills: ["Architecture logicielle", "Développement Web", "Gestion de projet", "Modélisation"],
        },
        {
          degree: "Baccalauréat Série D",
          institution: "LMA (Lycée Moderne Ampefiloha)",
          location: "Antananarivo, Madagascar",
          period: "2021",
          status: "completed",
          description: "Obtenu avec la mention Assez Bien.",
          skills: [],
        },
      ],
    },
    footer: {
      description: "Développeur Full Stack passionné, dédié à la création d'expériences digitales modernes, rapides et intuitives.",
      available: "Ouvert à de nouvelles opportunités",
      navTitle: "Navigation rapide",
      connectTitle: "Restons en contact",
      connectText: "Vous cherchez à concrétiser un projet ou à renforcer votre équipe ? N'hésitez pas à m'écrire.",
      rights: "Tous droits réservés.",
      builtWith: "Conçu avec",
      nav: {
        home: "Accueil",
        projects: "Projets",
        skills: "Compétences",
        about: "À propos",
        academic: "Parcours",
      }
    },
  },

  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      stack: "Skills",
      about: "About",
      contact: "Contact",
      btnContact: "Get in touch",
      academic: "Education"
    },
    hero: {
      greeting: "Hi, I'm Kevin",
      role: "Full Stack",
      stack: "Developer",
      pitch: "I design and build high-performance, custom web and mobile apps. From robust database architectures to seamless user experiences, I turn complex challenges into elegant solutions.",
      btnProjects: "View My Work",
      btnCv: "Download Resume",
      roles: [
        "Full Stack Developer",
        "Database Architect",
        "Software Designer",
        "Systems Analyst"
      ],
    },
    about: {
      badge: "Culture & Mindset",
      title: "About Me",
      paragraph1: "Holding a Degree in Computer Science with a strong focus on web and mobile development, I love solving complex problems and applying my digital skills to high-impact projects.",
      paragraph2: "To me, being a great developer is about much more than just writing code. It's about truly understanding the product, communicating effectively with the team, and engineering sustainable solutions with the end-user in mind.",
      highlights: [
        { title: "Ownership & Precision", desc: "I take full ownership of projects, driving them from early architectural concepts all the way to production deployment." },
        { title: "Team Player", desc: "I value clear communication and believe that great software is built through transparent, cross-functional collaboration." },
        { title: "Continuous Growth", desc: "I am constantly exploring new technologies to ensure I bring modern, industry-standard practices to my work." },
      ],
      languagesTitle: "Language Proficiency",
      JeParle: "Languages Spoken",
      languages: [
        { name: "Malagasy", level: "Native" },
        { name: "French", level: "Intermediate" },
        { name: "English", level: "Intermediate" }
      ]
    },
    contact: {
      title: "Let's Connect",
      subtitle: "Do you have an ambitious project in mind, a partnership, or a job opportunity? Let's talk about it!",
      coordinatesTitle: "Contact Details",
      emailLabel: "Professional Email",
      locationLabel: "Location",
      locationValue: "Antananarivo, Madagascar",
      namePlaceholder: "Your Full Name",
      emailPlaceholder: "Your Email Address",
      messagePlaceholder: "Tell me a bit about your project or inquiry...",
      sendBtn: "Send Message",
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Take a look at a curated selection of my professional and academic work, showcasing my technical expertise.",
      labels: {
        front: "Frontend",
        back: "Backend",
        db: "Database",
        code: "Source Code",
        demo: "Live Demo",
      },
      items: [
        {
          title: "Census Web Application",
          pitch: "Design and development of a census web app for the Ministry of Labor (Laravel & ReactJS) integrating an AI assistant (Gemini API).",
        },
        {
          title: "Grade Report Management",
          pitch: "Academic project implementing a school grading management system using Laravel and Bootstrap.",
        },
        {
          title: "Odoo Employee Module Customization",
          pitch: "Custom tailoring of the Employee module under Odoo (Python, XML) as part of my academic coursework.",
        },
      ],
    },
    techStack: {
      title: "Tech Stack",
      subtitle: "The core technologies, languages, and tools I rely on daily to build scalable and resilient applications.",
      categories: [
        { title: "Front-End" },
        { title: "Back-End" },
        { title: "Mobile" },
        { title: "Databases" },
        { title: "DevOps & Tools" },
      ],
    },
    academic: {
      title: "Education & Background",
      subtitle: "A timeline of my academic journey, technical degrees, and professional certifications.",
      labels: {
        inProgress: "In Progress",
        completed: "Graduated",
        skills: "Key Competencies",
      },
      items: [
        {
          degree: "Master 1 in Computer Science",
          institution: "IS-INFO (Institut Supérieur d'Informatique)",
          location: "Ampasamadinika, Antananarivo",
          period: "2023 - Present",
          status: "in-progress",
          description: "Advanced graduate studies in computer science, focusing on software engineering and system architecture.",
          skills: ["Software Architecture", "Web Development", "Project Management"],
        },
        {
          degree: "Professional Bachelor's Degree in Computer Science",
          institution: "IS-INFO (Institut Supérieur d'Informatique)",
          location: "Ampasamadinika, Antananarivo",
          period: "2023 - 2026",
          status: "completed",
          description: "Graduated with High Honors (Mention: Très Bien). Focused on web and mobile development and data management.",
          skills: ["Laravel", "ReactJS", "MySQL", "PostgreSQL"],
        },
        {
          degree: "High School Diploma (Series D)",
          institution: "LMA (Lycée Moderne Ampefiloha)",
          location: "Antananarivo, Madagascar",
          period: "2021",
          status: "completed",
          description: "Obtained with Honors (Mention: Assez Bien).",
          skills: ["Sciences", "Mathematics", "Analytical Skills"],
        },
      ],
    },
    footer: {
      description: "A passionate Full Stack Developer dedicated to engineering modern, performant, and highly intuitive digital experiences.",
      available: "Currently open to new opportunities",
      navTitle: "Quick Links",
      connectTitle: "Let's Talk",
      connectText: "Looking to bring an idea to life or need a solid developer for your team? Don't hesitate to reach out.",
      rights: "All rights reserved.",
      builtWith: "Built with",
      nav: {
        home: "Home",
        projects: "Projects",
        skills: "Skills",
        about: "About",
        academic: "Education",
      }
    },
  },

  mlg: {
    nav: {
      home: "Fandraisana",
      projects: "Tetikasa",
      stack: "Fahaizana",
      about: "Momba ahy",
      contact: "Fifandraisana",
      btnContact: "Hifandray amiko",
      academic: "Fianarana"
    },
    hero: {
      greeting: "Miarahaba, Kevin aho",
      role: "Mpamolavola",
      stack: "Full Stack",
      pitch: "Mamorona fampiharana web sy finday avo lenta aho, natao hifanaraka indrindra amin'izay ilainao. Miainga avy amin'ny firafitry ny angon-drakitra ka hatramin'ny endrika ivelany, dia mikatsaka ny tsara indrindra aho ho an'ny mpampiasa.",
      btnProjects: "Hijery ireo asako",
      btnCv: "Haka ny CV",
      roles: [
        "Mpamolavola Full Stack",
        "Arsitekta Angon-drakitra",
        "Mpamorona Fampiharana",
        "Mpanadihady sy Mpamolavola"
      ],
    },
    about: {
      badge: "Kolontsaina & Mombamomba",
      title: "Momba ahy",
      paragraph1: "Manana Licence amin'ny tontolon'ny informatika, mifantoka indrindra amin'ny famolavolana tranonkala sy finday aho, tia mamaha olana sarotra ary vonona hampiasa ny fahaizako hanatsarana tetikasa manana lanjany.",
      paragraph2: "Amiko, ny fanaovana 'développement' tsy mionona fotsiny amin'ny fanoratana kaody. Tafiditra ao anatin'izany ihany koa ny fahatakarana ny filàna, ny fifandraisana tsara amin'ny mpiara-miasa, ary indrindra ny famoronana vahaolana maharitra sy mora ampiasaina.",
      highlights: [
        { title: "Mahaleotena & Marimarina", desc: "Mandray an-tanana feno ny tetikasa aho, manomboka any amin'ny famolavolana ka hatramin'ny fametrahana azy amin'ny sehatra ofisialy." },
        { title: "Fahaizana miara-miasa", desc: "Mino aho fa ny fifandraisana mazava no fototry ny fahombiazana rehefa miara-miasa anatin'ny ekipa samihafa." },
        { title: "Fianarana mitohy", desc: "Tsy mitsahatra mikaroka sy mianatra teknolojia vaovao aho mba hanatsarana hatrany ny fomba fiasako." },
      ],
      languagesTitle: "Fahaizana Teny",
      JeParle: "Teny ampiasaina",
      languages: [
        { name: "Malagasy", level: "Tenin-dreny" },
        { name: "Frantsay", level: "Mahay antonony" },
        { name: "Anglisy", level: "Mahay antonony" }
      ]
    },
    contact: {
      title: "Andao hifandray",
      subtitle: "Manana tetikasa vaovao, soso-kevitra fiaraha-miasa, sa tolotra asa? Aza misalasala mifandray amiko fa vonona aho ny hifampiresaka aminao!",
      coordinatesTitle: "Mombamomba ahy",
      emailLabel: "Adiresy imailaka",
      locationLabel: "Toerana",
      locationValue: "Antananarivo, Madagasikara",
      namePlaceholder: "Ny anaranao feno",
      emailPlaceholder: "Ny adiresy imailakao",
      messagePlaceholder: "Hazavao eto amin'ny fohy ny tetikasanao na ny fanontanianao...",
      sendBtn: "Alefaso ny hafatra",
    },
    projects: {
      title: "Tetikasa farany",
      subtitle: "Indreto misy santionany amin'ireo asa vitako, maneho ny fahaiza-tekniro amin'ny famolavolana rafitra sy endrika ivelany.",
      labels: {
        front: "Frontend",
        back: "Backend",
        db: "Angon-drakitra",
        code: "Kaody",
        demo: "Andrana mivantana",
      },
      items: [
        {
          title: "Fampiharana Fisoratana Anarana (Recensement)",
          pitch: "Famolavolana sy fananganana tranonkala ho an'ny Ministeran'ny Asa (Laravel & ReactJS) miaraka amin'ny fampidirana mpanampy ara-tsaina (API Gemini).",
        },
        {
          title: "Fitantanana Bulletin de Note",
          pitch: "Tetikasa akademika amin'ny famoronana rafitra fitantanana naoty ampiasana Laravel sy Bootstrap.",
        },
        {
          title: "Fanaingoana ny Module Odoo",
          pitch: "Fanatsarana manokana ny module Mpiasa ao amin'ny Odoo (Python, XML) nandritra ny fianarana.",
        },
      ],
    },
    techStack: {
      title: "Fitaovana & Teknolojia",
      subtitle: "Ireo fitaovana, fiteny ary teknolojia ampiasako isan'andro mba hananganana fampiharana matanjaka sy tsy mety simba.",
      categories: [
        { title: "Front-End" },
        { title: "Back-End" },
        { title: "Mobile" },
        { title: "Angon-drakitra" },
        { title: "DevOps & Fitaovana" },
      ],
    },
    academic: {
      title: "Fianarana sy Diplaoma",
      subtitle: "Ito ny famintinana ny lalam-piofanako, ny diplaoma azoko ary ireo fanamarinana arak'asa izay ananako.",
      labels: {
        inProgress: "Am-panatanterahana",
        completed: "Nahazo diplaoma",
        skills: "Fahaizana fototra",
      },
      items: [
        {
          degree: "Master 1 amin'ny Informatique",
          institution: "IS-INFO (Institut Supérieur d'Informatique)",
          location: "Ampasamadinika, Antananarivo",
          period: "2023 - Ankehitriny",
          status: "in-progress",
          description: "Fanohizana ny fianarana ambony momba ny informatika, indrindra ny lafiny rafitra rindrambaiko (architecture logicielle).",
          skills: ["Rafitra rindrambaiko", "Fampandrosoana Web", "Fitantanana tetikasa"],
        },
        {
          degree: "Licence Professionnelle amin'ny Informatique",
          institution: "IS-INFO (Institut Supérieur d'Informatique)",
          location: "Ampasamadinika, Antananarivo",
          period: "2023 - 2026",
          status: "completed",
          description: "Tafita tamin'ny marimaritra ambony (Mention : Très Bien). Nifantoka tamin'ny fampandrosoana web sy angon-drakitra.",
          skills: ["Laravel", "ReactJS", "MySQL", "PostgreSQL"],
        },
        {
          degree: "Baccalauréat Série D",
          institution: "LMA (Lycée Moderne Ampefiloha)",
          location: "Antananarivo, Madagasikara",
          period: "2021",
          status: "completed",
          description: "Voaray tamin'ny marimaritra tsara (Mention: Assez Bien).",
          skills: ["Siansa", "Matematika", "Fifehezana"],
        },
      ],
    },
    footer: {
      description: "Mpamolavola Full Stack manana fientanam-po amin'ny famoronana sehatra nomerika maoderina, haingana ary mora ampiasaina ho an'ny rehetra.",
      available: "Azo raisina ho an'ny tetikasa vaovao",
      navTitle: "Fizahavana haingana",
      connectTitle: "Andao hifandray",
      connectText: "Manana hevitra tiana hotanterahina na mila mpamolavola ao amin'ny ekipanao? Aza misalasala manoratra amiko.",
      rights: "Zo rehetra voaaro.",
      builtWith: "Novolavolaina tamin'ny",
      nav: {
        home: "Fandraisana",
        projects: "Tetikasa",
        skills: "Fahaizana",
        about: "Momba ahy",
        academic: "Fianarana",
      }
    },
  },
};
