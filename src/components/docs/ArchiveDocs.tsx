export function ArchiveDocs() {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      <h2 className="text-lg font-semibold mb-4">Archive</h2>
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Access guides you've archived. Keep your main workspace clean while preserving completed or paused guides.
        </p>

        <div>
          <h3 className="text-base font-medium mb-2">How to Use</h3>
          <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
            <li>Archive guides you've completed or want to pause</li>
            <li>Browse archived guides in this view</li>
            <li>Restore guides back to your active workspace anytime</li>
            <li>Your progress is preserved when archiving</li>
          </ol>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
            <li>View all archived guides</li>
            <li>Restore to active workspace</li>
            <li>Progress is preserved</li>
            <li>Search archived guides</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
