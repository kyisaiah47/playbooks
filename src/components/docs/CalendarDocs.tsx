export function CalendarDocs() {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      <h2 className="text-lg font-semibold mb-4">Calendar</h2>
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Schedule important events and milestones related to your transitions. Keep track of appointments, deadlines, and key dates.
        </p>

        <div>
          <h3 className="text-base font-medium mb-2">How to Use</h3>
          <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
            <li>Click on any date to create a new event</li>
            <li>Add event details including time, location, and description</li>
            <li>Link events to specific guides if relevant</li>
            <li>Filter calendar view by guide using the sidebar</li>
          </ol>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
            <li>Month, week, and day views</li>
            <li>All-day and timed events</li>
            <li>Link events to guides</li>
            <li>Filter by guide</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
