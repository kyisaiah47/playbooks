export function WorkspaceActive() {
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
          <div>
            <h3 className="font-semibold text-sm">Career Transition</h3>
            <p className="text-xs text-muted-foreground mt-0.5">3 of 12 answered</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="text-xs text-muted-foreground">Saved</span>
          </div>
        </div>

        {/* Active Question */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            What aspects of your current role energize you?
          </label>
          <div className="min-h-[100px] p-3 rounded-lg border border-blue-500/30 bg-blue-500/5">
            <p className="text-sm">
              I love working with cross-functional teams and solving complex problems.
              The mentorship aspect is especially rewarding...
            </p>
            <div className="mt-1 h-px w-3 bg-foreground/40 animate-pulse" />
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-xs text-muted-foreground">142 characters</p>
            <div className="h-6 px-3 rounded bg-blue-500/10 text-blue-700 dark:text-blue-300 text-xs flex items-center font-medium">
              Next →
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex gap-2 pt-2">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full ${
                i < 3 ? 'bg-blue-500/60' : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
