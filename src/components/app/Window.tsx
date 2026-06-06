'use client';

interface WindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Window({ title, children, className = '' }: WindowProps) {
  return (
    <div className={`flex flex-col rounded-xl border border-border bg-card/90 backdrop-blur-sm shadow-lg overflow-hidden ${className}`}>
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background/60 shrink-0">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <span className="text-xs text-muted-foreground mx-auto">{title}</span>
      </div>
      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
