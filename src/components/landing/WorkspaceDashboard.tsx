import { LayoutDashboard, ListTodo, Calendar, Clock, AlertCircle, Circle } from "lucide-react";

export function WorkspaceDashboard() {
  return (
    <div className="w-full bg-background rounded-lg overflow-hidden shadow-[0_20px_70px_-10px_rgba(0,0,0,0.3)] ring-1 ring-border">
      {/* Browser Header */}
      <div className="h-8 bg-muted/30 border-b border-border flex items-center px-3 gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28CA42]" />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="bg-background/50 rounded px-3 py-0.5 text-[10px] text-muted-foreground font-mono">
            templata.org/app/overview
          </div>
        </div>
      </div>

      {/* Browser Content */}
      <div className="bg-background p-6">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
            <LayoutDashboard className="w-3.5 h-3.5 text-primary" />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Overview</h3>
            <p className="text-[9px] text-muted-foreground">Your workspace dashboard</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-2.5 mb-4">
          <div className="rounded-md border border-border bg-muted/20 p-2.5">
            <div className="flex items-center gap-1.5 mb-1">
              <ListTodo className="w-3 h-3 text-muted-foreground" />
              <span className="text-[9px] text-muted-foreground">Total Tasks</span>
            </div>
            <div className="text-lg font-bold">24</div>
            <div className="text-[9px] text-muted-foreground">12 completed</div>
          </div>

          <div className="rounded-md border border-border bg-muted/20 p-2.5">
            <div className="flex items-center gap-1.5 mb-1">
              <Clock className="w-3 h-3 text-blue-500" />
              <span className="text-[9px] text-muted-foreground">Due Today</span>
            </div>
            <div className="text-lg font-bold text-blue-500">3</div>
            <div className="text-[9px] text-muted-foreground">Tasks for today</div>
          </div>

          <div className="rounded-md border border-border bg-muted/20 p-2.5">
            <div className="flex items-center gap-1.5 mb-1">
              <AlertCircle className="w-3 h-3 text-amber-500" />
              <span className="text-[9px] text-muted-foreground">Overdue</span>
            </div>
            <div className="text-lg font-bold text-amber-500">2</div>
            <div className="text-[9px] text-muted-foreground">Need attention</div>
          </div>

          <div className="rounded-md border border-border bg-muted/20 p-2.5">
            <div className="flex items-center gap-1.5 mb-1">
              <Calendar className="w-3 h-3 text-muted-foreground" />
              <span className="text-[9px] text-muted-foreground">Events</span>
            </div>
            <div className="text-lg font-bold">8</div>
            <div className="text-[9px] text-muted-foreground">Total events</div>
          </div>
        </div>

        {/* Upcoming Tasks */}
        <div className="rounded-md border border-border bg-muted/20 p-3">
          <h4 className="text-[10px] font-semibold mb-2">Upcoming Tasks</h4>
          <div className="space-y-1.5">
            <div className="flex items-start gap-1.5 p-1.5 rounded hover:bg-muted/50 transition-colors">
              <Circle className="w-2.5 h-2.5 mt-0.5 text-muted-foreground flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-medium leading-tight">Update resume with new skills</div>
                <div className="text-[9px] text-blue-500">Today</div>
              </div>
            </div>

            <div className="flex items-start gap-1.5 p-1.5 rounded hover:bg-muted/50 transition-colors">
              <Circle className="w-2.5 h-2.5 mt-0.5 text-muted-foreground flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-medium leading-tight">Research target companies</div>
                <div className="text-[9px] text-muted-foreground">Tomorrow</div>
              </div>
            </div>

            <div className="flex items-start gap-1.5 p-1.5 rounded hover:bg-muted/50 transition-colors">
              <Circle className="w-2.5 h-2.5 mt-0.5 text-muted-foreground flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-medium leading-tight">Schedule coffee chat with mentor</div>
                <div className="text-[9px] text-muted-foreground">Dec 28</div>
              </div>
            </div>

            <div className="flex items-start gap-1.5 p-1.5 rounded hover:bg-muted/50 transition-colors">
              <Circle className="w-2.5 h-2.5 mt-0.5 text-muted-foreground flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-medium leading-tight">Complete portfolio case study</div>
                <div className="text-[9px] text-amber-500">Overdue</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
