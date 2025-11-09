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
              highlighted
            />
            <SkiperUiMarquee
              showCard={3}
              reverse={true}
              className=""
              icons={[Activity, Brain, Pill, DollarSign]}
              dimmed
            />
          </motion.div>

          <div className="h-92 bg-background absolute bottom-20 left-0 right-0 w-full blur-xl" />
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 border-t border-border">
        <div className="container max-w-6xl">
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
    </div>
  );
};
