import { Award, Briefcase, CheckCircle2, Star } from "lucide-react";

export function ExpertProfile() {
  const contributions = [
    { title: "Career Transition", type: "Created", status: "verified" },
    { title: "Negotiating Salary", type: "Reviewed", status: "verified" },
    { title: "Remote Work Setup", type: "Created", status: "verified" },
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
            templata.org/experts
          </div>
        </div>
      </div>

      <div className="bg-background p-5">
        {/* Profile Header */}
        <div className="flex items-start gap-3 mb-5 pb-5 border-b border-border/40">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-sm font-medium flex-shrink-0">
            SC
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-sm">Sarah Chen</h3>
              <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400">
                <Award className="h-2.5 w-2.5" />
                <span className="text-[10px] font-medium">Verified Expert</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mb-2">Career Coach • 12 years experience</p>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span>8 guides</span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                <span>4.9</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contributions */}
        <div>
          <h4 className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider mb-3">Contributions</h4>
          <div className="space-y-2">
            {contributions.map((contrib, i) => (
              <div key={i} className="flex items-center justify-between p-2 rounded bg-muted/20 border border-border/40">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-3 w-3 text-muted-foreground" />
                  <span className="text-xs font-medium">{contrib.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-muted-foreground">{contrib.type}</span>
                  <CheckCircle2 className="h-3 w-3 text-green-600 dark:text-green-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
