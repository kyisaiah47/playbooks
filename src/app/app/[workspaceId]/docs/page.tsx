'use client';

import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

type SectionType = 'getting-started' | 'notes' | 'discover' | 'library' | 'calendar' | 'tasks' | 'timeline' | 'daily' | 'journal' | 'graph' | 'analytics' | 'archive' | 'faq' | 'support';

export default function DocsPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const workspaceId = params.workspaceId as string;
  const [activeSection, setActiveSection] = useState<SectionType>('getting-started');

  // Sync active section from URL
  useEffect(() => {
    const sectionParam = searchParams.get('section') as SectionType;
    if (sectionParam) {
      setActiveSection(sectionParam);
    }
  }, [searchParams]);

  const renderContent = () => {
    switch (activeSection) {
      case 'getting-started':
        return (
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <h2 className="text-lg font-semibold mb-4">Getting Started</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-medium mb-2">Welcome to Templata</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Templata helps you navigate major life transitions with structured guidance and reflection tools.
                </p>
              </div>

              <div>
                <h3 className="text-base font-medium mb-2">Quick Start</h3>
                <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                  <li>Browse guides in the Discover view to find topics relevant to your life transitions</li>
                  <li>Add guides to your workspace to start working through them</li>
                  <li>Use the Notes view to track your progress and reflect on your journey</li>
                  <li>Explore Calendar, Tasks, and Journal features to stay organized</li>
                </ol>
              </div>

              <div>
                <h3 className="text-base font-medium mb-2">Your Workspace</h3>
                <p className="text-sm text-muted-foreground">
                  Your workspace is your personal space for working through guides. You can create multiple workspaces
                  to organize different areas of your life separately.
                </p>
              </div>
            </div>
          </div>
        );

      case 'notes':
        return (
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <h2 className="text-lg font-semibold mb-4">Notes Feature</h2>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Work through guides with structured readings and reflection prompts. Track your progress and insights as you navigate your life transitions.
              </p>

              <div>
                <h3 className="text-base font-medium mb-2">How to Use</h3>
                <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                  <li>Click on any guide from the sidebar to open it</li>
                  <li>Read through each section at your own pace</li>
                  <li>Complete reflection prompts to capture your thoughts</li>
                  <li>Mark readings as complete as you progress</li>
                  <li>Track your overall progress in the sidebar</li>
                </ol>
              </div>

              <div>
                <h3 className="text-base font-medium mb-2">Features</h3>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Progress tracking for each guide</li>
                  <li>Structured reflection prompts</li>
                  <li>Save and revisit your responses</li>
                  <li>Filter guides by category</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'discover':
        return (
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <h2 className="text-lg font-semibold mb-4">Discover Feature</h2>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Browse curated guides across categories like career, relationships, health, and personal growth. Find the perfect guide for your current life transition.
              </p>

              <div>
                <h3 className="text-base font-medium mb-2">How to Use</h3>
                <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                  <li>Select a category from the sidebar to filter guides</li>
                  <li>Browse available guides in that category</li>
                  <li>Click on a guide to preview its content</li>
                  <li>Click "Add to Workspace" to start working through it</li>
                </ol>
              </div>

              <div>
                <h3 className="text-base font-medium mb-2">Categories</h3>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Career & Work</li>
                  <li>Relationships</li>
                  <li>Health & Wellness</li>
                  <li>Personal Growth</li>
                  <li>Finance</li>
                  <li>Life Events</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'library':
        return (
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <h2 className="text-lg font-semibold mb-4">Library Feature</h2>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Access all your readings in one place. Easily search and navigate through guide content without switching between different guides.
              </p>

              <div>
                <h3 className="text-base font-medium mb-2">How to Use</h3>
                <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                  <li>Click on any reading from the sidebar to view it</li>
                  <li>Readings are organized by guide</li>
                  <li>Use the sidebar to filter by specific guides</li>
                  <li>Mark readings as complete directly from the library</li>
                </ol>
              </div>

              <div>
                <h3 className="text-base font-medium mb-2">Features</h3>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li>View all readings across all guides</li>
                  <li>Filter by guide</li>
                  <li>Track completion status</li>
                  <li>Quick navigation between readings</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'calendar':
        return (
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <h2 className="text-lg font-semibold mb-4">Calendar Feature</h2>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Schedule important events and milestones related to your transitions. Keep track of appointments, deadlines, and key dates.
              </p>

              <div>
                <h3 className="text-base font-medium mb-2">How to Use</h3>
                <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                  <li>Click on any date to create a new event</li>
                  <li>Add event details including time, location, and description</li>
                  <li>Link events to specific guides if relevant</li>
                  <li>Filter calendar view by guide using the sidebar</li>
                </ol>
              </div>

              <div>
                <h3 className="text-base font-medium mb-2">Features</h3>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Month, week, and day views</li>
                  <li>All-day and timed events</li>
                  <li>Link events to guides</li>
                  <li>Filter by guide</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'tasks':
        return (
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <h2 className="text-lg font-semibold mb-4">Tasks Feature</h2>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Manage action items and to-dos related to your guides. Break down big transitions into manageable steps.
              </p>

              <div>
                <h3 className="text-base font-medium mb-2">How to Use</h3>
                <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                  <li>Create tasks related to your guides or general goals</li>
                  <li>Set due dates and priorities</li>
                  <li>Mark tasks as complete when done</li>
                  <li>Filter tasks by guide using the sidebar</li>
                </ol>
              </div>

              <div>
                <h3 className="text-base font-medium mb-2">Features</h3>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Link tasks to specific guides</li>
                  <li>Set due dates</li>
                  <li>Track completion status</li>
                  <li>Filter by guide</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'timeline':
        return (
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <h2 className="text-lg font-semibold mb-4">Timeline Feature</h2>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Visualize your journey over time. Track milestones, events, and progress across all your guides.
              </p>

              <div>
                <h3 className="text-base font-medium mb-2">How to Use</h3>
                <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                  <li>View your timeline automatically populated with events and milestones</li>
                  <li>Filter by specific guides using the sidebar</li>
                  <li>Navigate through different time periods</li>
                  <li>Click on items to see more details</li>
                </ol>
              </div>

              <div>
                <h3 className="text-base font-medium mb-2">Features</h3>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Chronological view of your journey</li>
                  <li>Filter by guide</li>
                  <li>Visual progress indicators</li>
                  <li>Milestone tracking</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'daily':
        return (
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <h2 className="text-lg font-semibold mb-4">Daily Feature</h2>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Create daily notes and plan your day. Keep track of what you're working on and your daily priorities.
              </p>

              <div>
                <h3 className="text-base font-medium mb-2">How to Use</h3>
                <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                  <li>Create a new daily note for today</li>
                  <li>Add your plans, thoughts, and priorities</li>
                  <li>Review past daily notes to track patterns</li>
                  <li>Filter view by specific guides using the sidebar</li>
                </ol>
              </div>

              <div>
                <h3 className="text-base font-medium mb-2">Features</h3>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li>One note per day</li>
                  <li>Free-form content</li>
                  <li>Daily agenda planning</li>
                  <li>Filter by guide</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'journal':
        return (
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <h2 className="text-lg font-semibold mb-4">Journal Feature</h2>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Capture daily reflections and track your emotional journey through major life changes. A private space for your thoughts.
              </p>

              <div>
                <h3 className="text-base font-medium mb-2">How to Use</h3>
                <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                  <li>Create new journal entries whenever you want to reflect</li>
                  <li>Add a title and write your thoughts</li>
                  <li>Tag entries for easier organization (optional)</li>
                  <li>Browse past entries to see your progress</li>
                </ol>
              </div>

              <div>
                <h3 className="text-base font-medium mb-2">Features</h3>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Unlimited journal entries</li>
                  <li>Rich text formatting</li>
                  <li>Tags for organization</li>
                  <li>Search past entries</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'graph':
        return (
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <h2 className="text-lg font-semibold mb-4">Graph Feature</h2>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Visualize connections between your guides, notes, and reflections. See how different areas of your life are interconnected.
              </p>

              <div>
                <h3 className="text-base font-medium mb-2">How to Use</h3>
                <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                  <li>Select guides from the sidebar to include in the graph</li>
                  <li>Explore connections visually</li>
                  <li>Click on nodes to see more details</li>
                  <li>Use the graph to discover insights</li>
                </ol>
              </div>

              <div>
                <h3 className="text-base font-medium mb-2">Features</h3>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Interactive graph visualization</li>
                  <li>Filter by guide</li>
                  <li>Discover connections</li>
                  <li>Visual insights</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'analytics':
        return (
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <h2 className="text-lg font-semibold mb-4">Analytics Feature</h2>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Visualize your progress and gain insights into your growth patterns over time. Track completion rates and identify trends.
              </p>

              <div>
                <h3 className="text-base font-medium mb-2">How to Use</h3>
                <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                  <li>Select guides from the sidebar to include in analytics</li>
                  <li>View charts showing your progress over time</li>
                  <li>Identify patterns in your completion rates</li>
                  <li>Set goals and track your progress towards them</li>
                </ol>
              </div>

              <div>
                <h3 className="text-base font-medium mb-2">Metrics Tracked</h3>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Overall completion percentage</li>
                  <li>Progress over time</li>
                  <li>Active time spent on guides</li>
                  <li>Completion trends</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'archive':
        return (
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <h2 className="text-lg font-semibold mb-4">Archive Feature</h2>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Access guides you've archived. Keep your main workspace clean while preserving completed or paused guides.
              </p>

              <div>
                <h3 className="text-base font-medium mb-2">How to Use</h3>
                <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                  <li>Archive guides you've completed or want to pause</li>
                  <li>Browse archived guides in this view</li>
                  <li>Restore guides back to your active workspace anytime</li>
                  <li>Your progress is preserved when archiving</li>
                </ol>
              </div>

              <div>
                <h3 className="text-base font-medium mb-2">Features</h3>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li>View all archived guides</li>
                  <li>Restore to active workspace</li>
                  <li>Progress is preserved</li>
                  <li>Search archived guides</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'faq':
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

      case 'support':
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

      default:
        return null;
    }
  };

  return (
    <motion.div
      className="h-full w-full flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <motion.div
        className="border-b border-border/40 px-6 py-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <div className="flex items-center gap-3">
          <motion.div
            className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <BookOpen className="w-4 h-4 text-primary" />
          </motion.div>
          <div>
            <h1 className="text-xl font-semibold">Documentation</h1>
            <p className="text-xs text-muted-foreground">Learn how to use Templata</p>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-6">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {renderContent()}
        </motion.div>
      </div>
    </motion.div>
  );
}
