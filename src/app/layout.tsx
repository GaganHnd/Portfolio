import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, Cormorant_Garamond, Space_Mono } from "next/font/google";
import { SplashCursor } from "@/components/ui/SplashCursor";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Gagan Handral — Graphic Designer & UI/UX Designer",
  description:
    "Cinematic creative portfolio of Gagan Handral. Graphic design, UI/UX interfaces, visual systems, and creative problem solving.",
  keywords: [
    "Gagan Handral",
    "Graphic Designer",
    "UI/UX Designer",
    "Visual Designer",
    "Creative Direction",
    "Design Systems",
    "Digital Portfolio",
  ],
  authors: [{ name: "Gagan Handral" }],
  creator: "Gagan Handral",
  openGraph: {
    title: "Gagan Handral — Graphic Designer & UI/UX Designer",
    description:
      "Designing meaningful digital experiences through visual storytelling, thoughtful interfaces and creative exploration.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${cormorant.variable} ${spaceMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-white/20 selection:text-white relative">
        <SplashCursor
          rainbow={false}
          size={0.8}
          force={1}
          swirl={3}
          trail={1}
          clickSplash
          colorSpeed={1}
          intensity={1}
          momentum={1}
          shading={1}
          glow={0}
          quality="high"
          intro
          contained={false}
        />
        {children}
      </body>
    </html>
  );
}
