"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Brain, Target, Zap, Calendar, FileText, Search, Database, Lock, Download, Smartphone, Moon, Shield, CheckCircle2, BookOpen, TrendingUp, Layout, BarChart } from "lucide-react";
import { Particles } from "@/components/magicui/particles";
import { SkiperUiMarquee } from "@/components/category-hero";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const FeaturesContent: React.FC = () => {
  const coreFeatures = [
    { icon: Brain, title: "Axiom Engine", description: "90%+ coverage validation ensures you consider everything that matters" },
    { icon: Sparkles, title: "AI-Refined Questions", description: "200-500+ thoughtfully crafted questions per guide" },
    { icon: BookOpen, title: "Expert Readings", description: "Curated content from trusted sources, integrated with planning" },
    { icon: Target, title: "Per-Guide Organization", description: "Separate workspaces for each life event with integrated tools" },
  ];

  const planningFeatures = [
    { icon: CheckCircle2, title: "Question Bank", description: "Answer questions at your own pace, track completion" },
    { icon: FileText, title: "Notes & Documentation", description: "Rich text notes, attachments, and organization" },
    { icon: TrendingUp, title: "Progress Tracking", description: "Visual dashboards showing completion and milestones" },
  ];

  const toolingFeatures = [
    { icon: Calendar, title: "Calendars", description: "Per-guide calendars with timeline planning" },
    { icon: Layout, title: "Task Management", description: "Organize tasks by guide with priorities and deadlines" },
    { icon: Search, title: "Powerful Search", description: "Find anything across all guides instantly" },
    { icon: Database, title: "Auto-Save", description: "Cloud sync ensures you never lose progress" },
    { icon: Lock, title: "Secure Storage", description: "Enterprise-grade security for your planning data" },
    { icon: Download, title: "Export", description: "Download your plans in multiple formats" },
    { icon: Smartphone, title: "Mobile Responsive", description: "Plan on any device, anywhere" },
    { icon: Moon, title: "Dark Mode", description: "Easy on the eyes for long planning sessions" },
    { icon: Shield, title: "Privacy First", description: "No ads, no data selling, no tracking" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 pt-56">
        <div className="container flex flex-col items-center justify-center gap-4 overflow-hidden">
          <Badge variant="secondary" className="flex items-center gap-2">
            <Sparkles className="w-3 h-3" />
            Comprehensive Features
          </Badge>

          <h1 className="relative z-15 max-w-3xl text-center text-6xl font-medium tracking-tighter md:text-7xl">
            <span
              className="overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                perspective: "600px",
              }}
            >
              {"Everything You Need to Plan".split(" ").map((word, i) => (
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
            Expert frameworks, AI-refined questions, curated readings, and integrated planning tools—all free forever
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
              icons={[Brain, Sparkles, BookOpen, Target]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[CheckCircle2, FileText, TrendingUp, BarChart]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={3}
              reverse={true}
              className=""
              icons={[Calendar, Layout, Search, Database]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[Lock, Download, Smartphone, Moon]}
              highlighted
            />
            <SkiperUiMarquee
              showCard={3}
              reverse={true}
              className=""
              icons={[Brain, Target, CheckCircle2, Calendar]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[Sparkles, FileText, Layout, Download]}
              dimmed
            />
            <SkiperUiMarquee
              reverse={true}
              showCard={1}
              className=""
              icons={[BookOpen, TrendingUp, Search, Lock]}
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
            <p className="text-muted-foreground text-lg">
              The foundation of comprehensive life planning
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
                    <div className="flex items-start gap-3">
                      <div className="bg-primary text-primary-foreground rounded-lg p-3 flex-shrink-0">
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                        <CardDescription className="text-base">
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

      {/* Planning Tools */}
      <section className="py-16 border-t border-border bg-muted/30">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">Planning Tools</h2>
            <p className="text-muted-foreground text-lg">
              Answer questions, track progress, and organize your thinking
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {planningFeatures.map((feature, index) => (
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

      {/* Infrastructure */}
      <section className="py-16 border-t border-border">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">Infrastructure & Quality of Life</h2>
            <p className="text-muted-foreground text-lg">
              Professional tools and polish for a premium experience
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
              Not blank pages. Not scattered checklists. Comprehensive expert frameworks with a premium experience.
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
                Comprehensive planning deserves thoughtful design. We're building radial progress charts, radar visualizations, timeline graphs, and other sophisticated features because transforming life's biggest moments from overwhelming to exhilarating requires both expert content <em>and</em> a premium experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};
