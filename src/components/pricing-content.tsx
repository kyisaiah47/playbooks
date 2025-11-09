"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Zap, Shield, Infinity } from "lucide-react";
import { Particles } from "@/components/magicui/particles";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const PricingContent: React.FC = () => {
  const features = [
    "Unlimited planning guides", "AI-refined questions (90%+ coverage)", "Expert curated readings",
    "Per-guide calendars & tasks", "Progress tracking & analytics", "Notes & documentation",
    "Powerful search", "Auto-save & cloud sync", "Secure data storage", "Export functionality",
    "Mobile responsive", "Dark mode", "No ads", "No data selling", "Priority feature requests"
  ];

  return (
    <div>
      <section className="relative py-32 pt-56">
        <div className="container flex flex-col items-center justify-center gap-4 overflow-hidden">
          <Badge variant="secondary" className="flex items-center gap-2">
            <Infinity className="w-3 h-3" />
            Free Forever
          </Badge>
          <h1 className="relative z-15 max-w-4xl text-center text-6xl font-medium tracking-tighter md:text-7xl">
            <span className="overflow-hidden" style={{ transformStyle: "preserve-3d", perspective: "600px" }}>
              {"Comprehensive Planning Free Forever".split(" ").map((word, i) => (
                <motion.span className="relative inline-block px-[6px] leading-[none]" key={i}
                  initial={{ opacity: 0, y: "70%", rotateX: "-28deg" }}
                  animate={{ opacity: 1, y: "0%", rotateX: "0deg" }}
                  transition={{ delay: i * 0.08 + 0.1, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}>
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>
          <p className="text-muted-foreground max-w-2xl text-center text-lg mt-4">
            No credit card required. No hidden fees. No paywalls. All features free, forever.
          </p>
          <Particles className="absolute inset-0 z-0" quantity={500} ease={80} refresh />
          <div className="h-92 bg-background absolute bottom-20 left-0 right-0 w-full blur-xl" />
        </div>
      </section>

      <section className="py-16 border-t border-border">
        <div className="container max-w-4xl">
          <Card className="overflow-hidden border-2 border-primary">
            <CardHeader className="bg-gradient-to-br from-primary/10 to-primary/5 border-b border-primary/20 text-center pb-8">
              <div className="flex justify-center mb-4">
                <div className="bg-primary text-primary-foreground rounded-full p-4">
                  <Sparkles className="w-8 h-8" />
                </div>
              </div>
              <CardTitle className="text-4xl mb-2">Free Forever</CardTitle>
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-6xl font-bold">$0</span>
                <span className="text-2xl text-muted-foreground">/forever</span>
              </div>
              <p className="text-muted-foreground">All features included. Currently in beta.</p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-3 mb-8">
                {features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Link href="/guides"><Button size="lg" className="w-full">Start Planning Free</Button></Link>
              <p className="text-center text-sm text-muted-foreground mt-4">No credit card required • Beta access</p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card>
              <CardHeader>
                <div className="bg-primary/10 rounded-lg p-3 w-fit mb-2">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">No Limits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Unlimited guides, questions, readings, notes, tasks. No artificial restrictions on free version.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-primary/10 rounded-lg p-3 w-fit mb-2">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">No Catch</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  No trial period, no credit card, no forced upgrades. Free means free.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-primary/10 rounded-lg p-3 w-fit mb-2">
                  <Infinity className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Free Forever</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Core features will always be free. Optional premium features may come later.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border bg-muted/30">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-semibold mb-4">Beta Access • No Payment Required</h2>
          <p className="text-muted-foreground text-lg mb-8">
            We're currently in beta, focused on building the best planning experience possible. All features are free with no restrictions.
          </p>
          <Link href="/guides"><Button size="lg">Get Started Free</Button></Link>
        </div>
      </section>
    </div>
  );
};
