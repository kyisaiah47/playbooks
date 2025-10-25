export function LibraryDocs() {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      <h2 className="text-lg font-semibold mb-4">Library</h2>
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Access all your readings in one place. Easily search and navigate through guide content without switching between different guides.
        </p>

        <div>
          <h3 className="text-base font-medium mb-2">How to Use</h3>
          <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
            <li>Click on any reading from the sidebar to view it</li>
            <li>Readings are organized by guide</li>
            <li>Use the sidebar to filter by specific guides</li>
            <li>Mark readings as complete directly from the library</li>
          </ol>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
            <li>View all readings across all guides</li>
            <li>Filter by guide</li>
            <li>Track completion status</li>
            <li>Quick navigation between readings</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
