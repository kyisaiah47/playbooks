"use client";

import { useState } from "react";
import { CategorySelection } from "./CategorySelection";
import { PopularGuides } from "./PopularGuides";

type View = "categories" | "popular";

export function BrowseAndFeatured() {
  const [activeView, setActiveView] = useState<View>("categories");

  return (
    <div className="space-y-16">
      {/* Headers */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setActiveView("categories")}
          className={`text-3xl md:text-4xl font-medium tracking-[-0.01em] leading-tight transition-colors ${
            activeView === "categories"
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Browse by category
        </button>
        <button
          onClick={() => setActiveView("popular")}
          className={`text-3xl md:text-4xl font-medium tracking-[-0.01em] leading-tight transition-colors ${
            activeView === "popular"
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Popular guides
        </button>
      </div>

      {/* Graphics */}
      {activeView === "categories" && <CategorySelection />}
      {activeView === "popular" && <PopularGuides />}
    </div>
  );
}
