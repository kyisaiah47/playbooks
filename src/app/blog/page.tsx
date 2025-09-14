"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button"
import { blogRegistry, getAllBlogCategories } from "@/registry/blogs";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen, Sparkles, Command, ArrowRight, Zap } from "lucide-react";
import { PageLayout } from "@/components/layout";
import { FullscreenCommandPalette } from "@/components/fullscreen-command-palette";


export default function BlogPage() {
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  return (
    <PageLayout>
      <section className="py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center space-y-8">
            <Badge
              variant="outline"
              className="px-4 py-2"
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Expert Insights
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Search-First Resources
            </h1>

            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Find exactly the guidance you need. Skip the scrolling, start with search.
            </p>

            {/* Main Search CTA */}
            <div className="flex flex-col items-center gap-6 mt-12">
              <Button
                size="lg"
                onClick={() => setIsCommandOpen(true)}
                className="h-16 px-8 text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Search className="mr-3 h-5 w-5" />
                Search Articles & Resources
                <div className="ml-3 flex items-center gap-1 text-sm opacity-75">
                  <Command className="h-3 w-3" />
                  <span>K</span>
                </div>
              </Button>

              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Or press <kbd className="px-2 py-1 bg-muted rounded text-xs font-medium">Cmd+K</kbd> anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Preview Section */}
      <div className="container mx-auto max-w-7xl px-4 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">What you'll discover</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our smart search covers {blogRegistry.length} expert articles across {getAllBlogCategories().length} specialized topics.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
              <Search className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold">Expert Insights</h3>
            <p className="text-sm text-muted-foreground">
              In-depth articles from specialists in each life domain
            </p>
          </div>

          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold">Practical Tips</h3>
            <p className="text-sm text-muted-foreground">
              Actionable advice you can apply to real situations
            </p>
          </div>

          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold">Resource Library</h3>
            <p className="text-sm text-muted-foreground">
              Curated resources and tools for every major life decision
            </p>
          </div>
        </div>

        {/* Alternative Action */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setIsCommandOpen(true)}
            className="group"
          >
            Start exploring
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Command Palette */}
      <FullscreenCommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        mode="articles"
        autoFocus={true}
      />
    </PageLayout>
  );
}