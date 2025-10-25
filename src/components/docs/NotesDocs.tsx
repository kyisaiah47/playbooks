export function NotesDocs() {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      <h2 className="text-lg font-semibold mb-4">Notes</h2>
      <div className="space-y-6">
        <p className="text-sm text-muted-foreground">
          The Notes view is where you actively work through your guides—reading expert content, completing reflection prompts,
          and tracking your progress. This is the heart of your Templata experience, where structured guidance meets personal insight.
        </p>

        <div>
          <h3 className="text-base font-medium mb-2">How Notes Work</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Each guide contains multiple <strong>readings</strong>—focused pieces of content designed to help you think through
            different aspects of your life transition. Readings include educational content, reflection questions, and sometimes
            action items to help you apply what you're learning.
          </p>
          <div className="bg-muted/30 border border-border rounded-lg p-4">
            <p className="text-xs text-muted-foreground mb-2"><strong>Example: A "Career Transition" guide might include readings like:</strong></p>
            <p className="text-xs text-muted-foreground">→ "Identifying Your Core Values"</p>
            <p className="text-xs text-muted-foreground">→ "Understanding Your Transferable Skills"</p>
            <p className="text-xs text-muted-foreground">→ "Crafting Your Career Narrative"</p>
            <p className="text-xs text-muted-foreground">→ "Building Your Network Strategically"</p>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Opening a Guide</h3>
          <div className="space-y-3">
            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Via Sidebar</p>
              <p className="text-xs text-muted-foreground">
                Click on any guide in the left sidebar to open it. Your active guides are listed with progress indicators
                showing what percentage you've completed.
              </p>
            </div>
            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Via Recent Activity</p>
              <p className="text-xs text-muted-foreground">
                Return to guides you were recently working on from the Overview dashboard. Your most recently accessed
                guides appear at the top of the sidebar.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Working Through Readings</h3>
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">When you open a guide, you'll see all its readings listed. Here's how to progress through them:</p>

            <div className="bg-muted/30 border border-border rounded-lg p-4 space-y-3">
              <div>
                <p className="text-sm font-medium mb-1">1. Select a Reading</p>
                <p className="text-xs text-muted-foreground">
                  Click on any reading to open it. Readings are ordered intentionally, but you can work through them in any
                  sequence that makes sense for you.
                </p>
              </div>

              <div>
                <p className="text-sm font-medium mb-1">2. Read the Content</p>
                <p className="text-xs text-muted-foreground">
                  Take your time with each reading. The content is designed to be thought-provoking, not rushed through.
                  You can revisit any reading as many times as you need.
                </p>
              </div>

              <div>
                <p className="text-sm font-medium mb-1">3. Answer Reflection Prompts</p>
                <p className="text-xs text-muted-foreground mb-2">
                  Most readings include reflection questions to help you apply the content to your specific situation.
                  Your responses are automatically saved as you type, so you never lose your work.
                </p>
                <p className="text-xs text-muted-foreground italic">
                  Tip: There are no "right" answers to reflection prompts. Be honest and thoughtful—these are for you, not for judgment.
                </p>
              </div>

              <div>
                <p className="text-sm font-medium mb-1">4. Mark as Complete</p>
                <p className="text-xs text-muted-foreground">
                  When you've finished a reading and completed its prompts, mark it as complete using the checkbox or
                  "Mark Complete" button. This helps you track your progress and builds momentum.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Progress Tracking</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Templata automatically tracks your progress through each guide. You can see:
          </p>
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground">Percentage completed for each guide (shown in sidebar)</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground">Which readings you've completed (checkmarks in the reading list)</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground">Which reflection prompts you've answered</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground">Overall workspace progress in the Overview dashboard</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Editing Past Responses</h3>
          <p className="text-sm text-muted-foreground mb-2">
            You can always return to a reading and edit your reflection responses. Your thoughts and circumstances evolve—it's
            completely normal to update your answers as you gain new insights.
          </p>
          <p className="text-xs text-muted-foreground italic">
            Tip: Consider dating your edits or adding notes like "Updated after 3 months" to track how your thinking has changed.
          </p>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Organizing Your Guides</h3>
          <p className="text-sm text-muted-foreground mb-3">The sidebar shows all your active guides. You can:</p>
          <div className="bg-muted/30 border border-border rounded-lg p-4 space-y-2">
            <p className="text-xs text-muted-foreground"><strong>Filter by category</strong> - Focus on guides in a specific life domain</p>
            <p className="text-xs text-muted-foreground"><strong>Sort by progress</strong> - See which guides you're actively working on</p>
            <p className="text-xs text-muted-foreground"><strong>Archive completed guides</strong> - Move finished guides to Archive to declutter your sidebar</p>
            <p className="text-xs text-muted-foreground"><strong>Star priority guides</strong> - Pin your most important guides to the top</p>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Tips for Getting the Most from Notes</h3>
          <div className="space-y-2">
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Set a regular time:</strong> Work through readings at a consistent time (morning coffee, lunch break, before bed)
                to build a sustainable practice.
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>One reading at a time:</strong> Resist the urge to rush. Spend quality time with each reading rather than
                trying to complete multiple in one sitting.
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Create action items:</strong> If a reading sparks an idea for something to do, create a task right away
                using the Tasks feature before you forget.
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Revisit readings:</strong> Life transitions aren't linear. Returning to earlier readings with fresh eyes
                often reveals new insights you missed the first time.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Common Questions</h3>
          <div className="space-y-3">
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Do I have to complete guides in order?</p>
              <p className="text-xs text-muted-foreground">
                No. While readings within a guide are ordered intentionally, you can work through them in whatever sequence
                makes sense for you. Some people prefer to complete guides linearly; others jump around based on what feels relevant.
              </p>
            </div>
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">What if I can't answer a reflection prompt?</p>
              <p className="text-xs text-muted-foreground">
                That's okay. Skip it and come back later. Sometimes we need time and experience before we're ready to answer
                certain questions. You can mark a reading complete even if you haven't answered every prompt.
              </p>
            </div>
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Can I work on multiple guides simultaneously?</p>
              <p className="text-xs text-muted-foreground">
                Absolutely. Many life transitions overlap—career changes affect relationships, health impacts work performance, etc.
                Working on related guides in parallel can help you see connections across different areas of your life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
