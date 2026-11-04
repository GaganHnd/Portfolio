import { personalInfo } from "@/data/social-links";
import { sampleProjects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Divider } from "@/components/ui/Divider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { MagneticWrapper } from "@/components/ui/MagneticWrapper";
import { SmoothScrollProvider } from "@/components/animations/SmoothScrollProvider";
import { Navbar } from "@/components/navigation/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <CustomCursor />
      <Navbar />

      <main className="min-h-screen bg-background text-foreground pt-24 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl mx-auto space-y-16 sm:space-y-20 md:space-y-24 w-full">
        {/* Architectural Hero / Introduction Preview */}
        <section className="pt-6 sm:pt-12 md:pt-16 pb-8 sm:pb-12 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Badge variant="status">{personalInfo.status}</Badge>
            <Badge variant="editorial">PHASE 1 &amp; 2 REVIEW</Badge>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <p className="font-mono text-[11px] sm:text-xs md:text-sm tracking-wider sm:tracking-widest uppercase text-neutral-400">
              {personalInfo.title}
            </p>
            {/* Monumental Hero Typography with fluid clamp for mobile (320px - 430px) up to ultrawide */}
            <h1 className="text-[2.65rem] xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10.5rem] font-heading font-black tracking-tighter text-white uppercase leading-[0.92] select-none break-normal">
              GAGAN
              <br />
              HANDRAL.
            </h1>
          </div>

          <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end">
            <p className="md:col-span-8 text-base sm:text-lg md:text-2xl text-neutral-300 font-light leading-relaxed max-w-2xl">
              &ldquo;{personalInfo.heroBio}&rdquo;
            </p>
            <div className="md:col-span-4 flex flex-col sm:flex-row md:justify-end gap-3 w-full sm:w-auto">
              <MagneticWrapper className="w-full sm:w-auto">
                <Button href="#work" variant="primary" showArrow className="w-full sm:w-auto">
                  Explore Work
                </Button>
              </MagneticWrapper>
              <MagneticWrapper className="w-full sm:w-auto">
                <Button href="#design-system" variant="outline" className="w-full sm:w-auto">
                  System Tokens
                </Button>
              </MagneticWrapper>
            </div>
          </div>
        </section>

        {/* Design System & Typography Specification */}
        <section id="design-system" className="space-y-8 sm:space-y-12">
          <SectionHeading
            index="01"
            category="FOUNDATION & DESIGN TOKENS"
            title="TYPOGRAPHY & PALETTE."
            subtitle="Contemporary Swiss typography, deep obsidian contrast, and precision hairline architecture."
          />

          {/* Typography Scale Demonstration */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 border border-white/10 p-4 sm:p-6 md:p-8 bg-surface">
            <div className="space-y-4 sm:space-y-6">
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-neutral-500 block">
                01 / Headings Engine: Space Grotesk
              </span>
              <div className="space-y-2 sm:space-y-3">
                <p className="text-2xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight text-white uppercase break-words">
                  SWISS MODERNISM
                </p>
                <p className="text-lg sm:text-2xl font-heading font-bold text-neutral-300 uppercase break-words">
                  Intentional Line Breaks &amp; Hierarchy
                </p>
                <p className="text-xs sm:text-sm md:text-base text-neutral-400 leading-relaxed">
                  Engineered with geometric purity and stark, unapologetic uppercase letterforms.
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 lg:border-l lg:border-white/10 lg:pl-8">
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-neutral-500 block">
                02 / Body &amp; Editorial Accents: Inter + Cormorant
              </span>
              <div className="space-y-3 sm:space-y-4">
                <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-neutral-200 break-words">
                  &ldquo;Aesthetics, functionality and human-centred storytelling.&rdquo;
                </p>
                <p className="font-sans text-neutral-400 text-xs sm:text-sm md:text-base leading-relaxed">
                  Inter delivers high-legibility optical clarity at smaller sizes, while Cormorant
                  Garamond introduces thoughtful editorial sophistication to selected quotes.
                </p>
                <p className="font-mono text-[10px] sm:text-xs text-neutral-500 uppercase tracking-wider sm:tracking-widest break-words">
                  MONOSPACE TELEMETRY • TABULAR 0123456789 • 60 FPS
                </p>
              </div>
            </div>
          </div>

          {/* Colour Swatches Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 sm:gap-4">
            <div className="p-3 sm:p-4 border border-white/10 bg-[#050505]">
              <div className="h-10 sm:h-14 w-full border border-white/10 mb-2 sm:mb-3 bg-[#050505]" />
              <p className="font-mono text-[11px] sm:text-xs text-white uppercase truncate">Background</p>
              <p className="font-mono text-[9px] sm:text-[10px] text-neutral-500">#050505</p>
            </div>
            <div className="p-3 sm:p-4 border border-white/10 bg-[#0D0D0D]">
              <div className="h-10 sm:h-14 w-full border border-white/10 mb-2 sm:mb-3 bg-[#0D0D0D]" />
              <p className="font-mono text-[11px] sm:text-xs text-white uppercase truncate">Surface</p>
              <p className="font-mono text-[9px] sm:text-[10px] text-neutral-500">#0D0D0D</p>
            </div>
            <div className="p-3 sm:p-4 border border-white/10 bg-[#141414]">
              <div className="h-10 sm:h-14 w-full border border-white/10 mb-2 sm:mb-3 bg-[#141414]" />
              <p className="font-mono text-[11px] sm:text-xs text-white uppercase truncate">Elevated</p>
              <p className="font-mono text-[9px] sm:text-[10px] text-neutral-500">#141414</p>
            </div>
            <div className="p-3 sm:p-4 border border-white/10 bg-surface">
              <div className="h-10 sm:h-14 w-full border border-white/10 mb-2 sm:mb-3 bg-white" />
              <p className="font-mono text-[11px] sm:text-xs text-white uppercase truncate">Primary Text</p>
              <p className="font-mono text-[9px] sm:text-[10px] text-neutral-500">#FFFFFF</p>
            </div>
            <div className="p-3 sm:p-4 border border-white/10 bg-surface">
              <div className="h-10 sm:h-14 w-full border border-white/10 mb-2 sm:mb-3 bg-[#A0A0A0]" />
              <p className="font-mono text-[11px] sm:text-xs text-white uppercase truncate">Secondary</p>
              <p className="font-mono text-[9px] sm:text-[10px] text-neutral-500">#A0A0A0</p>
            </div>
            <div className="p-3 sm:p-4 border border-white/10 bg-surface">
              <div className="h-10 sm:h-14 w-full border border-white/10 mb-2 sm:mb-3 bg-[#22C55E]" />
              <p className="font-mono text-[11px] sm:text-xs text-white uppercase truncate">Live Accent</p>
              <p className="font-mono text-[9px] sm:text-[10px] text-neutral-500">#22C55E</p>
            </div>
          </div>
        </section>

        {/* Selected Work Preview Section */}
        <section id="work" className="space-y-8 sm:space-y-12">
          <SectionHeading
            index="02"
            category="PORTFOLIO PREVIEW"
            title="SELECTED WORK."
            subtitle="Reusable modular project presentation layouts with clearly labeled design placeholders."
            action={
              <Badge variant="outline" className="text-[10px]">
                {sampleProjects.length} SAMPLE PROJECTS
              </Badge>
            }
          />

          {/* Sample Editorial Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {sampleProjects.slice(0, 2).map((project, idx) => (
              <div
                key={project.id}
                className="group border border-white/10 bg-surface p-4 sm:p-6 flex flex-col justify-between hover:border-white/30 transition-all duration-300"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 sm:pb-4 mb-4 border-b border-white/10 font-mono text-[11px] sm:text-xs text-neutral-400">
                    <span>[0{idx + 1}] {project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden border border-white/10 mb-5 sm:mb-6 bg-black">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-white uppercase tracking-tight group-hover:text-neutral-200 break-words">
                    {project.title}
                  </h3>
                  <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 sm:pt-6 mt-5 sm:mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <span className="font-mono text-[10px] sm:text-xs text-neutral-500 uppercase tracking-wider truncate max-w-[60%]">
                    {project.client}
                  </span>
                  <Button variant="ghost" size="sm" showArrow>
                    View Project
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Ethos Preview Section */}
        <section id="about" className="space-y-8 sm:space-y-12">
          <SectionHeading
            index="03"
            category="ETHOS &amp; PROFILE"
            title="ABOUT ME."
            subtitle={personalInfo.aboutHeading}
          />

          <div className="border border-white/10 bg-surface p-4 sm:p-6 md:p-8 lg:p-12 space-y-6 sm:space-y-8">
            <p className="text-base sm:text-xl md:text-2xl text-neutral-200 font-light leading-relaxed max-w-4xl break-words">
              {personalInfo.aboutPreview}
            </p>

            <Divider label="SKILLS &amp; DISCIPLINES" withCross />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {skillGroups.map((group) => (
                <div key={group.category} className="space-y-3 sm:space-y-4">
                  <h4 className="font-mono text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-white border-b border-white/10 pb-2">
                    {group.category}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-neutral-500 leading-relaxed">{group.description}</p>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="font-mono text-[11px] sm:text-xs text-neutral-300 flex items-center gap-2 break-words"
                      >
                        <span className="w-1 h-1 bg-neutral-600 rounded-full flex-shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Preview Section */}
        <section id="contact" className="space-y-8 sm:space-y-12 pb-8 sm:pb-12">
          <SectionHeading
            index="04"
            category="GET IN TOUCH"
            title="LET'S CONNECT."
            subtitle="Have an idea or a collaboration in mind? Let's make it real."
          />

          <div className="border border-white/10 bg-surface p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
            <div className="min-w-0 max-w-full">
              <p className="font-mono text-[10px] sm:text-xs text-neutral-500 uppercase tracking-wider sm:tracking-widest mb-1.5 sm:mb-2">
                DIRECT INQUIRY
              </p>
              {/* Responsive email string with break-all on small mobile to prevent any horizontal overflow */}
              <a
                href="mailto:contact@gaganhandral.design"
                className="text-base sm:text-xl md:text-3xl lg:text-4xl font-heading font-bold text-white uppercase hover:text-neutral-300 transition-colors break-all sm:break-normal inline-block"
              >
                contact@gaganhandral.design
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
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

        {/* Footer */}
        <footer className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] sm:text-xs text-neutral-500 w-full">
          <div className="flex items-center gap-2 max-w-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
            <span className="break-words">© {new Date().getFullYear()} {personalInfo.name.toUpperCase()}. ALL RIGHTS RESERVED.</span>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <a href="#top" className="hover:text-white transition-colors">
              BACK TO TOP ↑
            </a>
          </div>
        </footer>
      </main>
    </SmoothScrollProvider>
  );
}
