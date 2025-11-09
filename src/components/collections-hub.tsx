"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Package, Search, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Particles } from "@/components/magicui/particles";

interface Collection {
  id: string;
  name: string;
  description: string;
  guideCount: number;
}

interface CollectionsHubProps {
  collections: Collection[];
  totalCollections: number;
}

export const CollectionsHub: React.FC<CollectionsHubProps> = ({
  collections,
  totalCollections,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCollections = collections.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 pt-56">
        <div className="container flex flex-col items-center justify-center gap-4 overflow-hidden">
          <Badge variant="secondary" className="flex items-center gap-2">
            <Package className="w-3 h-3" />
            {totalCollections} Curated Collections
          </Badge>

          <h1 className="relative z-15 max-w-3xl text-center text-6xl font-medium tracking-tighter md:text-7xl">
            <span
              className="overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                perspective: "600px",
              }}
            >
              {"Planning Collections".split(" ").map((word, i) => (
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
            Curated bundles of planning guides for major life events. Everything you
            need in one place.
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
              placeholder="Search collections..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="mt-4 text-sm text-muted-foreground text-center">
            Showing {filteredCollections.length} of {totalCollections} collections
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredCollections.map((collection) => (
              <Link
                key={collection.id}
                href={`/collections/${collection.id}`}
                className="border-border rounded-lg border p-6 hover:border-primary transition-colors group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {collection.name}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {collection.description}
                </p>
                <Badge variant="secondary" className="text-xs">
                  {collection.guideCount} {collection.guideCount === 1 ? 'guide' : 'guides'}
                </Badge>
              </Link>
            ))}
          </div>

          {filteredCollections.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No collections found matching your search.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
