export function CalendarDocs() {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      <h2 className="text-lg font-semibold mb-4">Calendar</h2>
      <div className="space-y-6">
        <p className="text-sm text-muted-foreground">
          The Calendar helps you schedule and track time-based aspects of your life transitions. Whether it's job interviews, therapy appointments, important deadlines, or milestone celebrations, the Calendar keeps everything organized and connected to your guides.
        </p>

        <div>
          <h3 className="text-base font-medium mb-2">Why Calendar Matters for Transitions</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Major life transitions aren't just about reflection—they involve real-world actions, appointments, and deadlines. The Calendar connects your inner work (readings and reflections) with outer events (meetings, deadlines, milestones).
          </p>
          <div className="bg-muted/30 border border-border rounded-lg p-4 space-y-2">
            <p className="text-sm"><strong>Example: Career transition calendar might include:</strong></p>
            <p className="text-sm">→ Networking coffee chats</p>
            <p className="text-sm">→ Application deadlines</p>
            <p className="text-sm">→ Interview dates</p>
            <p className="text-sm">→ Follow-up reminders</p>
            <p className="text-sm">→ Skill-building course dates</p>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Creating Events</h3>
          <div className="space-y-3">
            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Quick Add</p>
              <p className="text-xs text-muted-foreground mb-2">
                Click any date or time slot on the calendar to create an event. A quick-add modal appears where you can enter basic details and save in seconds.
              </p>
              <p className="text-xs text-muted-foreground italic">
                Tip: Use natural language for time entry like "tomorrow at 3pm" or "next Tuesday 10am"
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Detailed Event Creation</p>
              <p className="text-xs text-muted-foreground">
                Click "New Event" or the + button to open the full event form with all available options:
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-4 space-y-3">
              <div>
                <p className="text-sm font-medium mb-1">Event Details</p>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">• <strong>Title:</strong> Brief description of the event</p>
                  <p className="text-xs text-muted-foreground">• <strong>Date & Time:</strong> When it happens (all-day or specific time)</p>
                  <p className="text-xs text-muted-foreground">• <strong>Duration:</strong> How long it will take</p>
                  <p className="text-xs text-muted-foreground">• <strong>Location:</strong> Physical address or virtual meeting link</p>
                  <p className="text-xs text-muted-foreground">• <strong>Description:</strong> Additional notes, preparation needed, etc.</p>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium mb-1">Guide Association</p>
                <p className="text-xs text-muted-foreground mb-2">
                  Link the event to one or more guides. This helps you see all events related to a specific life transition and enables guide-based filtering.
                </p>
                <p className="text-xs text-muted-foreground italic">
                  Example: Link an interview to both "Career Transition" and "Interview Skills" guides
                </p>
              </div>

              <div>
                <p className="text-sm font-medium mb-1">Reminders</p>
                <p className="text-xs text-muted-foreground">
                  Set one or multiple reminders (15 minutes before, 1 hour before, 1 day before, etc.) to ensure you're prepared.
                </p>
              </div>

              <div>
                <p className="text-sm font-medium mb-1">Recurring Events</p>
                <p className="text-xs text-muted-foreground">
                  Create events that repeat daily, weekly, monthly, or on a custom schedule. Perfect for therapy sessions, regular check-ins, or weekly planning time.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Calendar Views</h3>
          <div className="space-y-3">
            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Month View</p>
              <p className="text-xs text-muted-foreground">
                See the big picture with a full month at a glance. Best for long-term planning and spotting busy weeks. Events appear as colored dots or bars on their respective dates.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Week View</p>
              <p className="text-xs text-muted-foreground">
                View a full week with time slots. This is ideal for scheduling within the current or next week and seeing how events fit into your daily schedule.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Day View</p>
              <p className="text-xs text-muted-foreground">
                Focus on a single day with hourly detail. Perfect for today's schedule or preparing for a busy day. Shows exact timing and gaps between events.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Agenda View</p>
              <p className="text-xs text-muted-foreground">
                List-based view showing upcoming events chronologically. Great for a quick overview of what's coming up without the visual calendar layout.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Filtering and Organization</h3>
          <p className="text-sm text-muted-foreground mb-3">
            The sidebar shows all your guides. Select guides to filter the calendar view:
          </p>
          <div className="bg-muted/30 border border-border rounded-lg p-4 space-y-2">
            <p className="text-sm"><strong>Single guide:</strong> See only events related to one transition (e.g., just "Career Change" events)</p>
            <p className="text-sm"><strong>Multiple guides:</strong> Select multiple to see how different transitions overlap</p>
            <p className="text-sm"><strong>All guides:</strong> Deselect filters to see your complete schedule</p>
            <p className="text-sm"><strong>Color coding:</strong> Each guide has a distinct color, making it easy to visually distinguish event types</p>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Event Types and Use Cases</h3>
          <div className="space-y-3">
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Appointments</p>
              <p className="text-xs text-muted-foreground">
                Therapy sessions, coaching calls, informational interviews, medical appointments. Include location/link and any prep notes in the description.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Deadlines</p>
              <p className="text-xs text-muted-foreground">
                Application due dates, project submissions, decision deadlines. Set reminders well in advance and use tasks to break down preparation steps.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Milestones</p>
              <p className="text-xs text-muted-foreground">
                Mark significant moments in your transition journey: 30-day checkpoints, completion of guides, first day at new job, anniversaries. These help you track progress and celebrate wins.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Blocked Time</p>
              <p className="text-xs text-muted-foreground">
                Reserve time for guide work, reflection, or self-care. Treat these as seriously as external appointments to ensure you make progress.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Social Events</p>
              <p className="text-xs text-muted-foreground">
                Networking events, support group meetings, celebrations with friends. Staying socially connected is crucial during transitions.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Integration with Other Features</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Tasks:</strong> Create tasks directly from calendar events (e.g., "prepare for interview" task for an interview event)</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Journal:</strong> Reference calendar events in journal entries to track how events impacted your day</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Timeline:</strong> Calendar events automatically appear on your Timeline, creating a visual history</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Overview:</strong> Upcoming calendar events appear in your Overview dashboard</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Tips for Effective Calendar Use</h3>
          <div className="space-y-2">
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Weekly planning:</strong> Review your calendar every Sunday/Monday to prepare for the week ahead and identify busy days.
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Buffer time:</strong> Leave gaps between appointments for preparation, travel, and mental transitions.
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Post-event notes:</strong> After important events, add notes to the event description about outcomes, next steps, or how it went.
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Color strategy:</strong> Use guide colors consistently so you can quickly gauge if your calendar reflects your priorities.
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Set realistic time blocks:</strong> Include travel time, prep time, and recovery time in event durations rather than just the event itself.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Common Questions</h3>
          <div className="space-y-3">
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Can I sync the Calendar with Google Calendar or other calendar apps?</p>
              <p className="text-xs text-muted-foreground">
                Calendar sync features are in development. For now, Templata Calendar works independently to keep transition-related events separate and focused.
              </p>
            </div>
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">What happens to calendar events when I archive a guide?</p>
              <p className="text-xs text-muted-foreground">
                Events remain on your calendar even after archiving their associated guide. They'll no longer be color-coded by that guide, but the historical record stays intact.
              </p>
            </div>
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Can I invite others to calendar events?</p>
              <p className="text-xs text-muted-foreground">
                Currently, Templata Calendar is personal-only. You can include meeting links and attendee names in the event description for reference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
