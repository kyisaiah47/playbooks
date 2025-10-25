export function JournalDocs() {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      <h2 className="text-lg font-semibold mb-4">Journal</h2>
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Capture daily reflections and track your emotional journey through major life changes. A private space for your thoughts.
        </p>

        <div>
          <h3 className="text-base font-medium mb-2">How to Use</h3>
          <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
            <li>Create new journal entries whenever you want to reflect</li>
            <li>Add a title and write your thoughts</li>
            <li>Tag entries for easier organization (optional)</li>
            <li>Browse past entries to see your progress</li>
          </ol>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
            <li>Unlimited journal entries</li>
            <li>Rich text formatting</li>
            <li>Tags for organization</li>
            <li>Search past entries</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
