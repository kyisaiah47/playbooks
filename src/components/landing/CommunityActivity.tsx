import { TrendingUp, GitPullRequest, Award, Sparkles } from "lucide-react";

export function CommunityActivity() {
  const activities = [
    { user: "Sarah C.", action: "created", item: "Career Transition", time: "2h", type: "create" },
    { user: "Marcus R.", action: "reviewed", item: "Setting Boundaries", time: "5h", type: "review" },
    { user: "Emily P.", action: "verified", item: "Career Transitions", time: "1d", type: "expert" },
    { user: "James W.", action: "created", item: "First-Time Manager", time: "1d", type: "create" },
    { user: "Priya S.", action: "reviewed", item: "Decision Fatigue", time: "2d", type: "review" },
  ];

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
            templata.org/activity
          </div>
        </div>
      </div>

      <div className="bg-background p-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
            <h3 className="font-semibold text-sm">Recent Activity</h3>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        </div>

        {/* Activity List */}
        <div className="space-y-0">
          {activities.map((activity, i) => {
            const Icon = activity.type === "create" ? Sparkles : activity.type === "review" ? GitPullRequest : Award;
            const colorClass = activity.type === "create" ? "text-blue-600 dark:text-blue-400" : activity.type === "review" ? "text-green-600 dark:text-green-400" : "text-purple-600 dark:text-purple-400";

            return (
              <div key={i} className="flex items-center gap-2 py-2.5 border-b border-border/40 last:border-0">
                <Icon className={`h-3 w-3 ${colorClass} flex-shrink-0`} />
                <div className="flex-1 min-w-0">
                  <p className="text-xs">
                    <span className="font-medium">{activity.user}</span>
                    {" "}
                    <span className="text-muted-foreground">{activity.action}</span>
                    {" "}
                    <span className="font-medium">{activity.item}</span>
                  </p>
                </div>
                <span className="text-[10px] text-muted-foreground flex-shrink-0">{activity.time}</span>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-border/40">
          <div className="text-center">
            <div className="text-lg font-semibold">342</div>
            <div className="text-[10px] text-muted-foreground">Contributors</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold">156</div>
            <div className="text-[10px] text-muted-foreground">Requests</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold">28</div>
            <div className="text-[10px] text-muted-foreground">Experts</div>
          </div>
        </div>
      </div>
    </div>
  );
}
