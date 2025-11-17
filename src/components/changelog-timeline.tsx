"use client";

import { ArrowRight, Sparkles, Zap, TrendingUp, Rocket, Heart, Target, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Particles } from "@/components/magicui/particles";
import { SkiperUiMarquee } from "@/components/category-hero";

const ChangelogTimeline = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 pt-32">
        <div className="container flex flex-col items-center justify-center gap-4 overflow-hidden">
          <Badge variant="secondary" className="flex items-center gap-2">
            <Sparkles className="w-3 h-3" />
            Latest Updates
          </Badge>

          <h1 className="relative z-15 max-w-3xl text-center text-6xl font-medium tracking-tighter md:text-7xl">
            <span
              className="overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                perspective: "600px",
              }}
            >
              {"Changelog".split(" ").map((word, i) => (
                <motion.span
                  className="relative inline-block px-[6px] leading-[none]"
                  key={i}
                  initial={{
                    opacity: 0,
                    y: "70%",
                    rotateX: "-28deg",
                  }}
                  animate={{
                    opacity: 1,
                    y: "0%",
                    rotateX: "0deg",
                  }}
                  transition={{
                    delay: i * 0.08 + 0.1,
                    duration: 0.8,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>

          <p className="text-muted-foreground max-w-2xl text-center text-lg mt-4">
            Track the latest updates, features, and improvements to Templata
          </p>

          <Particles
            className="absolute inset-0 z-0"
            quantity={500}
            ease={80}
            refresh
          />

          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            className="relative z-20 mt-10 flex items-center justify-center gap-4"
          >
            <SkiperUiMarquee
              showCard={1}
              className=""
              reverse={true}
              icons={[Sparkles, Zap, TrendingUp, Rocket]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[Heart, Target, CheckCircle2, Sparkles]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={3}
              reverse={true}
              className=""
              icons={[Rocket, TrendingUp, Zap, Sparkles]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[Sparkles, Zap, TrendingUp, Rocket]}
              highlighted
            />
            <SkiperUiMarquee
              showCard={3}
              reverse={true}
              className=""
              icons={[CheckCircle2, Heart, Target, Sparkles]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[Zap, Rocket, TrendingUp, Sparkles]}
              dimmed
            />
            <SkiperUiMarquee
              reverse={true}
              showCard={1}
              className=""
              icons={[Target, CheckCircle2, Heart, Sparkles]}
              dimmed
            />
          </motion.div>

          <div className="h-92 bg-background absolute bottom-20 left-0 right-0 w-full blur-xl" />
        </div>
      </section>

      {/* Timeline Content */}
      <section className="py-16 border-t border-border">
        <div className="container">
        <div className="border-border mx-auto mt-20 max-w-2xl space-y-10 border-l border-dashed pl-6">
          <div>
            <p className="text-muted-foreground relative font-mono text-sm">
              <time className="absolute -left-6 top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-muted-foreground"></time>
              November 16, 2025
            </p>
            <div className="my-4">
              <h2 className="mb-2 text-2xl font-semibold">Design Refresh & Feedback System</h2>
              <p className="mb-4 text-muted-foreground">
                Visual refinements and new feedback functionality for improved user experience.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Added feedback modal and functionality for user input</li>
                <li>Refreshed theming with muted purple accent colors for easier viewing</li>
                <li>Reduced stark contrasts for a more comfortable reading experience</li>
                <li>Updated to Outfit font family for improved readability</li>
                <li>New icon design for better brand consistency</li>
                <li>Redesigned 404 page with animated particles and marquee icons</li>
              </ul>
            </div>
          </div>

          <div>
            <p className="text-muted-foreground relative font-mono text-sm">
              <time className="absolute -left-6 top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-primary"></time>
              November 6, 2025
            </p>
            <div className="my-4">
              <h2 className="mb-2 text-2xl font-semibold">Version 0.2.0 - MVP v2</h2>
              <p className="mb-4 text-muted-foreground">
                Complete product overhaul with luxury positioning and refined user experience.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Brand Evolution</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Repositioned as luxury product inspired by Co-Star and Superhuman</li>
                    <li>New tagline: "Notion meets a life coach"</li>
                    <li>Refined visual identity and elevated design language</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Content Refinement</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Distilled guides down to highest-quality, most impactful content</li>
                    <li>Enhanced questions with better AI refinement and categorization</li>
                    <li>Improved readings with more expert-curated content</li>
                    <li>Added content availability indicators - guides without complete content are clearly marked</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Complete UI/UX Overhaul</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Redesigned /app with streamlined workflow and modern interface</li>
                    <li>New planning and analytics features for comprehensive life organization</li>
                    <li>Simplified navigation with improved information architecture</li>
                    <li>Enhanced reading experience with animated hero sections</li>
                    <li>Improved mobile responsiveness and accessibility</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-muted-foreground relative font-mono text-sm">
              <time className="absolute -left-6 top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-muted-foreground"></time>
              October 21, 2025
            </p>
            <div className="my-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Approved and listed on{' '}
                  <a
                    href="https://alternativeto.net/software/templata/about/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    AlternativeTo
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <p className="text-muted-foreground relative font-mono text-sm">
              <time className="absolute -left-6 top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-muted-foreground"></time>
              October 19, 2025
            </p>
            <div className="my-4 space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">New Features</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Added How It Works page to help new users understand the app</li>
                  <li>Added PDF export for your responses</li>
                  <li>Added Responses tab to Overview to view everything in one place</li>
                  <li>Added search in readings to find specific information</li>
                  <li>Organized featured guides into 3 sections: General, Gen Z, and Health & Wellness</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Improvements</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Made the banner interactive - click on highlighted words to see how the app works</li>
                  <li>Added helpful explanations throughout the site to guide you</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <p className="text-muted-foreground relative font-mono text-sm">
              <time className="absolute -left-6 top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-muted-foreground"></time>
              October 18, 2025
            </p>
            <div className="my-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>Featured guides section added for quick access to popular guides in your workspace</li>
              </ul>
            </div>
          </div>

          <div>
            <p className="text-muted-foreground relative font-mono text-sm">
              <time className="absolute -left-6 top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-primary"></time>
              October 18, 2025
            </p>
            <div className="my-4">
              <h2 className="mb-2 text-2xl font-semibold">Version 0.1.0 - Public Beta Launch</h2>
              <p className="mb-4 text-muted-foreground">
                Templata is now live in public beta with a comprehensive guide library for life planning.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Comprehensive guide library across all life categories</li>
                <li>AI-refined questions for thorough planning</li>
                <li>Expert-curated readings providing guidance</li>
                <li>User authentication and track management</li>
                <li>Multiple view modes for comprehensive life planning</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-2xl mt-12 pt-8 border-t">
          <h2 className="text-2xl font-semibold mb-4">Stay Updated</h2>
          <p className="mb-4 text-muted-foreground">
            Want to be the first to know about new features and updates? Check back here regularly for the latest changes.
          </p>
          <p className="text-muted-foreground">
            Have feedback or suggestions? Contact us at templata.app@gmail.com
          </p>
        </div>
        </div>
      </section>
    </>
  );
};

export { ChangelogTimeline };
