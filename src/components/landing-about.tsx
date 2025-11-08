import { type SVGProps, useId } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export const LandingAbout = () => {
  return (
    <section className="py-32">
      {/* Hero Section */}
      <section className="lg:py-15 container relative max-w-6xl py-10 md:py-12">
        <div className="">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            Major life events
            <br />
            deserve better.
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl text-2xl md:text-3xl">
            Comprehensive questions covering 90%+ of what you need to consider.
            Expert guidance to make informed decisions.
          </p>
        </div>
        {/* Background decoration */}
        <>
          <div className="absolute inset-0 z-[-1] -translate-y-1/2 blur-[100px] will-change-transform">
            <div className="bg-gradient-1/25 -translate-x-1/5 absolute right-0 top-0 h-[400px] w-[800px] rounded-full" />
            <div className="bg-gradient-2/10 absolute right-0 top-0 size-[400px] rounded-full" />
          </div>
          <div className="absolute -inset-40 z-[-1] [mask-image:radial-gradient(circle_at_center,black_0%,black_20%,transparent_80%)]">
            <PlusSigns className="text-foreground/[0.05] h-full w-full" />
          </div>
        </>
      </section>

      {/* Stats Section */}
      <section className="container max-w-6xl border-y py-5">
        <h2 className="text-accent-foreground font-mono text-sm font-semibold tracking-widest">
          By the numbers
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
              48+
            </h3>
            <p className="text-muted-foreground mt-1 font-medium">Questions per guide</p>
          </div>
          <div>
            <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
              90%+
            </h3>
            <p className="text-muted-foreground mt-1 font-medium">Coverage</p>
          </div>
          <div>
            <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
              Months
            </h3>
            <p className="text-muted-foreground mt-1 font-medium">
              AI refinement
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
              1000+
            </h3>
            <p className="text-muted-foreground mt-1 font-medium">
              Guides planned
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="lg:py-15 container max-w-6xl py-10 md:py-12">
        <div className="max-w-2xl space-y-5 md:space-y-8 lg:space-y-10">
          <p className="text-lg">
            Planning life's biggest moments shouldn't mean months of scattered research.
            Wedding planning. Home buying. Career changes. Each one is hundreds of decisions
            with no clear roadmap, no comprehensive checklist, no way to know if you're missing something critical.
          </p>

          <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
            Think Notion meets a life coach—for life's biggest moments.
          </h2>
          <p className="text-lg">
            The organizational power of Notion combined with expert guidance and
            emotional support of a life coach. Comprehensive questions refined through
            months of AI testing. Expert readings that save you hundreds of hours.
            Integrated planning that keeps everything organized by life event.
            Nothing generic, nothing missed. Just 90%+ coverage from day one.
          </p>
        </div>
      </section>
    </section>
  );
};

interface PlusSignsProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

const PlusSigns = ({ className, ...props }: PlusSignsProps) => {
  const GAP = 16;
  const STROKE_WIDTH = 1;
  const PLUS_SIZE = 6;
  const id = useId();
  const patternId = `plus-pattern-${id}`;

  return (
    <svg width={GAP * 2} height={GAP * 2} className={className} {...props}>
      <defs>
        <pattern
          id={patternId}
          x="0"
          y="0"
          width={GAP}
          height={GAP}
          patternUnits="userSpaceOnUse"
        >
          <line
            x1={GAP / 2}
            y1={(GAP - PLUS_SIZE) / 2}
            x2={GAP / 2}
            y2={(GAP + PLUS_SIZE) / 2}
            stroke="currentColor"
            strokeWidth={STROKE_WIDTH}
          />
          <line
            x1={(GAP - PLUS_SIZE) / 2}
            y1={GAP / 2}
            x2={(GAP + PLUS_SIZE) / 2}
            y2={GAP / 2}
            stroke="currentColor"
            strokeWidth={STROKE_WIDTH}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
};
