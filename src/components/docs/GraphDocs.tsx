export function GraphDocs() {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      <h2 className="text-lg font-semibold mb-4">Graph</h2>
      <div className="space-y-6">
        <p className="text-sm text-muted-foreground">
          The Graph visualizes the connections between everything in your workspace—guides, readings, tasks, calendar events, journal entries, and daily notes. Unlike linear views that show items in lists or timelines, the Graph reveals the web of relationships, helping you discover patterns, identify gaps, and understand how different parts of your transition work interconnect.
        </p>

        <div>
          <h3 className="text-base font-medium mb-2">Why Graph Visualization Matters</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Life transitions are complex and interconnected. The career decision connects to your identity questions, which connect to relationship changes, which influence your daily energy levels. The Graph makes these hidden connections visible, revealing insights that list-based views can't show.
          </p>
          <div className="bg-muted/30 border border-border rounded-lg p-4 space-y-2">
            <p className="text-xs text-muted-foreground"><strong>The Graph helps you:</strong></p>
            <p className="text-xs text-muted-foreground">→ See which guides and themes are most central to your transition</p>
            <p className="text-xs text-muted-foreground">→ Discover unexpected connections between different areas of work</p>
            <p className="text-xs text-muted-foreground">→ Identify isolated items that might need more integration</p>
            <p className="text-xs text-muted-foreground">→ Understand how completing one reading or task influences others</p>
            <p className="text-xs text-muted-foreground">→ Find related content you might have forgotten about</p>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">How the Graph Works</h3>
          <p className="text-sm text-muted-foreground mb-3">
            The Graph displays nodes (items in your workspace) connected by edges (relationships between them). Each type of item has its own visual style, making it easy to distinguish guides from tasks, readings from journal entries, etc.
          </p>
          <div className="space-y-3">
            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Nodes</p>
              <p className="text-xs text-muted-foreground mb-2">
                Each circle or shape represents an item: a guide, reading, task, calendar event, journal entry, or daily note. The size of the node indicates its importance or number of connections.
              </p>
              <p className="text-xs text-muted-foreground italic">
                Larger nodes = more connections or higher engagement
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Edges</p>
              <p className="text-xs text-muted-foreground">
                Lines between nodes show relationships: a task created from a reading, a journal entry linked to a guide, a calendar event related to multiple guides, tags shared between items, etc.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Colors</p>
              <p className="text-xs text-muted-foreground">
                Nodes are color-coded by guide (matching your guide colors elsewhere in the app) or by type (readings, tasks, events, etc.) depending on your view settings.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Types of Connections</h3>
          <p className="text-sm text-muted-foreground mb-3">The Graph automatically detects and visualizes these relationships:</p>
          <div className="space-y-2">
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Guide → Reading</p>
              <p className="text-xs text-muted-foreground">
                Every reading belongs to a guide. These are the foundational connections in your graph.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Reading → Task</p>
              <p className="text-xs text-muted-foreground">
                When you create a task from a reading, the graph links them—showing how insights become actions.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Guide → Calendar Event</p>
              <p className="text-xs text-muted-foreground">
                Calendar events tagged with guides appear connected, showing when transition work happens in real time.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Journal Entry → Multiple Guides</p>
              <p className="text-xs text-muted-foreground">
                Journal entries can connect to multiple guides, revealing how different transitions emotionally overlap.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Tag Connections</p>
              <p className="text-xs text-muted-foreground">
                Items sharing tags (like #anxiety, #breakthrough, #family) become connected, showing thematic patterns across your work.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Daily Note → Everything</p>
              <p className="text-xs text-muted-foreground">
                Daily notes often reference multiple guides, tasks, and events, making them hubs that connect disparate work.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Navigating the Graph</h3>
          <div className="space-y-3">
            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Pan & Zoom</p>
              <p className="text-xs text-muted-foreground">
                Click and drag to pan around the graph. Use scroll wheel or pinch gestures to zoom in/out. This helps you focus on specific clusters or see the entire network.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Click to Focus</p>
              <p className="text-xs text-muted-foreground mb-2">
                Click any node to highlight it and its direct connections, dimming everything else. This isolates one item's network.
              </p>
              <p className="text-xs text-muted-foreground italic">
                Example: Click a guide to see all its readings, tasks, and related journal entries
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Hover for Details</p>
              <p className="text-xs text-muted-foreground">
                Hover over any node to see a tooltip with its title, type, and connection count. Hover over edges to see the relationship type.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Double-Click to Open</p>
              <p className="text-xs text-muted-foreground">
                Double-click a node to open that item (reading, task, journal entry, etc.) in its native view for editing or deeper exploration.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Graph View Options</h3>
          <div className="space-y-3">
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Full Graph</p>
              <p className="text-xs text-muted-foreground">
                Shows everything in your workspace. Great for seeing the complete picture and discovering unexpected connections.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Filtered by Guide</p>
              <p className="text-xs text-muted-foreground">
                Select one or more guides from the filter menu to show only nodes related to those guides. Useful for focusing on a specific transition.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Filtered by Type</p>
              <p className="text-xs text-muted-foreground">
                Show only certain types of items (just readings and tasks, or just journal entries and daily notes). This reveals patterns in specific kinds of work.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Time-Based</p>
              <p className="text-xs text-muted-foreground">
                Filter to show only items created or completed in a specific time range. Watch how your graph grows over time.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Layout Styles</p>
              <p className="text-xs text-muted-foreground">
                Switch between force-directed (organic clustering), hierarchical (top-down), circular (radial), or timeline-based layouts depending on what you want to explore.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Using the Graph to Discover Insights</h3>
          <div className="space-y-3">
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Find Your Central Themes</p>
              <p className="text-xs text-muted-foreground">
                Look for the largest, most connected nodes. These represent your core focus areas—the guides, themes, or ideas that everything else revolves around.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Identify Isolated Work</p>
              <p className="text-xs text-muted-foreground">
                Nodes sitting alone with few connections might indicate work that's not integrated with the rest of your transition. Consider: Does this need more attention? Or can it be archived?
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Notice Unexpected Bridges</p>
              <p className="text-xs text-muted-foreground">
                Sometimes the graph reveals surprising connections—a journal entry that links two seemingly unrelated guides, or a task that influences multiple areas. These bridges often contain important insights.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Track Completion Momentum</p>
              <p className="text-xs text-muted-foreground">
                Use color coding to show completed vs. incomplete items. Watch how completion spreads through the graph over time—sometimes finishing one reading unlocks momentum on connected tasks.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Explore Tag Clusters</p>
              <p className="text-xs text-muted-foreground">
                Items sharing tags form natural clusters. These reveal thematic patterns: all work related to #anxiety, all #breakthrough moments, all #decision-making processes.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Practical Use Cases</h3>
          <p className="text-sm text-muted-foreground mb-3">Ways to use the Graph during your transition:</p>
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Weekly review:</strong> Zoom out to see what you worked on this week and how it connects</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Stuck on a guide:</strong> Click the guide node to see all related work—maybe a journal entry or task holds the key</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Finding related readings:</strong> Click a reading you loved to find other readings with similar tags or themes</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Understanding overwhelm:</strong> If you feel overwhelmed, check if one guide is dominating the graph—might need to rebalance</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Progress visualization:</strong> Export the graph at different points in your journey to see how connections grow</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Graph Patterns to Notice</h3>
          <p className="text-sm text-muted-foreground mb-3">Over time, certain graph patterns reveal information about how you work:</p>
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Hub-and-spoke:</strong> One central guide with everything radiating from it (focused approach)</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Interconnected web:</strong> Dense connections between multiple guides (holistic approach)</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Separate clusters:</strong> Distinct groups with few bridges (compartmentalized work—not good or bad, just a pattern)</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Long chains:</strong> Linear sequences of connected work (step-by-step progression)</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Many orphans:</strong> Lots of isolated nodes (might indicate lack of follow-through or need for better tagging)</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Tips for Using the Graph Effectively</h3>
          <div className="space-y-2">
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Tag consistently:</strong> The more you tag items with themes, emotions, and topics, the richer your graph connections become.
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Link intentionally:</strong> When creating tasks or journal entries, explicitly link them to relevant guides and readings to build the graph.
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Regular exploration:</strong> Spend 5 minutes weekly just exploring the graph—you'll discover connections you didn't consciously create.
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Try different layouts:</strong> Each layout algorithm reveals different patterns. Switch between them to see your work from multiple angles.
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Export snapshots:</strong> Save graph images at major milestones to document how your transition evolved.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Common Questions</h3>
          <div className="space-y-3">
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Why does my graph look messy?</p>
              <p className="text-xs text-muted-foreground">
                Dense graphs with many connections are normal for active workspaces. Use filters to simplify the view, or try different layout algorithms to find one that reveals the structure more clearly.
              </p>
            </div>
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Can I manually rearrange nodes?</p>
              <p className="text-xs text-muted-foreground">
                Yes. Click and drag any node to manually position it. The graph will remember your custom layout until you reset or change the layout algorithm.
              </p>
            </div>
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">What if I have very few connections?</p>
              <p className="text-xs text-muted-foreground">
                Early in your journey, the graph will be sparse. As you add guides, complete readings, create tasks, and write journal entries, connections grow naturally. Explicit tagging and linking speeds this up.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
