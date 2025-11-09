"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Search,
  Heart,
  Briefcase,
  Activity,
  DollarSign,
  Home,
  Users,
  Rocket,
  Brain,
  TrendingUp,
  Wallet,
  Baby,
  Target,
  Pill,
  PiggyBank,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  BookMarked,
  ListChecks
} from "lucide-react";
import { Particles } from "@/components/magicui/particles";
import { SkiperUiMarquee } from "@/components/category-hero";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const HowToUseContent: React.FC = () => {
  const steps = [
    {
      number: 1,
      icon: BookOpen,
      title: "Choose Your Planning Guide",
      description: "Browse our collection of 70+ expert-crafted planning guides covering every major life event.",
      details: [
        "Wedding planning and celebrations",
        "Career changes and job transitions",
        "Home buying and moving",
        "Business launches and entrepreneurship",
        "Financial planning and investing",
        "Health and wellness journeys",
        "Relationship and family planning"
      ],
      link: "/guides",
      linkText: "Browse All Guides"
    },
    {
      number: 2,
      icon: ListChecks,
      title: "Answer AI-Refined Questions",
      description: "Work through systematically organized planning questions designed to help you think through every aspect of your plans.",
      details: [
        "Hundreds of questions per guide covering 90%+ of considerations",
        "AI-refined to ensure comprehensive coverage",
        "Organized by topic and category",
        "Skip, save, or come back to questions anytime",
        "Your answers are automatically saved",
        "Export your completed plans"
      ],
      link: "/questions",
      linkText: "Explore Questions"
    },
    {
      number: 3,
      icon: BookMarked,
      title: "Read Expert Content",
      description: "Access curated expert readings and resources to learn best practices and avoid common mistakes.",
      details: [
        "Curated content from domain experts",
        "Evidence-based best practices",
        "Real-world case studies and examples",
        "Common pitfalls to avoid",
        "Proven frameworks and strategies",
        "Regular content updates"
      ],
      link: "/library",
      linkText: "Visit Library"
    },
    {
      number: 4,
      icon: CheckCircle2,
      title: "Track Your Progress",
      description: "Organize your answers, notes, and action items in one integrated workspace to stay on track.",
      details: [
        "Visual progress tracking and analytics",
        "Per-guide calendar and task organization",
        "Bookmark important readings and questions",
        "Share plans with partners or family",
        "Premium radial progress charts",
        "Timeline and milestone tracking"
      ],
      link: "/guides",
      linkText: "Get Started"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 pt-56">
        <div className="container flex flex-col items-center justify-center gap-4 overflow-hidden">
          <Badge variant="secondary" className="flex items-center gap-2">
            <BookOpen className="w-3 h-3" />
            Step-by-Step Tutorial
          </Badge>

          <h1 className="relative z-15 max-w-3xl text-center text-6xl font-medium tracking-tighter md:text-7xl">
            <span
              className="overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                perspective: "600px",
              }}
            >
              {"How to Use Templata".split(" ").map((word, i) => (
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
            Master Templata in minutes. Learn to plan life's biggest moments with expert guidance, AI-refined questions, and comprehensive organizational tools.
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
              icons={[BookOpen, ListChecks, BookMarked, CheckCircle2]}
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

      {/* Quick Start */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <Separator className="mb-16" />
          <div className="mb-12">
            <h2 className="text-2xl font-medium text-foreground mb-3">Get Started in 4 Simple Steps</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From choosing a guide to tracking your progress—here's everything you need to know
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-6">
                  <div className="bg-primary text-primary-foreground rounded-full p-4 flex-shrink-0">
                    <step.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="mb-4">
                      <Badge variant="outline" className="mb-3">Step {step.number}</Badge>
                      <h3 className="text-2xl font-medium text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    <Separator className="my-6" />
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                    <Link href={step.link}>
                      <Button className="group">
                        {step.linkText}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <Separator className="mb-16" />
          <div className="mb-12">
            <h2 className="text-2xl font-medium text-foreground mb-3">Tips for Success</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Best practices to get the most out of Templata
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 rounded-lg p-3 w-fit flex-shrink-0">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground text-lg mb-2">Go at Your Own Pace</h3>
                <p className="text-muted-foreground leading-relaxed">
                  There's no rush. Templata saves your progress automatically, so you can work through planning questions and readings whenever it fits your schedule. Most guides take 2-4 hours total, but you can spread that over days or weeks.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 rounded-lg p-3 w-fit flex-shrink-0">
                <BookMarked className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground text-lg mb-2">Read Before Deciding</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our expert readings contain invaluable insights that can save you months of trial and error. Before making major decisions, explore the curated content to learn from domain specialists and avoid common pitfalls.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 rounded-lg p-3 w-fit flex-shrink-0">
                <Search className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground text-lg mb-2">Use Search & Filters</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every page has powerful search and filtering capabilities. Looking for specific topics? Use the search function to quickly find relevant questions, readings, or guides across the entire platform.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 rounded-lg p-3 w-fit flex-shrink-0">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground text-lg mb-2">Explore Related Guides</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Major life events rarely happen in isolation. Planning a wedding? Check out the home buying and financial planning guides too. Our comprehensive coverage helps you see the bigger picture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Use Cases */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <Separator className="mb-16" />
          <div className="mb-12">
            <h2 className="text-2xl font-medium text-foreground mb-3">Common Use Cases</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              See how people use Templata for major life events
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary text-primary-foreground rounded-lg p-3 flex-shrink-0">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-medium text-foreground text-lg mb-2">Planning a Wedding</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Use our wedding planning guide to organize vendors, manage your budget, coordinate the guest list, create a detailed timeline, and track all wedding details in one place. No more scattered spreadsheets or forgotten tasks.
                </p>
                <Link href="/guides">
                  <Button variant="outline" size="sm">View Wedding Guide</Button>
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary text-primary-foreground rounded-lg p-3 flex-shrink-0">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-medium text-foreground text-lg mb-2">Changing Careers</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Work through career assessment questions, research new paths, plan your transition timeline, build necessary skills, and access job search resources. Make confident career decisions backed by expert guidance.
                </p>
                <Link href="/guides">
                  <Button variant="outline" size="sm">View Career Guide</Button>
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary text-primary-foreground rounded-lg p-3 flex-shrink-0">
                <Home className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-medium text-foreground text-lg mb-2">Buying a Home</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Track your home search criteria, organize financial preparations, understand the buying process, coordinate inspections and paperwork, and make informed decisions about the biggest purchase of your life.
                </p>
                <Link href="/guides">
                  <Button variant="outline" size="sm">View Home Buying Guide</Button>
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary text-primary-foreground rounded-lg p-3 flex-shrink-0">
                <Rocket className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-medium text-foreground text-lg mb-2">Starting a Business</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Develop your comprehensive business plan, understand legal requirements, organize finances and funding, plan your launch strategy, and build a sustainable business with confidence using expert frameworks.
                </p>
                <Link href="/guides">
                  <Button variant="outline" size="sm">View Business Guide</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
