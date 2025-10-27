export function SplitScreenOpen() {
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
      <div className="flex h-[320px] bg-background">
        {/* Left: Guide Panel */}
        <div className="w-1/2 border-r border-border/40 bg-muted/20 p-5 overflow-hidden">
          <div className="space-y-4">
            <div className="space-y-1">
              <div className="inline-block px-2 py-0.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs rounded font-medium">
                Career & Work
              </div>
              <h3 className="text-lg font-semibold tracking-tight">Career Transition</h3>
              <p className="text-xs text-muted-foreground">12 questions · 8 readings</p>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">
                Questions
              </div>
              {[
                "What energizes you about work?",
                "What would your ideal day look like?",
                "What skills do you want to develop?"
              ].map((q, i) => (
                <div
                  key={i}
                  className="p-2.5 rounded-lg bg-background/50 border border-border/60 text-xs"
                >
                  {q}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Workspace Panel Opening */}
        <div className="w-1/2 bg-background p-5 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-transparent" />
          <div className="relative space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-border/40">
              <h4 className="text-sm font-semibold">Your Workspace</h4>
              <div className="w-2 h-2 rounded-full bg-blue-500/60 animate-pulse" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium">
                What energizes you about work?
              </label>
              <div className="h-20 p-3 rounded-lg border border-border/60 bg-muted/10">
                <div className="h-px w-3 bg-foreground/40 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
