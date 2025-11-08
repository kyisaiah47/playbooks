"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ManifestoAudio } from "@/components/manifesto-audio";

const AboutHero = () => {
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
          </div>
        </div>

        {/* Main Narrative */}
        <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
          <p>
            Templata started from a simple observation: life's biggest moments
            shouldn't start with a blank page.
          </p>

          <p>
            We were inspired by tools that democratized complexity—<strong>Notion</strong>,
            which turned scattered thoughts into organized knowledge, and <strong>Canva</strong>,
            which made professional design accessible to everyone. Both proved that the
            right structure and guidance could unlock capability for millions of people.
          </p>

          <p>
            But when you're planning a wedding, buying a home, or changing careers?
            You're handed a blank document and told to figure it out. Months of Google
            searches. Scattered notes. Forgotten tasks. The constant worry that you're
            missing something critical.
          </p>

          <p>
            So we set out to build what Notion did for notes and Canva did for design—but
            for life's biggest moments.
          </p>

          <p className="text-2xl font-medium text-foreground pt-8">
            The Evolution
          </p>

          <p>
            Our first vision was simple: <em>"Life shouldn't start with a blank page."</em>
            We built comprehensive guides—1,300+ of them eventually—covering everything
            from wedding planning to career changes. We generated 104,000+ questions (previously called prompts,
            questions) to help people think through every angle of their decisions.
          </p>

          <p>
            Then we evolved into something bigger: <strong>Notion × Wikipedia</strong>.
            Not just guides, but "the encyclopedia for living"—a comprehensive knowledge
            system for life's biggest decisions. We added expert readings, curated guidance,
            and integrated planning tools.
          </p>

          <p>
            For a brief period, we explored positioning ourselves as a new category:
            "guided productivity." But that felt too narrow. What we were building was
            more expansive—a synthesis of everything we'd learned through months of
            iteration and refinement.
          </p>

          <p>
            Today, we've found the clearest expression of what we are: <strong>Notion
            meets a life coach</strong>. The organizational power of Notion combined with
            the expert guidance and emotional support of a life coach—for life's biggest
            moments.
          </p>

          {/* Manifesto Callout */}
          <Card className="border-2 border-primary/20 bg-primary/5 my-12 relative">
            <ManifestoAudio />
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-foreground font-medium">Our original manifesto still holds true:</p>

                <p>Life shouldn't start with a blank page.</p>

                <p>But for too long, that's all we've been given.<br />
                A white screen. An empty checklist.<br />
                A cursor blinking like a dare: 'figure it out.'</p>

                <p>Notion. Docs. Task apps.<br />
                They all hand you the same void.<br />
                And they call it productivity.</p>

                <p>But a blank page has never guided a wedding.<br />
                A blank page has never bought a home.<br />
                A blank page has never changed a life.</p>

                <p className="text-foreground font-medium">Templata is the end of the blank page era.</p>

                <p>Not emptiness — abundance.<br />
                Not silence — guidance.<br />
                Not guessing — clarity.</p>
              </div>
            </CardContent>
          </Card>

          <p className="text-2xl font-medium text-foreground pt-8">
            Where We Are Now
          </p>

          <p>
            Today, Templata is the synthesis of every iteration—comprehensive guides
            powered by our <strong>Axiom Engine</strong> (months of AI refinement ensuring
            90%+ coverage), expert readings that save you hundreds of hours, and integrated
            planning tools organized per-guide.
          </p>

          <p>
            But we've also evolved our design philosophy. We realized that life's biggest
            moments deserve more than just functional tools—they deserve <em>exceptional
            experiences</em>. Premium analytics that visualize your progress. Category-based
            color coding that makes organization intuitive. Sophisticated interactions that
            feel delightful.
          </p>

          <p>
            Think <strong>Superhuman</strong> (premium email with obsessive attention to
            detail) meets <strong>Co-Star</strong> (premium astrology with sophisticated design).
            We're building features that aren't strictly "necessary"—radial progress charts,
            radar visualizations, timeline graphs—but complete the luxury experience.
            Because transforming life's biggest moments from overwhelming to exhilarating
            requires both comprehensive content <em>and</em> sophisticated design.
          </p>

          <p>
            Our guides now include comprehensive questions covering 90%+ of what you need
            to consider, curated expert readings, per-guide calendar and task organization,
            and premium progress tracking that makes your journey feel like an experience,
            not just a checklist.
          </p>

          <p>
            We're building toward 1,000+ guides—each one refined through our Axiom Engine,
            each one wrapped in the same premium UX, each one designed to save you months
            of research and transform how you approach life's biggest moments.
          </p>

          <p className="text-foreground font-medium text-xl pt-8">
            The blank page is dead. And life's biggest moments have never looked better.
          </p>
        </div>
      </div>
    </section>
  );
};

export { AboutHero };
