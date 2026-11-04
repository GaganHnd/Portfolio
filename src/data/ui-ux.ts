export interface UIUXProject {
  id: string;
  number: string;
  title: string;
  category: "Mobile App UI/UX" | "Web Dashboard UI/UX";
  tool: "Figma";
  projectType: "Academic / Concept Design";
  description: string;
  image: string;
  accentColor: string;
  accentBorder: string;
  accentBg: string;
  screens: string[];
  keyHighlights: string[];
}

export const uiuxProjects: UIUXProject[] = [
  {
    id: "foodgo",
    number: "01",
    title: "Foodgo",
    category: "Mobile App UI/UX",
    tool: "Figma",
    projectType: "Academic / Concept Design",
    description:
      "A food ordering mobile app concept designed to provide a convenient shopping experience. The interface includes onboarding, food discovery, restaurant and food details, customisation, cart, payment and profile screens.",
    image: "/images/ui-ux/foodgo-screens.jpg",
    accentColor: "text-rose-400",
    accentBorder: "border-rose-500/30",
    accentBg: "bg-rose-500/10",
    screens: [
      "Splash & Onboarding",
      "Food Discovery & Search",
      "Food Item Details",
      "Ingredient Customisation",
      "Order Summary & Cart",
      "Payment Method Selection",
      "Success Confirmation Pop-up",
      "User Profile & History",
      "Customer Support Chat",
    ],
    keyHighlights: [
      "Convenient food ordering flow",
      "Ingredient and topping customisation",
      "Seamless checkout and payment",
    ],
  },
  {
    id: "leadflow",
    number: "02",
    title: "LeadFlow",
    category: "Web Dashboard UI/UX",
    tool: "Figma",
    projectType: "Academic / Concept Design",
    description:
      "A lead management dashboard concept designed to organise and monitor sales leads. The interface includes lead listings, lead details, pipeline management and analytics views.",
    image: "/images/ui-ux/leadflow-dashboard.png",
    accentColor: "text-sky-400",
    accentBorder: "border-sky-500/30",
    accentBg: "bg-sky-500/10",
    screens: [
      "Lead Listing & Filter Table",
      "Lead Details & Contact Actions",
      "Customer Lead Activity Log",
      "Pipeline Kanban Management",
      "Lead Analytics Dashboard",
      "Source Distribution & Performance Charts",
    ],
    keyHighlights: [
      "Structured lead tables and filters",
      "Visual pipeline stages (New to Purchased)",
      "Executive analytics and conversion metrics",
    ],
  },
  {
    id: "stylish",
    number: "03",
    title: "Stylish",
    category: "Mobile App UI/UX",
    tool: "Figma",
    projectType: "Academic / Concept Design",
    description:
      "A fashion shopping mobile app concept designed around product discovery and a smooth shopping journey. The interface includes onboarding, authentication, product listings, product details, cart, address management, payment and order confirmation.",
    image: "/images/ui-ux/stylish-screens.jpg",
    accentColor: "text-purple-400",
    accentBorder: "border-purple-500/30",
    accentBg: "bg-purple-500/10",
    screens: [
      "Splash & Welcome Screen",
      "Authentication & Sign Up",
      "Onboarding Visual Journey",
      "Brand Catalog & Product Discovery",
      "Product Detail & Size Selection",
      "Shopping Cart Review",
      "Delivery Address Management",
      "Payment & Card Entry",
      "Order Confirmation",
    ],
    keyHighlights: [
      "Dark-mode apparel discovery",
      "Structured checkout and address flows",
      "Comprehensive end-to-end shopping journey",
    ],
  },
];
