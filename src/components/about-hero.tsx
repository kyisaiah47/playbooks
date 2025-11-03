"use client";

const AboutHero = () => {

  const stats = [
    {
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
      title: "Comprehensive Questions",
      description: "90%+ coverage",
    },
    {
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg",
      title: "Expert Readings",
      description: "Curated guidance",
    },
    {
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg",
      title: "Integrated Planning",
      description: "Organized by life event",
    },
  ];

  return (
    <section className="py-16">
      <div className="container max-w-4xl">
        {/* Icon and Intro */}
        <div className="mb-16 space-y-8">
          <div className="flex justify-start">
            <div className="bg-muted rounded-full p-6">
              <img
                src="/favicon.svg"
                alt="Templata"
                className="h-16 dark:invert-0 invert"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
              Our Story
            </h1>
            <p className="text-muted-foreground max-w-3xl text-xl leading-relaxed">
              Planning life's biggest moments shouldn't mean months of scattered research.
              Wedding planning. Home buying. Career changes. Each one is hundreds of decisions
              with no clear roadmap, no comprehensive checklist, no way to know if you're missing something critical.
            </p>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
              Three Core Features
            </h2>
            <p className="text-muted-foreground mt-2 text-lg leading-relaxed">
              Everything you need for life's biggest moments
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-lg border p-4"
              >
                <div className="flex h-10 w-10 items-center justify-center">
                  <img
                    src={stat.icon}
                    alt={stat.title}
                    className="h-6 w-6 object-contain"
                  />
                </div>
                <div>
                  <div className="text-sm font-medium">{stat.title}</div>
                  <div className="text-muted-foreground text-xs">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-16 space-y-6">
          <h2 className="text-2xl font-medium tracking-tight md:text-3xl">Notion gives you blank pages. Google gives you scattered information.</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We built Templata because major life decisions deserve better.
            Comprehensive questions refined through months of AI testing.
            Expert readings that save you hundreds of hours. Integrated planning
            that keeps everything organized by life event. Nothing generic,
            nothing missed. Just 90%+ coverage from day one.
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Our guides combine three essential elements: comprehensive questions
            to ensure you're thinking about everything, curated expert readings
            to give you the knowledge you need, and integrated planning tools
            to keep you organized. Whether you're planning a wedding, buying
            your first home, or changing careers, we've done the research so
            you don't have to.
          </p>

          <h2 className="text-2xl font-medium tracking-tight md:text-3xl mt-8">Built with Axiom Engine</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Every guide is powered by our Axiom Engine—months of AI refinement
            testing question sets for comprehensiveness and clarity. We don't
            just throw together generic checklists. Each question has been
            validated to ensure it covers the critical considerations for that
            specific life event.
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed">
            The result? Guides that feel like they were made specifically for
            your situation, because they capture what actually matters when
            you're making these decisions. No fluff, no obvious advice—just
            the thoughtful questions and expert guidance you need.
          </p>

          <h2 className="text-2xl font-medium tracking-tight md:text-3xl mt-8">1000+ Guides Planned</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We're building the comprehensive library of life event guides.
            From major milestones like weddings and home purchases to career
            transitions and personal development, we're creating guides for
            every significant moment in your life. Each one backed by expert
            research and AI-refined questions.
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Our goal is simple: when you face a major life decision, you
            shouldn't have to start from scratch. You should have a
            comprehensive guide that's already done the hard work of figuring
            out what you need to consider, sourcing the expert knowledge,
            and organizing it all in one place.
          </p>
        </div>
      </div>
    </section>
  );
};

export { AboutHero };
