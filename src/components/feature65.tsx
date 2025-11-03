"use client";

import clsx from "clsx";
import {
  ChevronDown,
  ChevronUp,
  FileText,
  BookOpen,
  Calendar,
  Library,
} from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";

const integrations = [
  {
    title: "Choose a Guide",
    description:
      "Browse 1,000+ comprehensive guides covering every major life event and decision.",
    image: <Library className="h-8 w-8" />,
    color: "bg-indigo-500",
    tags: [
      "1,000+ Guides",
      "6 Life Categories",
      "Searchable Library",
      "Category Filtering",
      "Track Multiple",
    ],
  },
  {
    title: "Questions",
    description:
      "90%+ coverage guaranteed. Months of AI refinement ensuring nothing critical is missed.",
    image: <FileText className="h-8 w-8" />,
    color: "bg-blue-500",
    tags: [
      "Comprehensive Coverage",
      "Category Organization",
      "Rich Text Answers",
      "Auto-Save",
      "Progress Tracking",
    ],
  },
  {
    title: "Readings",
    description:
      "Curated expert knowledge saving you hundreds of hours. Wikipedia for life planning.",
    image: <BookOpen className="h-8 w-8" />,
    color: "bg-purple-500",
    tags: [
      "Expert Content",
      "1-Minute Summaries",
      "Full-Length Articles",
      "Integrated Per-Guide",
      "Search & Filter",
    ],
  },
  {
    title: "Planning",
    description:
      "Calendar and tasks organized per-guide. Your wedding tasks separate from home buying.",
    image: <Calendar className="h-8 w-8" />,
    color: "bg-green-500",
    tags: [
      "Per-Guide Organization",
      "Calendar Events",
      "Kanban Tasks",
      "Freeform Notes",
      "Track Filtering",
    ],
  },
];

const Feature65 = () => {
  const [activeTabId, setActiveTabId] = useState<number | null>(null);

  return (
    <section className="py-16">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four integrated systems working together for life's biggest moments
          </p>
        </div>
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-4">
          {integrations.map((item, index) => (
            <div
              key={index}
              className="flex h-full flex-col justify-between gap-2"
            >
              <div className="bg-muted-foreground/5 flex items-center justify-between rounded-xl p-4">
                <div className="flex items-center gap-2">
                  <div className={clsx("h-10 w-2 rounded-md", item.color)} />
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6">{item.image}</div>
                  <div
                    className="bg-background flex h-8 w-8 items-center justify-center rounded-lg lg:hidden"
                    onClick={() =>
                      setActiveTabId(activeTabId === index ? null : index)
                    }
                  >
                    {activeTabId === index ? (
                      <ChevronUp className="h-5" />
                    ) : (
                      <ChevronDown className="h-5" />
                    )}
                  </div>
                </div>
              </div>
              <div
                className={` ${activeTabId === index ? "flex" : "hidden"} bg-muted-foreground/5 h-full flex-col items-start justify-between gap-8 rounded-xl p-4 transition-all duration-300 lg:flex`}
              >
                <div className="text-muted-foreground/90 text-sm font-medium">
                  {item.description}
                </div>
                <div className="flex flex-col items-start gap-2">
                  {item.tags.map((tag, index) => (
                    <Badge
                      variant="outline"
                      className={`${index == 0 ? "bg-muted/5" : "bg-background"} rounded-xl border-0 px-3 py-1.5 text-xs font-medium`}
                      key={tag}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature65 };
