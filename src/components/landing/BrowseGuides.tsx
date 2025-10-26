export function BrowseGuides() {
  const guides = [
    { title: "Career Transition", category: "Career & Work", questions: 12, readings: 8, color: "blue" },
    { title: "Wedding Planning", category: "Life Events", questions: 15, readings: 12, color: "indigo" },
    { title: "Home Buying", category: "Finance", questions: 14, readings: 10, color: "green" },
    { title: "Starting a Business", category: "Career & Work", questions: 18, readings: 15, color: "blue" },
    { title: "College Planning", category: "Education", questions: 11, readings: 9, color: "yellow" },
    { title: "Breakup Recovery", category: "Relationships", questions: 9, readings: 7, color: "pink" },
  ];

  const categoryColors: Record<string, string> = {
    blue: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    indigo: "bg-primary/10",
    green: "bg-green-500/10 text-green-600 dark:text-green-400",
    yellow: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
    pink: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
  };

  return (
    <div className="w-full bg-muted/10 rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)] ring-1 ring-black/5">
      {/* Browser Chrome */}
      <div className="h-9 bg-gradient-to-b from-muted/60 to-muted/40 border-b border-border/60 flex items-center px-3 gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28CA42]" />
        </div>
        <div className="flex-1 flex justify-center -ml-14">
          <div className="px-3 py-1 bg-background/50 rounded text-[10px] text-muted-foreground/80 border border-border/40">
            templata.org/guides
          </div>
        </div>
      </div>
      <div className="bg-background p-6">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-muted-foreground/20" />
          <div className="h-10 pl-10 pr-4 rounded-lg border border-border/60 bg-muted/20 flex items-center">
            <span className="text-sm text-muted-foreground">Search guides...</span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-2"> guides across 6 categories</p>
      </div>

      {/* Guides Grid */}
      <div className="grid grid-cols-2 gap-3">
        {guides.map((guide, i) => (
          <div
            key={i}
            className={`p-4 rounded-lg border transition-all ${
              i === 0
                ? 'bg-blue-500/5 border-blue-500/30 shadow-sm'
                : 'bg-muted/30 border-border/60 hover:border-foreground/10'
            }`}
          >
            <div className="space-y-2">
              <div className={`text-xs font-medium inline-block px-2 py-0.5 rounded ${categoryColors[guide.color]}`} style={guide.color === 'indigo' ? { color: 'var(--primary)' } : {}}>{guide.category}</div>
              <h3 className="font-medium text-sm">{guide.title}</h3>
              <p className="text-xs text-muted-foreground">
                {guide.questions} questions · {guide.readings} readings
              </p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
