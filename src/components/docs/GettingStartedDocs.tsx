export function GettingStartedDocs() {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      <h2 className="text-lg font-semibold mb-4">Getting Started with Templata</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-base font-medium mb-2">Welcome to Templata</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Templata is designed to help you navigate major life transitions with clarity and confidence. Whether you're changing careers,
            navigating relationships, improving your health, or managing any significant life change, Templata provides structured guidance,
            reflection tools, and actionable frameworks to support your journey.
          </p>
          <p className="text-sm text-muted-foreground">
            Think of Templata as your personal guide through uncertainty—offering expert-curated content, thoughtful prompts, and
            organizational tools to help you make informed decisions during important life transitions.
          </p>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">How Templata Works</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Templata organizes life transition support around <strong>Guides</strong>—curated collections of readings, reflections,
            and action items focused on specific topics like "Changing Careers," "Building Better Relationships," or "Managing Stress."
          </p>
          <div className="bg-muted/30 border border-border rounded-lg p-4 space-y-2">
            <p className="text-sm"><strong>Discover:</strong> Browse and find guides relevant to your current situation</p>
            <p className="text-sm"><strong>Work Through:</strong> Add guides to your workspace and progress through readings at your pace</p>
            <p className="text-sm"><strong>Reflect:</strong> Answer questions and capture insights as you learn</p>
            <p className="text-sm"><strong>Act:</strong> Create tasks, schedule events, and track your progress</p>
            <p className="text-sm"><strong>Connect:</strong> Share experiences and learn from others in the community</p>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Quick Start Guide</h3>
          <div className="space-y-3">
            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">1. Create Your Workspace</p>
              <p className="text-xs text-muted-foreground">
                Click the workspace switcher in the top-left corner to create a new workspace. You can organize different areas of your
                life in separate workspaces (e.g., "Career Development," "Personal Growth," "Relationships").
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">2. Explore Available Guides</p>
              <p className="text-xs text-muted-foreground mb-2">
                Navigate to the Discover view by clicking the compass icon in the sidebar. Browse guides by category or search for
                specific topics. Each guide includes a preview so you can see what it covers before adding it.
              </p>
              <p className="text-xs text-muted-foreground italic">
                Tip: Start with 1-2 guides that feel most relevant to your current situation. You can always add more later.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">3. Add Guides to Your Workspace</p>
              <p className="text-xs text-muted-foreground">
                Click "Add to Workspace" on any guide that interests you. Your guides will appear in the sidebar of most views,
                making them easy to access and work through.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">4. Start Working Through Content</p>
              <p className="text-xs text-muted-foreground mb-2">
                Click the Notes icon in the sidebar to access your guides. Select a guide from the sidebar to view its readings.
                Work through each reading, complete reflection prompts, and mark items as complete as you progress.
              </p>
              <p className="text-xs text-muted-foreground italic">
                Tip: There's no rush—work at your own pace and revisit content as often as needed.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">5. Stay Organized</p>
              <p className="text-xs text-muted-foreground">
                Use Tasks to create action items, Calendar to schedule important dates, and Journal to capture daily reflections.
                All these tools work together to support your transition journey.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Understanding Workspaces</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Workspaces are your personal containers for organizing different aspects of your life. Each workspace has its own set of guides,
            notes, tasks, calendar events, and journal entries—completely separate from your other workspaces.
          </p>
          <div className="bg-muted/30 border border-border rounded-lg p-4 space-y-2">
            <p className="text-xs text-muted-foreground"><strong>Example workspace structure:</strong></p>
            <p className="text-xs text-muted-foreground">→ "Career Transition" - guides about job searching, interviewing, skill development</p>
            <p className="text-xs text-muted-foreground">→ "Health & Wellness" - guides about fitness, nutrition, stress management</p>
            <p className="text-xs text-muted-foreground">→ "Relationships" - guides about communication, boundaries, family dynamics</p>
          </div>
          <p className="text-xs text-muted-foreground mt-3 italic">
            Tip: Switch between workspaces anytime using the workspace switcher in the top-left corner.
          </p>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Navigation Basics</h3>
          <p className="text-sm text-muted-foreground mb-3">Templata uses a sidebar navigation system to help you move between different views:</p>
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground min-w-20">Overview</span>
              <span className="text-muted-foreground">Dashboard showing your progress, upcoming tasks, and recent activity</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground min-w-20">Notes</span>
              <span className="text-muted-foreground">Work through guide readings and complete reflection prompts</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground min-w-20">Discover</span>
              <span className="text-muted-foreground">Browse and add new guides to your workspace</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground min-w-20">Library</span>
              <span className="text-muted-foreground">Access all readings across all your guides in one place</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground min-w-20">Calendar</span>
              <span className="text-muted-foreground">Schedule events, appointments, and milestones</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground min-w-20">Tasks</span>
              <span className="text-muted-foreground">Create and manage action items related to your guides</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground min-w-20">Journal</span>
              <span className="text-muted-foreground">Write daily reflections and track your emotional journey</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground min-w-20">Community</span>
              <span className="text-muted-foreground">Connect with others navigating similar transitions</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Your Privacy</h3>
          <p className="text-sm text-muted-foreground">
            All your personal reflections, notes, journal entries, and workspace data are completely private and secure.
            Only you can see your content unless you explicitly choose to share something in the Community view.
          </p>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Next Steps</h3>
          <p className="text-sm text-muted-foreground mb-2">Ready to get started? Here's what we recommend:</p>
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
            <p className="text-sm mb-2">1. Head to the <strong>Discover</strong> view and browse available guides</p>
            <p className="text-sm mb-2">2. Add 1-2 guides that resonate with your current situation</p>
            <p className="text-sm">3. Open the <strong>Notes</strong> view and start your first reading</p>
          </div>
        </div>
      </div>
    </div>
  );
}
