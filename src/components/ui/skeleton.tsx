import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props}
    />
  )
}

function CardSkeleton() {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg border animate-fade-in-up">
      <Skeleton className="w-8 h-8 rounded-lg" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
      </div>
      <Skeleton className="w-4 h-4" />
    </div>
  )
}

function ListSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="space-y-2 stagger-children">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  )
}

export { Skeleton, CardSkeleton, ListSkeleton }
