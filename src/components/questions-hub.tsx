"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FileQuestion, Search, Filter } from "lucide-react";
import { motion } from "framer-motion";
import { Particles } from "@/components/magicui/particles";

interface Question {
  id: string;
  question: string;
  question_number: number;
  category_name: string;
  guideName: string;
  guideId: string;
}

interface Category {
  id: string;
  name: string;
  description: string;
  display_order: number;
}

interface QuestionsHubProps {
  questionsByCategory: Record<string, Question[]>;
  categories: Category[];
  totalQuestions: number;
}

export const QuestionsHub: React.FC<QuestionsHubProps> = ({
  questionsByCategory,
  categories,
  totalQuestions,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter questions based on search and category
  const filteredCategories = categories.filter((category) => {
    const categoryQuestions = questionsByCategory[category.id] || [];
    if (categoryQuestions.length === 0) return false;

    if (selectedCategory && category.id !== selectedCategory) return false;

    if (searchQuery) {
      return categoryQuestions.some((q) =>
        q.question.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return true;
  });

  const getFilteredQuestions = (categoryId: string) => {
    const questions = questionsByCategory[categoryId] || [];
    if (!searchQuery) return questions;

    return questions.filter((q) =>
      q.question.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const filteredQuestionsCount = selectedCategory
    ? getFilteredQuestions(selectedCategory).length
    : Object.values(questionsByCategory)
        .flat()
        .filter((q) =>
          searchQuery
            ? q.question.toLowerCase().includes(searchQuery.toLowerCase())
            : true
        ).length;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 pt-56">
        <div className="container flex flex-col items-center justify-center gap-4 overflow-hidden">
          <Badge variant="secondary" className="flex items-center gap-2">
            <FileQuestion className="w-3 h-3" />
            {totalQuestions} Planning Questions
          </Badge>

          <h1 className="relative z-15 max-w-3xl text-center text-6xl font-medium tracking-tighter md:text-7xl">
            <span
              className="overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                perspective: "600px",
              }}
            >
              {"Planning Questions Database".split(" ").map((word, i) => (
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
            AI-refined questions to systematically think through life's biggest
            decisions. Browse by category or search for specific guidance.
          </p>

          <Particles
            className="absolute inset-0 z-0"
            quantity={500}
            ease={80}
            refresh
          />

          <div className="h-92 bg-background absolute bottom-20 left-0 right-0 w-full blur-xl" />
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 border-b border-border">
        <div className="container">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1 max-w-xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
              >
                All Categories
              </Button>
              {categories.slice(0, 6).map((category) => (
                <Button
                  key={category.id}
                  variant={
                    selectedCategory === category.id ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredQuestionsCount} of {totalQuestions} questions
          </div>
        </div>
      </section>

      {/* Questions by Category */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col gap-12">
            {filteredCategories.map((category) => {
              const questions = getFilteredQuestions(category.id);
              if (questions.length === 0) return null;

              // Group by guide
              const questionsByGuide = questions.reduce((acc: any, question) => {
                if (!acc[question.guideId]) {
                  acc[question.guideId] = {
                    guideName: question.guideName,
                    questions: [],
                  };
                }
                acc[question.guideId].questions.push(question);
                return acc;
              }, {});

              return (
                <div key={category.id} className="flex flex-col gap-8">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-2xl font-semibold">
                        {category.name}
                      </h2>
                      <Link
                        href={`/guides/categories/${category.id}`}
                        className="text-muted-foreground hover:text-primary text-sm transition-colors"
                      >
                        View category →
                      </Link>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {category.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-8">
                    {Object.values(questionsByGuide).map((guideGroup: any) => (
                      <div key={guideGroup.guideName} className="flex flex-col gap-4">
                        <div className="flex items-baseline justify-between">
                          <h3 className="text-lg font-semibold">
                            {guideGroup.guideName}
                          </h3>
                          <Link
                            href={`/guides/${guideGroup.questions[0].guideId}`}
                            className="text-muted-foreground hover:text-primary text-sm transition-colors"
                          >
                            View guide →
                          </Link>
                        </div>

                        <div className="grid gap-3">
                          {guideGroup.questions.map((question: Question, idx: number) => (
                            <div
                              key={question.id}
                              className="border-border rounded-lg border p-4 hover:border-primary transition-colors"
                            >
                              <div className="flex items-start gap-3">
                                <Badge variant="outline" className="text-xs">
                                  Q{question.question_number}
                                </Badge>
                                <p className="flex-1">{question.question}</p>
                              </div>
                              {question.category_name && (
                                <p className="text-muted-foreground text-xs mt-2 ml-11">
                                  Category: {question.category_name}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator />
                </div>
              );
            })}

            {filteredCategories.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No questions found matching your search.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
