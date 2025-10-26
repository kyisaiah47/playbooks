export function TimelineDocs() {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      <h2 className="text-lg font-semibold mb-4">Timeline</h2>
      <div className="space-y-6">
        <p className="text-sm text-muted-foreground">
          The Timeline creates a visual chronology of your transition journey. Unlike a calendar that shows future events, the Timeline looks backward and forward, connecting past milestones, present actions, and future goals into a coherent story of change.
        </p>

        <div>
          <h3 className="text-base font-medium mb-2">Why Timeline Matters</h3>
          <p className="text-sm text-muted-foreground mb-3">
            During major transitions, it's easy to lose sight of progress. You're focused on what's next, what's hard, what's uncertain. The Timeline helps you zoom out and see the full arc of your journey—how far you've come, where you are now, and where you're headed.
          </p>
          <div className="bg-muted/30 border border-border rounded-lg p-4 space-y-2">
            <p className="text-sm"><strong>Timeline automatically captures:</strong></p>
            <p className="text-sm">→ When you added each guide to your workspace</p>
            <p className="text-sm">→ Readings you've completed and when</p>
            <p className="text-sm">→ Tasks you've finished</p>
            <p className="text-sm">→ Calendar events (past and future)</p>
            <p className="text-sm">→ Journal entries</p>
            <p className="text-sm">→ Milestones you've marked</p>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">How Timeline Works</h3>
          <p className="text-sm text-muted-foreground mb-3">
            The Timeline displays items chronologically in a vertical flow, with the most recent items at the top (or bottom, depending on your view preference). Each item shows:
          </p>
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Timestamp:</strong> Exact date/time the event occurred</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Type:</strong> Visual icon indicating what kind of item it is (reading, task, event, etc.)</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Guide association:</strong> Color-coded to show which guide it relates to</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Quick preview:</strong> Summary of the item without leaving the timeline</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Timeline Views</h3>
          <div className="space-y-3">
            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">All Activity</p>
              <p className="text-xs text-muted-foreground">
                Shows everything from all your guides in one continuous timeline. This gives you the complete picture of your transition work.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Filtered by Guide</p>
              <p className="text-xs text-muted-foreground mb-2">
                Select one or more guides from the sidebar to see only timeline items related to specific transitions. Helpful for focusing on a single area or comparing progress across related guides.
              </p>
              <p className="text-xs text-muted-foreground italic">
                Example: Filter to "Career Transition" to see your complete job search journey
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Filtered by Type</p>
              <p className="text-xs text-muted-foreground">
                Show only specific types of items—just completed readings, just tasks, just calendar events, etc. Great for reviewing specific kinds of progress.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Time Range</p>
              <p className="text-xs text-muted-foreground">
                Filter to specific time periods: this week, this month, last 3 months, or custom date ranges. Useful for reviews or seeing how you spent specific periods.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Milestones</h3>
          <p className="text-sm text-muted-foreground mb-3">
            While Timeline automatically captures your activities, you can manually add Milestones to mark significant moments:
          </p>
          <div className="bg-muted/30 border border-border rounded-lg p-4 space-y-3">
            <div>
              <p className="text-sm font-medium mb-1">What Makes a Milestone?</p>
              <p className="text-xs text-muted-foreground">
                Milestones are turning points, achievements, or significant moments worth remembering. They stand out visually on the timeline.
              </p>
            </div>

            <div>
              <p className="text-sm font-medium mb-1">Examples:</p>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">• "Decided to change careers" - the moment you committed</p>
                <p className="text-xs text-muted-foreground">• "Completed first guide" - finishing a major piece of work</p>
                <p className="text-xs text-muted-foreground">• "Got first interview" - external validation</p>
                <p className="text-xs text-muted-foreground">• "30 days sober" - important personal achievements</p>
                <p className="text-xs text-muted-foreground">• "Ended toxic relationship" - difficult but necessary actions</p>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium mb-1">Adding Milestones</p>
              <p className="text-xs text-muted-foreground">
                Click "Add Milestone" on the timeline, set the date, write a description, and optionally link it to guides. Milestones can be added for past events or future goals.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Using Timeline for Reflection</h3>
          <div className="space-y-3">
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Weekly Review</p>
              <p className="text-xs text-muted-foreground">
                Set the timeline to "Last 7 days" to see what you accomplished this week. This builds awareness of progress and helps with weekly planning.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Monthly Retrospective</p>
              <p className="text-xs text-muted-foreground">
                View the past month to identify patterns, celebrate wins, and understand how you spent your time. This monthly rhythm helps maintain perspective.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Progress Proof</p>
              <p className="text-xs text-muted-foreground">
                When you feel stuck or unmotivated, review your timeline from the beginning. Seeing the accumulation of small actions proves you're moving forward.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Transition Stories</p>
              <p className="text-xs text-muted-foreground">
                After completing a major transition, review the full timeline to see your story. Export or share it with coaches, therapists, or trusted friends who want to understand your journey.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Timeline Patterns to Notice</h3>
          <p className="text-sm text-muted-foreground mb-3">Over time, your timeline reveals patterns about how you work through transitions:</p>
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Activity clusters:</strong> Periods of intense work followed by rest or processing time</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Task completion patterns:</strong> Do you finish tasks right before deadlines or spread work evenly?</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Guide engagement:</strong> Which guides get consistent attention vs. which ones stall?</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Momentum building:</strong> Can you see acceleration as you gain clarity and confidence?</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>External events impact:</strong> How do calendar events (interviews, appointments) correlate with your activity?</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Timeline vs. Other Views</h3>
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
            <p className="text-sm font-medium mb-2">Timeline vs. Calendar:</p>
            <p className="text-xs text-muted-foreground mb-3">
              Calendar is for planning future events. Timeline is for reviewing past and present activity. Calendar asks "what's next?" Timeline answers "what happened?"
            </p>
            <p className="text-sm font-medium mb-2">Timeline vs. Analytics:</p>
            <p className="text-xs text-muted-foreground mb-3">
              Analytics shows trends and numbers. Timeline shows the story behind those numbers—the actual events and moments that created the data.
            </p>
            <p className="text-sm font-medium mb-2">Timeline vs. Journal:</p>
            <p className="text-xs text-muted-foreground">
              Journal captures your thoughts and feelings. Timeline captures your actions and events. Together they tell the complete story—what you did and how you felt about it.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Tips for Using Timeline Effectively</h3>
          <div className="space-y-2">
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Regular reviews:</strong> Check your timeline weekly to maintain awareness of progress and build motivation.
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Add context:</strong> When adding milestones, include notes about what made that moment significant. Future you will appreciate the detail.
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Celebrate wins:</strong> Mark achievements as milestones even if they feel small. They add up.
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Notice gaps:</strong> Long periods without timeline activity might indicate avoidance, burnout, or the need to adjust your approach.
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Export for sharing:</strong> Use timeline exports to update therapists, coaches, accountability partners, or job applications about your transition journey.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Common Questions</h3>
          <div className="space-y-3">
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Can I delete items from my timeline?</p>
              <p className="text-xs text-muted-foreground">
                You can delete manually-added milestones, but most timeline items are generated automatically from your activity. To remove those, you'd need to delete the source (the task, reading, etc.).
              </p>
            </div>
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">How far back does the timeline go?</p>
              <p className="text-xs text-muted-foreground">
                Your timeline includes everything from when you started using Templata. There's no limit on history.
              </p>
            </div>
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Can I export my timeline?</p>
              <p className="text-xs text-muted-foreground">
                Yes. Export your timeline as PDF, image, or data file to share with others or keep as a record of your transition journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
