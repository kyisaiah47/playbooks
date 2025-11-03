"use client";

import clsx from "clsx";
import {
  ChevronDown,
  ChevronUp,
  FileText,
  BookOpen,
  Calendar,
  BarChart3,
} from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";

const integrations = [
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
  {
    title: "Analytics",
    description:
      "Premium progress visualizations that transform tracking into an experience.",
    image: <BarChart3 className="h-8 w-8" />,
    color: "bg-orange-500",
    tags: [
      "Timeline Charts",
      "Radial Progress",
      "Radar Visualizations",
      "Category Insights",
      "Luxury Design",
    ],
  },
];

const Feature65 = () => {
  const [activeTabId, setActiveTabId] = useState<number | null>(null);

  return (
    <section className="py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-4">
          {integrations.map((item, index) => (
            <div
              key={index}
              className="flex h-full flex-col justify-between gap-2"
            >
              <div className="bg-muted-foreground/5 flex items-center justify-between rounded-xl p-6">
                <div className="flex items-center gap-3">
                  <div className={clsx("h-16 w-3 rounded-md", item.color)} />
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <div className="flex items-center gap-6">
                  {item.image}
                  <div
                    className="bg-background flex h-12 w-12 items-center justify-center rounded-lg lg:hidden"
                    onClick={() =>
                      setActiveTabId(activeTabId === index ? null : index)
                    }
                  >
                    {activeTabId === index ? (
                      <ChevronUp className="h-8" />
                    ) : (
                      <ChevronDown className="h-8" />
                    )}
                  </div>
                </div>
              </div>
              <div
                className={` ${activeTabId === index ? "flex" : "hidden"} bg-muted-foreground/5 h-full flex-col items-start justify-between gap-64 rounded-xl p-6 transition-all duration-300 lg:flex`}
              >
                <div className="text-muted-foreground/90 text-xl font-medium">
                  {item.description}
                </div>
                <div className="flex flex-col items-start gap-4">
                  {item.tags.map((tag, index) => (
                    <Badge
                      variant="outline"
                      className={`${index == 0 ? "bg-muted/5" : "bg-background"} rounded-2xl border-0 px-4 py-3 text-base font-medium`}
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
