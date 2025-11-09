"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tag, Search } from "lucide-react";
import { motion } from "framer-motion";
import { Particles } from "@/components/magicui/particles";

interface TagData {
  tag: string;
  count: number;
}

interface TagsHubProps {
  tags: TagData[];
  totalTags: number;
}

export const TagsHub: React.FC<TagsHubProps> = ({ tags, totalTags }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTags = tags.filter((t) =>
    t.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            {filteredTags.map((tagData) => (
              <Link
                key={tagData.tag}
                href={`/tags/${encodeURIComponent(tagData.tag.toLowerCase().replace(/\s+/g, '-'))}`}
                className="border-border rounded-full border px-6 py-3 hover:border-primary transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <span className="font-medium group-hover:text-primary transition-colors">
                    {tagData.tag}
                  </span>
                  <Badge variant="secondary" className="text-xs">
                    {tagData.count}
                  </Badge>
                </div>
              </Link>
            ))}
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
