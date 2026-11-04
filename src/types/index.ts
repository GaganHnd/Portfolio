export type ProjectCategory =
  | "UI/UX DESIGN"
  | "GRAPHIC DESIGN"
  | "BRANDING"
  | "VISUAL DESIGN";

export interface CaseStudyDecision {
  title: string;
  explanation: string;
}

export interface CaseStudyUser {
  persona: string;
  description: string;
}

export interface CaseStudyContent {
  overview: string;
  problemStatement: string;
  designGoals: string[];
  targetUsers: CaseStudyUser[];
  researchInsights: string[];
  userFlowDescription: string;
  wireframesDescription: string;
  visualDesignDescription: string;
  designDecisions: CaseStudyDecision[];
  mockupImages?: string[];
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  year: string;
  client?: string;
  description: string;
  tagline: string;
  coverImage: string;
  featured: boolean;
  role?: string;
  tools?: string[];
  caseStudy?: CaseStudyContent;
}

export type GalleryCategory =
  | "POSTER"
  | "EVENT CREATIVE"
  | "SOCIAL MEDIA"
  | "BRANDING"
  | "TYPOGRAPHY"
  | "VISUAL COMPOSITION";

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  year: string;
  aspectRatio: "tall" | "wide" | "square";
  image: string;
  description?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  highlights: string[];
  keyTools?: string[];
  category?: string;
}

export interface SkillCategory {
  id: string;
  category: string;
  description: string;
  skills: string[];
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  isExternal: boolean;
  handle?: string;
}
