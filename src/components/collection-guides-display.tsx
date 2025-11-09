"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import * as LucideIcons from "lucide-react";
import { ArrowLeft, BookOpen, FileQuestion, ChevronDown, ChevronUp, Package } from "lucide-react";
import { motion } from "framer-motion";
import { Particles } from "@/components/magicui/particles";
import { cn } from "@/lib/utils";
import { Heart, Briefcase, Activity, DollarSign, Home, Users, Rocket, Brain, TrendingUp, Wallet, Baby, Target, Pill, PiggyBank, Sparkles } from "lucide-react";
import { SkiperUiMarquee } from "@/components/category-hero";

interface Guide {
  id: string;
  name: string;
  description: string;
  category: string;
  icon?: string;
  difficulty?: string;
  estimated_time?: string;
  tags?: string[];
  hasContent?: boolean;
  questionsCount?: number;
  readingsCount?: number;
}

interface Collection {
  id: string;
  name: string;
  description: string;
  guides: Guide[];
}

interface OtherCollection {
  id: string;
  name: string;
  description: string;
}

interface QuestionGroup {
  guideName: string;
  guideId: string;
  questions: Array<{
    id: string;
    question: string;
    question_number: number;
  }>;
  totalCount: number;
}

interface ReadingGroup {
  guideName: string;
  guideId: string;
  readings: Array<{
    id: string;
    title: string;
    excerpt: string;
    author: string;
    read_time: string;
  }>;
  totalCount: number;
}

interface CollectionGuidesDisplayProps {
  collection: Collection;
  otherCollections: OtherCollection[];
  questionsGrouped: QuestionGroup[];
  readingsGrouped: ReadingGroup[];
  totalQuestionsCount: number;
  totalReadingsCount: number;
}

export const CollectionGuidesDisplay: React.FC<CollectionGuidesDisplayProps> = ({
  collection,
  otherCollections,
  questionsGrouped,
  readingsGrouped,
  totalQuestionsCount,
  totalReadingsCount,
}) => {
  const [expandedGuides, setExpandedGuides] = useState<Set<string>>(new Set());

  const toggleGuide = (guideId: string) => {
    setExpandedGuides(prev => {
      const newSet = new Set(prev);
      if (newSet.has(guideId)) {
        newSet.delete(guideId);
      } else {
        newSet.add(guideId);
      }
      return newSet;
    });
  };

  return (
    <div>
      {/* Collection Hero */}
      <section className="relative py-32 pt-56">
        <div className="container flex flex-col items-center justify-center gap-4 overflow-hidden">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Badge variant="secondary" className="flex items-center gap-2">
              <Package className="w-3 h-3" />
              Collection
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2">
              <FileQuestion className="w-3 h-3" />
              {totalQuestionsCount} Planning Questions
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2">
              <BookOpen className="w-3 h-3" />
              {totalReadingsCount} Expert Readings
            </Badge>
          </div>

          <h1 className="relative z-15 max-w-3xl text-center text-6xl font-medium tracking-tighter md:text-7xl">
            <span
              className="overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                perspective: "600px",
              }}
            >
              {collection.name.split(" ").map((word, i) => (
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
            {collection.description}
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
              icons={[Package, Package, Package, Package]}
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

      {/* Breadcrumb Navigation */}
      <section className="py-8">
        <div className="container">
          <Link
            href="/collections"
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Collections
          </Link>
        </div>
      </section>

      {/* Guides with Questions and Readings */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col gap-16">
            {collection.guides.length === 0 ? (
              <div className="text-muted-foreground py-12 text-center">
                <p>This collection is being curated.</p>
                <p className="mt-2 text-sm">Check back soon for new guides!</p>
              </div>
            ) : (
              collection.guides.map((guide) => {
                const IconComponent = guide.icon && (LucideIcons as any)[guide.icon];
                const hasContent = guide.hasContent !== false;
                const guideQuestions = questionsGrouped.find(g => g.guideId === guide.id);
                const guideReadings = readingsGrouped.find(g => g.guideId === guide.id);
                const isExpanded = expandedGuides.has(guide.id);

                return (
                  <div key={guide.id} className="flex flex-col gap-8">
                    {/* Guide Header */}
                    <div>
                      <Separator />
                      {hasContent ? (
                        <div
                          className="my-2.5 grid gap-2.5 text-sm sm:grid-cols-3 transition-colors group cursor-pointer hover:text-primary"
                          onClick={() => toggleGuide(guide.id)}
                        >
                          <div className="text-muted-foreground flex items-center gap-2">
                            {IconComponent && <IconComponent className="w-4 h-4" />}
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                              <Link
                                href={`/guides/${guide.id}`}
                                className="hover:underline transition-colors"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <p className="font-medium">{guide.name}</p>
                              </Link>
                              <div className="transition-colors">
                                {isExpanded ? (
                                  <ChevronUp className="w-4 h-4" />
                                ) : (
                                  <ChevronDown className="w-4 h-4" />
                                )}
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              {guide.difficulty && (
                                <Badge variant="outline" className="w-fit text-xs">
                                  {guide.difficulty}
                                </Badge>
                              )}
                              <span className="text-muted-foreground text-xs">
                                {guide.questionsCount} questions
                              </span>
                              <span className="text-muted-foreground text-xs">
                                {guide.readingsCount} readings
                              </span>
                            </div>
                          </div>
                          <p className="text-muted-foreground">
                            {guide.description}
                          </p>
                        </div>
                      ) : (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="my-2.5 grid gap-2.5 text-sm sm:grid-cols-3 transition-colors opacity-40 cursor-not-allowed">
                              <div className="text-muted-foreground flex items-center gap-2">
                                {IconComponent && <IconComponent className="w-4 h-4" />}
                              </div>
                              <div className="flex flex-col gap-1">
                                <p className="font-medium">{guide.name}</p>
                                {guide.difficulty && (
                                  <Badge variant="outline" className="w-fit text-xs">
                                    {guide.difficulty}
                                  </Badge>
                                )}
                              </div>
                              <p className="text-muted-foreground">
                                {guide.description}
                              </p>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Coming soon - In the works</p>
                          </TooltipContent>
                        </Tooltip>
                      )}
                    </div>

                    {/* Questions Preview */}
                    {isExpanded && hasContent && guideQuestions && guideQuestions.questions.length > 0 && (
                      <div className="flex flex-col gap-4">
                        <div className="flex items-baseline justify-between">
                          <h3 className="text-lg font-semibold">Planning Questions</h3>
                          <Link
                            href={`/guides/${guide.id}`}
                            className="text-muted-foreground hover:text-primary text-sm transition-colors"
                          >
                            View all {guideQuestions.totalCount} questions →
                          </Link>
                        </div>
                        <div className="grid gap-3">
                          {guideQuestions.questions.slice(0, 5).map((question, idx) => (
                            <div key={question.id} className="border-border rounded-lg border p-4">
                              <div className="flex items-start gap-3">
                                <Badge variant="outline" className="text-xs">
                                  Q{idx + 1}
                                </Badge>
                                <p className="flex-1">{question.question}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Readings Preview */}
                    {isExpanded && hasContent && guideReadings && guideReadings.readings.length > 0 && (
                      <div className="flex flex-col gap-4">
                        <div className="flex items-baseline justify-between">
                          <h3 className="text-lg font-semibold">Expert Readings</h3>
                          <Link
                            href={`/guides/${guide.id}`}
                            className="text-muted-foreground hover:text-primary text-sm transition-colors"
                          >
                            View all {guideReadings.totalCount} readings →
                          </Link>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                          {guideReadings.readings.slice(0, 3).map((reading) => (
                            <Link
                              key={reading.id}
                              href={`/library/${reading.id}`}
                              className="border-border hover:border-primary bg-background group block rounded-lg border p-6 transition-all hover:shadow-md"
                            >
                              <h4 className="group-hover:text-primary mb-2 font-semibold transition-colors line-clamp-2">
                                {reading.title}
                              </h4>
                              <p className="text-muted-foreground mb-3 text-sm line-clamp-2">
                                {reading.excerpt}
                              </p>
                              <div className="flex items-center justify-between text-xs text-muted-foreground">
                                <span>{reading.author}</span>
                                <span>{reading.read_time}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* Other Collections */}
      {otherCollections.length > 0 && (
        <section className="py-16 border-t border-border">
          <div className="container">
            <div className="flex flex-col gap-6">
              <h2 className="text-xl font-semibold">
                Other Collections
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {otherCollections.map((otherCollection) => (
                  <Link
                    key={otherCollection.id}
                    href={`/collections/${otherCollection.id}`}
                    className="border-border hover:border-primary bg-background group block rounded-lg border p-6 transition-all hover:shadow-md"
                  >
                    <h3 className="group-hover:text-primary font-semibold transition-colors mb-2">
                      {otherCollection.name}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {otherCollection.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SEO Content - Hidden but crawlable */}
      <div className="sr-only" aria-hidden="true">
        <h2>Complete {collection.name} Planning Collection</h2>
        <p>
          {totalQuestionsCount} planning questions and {totalReadingsCount} expert readings across {collection.guides.length} guides.
        </p>
        <h3>Planning Questions</h3>
        <ul>
          {questionsGrouped.flatMap(g => g.questions).slice(0, 50).map((q) => (
            <li key={q.id}>{q.question}</li>
          ))}
        </ul>
        <h3>Expert Readings</h3>
        <ul>
          {readingsGrouped.flatMap(g => g.readings).slice(0, 30).map((r) => (
            <li key={r.id}>
              <h4>{r.title}</h4>
              <p>{r.excerpt}</p>
            </li>
          ))}
        </ul>
        <h3>Available Guides</h3>
        <ul>
          {collection.guides.map((guide) => (
            <li key={guide.id}>
              <h4>{guide.name}</h4>
              <p>{guide.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
