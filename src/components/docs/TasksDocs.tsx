export function TasksDocs() {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      <h2 className="text-lg font-semibold mb-4">Tasks</h2>
      <div className="space-y-6">
        <p className="text-sm text-muted-foreground">
          Tasks transform insights from your readings into concrete action. While reflections help you think through transitions, tasks help you act on them. The Tasks feature breaks down overwhelming life changes into manageable, trackable action items.
        </p>

        <div>
          <h3 className="text-base font-medium mb-2">Why Tasks Matter for Transitions</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Life transitions require both internal work (reflection, planning) and external action (applications, conversations, changes). Tasks bridge this gap by turning "I should..." into "I will..." with specific deadlines and accountability.
          </p>
          <div className="bg-muted/30 border border-border rounded-lg p-4 space-y-2">
            <p className="text-xs text-muted-foreground"><strong>Example: Career transition tasks:</strong></p>
            <p className="text-xs text-muted-foreground">→ "Update resume with new skills"</p>
            <p className="text-xs text-muted-foreground">→ "Reach out to 3 people in target industry"</p>
            <p className="text-xs text-muted-foreground">→ "Complete online portfolio"</p>
            <p className="text-xs text-muted-foreground">→ "Practice interview answers for behavioral questions"</p>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Creating Tasks</h3>
          <div className="space-y-3">
            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Quick Add</p>
              <p className="text-xs text-muted-foreground mb-2">
                Click "New Task" or press the + button to quickly add a task. Enter a title and hit enter—you can add details later. This keeps task capture fast so you don't lose ideas.
              </p>
              <p className="text-xs text-muted-foreground italic">
                Tip: Capture tasks immediately when they occur to you during readings. You can organize them later.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">From Readings</p>
              <p className="text-xs text-muted-foreground">
                While working through a reading, you can create tasks directly from the content. These automatically link to the source reading, creating context for why the task matters.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">From Calendar Events</p>
              <p className="text-xs text-muted-foreground">
                Create preparation tasks from calendar events. For example, an interview event might generate tasks for research, practice questions, and outfit selection.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Task Details</h3>
          <p className="text-sm text-muted-foreground mb-3">Each task can include:</p>
          <div className="bg-muted/30 border border-border rounded-lg p-4 space-y-2">
            <p className="text-xs text-muted-foreground"><strong>Title:</strong> Clear, action-oriented description (start with a verb)</p>
            <p className="text-xs text-muted-foreground"><strong>Due Date:</strong> When it needs to be done (optional but recommended)</p>
            <p className="text-xs text-muted-foreground"><strong>Priority:</strong> High, medium, or low to help with daily planning</p>
            <p className="text-xs text-muted-foreground"><strong>Guide Association:</strong> Link to one or more guides for context and filtering</p>
            <p className="text-xs text-muted-foreground"><strong>Description:</strong> Additional notes, context, or resources needed</p>
            <p className="text-xs text-muted-foreground"><strong>Subtasks:</strong> Break complex tasks into smaller steps</p>
            <p className="text-xs text-muted-foreground"><strong>Tags:</strong> Custom labels for flexible organization beyond guides</p>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Organizing Tasks</h3>
          <div className="space-y-3">
            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">By Guide</p>
              <p className="text-xs text-muted-foreground">
                Filter tasks by guide using the sidebar. This shows all action items related to a specific life transition, making it easy to focus your energy on one area at a time.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">By Due Date</p>
              <p className="text-xs text-muted-foreground mb-2">
                View tasks by when they're due: today, this week, this month, or overdue. This time-based view helps you prioritize what needs attention now.
              </p>
              <p className="text-xs text-muted-foreground italic">
                Tip: Check the "Today" view each morning to set your daily priorities.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">By Priority</p>
              <p className="text-xs text-muted-foreground">
                Sort or filter by priority level. When you have limited time, focus on high-priority tasks that move you forward on critical transitions.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">By Status</p>
              <p className="text-xs text-muted-foreground">
                View incomplete tasks (default), completed tasks, or all tasks. Reviewing completed tasks helps you see progress and build momentum.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Task Workflows</h3>
          <div className="space-y-3">
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Daily Workflow</p>
              <p className="text-xs text-muted-foreground mb-2">
                Start each day by reviewing tasks due today and this week. Select 3-5 tasks to focus on today. As you complete them, check them off to build momentum.
              </p>
              <p className="text-xs text-muted-foreground italic">
                Pro tip: Limit daily focus to prevent overwhelm. Undone tasks automatically carry forward.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Weekly Review</p>
              <p className="text-xs text-muted-foreground">
                Every week, review incomplete tasks, reschedule or delete outdated ones, and create new tasks based on your current priorities and upcoming calendar events.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Capture & Organize</p>
              <p className="text-xs text-muted-foreground">
                Quickly capture tasks as they occur to you (during readings, conversations, reflections). Set aside dedicated time weekly to add details, due dates, and priorities.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Breaking Down Big Tasks</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Life transitions often involve complex, multi-step actions. Use subtasks to break these down:
          </p>
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
            <p className="text-sm font-medium mb-2">Example: "Find a new job"</p>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">→ Subtask: Identify 10 target companies</p>
              <p className="text-xs text-muted-foreground">→ Subtask: Update resume</p>
              <p className="text-xs text-muted-foreground">→ Subtask: Write cover letter draft</p>
              <p className="text-xs text-muted-foreground">→ Subtask: Set up job search tracker</p>
              <p className="text-xs text-muted-foreground">→ Subtask: Apply to 5 positions this week</p>
            </div>
            <p className="text-xs text-muted-foreground mt-3 italic">
              Each subtask becomes manageable and builds toward the larger goal.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Task Templates</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Some transitions have common action patterns. Save time by using or creating task templates:
          </p>
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Job Application Template:</strong> Research company, customize resume, write cover letter, submit, follow up</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Networking Template:</strong> Find contact, research background, send connection request, schedule call, send thank you</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Learning Template:</strong> Find resource, schedule study time, complete course, practice skills, share learning</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Integration with Other Features</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Readings:</strong> Create tasks from insights in readings to convert learning into action</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Calendar:</strong> Tasks with due dates appear on your calendar for time-blocking</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Daily Notes:</strong> Reference tasks in daily planning to structure your day</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Journal:</strong> Reflect on completed tasks and what you learned from them</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Analytics:</strong> See completion patterns and productivity trends over time</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Tips for Effective Task Management</h3>
          <div className="space-y-2">
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Action verbs:</strong> Start tasks with verbs (Call, Write, Research, Schedule) to make them feel actionable.
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>2-minute rule:</strong> If a task takes less than 2 minutes, do it immediately rather than adding it to your list.
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Weekly purge:</strong> Review and delete tasks that are no longer relevant. Life changes, and your task list should too.
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Batch similar tasks:</strong> Group related tasks (all emails, all research, all calls) for efficiency.
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Celebrate completion:</strong> Acknowledge finished tasks. Checking them off releases dopamine and builds momentum.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Common Questions</h3>
          <div className="space-y-3">
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">What happens to tasks when I complete a guide?</p>
              <p className="text-xs text-muted-foreground">
                Tasks remain active even after completing their associated guide. Complete or delete them individually, or archive the entire guide to move associated tasks to Archive.
              </p>
            </div>
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Can I set recurring tasks?</p>
              <p className="text-xs text-muted-foreground">
                Yes. Set tasks to repeat daily, weekly, monthly, or on a custom schedule. Perfect for regular check-ins, reviews, or maintenance activities.
              </p>
            </div>
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">How many tasks should I have?</p>
              <p className="text-xs text-muted-foreground">
                There's no limit, but focus on 3-5 tasks per day. Having 100+ active tasks often means you need to delete outdated ones or break projects into phases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
