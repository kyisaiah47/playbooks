"use client";

import React from "react";
import { VsComparisonContent } from "@/components/vs-comparison-content";

export const VsGoogleContent: React.FC = () => {
  return (
    <VsComparisonContent
      title="Templata vs Google Search"
      subtitle="Organized planning vs scattered tabs"
      intro="Google Search is often the starting point for planning major life events. But search results leave you with 50 browser tabs, conflicting advice, and no way to track what you've actually covered. Templata transforms scattered searches into organized, expert-validated frameworks with comprehensive coverage and integrated planning tools."
      templataFeatures={[
        { text: "Expert planning frameworks", present: true },
        { text: "90%+ validated coverage", present: true },
        { text: "48+ AI-refined questions per guide", present: true },
        { text: "Curated expert readings", present: true },
        { text: "Integrated calendars, tasks & notes", present: true },
        { text: "Progress tracking & organization", present: true },
        { text: "Free beta access", present: true },
      ]}
      competitorName="Google Search"
      competitorFeatures={[
        { text: "Scattered search results", present: false },
        { text: "50+ tabs to manage", present: false },
        { text: "Conflicting advice from random blogs", present: false },
        { text: "You synthesize everything yourself", present: false },
        { text: "No organization or tracking", present: false },
        { text: "Overwhelm from information overload", present: false },
        { text: "Free to search", present: true },
      ]}
      competitorGoodFor={{
        title: "When is Google Search enough?",
        content:
          "Google is perfect for quick lookups, finding specific information, or researching niche topics. If you just need to know \"what flowers are in season in June\" or \"average wedding photography costs,\" Google gets you there fast. For simple questions with straightforward answers, search is unbeatable.",
      }}
      whyTemplata={{
        title: "Why Choose Templata for Life Planning?",
        paragraphs: [
          "When you're planning a wedding, changing careers, buying a home, or starting a business, scattered Google searches leave you overwhelmed and uncertain. \"Did I think of everything?\" \"Which advice should I actually follow?\" \"How do I organize all this?\"",
          "Templata replaces 50 tabs with one comprehensive framework. Our expert-validated guides ensure 90%+ coverage of what matters—no more wondering what you missed. Instead of piecing together conflicting blog posts, you get comprehensive AI-refined questions that guide you through every angle, plus curated expert readings from trusted sources.",
          "Everything is integrated: questions, readings, tasks, calendars, and progress tracking all work together. While Google leaves you to organize scattered information in your head (or across multiple docs and spreadsheets), Templata keeps everything structured in per-guide workspaces. And unlike paid search ads pushing products, Templata is free during beta. For life's biggest moments, choose organized frameworks over scattered tabs.",
        ],
      }}
    />
  );
};
