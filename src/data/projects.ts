import { Project, GalleryItem } from "@/types";

export const sampleProjects: Project[] = [
  {
    id: "proj-01",
    title: "Aura Intelligence Interface",
    slug: "aura-intelligence-interface",
    category: "UI/UX DESIGN",
    year: "2024",
    client: "Design Exploration / Concept",
    tagline: "Next-generation ambient workflow interface for creative directors.",
    description:
      "A conceptual multi-modal interface designed to reduce cognitive load during high-tempo creative workflows. Focuses on spatial hierarchy, subtle micro-interactions, and high-legibility dark mode telemetry.",
    coverImage: "/images/projects/project-aura.svg",
    featured: true,
    role: "Lead UI/UX & Interaction Designer",
    tools: ["Figma", "Design Tokens", "Prototyping", "Interaction Design"],
    caseStudy: {
      overview:
        "This case study explores how ambient intelligence can assist complex design systems without distracting the creator. We stripped away decorative UI noise to focus purely on tactile control and visual clarity.",
      problemStatement:
        "Modern creative management software overwhelms designers with cluttered toolbars, disparate menus, and high visual fatigue during sustained creative sessions.",
      designGoals: [
        "Eliminate visual friction by adopting a contextual floating control system.",
        "Maintain WCAG AAA contrast compliance across all ambient states.",
        "Implement sub-100ms micro-interaction response curves.",
      ],
      targetUsers: [
        {
          persona: "Creative Directors & Senior Designers",
          description:
            "Designers managing large multi-screen projects who need instantaneous access to canvas assets without deep menu diving.",
        },
        {
          persona: "Brand Strategists",
          description:
            "Visual decision makers reviewing assets and needing clear typographic telemetry and version history.",
        },
      ],
      researchInsights: [
        "78% of designers surveyed reported fatigue from persistent tool panels on ultrawide monitors.",
        "Context-sensitive radial palettes reduced mouse movement distance by 42%.",
        "High-density monospace metadata was preferred over descriptive narrative labels for asset specs.",
      ],
      userFlowDescription:
        "From asset ingestion to real-time spatial manipulation, the flow minimizes intermediate modal confirmations, relying instead on non-destructive undo and contextual breadcrumbs.",
      wireframesDescription:
        "Explorations started with low-fidelity grid layouts emphasizing 8px vertical rhythm and asymmetrical canvas splits.",
      visualDesignDescription:
        "Built strictly with a deep obsidian palette (#050505, #0D0D0D), paired with Space Grotesk for architectural headers and Inter for data tables.",
      designDecisions: [
        {
          title: "Monochromatic Canvas with Semantic Accents",
          explanation:
            "Restricted the palette to monochrome grays with solitary emerald telemetry indicators to ensure user creative artwork remains the sole visual hero.",
        },
        {
          title: "Adaptive Floating Command Palette",
          explanation:
            "Replaced fixed left navigation with a keyboard-first command bar that activates only when required by context.",
        },
      ],
    },
  },
  {
    id: "proj-02",
    title: "Kinesis Typographic Identity",
    slug: "kinesis-typographic-identity",
    category: "BRANDING",
    year: "2024",
    client: "Visual Identity Concept",
    tagline: "Dynamic identity system rooted in Swiss modernism and motion.",
    description:
      "An experimental identity system exploring brutalist typography, dynamic grid constraints, and kinetic editorial posters for an avant-garde digital arts symposium.",
    coverImage: "/images/projects/project-kinesis.svg",
    featured: true,
    role: "Brand & Graphic Designer",
    tools: ["Adobe Illustrator", "InDesign", "Typography Experiments"],
  },
  {
    id: "proj-03",
    title: "Verve Editorial & Spatial System",
    slug: "verve-editorial-system",
    category: "VISUAL DESIGN",
    year: "2023",
    client: "Editorial Concept",
    tagline: "Contemporary print and digital layout system for architectural publications.",
    description:
      "A balance of rigid grid layouts, oversized display typography, and generous negative space crafted for an architectural and spatial design review.",
    coverImage: "/images/projects/project-verve.svg",
    featured: true,
    role: "Visual & Editorial Designer",
    tools: ["Editorial Design", "Grid Systems", "Art Direction"],
  },
  {
    id: "proj-04",
    title: "Chronos Timepiece Telemetry",
    slug: "chronos-telemetry-app",
    category: "UI/UX DESIGN",
    year: "2023",
    client: "Product Prototype",
    tagline: "Tactile mobile interface for horological collectors and timing tools.",
    description:
      "A specialized companion app translating tactile mechanical watch aesthetics into an ultra-precise digital interface with haptic-inspired feedback.",
    coverImage: "/images/projects/project-chronos.svg",
    featured: false,
    role: "Product Designer",
    tools: ["Figma", "User Flow Mapping", "Design Systems"],
    caseStudy: {
      overview:
        "An interface designed for collectors to track movement performance, escapement variance, and service logs with tactile mechanical fidelity.",
      problemStatement:
        "Existing horology applications look like generic spreadsheets or tacky skeuomorphic renders without refined digital craft.",
      designGoals: [
        "Craft an interface that respects the horological community's obsession with precision.",
        "Implement high-precision data visualization for timing deviations.",
      ],
      targetUsers: [
        {
          persona: "Horology Enthusiasts",
          description: "Collectors who track timing accuracy to within seconds per day.",
        },
      ],
      researchInsights: [
        "Users valued direct circular telemetry representations matching dial layouts.",
      ],
      userFlowDescription:
        "Quick tap timing calibration followed by instantaneous variance calculation.",
      wireframesDescription:
        "Circular radar diagrams combined with tabular breakdown of deviation per position.",
      visualDesignDescription:
        "Monochromatic dark palette with hairline borders and Swiss typographic rhythm.",
      designDecisions: [
        {
          title: "Hairline Instrumentation Aesthetic",
          explanation:
            "Employed 1px borders and tabular numbers to reflect precision micrometer tools.",
        },
      ],
    },
  },
  {
    id: "proj-05",
    title: "Monolith Exhibition Visuals",
    slug: "monolith-exhibition-visuals",
    category: "GRAPHIC DESIGN",
    year: "2023",
    client: "Gallery Exhibition Concept",
    tagline: "Large-format exhibition posters and promotional collateral.",
    description:
      "A series of high-contrast typographical exhibition posters created using generative grid displacement and architectural photography.",
    coverImage: "/images/projects/project-monolith.svg",
    featured: false,
    role: "Poster & Graphic Designer",
    tools: ["Adobe Photoshop", "Illustrator", "Print Preparation"],
  },
];

export const sampleGalleryItems: GalleryItem[] = [
  {
    id: "gal-01",
    title: "Structure & Void No. 01",
    category: "POSTER",
    year: "2024",
    aspectRatio: "tall",
    image: "/images/gallery/gallery-01.svg",
    description: "Swiss typographical poster exploring negative space and architectural tension.",
  },
  {
    id: "gal-02",
    title: "Chromatic Waveform Study",
    category: "VISUAL COMPOSITION",
    year: "2024",
    aspectRatio: "square",
    image: "/images/gallery/gallery-02.svg",
    description: "Algorithmic gradient displacement and sound-wave frequency translation.",
  },
  {
    id: "gal-03",
    title: "Neo-Brutalist Typographic Grid",
    category: "TYPOGRAPHY",
    year: "2024",
    aspectRatio: "tall",
    image: "/images/gallery/gallery-03.svg",
    description: "Experimental font pairing and brutalist column alignment study.",
  },
  {
    id: "gal-04",
    title: "Symposium 2024 Brand Marks",
    category: "BRANDING",
    year: "2024",
    aspectRatio: "wide",
    image: "/images/gallery/gallery-04.svg",
    description: "Logomarks, monogram experiments, and geometric construction systems.",
  },
  {
    id: "gal-05",
    title: "Signals: Electronic Music Night",
    category: "EVENT CREATIVE",
    year: "2023",
    aspectRatio: "tall",
    image: "/images/gallery/gallery-05.svg",
    description: "Club visual identity, flyer, and social asset suite for underground audio event.",
  },
  {
    id: "gal-06",
    title: "Kinetic Carousel Campaign",
    category: "SOCIAL MEDIA",
    year: "2023",
    aspectRatio: "square",
    image: "/images/gallery/gallery-06.svg",
    description: "Editorial social carousel layouts designed for high-density information retention.",
  },
];
