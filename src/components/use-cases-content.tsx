"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Briefcase, Home, Rocket, DollarSign, Activity, Users, TrendingUp, Baby, Brain, Target, Pill } from "lucide-react";
import { Particles } from "@/components/magicui/particles";
import { SkiperUiMarquee } from "@/components/category-hero";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const UseCasesContent: React.FC = () => {
  const useCases = [
    {
      icon: Heart,
      title: "Wedding Planning",
      description: "Organize vendors, manage budget, coordinate guests, track timeline",
      details: "400+ questions covering engagement to honeymoon. Coordinate vendors, manage RSVPs, track expenses, plan timeline.",
    },
    {
      icon: Briefcase,
      title: "Career Change",
      description: "Assess options, plan transition, develop skills, execute job search",
      details: "Systematically evaluate careers, research paths, plan timeline, track applications and networking.",
    },
    {
      icon: Home,
      title: "Home Buying",
      description: "Budget planning, property search, negotiation, closing process",
      details: "Determine budget, define criteria, navigate buying process, organize documentation and inspections.",
    },
    {
      icon: Rocket,
      title: "Business Launch",
      description: "Business planning, legal setup, financial projections, launch strategy",
      details: "Develop concept, create financial projections, navigate legal requirements, plan marketing and launch.",
    },
    {
      icon: DollarSign,
      title: "Financial Planning",
      description: "Budget management, debt payoff, investment planning, savings goals",
      details: "Organize budgets by goal, learn investment strategies, track progress toward financial milestones.",
    },
    {
      icon: Activity,
      title: "Health Journeys",
      description: "Medical planning, treatment research, lifestyle changes, progress tracking",
      details: "Organize medical information, research options, plan lifestyle changes, track symptoms and progress.",
    },
    {
      icon: Users,
      title: "Moving & Relocation",
      description: "Timeline planning, location research, logistics coordination, settling in",
      details: "Plan timeline, research locations, coordinate movers and utilities, track all moving tasks.",
    },
    {
      icon: TrendingUp,
      title: "Multiple Events",
      description: "Manage concurrent life events with separate workspaces",
      details: "Per-guide organization keeps wedding tasks separate from home buying, business from career transitions.",
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 pt-56">
        <div className="container flex flex-col items-center justify-center gap-4 overflow-hidden">
          <Badge variant="secondary">Real Planning Scenarios</Badge>

          <h1 className="relative z-15 max-w-4xl text-center text-6xl font-medium tracking-tighter md:text-7xl">
            <span
              className="overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                perspective: "600px",
              }}
            >
              {"How People Use Templata".split(" ").map((word, i) => (
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
            From weddings to career changes, see how Templata helps navigate life's biggest moments
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
              icons={[Activity, Brain, Pill, DollarSign]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[Heart, Briefcase, Home, Rocket]}
              highlighted
            />
            <SkiperUiMarquee
              showCard={3}
              reverse={true}
              className=""
              icons={[Users, Activity, Target, Brain]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[DollarSign, TrendingUp, Baby, Pill]}
              dimmed
            />
            <SkiperUiMarquee
              reverse={true}
              showCard={1}
              className=""
              icons={[Heart, Home, Briefcase, Users]}
              dimmed
            />
          </motion.div>

          <div className="h-92 bg-background absolute bottom-20 left-0 right-0 w-full blur-xl" />
        </div>
      </section>

      {/* Intro Blurb */}
      <section className="py-16 border-t border-border bg-muted/30">
        <div className="container max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold mb-4">Life's Biggest Moments Deserve Expert Guidance</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Planning a wedding, changing careers, buying a home, or launching a business? These aren't just tasks to check off—they're life-defining moments with real consequences. Miss an important consideration during home buying and you might overpay by tens of thousands. Skip a critical wedding vendor question and you risk costly mistakes on your big day.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Templata provides expert frameworks with 200-500+ AI-refined questions per guide, curated readings from trusted sources, and 90%+ validated coverage through our Axiom Engine. You get comprehensive guidance instead of blank pages and guesswork.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 border-t border-border">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">Common Use Cases</h2>
            <p className="text-muted-foreground text-lg">
              See how people are using Templata to navigate major life events
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="bg-primary text-primary-foreground rounded-lg p-3">
                        <useCase.icon className="w-6 h-6" />
                      </div>
                      <CardTitle>{useCase.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">{useCase.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{useCase.details}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 border-t border-border bg-muted/30">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">How Templata Works for Every Life Event</h2>
            <p className="text-muted-foreground text-lg">
              Same powerful approach, customized for each major moment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Guide</h3>
              <p className="text-muted-foreground">
                Select the life event you're planning. Each guide has expert frameworks tailored to that specific moment.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Answer Questions</h3>
              <p className="text-muted-foreground">
                Work through 200-500+ AI-refined questions at your own pace. Each question helps you think through what matters.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Learn & Plan</h3>
              <p className="text-muted-foreground">
                Read curated expert content, organize tasks and calendars, track progress—all in one integrated workspace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Alternative */}
      <section className="py-16 border-t border-border">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Plan Comprehensively?</h2>
          <p className="text-muted-foreground text-lg mb-6">
            Stop guessing what you might be missing. Get expert frameworks, AI-refined questions, and curated readings for life's biggest moments—free forever.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-1">90%+</h3>
              <p className="text-sm text-muted-foreground">Validated coverage</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-1">200-500+</h3>
              <p className="text-sm text-muted-foreground">Questions per guide</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-1">Free</h3>
              <p className="text-sm text-muted-foreground">Forever, no catch</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
