import { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Primary Design Tools",
    description: "Confirmed creative tools for visual & interface production",
    skills: [
      "Figma",
      "Canva",
    ],
  },
  {
    category: "Design Disciplines",
    description: "Core creative practice and user-centred methodologies",
    skills: [
      "Graphic Design",
      "UI/UX Design",
      "Visual Identity & Branding",
      "Event Posters & Creatives",
      "Mobile Application Interfaces",
      "Web Dashboards",
      "Typography & Layout",
      "Intuitive Interface Design",
    ],
  },
  {
    category: "Technical Perspective",
    description: "Academic & conceptual foundations bridging design and technology",
    skills: [
      "Computer Science & Business Systems Foundation",
      "Creative Problem Solving",
      "Technical Understanding & Design Feasibility",
      "Structure, Logic & Systematic Thinking",
      "Human-Centered Interaction Principles",
    ],
  },
];

export const educationHistory = [
  {
    degree: "Computer Science and Business Systems",
    institution: "University Graduate",
    period: "Graduate",
    focus: "Intersection of computational logic, business systems, and visual interface communication",
  },
];

export interface PortfolioSkillCategory {
  title: string;
  categoryNumber: string;
  subtitle: string;
  skills: string[];
  featured?: boolean;
}

export const portfolioSkills: PortfolioSkillCategory[] = [
  {
    title: "Design",
    categoryNumber: "01",
    subtitle: "Visual craftsmanship, interface architecture & creative direction",
    skills: [
      "UI/UX Design",
      "Graphic Design",
      "Wireframing",
      "Prototyping",
      "Visual Design",
      "Layout & Typography",
    ],
  },
  {
    title: "Creative Tools",
    categoryNumber: "02",
    subtitle: "Core software arsenal for interface prototyping and visual asset creation",
    skills: [
      "Figma",
      "Canva",
    ],
    featured: true,
  },
  {
    title: "Technical",
    categoryNumber: "03",
    subtitle: "Computational logic, structured data querying & analytical dashboards",
    skills: [
      "Python",
      "SQL",
      "JavaScript",
      "Power BI",
      "Git & GitHub",
    ],
  },
  {
    title: "Additional Skills",
    categoryNumber: "04",
    subtitle: "Analytical thinking, creative problem-solving & multidisciplinary collaboration",
    skills: [
      "Data Analysis",
      "Problem Solving",
      "Communication",
      "Teamwork",
    ],
  },
];
