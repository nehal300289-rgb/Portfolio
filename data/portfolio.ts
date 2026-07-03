export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming & Tools",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "scikit-learn",
      "R",
      "SQL",
      "Excel",
      "Tableau",
      "Jupyter",
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Feature Engineering",
      "SHAP (XAI)",
      "Predictive Modeling",
      "Prompt Engineering",
    ],
  },
  {
    title: "Statistics",
    skills: [
      "Hypothesis Testing",
      "T-test / ANOVA",
      "Chi-square",
      "Regression Analysis",
      "EDA",
      "Survey Research",
    ],
  },
  {
    title: "Product & Strategy",
    skills: [
      "Product Roadmaps",
      "Agile / Scrum",
      "TAM/SAM/SOM",
      "User Research",
      "Go-to-Market",
      "Market Sizing",
    ],
  },
];

export type EducationItem = {
  date: string;
  title: string;
  institution: string;
  description: string;
};

export const educationItems: EducationItem[] = [
  {
    date: "Jan 2026 – Aug 2026",
    title: "PG Certificate — Integrated Artificial Intelligence",
    institution: "Southern Alberta Institute of Technology (SAIT) · Calgary, AB",
    description:
      "Applied ML, predictive analytics, AI ethics, cloud deployment, and human-centric AI systems.",
  },
  {
    date: "Jan 2025 – Aug 2025",
    title: "PG Certificate — Product Management",
    institution: "Southern Alberta Institute of Technology (SAIT) · Calgary, AB",
    description:
      "Capstone: Full product strategy for an esports SaaS platform (CoachGG) — market research, roadmap, clickable prototype, and go-to-market plan.",
  },
  {
    date: "Graduated Apr 2024",
    title: "Bachelor of Commerce — Major in Statistics",
    institution: "H.L. College of Commerce · Ahmedabad, India · First Distinction",
    description: "CGPA: 8.2 / 10",
  },
];

export type ProjectItem = {
  title: string;
  description: string;
  tools: string[];
  fullWidth?: boolean;
};

export const projectItems: ProjectItem[] = [
  {
    title: "NetSieveX.io — IoT Network Intrusion Detection",
    description:
      "Full end-to-end ML pipeline on RT-IoT2022 dataset with 123K rows and 85 features. Achieved 99.37% accuracy with Random Forest and integrated SHAP explainability for security analysts.",
    tools: ["Python", "scikit-learn", "Flask", "React", "Azure", "SHAP"],
  },
  {
    title: "CoachGG — Esports SaaS Product Strategy",
    description:
      "Led primary and secondary research to identify pain points in Canadian amateur esports. Defined roadmap, pricing strategy, go-to-market plan, and measurable KPIs.",
    tools: ["Market Sizing", "JTBD", "5 Whys", "Prototyping", "GTM"],
  },
  {
    title: "Statistical Prediction of Carbon Emissions at Traffic Signals",
    description:
      "Surveyed 850+ drivers at high-traffic intersections. Applied T-tests, Chi-square, ANOVA, and regression analysis. Delivered data-driven policy recommendations for urban planners.",
    tools: ["R", "Excel", "Tableau", "Survey Research", "Regression"],
    fullWidth: true,
  },
];

export type CertificationItem = {
  icon: string;
  title: string;
  provider: string;
  details?: string;
};

export const certificationItems: CertificationItem[] = [
  {
    icon: "🎓",
    title: "Prompt Engineering & Programming with OpenAI",
    provider: "Columbia+",
    details: "Jul 2025 · Credential ID: 156945679",
  },
  {
    icon: "📣",
    title: "Product Marketing Fundamentals International",
    provider: "SAIT",
    details: "Jul 2025 · Messaging strategy, audience targeting, and go-to-market fundamentals.",
  },
  {
    icon: "📊",
    title: "Introduction to Career Skills in Data Analytics",
    provider: "LinkedIn Learning",
    details: "Mar 2025",
  },
  {
    icon: "💻",
    title: "Programming Foundations: Fundamentals",
    provider: "LinkedIn Learning",
    details: "Jan 2026",
  },
  {
    icon: "📈",
    title: "Statistical Analysis through Software",
    provider: "R.J. Tibrewal Commerce College",
    details: "2024",
  },
];

export type LanguageItem = {
  name: string;
  level: string;
  dotClass?: string;
};

export const languageItems: LanguageItem[] = [
  {
    name: "English",
    level: "Advanced",
  },
  {
    name: "Gujarati",
    level: "Fluent",
    dotClass: "med",
  },
  {
    name: "Hindi",
    level: "Fluent",
    dotClass: "med",
  },
];

export type ContactItem = {
  label: string;
  icon: string;
  href: string;
};

export const contactItems: ContactItem[] = [
  {
    label: "LinkedIn",
    icon: "💼",
    href: "https://www.linkedin.com/in/nehal-gadhavi-a03ba12a6/",
  },
  {
    label: "Email",
    icon: "✉️",
    href: "mailto:nehal982003@gmail.com",
  },
  {
    label: "GitHub",
    icon: "🐙",
    href: "https://github.com/nehal300289-rgb",
  },
];

export const footerInfo = {
  name: "Nehal Gadhavi",
  location: "Calgary, AB",
  email: "nehal982003@gmail.com",
  year: "2026",
};