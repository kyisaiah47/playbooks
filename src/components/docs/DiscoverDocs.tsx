export function DiscoverDocs() {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      <h2 className="text-lg font-semibold mb-4">Discover</h2>
      <div className="space-y-6">
        <p className="text-sm text-muted-foreground">
          Discover is your library of curated guides designed by experts to help you navigate life's major transitions.
          Browse by category, search for specific topics, and preview content before adding it to your workspace.
        </p>

        <div>
          <h3 className="text-base font-medium mb-2">Finding the Right Guide</h3>
          <p className="text-sm text-muted-foreground mb-3">
            We organize guides into categories based on major life domains. Each guide is carefully curated with readings,
            reflection prompts, and actionable frameworks to support you through specific transitions.
          </p>
          <div className="bg-muted/30 border border-border rounded-lg p-4 space-y-2">
            <p className="text-xs font-medium mb-2">Available Categories:</p>
            <div className="grid grid-cols-2 gap-2">
              <p className="text-xs text-muted-foreground">→ Career & Work</p>
              <p className="text-xs text-muted-foreground">→ Relationships & Family</p>
              <p className="text-xs text-muted-foreground">→ Health & Wellness</p>
              <p className="text-xs text-muted-foreground">→ Personal Growth</p>
              <p className="text-xs text-muted-foreground">→ Finance & Money</p>
              <p className="text-xs text-muted-foreground">→ Life Events</p>
              <p className="text-xs text-muted-foreground">→ Education & Learning</p>
              <p className="text-xs text-muted-foreground">→ Creativity & Purpose</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Browsing Guides</h3>
          <div className="space-y-3">
            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">By Category</p>
              <p className="text-xs text-muted-foreground mb-2">
                Click on any category in the sidebar to see all guides in that domain. This is the best way to explore
                what's available if you're not sure exactly what you're looking for.
              </p>
              <p className="text-xs text-muted-foreground italic">
                Tip: Categories often overlap—a guide about "Work-Life Balance" might appear in both Career and Health categories.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">By Search</p>
              <p className="text-xs text-muted-foreground">
                Use the search bar to find guides on specific topics. Search works across guide titles, descriptions, and content,
                so you can find what you need even if you don't know the exact guide name.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm font-medium mb-1">Featured & Popular</p>
              <p className="text-xs text-muted-foreground">
                The main Discover view highlights featured guides curated by our team and popular guides that other users
                have found helpful. These are great starting points if you're new to Templata.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Previewing a Guide</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Before committing to a guide, you can preview its structure and content:
          </p>
          <div className="bg-muted/30 border border-border rounded-lg p-4 space-y-2">
            <p className="text-xs text-muted-foreground"><strong>Guide Overview:</strong> See the description, estimated time commitment, and what you'll learn</p>
            <p className="text-xs text-muted-foreground"><strong>Table of Contents:</strong> Browse all readings included in the guide</p>
            <p className="text-xs text-muted-foreground"><strong>Sample Reading:</strong> Many guides include a free preview reading so you can experience the style and depth</p>
            <p className="text-xs text-muted-foreground"><strong>User Reviews:</strong> Read what others have said about their experience with the guide</p>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Adding Guides to Your Workspace</h3>
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">When you find a guide that resonates, click "Add to Workspace" to make it available in your Notes view.</p>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
              <p className="text-sm font-medium mb-2">What happens when you add a guide:</p>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">1. The guide appears in your Notes sidebar</p>
                <p className="text-xs text-muted-foreground">2. All readings become accessible to work through</p>
                <p className="text-xs text-muted-foreground">3. Your progress starts tracking automatically</p>
                <p className="text-xs text-muted-foreground">4. The guide shows up in your Overview dashboard</p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground italic mt-3">
              Note: Adding a guide doesn't start a timer or create pressure. Work through it at whatever pace feels right for you.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Guide Details</h3>
          <p className="text-sm text-muted-foreground mb-3">Each guide listing shows important information to help you decide if it's right for you:</p>
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Time Estimate:</strong> Approximate time to complete all readings (actual time varies based on your reflection depth)</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Reading Count:</strong> Number of readings included in the guide</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Difficulty Level:</strong> Beginner, Intermediate, or Advanced (based on topic complexity)</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground"><strong>Prerequisites:</strong> Whether you should complete other guides first</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Managing Your Guide Collection</h3>
          <div className="space-y-2">
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Start small:</strong> We recommend adding 1-3 guides initially. You can always add more as you progress.
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Remove anytime:</strong> If a guide isn't resonating, you can remove it from your workspace without losing any progress you've made.
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-3">
              <p className="text-xs text-muted-foreground">
                <strong>Bookmark for later:</strong> Save guides you're interested in but not ready to start yet using the bookmark feature.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Finding Related Guides</h3>
          <p className="text-sm text-muted-foreground mb-2">
            As you work through guides, Templata suggests related content based on your interests and progress. Look for
            "Recommended for You" sections that appear after you've added your first guide.
          </p>
          <p className="text-xs text-muted-foreground italic">
            Tip: The more you use Templata, the better our recommendations become at suggesting guides aligned with your journey.
          </p>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Common Questions</h3>
          <div className="space-y-3">
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">How many guides should I add?</p>
              <p className="text-xs text-muted-foreground">
                Start with 1-2 guides focused on your most pressing transition. Adding too many at once can feel overwhelming
                and reduce your completion rate. You can always add more guides later.
              </p>
            </div>
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Are new guides added regularly?</p>
              <p className="text-xs text-muted-foreground">
                Yes. Our team continuously creates new guides based on user feedback and emerging life transition topics.
                Check the "New Guides" section in Discover to see recent additions.
              </p>
            </div>
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Can I suggest new guide topics?</p>
              <p className="text-xs text-muted-foreground">
                Absolutely! Use the "Suggest a Guide" button in the Discover view or share ideas in the Community section.
                We prioritize guide development based on user needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
