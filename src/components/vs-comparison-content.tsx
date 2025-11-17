"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, CircleMinus, Heart, Briefcase, Activity, DollarSign, Home, Users, Rocket, Brain, TrendingUp, Wallet, Baby, Target, Pill, PiggyBank, Sparkles } from "lucide-react";
import { Particles } from "@/components/magicui/particles";
import { SkiperUiMarquee } from "@/components/category-hero";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

interface Feature {
  text: string;
  present: boolean;
}

interface VsComparisonContentProps {
  title: string;
  subtitle: string;
  intro: string;
  templataFeatures: Feature[];
  competitorName: string;
  competitorFeatures: Feature[];
  competitorGoodFor: {
    title: string;
    content: string;
  };
  whyTemplata: {
    title: string;
    paragraphs: string[];
  };
}

export const VsComparisonContent: React.FC<VsComparisonContentProps> = ({
  title,
  subtitle,
  intro,
  templataFeatures,
  competitorName,
  competitorFeatures,
  competitorGoodFor,
  whyTemplata,
}) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 pt-32">
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
              {title.split(" ").map((word, i) => (
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
            {subtitle}
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

      {/* Comparison Body */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <Separator className="mb-16" />
          <div className="mb-12">
            <p className="text-muted-foreground text-lg leading-relaxed">
              {intro}
            </p>
          </div>
          <div className="mt-12">
            <div className="mx-auto grid gap-6 md:grid-cols-2">
              <div className="bg-background rounded-xl border p-6 shadow">
                <span className="flex items-center justify-center gap-2 font-medium">
                  <Image
                    src="/favicon.svg"
                    alt="Templata"
                    width={28}
                    height={28}
                    className="h-7 w-7 dark:invert-0 invert"
                  />
                  Templata
                </span>
                <Separator className="my-6" />
                <ul className="space-y-2">
                  {templataFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />
                      {feature.text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-border/40 rounded-xl p-6">
                <span className="flex items-center justify-center gap-2 font-medium">
                  {competitorName}
                </span>
                <Separator className="my-6" />
                <ul className="space-y-2">
                  {competitorFeatures.map((feature, idx) => (
                    <li
                      key={idx}
                      className={
                        feature.present
                          ? "flex items-center gap-2"
                          : "text-muted-foreground flex items-center gap-2"
                      }
                    >
                      {feature.present ? (
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />
                      ) : (
                        <CircleMinus className="h-5 w-5 shrink-0 opacity-50" />
                      )}
                      {feature.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <Separator className="my-16" />
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <h2 className="text-2xl font-medium text-foreground">
              {competitorGoodFor.title}
            </h2>
            <p>{competitorGoodFor.content}</p>
          </div>
          <Separator className="my-16" />
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <h2 className="text-2xl font-medium text-foreground">
              {whyTemplata.title}
            </h2>
            {whyTemplata.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
