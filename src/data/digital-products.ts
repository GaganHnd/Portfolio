export interface DigitalProduct {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  featured: boolean;
  keyFeatures: string[];
  technology: string[];
  image: string;
  imageAlt: string;
  placeholderPath: string;
}

export const digitalProducts: DigitalProduct[] = [
  {
    id: "echo",
    number: "01",
    title: "Echo – AI-Powered Customer Support Platform",
    category: "AI Product Development",
    description:
      "An AI-powered customer support platform designed to streamline customer interactions through intelligent chat and voice assistance.",
    featured: true,
    keyFeatures: [
      "Real-time AI-powered customer conversations.",
      "Voice support and AI voice assistant integration.",
      "Knowledge retrieval using embeddings and Retrieval-Augmented Generation (RAG).",
      "Human handoff and conversation management.",
      "Team management and configurable AI integrations.",
    ],
    technology: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "JavaScript",
      "Convex",
      "Tailwind CSS",
      "VAPI",
      "Clerk",
      "AWS Secrets Manager",
    ],
    image: "/images/digital-products/echo-platform.jpg",
    imageAlt: "Echo – AI-Powered Customer Support Platform",
    placeholderPath: "public/images/digital-products/echo-platform.jpg",
  },
  {
    id: "ai-study-assistant",
    number: "02",
    title: "AI Study Assistant",
    category: "AI Application",
    description:
      "An AI-powered learning assistant designed to help students organise their studies through personalised study plans, learning resource recommendations and progress tracking.",
    featured: false,
    keyFeatures: [
      "Personalised study planning.",
      "Learning resource recommendations.",
      "Student progress tracking.",
      "AI-assisted learning support.",
    ],
    technology: [
      "AI Integration",
      "Personalised Study Planning",
      "Resource Recommendation Engine",
      "Progress Tracking Analytics",
    ],
    image: "/images/digital-products/ai-study-assistant.jpg",
    imageAlt: "AI Study Assistant – Your Personalized Learning Companion",
    placeholderPath: "public/images/digital-products/ai-study-assistant.jpg",
  },
];
