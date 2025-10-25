export function GraphDocs() {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      <h2 className="text-lg font-semibold mb-4">Graph</h2>
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Visualize connections between your guides, notes, and reflections. See how different areas of your life are interconnected.
        </p>

        <div>
          <h3 className="text-base font-medium mb-2">How to Use</h3>
          <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
            <li>Select guides from the sidebar to include in the graph</li>
            <li>Explore connections visually</li>
            <li>Click on nodes to see more details</li>
            <li>Use the graph to discover insights</li>
          </ol>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
            <li>Interactive graph visualization</li>
            <li>Filter by guide</li>
            <li>Discover connections</li>
            <li>Visual insights</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
