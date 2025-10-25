export function AnalyticsDocs() {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      <h2 className="text-lg font-semibold mb-4">Analytics</h2>
      <div className="space-y-6">
        <p className="text-sm text-muted-foreground">
          Analytics transforms your transition work into visual insights, showing patterns, trends, and progress over time. While the Timeline shows what you did, Analytics reveals how you're doing—completion rates, momentum, focus areas, and behavioral patterns that help you understand and improve your transition journey.
        </p>

        <div>
          <h3 className="text-base font-medium mb-2">Why Analytics Matter for Transitions</h3>
          <p className="text-sm text-muted-foreground mb-3">
            During major life changes, it's hard to gauge progress objectively. You might feel stuck while actually making steady progress, or feel busy without moving forward. Analytics provides data-driven clarity about where you're actually spending energy and what's actually getting done.
          </p>
          <div className="bg-muted/30 border border-border rounded-lg p-4 space-y-2">
            <p className="text-xs text-muted-foreground"><strong>Analytics help you:</strong></p>
            <p className="text-xs text-muted-foreground">→ Measure progress objectively when emotions make it hard to see</p>
            <p className="text-xs text-muted-foreground">→ Identify which guides get consistent attention vs. which ones stall</p>
            <p className="text-xs text-muted-foreground">→ Spot patterns in when you're most productive or engaged</p>
            <p className="text-xs text-muted-foreground">→ Celebrate wins with concrete data</p>
            <p className="text-xs text-muted-foreground">→ Adjust your approach based on what's actually working</p>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Metrics Tracked</h3>
          <p className="text-sm text-muted-foreground mb-3">Templata automatically tracks these metrics across your work:</p>
          <div className="space-y-2">
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Completion Metrics</p>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">→ Overall completion percentage across all guides</p>
                <p className="text-xs text-muted-foreground">→ Completion rate per guide</p>
                <p className="text-xs text-muted-foreground">→ Readings completed vs. remaining</p>
                <p className="text-xs text-muted-foreground">→ Tasks completed vs. pending</p>
                <p className="text-xs text-muted-foreground">→ Completion velocity (items per day/week)</p>
              </div>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Engagement Metrics</p>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">→ Active days (days with any activity)</p>
                <p className="text-xs text-muted-foreground">→ Streak tracking (consecutive days of work)</p>
                <p className="text-xs text-muted-foreground">→ Time spent per guide</p>
                <p className="text-xs text-muted-foreground">→ Journal entries written</p>
                <p className="text-xs text-muted-foreground">→ Daily notes created</p>
              </div>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Focus Metrics</p>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">→ Which guides receive most attention</p>
                <p className="text-xs text-muted-foreground">→ Task-to-completion ratio (follow-through rate)</p>
                <p className="text-xs text-muted-foreground">→ Time from task creation to completion</p>
                <p className="text-xs text-muted-foreground">→ Reading response depth (word count, time spent)</p>
              </div>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Trend Metrics</p>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">→ Progress over time (weekly/monthly charts)</p>
                <p className="text-xs text-muted-foreground">→ Momentum changes (speeding up vs. slowing down)</p>
                <p className="text-xs text-muted-foreground">→ Seasonal patterns in engagement</p>
                <p className="text-xs text-muted-foreground">→ Correlation between different activities</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Chart Types and Views</h3>
          <div className="space-y-3">
            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Progress Over Time</p>
              <p className="text-xs text-muted-foreground mb-2">
                Line charts showing your completion percentage across weeks or months. See if you're maintaining momentum, accelerating, or plateauing.
              </p>
              <p className="text-xs text-muted-foreground italic">
                Useful for: Understanding if your current pace is sustainable
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Activity Heatmap</p>
              <p className="text-xs text-muted-foreground mb-2">
                Calendar-style heatmap showing which days you were active. Darker colors = more activity. Quickly spot patterns and gaps.
              </p>
              <p className="text-xs text-muted-foreground italic">
                Useful for: Identifying your most productive days and building consistency
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Guide Breakdown</p>
              <p className="text-xs text-muted-foreground mb-2">
                Pie or bar charts showing time/energy distribution across guides. See which transitions are getting attention and which are being neglected.
              </p>
              <p className="text-xs text-muted-foreground italic">
                Useful for: Rebalancing focus when one guide dominates or gets ignored
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Completion Funnel</p>
              <p className="text-xs text-muted-foreground mb-2">
                Shows drop-off rates: readings started vs. completed, tasks created vs. finished, guides added vs. completed.
              </p>
              <p className="text-xs text-muted-foreground italic">
                Useful for: Understanding where you lose momentum and why
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Streak Tracking</p>
              <p className="text-xs text-muted-foreground mb-2">
                Displays your current streak of active days, longest streak, and consistency percentage. Gamifies habit building.
              </p>
              <p className="text-xs text-muted-foreground italic">
                Useful for: Building sustainable daily practice during transitions
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Using Analytics for Reflection</h3>
          <div className="space-y-3">
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Weekly Check-In</p>
              <p className="text-xs text-muted-foreground">
                Every Sunday or Monday, review last week's metrics. Did you make progress? Where did you spend time? What got completed? Use this data to plan the upcoming week more effectively.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Monthly Review</p>
              <p className="text-xs text-muted-foreground">
                At month's end, look at 30-day trends. Are you accelerating or plateauing? Which guides made progress? What patterns emerged? This longer view helps you adjust your overall strategy.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Transition Milestone Reviews</p>
              <p className="text-xs text-muted-foreground">
                When completing a major guide or hitting a milestone, review analytics from the start of that transition. See the full arc of effort, completion rates, and time invested.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Pattern Discovery</p>
              <p className="text-xs text-muted-foreground">
                Look for patterns you wouldn't consciously notice: Do you engage more on weekends? Is there a time of month you're less productive? Do certain guide types get more follow-through?
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Setting and Tracking Goals</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Analytics becomes more powerful when paired with goals. Set targets and watch your progress toward them:
          </p>
          <div className="space-y-2">
            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Completion Goals</p>
              <p className="text-xs text-muted-foreground">
                Set a target: "Complete 3 readings per week" or "Finish Career Transition guide by March." Analytics tracks progress and shows if you're on pace.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Consistency Goals</p>
              <p className="text-xs text-muted-foreground">
                Aim for "Active 5 days per week" or "Write in journal 3x weekly." Analytics highlights when you hit or miss these targets.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Balance Goals</p>
              <p className="text-xs text-muted-foreground">
                Set distribution targets: "Spend at least 20% of time on self-care guide" or "Don't let any guide drop below 10% attention." Analytics shows if you're maintaining balance.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Interpreting Your Data</h3>
          <p className="text-sm text-muted-foreground mb-3">How to make sense of what the numbers are telling you:</p>
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>High completion, low engagement:</strong> You're finishing things but not spending much time. Good for momentum, but are you rushing? Going deep enough?</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Low completion, high engagement:</strong> You're spending time but not finishing. Possible over-thinking, perfectionism, or choosing guides that are too ambitious.</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Declining streak:</strong> Engagement is dropping. Normal during transitions—life gets busy. Can you simplify? Lower the bar? Or do you need a break?</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>One guide dominates:</strong> 80% of time on one transition. Might be appropriate if it's urgent. Or might indicate avoidance of other important work.</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Weekend warrior:</strong> Activity clusters on weekends, nothing during the week. Consider: Do you need weekday micro-habits? Or is this sustainable?</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Filtering and Customization</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>By Guide:</strong> Filter analytics to show only specific guides for focused analysis</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>By Date Range:</strong> View last 7 days, 30 days, 3 months, or all time</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>By Activity Type:</strong> Isolate readings, tasks, journal entries, or daily notes</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Comparison View:</strong> Compare two time periods (this month vs. last month)</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Export Options:</strong> Download charts and data for sharing with coaches or therapists</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Tips for Using Analytics Effectively</h3>
          <div className="space-y-2">
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Don't obsess over numbers:</strong> Analytics inform, they don't judge. A down week doesn't mean failure—transitions have natural rhythms.
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Look for trends, not days:</strong> One slow day means nothing. A two-week trend means something. Focus on patterns over time.
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Context matters:</strong> Low completion during a crisis isn't failure. Analytics show what happened, but you determine what's "good."
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Celebrate data-backed wins:</strong> When analytics show progress, acknowledge it. Numbers can prove you're moving forward when it doesn't feel like it.
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Use for course correction:</strong> If analytics show a guide has been ignored for weeks, decide: Is it still relevant? Should you archive it? Or recommit?
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Common Questions</h3>
          <div className="space-y-3">
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">What's a "good" completion rate?</p>
              <p className="text-xs text-muted-foreground">
                There's no universal answer. Transitions are messy. Some people complete 1 reading per week and that's huge progress. Others do 5. What matters is: Are you moving forward at a pace that feels sustainable?
              </p>
            </div>
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Can I reset analytics or start over?</p>
              <p className="text-xs text-muted-foreground">
                Your analytics history is permanent (it's your record), but you can filter views to show "from today forward" to effectively start fresh for tracking purposes.
              </p>
            </div>
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">How often should I check analytics?</p>
              <p className="text-xs text-muted-foreground">
                Weekly check-ins work for most people. Monthly for bigger-picture trends. Daily checking often creates unnecessary pressure—you need time for patterns to emerge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
