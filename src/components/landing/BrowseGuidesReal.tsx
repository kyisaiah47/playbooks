import { Search, Briefcase, Heart, Activity, Sprout, DollarSign, Calendar } from "lucide-react";

export function BrowseGuidesReal() {
  return (
    <div className="w-full bg-muted/10 rounded-2xl overflow-hidden shadow-[0_20px_70px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_70px_-10px_rgba(0,0,0,0.8)]">
      {/* Browser Header */}
      <div className="h-11 bg-gradient-to-b from-muted/60 to-muted/40 border-b border-border/60 flex items-center px-4 gap-3">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28CA42]" />
        </div>
        <div className="flex-1 flex justify-center -ml-16">
          <div className="w-[280px] h-7 px-3 bg-background/50 rounded-md border border-border/40 flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-muted-foreground/20" />
            <span className="text-[11px] text-muted-foreground/80">templata.org/app/guides</span>
          </div>
        </div>
      </div>

      {/* Browser Content */}
      <div className="bg-background p-6">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Discover Guides</h2>
          <p className="text-xs text-muted-foreground">1,200+ expert-curated guides for life's biggest decisions</p>
        </div>

        {/* Search */}
        <div className="mb-6 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search guides..."
            className="w-full pl-9 pr-3 py-2 text-xs bg-muted/30 border border-border rounded-md"
            disabled
          />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="group p-3 rounded-lg border border-border bg-muted/20 hover:bg-muted/40 transition-colors cursor-pointer">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-6 h-6 rounded-md bg-blue-500/10 flex items-center justify-center">
                <Briefcase className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-xs font-medium">Career & Work</span>
            </div>
            <p className="text-[10px] text-muted-foreground">210 guides</p>
          </div>

          <div className="group p-3 rounded-lg border border-border bg-muted/20 hover:bg-muted/40 transition-colors cursor-pointer">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-6 h-6 rounded-md bg-pink-500/10 flex items-center justify-center">
                <Heart className="w-3.5 h-3.5 text-pink-600 dark:text-pink-400" />
              </div>
              <span className="text-xs font-medium">Relationships</span>
            </div>
            <p className="text-[10px] text-muted-foreground">180 guides</p>
          </div>

          <div className="group p-3 rounded-lg border border-border bg-muted/20 hover:bg-muted/40 transition-colors cursor-pointer">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-6 h-6 rounded-md bg-green-500/10 flex items-center justify-center">
                <Activity className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
              </div>
              <span className="text-xs font-medium">Health & Wellness</span>
            </div>
            <p className="text-[10px] text-muted-foreground">195 guides</p>
          </div>

          <div className="group p-3 rounded-lg border border-border bg-muted/20 hover:bg-muted/40 transition-colors cursor-pointer">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-6 h-6 rounded-md bg-purple-500/10 flex items-center justify-center">
                <Sprout className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              </div>
              <span className="text-xs font-medium">Personal Growth</span>
            </div>
            <p className="text-[10px] text-muted-foreground">240 guides</p>
          </div>

          <div className="group p-3 rounded-lg border border-border bg-muted/20 hover:bg-muted/40 transition-colors cursor-pointer">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-6 h-6 rounded-md bg-emerald-500/10 flex items-center justify-center">
                <DollarSign className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <span className="text-xs font-medium">Finance</span>
            </div>
            <p className="text-[10px] text-muted-foreground">220 guides</p>
          </div>

          <div className="group p-3 rounded-lg border border-border bg-muted/20 hover:bg-muted/40 transition-colors cursor-pointer">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center">
                <Calendar className="w-3.5 h-3.5 text-primary" />
              </div>
              <span className="text-xs font-medium">Life Events</span>
            </div>
            <p className="text-[10px] text-muted-foreground">155 guides</p>
          </div>
        </div>
      </div>
    </div>
  );
}
