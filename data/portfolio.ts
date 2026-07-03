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