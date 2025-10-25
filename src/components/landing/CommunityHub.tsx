import { MessageSquarePlus, ThumbsUp, Search } from "lucide-react";

export function CommunityHub() {
  const requests = [
    { title: "Dealing with Imposter Syndrome", votes: 127, category: "Personal Growth", status: "In Progress" },
    { title: "Managing Aging Parents", votes: 89, category: "Life Events", status: "Open" },
    { title: "Switching to Remote Work", votes: 76, category: "Career & Work", status: "Open" },
    { title: "First-Time Manager Toolkit", votes: 64, category: "Career & Work", status: "In Progress" },
    { title: "Living Abroad Checklist", votes: 52, category: "Life Events", status: "Open" },
  ];

  return (
    <div className="w-full bg-muted/10 rounded-2xl overflow-hidden shadow-[0_20px_70px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_70px_-10px_rgba(0,0,0,0.8)] ring-1 ring-black/10">
      {/* Browser Chrome */}
      <div className="h-11 bg-gradient-to-b from-muted/60 to-muted/40 border-b border-border/60 flex items-center px-4 gap-3">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28CA42]" />
        </div>
        <div className="flex-1 flex justify-center -ml-16">
          <div className="w-[420px] h-7 px-4 bg-background/50 rounded-md border border-border/40 flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded-sm bg-muted-foreground/20" />
            <span className="text-xs text-muted-foreground/80">templata.org/requests</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-background p-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <MessageSquarePlus className="h-4 w-4" style={{ color: 'var(--primary)' }} />
              <h2 className="text-xl font-semibold tracking-tight">Guide Requests</h2>
            </div>
            <button className="h-8 px-4 rounded-lg text-white text-sm font-medium" style={{ backgroundColor: 'var(--primary)' }}>
              New Request
            </button>
          </div>
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/40" />
            <input
              type="text"
              placeholder="Search requests..."
              className="w-full h-8 pl-8 pr-3 bg-transparent border-b border-border/60 focus:border-foreground/40 outline-none text-[13px] transition-colors"
            />
          </div>
        </div>

        {/* Requests List */}
        <div>
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-border/40">
            <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">Requested guides</span>
            <span className="text-[11px] text-muted-foreground">Votes</span>
          </div>

          <div className="space-y-0">
            {requests.map((request, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-3 border-b border-border/40 hover:bg-muted/20 -mx-3 px-3 cursor-pointer group transition-colors"
              >
                <div className="flex items-center gap-3 flex-1">
                  <button className="flex items-center justify-center w-7 h-7 rounded border border-border/60 hover:bg-muted/30 transition-colors">
                    <ThumbsUp className="h-3.5 w-3.5 text-muted-foreground" />
                  </button>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] font-medium">{request.title}</span>
                      {request.status === "In Progress" && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400">
                          In Progress
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-muted-foreground mt-0.5">
                      {request.category}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-[12px] text-muted-foreground">
                  <span className="font-medium">{request.votes}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
