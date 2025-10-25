import { Briefcase, Heart, Activity, Sprout, DollarSign, Calendar, Search, TrendingUp, FileText, BookOpen } from "lucide-react";

export function CategorySelection() {
  const categories = [
    { name: "Career & Work", guides: 156, color: "blue", icon: Briefcase },
    { name: "Relationships", guides: 203, color: "pink", icon: Heart },
    { name: "Health & Wellness", guides: 142, color: "green", icon: Activity },
    { name: "Personal Growth", guides: 189, color: "purple", icon: Sprout },
    { name: "Finance", guides: 127, color: "emerald", icon: DollarSign },
    { name: "Life Events", guides: 181, color: "indigo", icon: Calendar },
  ];

  const colorMap: Record<string, { bg: string; text: string; icon: string }> = {
    blue: { bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400", icon: "text-blue-600 dark:text-blue-400" },
    pink: { bg: "bg-pink-500/10", text: "text-pink-600 dark:text-pink-400", icon: "text-pink-600 dark:text-pink-400" },
    green: { bg: "bg-green-500/10", text: "text-green-600 dark:text-green-400", icon: "text-green-600 dark:text-green-400" },
    purple: { bg: "bg-purple-500/10", text: "text-purple-600 dark:text-purple-400", icon: "text-purple-600 dark:text-purple-400" },
    emerald: { bg: "bg-emerald-500/10", text: "text-emerald-600 dark:text-emerald-400", icon: "text-emerald-600 dark:text-emerald-400" },
    indigo: { bg: "bg-primary/10", text: "", icon: "" },
  };

  const guides = [
    { title: "Career Transition", questions: 12, readings: 6, trending: true },
    { title: "Negotiating a Raise", questions: 13, readings: 7, trending: false },
    { title: "Switching Industries", questions: 14, readings: 8, trending: false },
    { title: "Starting a Side Business", questions: 15, readings: 9, trending: true },
    { title: "Remote Work Setup", questions: 16, readings: 10, trending: false },
  ];

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
              Categories
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
                      ? `${colors.bg} font-medium`
                      : 'text-muted-foreground hover:bg-muted/50'
                  }`}
                  style={isSelected && cat.color === 'indigo' ? { color: 'var(--primary)' } : {}}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon className={`h-3.5 w-3.5 ${isSelected && cat.color !== 'indigo' ? colors.icon : ''}`} style={isSelected && cat.color === 'indigo' ? { color: 'var(--primary)' } : {}} />
                      <span>{cat.name}</span>
                    </div>
                    <span className="text-[11px] opacity-60">{cat.guides}</span>
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
                <h2 className="text-xl font-semibold tracking-tight">Career & Work</h2>
              </div>
              {/* Search */}
              <div className="relative max-w-xs">
                <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/40" />
                <input
                  type="text"
                  placeholder="Search guides..."
                  className="w-full h-8 pl-8 pr-3 bg-transparent border-b border-border/60 focus:border-foreground/40 outline-none text-[13px] transition-colors"
                />
              </div>
            </div>

            {/* Guides List */}
            <div>
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-border/40">
                <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">156 guides</span>
              </div>

              <div className="space-y-0">
                {guides.map((guide, i) => (
                  <div
                    key={guide.title}
                    className="flex items-center justify-between py-2.5 border-b border-border/40 hover:bg-muted/20 -mx-3 px-3 cursor-pointer group transition-colors"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <Briefcase className="h-3.5 w-3.5 text-muted-foreground/60" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[13px] font-medium">{guide.title}</span>
                          {guide.trending && (
                            <span className="inline-flex items-center gap-1 text-[10px] text-orange-600 dark:text-orange-400">
                              <TrendingUp className="h-2.5 w-2.5" />
                              Trending
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 text-[12px] text-muted-foreground">
                      <span>{guide.questions} questions</span>
                      <span>{guide.readings} readings</span>
                    </div>
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
