import { FileText, BookOpen, ChevronDown, User, Moon } from "lucide-react";

export function HeroWorkspace() {
  return (
    <div className="w-full bg-background rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)] ring-1 ring-black/5 dark:ring-white/10">
      {/* Browser Chrome */}
      <div className="h-7 bg-muted/60 border-b border-border/60 flex items-center px-2 gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28CA42]" />
        </div>
        <div className="flex-1 flex justify-center -ml-12">
          <div className="px-3 py-0.5 bg-background/50 rounded text-[9px] text-muted-foreground border border-border/40 max-w-[200px] truncate">
            app.templata.org
          </div>
        </div>
      </div>

      <div className="flex flex-col h-[600px] bg-background">
        {/* Top Nav */}
        <div className="border-b border-border/40 bg-background">
          <div className="px-4 py-3">
            <div className="flex items-center gap-2 w-full relative">
              {/* Left side - Templata Logo */}
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-primary" />
                <span className="font-semibold text-sm">Templata</span>
              </div>

              {/* View Switcher - Centered */}
              <div className="flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
                <button className="px-3 py-1.5 rounded text-[11px] font-medium bg-primary text-primary-foreground">
                  Templates
                </button>
                <button className="px-3 py-1.5 rounded text-[11px] text-muted-foreground hover:bg-muted/50">
                  Reflection
                </button>
                <button className="px-3 py-1.5 rounded text-[11px] text-muted-foreground hover:bg-muted/50">
                  Overview
                </button>
              </div>

              {/* Theme Selector & User Dropdown */}
              <div className="flex items-center gap-1 ml-auto">
                <button className="p-1.5 rounded hover:bg-muted/50">
                  <Moon className="h-3.5 w-3.5" />
                </button>
                <button className="p-1.5 rounded hover:bg-muted/50">
                  <User className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Info Banner */}
        <div className="border-b bg-primary/5 border-primary/20">
          <div className="px-4 py-2.5">
            <p className="text-[10px] text-foreground text-center">
              <span className="inline-flex items-center gap-1.5">
                <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-primary/20 text-primary text-[9px] font-semibold">1</span>
                Pick a{' '}
                <span className="px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 font-medium">
                  template
                </span>{' '}
                that fits your goal
              </span>
              {' → '}
              <span className="inline-flex items-center gap-1.5">
                <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-primary/20 text-primary text-[9px] font-semibold">2</span>
                Answer thoughtful{' '}
                <span className="px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 font-medium">
                  prompts
                </span>
              </span>
              {' → '}
              <span className="inline-flex items-center gap-1.5">
                <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-primary/20 text-primary text-[9px] font-semibold">3</span>
                Read curated{' '}
                <span className="px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 font-medium">
                  articles
                </span>{' '}
                for help
              </span>
              {' → '}
              <span className="inline-flex items-center gap-1.5">
                <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-primary/20 text-primary text-[9px] font-semibold">4</span>
                See everything you've written in{' '}
                <span className="px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 font-medium">
                  Overview
                </span>
              </span>
            </p>
          </div>
        </div>

        {/* Templates View */}
        <div className="flex-1 overflow-hidden bg-background">
          <div className="h-full flex">
            {/* Left Column - Template Selector */}
            <div className="w-72 border-r border-border/40 flex flex-col bg-muted/20">
              {/* Template Dropdown */}
              <div className="p-3 border-b border-border/40">
                <button className="w-full flex items-center justify-between p-2.5 rounded-lg border border-border/60 bg-background hover:bg-muted/30 transition-colors">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-blue-500/10 flex items-center justify-center">
                      <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-[11px] font-medium">Wedding Planning</span>
                  </div>
                  <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
                </button>
              </div>

              {/* Prompts List */}
              <div className="flex-1 overflow-y-auto p-3">
                <div className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Prompts (15)
                </div>
                <div className="space-y-1">
                  {[
                    'What is your overall vision and theme for the wedding?',
                    'What is your budget breakdown for the wedding?',
                    'What is your ideal guest count and venue style?',
                    'What are your priorities for the ceremony and reception?',
                    'What are your catering and beverage preferences?',
                  ].map((prompt, i) => (
                    <div
                      key={i}
                      className={`p-2 rounded text-[10px] cursor-pointer transition-colors ${
                        i === 0
                          ? 'bg-primary/10 text-foreground font-medium'
                          : 'text-muted-foreground hover:bg-muted/50'
                      }`}
                    >
                      {prompt}
                    </div>
                  ))}
                </div>
              </div>

              {/* Articles Section */}
              <div className="border-t border-border/40 p-3">
                <div className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Articles (12)
                </div>
                <div className="space-y-1.5">
                  {[
                    { title: 'Wedding Planning Timeline', time: '8 min' },
                    { title: 'Budget Management Tips', time: '6 min' },
                  ].map((article, i) => (
                    <div
                      key={i}
                      className="p-2 rounded border border-border/60 hover:bg-muted/30 transition-colors cursor-pointer"
                    >
                      <div className="flex items-start gap-2">
                        <BookOpen className="w-3 h-3 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <div className="text-[10px] font-medium">{article.title}</div>
                          <div className="text-[9px] text-muted-foreground">{article.time}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Prompt Detail */}
            <div className="flex-1 flex flex-col overflow-hidden">
              {/* Prompt Header */}
              <div className="p-4 border-b border-border/40">
                <div className="text-[9px] text-muted-foreground mb-1">PROMPT 1 OF 15</div>
                <h2 className="text-sm font-semibold mb-3">What is your overall vision and theme for the wedding?</h2>
                <p className="text-[11px] text-muted-foreground">
                  Describe the atmosphere, style, and feeling you want to create for your special day. Think about colors, aesthetics, and the overall experience for you and your guests.
                </p>
              </div>

              {/* Response Area */}
              <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-3">
                  <div>
                    <label className="block text-[10px] font-medium mb-1.5">Your Response</label>
                    <textarea
                      className="w-full h-32 p-3 rounded-lg border border-border/60 bg-background text-[11px] resize-none focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Take your time to reflect on what matters most to you..."
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button className="text-[10px] text-muted-foreground hover:text-foreground">
                      Skip for now
                    </button>
                    <div className="flex items-center gap-2">
                      <button className="px-3 py-1.5 rounded text-[10px] font-medium border border-border/60 hover:bg-muted/30">
                        Save Draft
                      </button>
                      <button className="px-3 py-1.5 rounded text-[10px] font-medium bg-primary text-primary-foreground hover:bg-primary/90">
                        Save & Next
                      </button>
                    </div>
                  </div>

                  {/* Helper Section */}
                  <div className="mt-6 pt-4 border-t border-border/40">
                    <h3 className="text-[11px] font-semibold mb-2">Need inspiration?</h3>
                    <div className="space-y-2">
                      <div className="p-3 rounded-lg bg-muted/30 border border-border/40">
                        <div className="flex items-start gap-2">
                          <BookOpen className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <div className="text-[10px] font-medium mb-0.5">Wedding Planning Timeline</div>
                            <div className="text-[9px] text-muted-foreground mb-1.5">A comprehensive guide to planning your wedding from engagement to big day</div>
                            <button className="text-[9px] text-primary hover:underline">Read article →</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
