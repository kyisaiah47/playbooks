export function DailyDocs() {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      <h2 className="text-lg font-semibold mb-4">Daily</h2>
      <div className="space-y-6">
        <p className="text-sm text-muted-foreground">
          Daily notes are your space for day-to-day planning, reflection, and tracking during your transition. Each day gets its own note where you can plan your priorities, capture thoughts, track what happened, and reflect on progress—all in one place.
        </p>

        <div>
          <h3 className="text-base font-medium mb-2">Why Daily Notes Matter</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Major life transitions happen one day at a time. While guides provide structure and journal captures deep reflection, daily notes live in the middle—helping you navigate each day with intention and awareness.
          </p>
          <div className="bg-muted/30 border border-border rounded-lg p-4 space-y-2">
            <p className="text-sm font-medium mb-2">Daily notes help you:</p>
            <p className="text-sm">→ Start each day with clarity about priorities</p>
            <p className="text-sm">→ Track what actually happens vs. what you planned</p>
            <p className="text-sm">→ Notice patterns in energy, mood, and productivity</p>
            <p className="text-sm">→ Bridge the gap between long-term goals and daily action</p>
            <p className="text-sm">→ Capture fleeting thoughts before they're lost</p>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Structure of a Daily Note</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Each daily note is automatically created for the current day. You can access past daily notes by browsing the calendar view or sidebar. Every daily note can include:
          </p>
          <div className="space-y-3">
            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Morning Planning</p>
              <p className="text-xs text-muted-foreground">
                Set your intention and priorities for the day. What are the 3-5 most important things? What guide work will you focus on? What appointments or deadlines need attention?
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Throughout the Day</p>
              <p className="text-xs text-muted-foreground">
                Capture quick notes, thoughts from readings, ideas that emerge, or things that happen. Think of it as a running log of your day.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Evening Reflection</p>
              <p className="text-xs text-muted-foreground">
                Review what actually happened. What got done? What didn't? What did you learn? What surprised you? What do you want to remember about today?
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Daily Note Guides</h3>
          <p className="text-sm text-muted-foreground mb-3">
            You can customize your daily note guide or use one of ours. Here are popular structures:
          </p>
          <div className="space-y-3">
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Simple Structure</p>
              <p className="text-xs text-muted-foreground mb-2">
                <strong>Today's Priorities:</strong> What matters most?<br/>
                <strong>Notes:</strong> Free-form capture throughout the day<br/>
                <strong>Wins:</strong> What went well?
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Detailed Structure</p>
              <p className="text-xs text-muted-foreground mb-2">
                <strong>Morning:</strong> Intention, priorities, schedule preview<br/>
                <strong>Afternoon:</strong> Progress check, adjustments needed<br/>
                <strong>Evening:</strong> Accomplishments, learnings, tomorrow's prep
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Guide-Focused Structure</p>
              <p className="text-xs text-muted-foreground mb-2">
                <strong>Guide Work:</strong> Which guides am I working on today?<br/>
                <strong>Tasks:</strong> Guide-related actions for today<br/>
                <strong>Insights:</strong> Key takeaways from readings<br/>
                <strong>Blockers:</strong> What's getting in the way?
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Quick Capture</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Throughout your day, you can quickly add to today's daily note from anywhere in Templata:
          </p>
          <div className="bg-muted/30 border border-border rounded-lg p-4 space-y-2">
            <p className="text-sm"><strong>Quick Add Button:</strong> Always visible in the app to capture thoughts instantly</p>
            <p className="text-sm"><strong>From Readings:</strong> Save quotes or insights directly to today's note</p>
            <p className="text-sm"><strong>From Tasks:</strong> Log task completion with notes about how it went</p>
            <p className="text-sm"><strong>Voice to Text:</strong> Speak your notes when typing isn't convenient</p>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Using Daily Notes for Different Purposes</h3>
          <div className="space-y-3">
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Transition Tracking</p>
              <p className="text-xs text-muted-foreground">
                Document how you're feeling about the transition each day. Over time, this creates a record of your emotional journey alongside your practical actions.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Energy Management</p>
              <p className="text-xs text-muted-foreground">
                Note your energy levels throughout the day. Patterns emerge about when you do your best work, when you need breaks, and what drains or energizes you.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Decision Log</p>
              <p className="text-xs text-muted-foreground">
                Record decisions you make, no matter how small. During transitions, you're making countless choices—documenting them helps you learn your decision-making patterns.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Gratitude & Wins</p>
              <p className="text-xs text-muted-foreground">
                End each daily note with what you're grateful for and what went well. This practice builds resilience during difficult transitions.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Reviewing Past Daily Notes</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Your collection of daily notes becomes a rich archive of your transition. Ways to review them:
          </p>
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Weekly review:</strong> Read the past 7 daily notes to see patterns and plan the week ahead</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Monthly themes:</strong> Skim a month of daily notes to identify recurring themes or changes over time</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Search:</strong> Find specific moments by searching your daily notes archive</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Before/after:</strong> Compare notes from the beginning vs. now to see how far you've come</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Daily vs. Journal</h3>
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
            <p className="text-sm font-medium mb-2">Use Daily Notes for:</p>
            <div className="space-y-1 mb-3">
              <p className="text-sm">→ Planning and tracking each specific day</p>
              <p className="text-sm">→ Quick captures and running logs</p>
              <p className="text-sm">→ Structured daily routines</p>
              <p className="text-sm">→ Task and calendar integration</p>
            </div>
            <p className="text-sm font-medium mb-2">Use Journal for:</p>
            <div className="space-y-1">
              <p className="text-sm">→ Deeper emotional processing</p>
              <p className="text-sm">→ Not-daily reflections (whenever you need to write)</p>
              <p className="text-sm">→ Topic-based entries that span multiple days</p>
              <p className="text-sm">→ Private thoughts you want separate from daily planning</p>
            </div>
            <p className="text-xs text-muted-foreground mt-3 italic">
              Many people use both: Daily for structure and planning, Journal for processing and exploration.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Tips for Consistent Daily Notes</h3>
          <div className="space-y-2">
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Same time daily:</strong> Link daily note practice to existing habits (morning coffee, end of workday, before bed).
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Lower the bar:</strong> One sentence is better than nothing. Don't let perfection prevent consistency.
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Keep it visible:</strong> Open Templata to today's daily note to make capture effortless throughout the day.
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Review to reinforce:</strong> Reading yesterday's note before starting today creates continuity and awareness.
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Miss days without guilt:</strong> Life happens. Just pick up today without dwelling on gaps.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Common Questions</h3>
          <div className="space-y-3">
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">What if I miss several days?</p>
              <p className="text-xs text-muted-foreground">
                That's completely fine. Daily notes are tools, not obligations. Start again whenever you're ready without filling in past days.
              </p>
            </div>
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Can I customize the daily note guide?</p>
              <p className="text-xs text-muted-foreground">
                Yes. Go to Settings to create your own guide or modify the default structure to match your preferences.
              </p>
            </div>
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Are daily notes private?</p>
              <p className="text-xs text-muted-foreground">
                Yes, like all your Templata content. Daily notes are completely private unless you explicitly choose to share them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
