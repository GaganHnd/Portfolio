import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: {
          DEFAULT: "#0D0D0D",
          elevated: "#141414",
          border: "rgba(255, 255, 255, 0.12)",
          subtle: "rgba(255, 255, 255, 0.05)",
        },
        foreground: {
          DEFAULT: "#FFFFFF",
          secondary: "#A0A0A0",
          muted: "#666666",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-cormorant)", "serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        wideEditorial: "0.15em",
        widestEditorial: "0.25em",
      },
      borderRadius: {
        minimal: "2px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
        cinematic: "cubic-bezier(0.25, 1, 0.5, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
