export function DailyDocs() {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      <h2 className="text-lg font-semibold mb-4">Daily</h2>
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Create daily notes and plan your day. Keep track of what you're working on and your daily priorities.
        </p>

        <div>
          <h3 className="text-base font-medium mb-2">How to Use</h3>
          <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
            <li>Create a new daily note for today</li>
            <li>Add your plans, thoughts, and priorities</li>
            <li>Review past daily notes to track patterns</li>
            <li>Filter view by specific guides using the sidebar</li>
          </ol>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
            <li>One note per day</li>
            <li>Free-form content</li>
            <li>Daily agenda planning</li>
            <li>Filter by guide</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
