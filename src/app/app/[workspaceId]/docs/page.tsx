'use client';

import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Rocket,
  Grid3x3,
  Book,
  FileQuestion,
  HelpCircle,
} from 'lucide-react';

type SectionType = 'getting-started' | 'features' | 'guides' | 'reference' | 'faq' | 'support';

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

      case 'features':
        return (
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <h2 className="text-lg font-semibold mb-4">Features Overview</h2>
            <div className="space-y-4">
              <div className="border border-border rounded-lg p-4">
                <h3 className="text-base font-medium mb-2">Notes</h3>
                <p className="text-sm text-muted-foreground">
                  Work through guides with structured readings and reflection prompts. Track your progress and insights.
                </p>
              </div>

              <div className="border border-border rounded-lg p-4">
                <h3 className="text-base font-medium mb-2">Discover</h3>
                <p className="text-sm text-muted-foreground">
                  Browse curated guides across categories like career, relationships, health, and personal growth.
                </p>
              </div>

              <div className="border border-border rounded-lg p-4">
                <h3 className="text-base font-medium mb-2">Library</h3>
                <p className="text-sm text-muted-foreground">
                  Access all your readings in one place. Easily search and navigate through guide content.
                </p>
              </div>

              <div className="border border-border rounded-lg p-4">
                <h3 className="text-base font-medium mb-2">Calendar & Tasks</h3>
                <p className="text-sm text-muted-foreground">
                  Organize your action items and schedule important events related to your transitions.
                </p>
              </div>

              <div className="border border-border rounded-lg p-4">
                <h3 className="text-base font-medium mb-2">Journal</h3>
                <p className="text-sm text-muted-foreground">
                  Capture daily reflections and track your emotional journey through major life changes.
                </p>
              </div>

              <div className="border border-border rounded-lg p-4">
                <h3 className="text-base font-medium mb-2">Analytics</h3>
                <p className="text-sm text-muted-foreground">
                  Visualize your progress and gain insights into your growth patterns over time.
                </p>
              </div>
            </div>
          </div>
        );

      case 'guides':
        return (
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <h2 className="text-lg font-semibold mb-4">How-to Guides</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-medium mb-2">Adding a Guide to Your Workspace</h3>
                <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                  <li>Navigate to the Discover view</li>
                  <li>Select a category from the sidebar</li>
                  <li>Click on a guide to preview it</li>
                  <li>Click "Add to Workspace" to start working through it</li>
                </ol>
              </div>

              <div>
                <h3 className="text-base font-medium mb-2">Working Through a Guide</h3>
                <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                  <li>Open a guide from the Notes view</li>
                  <li>Read through each section at your own pace</li>
                  <li>Complete reflection prompts to capture your thoughts</li>
                  <li>Mark sections as complete as you progress</li>
                </ol>
              </div>

              <div>
                <h3 className="text-base font-medium mb-2">Organizing Your Tasks</h3>
                <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                  <li>Navigate to the Tasks view</li>
                  <li>Create tasks related to your guides or general goals</li>
                  <li>Set due dates and priorities</li>
                  <li>Filter tasks by guide using the sidebar</li>
                </ol>
              </div>
            </div>
          </div>
        );

      case 'reference':
        return (
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <h2 className="text-lg font-semibold mb-4">Reference</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-medium mb-2">Keyboard Shortcuts</h3>
                <div className="border border-border rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <tbody className="divide-y divide-border">
                      <tr className="hover:bg-muted/30">
                        <td className="px-4 py-2 font-mono text-xs">Cmd/Ctrl + K</td>
                        <td className="px-4 py-2 text-muted-foreground">Quick search</td>
                      </tr>
                      <tr className="hover:bg-muted/30">
                        <td className="px-4 py-2 font-mono text-xs">Cmd/Ctrl + N</td>
                        <td className="px-4 py-2 text-muted-foreground">New note</td>
                      </tr>
                      <tr className="hover:bg-muted/30">
                        <td className="px-4 py-2 font-mono text-xs">Cmd/Ctrl + B</td>
                        <td className="px-4 py-2 text-muted-foreground">Toggle sidebar</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-base font-medium mb-2">Views</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Each view in Templata serves a specific purpose:
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li><strong>Overview:</strong> Dashboard showing your active guides and progress</li>
                  <li><strong>Notes:</strong> Work through guide content and reflections</li>
                  <li><strong>Discover:</strong> Browse and add new guides</li>
                  <li><strong>Library:</strong> Access all readings from your guides</li>
                  <li><strong>Calendar:</strong> Schedule events and milestones</li>
                  <li><strong>Tasks:</strong> Manage action items</li>
                  <li><strong>Journal:</strong> Daily reflections and entries</li>
                  <li><strong>Analytics:</strong> Visualize your progress</li>
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
