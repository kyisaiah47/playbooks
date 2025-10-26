export function ArchiveDocs() {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      <h2 className="text-lg font-semibold mb-4">Archive</h2>
      <div className="space-y-6">
        <p className="text-sm text-muted-foreground">
          The Archive is where guides go when they're no longer active in your current transition work—either because you've completed them, paused them, or they're no longer relevant. Archiving keeps your workspace focused on current priorities while preserving everything you've done for future reference.
        </p>

        <div>
          <h3 className="text-base font-medium mb-2">Why Archive Matters</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Life transitions end. Some guides become completed successes. Others become experiments you abandon. A few lose relevance as your situation changes. The Archive lets you acknowledge these shifts without deleting your work—preserving your progress, reflections, and lessons learned.
          </p>
          <div className="bg-muted/30 border border-border rounded-lg p-4 space-y-2">
            <p className="text-sm"><strong>The Archive helps you:</strong></p>
            <p className="text-sm">→ Keep your active workspace focused on current transitions</p>
            <p className="text-sm">→ Celebrate completed guides without cluttering your workspace</p>
            <p className="text-sm">→ Pause guides you might return to later</p>
            <p className="text-sm">→ Preserve your history and progress for future reflection</p>
            <p className="text-sm">→ Maintain a record of everything you've worked through</p>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">How to Archive a Guide</h3>
          <div className="space-y-3">
            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">From Guide View</p>
              <p className="text-xs text-muted-foreground mb-2">
                Open any guide and click the three-dot menu in the header. Select "Archive Guide." You'll see a confirmation dialog explaining that archiving preserves all your work.
              </p>
              <p className="text-xs text-muted-foreground italic">
                Tip: The archive button only appears when you're ready—don't feel pressure to archive guides prematurely.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">From Sidebar</p>
              <p className="text-xs text-muted-foreground">
                Right-click (or long-press on mobile) any guide in the sidebar. Select "Archive" from the context menu. The guide moves to Archive immediately.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Bulk Archive</p>
              <p className="text-xs text-muted-foreground">
                In Settings, you can archive multiple guides at once. Useful during major life shifts when several transitions end simultaneously.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">What Happens When You Archive</h3>
          <p className="text-sm text-muted-foreground mb-3">Archiving is completely reversible and non-destructive:</p>
          <div className="space-y-2">
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">All Progress is Preserved</p>
              <p className="text-xs text-muted-foreground">
                Every reading response, task, calendar event, journal entry, and daily note linked to that guide stays intact. Nothing is deleted or changed.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Guide Becomes Read-Only</p>
              <p className="text-xs text-muted-foreground">
                You can view archived guides and all their content, but you can't add new readings, create tasks, or make changes. To work on it again, restore it first.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Analytics Are Maintained</p>
              <p className="text-xs text-muted-foreground">
                Archived guides still appear in your historical analytics. You can filter analytics to include or exclude archived guides.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Timeline Entries Remain</p>
              <p className="text-xs text-muted-foreground">
                Your timeline shows all activity from archived guides as part of your historical record. Filter to show/hide archived guide activity.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Workspace Declutters</p>
              <p className="text-xs text-muted-foreground">
                The guide disappears from your active sidebar, making your workspace cleaner and more focused on current work.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Accessing Archived Guides</h3>
          <div className="space-y-3">
            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Archive View</p>
              <p className="text-xs text-muted-foreground mb-2">
                Click the Archive icon in your app navigation to see all archived guides. They're organized by when they were archived, with most recent at the top.
              </p>
              <p className="text-xs text-muted-foreground italic">
                You can also group by category, completion status, or archive date
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Search Archive</p>
              <p className="text-xs text-muted-foreground">
                Use the search bar in Archive view to find specific archived guides by name, category, or keywords. Helpful when you have many archived guides.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Browse Content</p>
              <p className="text-xs text-muted-foreground">
                Click any archived guide to browse all its readings, your responses, tasks, and linked journal entries. Everything is viewable, just not editable.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Restoring from Archive</h3>
          <p className="text-sm text-muted-foreground mb-3">
            If you want to work on an archived guide again, restoration is simple:
          </p>
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
            <p className="text-sm font-medium mb-2">How to Restore</p>
            <div className="space-y-2">
              <p className="text-sm">. Go to Archive view</p>
              <p className="text-sm">. Find the guide you want to restore</p>
              <p className="text-sm">. Click "Restore to Workspace"</p>
              <p className="text-sm">. The guide returns to your active sidebar, fully editable</p>
            </div>
            <p className="text-xs text-muted-foreground mt-3 italic">
              All your previous progress, responses, and linked items are exactly as you left them.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">When to Archive vs. Delete</h3>
          <div className="space-y-3">
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Archive When:</p>
              <div className="space-y-1">
                <p className="text-sm">→ You've completed a guide and want to preserve your work</p>
                <p className="text-sm">→ A guide is no longer active but might be relevant later</p>
                <p className="text-sm">→ You want to pause work temporarily without losing progress</p>
                <p className="text-sm">→ You've invested significant effort and want a record</p>
                <p className="text-sm">→ You're unsure if you're truly done (archive is safer than delete)</p>
              </div>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Delete When:</p>
              <div className="space-y-1">
                <p className="text-sm">→ You added a guide by mistake</p>
                <p className="text-sm">→ You have no meaningful progress to preserve</p>
                <p className="text-sm">→ The guide is genuinely not valuable to keep as a record</p>
                <p className="text-sm">→ You're certain you'll never reference it again</p>
              </div>
              <p className="text-xs text-muted-foreground mt-2 italic">
                Deletion is permanent. When in doubt, archive instead—you can always delete from archive later.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Using Archive for Reflection</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Your archive becomes a powerful record of your transition history. Ways to use it:
          </p>
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Annual review:</strong> Look through archived guides from the past year to see how much you've grown and changed</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Pattern recognition:</strong> Review multiple completed guides to identify your patterns for successfully navigating transitions</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Wisdom mining:</strong> Revisit journal entries and reflections from archived guides—old insights often gain new meaning</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Progress proof:</strong> When facing a new transition, look at archived guides to remind yourself you've done hard things before</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Sharing your story:</strong> Export archived guides to share your journey with therapists, coaches, or memoir projects</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Archive Organization</h3>
          <div className="space-y-2">
            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Sort Options</p>
              <p className="text-xs text-muted-foreground">
                Sort archived guides by: archive date (most recent), original start date (oldest first), completion status, or alphabetically.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Filter Options</p>
              <p className="text-xs text-muted-foreground">
                Filter by: category (career, relationships, health, etc.), completion status (100% vs. partial), or time period archived.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Archive Notes</p>
              <p className="text-xs text-muted-foreground">
                When archiving, add a note explaining why: "Completed successfully," "No longer relevant," "Pausing to focus elsewhere." Future you will appreciate the context.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Tips for Managing Your Archive</h3>
          <div className="space-y-2">
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Archive promptly:</strong> When a transition ends, archive its guide within a week. This keeps your workspace current and makes completion feel real.
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Don't over-archive:</strong> If you're still thinking about a guide weekly, keep it active. Archive is for truly finished or paused work.
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Review annually:</strong> Once a year, browse your archive. Some guides can be permanently deleted. Others might need restoration.
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Celebrate completions:</strong> Archiving a 100% complete guide is an achievement. Take a moment to acknowledge what you accomplished.
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Trust the archive:</strong> Don't keep guides active "just in case." Archive them knowing you can restore anytime—reduce workspace clutter confidently.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Common Questions</h3>
          <div className="space-y-3">
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Can I archive incomplete guides?</p>
              <p className="text-xs text-muted-foreground">
                Yes. Sometimes you need to pause or abandon a guide that didn't work out. Archive it with a note explaining why, preserving what you learned even if it's not complete.
              </p>
            </div>
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Do archived guides count toward my workspace limits?</p>
              <p className="text-xs text-muted-foreground">
                No. Only active guides count toward workspace limits. Archive as many as you need—there's no limit on archived guides.
              </p>
            </div>
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">What if I accidentally archive something?</p>
              <p className="text-xs text-muted-foreground">
                Immediately go to Archive and click "Restore." Guides are never deleted when archived, so restoration is always possible—even years later.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
