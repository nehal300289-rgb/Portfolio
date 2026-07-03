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