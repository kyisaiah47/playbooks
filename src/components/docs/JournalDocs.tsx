export function JournalDocs() {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      <h2 className="text-lg font-semibold mb-4">Journal</h2>
      <div className="space-y-6">
        <p className="text-sm text-muted-foreground">
          Your Journal is a private space for deep reflection, emotional processing, and personal exploration during your life transitions. Unlike daily notes (which track each day) or readings (which are structured), Journal entries are free-form, created whenever you need to process thoughts, feelings, or experiences.
        </p>

        <div>
          <h3 className="text-base font-medium mb-2">Why Journaling During Transitions</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Life transitions stir up complex emotions, difficult questions, and moments of uncertainty. Journaling provides a safe container to:
          </p>
          <div className="bg-muted/30 border border-border rounded-lg p-4 space-y-2">
            <p className="text-sm">→ Process emotions you can't share elsewhere</p>
            <p className="text-sm">→ Work through decisions without external pressure</p>
            <p className="text-sm">→ Explore thoughts that feel messy or unformed</p>
            <p className="text-sm">→ Track how you're changing over time</p>
            <p className="text-sm">→ Celebrate victories, big and small</p>
            <p className="text-sm">→ Release anxiety, fear, or overwhelm</p>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Creating Journal Entries</h3>
          <div className="space-y-3">
            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">When to Journal</p>
              <p className="text-xs text-muted-foreground mb-2">
                There's no schedule—create entries whenever you need to write. Common triggers include: after difficult conversations, when making decisions, processing setbacks, celebrating wins, or whenever emotions feel overwhelming.
              </p>
              <p className="text-xs text-muted-foreground italic">
                Tip: The urge to journal is often your intuition saying "you need to process this."
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Quick Entry</p>
              <p className="text-xs text-muted-foreground">
                Click "New Entry" and start writing. Add a title later if you want, or leave it blank—the first line automatically becomes the title.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">From Questions</p>
              <p className="text-xs text-muted-foreground">
                Use reflection questions from readings as journal starters. Guide questions often spark deeper thinking that deserves full journal exploration.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Journal Entry Structure</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Unlike daily notes, journal entries don't need structure. However, some people find these formats helpful:
          </p>
          <div className="space-y-3">
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Free Writing</p>
              <p className="text-xs text-muted-foreground">
                Just write whatever comes to mind without editing or censoring. Let thoughts flow onto the page. This is especially powerful for processing emotions or gaining clarity.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Structured Reflection</p>
              <p className="text-xs text-muted-foreground">
                Use questions like: "What am I feeling right now?" "What's the real issue here?" "What would I tell a friend in this situation?" "What do I need?"
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Decision Processing</p>
              <p className="text-xs text-muted-foreground">
                Write out options, pros/cons, gut feelings, fears, and what each choice might mean. Seeing it written often clarifies what you actually want.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Letter Writing</p>
              <p className="text-xs text-muted-foreground">
                Write letters you'll never send—to your past self, future self, someone who hurt you, or someone you're grateful for. This format can unlock powerful insights.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Organizing Journal Entries</h3>
          <div className="space-y-3">
            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Tags</p>
              <p className="text-xs text-muted-foreground">
                Tag entries with themes (emotions, topics, people) to find related entries later. Examples: #anxiety, #breakthrough, #family, #career-decision
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Guide Association</p>
              <p className="text-xs text-muted-foreground mb-2">
                Link entries to relevant guides. This connects your emotional processing with your structured work, showing how feelings and actions intertwine.
              </p>
              <p className="text-xs text-muted-foreground italic">
                Example: Link an anxiety-processing entry to your "Career Transition" guide to remember how you felt during this period.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Search</p>
              <p className="text-xs text-muted-foreground">
                Search your entire journal archive by keywords, tags, or dates. Find that entry where you worked through a similar issue months ago.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">What to Journal About</h3>
          <p className="text-sm text-muted-foreground mb-3">During transitions, common journal themes include:</p>
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Fear and uncertainty:</strong> What scares you about this change? What feels unknown?</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Identity questions:</strong> Who am I becoming? What parts of me are changing?</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Loss and grief:</strong> What are you leaving behind? What needs to be mourned?</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Hope and excitement:</strong> What possibilities are opening? What feels energizing?</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Anger and frustration:</strong> What's unfair? Where are you stuck? What needs to change?</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Gratitude and wins:</strong> What's working? Who's helping? What are you proud of?</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Reviewing Past Entries</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Your journal archive becomes a record of your emotional journey. Ways to use it:
          </p>
          <div className="bg-muted/30 border border-border rounded-lg p-4 space-y-2">
            <p className="text-sm"><strong>Pattern Recognition:</strong> Read entries from the past month to notice recurring themes or emotions</p>
            <p className="text-sm"><strong>Progress Proof:</strong> Compare early entries to recent ones—see how your thinking and feelings have evolved</p>
            <p className="text-sm"><strong>Decision Review:</strong> Revisit entries where you worked through past decisions to learn your patterns</p>
            <p className="text-sm"><strong>Wisdom Harvesting:</strong> Find insights you wrote months ago that feel even more relevant now</p>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Journal Privacy</h3>
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
            <p className="text-sm font-medium mb-2">Your journal is completely private</p>
            <p className="text-xs text-muted-foreground mb-2">
              Journal entries are never shared, suggested, or visible to anyone but you—even if you participate in the Templata community. This privacy allows total honesty.
            </p>
            <p className="text-xs text-muted-foreground italic">
              Write without filter, knowing these words are yours alone.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Tips for Meaningful Journaling</h3>
          <div className="space-y-2">
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Write for yourself only:</strong> Not for an audience, not for perfection. Messy, raw writing is often the most valuable.
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Follow the energy:</strong> Write about what has emotional charge. If it matters to you, it deserves space in your journal.
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Don't force it:</strong> Some days/weeks you'll journal frequently, others rarely. Both are fine.
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>End with action:</strong> After processing emotions, consider: "What do I need?" or "What's one small next step?"
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Date everything:</strong> Future you will want to know when you wrote this and what was happening in your life.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Common Questions</h3>
          <div className="space-y-3">
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">How often should I journal?</p>
              <p className="text-xs text-muted-foreground">
                There's no "should." Journal when you need to process something. Some people write daily, others weekly, others only during intense periods. All approaches work.
              </p>
            </div>
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">What if I don't know what to write?</p>
              <p className="text-xs text-muted-foreground">
                Start with "Right now I feel..." or "What's on my mind is..." The act of writing often reveals what you need to explore.
              </p>
            </div>
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Can I delete journal entries?</p>
              <p className="text-xs text-muted-foreground">
                Yes, you can delete any entry. However, consider archiving instead—sometimes entries that feel painful now become valuable context later.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
