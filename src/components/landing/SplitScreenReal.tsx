import { ChevronRight, Circle } from "lucide-react";

export function SplitScreenReal() {
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
          <div className="w-[300px] h-7 px-3 bg-background/50 rounded-md border border-border/40 flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-muted-foreground/20" />
            <span className="text-[11px] text-muted-foreground/80">templata.org/app/workspace</span>
          </div>
        </div>
      </div>

      {/* Split Screen Content */}
      <div className="bg-background flex h-[280px]">
        {/* Left Side - Questions */}
        <div className="w-1/2 border-r border-border p-4 overflow-hidden">
          <div className="mb-3">
            <h3 className="text-xs font-semibold mb-1">Career Transition</h3>
            <p className="text-[10px] text-muted-foreground">12 questions • 8 readings</p>
          </div>

          <div className="space-y-2">
            <div className="group p-2 rounded-md bg-primary/5 border border-primary/20">
              <div className="flex items-start gap-2">
                <Circle className="w-3 h-3 mt-0.5 text-primary flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-[11px] font-medium leading-snug">
                    What aspects of your current role energize you?
                  </p>
                </div>
                <ChevronRight className="w-3 h-3 text-primary/50" />
              </div>
            </div>

            <div className="group p-2 rounded-md hover:bg-muted/50 transition-colors cursor-pointer">
              <div className="flex items-start gap-2">
                <Circle className="w-3 h-3 mt-0.5 text-muted-foreground flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-[11px] leading-snug text-muted-foreground">
                    What are your non-negotiable career requirements?
                  </p>
                </div>
              </div>
            </div>

            <div className="group p-2 rounded-md hover:bg-muted/50 transition-colors cursor-pointer">
              <div className="flex items-start gap-2">
                <Circle className="w-3 h-3 mt-0.5 text-muted-foreground flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-[11px] leading-snug text-muted-foreground">
                    How much financial runway do you have?
                  </p>
                </div>
              </div>
            </div>

            <div className="group p-2 rounded-md hover:bg-muted/50 transition-colors cursor-pointer">
              <div className="flex items-start gap-2">
                <Circle className="w-3 h-3 mt-0.5 text-muted-foreground flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-[11px] leading-snug text-muted-foreground">
                    What skills do you want to develop?
                  </p>
                </div>
              </div>
            </div>

            <div className="group p-2 rounded-md hover:bg-muted/50 transition-colors cursor-pointer">
              <div className="flex items-start gap-2">
                <Circle className="w-3 h-3 mt-0.5 text-muted-foreground flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-[11px] leading-snug text-muted-foreground">
                    What's your timeline for making this change?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Editor */}
        <div className="w-1/2 p-4">
          <div className="mb-3 pb-2 border-b border-border">
            <h4 className="text-[11px] font-medium">What aspects of your current role energize you?</h4>
          </div>

          <div className="space-y-3">
            <div className="text-[11px] leading-relaxed">
              <p className="mb-2">
                Working directly with users and seeing the immediate impact of product decisions. I love when we ship something and get feedback within hours.
              </p>
              <p className="text-muted-foreground">
                <span className="animate-pulse">|</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
