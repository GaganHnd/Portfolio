import { personalInfo } from "@/data/social-links";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { MagneticWrapper } from "@/components/ui/MagneticWrapper";
import { SmoothScrollProvider } from "@/components/animations/SmoothScrollProvider";
import { Navbar } from "@/components/navigation/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProfessionalSummarySection } from "@/components/sections/ProfessionalSummarySection";
import { AboutSection } from "@/components/sections/AboutSection";
import { GraphicDesignSection } from "@/components/sections/GraphicDesignSection";
import { UIUXSection } from "@/components/sections/UIUXSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <CustomCursor />
      <Navbar />

      <main className="min-h-screen bg-background text-foreground pt-24 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl mx-auto space-y-20 sm:space-y-24 md:space-y-32 w-full">
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

        {/* 6. Experience Section */}
        <ExperienceSection />

        {/* 7. Skills & Tools Section */}
        <SkillsSection />

        {/* Closing Contact Inquiry Section */}
        <section id="contact" className="space-y-8 sm:space-y-12 pb-8 sm:pb-12" aria-label="Contact Section">
          <SectionHeading
            index="05"
            category="GET IN TOUCH"
            title="LET'S CONNECT."
            subtitle="Have an idea or a collaboration in mind? Let's make it real."
          />

          <div className="border border-white/10 bg-surface p-6 sm:p-8 md:p-12 lg:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
            <div className="min-w-0 max-w-full">
              <p className="font-mono text-[10px] sm:text-xs text-neutral-500 uppercase tracking-wider sm:tracking-widest mb-1.5 sm:mb-2">
                DIRECT INQUIRY
              </p>
              <a
                href="mailto:contact@gaganhandral.design"
                className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white uppercase hover:text-neutral-300 transition-colors break-all sm:break-normal inline-block"
              >
                contact@gaganhandral.design
              </a>
              <p className="font-mono text-xs text-neutral-400 mt-2">
                Graphic Designer · UI/UX Designer • Based in India, Available Worldwide
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto flex-shrink-0">
              <MagneticWrapper className="w-full sm:w-auto">
                <Button
                  href="mailto:contact@gaganhandral.design"
                  variant="primary"
                  size="lg"
                  showArrow
                  className="w-full sm:w-auto"
                >
                  Send Message
                </Button>
              </MagneticWrapper>
              <MagneticWrapper className="w-full sm:w-auto">
                <Button
                  href="https://www.linkedin.com/in/gaganhandral"
                  variant="outline"
                  size="lg"
                  isExternal
                  showArrow
                  className="w-full sm:w-auto"
                >
                  LinkedIn
                </Button>
              </MagneticWrapper>
            </div>
          </div>
        </section>

        {/* Editorial Footer */}
        <footer className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] sm:text-xs text-neutral-500 w-full">
          <div className="flex items-center gap-2 max-w-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
            <span className="break-words">
              © {new Date().getFullYear()} {personalInfo.name.toUpperCase()}. ALL RIGHTS RESERVED.
            </span>
          </div>
          <div className="flex items-center gap-6 flex-shrink-0">
            <span className="text-neutral-600">FIGMA · CANVA</span>
            <a href="#top" className="hover:text-white transition-colors">
              BACK TO TOP ↑
            </a>
          </div>
        </footer>
      </main>
    </SmoothScrollProvider>
  );
}
