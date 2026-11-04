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

      <main className="min-h-screen bg-background text-foreground pt-28 pb-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto space-y-24">
        {/* Architectural Hero / Introduction Preview */}
        <section className="pt-8 md:pt-16 pb-12 border-b border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <Badge variant="status">{personalInfo.status}</Badge>
            <Badge variant="editorial">PHASE 1 &amp; 2 REVIEW</Badge>
          </div>

          <div className="space-y-4">
            <p className="font-mono text-xs md:text-sm tracking-widest uppercase text-neutral-400">
              {personalInfo.title}
            </p>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-black tracking-tighter text-white uppercase leading-[0.95]">
              GAGAN
              <br />
              <span className="text-neutral-500">SUDHIR</span>
              <br />
              HANDRAL.
            </h1>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <p className="md:col-span-8 text-lg sm:text-xl md:text-2xl text-neutral-300 font-light leading-relaxed max-w-2xl">
              &ldquo;{personalInfo.heroBio}&rdquo;
            </p>
            <div className="md:col-span-4 flex md:justify-end gap-3">
              <MagneticWrapper>
                <Button href="#work" variant="primary" showArrow>
                  Explore Work
                </Button>
              </MagneticWrapper>
              <MagneticWrapper>
                <Button href="#design-system" variant="outline">
                  System Tokens
                </Button>
              </MagneticWrapper>
            </div>
          </div>
        </section>

        {/* Design System & Typography Specification */}
        <section id="design-system" className="space-y-12">
          <SectionHeading
            index="01"
            category="FOUNDATION & DESIGN TOKENS"
            title="TYPOGRAPHY & PALETTE."
            subtitle="Contemporary Swiss typography, deep obsidian contrast, and precision hairline architecture."
          />

          {/* Typography Scale Demonstration */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border border-white/10 p-8 bg-surface">
            <div className="space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block">
                01 / Headings Engine: Space Grotesk
              </span>
              <div className="space-y-3">
                <p className="text-4xl md:text-5xl font-heading font-black tracking-tight text-white uppercase">
                  SWISS MODERNISM
                </p>
                <p className="text-2xl font-heading font-bold text-neutral-300 uppercase">
                  Intentional Line Breaks &amp; Hierarchy
                </p>
                <p className="text-base text-neutral-400">
                  Engineered with geometric purity and stark, unapologetic uppercase letterforms.
                </p>
              </div>
            </div>

            <div className="space-y-6 lg:border-l lg:border-white/10 lg:pl-8">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block">
                02 / Body &amp; Editorial Accents: Inter + Cormorant
              </span>
              <div className="space-y-4">
                <p className="font-serif italic text-2xl md:text-3xl text-neutral-200">
                  &ldquo;Aesthetics, functionality and human-centred storytelling.&rdquo;
                </p>
                <p className="font-sans text-neutral-400 text-sm md:text-base leading-relaxed">
                  Inter delivers high-legibility optical clarity at smaller sizes, while Cormorant
                  Garamond introduces thoughtful editorial sophistication to selected quotes.
                </p>
                <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
                  MONOSPACE TELEMETRY • TABULAR 0123456789 • 60 FPS
                </p>
              </div>
            </div>
          </div>

          {/* Colour Swatches */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            <div className="p-4 border border-white/10 bg-[#050505]">
              <div className="h-14 w-full border border-white/10 mb-3 bg-[#050505]" />
              <p className="font-mono text-xs text-white uppercase">Background</p>
              <p className="font-mono text-[10px] text-neutral-500">#050505</p>
            </div>
            <div className="p-4 border border-white/10 bg-[#0D0D0D]">
              <div className="h-14 w-full border border-white/10 mb-3 bg-[#0D0D0D]" />
              <p className="font-mono text-xs text-white uppercase">Surface</p>
              <p className="font-mono text-[10px] text-neutral-500">#0D0D0D</p>
            </div>
            <div className="p-4 border border-white/10 bg-[#141414]">
              <div className="h-14 w-full border border-white/10 mb-3 bg-[#141414]" />
              <p className="font-mono text-xs text-white uppercase">Elevated</p>
              <p className="font-mono text-[10px] text-neutral-500">#141414</p>
            </div>
            <div className="p-4 border border-white/10 bg-surface">
              <div className="h-14 w-full border border-white/10 mb-3 bg-white" />
              <p className="font-mono text-xs text-white uppercase">Primary Text</p>
              <p className="font-mono text-[10px] text-neutral-500">#FFFFFF</p>
            </div>
            <div className="p-4 border border-white/10 bg-surface">
              <div className="h-14 w-full border border-white/10 mb-3 bg-[#A0A0A0]" />
              <p className="font-mono text-xs text-white uppercase">Secondary</p>
              <p className="font-mono text-[10px] text-neutral-500">#A0A0A0</p>
            </div>
            <div className="p-4 border border-white/10 bg-surface">
              <div className="h-14 w-full border border-white/10 mb-3 bg-[#22C55E]" />
              <p className="font-mono text-xs text-white uppercase">Live Accent</p>
              <p className="font-mono text-[10px] text-neutral-500">#22C55E</p>
            </div>
          </div>
        </section>

        {/* Selected Work Preview Section */}
        <section id="work" className="space-y-12">
          <SectionHeading
            index="02"
            category="PORTFOLIO PREVIEW"
            title="SELECTED WORK."
            subtitle="Reusable modular project presentation layouts with clearly labeled design placeholders."
            action={
              <Badge variant="outline">
                {sampleProjects.length} SAMPLE PROJECTS REGISTERED
              </Badge>
            }
          />

          {/* Sample Editorial Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sampleProjects.slice(0, 2).map((project, idx) => (
              <div
                key={project.id}
                className="group border border-white/10 bg-surface p-6 flex flex-col justify-between hover:border-white/30 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 font-mono text-xs text-neutral-400">
                    <span>[0{idx + 1}] {project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden border border-white/10 mb-6 bg-black">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-white uppercase tracking-tight group-hover:text-neutral-200">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider">
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
        <section id="about" className="space-y-12">
          <SectionHeading
            index="03"
            category="ETHOS &amp; PROFILE"
            title="ABOUT ME."
            subtitle={personalInfo.aboutHeading}
          />

          <div className="border border-white/10 bg-surface p-8 md:p-12 space-y-8">
            <p className="text-xl md:text-2xl text-neutral-200 font-light leading-relaxed max-w-4xl">
              {personalInfo.aboutPreview}
            </p>

            <Divider label="SKILLS &amp; DISCIPLINES" withCross />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skillGroups.map((group) => (
                <div key={group.category} className="space-y-4">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-white border-b border-white/10 pb-2">
                    {group.category}
                  </h4>
                  <p className="text-xs text-neutral-500">{group.description}</p>
                  <ul className="space-y-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="font-mono text-xs text-neutral-300 flex items-center gap-2"
                      >
                        <span className="w-1 h-1 bg-neutral-600 rounded-full" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Preview Section */}
        <section id="contact" className="space-y-12 pb-12">
          <SectionHeading
            index="04"
            category="GET IN TOUCH"
            title="LET'S CONNECT."
            subtitle="Have an idea or a collaboration in mind? Let's make it real."
          />

          <div className="border border-white/10 bg-surface p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-2">
                DIRECT INQUIRY
              </p>
              <p className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white uppercase">
                contact@gaganhandral.design
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <MagneticWrapper>
                <Button
                  href="mailto:contact@gaganhandral.design"
                  variant="primary"
                  size="lg"
                  showArrow
                >
                  Send Message
                </Button>
              </MagneticWrapper>
              <MagneticWrapper>
                <Button
                  href="https://www.linkedin.com/in/gaganhandral"
                  variant="outline"
                  size="lg"
                  isExternal
                  showArrow
                >
                  LinkedIn
                </Button>
              </MagneticWrapper>
            </div>
          </div>
        </section>

        {/* Phase Review Status Telemetry */}
        <footer className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>PHASE 1 &amp; 2 READY FOR REVIEW</span>
          </div>
          <div>DEVELOPMENT SERVER ACTIVE: HTTP://LOCALHOST:3000</div>
        </footer>
      </main>
    </SmoothScrollProvider>
  );
}
