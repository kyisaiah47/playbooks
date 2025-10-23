import { TrendingUp, Flame, Star, Clock, Briefcase, Search } from "lucide-react";

export function PopularGuides() {
  const sections = [
    { name: "Trending", icon: TrendingUp, color: "orange" },
    { name: "Most Used", icon: Flame, color: "red" },
    { name: "Top Rated", icon: Star, color: "yellow" },
    { name: "Recent", icon: Clock, color: "blue" },
  ];

  const guides = [
    { title: "Career Transition", category: "Career & Work", questions: 12, readings: 8, users: "12.4k" },
    { title: "Setting Boundaries", category: "Relationships", questions: 10, readings: 6, users: "8.2k" },
    { title: "Breakup Recovery", category: "Relationships", questions: 9, readings: 7, users: "7.8k" },
    { title: "Decision Fatigue", category: "Personal Growth", questions: 11, readings: 5, users: "6.9k" },
    { title: "Finding Purpose", category: "Personal Growth", questions: 15, readings: 6, users: "9.1k" },
    { title: "Building Habits", category: "Health & Wellness", questions: 10, readings: 5, users: "11.3k" },
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
              Discover
            </div>
            {sections.map((section, i) => {
              const Icon = section.icon;
              const isSelected = i === 0;

              return (
                <div
                  key={section.name}
                  className={`px-2 py-1.5 rounded text-[13px] transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-orange-500/10 text-orange-600 dark:text-orange-400 font-medium'
                      : 'text-muted-foreground hover:bg-muted/50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className={`h-3.5 w-3.5 ${isSelected ? 'text-orange-600 dark:text-orange-400' : ''}`} />
                    <span>{section.name}</span>
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
                <TrendingUp className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                <h2 className="text-xl font-semibold tracking-tight">Trending</h2>
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
                <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">Guides</span>
                <span className="text-[11px] text-muted-foreground">Users</span>
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
                        </div>
                        <p className="text-[11px] text-muted-foreground mt-0.5">
                          {guide.category}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 text-[12px] text-muted-foreground">
                      <span>{guide.questions} questions</span>
                      <span className="font-medium">{guide.users}</span>
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
