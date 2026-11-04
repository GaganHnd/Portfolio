import { personalInfo } from "@/data/social-links";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Divider } from "@/components/ui/Divider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { MagneticWrapper } from "@/components/ui/MagneticWrapper";
import { SmoothScrollProvider } from "@/components/animations/SmoothScrollProvider";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <CustomCursor />
      <main className="min-h-screen bg-background text-foreground px-6 md:px-12 lg:px-20 py-16 max-w-7xl mx-auto">
        {/* Foundation Header */}
        <header className="border-b border-white/10 pb-8 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="status">{personalInfo.status}</Badge>
              <Badge variant="outline">PHASE 1 & 2 FOUNDATION</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tight text-white">
              {personalInfo.wordmark}
            </h1>
            <p className="font-mono text-xs md:text-sm text-neutral-400 mt-2 tracking-widest uppercase">
              {personalInfo.title}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <MagneticWrapper>
              <Button href="#design-system" variant="outline" size="sm" showArrow>
                Explore System
              </Button>
            </MagneticWrapper>
          </div>
        </header>

        {/* Design System & Typography Demonstration */}
        <section id="design-system" className="space-y-16">
          <SectionHeading
            index="01"
            category="DESIGN SYSTEM & TOKENS"
            title="TYPOGRAPHY & PALETTE."
            subtitle="Strict Swiss architectural hierarchy, deep obsidian palette, and precision hairline borders."
          />

          {/* Typography Scale Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border border-white/10 p-8 bg-surface">
            <div className="space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                01 / Primary Display Heading (Space Grotesk)
              </span>
              <div className="space-y-2">
                <p className="text-5xl md:text-7xl font-heading font-black tracking-tight text-white uppercase leading-none">
                  GAGAN.
                </p>
                <p className="text-2xl md:text-3xl font-heading font-bold uppercase tracking-tight text-neutral-300">
                  DESIGN IS HOW IT WORKS
                </p>
              </div>
            </div>

            <div className="space-y-6 lg:border-l lg:border-white/10 lg:pl-8">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                02 / Editorial Accent & Body (Inter + Cormorant)
              </span>
              <div className="space-y-4">
                <p className="font-serif italic text-2xl md:text-3xl text-neutral-200">
                  &ldquo;Aesthetics, functionality and human-centred storytelling.&rdquo;
                </p>
                <p className="font-sans text-neutral-400 text-sm md:text-base leading-relaxed">
                  Every interface element is calibrated for maximum clarity, minimal cognitive
                  friction, and cinematic presence.
                </p>
                <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
                  MONOSPACE METADATA • 2024 • RATIO 1:1.618 • 60 FPS
                </p>
              </div>
            </div>
          </div>

          <Divider label="COLOUR SPECIFICATION" withCross />

          {/* Colour Swatches */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            <div className="p-4 border border-white/10 bg-[#050505]">
              <div className="h-16 w-full border border-white/10 mb-3 bg-[#050505]" />
              <p className="font-mono text-xs text-white uppercase">Primary</p>
              <p className="font-mono text-[10px] text-neutral-500">#050505</p>
            </div>
            <div className="p-4 border border-white/10 bg-[#0D0D0D]">
              <div className="h-16 w-full border border-white/10 mb-3 bg-[#0D0D0D]" />
              <p className="font-mono text-xs text-white uppercase">Secondary</p>
              <p className="font-mono text-[10px] text-neutral-500">#0D0D0D</p>
            </div>
            <div className="p-4 border border-white/10 bg-[#141414]">
              <div className="h-16 w-full border border-white/10 mb-3 bg-[#141414]" />
              <p className="font-mono text-xs text-white uppercase">Elevated</p>
              <p className="font-mono text-[10px] text-neutral-500">#141414</p>
            </div>
            <div className="p-4 border border-white/10 bg-surface">
              <div className="h-16 w-full border border-white/10 mb-3 bg-white" />
              <p className="font-mono text-xs text-white uppercase">Text Main</p>
              <p className="font-mono text-[10px] text-neutral-500">#FFFFFF</p>
            </div>
            <div className="p-4 border border-white/10 bg-surface">
              <div className="h-16 w-full border border-white/10 mb-3 bg-[#A0A0A0]" />
              <p className="font-mono text-xs text-white uppercase">Text Sec</p>
              <p className="font-mono text-[10px] text-neutral-500">#A0A0A0</p>
            </div>
            <div className="p-4 border border-white/10 bg-surface">
              <div className="h-16 w-full border border-white/10 mb-3 bg-[#22C55E]" />
              <p className="font-mono text-xs text-white uppercase">Accent</p>
              <p className="font-mono text-[10px] text-neutral-500">#22C55E</p>
            </div>
          </div>

          <Divider label="REUSABLE COMPONENTS" withCross />

          {/* Interactive Component Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Buttons & Interactions */}
            <div className="border border-white/10 p-8 bg-surface space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block">
                Button &amp; CTA System
              </span>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="primary" showArrow>
                  Primary CTA
                </Button>
                <Button variant="secondary" showArrow>
                  Secondary
                </Button>
                <Button variant="outline" showArrow>
                  Outline
                </Button>
                <Button variant="link" showArrow>
                  Text Link
                </Button>
              </div>
            </div>

            {/* Badges & Meta Indicators */}
            <div className="border border-white/10 p-8 bg-surface space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block">
                Badges &amp; Status Indicators
              </span>
              <div className="flex flex-wrap gap-3 items-center">
                <Badge variant="status">AVAILABLE FOR SELECT PROJECTS</Badge>
                <Badge variant="default">UI/UX DESIGN</Badge>
                <Badge variant="outline">GRAPHIC DESIGN</Badge>
                <Badge variant="editorial">YEAR 2024</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Phase Progress Telemetry */}
        <footer className="mt-24 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-500">
          <div>
            <span>SYSTEM STATUS: </span>
            <span className="text-emerald-400">PHASE 1 &amp; 2 COMPILED &amp; VERIFIED</span>
          </div>
          <div>READY FOR PHASE 3: CINEMATIC HERO &amp; NAVIGATION</div>
        </footer>
      </main>
    </SmoothScrollProvider>
  );
}
