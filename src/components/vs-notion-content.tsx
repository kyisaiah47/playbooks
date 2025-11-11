"use client";

import React from "react";
import { VsComparisonContent } from "@/components/vs-comparison-content";

export const VsNotionContent: React.FC = () => {
  return (
    <VsComparisonContent
      title="Templata vs Notion"
      subtitle="Expert frameworks with AI-refined questions vs blank pages"
      intro="Templata isn't just an alternative to Notion. While Notion gives you blank pages and DIY structure, Templata provides expert frameworks with 90%+ validated coverage, AI-refined questions, and curated readings—ensuring you never miss what matters for life's biggest moments."
      templataFeatures={[
        { text: "Expert planning frameworks", present: true },
        { text: "90%+ validated coverage", present: true },
        { text: "48+ AI-refined questions per guide", present: true },
        { text: "Curated expert readings integrated", present: true },
        { text: "Per-guide organization (calendars, tasks)", present: true },
        { text: "Start planning in minutes", present: true },
        { text: "Free beta access", present: true },
      ]}
      competitorName="Notion"
      competitorFeatures={[
        { text: "Blank pages, DIY structure", present: true },
        { text: "No planning frameworks", present: false },
        { text: "Create your own questions", present: false },
        { text: "DIY research required", present: false },
        { text: "Manual setup per workspace", present: true },
        { text: "Hours of customization needed", present: false },
        { text: "$10/month for meaningful features", present: false },
      ]}
      competitorGoodFor={{
        title: "Who is Notion suitable for?",
        content:
          "Notion is excellent for teams who want complete flexibility and are willing to invest time building custom workflows. It's a powerful tool for software teams, project management, and knowledge bases where you already know exactly what structure you need. If you're planning a startup, managing engineering sprints, or building internal wikis, Notion's blank-slate approach gives you total control.",
      }}
      whyTemplata={{
        title: "Why Choose Templata for Life Planning?",
        paragraphs: [
          "When planning life's biggest moments—weddings, career changes, home buying, financial planning—you don't want blank pages. You need expert guidance. Templata provides comprehensive frameworks developed by experts, validated through our Axiom Engine to ensure 90%+ coverage of what actually matters.",
          "Each guide includes comprehensive AI-refined questions that help you think through every angle, plus curated expert readings so you're learning from the best sources—not Googling randomly. Everything is integrated: questions, readings, calendars, tasks, and notes all work together in per-guide workspaces.",
          "While Notion requires hours to set up and leaves you guessing what you might have missed, Templata gets you planning comprehensively in minutes. And unlike Notion's $10/month for meaningful features, Templata is free during beta. For life planning, choose expert frameworks over blank pages.",
        ],
      }}
    />
  );
};
