"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

type Category = "General" | "Guides" | "Features" | "Pricing" | "Technical";

interface FAQItem {
  question: string;
  answer: string;
  category: Category;
}

const faqItems: FAQItem[] = [
  // General Questions
  {
    category: "General",
    question: "What is Templata?",
    answer:
      "Templata is the comprehensive guide and planning tool for major life events. We provide AI-refined questions covering 90%+ of what you need to consider, curated expert readings to inform decisions, and integrated planning tools to keep everything organized.",
  },
  {
    category: "General",
    question: "Who is Templata for?",
    answer:
      "Anyone facing a major life decision—planning a wedding, buying a home, changing careers, starting a business. If you're spending months on scattered research trying to figure out what you even need to know, Templata provides the comprehensive framework.",
  },
  {
    category: "General",
    question: "How is this different from using Notion or Google Docs?",
    answer:
      "Notion gives you blank pages to figure out yourself. Google gives you scattered information to synthesize. Templata provides comprehensive questions refined through months of AI testing, expert readings curated for each decision point, and planning tools organized per life event.",
  },
  // Guides Questions
  {
    category: "Guides",
    question: "What guides are currently available?",
    answer:
      "We're launching with guides for wedding planning, home buying, and career transitions. Our goal is 1000+ guides covering every major life event—personal, professional, financial, and health-related decisions.",
  },
  {
    category: "Guides",
    question: "What does 90%+ coverage mean?",
    answer:
      "It means our question sets have been refined through extensive AI testing to cover the vast majority of considerations for that life event. Not everything—some decisions are unique to your situation—but the critical questions most people need to think through.",
  },
  {
    category: "Guides",
    question: "Can I use multiple guides at once?",
    answer:
      "Yes. Each guide maintains its own calendar, tasks, and notes. Planning a wedding while buying a home? Your wedding tasks stay separate from home-buying tasks. Switch between guides to see the relevant planning context.",
  },
  // Features Questions
  {
    category: "Features",
    question: "What is the Axiom Engine?",
    answer:
      "Our question and reading refinement system. Every guide goes through months of AI-assisted testing to ensure comprehensive coverage. We validate against expert sources, test edge cases, and refine based on what actually matters for each life event.",
  },
  {
    category: "Features",
    question: "How do the readings work?",
    answer:
      "Each guide includes curated expert readings—articles, guides, and resources vetted for quality and relevance. Readings appear alongside related questions so you can learn and plan simultaneously. No random blog posts, just sources that help inform your decisions.",
  },
  {
    category: "Features",
    question: "Does Templata integrate with my calendar or task apps?",
    answer:
      "Currently, calendar events and tasks live within Templata, organized per guide. External integrations are on the roadmap, but the per-guide organization is intentional—when you're in wedding planning mode, you see wedding tasks, not everything else.",
  },
  // Pricing Questions
  {
    category: "Pricing",
    question: "How much does Templata cost?",
    answer:
      "Templata is completely free to use. Access all guides, questions, expert readings, and planning tools at no cost.",
  },
  // Technical Questions
  {
    category: "Technical",
    question: "How do I get started?",
    answer:
      "Sign up, browse available guides, and pick the one that matches your current life event. Start answering questions at your own pace. Your progress auto-saves as you work through each section.",
  },
  {
    category: "Technical",
    question: "Can I collaborate with others on a guide?",
    answer:
      "Collaboration features are planned for future releases. Currently, Templata is designed for individual planning, though you can share exported content with others as needed.",
  },
  {
    category: "Technical",
    question: "Is my data secure?",
    answer:
      "Yes. We use industry-standard encryption for data storage and transmission. Your planning information, answers, and notes are private and accessible only to you.",
  },
];

const categories: Category[] = [
  "General",
  "Guides",
  "Features",
  "Pricing",
  "Technical",
];

const TOP_PADDING = 300;

const FaqHero = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("General");
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isScrollingRef = useRef(false);
  const categoryRefs = useRef<Record<Category, HTMLDivElement | null>>({
    General: null,
    Guides: null,
    Features: null,
    Pricing: null,
    Technical: null,
  });

  const setupObserver = useCallback(() => {
    observerRef.current?.disconnect();

    let debounceTimeout: NodeJS.Timeout;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Skip if we're programmatically scrolling
        if (isScrollingRef.current) return;

        // Clear any pending timeout
        if (debounceTimeout) {
          clearTimeout(debounceTimeout);
        }

        // Debounce the category update
        debounceTimeout = setTimeout(() => {
          const intersectingEntries = entries.filter(
            (entry) => entry.isIntersecting,
          );

          // Find the entry that's closest to being 100px from the top
          const entry = intersectingEntries.reduce(
            (closest, current) => {
              const rect = current.boundingClientRect;
              const distanceFromThreshold = Math.abs(rect.top - TOP_PADDING);
              const closestDistance = closest
                ? Math.abs(closest.boundingClientRect.top - TOP_PADDING)
                : Infinity;

              return distanceFromThreshold < closestDistance
                ? current
                : closest;
            },
            null as IntersectionObserverEntry | null,
          );

          if (entry) {
            const category = entry.target.getAttribute(
              "data-category",
            ) as Category;
            if (category) {
              setActiveCategory(category);
            }
          }
        }, 150);
      },
      {
        root: null,
        rootMargin: `-${TOP_PADDING}px 0px -100% 0px`,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    Object.entries(categoryRefs.current).forEach(([category, element]) => {
      if (element) {
        element.setAttribute("data-category", category);
        observerRef.current?.observe(element);
      }
    });

    return () => {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }
    };
  }, []);

  useEffect(() => {
    const cleanup = setupObserver();
    return () => {
      cleanup();
      observerRef.current?.disconnect();
    };
  }, [setupObserver]);

  const handleCategoryClick = (category: Category) => {
    setActiveCategory(category);
    isScrollingRef.current = true;

    const element = document.getElementById(`faq-${category.toLowerCase()}`);
    if (element) {
      element.style.scrollMargin = `${TOP_PADDING}px`;
      element.scrollIntoView({ behavior: "smooth", block: "start" });

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    }
  };

  return (
    <section className="min-h-screen bg-background py-32">
      <div className="container max-w-4xl">
        <div className="text-center">
          <h1 className="text-center text-4xl font-medium tracking-tight sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-balance text-center text-lg leading-relaxed">
            Common questions about Templata, guides, features, and pricing.
          </p>
        </div>

        <div className="mt-8 grid max-w-5xl gap-8 md:mt-12 md:grid-cols-[200px_1fr] md:gap-12 lg:mt-16">
          {/* Sidebar */}
          <div className="sticky top-24 flex h-fit flex-col gap-4 max-md:hidden">
            {categories.map((category) => (
              <Button
                variant="ghost"
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`justify-start text-left text-xl transition-colors ${
                  activeCategory === category
                    ? "font-medium"
                    : "font-normal hover:opacity-75"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* FAQ Items by Category */}
          <div className="space-y-6">
            {categories.map((category) => {
              const categoryItems = faqItems.filter(
                (item) => item.category === category,
              );

              return (
                <div
                  key={category}
                  id={`faq-${category.toLowerCase()}`}
                  ref={(el) => {
                    categoryRefs.current[category] = el;
                  }}
                  className={cn(
                    `rounded-xl`,
                    activeCategory === category
                      ? "bg-[#F2F2F2] dark:bg-[#24242B]"
                      : "bg-[#F2F2F2]/40 dark:bg-[#24242B]/40",
                    "px-6",
                  )}
                  style={{
                    scrollMargin: `${TOP_PADDING}px`,
                  }}
                >
                  <Accordion
                    type="single"
                    collapsible
                    defaultValue={`${categories[0]}-0`}
                    className="w-full"
                  >
                    {categoryItems.map((item, i) => (
                      <AccordionItem
                        key={i}
                        value={`${category}-${i}`}
                        className="border-muted border-b last:border-0"
                      >
                        <AccordionTrigger className="text-base font-medium hover:no-underline">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base font-medium">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { FaqHero };
