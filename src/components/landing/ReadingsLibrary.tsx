import { BookOpen, Clock, ExternalLink } from "lucide-react";

export function ReadingsLibrary() {
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
          <div className="w-[420px] h-7 px-4 bg-background/50 rounded-md border border-border/40 flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded-sm bg-muted-foreground/20" />
            <span className="text-xs text-muted-foreground/80">templata.org/app/library</span>
          </div>
        </div>
      </div>

      {/* Browser Content */}
      <div className="bg-background p-6">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-primary" />
            </div>
            <h3 className="text-sm font-semibold">Curated Readings</h3>
          </div>
          <p className="text-[10px] text-muted-foreground">Expert-selected articles for Career Transition</p>
        </div>

        {/* Readings List */}
        <div className="space-y-2.5">
          <div className="group p-3 rounded-lg border border-border bg-muted/20 hover:bg-muted/40 transition-colors cursor-pointer">
            <div className="flex items-start justify-between gap-2 mb-1.5">
              <h4 className="text-xs font-medium leading-snug flex-1">
                The Dip: When to Quit (and When to Stick)
              </h4>
              <ExternalLink className="w-3 h-3 text-muted-foreground flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-[10px] text-muted-foreground leading-relaxed mb-2">
              Seth Godin's framework for knowing when to push through challenges versus when to walk away from a dead end.
            </p>
            <div className="flex items-center gap-3 text-[9px] text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="w-2.5 h-2.5" />
                <span>8 min read</span>
              </div>
              <span className="px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400">Strategy</span>
            </div>
          </div>

          <div className="group p-3 rounded-lg border border-border bg-muted/20 hover:bg-muted/40 transition-colors cursor-pointer">
            <div className="flex items-start justify-between gap-2 mb-1.5">
              <h4 className="text-xs font-medium leading-snug flex-1">
                Career Capital: Building Skills That Matter
              </h4>
              <ExternalLink className="w-3 h-3 text-muted-foreground flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-[10px] text-muted-foreground leading-relaxed mb-2">
              Cal Newport's concept of accumulating rare and valuable skills that give you leverage in career negotiations.
            </p>
            <div className="flex items-center gap-3 text-[9px] text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="w-2.5 h-2.5" />
                <span>12 min read</span>
              </div>
              <span className="px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400">Skills</span>
            </div>
          </div>

          <div className="group p-3 rounded-lg border border-border bg-muted/20 hover:bg-muted/40 transition-colors cursor-pointer">
            <div className="flex items-start justify-between gap-2 mb-1.5">
              <h4 className="text-xs font-medium leading-snug flex-1">
                The Hidden Costs of Career Switching
              </h4>
              <ExternalLink className="w-3 h-3 text-muted-foreground flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-[10px] text-muted-foreground leading-relaxed mb-2">
              Financial, social, and psychological costs to consider when making a major career change.
            </p>
            <div className="flex items-center gap-3 text-[9px] text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="w-2.5 h-2.5" />
                <span>10 min read</span>
              </div>
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">Finance</span>
            </div>
          </div>

          <div className="group p-3 rounded-lg border border-border bg-muted/20 hover:bg-muted/40 transition-colors cursor-pointer">
            <div className="flex items-start justify-between gap-2 mb-1.5">
              <h4 className="text-xs font-medium leading-snug flex-1">
                Network Effects in Career Transitions
              </h4>
              <ExternalLink className="w-3 h-3 text-muted-foreground flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-[10px] text-muted-foreground leading-relaxed mb-2">
              How your professional network compounds over time and strategies for building it in a new field.
            </p>
            <div className="flex items-center gap-3 text-[9px] text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="w-2.5 h-2.5" />
                <span>6 min read</span>
              </div>
              <span className="px-1.5 py-0.5 rounded bg-pink-500/10 text-pink-600 dark:text-pink-400">Networking</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
