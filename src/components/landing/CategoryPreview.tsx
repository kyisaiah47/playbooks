interface CategoryPreviewProps {
  category: {
    name: string;
    color: string;
    guide: string;
    questions: string[];
    resources?: string[];
  };
}

export function CategoryPreview({ category }: CategoryPreviewProps) {
  const colorMap = {
    blue: {
      bg: "bg-blue-500/5",
      border: "border-blue-500/30",
      badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
      text: "text-blue-600 dark:text-blue-400"
    },
    pink: {
      bg: "bg-pink-500/5",
      border: "border-pink-500/30",
      badge: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
      text: "text-pink-600 dark:text-pink-400"
    },
    green: {
      bg: "bg-green-500/5",
      border: "border-green-500/30",
      badge: "bg-green-500/10 text-green-600 dark:text-green-400",
      text: "text-green-600 dark:text-green-400"
    },
    purple: {
      bg: "bg-purple-500/5",
      border: "border-purple-500/30",
      badge: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
      text: "text-purple-600 dark:text-purple-400"
    },
    emerald: {
      bg: "bg-emerald-500/5",
      border: "border-emerald-500/30",
      badge: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
      text: "text-emerald-600 dark:text-emerald-400"
    },
    indigo: {
      bg: "bg-primary/5",
      border: "border-primary/30",
      badge: "bg-primary/10",
      text: ""
    },
  };

  const colors = colorMap[category.color as keyof typeof colorMap];

  return (
    <div className="w-full bg-background rounded-xl border border-border/40 overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.6)] hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] transition-shadow">
      {/* Mock workspace interface */}
      <div className="p-5 space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <div className={`inline-block px-2 py-1 rounded text-xs font-medium ${colors.badge}`}>
            {category.name}
          </div>
          <h3 className="font-semibold text-lg">{category.guide}</h3>
        </div>

        {/* Questions */}
        <div className="space-y-2">
          <div className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">
            Questions
          </div>
          {category.questions.map((q, i) => (
            <div
              key={i}
              className={`p-3 rounded-lg border text-sm transition-all ${
                i === 0
                  ? `${colors.bg} ${colors.border}`
                  : 'bg-muted/30 border-border/60 opacity-60'
              }`}
            >
              {q}
            </div>
          ))}
        </div>

        {/* Resources if provided */}
        {category.resources && (
          <div className="space-y-2">
            <div className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">
              Reading
            </div>
            {category.resources.slice(0, 2).map((r, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg bg-muted/30 border border-border/60 text-xs flex items-center gap-2 transition-all duration-300 hover:border-border cursor-pointer`}
              >
                <div className="w-3 h-3 rounded bg-muted-foreground/20" />
                {r}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
