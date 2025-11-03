import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import {
  BookOpen,
  Calendar,
  CheckSquare,
  HelpCircle,
  Library,
  BarChart3,
  Layout,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

const FeaturesTabbedHero = () => {
  return (
    <section className="pb-32">
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4">
          <Badge
            variant="secondary"
            className="bg-muted"
          >
            Complete System
          </Badge>
          <h2 className="text-center text-3xl font-semibold lg:text-4xl">
            Every Feature You Need
          </h2>
          <p className="text-muted-foreground text-center lg:text-lg">
            Questions, readings, calendar, tasks, and more—all organized by life event.
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-6xl">
          <Tabs defaultValue="tab-1">
            <div className="max-w-[100vw-4rem] overflow-x-auto">
              <TabsList className="mx-auto flex w-fit justify-center gap-5 border-b">
                <TabsTrigger
                  value="tab-1"
                  className="data-[state=active]:border-primary group -mb-px flex flex-col items-center gap-1.5 px-1 pb-3.5 data-[state=active]:border-b"
                >
                  <span className="bg-muted group-data-[state=active]:bg-primary group-data-[state=active]:text-background flex size-12 items-center justify-center rounded-md transition-colors duration-300">
                    <HelpCircle className="w-7" />
                  </span>
                  <p className="text-muted-foreground text-sm">Questions</p>
                </TabsTrigger>
                <TabsTrigger
                  value="tab-2"
                  className="data-[state=active]:border-primary group -mb-px flex flex-col items-center gap-1.5 px-1 pb-3.5 data-[state=active]:border-b"
                >
                  <span className="bg-muted group-data-[state=active]:bg-primary group-data-[state=active]:text-background flex size-12 items-center justify-center rounded-md transition-colors duration-300">
                    <BookOpen className="w-7" />
                  </span>
                  <p className="text-muted-foreground text-sm">Readings</p>
                </TabsTrigger>
                <TabsTrigger
                  value="tab-3"
                  className="data-[state=active]:border-primary group -mb-px flex flex-col items-center gap-1.5 px-1 pb-3.5 data-[state=active]:border-b"
                >
                  <span className="bg-muted group-data-[state=active]:bg-primary group-data-[state=active]:text-background flex size-12 items-center justify-center rounded-md transition-colors duration-300">
                    <Layout className="w-7" />
                  </span>
                  <p className="text-muted-foreground text-sm">Guides</p>
                </TabsTrigger>
                <TabsTrigger
                  value="tab-4"
                  className="data-[state=active]:border-primary group -mb-px flex flex-col items-center gap-1.5 px-1 pb-3.5 data-[state=active]:border-b"
                >
                  <span className="bg-muted group-data-[state=active]:bg-primary group-data-[state=active]:text-background flex size-12 items-center justify-center rounded-md transition-colors duration-300">
                    <Calendar className="w-7" />
                  </span>
                  <p className="text-muted-foreground text-sm">Calendar</p>
                </TabsTrigger>
                <TabsTrigger
                  value="tab-5"
                  className="data-[state=active]:border-primary group -mb-px flex flex-col items-center gap-1.5 px-1 pb-3.5 data-[state=active]:border-b"
                >
                  <span className="bg-muted group-data-[state=active]:bg-primary group-data-[state=active]:text-background flex size-12 items-center justify-center rounded-md transition-colors duration-300">
                    <CheckSquare className="w-7" />
                  </span>
                  <p className="text-muted-foreground text-sm">Tasks</p>
                </TabsTrigger>
                <TabsTrigger
                  value="tab-6"
                  className="data-[state=active]:border-primary group -mb-px flex flex-col items-center gap-1.5 px-1 pb-3.5 data-[state=active]:border-b"
                >
                  <span className="bg-muted group-data-[state=active]:bg-primary group-data-[state=active]:text-background flex size-12 items-center justify-center rounded-md transition-colors duration-300">
                    <Library className="w-7" />
                  </span>
                  <p className="text-muted-foreground text-sm">Library</p>
                </TabsTrigger>
                <TabsTrigger
                  value="tab-7"
                  className="data-[state=active]:border-primary group -mb-px flex flex-col items-center gap-1.5 px-1 pb-3.5 data-[state=active]:border-b"
                >
                  <span className="bg-muted group-data-[state=active]:bg-primary group-data-[state=active]:text-background flex size-12 items-center justify-center rounded-md transition-colors duration-300">
                    <BarChart3 className="w-7" />
                  </span>
                  <p className="text-muted-foreground text-sm">Analytics</p>
                </TabsTrigger>
              </TabsList>
            </div>
            <div className="mt-5">
              <TabsContent value="tab-1" className="p-8 border rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Comprehensive Questions</h3>
                <p className="text-muted-foreground mb-4">
                  90%+ of everything you need to consider for any major life event. Months of AI refinement to ensure nothing critical gets missed.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Systematically organized prompts by category</li>
                  <li>• Save your answers with auto-save</li>
                  <li>• Track which questions you've answered</li>
                  <li>• Pre-loaded for each guide (not generated on the fly)</li>
                </ul>
              </TabsContent>
              <TabsContent value="tab-2" className="p-8 border rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Expert Readings</h3>
                <p className="text-muted-foreground mb-4">
                  Curated knowledge and advice to help you make informed decisions. Expert content for each aspect of your transition.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Related readings appear alongside questions</li>
                  <li>• Learn and plan simultaneously in split-screen view</li>
                  <li>• Browse all readings in the Library</li>
                  <li>• Expert-written, not generic content</li>
                </ul>
              </TabsContent>
              <TabsContent value="tab-3" className="p-8 border rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Guide Notes</h3>
                <p className="text-muted-foreground mb-4">
                  Your workspace for each life event. Each guide contains questions, readings, calendar events, and tasks—all organized in one place.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 3-panel view: Questions | Answers | Readings</li>
                  <li>• Per-guide organization (wedding separate from home buying)</li>
                  <li>• Blank notes for freeform planning</li>
                  <li>• Browse available guides in Discover</li>
                </ul>
              </TabsContent>
              <TabsContent value="tab-4" className="p-8 border rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Calendar</h3>
                <p className="text-muted-foreground mb-4">
                  See all events across guides in one calendar view. Filter by specific guides to focus on what matters right now.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Cross-guide calendar view</li>
                  <li>• Filter events by guide</li>
                  <li>• Per-guide events (wedding events stay separate from home buying)</li>
                  <li>• Track milestones and deadlines</li>
                </ul>
              </TabsContent>
              <TabsContent value="tab-5" className="p-8 border rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Tasks</h3>
                <p className="text-muted-foreground mb-4">
                  Kanban or list view of all your todos. Filter by guide to see only what's relevant to your current focus.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Kanban or list view options</li>
                  <li>• Filter tasks by guide</li>
                  <li>• Per-guide task organization</li>
                  <li>• Add custom tasks alongside pre-loaded ones</li>
                </ul>
              </TabsContent>
              <TabsContent value="tab-6" className="p-8 border rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Library</h3>
                <p className="text-muted-foreground mb-4">
                  Browse all available readings across all guides. Search and filter to find exactly what you need.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• All readings in one place</li>
                  <li>• Search across all content</li>
                  <li>• Filter by guide or category</li>
                  <li>• Reference material as you need it</li>
                </ul>
              </TabsContent>
              <TabsContent value="tab-7" className="p-8 border rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Analytics</h3>
                <p className="text-muted-foreground mb-4">
                  Track progress per guide. See completion percentages, questions answered, and readings completed.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Guide completion percentages</li>
                  <li>• Questions answered count</li>
                  <li>• Readings read tracking</li>
                  <li>• Per-guide analytics dashboard</li>
                </ul>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export { FeaturesTabbedHero };
