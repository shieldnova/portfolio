export const portfolioData = {
  hero: {
    name: "NELAPATI SATHYA SWAROOP",
    title: "Full Stack Developer | React & Next.js Specialist | AI Integration",
    location: "Andhra Pradesh, India",
    email: "sathyaswarsfedsgzdgsdg@gmail.com",
    phone: "+91 1245678910",
    linkedin: "https://linkedin.com/in/sathya-swaroop-n",
    github: "https://github.com/",
  },
  about: {
    experience: "2+",
    highlights: [
      "React, Next.js, React Native",
      "AI/ML integrations",
      "NestJS + PostgreSQL backend"
    ],
    description: "Highly skilled Full Stack Developer with over 2 years of experience building scalable, high-performance web and mobile applications. Proficient in modern frontend framekworks like React and Next.js, and backend technologies including NestJS and PostgreSQL. Experienced in integrating cutting-edge AI/ML solutions into production-ready platforms."
  },
  skills: [
    {
      category: "Languages", items: [
        { name: "C", icon: "/projects/svg/icons8-c-programming.svg" },
        { name: "Java", icon: "/projects/svg/icons8-java.svg" },
        { name: "Python", icon: "/projects/svg/python-svgrepo-com.svg" },
        { name: "JavaScript", icon: "/projects/svg/javascript-logo-svgrepo-com.svg" },
        { name: "TypeScript", icon: "/projects/svg/typescript-icon-svgrepo-com.svg" },
        { name: "HTML5", icon: "/projects/svg/html-5-svgrepo-com.svg" },
        { name: "CSS3", icon: "/projects/svg/css-3-svgrepo-com.svg" }
      ]
    },
    {
      category: "Frontend", items: [
        { name: "React", icon: "/projects/svg/react-svgrepo-com.svg" },
        { name: "Next.js", icon: "/projects/svg/nextjs-fill-svgrepo-com.svg" },
        { name: "Tailwind CSS", icon: "/projects/svg/tailwind-svgrepo-com.svg" },
        { name: "Vite", icon: "/projects/svg/Vite.js.svg" },
        { name: "Framer Motion", icon: "/projects/svg/framer-svgrepo-com.svg" }
      ]
    },
    {
      category: "Backend", items: [
        { name: "NestJS", icon: "/projects/svg/nestjs-svgrepo-com.svg" },
        { name: "Node.js", icon: "" },
        { name: "MongoDB", icon: "/projects/svg/mongodb-logo-svgrepo-com.svg" },
        { name: "PostgreSQL", icon: "/projects/svg/postgresql-logo-svgrepo-com.svg" },
        { name: "Prisma", icon: "/projects/svg/prisma-svgrepo-com.svg" }
      ]
    },
    {
      category: "Tools", items: [
        { name: "Git", icon: "/projects/svg/git-svgrepo-com.svg" },
        { name: "Postman", icon: "/projects/svg/postman-icon-svgrepo-com.svg" },
        { name: "Vercel", icon: "/projects/svg/vercel-icon-svgrepo-com.svg" },
        { name: "Render", icon: "/projects/svg/Render Symbol SVG.svg" },
        { name: "Docker", icon: "/projects/svg/docker-svgrepo-com.svg" },
        { name: "VS Code", icon: "/projects/svg/vs-code-svgrepo-com.svg" },
        { name: "Figma", icon: "/projects/svg/figma-svgrepo-com.svg" }
      ]
    }
  ],
  experience: [
    {
      role: "Team Leader & Full Stack Developer",
      company: "Maawaabro IT Solutions",
      duration: "Present",
      description: "Leading the development team in building scalable SaaS solutions. Improved system efficiency by 30% and delivery speed by 25% through optimized workflows and architecture.",
      highlights: ["30% efficiency improvement", "25% speed improvement", "NestJS & React"]
    },
    {
      role: "Developer & Trainer",
      company: "Syntho Quest",
      duration: "Past",
      description: "Developed internal tools and provided technical training to junior developers. Spearheaded the integration of multiple client systems.",
      highlights: ["Training & Mentorship", "System Integration", "Agile methodologies"]
    },
    {
      role: "Freelance Full Stack Developer",
      company: "Self-Employed",
      duration: "2021 - Present",
      description: "Delivered various full-stack applications for diverse clients, focusing on intuitive UX and robust backend architecture.",
      highlights: ["Client Management", "End-to-end development", "Custom Solutions"]
    }
  ],
  projects: [
    {
      title: "Lenka Academy",
      description: "An innovative ed-tech platform featuring interactive courses, user progress tracking, and robust administrative dashboards.",
      tech: ["Next.js", "TailwindCSS", "Node.js", "PostgreSQL"],
      image: "/projects/Lenka.png",
      live: "https://www.lenkaacademy.com/",
      github: "https://github.com/example/lenka"
    },
    {
      title: "Markyet",
      description: "A feature-rich e-commerce platform offering secure payments, real-time inventory management, and personalized recommendations.",
      tech: ["React", "NestJS", "Stripe", "MongoDB"],
      image: "/projects/mark.png",
      live: "https://www.markyet.in",
      github: "https://github.com/example/markyet"
    },
    {
      title: "Otras Artha Tech",
      description: "A financial technology dashboard providing real-time data visualization, analytics, and automated reporting.",
      tech: ["Next.js", "Framer Motion", "Prisma", "PostgreSQL"],
      image: "/projects/otras.png",
      live: "https://github.com/otras-tech/otras",
      github: "https://github.com/otras-tech/otras"
    }
  ],
  aiSkills: {
    description: "Integrating intelligent capabilities into modern applications.",
    integrations: [
      { name: "Predictive Analytics", desc: "Built dashboards forecasting trends using machine learning models." },
      { name: "NLP Assistants", desc: "Implemented context-aware conversational bots utilizing LLMs." },
      { name: "Computer Vision", desc: "Integrated image recognition workflows for automated data extraction." }
    ]
  },
  achievements: [
    { title: "ML Seminar Winner", description: "Secured first place in a university-level Machine Learning presentation.", match: "2023" },
    { title: "CSI President", description: "Served as the president for the Computer Society of India student branch.", match: "2022-2023" },
    { title: "ML Competitions", description: "Top rankings in global machine learning hacking competitions.", match: "Multiple" },
    { title: "Radio Internship", description: "Completed an internship developing broadcast automation scripts.", match: "2021" }
  ]
};
