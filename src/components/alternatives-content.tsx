"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Heart, Briefcase, Activity, DollarSign, Home, Users, Rocket, Brain, TrendingUp, Wallet, Baby, Target, Pill, PiggyBank, Sparkles, ArrowRight } from "lucide-react";
import { Particles } from "@/components/magicui/particles";
import { SkiperUiMarquee } from "@/components/category-hero";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const AlternativesContent: React.FC = () => {
  const alternatives = [
    {
      name: "Templata",
      isRecommended: true,
      pros: [
        "Expert-crafted frameworks for life events",
        "90%+ coverage with AI-refined questions",
        "Curated expert readings for each decision",
        "Free forever - no hidden costs",
        "Purpose-built for life planning"
      ],
      cons: [
        "Focused on life planning (not general notes)"
      ],
      bestFor: "Wedding planning, career changes, home buying, business launches, and major life decisions",
      pricing: "Free forever"
    },
    {
      name: "Notion",
      pros: [
        "Flexible database and note system",
        "Good for general organization",
        "Team collaboration features"
      ],
      cons: [
        "Blank pages require you to create everything",
        "No expert guidance for life planning",
        "Steep learning curve",
        "No AI-refined planning questions"
      ],
      bestFor: "General note-taking and knowledge management",
      pricing: "Free tier limited, paid plans required for teams"
    },
    {
      name: "Google Docs",
      pros: [
        "Free to use",
        "Simple and familiar interface",
        "Good for basic writing"
      ],
      cons: [
        "No planning structure or frameworks",
        "No expert content",
        "You start from blank page",
        "No planning-specific features"
      ],
      bestFor: "Basic document creation and sharing",
      pricing: "Free"
    },
    {
      name: "Trello",
      pros: [
        "Visual kanban boards",
        "Simple task tracking",
        "Easy to learn"
      ],
      cons: [
        "Only task lists, no planning guidance",
        "No expert frameworks",
        "Limited for complex planning",
        "No AI-refined questions"
      ],
      bestFor: "Simple task management and checklists",
      pricing: "Free tier limited, paid for advanced features"
    },
    {
      name: "Asana",
      pros: [
        "Robust project management",
        "Timeline and workflow views",
        "Team collaboration"
      ],
      cons: [
        "Built for work projects, not life planning",
        "No expert life planning content",
        "Paid plans for meaningful features",
        "Overwhelming for personal use"
      ],
      bestFor: "Work project management and team coordination",
      pricing: "Free tier very limited, paid plans required"
    },
    {
      name: "Monday.com",
      pros: [
        "Customizable workflows",
        "Visual project boards",
        "Automation features"
      ],
      cons: [
        "Work-focused, not for life planning",
        "Expensive for individuals",
        "No life planning expertise",
        "Complex for personal use"
      ],
      bestFor: "Business workflows and team projects",
      pricing: "Paid subscription required"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 pt-56">
        <div className="container flex flex-col items-center justify-center gap-4 overflow-hidden">
          <Badge variant="secondary" className="flex items-center gap-2">
            <Sparkles className="w-3 h-3" />
            Complete Comparison
          </Badge>

          <h1 className="relative z-15 max-w-4xl text-center text-6xl font-medium tracking-tighter md:text-7xl">
            <span
              className="overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                perspective: "600px",
              }}
            >
              {"Best Life Planning Apps".split(" ").map((word, i) => (
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
            Compare Templata, Notion, Google Docs, Trello, Asana, Monday.com and find the best tool for planning life's biggest moments
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
              icons={[Heart, Home, Users, Baby]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[Briefcase, Rocket, Target, TrendingUp]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={3}
              reverse={true}
              className=""
              icons={[Activity, Brain, Pill, Sparkles]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[DollarSign, PiggyBank, Wallet, CheckCircle2]}
              highlighted
            />
            <SkiperUiMarquee
              showCard={3}
              reverse={true}
              className=""
              icons={[Heart, Home, Users, Baby]}
              dimmed
            />
          </motion.div>
        </div>
      </section>

      {/* Alternatives Comparison */}
      <section className="py-16">
        <div className="container max-w-6xl">
          <Separator className="mb-16" />
          <div className="space-y-8">
          {alternatives.map((alt, index) => (
            <motion.div
              key={alt.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`border rounded-lg p-8 ${alt.isRecommended ? 'border-green-500 shadow-lg' : ''}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold flex items-center gap-2">
                    {alt.name}
                    {alt.isRecommended && (
                      <Badge className="bg-green-500">Recommended</Badge>
                    )}
                  </h3>
                  <p className="text-muted-foreground mt-2">{alt.bestFor}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Pricing</p>
                  <p className="font-semibold">{alt.pricing}</p>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    Pros
                  </h4>
                  <ul className="space-y-2">
                    {alt.pros.map((pro, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-500" />
                    Cons
                  </h4>
                  <ul className="space-y-2">
                    {alt.cons.map((con, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {alt.isRecommended && (
                <div className="mt-6">
                  <Link href="/guides">
                    <Button className="w-full">
                      Get Started with Templata <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              )}
            </motion.div>
          ))}
        </div>

          <Separator className="my-16" />

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground max-w-4xl mx-auto">
            <h2 className="text-2xl font-medium text-foreground">Choosing the Best Life Planning Tool</h2>
            <p>
              When choosing a life planning tool, consider what you actually need: Do you need expert frameworks and guidance for major life decisions? Or do you just need a place to write notes?
            </p>
          </div>

          <Separator className="my-16" />

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground max-w-4xl mx-auto">
            <h3 className="text-2xl font-medium text-foreground">Why Templata Stands Out for Life Planning</h3>
            <ul className="space-y-3">
              <li><strong>Purpose-built for life planning</strong> - Unlike general tools adapted for planning, Templata is designed specifically for major life events</li>
              <li><strong>Expert frameworks with 90%+ coverage</strong> - AI-refined question sets ensure you consider everything important</li>
              <li><strong>Curated expert content</strong> - Learn from domain experts instead of random internet searches</li>
              <li><strong>Free forever</strong> - No paywalls, no subscriptions, no hidden costs</li>
            </ul>
          </div>

          <Separator className="my-16" />

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground max-w-4xl mx-auto">
            <h3 className="text-2xl font-medium text-foreground">When Other Tools Make Sense</h3>
            <p>
              <strong>Notion:</strong> Great for general note-taking and knowledge bases if you enjoy building custom systems.
            </p>
            <p>
              <strong>Google Docs:</strong> Perfect for simple document writing and sharing.
            </p>
            <p>
              <strong>Trello:</strong> Good for basic task lists and simple kanban boards.
            </p>
            <p>
              <strong>Asana/Monday:</strong> Excellent for work project management and team collaboration.
            </p>
          </div>

          <Separator className="my-16" />

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground max-w-4xl mx-auto">
            <h3 className="text-2xl font-medium text-foreground">The Bottom Line</h3>
            <p>
              For major life planning (weddings, careers, home buying, business launches), Templata provides the expert guidance, comprehensive frameworks, and AI-refined questions that general tools don't offer. For simple notes or work projects, other tools may fit better. Choose based on your actual needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
