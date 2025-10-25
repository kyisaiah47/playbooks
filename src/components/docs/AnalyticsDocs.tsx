export function AnalyticsDocs() {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      <h2 className="text-lg font-semibold mb-4">Analytics</h2>
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Visualize your progress and gain insights into your growth patterns over time. Track completion rates and identify trends.
        </p>

        <div>
          <h3 className="text-base font-medium mb-2">How to Use</h3>
          <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
            <li>Select guides from the sidebar to include in analytics</li>
            <li>View charts showing your progress over time</li>
            <li>Identify patterns in your completion rates</li>
            <li>Set goals and track your progress towards them</li>
          </ol>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Metrics Tracked</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
            <li>Overall completion percentage</li>
            <li>Progress over time</li>
            <li>Active time spent on guides</li>
            <li>Completion trends</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
