"use client";

import React from "react";
import { VsComparisonContent } from "@/components/vs-comparison-content";

export const VsWikipediaContent: React.FC = () => {
  return (
    <VsComparisonContent
      title="Templata vs Wikipedia"
      subtitle="Active planning frameworks vs passive encyclopedia reading"
      intro="Wikipedia is often the first stop when researching major life events—\"Wedding planning,\" \"Career change,\" \"Home buying process.\" But encyclopedia articles give you passive knowledge, not active planning frameworks. Templata transforms Wikipedia's general information into personalized, actionable planning with expert guidance and integrated tools."
      templataFeatures={[
        { text: "Active planning frameworks", present: true },
        { text: "200-500+ actionable questions", present: true },
        { text: "90%+ validated coverage of YOUR planning", present: true },
        { text: "Expert readings curated & integrated", present: true },
        { text: "Tasks, calendars, progress tracking", present: true },
        { text: "Personalized to your specific situation", present: true },
        { text: "Free forever (beta)", present: true },
      ]}
      competitorName="Wikipedia"
      competitorFeatures={[
        { text: "General encyclopedia articles", present: true },
        { text: "Passive reading, no action", present: false },
        { text: "Same content for everyone", present: false },
        { text: "No personalized guidance", present: false },
        { text: "No planning tools or organization", present: false },
        { text: "Doesn't track your progress", present: false },
        { text: "Free to read", present: true },
      ]}
      competitorGoodFor={{
        title: "What is Wikipedia good for?",
        content:
          "Wikipedia is excellent for learning general background knowledge, understanding terminology, and getting a broad overview of topics. If you want to understand what a wedding planner does, read about the history of career counseling, or learn about mortgage types, Wikipedia's encyclopedia articles provide solid foundational knowledge. It's perfect for passive learning and research.",
      }}
      whyTemplata={{
        title: "Why Choose Templata for Life Planning?",
        paragraphs: [
          "Reading Wikipedia's \"Wedding planning\" article gives you general information—but it doesn't help YOU plan YOUR wedding. The same article applies to everyone, with no personalization, no action items, no organization, no tracking.",
          "Templata transforms passive reading into active planning. Instead of a general article, you get 200-500+ AI-refined questions tailored to guide you through your specific planning journey. Our expert-validated frameworks ensure 90%+ coverage of what actually matters for YOUR situation—not just general knowledge.",
          "While Wikipedia stops at providing information, Templata integrates everything you need: expert readings (yes, including Wikipedia articles when relevant), actionable questions, task lists, calendars, and progress tracking all working together. You're not just reading about planning—you're actually doing it, with expert frameworks ensuring you don't miss what matters.",
          "Wikipedia is free to read. Templata is free to use for comprehensive, personalized planning (currently in beta). For life's biggest moments, choose active frameworks over passive articles.",
        ],
      }}
    />
  );
};
