"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X, Heart, Briefcase, Activity, DollarSign, Home, Users, Rocket, Brain, TrendingUp, Wallet, Baby, Target, Pill, PiggyBank, Sparkles } from "lucide-react";
import { Particles } from "@/components/magicui/particles";
import { SkiperUiMarquee } from "@/components/category-hero";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const VsNotionContent: React.FC = () => {
  const comparisons = [
    { feature: "Planning Guidance", templata: "Expert frameworks with 90%+ coverage", notion: "Blank pages, DIY structure" },
    { feature: "AI-Refined Questions", templata: "200-500+ per guide", notion: "None - create your own" },
    { feature: "Expert Readings", templata: "Curated, vetted content", notion: "DIY research" },
    { feature: "Setup Time", templata: "Start in minutes", notion: "Hours of customization" },
    { feature: "Pricing", templata: "Free forever", notion: "$10/month for meaningful features" },
    { feature: "Per-Guide Organization", templata: "Built-in, automatic", notion: "Manual setup required" },
    { feature: "Coverage Validation", templata: "Axiom Engine ensures 90%+", notion: "No validation" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 pt-56">
        <div className="container flex flex-col items-center justify-center gap-4 overflow-hidden">
          <Badge variant="secondary" className="flex items-center gap-2">
            <Sparkles className="w-3 h-3" />
            Detailed Comparison
          </Badge>

          <h1 className="relative z-15 max-w-3xl text-center text-6xl font-medium tracking-tighter md:text-7xl">
            <span
              className="overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                perspective: "600px",
              }}
            >
              {"Templata vs Notion".split(" ").map((word, i) => (
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
            Expert frameworks with AI-refined questions vs blank pages
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
              icons={[DollarSign, PiggyBank, Wallet, Check]}
              highlighted
            />
            <SkiperUiMarquee
              showCard={3}
              reverse={true}
              className=""
              icons={[Heart, Home, Briefcase, Activity]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[Rocket, Brain, DollarSign, Users]}
              dimmed
            />
            <SkiperUiMarquee
              reverse={true}
              showCard={1}
              className=""
              icons={[Target, Pill, PiggyBank, Baby]}
              dimmed
            />
          </motion.div>

          <div className="h-92 bg-background absolute bottom-20 left-0 right-0 w-full blur-xl" />
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 border-t border-border">
        <div className="container max-w-5xl">
          <div className="space-y-3">
            {comparisons.map((comp, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="text-lg">{comp.feature}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Templata:</strong> {comp.templata}
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Notion:</strong> {comp.notion}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
