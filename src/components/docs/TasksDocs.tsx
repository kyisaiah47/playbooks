export function TasksDocs() {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      <h2 className="text-lg font-semibold mb-4">Tasks</h2>
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Manage action items and to-dos related to your guides. Break down big transitions into manageable steps.
        </p>

        <div>
          <h3 className="text-base font-medium mb-2">How to Use</h3>
          <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
            <li>Create tasks related to your guides or general goals</li>
            <li>Set due dates and priorities</li>
            <li>Mark tasks as complete when done</li>
            <li>Filter tasks by guide using the sidebar</li>
          </ol>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
            <li>Link tasks to specific guides</li>
            <li>Set due dates</li>
            <li>Track completion status</li>
            <li>Filter by guide</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
