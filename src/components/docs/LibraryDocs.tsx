export function LibraryDocs() {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      <h2 className="text-lg font-semibold mb-4">Library</h2>
      <div className="space-y-6">
        <p className="text-sm text-muted-foreground">
          The Library gives you a unified view of all readings across all your guides. Instead of navigating between different guides to find specific content, the Library brings everything together in one searchable, filterable interface. Think of it as your personal knowledge base for all transition-related content.
        </p>

        <div>
          <h3 className="text-base font-medium mb-2">Why Use Library Instead of Notes</h3>
          <p className="text-sm text-muted-foreground mb-3">
            While the Notes view is organized by guides, the Library is organized by readings. This makes it ideal for:
          </p>
          <div className="bg-muted/30 border border-border rounded-lg p-4 space-y-2">
            <p className="text-sm"><strong>Cross-guide searching:</strong> Find readings on a specific topic across multiple guides</p>
            <p className="text-sm"><strong>Quick reference:</strong> Jump directly to a reading you remember without navigating through guide structure</p>
            <p className="text-sm"><strong>Reading browsing:</strong> Explore all available content without committing to a specific guide first</p>
            <p className="text-sm"><strong>Completion tracking:</strong> See all incomplete readings across your workspace at once</p>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Navigating the Library</h3>
          <div className="space-y-3">
            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">All Readings View</p>
              <p className="text-xs text-muted-foreground">
                By default, the Library shows all readings from all your active guides in a single list. Each reading displays its title, parent guide, estimated reading time, and completion status.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Filter by Guide</p>
              <p className="text-xs text-muted-foreground mb-2">
                Use the sidebar to filter readings by specific guides. This narrows the view to show only readings from selected guides while maintaining the Library's unified interface.
              </p>
              <p className="text-xs text-muted-foreground italic">
                Tip: Select multiple guides to compare readings across related topics.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Search Functionality</p>
              <p className="text-xs text-muted-foreground">
                Search across all reading titles and content to quickly find what you're looking for. The search works across all guides simultaneously, revealing connections you might not have noticed.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Sort Options</p>
              <p className="text-xs text-muted-foreground">
                Sort readings by recently accessed, completion status, reading time, or alphabetically. Different sorting helps you find content based on your current needs.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Reading a Reading from Library</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Click any reading to open it in the Library view. You'll see the same content and reflection questions as in the Notes view, but with additional context:
          </p>
          <div className="bg-muted/30 border border-border rounded-lg p-4 space-y-2">
            <p className="text-sm"><strong>Parent Guide Context:</strong> See which guide this reading belongs to</p>
            <p className="text-sm"><strong>Related Readings:</strong> Discover other readings that reference similar themes</p>
            <p className="text-sm"><strong>Quick Navigation:</strong> Jump to the next or previous reading in the filtered list</p>
            <p className="text-sm"><strong>Return to Guide:</strong> One-click access to view this reading in its full guide context</p>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Completion Tracking</h3>
          <p className="text-sm text-muted-foreground mb-3">
            The Library shows completion status for every reading, making it easy to:
          </p>
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground">Identify incomplete readings across all guides</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground">Track your overall reading progress</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground">Filter to show only completed or incomplete readings</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground">Mark readings complete without leaving the Library view</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Use Cases for Library</h3>
          <div className="space-y-3">
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Research Mode</p>
              <p className="text-xs text-muted-foreground">
                When you're looking for all content related to a specific topic (like "setting boundaries" or "career exploration"), use the Library's search to find every reading that mentions it, regardless of which guide it's in.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Review Sessions</p>
              <p className="text-xs text-muted-foreground">
                Use the Library to revisit completed readings. Filter by "completed" status and sort by "recently accessed" to review material you've already covered.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Quick Reference</p>
              <p className="text-xs text-muted-foreground">
                Remember a specific exercise or framework but can't recall which guide it's from? The Library's search makes it instantly accessible.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Catch-Up Mode</p>
              <p className="text-xs text-muted-foreground">
                Filter by "incomplete" and sort by "oldest first" to tackle readings you may have skipped earlier but are now ready to engage with.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Library vs. Notes: When to Use Each</h3>
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
            <p className="text-sm font-medium mb-2">Use Notes when:</p>
            <div className="space-y-1 mb-3">
              <p className="text-sm">→ Working through a guide sequentially</p>
              <p className="text-sm">→ You want context of how readings relate within a guide</p>
              <p className="text-sm">→ Following a structured learning path</p>
            </div>
            <p className="text-sm font-medium mb-2">Use Library when:</p>
            <div className="space-y-1">
              <p className="text-sm">→ Searching across multiple guides</p>
              <p className="text-sm">→ Looking for a specific reading you remember</p>
              <p className="text-sm">→ Reviewing previously completed content</p>
              <p className="text-sm">→ Getting an overview of all available content</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Tips for Using Library Effectively</h3>
          <div className="space-y-2">
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Save searches:</strong> If you find yourself repeatedly searching for the same topics, bookmark those Library views for quick access.
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Weekly review:</strong> Use the Library's "recently accessed" sort to review what you've been working on each week.
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Cross-reference:</strong> When a reading references concepts from other guides, use Library search to quickly pull up that related content.
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Progress checking:</strong> Filter to incomplete readings to see exactly what's left across all your guides.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Common Questions</h3>
          <div className="space-y-3">
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Do reflection responses sync between Library and Notes views?</p>
              <p className="text-xs text-muted-foreground">
                Yes. Whether you answer reflection questions in the Library or Notes view, your responses are saved and accessible from either location.
              </p>
            </div>
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Can I read content from guides I haven't added to my workspace?</p>
              <p className="text-xs text-muted-foreground">
                No. The Library only shows readings from guides you've actively added to your workspace. To access more content, browse the Discover view and add relevant guides.
              </p>
            </div>
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Does the Library show readings from archived guides?</p>
              <p className="text-xs text-muted-foreground">
                No. Only readings from active guides appear in the Library. To access archived readings, either restore the guide from the Archive or visit the Archive view directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
