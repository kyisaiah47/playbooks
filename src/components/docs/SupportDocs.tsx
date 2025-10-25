export function SupportDocs() {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      <h2 className="text-lg font-semibold mb-4">Support</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-base font-medium mb-2">Need Help?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            We're here to support you on your journey. If you have questions or need assistance:
          </p>
        </div>

        <div className="border border-border rounded-lg p-4">
          <h3 className="text-base font-medium mb-2">Email Support</h3>
          <p className="text-sm text-muted-foreground mb-2">
            Reach out to us at <a href="mailto:support@templata.com" className="text-primary hover:underline">support@templata.com</a>
          </p>
          <p className="text-xs text-muted-foreground">
            We typically respond within 24-48 hours
          </p>
        </div>

        <div className="border border-border rounded-lg p-4">
          <h3 className="text-base font-medium mb-2">Community</h3>
          <p className="text-sm text-muted-foreground mb-2">
            Join our community to connect with others navigating similar transitions
          </p>
          <p className="text-xs text-muted-foreground">
            Access the Community view from the sidebar
          </p>
        </div>

        <div className="border border-border rounded-lg p-4">
          <h3 className="text-base font-medium mb-2">Feedback</h3>
          <p className="text-sm text-muted-foreground">
            We're constantly improving Templata. Share your thoughts and suggestions through
            the Community view or by emailing us directly.
          </p>
        </div>
      </div>
    </div>
  );
}
