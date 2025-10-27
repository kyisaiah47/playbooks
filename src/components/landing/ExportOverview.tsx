export function ExportOverview() {
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
            templata.org/app
          </div>
        </div>
      </div>
      <div className="bg-background p-5">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-border/40">
          <h3 className="font-semibold">Overview</h3>
          <div className="flex gap-2">
            <div className="h-7 px-3 rounded-lg border border-border/60 bg-muted/20 text-xs flex items-center font-medium">
              PDF
            </div>
            <div className="h-7 px-3 rounded-lg bg-blue-600 text-white text-xs flex items-center font-medium">
              Export
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 p-1 bg-muted/30 rounded-lg">
          <div className="flex-1 h-7 rounded bg-background shadow-sm flex items-center justify-center text-xs font-medium">
            Responses
          </div>
          <div className="flex-1 h-7 flex items-center justify-center text-xs text-muted-foreground">
            Reflections
          </div>
        </div>

        {/* Responses List */}
        <div className="space-y-2">
          {[
            {
              guide: "Career Transition",
              count: 3,
              total: 12,
              preview: "I love working with cross-functional teams..."
            },
            {
              guide: "Wedding Planning",
              count: 7,
              total: 15,
              preview: "Budget priorities: venue, photography, minimal decor..."
            },
            {
              guide: "Home Buying",
              count: 2,
              total: 14,
              preview: "Location preferences: near public transit, walkable..."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="p-3 rounded-lg border border-border/60 bg-muted/10 hover:border-foreground/20 transition-colors"
            >
              <div className="flex items-start justify-between mb-1">
                <div className="font-medium text-sm">{item.guide}</div>
                <div className="text-xs text-muted-foreground">{item.count}/{item.total}</div>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-1">{item.preview}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 pt-2 border-t border-border/40">
          <div className="text-center">
            <div className="text-lg font-semibold">12</div>
            <div className="text-xs text-muted-foreground">Responses</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold">3</div>
            <div className="text-xs text-muted-foreground">Guides</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold">2.4k</div>
            <div className="text-xs text-muted-foreground">Words</div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
