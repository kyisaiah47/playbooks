"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tag, Search, Heart, Briefcase, Activity, DollarSign, Home, Users, Rocket, Brain, TrendingUp, Wallet, Baby, Target, Pill, PiggyBank, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Particles } from "@/components/magicui/particles";
import { SkiperUiMarquee } from "@/components/category-hero";

interface TagData {
  tag: string;
  count: number;
  guides?: any[];
}

interface TagsHubProps {
  tags: TagData[];
  totalTags: number;
  allGuidesByTag: Record<string, any[]>;
}

export const TagsHub: React.FC<TagsHubProps> = ({ tags, totalTags, allGuidesByTag }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedTag, setExpandedTag] = useState<string | null>(null);

  const filteredTags = tags.filter((t) =>
    t.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleTag = (tag: string) => {
    setExpandedTag(expandedTag === tag ? null : tag);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 pt-56">
        <div className="container flex flex-col items-center justify-center gap-4 overflow-hidden">
          <Badge variant="secondary" className="flex items-center gap-2">
            <Tag className="w-3 h-3" />
            {totalTags} Planning Tags
          </Badge>

          <h1 className="relative z-15 max-w-3xl text-center text-6xl font-medium tracking-tighter md:text-7xl">
            <span
              className="overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                perspective: "600px",
              }}
            >
              {"Browse by Tag".split(" ").map((word, i) => (
                <motion.span
                  className="relative inline-block px-[6px] leading-[none]"
                  key={i}
                  initial={{
                    opacity: 0,
                    y: "70%",
                    rotateX: "-28deg",
                  }}
                  animate={{
                    opacity: 1,
                    y: "0%",
                    rotateX: "0deg",
                  }}
                  transition={{
                    delay: i * 0.08 + 0.1,
                    duration: 0.8,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>

          <p className="text-muted-foreground max-w-2xl text-center text-lg mt-4">
            Explore planning guides organized by topic. Find resources on anxiety,
            budgeting, career change, relationships, health, and more.
          </p>

          <Particles
            className="absolute inset-0 z-0"
            quantity={500}
            ease={80}
            refresh
          />

          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            className="relative z-20 mt-10 flex items-center justify-center gap-4"
          >
            <SkiperUiMarquee
              showCard={1}
              className=""
              reverse={true}
              icons={[Heart, Home, Users, Baby]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[Briefcase, Rocket, Target, TrendingUp]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={3}
              reverse={true}
              className=""
              icons={[Activity, Brain, Pill, Sparkles]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[Tag, Tag, Tag, Tag]}
              highlighted
            />
            <SkiperUiMarquee
              showCard={3}
              reverse={true}
              className=""
              icons={[Heart, Home, Briefcase, Activity]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[Rocket, Brain, DollarSign, Users]}
              dimmed
            />
            <SkiperUiMarquee
              reverse={true}
              showCard={1}
              className=""
              icons={[Target, Pill, PiggyBank, Baby]}
              dimmed
            />
          </motion.div>

          <div className="h-92 bg-background absolute bottom-20 left-0 right-0 w-full blur-xl" />
        </div>
      </section>

      {/* Search */}
      <section className="py-8 border-b border-border">
        <div className="container">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="mt-4 text-sm text-muted-foreground text-center">
            Showing {filteredTags.length} of {totalTags} tags
          </div>
        </div>
      </section>

      {/* Tags Grid */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center">
            {filteredTags.map((tagData, index) => {
              const isExpanded = expandedTag === tagData.tag;

              return (
                <React.Fragment key={tagData.tag}>
                  <button
                    onClick={() => toggleTag(tagData.tag)}
                    className={`border-border rounded-full border px-6 py-3 hover:border-primary transition-colors group ${
                      isExpanded ? 'border-primary bg-primary/5' : ''
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-medium group-hover:text-primary transition-colors capitalize">
                        {tagData.tag.replace(/-/g, ' ')}
                      </span>
                      <Badge variant="secondary" className="text-xs">
                        {tagData.count}
                      </Badge>
                    </div>
                  </button>

                  {/* Insert guides right after the clicked tag */}
                  {isExpanded && allGuidesByTag[expandedTag] && (
                    <div className="basis-full border-t border-b border-border py-6 my-1">
                      <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-xl font-semibold capitalize">
                          {expandedTag.replace(/-/g, ' ')} Guides
                        </h2>
                        <button
                          onClick={() => setExpandedTag(null)}
                          className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                        >
                          Close ✕
                        </button>
                      </div>
                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {allGuidesByTag[expandedTag].map((guide: any) => (
                          <Link
                            key={guide.id}
                            href={`/guides/${guide.id}`}
                            className="border-border rounded-lg border p-6 hover:border-primary transition-colors group"
                          >
                            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                              {guide.name}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                              {guide.description}
                            </p>
                            <div className="flex items-center gap-2 text-xs">
                              {guide.difficulty && (
                                <Badge variant="outline" className="text-xs">
                                  {guide.difficulty}
                                </Badge>
                              )}
                              {guide.estimated_time && (
                                <span className="text-muted-foreground">
                                  {guide.estimated_time}
                                </span>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {filteredTags.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No tags found matching your search.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
