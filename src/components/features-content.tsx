"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  BookOpen,
  BarChart3,
  Calendar,
  CheckCircle2,
  Sparkles,
  Search,
  Zap,
  Lock,
  Palette,
  FileText,
  TrendingUp,
  Target,
  Lightbulb,
  Heart,
  Briefcase,
  Home,
  DollarSign
} from "lucide-react";
import { Particles } from "@/components/magicui/particles";
import { SkiperUiMarquee } from "@/components/category-hero";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const FeaturesContent: React.FC = () => {
  const coreFeatures = [
    {
      icon: Brain,
      title: "Axiom Engine",
      description: "90%+ comprehensive coverage through months of AI-assisted testing and expert validation",
      highlights: ["AI-refined questions", "Expert validation", "Edge case testing", "Continuous improvement"]
    },
    {
      icon: Target,
      title: "AI-Refined Questions",
      description: "Hundreds of systematically organized questions per guide, refined to cover all critical considerations",
      highlights: ["200-500+ questions per guide", "Organized by topic", "Skip or save for later", "Auto-save progress"]
    },
    {
      icon: BookOpen,
      title: "Expert Curated Readings",
      description: "Hand-selected articles and resources from trusted sources, no random blog posts",
      highlights: ["Vetted for quality", "Domain experts", "Evidence-based", "Contextual placement"]
    },
    {
      icon: Calendar,
      title: "Per-Guide Organization",
      description: "Dedicated workspace for each life event with separate calendars, tasks, and notes",
      highlights: ["Focused context", "Separate calendars", "Organized tasks", "Clean workspace"]
    }
  ];

  const premiumFeatures = [
    {
      icon: BarChart3,
      title: "Premium Analytics",
      description: "Sophisticated visualizations including radial progress charts, timeline graphs, and radar visualizations"
    },
    {
      icon: Palette,
      title: "Category Color Coding",
      description: "Intuitive visual organization with category-specific colors for effortless navigation"
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "See completion percentages, identify gaps, and celebrate milestones as you progress"
    },
    {
      icon: Sparkles,
      title: "Premium Design",
      description: "Sophisticated, delightful interface that makes planning feel like an experience"
    }
  ];

  const toolingFeatures = [
    {
      icon: FileText,
      title: "Notes & Documentation",
      description: "Capture thoughts alongside questions, searchable and exportable"
    },
    {
      icon: CheckCircle2,
      title: "Task Management",
      description: "Create action items organized by guide with priorities and completion tracking"
    },
    {
      icon: Search,
      title: "Powerful Search",
      description: "Find relevant content instantly across all guides, questions, and readings"
    },
    {
      icon: Zap,
      title: "Auto-Save",
      description: "Never lose work with automatic progress saving across all devices"
    },
    {
      icon: Lock,
      title: "Secure & Private",
      description: "Industry-standard encryption with your data always remaining private"
    },
    {
      icon: Lightbulb,
      title: "Smart Recommendations",
      description: "Discover related guides and content to plan comprehensively"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 pt-56">
        <div className="container flex flex-col items-center justify-center gap-4 overflow-hidden">
          <Badge variant="secondary" className="flex items-center gap-2">
            <Sparkles className="w-3 h-3" />
            Comprehensive + Beautiful
          </Badge>

          <h1 className="relative z-15 max-w-4xl text-center text-6xl font-medium tracking-tighter md:text-7xl">
            <span
              className="overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                perspective: "600px",
              }}
            >
              {"Features That Transform Planning".split(" ").map((word, i) => (
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
            Not just functional—exceptional. Templata combines comprehensive expert content with sophisticated design to make life's biggest moments feel less overwhelming and more exhilarating.
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
              icons={[Heart, Home, Briefcase, DollarSign]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[Brain, Target, BookOpen, Calendar]}
              highlighted
            />
            <SkiperUiMarquee
              showCard={3}
              reverse={true}
              className=""
              icons={[BarChart3, TrendingUp, Sparkles, Palette]}
              highlighted
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[Search, Zap, Lock, CheckCircle2]}
              dimmed
            />
          </motion.div>

          <div className="h-92 bg-background absolute bottom-20 left-0 right-0 w-full blur-xl" />
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 border-t border-border">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">Core Features</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The foundation of Templata's comprehensive planning experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {coreFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="bg-primary text-primary-foreground rounded-lg p-3">
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Experience */}
      <section className="py-16 border-t border-border bg-muted/30">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">Premium Experience</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Sophisticated design and analytics that complete the luxury planning experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {premiumFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="bg-primary/10 text-primary rounded-lg p-3 w-fit mb-3">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription>
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Tools */}
      <section className="py-16 border-t border-border">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">Planning & Organization Tools</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to organize and execute your plans
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolingFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="bg-muted rounded-lg p-2 flex-shrink-0">
                        <feature.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <CardTitle className="text-base mb-1">{feature.title}</CardTitle>
                        <CardDescription className="text-sm">
                          {feature.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="py-16 border-t border-border">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">Why Templata Is Different</h2>
            <p className="text-muted-foreground text-lg">
              Not blank pages. Not scattered checklists. Comprehensive expert frameworks + sophisticated design.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-2">90%+</h3>
              <p className="text-muted-foreground">Question coverage through Axiom Engine</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-2">1000+</h3>
              <p className="text-muted-foreground">Expert curated readings across all guides</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-2">Free</h3>
              <p className="text-muted-foreground">All core features, forever</p>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed">
                <strong>Think Superhuman meets Co-Star.</strong> We're building features that aren't strictly "necessary"—radial progress charts, radar visualizations, timeline graphs—but complete the luxury experience. Because transforming life's biggest moments from overwhelming to exhilarating requires both comprehensive content <em>and</em> sophisticated design.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-semibold mb-4">Experience the Difference</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Try Templata free and see how comprehensive planning should feel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/guides">
              <Button size="lg" className="group">
                Explore Guides
                <Sparkles className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
