export function SupportDocs() {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      <h2 className="text-lg font-semibold mb-4">Support</h2>
      <div className="space-y-6">
        <p className="text-sm text-muted-foreground">
          We're here to help you navigate Templata and your life transitions. Whether you're stuck on a technical issue, have questions about features, or need guidance on using the platform effectively, we've got multiple ways to get support.
        </p>

        <div>
          <h3 className="text-base font-medium mb-3">Getting Help</h3>
          <div className="space-y-3">
            <div className="bg-muted/30 border border-border rounded-lg p-4">
              <p className="text-sm font-medium mb-2">Email Support</p>
              <p className="text-xs text-muted-foreground mb-2">
                For technical issues, account questions, or feature requests, email us at{' '}
                <a href="mailto:support@templata.com" className="text-primary hover:underline font-medium">
                  support@templata.com
                </a>
              </p>
              <p className="text-xs text-muted-foreground mb-2">
                <strong>Response time:</strong> We typically respond within 24 hours on weekdays, 48 hours on weekends. For urgent issues affecting your access, mark the subject line "URGENT."
              </p>
              <p className="text-xs text-muted-foreground italic">
                Pro tip: Include screenshots, your browser/device info, and what you were trying to do when the issue occurred. This helps us resolve things faster.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-4">
              <p className="text-sm font-medium mb-2">Help Center & Documentation</p>
              <p className="text-xs text-muted-foreground mb-2">
                You're already here! Browse the Docs sections for detailed guides on every feature. Use the search function to find specific topics quickly.
              </p>
              <p className="text-xs text-muted-foreground">
                Start with Getting Started if you're new, or check the FAQ for common questions and solutions.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-4">
              <p className="text-sm font-medium mb-2">Community Support</p>
              <p className="text-xs text-muted-foreground mb-2">
                Connect with other Templata users in the Community section. Ask questions, share tips, and learn how others use the platform for their transitions.
              </p>
              <p className="text-xs text-muted-foreground italic">
                Community members often respond faster than official support for "how do I..." questions, and they bring real-world experience.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-4">
              <p className="text-sm font-medium mb-2">Live Chat (Premium)</p>
              <p className="text-xs text-muted-foreground">
                Premium subscribers get access to live chat support during business hours (9am-6pm PT, Monday-Friday). Click the chat icon in the bottom right corner of the app.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-3">Common Support Topics</h3>
          <div className="space-y-2">
            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Account Issues</p>
              <p className="text-xs text-muted-foreground">
                Can't log in? Forgot password? Billing questions? Email support with your account email address and we'll help you resolve it.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Technical Problems</p>
              <p className="text-xs text-muted-foreground">
                App not loading? Features not working? Data not saving? First try refreshing, clearing cache, or using a different browser. If that doesn't help, contact support with details.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Feature Guidance</p>
              <p className="text-xs text-muted-foreground">
                Not sure how to use a feature? Check the relevant Docs section first. Still confused? Email support or ask in Community—we're happy to walk you through it.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Data & Privacy</p>
              <p className="text-xs text-muted-foreground">
                Questions about how your data is stored, who can see it, or how to export/delete it? See our Privacy Policy or email support for specific concerns.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Billing & Subscriptions</p>
              <p className="text-xs text-muted-foreground">
                Need to upgrade, downgrade, cancel, or change payment methods? Go to Settings → Billing or email support for help with subscription management.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-3">Self-Service Resources</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Many issues can be resolved quickly using these resources:
          </p>
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground">
                <strong>Getting Started Guide:</strong> New to Templata? Start here for a complete walkthrough
              </span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground">
                <strong>FAQ:</strong> Covers the most common questions about guides, features, privacy, and billing
              </span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground">
                <strong>Feature Documentation:</strong> In-depth guides for Notes, Library, Calendar, Tasks, Timeline, Daily, Journal, Graph, Analytics, and Archive
              </span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground">
                <strong>Video Tutorials:</strong> Coming soon - visual walkthroughs of key features
              </span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground">
                <strong>Community Forums:</strong> Search past discussions to see if your question has been answered
              </span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-3">Feature Requests & Feedback</h3>
          <div className="space-y-3">
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
              <p className="text-sm font-medium mb-2">We want to hear from you!</p>
              <p className="text-xs text-muted-foreground mb-3">
                Templata is shaped by user feedback. If you have ideas for new features, improvements to existing ones, or suggestions for new guides, we want to know.
              </p>
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">
                  <strong>Submit via email:</strong> Send detailed suggestions to{' '}
                  <a href="mailto:suggestions@templata.com" className="text-primary hover:underline font-medium">
                    suggestions@templata.com
                  </a>
                </p>
                <p className="text-xs text-muted-foreground">
                  <strong>Submit via app:</strong> Go to Settings → Feedback to submit ideas directly through the platform
                </p>
                <p className="text-xs text-muted-foreground">
                  <strong>Vote on features:</strong> Check the Community Roadmap section to see what we're working on and vote on priorities
                </p>
              </div>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-4">
              <p className="text-sm font-medium mb-2">What happens to feedback?</p>
              <p className="text-xs text-muted-foreground mb-2">
                Every piece of feedback is reviewed by our team. We track feature requests, look for patterns across user needs, and prioritize based on impact and demand.
              </p>
              <p className="text-xs text-muted-foreground italic">
                We can't implement every suggestion, but user feedback directly influences our roadmap. Many current features started as user requests.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-3">Reporting Bugs</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Found a bug? Help us fix it by providing clear information:
          </p>
          <div className="bg-muted/30 border border-border rounded-lg p-4">
            <p className="text-sm font-medium mb-2">Include in your bug report:</p>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">1. What you were trying to do</p>
              <p className="text-xs text-muted-foreground">2. What you expected to happen</p>
              <p className="text-xs text-muted-foreground">3. What actually happened</p>
              <p className="text-xs text-muted-foreground">4. Steps to reproduce the issue</p>
              <p className="text-xs text-muted-foreground">5. Screenshots or screen recordings if possible</p>
              <p className="text-xs text-muted-foreground">6. Browser/device info (Chrome on Mac, Safari on iPhone, etc.)</p>
            </div>
            <p className="text-xs text-muted-foreground mt-3 italic">
              Send bug reports to support@templata.com with "BUG REPORT" in the subject line. We prioritize bugs based on severity and how many users are affected.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-3">Crisis Support</h3>
          <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-lg p-4">
            <p className="text-sm font-medium mb-2 text-red-900 dark:text-red-200">Important: Templata is not a crisis service</p>
            <p className="text-xs text-muted-foreground mb-3">
              If you're in crisis or experiencing thoughts of self-harm, please contact a crisis hotline immediately. We're a self-help platform, not mental health emergency services.
            </p>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">
                <strong>US Crisis Line:</strong> Call or text 988 (Suicide & Crisis Lifeline)
              </p>
              <p className="text-xs text-muted-foreground">
                <strong>US Crisis Chat:</strong>{' '}
                <a href="https://988lifeline.org/chat" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  988lifeline.org/chat
                </a>
              </p>
              <p className="text-xs text-muted-foreground">
                <strong>International:</strong>{' '}
                <a href="https://findahelpline.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  findahelpline.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-3">Response Time Expectations</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground">
                <strong>Email support:</strong> 24 hours on weekdays, 48 hours on weekends
              </span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground">
                <strong>Live chat (Premium):</strong> Immediate during business hours, next business day otherwise
              </span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground">
                <strong>Bug fixes:</strong> Critical bugs within 24-48 hours, minor bugs in upcoming releases
              </span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground">
                <strong>Feature requests:</strong> Acknowledged within a week, implementation timeline varies
              </span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground">
                <strong>Community questions:</strong> Often answered within hours by other users
              </span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-3">Tips for Getting Better Support</h3>
          <div className="space-y-2">
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Be specific:</strong> "Calendar events aren't syncing to Google Calendar" is more helpful than "calendar isn't working."
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Include screenshots:</strong> Visual evidence helps us understand the issue faster than descriptions alone.
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Check docs first:</strong> Many questions are answered in documentation—searching there can get you answers immediately.
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Try troubleshooting:</strong> Refresh, clear cache, try different browser. Mention what you've already tried in your support request.
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Use the right channel:</strong> Technical issues → email support. "How do I..." questions → Community. Urgent access issues → mark as urgent.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-6">
          <p className="text-sm font-medium mb-2">We're here to help you succeed</p>
          <p className="text-xs text-muted-foreground mb-2">
            Life transitions are hard enough without technology getting in the way. If Templata isn't working for you—whether that's a technical issue or you're not sure how to use a feature—please reach out. We want this platform to genuinely help you navigate your transitions.
          </p>
          <p className="text-xs text-muted-foreground">
            <strong>Contact us:</strong>{' '}
            <a href="mailto:support@templata.com" className="text-primary hover:underline font-medium">
              support@templata.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
