export function TimelineDocs() {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      <h2 className="text-lg font-semibold mb-4">Timeline</h2>
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Visualize your journey over time. Track milestones, events, and progress across all your guides.
        </p>

        <div>
          <h3 className="text-base font-medium mb-2">How to Use</h3>
          <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
            <li>View your timeline automatically populated with events and milestones</li>
            <li>Filter by specific guides using the sidebar</li>
            <li>Navigate through different time periods</li>
            <li>Click on items to see more details</li>
          </ol>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
            <li>Chronological view of your journey</li>
            <li>Filter by guide</li>
            <li>Visual progress indicators</li>
            <li>Milestone tracking</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
