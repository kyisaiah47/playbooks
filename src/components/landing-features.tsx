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

const LandingFeatures = () => {
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
                <h3 className="text-2xl font-semibold mb-4">The Questions That Save You Months</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Remember the last time you faced a blank page for something important? That paralysis of "where do I even start?" We spent months refining our Axiom Engine to ensure you'll never feel that way again.
                </p>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Each guide contains 50+ systematically organized questions covering 90%+ of what you need to consider. Not generic prompts generated on the fly—these are pre-loaded, expert-crafted questions that get to the heart of your decisions. Your answers auto-save as you think, so you can return anytime to continue exactly where you left off. The blank page is dead.
                </p>
              </TabsContent>
              <TabsContent value="tab-2" className="p-8 border rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Learn While You Plan</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Imagine having a life coach sitting next to you, offering expert insights exactly when you need them. That's what our split-screen experience delivers—questions on the left, your answers in the middle, and curated expert readings on the right.
                </p>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  No more bouncing between 50 browser tabs trying to piece together advice from random blogs. Every reading is vetted, relevant, and appears right when you're thinking through that specific aspect of your plan. It's the difference between drowning in information and having clarity when it matters most.
                </p>
              </TabsContent>
              <TabsContent value="tab-3" className="p-8 border rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Your Life, Organized by Moment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Planning a wedding while also thinking about a career change? Your wedding thoughts shouldn't mix with your career reflections. Each guide lives in its own space—complete with dedicated questions, readings, calendar events, and tasks.
                </p>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Think of it like having a separate notebook for each major life event, but infinitely more organized. Three panels show you everything at once: what to consider, what you've thought about, and what experts recommend. Plus blank notes when you need to free-form your thoughts. It's Notion's organizational power meets the focused guidance of a life coach.
                </p>
              </TabsContent>
              <TabsContent value="tab-4" className="p-8 border rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">See Your Future Taking Shape</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Two months until your wedding. Three months until you close on that house. Six weeks until your career transition interview. When you're juggling multiple life events, time becomes precious.
                </p>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Our calendar shows all your milestones and deadlines in one view, but lets you filter to focus on just one guide when you need clarity. Wedding venue tours don't clutter your home-buying timeline. It's how your brain actually works—capable of seeing the big picture or zooming into a single moment, depending on what you need right now.
                </p>
              </TabsContent>
              <TabsContent value="tab-5" className="p-8 border rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">From Overwhelm to Action</h3>
                <p className="text-muted-foreground leading-relaxed">
                  That growing sense of "I should be doing something but I don't know what" is exhausting. Our task system transforms that anxiety into clarity—see everything that needs doing, organized by guide and priority.
                </p>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Choose kanban view when you want to visualize your workflow, or list view when you just need to knock things out. Filter by your wedding guide during wedding planning season, then switch to your career guide when you're job hunting. Add your own custom tasks alongside the pre-loaded ones we suggest. Progress feels good when you can actually see it happening.
                </p>
              </TabsContent>
              <TabsContent value="tab-6" className="p-8 border rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Your Personal Encyclopedia for Living</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sometimes you're not working through questions—you just want to learn. The library is where all our expert readings live, searchable and filterable, ready when curiosity strikes or when you need a specific answer fast.
                </p>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Think Wikipedia, but for the actual decisions you're making in your life. Every article is curated, every piece of advice is actionable. No fluff, no SEO-optimized garbage—just the insights you need to make informed choices about life's biggest moments.
                </p>
              </TabsContent>
              <TabsContent value="tab-7" className="p-8 border rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Watch Your Progress Come to Life</h3>
                <p className="text-muted-foreground leading-relaxed">
                  There's something deeply satisfying about seeing how far you've come. Our analytics don't just show numbers—they visualize your journey through radial progress charts, completion percentages, and insights that make you feel like you're actually getting somewhere.
                </p>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Track how many questions you've answered, which readings you've completed, and what percentage of your guide you've conquered. It's designed like Superhuman's premium email experience or Co-Star's sophisticated astrology app—because transforming life's biggest moments from overwhelming to exhilarating requires both comprehensive content and exceptional design.
                </p>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export { LandingFeatures };
