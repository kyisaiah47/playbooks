import { Briefcase, Heart, Compass, Sprout, Search, ChevronRight } from "lucide-react";

export function CommonSituations() {
  const categories = [
    { name: "Career decisions", icon: Briefcase, color: "blue" },
    { name: "Relationship decisions", icon: Heart, color: "pink" },
    { name: "Life transitions", icon: Compass, color: "purple" },
    { name: "Personal growth", icon: Sprout, color: "green" },
  ];

  const situations = {
    "Career decisions": [
      "Should I switch careers or stay?",
      "How to negotiate a promotion",
      "Dealing with difficult manager",
      "Starting a side business",
    ],
    "Relationship decisions": [
      "Should we move in together?",
      "Handling conflict with partner",
      "Setting boundaries with family",
      "Recovering from breakup",
    ],
    "Life transitions": [
      "Moving to a new city",
      "Deciding on grad school",
      "Buying first home",
      "Having kids vs. not",
    ],
    "Personal growth": [
      "Building better habits",
      "Managing decision fatigue",
      "Finding your purpose",
      "Dealing with burnout",
    ],
  };

  const colorMap: Record<string, { bg: string; text: string; icon: string }> = {
    blue: { bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400", icon: "text-blue-600 dark:text-blue-400" },
    pink: { bg: "bg-pink-500/10", text: "text-pink-600 dark:text-pink-400", icon: "text-pink-600 dark:text-pink-400" },
    purple: { bg: "bg-purple-500/10", text: "text-purple-600 dark:text-purple-400", icon: "text-purple-600 dark:text-purple-400" },
    green: { bg: "bg-green-500/10", text: "text-green-600 dark:text-green-400", icon: "text-green-600 dark:text-green-400" },
  };

  return (
    <div className="w-full bg-muted/10 rounded-2xl overflow-hidden shadow-[0_20px_70px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_70px_-10px_rgba(0,0,0,0.8)] ring-1 ring-black/10">
      {/* Browser Chrome */}
      <div className="h-11 bg-gradient-to-b from-muted/60 to-muted/40 border-b border-border/60 flex items-center px-4 gap-3">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28CA42]" />
        </div>
        <div className="flex-1 flex justify-center -ml-16">
          <div className="w-[420px] h-7 px-4 bg-background/50 rounded-md border border-border/40 flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded-sm bg-muted-foreground/20" />
            <span className="text-xs text-muted-foreground/80">templata.org/guides</span>
          </div>
        </div>
      </div>

      {/* Sidebar + Main Layout */}
      <div className="flex h-[500px] bg-background">
        {/* Left Sidebar */}
        <div className="w-56 border-r border-border/40 bg-muted/20 p-3">
          <div className="space-y-0.5">
            <div className="px-2 py-1 text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
              By Situation
            </div>
            {categories.map((cat, i) => {
              const colors = colorMap[cat.color];
              const Icon = cat.icon;
              const isSelected = i === 0;

              return (
                <div
                  key={cat.name}
                  className={`px-2 py-1.5 rounded text-[13px] transition-colors cursor-pointer ${
                    isSelected
                      ? `${colors.bg} ${colors.text} font-medium`
                      : 'text-muted-foreground hover:bg-muted/50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className={`h-3.5 w-3.5 ${isSelected ? colors.icon : ''}`} />
                    <span>{cat.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6">
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <h2 className="text-xl font-semibold tracking-tight">Career decisions</h2>
              </div>
              {/* Search */}
              <div className="relative max-w-xs">
                <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/40" />
                <input
                  type="text"
                  placeholder="Search situations..."
                  className="w-full h-8 pl-8 pr-3 bg-transparent border-b border-border/60 focus:border-foreground/40 outline-none text-[13px] transition-colors"
                />
              </div>
            </div>

            {/* Situations List */}
            <div>
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-border/40">
                <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">Common questions</span>
              </div>

              <div className="space-y-0">
                {situations["Career decisions"].map((situation, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-3 border-b border-border/40 hover:bg-muted/20 -mx-3 px-3 cursor-pointer group transition-colors"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500/60" />
                      <span className="text-[13px]">{situation}</span>
                    </div>
                    <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/40 group-hover:text-muted-foreground transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
