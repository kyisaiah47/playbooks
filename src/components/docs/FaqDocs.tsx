export function FaqDocs() {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      <h2 className="text-lg font-semibold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <div className="border border-border rounded-lg p-4">
          <h3 className="text-base font-medium mb-2">What is Templata?</h3>
          <p className="text-sm text-muted-foreground">
            Templata is a platform that provides structured guidance for major life transitions.
            We offer curated guides across various life domains to help you navigate important decisions and changes.
          </p>
        </div>

        <div className="border border-border rounded-lg p-4">
          <h3 className="text-base font-medium mb-2">How do guides work?</h3>
          <p className="text-sm text-muted-foreground">
            Guides are structured collections of readings, reflection prompts, and action items designed
            to help you think through specific life transitions. You work through them at your own pace.
          </p>
        </div>

        <div className="border border-border rounded-lg p-4">
          <h3 className="text-base font-medium mb-2">Can I work on multiple guides at once?</h3>
          <p className="text-sm text-muted-foreground">
            Yes! You can add as many guides as you'd like to your workspace and work through them
            simultaneously or sequentially.
          </p>
        </div>

        <div className="border border-border rounded-lg p-4">
          <h3 className="text-base font-medium mb-2">Is my data private?</h3>
          <p className="text-sm text-muted-foreground">
            Yes. All your reflections, notes, and personal information are completely private and
            only accessible to you.
          </p>
        </div>
      </div>
    </div>
  );
}
