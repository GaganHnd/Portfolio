export interface GraphicDesignProject {
  id: string;
  title: string;
  category: string;
  tool: "Canva" | "Figma";
  description: string;
  image: string;
  aspectRatio: "portrait" | "square";
  year: string;
  featured?: boolean;
}

export const graphicDesignProjects: GraphicDesignProject[] = [
  {
    id: "trade-triumph",
    title: "Trade Triumph",
    category: "Event Poster Design",
    tool: "Canva",
    description: "A bold event poster designed with a dramatic black-and-gold visual direction.",
    image: "/images/graphic-design/trade-triumph.jpg",
    aspectRatio: "portrait",
    year: "2024",
    featured: true,
  },
  {
    id: "constitution-day",
    title: "Constitution Day",
    category: "Event Poster Design",
    tool: "Canva",
    description: "A heritage-inspired poster created for a Constitution Day poster presentation competition.",
    image: "/images/graphic-design/constitution-day.jpg",
    aspectRatio: "portrait",
    year: "2024",
  },
  {
    id: "phoenix-promo-war",
    title: "Phoenix 2.0 – Promo War",
    category: "Event Poster Design",
    tool: "Canva",
    description: "A vibrant promotional poster featuring a colourful pop-art visual direction.",
    image: "/images/graphic-design/phoenix-promo-war.jpg",
    aspectRatio: "portrait",
    year: "2025",
    featured: true,
  },
  {
    id: "udbhava-club-logo",
    title: "Udbhava Club Logo",
    category: "Logo & Visual Identity",
    tool: "Figma",
    description: "An original geometric logo designed for the Udbhava Club.",
    image: "/images/graphic-design/udbhava-club-logo.jpg",
    aspectRatio: "square",
    year: "2024",
  },
];
