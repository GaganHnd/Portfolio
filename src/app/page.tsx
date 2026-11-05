import { personalInfo } from "@/data/social-links";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SmoothScrollProvider } from "@/components/animations/SmoothScrollProvider";
import { FlowingVisualElements } from "@/components/animations/FlowingVisualElements";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProfessionalSummarySection } from "@/components/sections/ProfessionalSummarySection";
import { AboutSection } from "@/components/sections/AboutSection";
import { GraphicDesignSection } from "@/components/sections/GraphicDesignSection";
import { UIUXSection } from "@/components/sections/UIUXSection";
import { DigitalProductsSection } from "@/components/sections/DigitalProductsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <FlowingVisualElements />
      <Navbar />

      <main className="relative z-10 min-h-screen bg-transparent text-foreground pt-24 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl mx-auto space-y-20 sm:space-y-24 md:space-y-32 w-full">
        {/* Anchor point for back to top */}
        <div id="top" className="sr-only" aria-hidden="true" />

        {/* 1. Hero Section (Refined Content & Tagline) */}
        <HeroSection />

        {/* 2. Professional Summary Section */}
        <ProfessionalSummarySection />

        {/* 3. About Me Section (A Creative Mind With A Technical Perspective) */}
        <AboutSection />

        {/* 4. Selected Work: Graphic Design */}
        <GraphicDesignSection />

        {/* 5. Selected Work: UI/UX Design */}
        <UIUXSection />

        {/* 6. Beyond Visuals: Digital Products & Development */}
        <DigitalProductsSection />

        {/* 7. Experience Section */}
        <ExperienceSection />

        {/* 8. Skills & Tools Section */}
        <SkillsSection />

        {/* 9. Contact Section (Have a Project in Mind? Let's Create Something Meaningful) */}
        <ContactSection />

        {/* 10. Editorial Footer */}
        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
