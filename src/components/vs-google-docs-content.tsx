"use client";

import React from "react";
import { VsComparisonContent } from "@/components/vs-comparison-content";

export const VsGoogleDocsContent: React.FC = () => {
  return (
    <VsComparisonContent
      title="Templata vs Google Docs"
      subtitle="Expert frameworks vs blank documents for life planning"
      intro="Google Docs gives you a blank document and a blinking cursor. Templata gives you expert frameworks with 200-500+ AI-refined questions, curated readings, and 90%+ validated coverage—so you plan comprehensively instead of wondering what you're forgetting."
      templataFeatures={[
        { text: "Expert planning frameworks", present: true },
        { text: "200-500+ AI-refined questions per guide", present: true },
        { text: "Curated expert readings", present: true },
        { text: "90%+ validated coverage", present: true },
        { text: "Integrated calendars & tasks", present: true },
        { text: "Start planning in minutes", present: true },
        { text: "Free forever with expert content", present: true },
      ]}
      competitorName="Google Docs"
      competitorFeatures={[
        { text: "Blank documents", present: true },
        { text: "No guidance or frameworks", present: false },
        { text: "Write your own questions", present: false },
        { text: "External research required", present: false },
        { text: "You determine what's important", present: false },
        { text: "Manual folder organization", present: true },
        { text: "Build structure from scratch", present: false },
      ]}
      competitorGoodFor={{
        title: "Who is Google Docs suitable for?",
        content:
          "Google Docs is perfect for collaborative writing, shared notes, and general documentation. If you're drafting a report with colleagues, taking meeting notes, or collaborating on written content in real-time, Docs excels. It's simple, familiar, and works great when you know exactly what you need to write and multiple people need simultaneous editing access.",
      }}
      whyTemplata={{
        title: "Why Choose Templata for Life Planning?",
        paragraphs: [
          "Planning a wedding, career change, or home purchase in a blank Google Doc means starting from zero. What questions should you ask? What research do you need? What are you forgetting? You're left guessing—and the consequences of missing something important can be expensive or stressful.",
          "Templata provides expert frameworks validated through our Axiom Engine to ensure 90%+ coverage of what actually matters for each life event. You get 200-500+ AI-refined questions per guide that prompt you to think through every important angle. Plus curated expert readings so you learn from vetted sources instead of random Google searches.",
          "Everything is integrated: questions, readings, calendars, tasks, notes, and progress tracking all work together in per-guide workspaces. While Google Docs leaves you with a blank page and your best guess, Templata ensures comprehensive planning from day one. And it's free forever (currently in beta)—no Google Workspace subscription needed.",
        ],
      }}
    />
  );
};
