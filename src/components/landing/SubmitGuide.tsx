import { Sparkles, Tag, FileText } from "lucide-react";

export function SubmitGuide() {
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
            templata.org/submit
          </div>
        </div>
      </div>

      <div className="bg-background p-5">
        {/* Header */}
        <div className="flex items-center gap-2 mb-5">
          <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          <h3 className="font-semibold text-sm">Submit a Guide</h3>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="text-xs font-medium mb-1.5 block">Guide Title</label>
            <div className="h-8 px-3 rounded border border-border/60 bg-muted/10 flex items-center">
              <span className="text-xs text-muted-foreground">Starting a Side Business</span>
              <div className="ml-auto h-px w-2 bg-foreground/40 animate-pulse" />
            </div>
          </div>

          <div>
            <label className="text-xs font-medium mb-1.5 block">Category</label>
            <div className="h-8 px-3 rounded border border-border/60 bg-muted/10 flex items-center gap-2">
              <Tag className="h-3 w-3 text-muted-foreground" />
              <span className="text-xs">Career & Work</span>
            </div>
          </div>

          <div>
            <label className="text-xs font-medium mb-1.5 block">Description</label>
            <div className="min-h-[80px] p-3 rounded border border-border/60 bg-muted/10">
              <p className="text-xs text-foreground/80 leading-relaxed">
                A comprehensive framework for evaluating, planning, and launching a side business while maintaining your full-time job...
              </p>
            </div>
          </div>

          <div className="pt-2 flex gap-2">
            <button className="flex-1 h-8 px-3 rounded bg-blue-600 text-white text-xs font-medium">
              Submit for Review
            </button>
            <button className="h-8 px-3 rounded border border-border/60 text-xs font-medium">
              Save Draft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
