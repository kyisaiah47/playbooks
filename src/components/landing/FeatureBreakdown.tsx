"use client";

import { BookOpen, FileText, HelpCircle, CheckSquare, Calendar, BookMarked, Kanban, FileEdit } from "lucide-react";
import { useState } from "react";

export function FeatureBreakdown() {
  const [activeTab, setActiveTab] = useState<"wikipedia" | "notion">("wikipedia");

  return (
    <div className="w-full max-w-sm bg-muted/10 rounded-2xl overflow-hidden shadow-[0_20px_70px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_70px_-10px_rgba(0,0,0,0.8)]">
      {/* Tab Headers */}
      <div className="flex border-b border-border/60">
        <button
          onClick={() => setActiveTab("wikipedia")}
          className={`flex-1 px-4 py-3 text-sm font-medium transition-colors relative ${
            activeTab === "wikipedia"
              ? "text-foreground bg-background"
              : "text-muted-foreground bg-muted/20 hover:bg-muted/30"
          }`}
        >
          Wikipedia
          {activeTab === "wikipedia" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
          )}
        </button>
        <button
          onClick={() => setActiveTab("notion")}
          className={`flex-1 px-4 py-3 text-sm font-medium transition-colors relative ${
            activeTab === "notion"
              ? "text-foreground bg-background"
              : "text-muted-foreground bg-muted/20 hover:bg-muted/30"
          }`}
        >
          Notion
          {activeTab === "notion" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
          )}
        </button>
      </div>

      {/* Content */}
      <div className="bg-background p-5">
        {activeTab === "wikipedia" ? (
          <div className="space-y-3 animate-in fade-in duration-300">
            <div className="group p-3 rounded-lg border border-border bg-muted/20 hover:bg-muted/40 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <div className="text-sm font-medium">Guides</div>
                  <div className="text-xs text-muted-foreground">Structured frameworks</div>
                </div>
              </div>
            </div>

            <div className="group p-3 rounded-lg border border-border bg-muted/20 hover:bg-muted/40 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <div className="text-sm font-medium">Readings</div>
                  <div className="text-xs text-muted-foreground">Curated articles</div>
                </div>
              </div>
            </div>

            <div className="group p-3 rounded-lg border border-border bg-muted/20 hover:bg-muted/40 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <div className="text-sm font-medium">Questions</div>
                  <div className="text-xs text-muted-foreground">Guided prompts</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-3 animate-in fade-in duration-300">
            <div className="group p-3 rounded-lg border border-border bg-muted/20 hover:bg-muted/40 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-red-500/10 flex items-center justify-center flex-shrink-0">
                  <CheckSquare className="w-4 h-4 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <div className="text-sm font-medium">Todos</div>
                  <div className="text-xs text-muted-foreground">Task management</div>
                </div>
              </div>
            </div>

            <div className="group p-3 rounded-lg border border-border bg-muted/20 hover:bg-muted/40 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <div className="text-sm font-medium">Calendar</div>
                  <div className="text-xs text-muted-foreground">Important dates</div>
                </div>
              </div>
            </div>

            <div className="group p-3 rounded-lg border border-border bg-muted/20 hover:bg-muted/40 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-pink-500/10 flex items-center justify-center flex-shrink-0">
                  <BookMarked className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                </div>
                <div>
                  <div className="text-sm font-medium">Journal</div>
                  <div className="text-xs text-muted-foreground">Daily reflections</div>
                </div>
              </div>
            </div>

            <div className="group p-3 rounded-lg border border-border bg-muted/20 hover:bg-muted/40 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                  <Kanban className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <div className="text-sm font-medium">Kanban</div>
                  <div className="text-xs text-muted-foreground">Visual workflow</div>
                </div>
              </div>
            </div>

            <div className="group p-3 rounded-lg border border-border bg-muted/20 hover:bg-muted/40 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                  <FileEdit className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <div className="text-sm font-medium">Notes</div>
                  <div className="text-xs text-muted-foreground">Rich text editor</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
