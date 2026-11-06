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
import { CreativeSpaceSection } from "@/components/sections/CreativeSpaceSection";
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

        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Professional Summary & About Me Section */}
        <ProfessionalSummarySection />
        <AboutSection />

        {/* 3. THE CREATIVE SPACE: Direct Gateway to Dedicated Project Showcases */}
        <CreativeSpaceSection />

        {/* 4. Experience Section */}
        <ExperienceSection />

        {/* 5. Skills & Tools Section */}
        <SkillsSection />

        {/* 6. Contact Section */}
        <ContactSection />

        {/* 7. Editorial Footer */}
        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
