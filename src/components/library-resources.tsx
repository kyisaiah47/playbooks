"use client";

import { useState, useEffect } from "react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ErrorLogger } from "@/lib/error-logger";

interface Guide {
  guide_id: string;
  guide_name: string;
  reading_count: number;
}

interface Reading {
  id: string;
  title: string;
  author: string;
  excerpt: string;
  read_time: string;
  updated_at: string;
}

const LibraryResources = () => {
  const [guides, setGuides] = useState<Guide[]>([]);
  const [selectedGuide, setSelectedGuide] = useState<string>("");
  const [readings, setReadings] = useState<Reading[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch guides on mount
  useEffect(() => {
    async function fetchGuides() {
      try {
        const res = await fetch('/api/library');
        const data = await res.json();
        setGuides(data.guides || []);
        if (data.guides && data.guides.length > 0) {
          setSelectedGuide(data.guides[0].guide_id);
        }
      } catch (error) {
        ErrorLogger.logError(error, {
          component: 'LibraryResources',
          action: 'fetchGuides'
        });
      } finally {
        setLoading(false);
      }
    }
    fetchGuides();
  }, []);

  // Fetch readings when guide changes
  useEffect(() => {
    if (!selectedGuide) return;

    async function fetchReadings() {
      try {
        const res = await fetch(`/api/library?guide=${selectedGuide}`);
        const data = await res.json();
        setReadings(data.readings || []);
      } catch (error) {
        ErrorLogger.logError(error, {
          component: 'LibraryResources',
          action: 'fetchReadings',
          metadata: { guideId: selectedGuide }
        });
      }
    }
    fetchReadings();
  }, [selectedGuide]);

  if (loading) {
    return (
      <section className="py-32">
        <div className="container">
          <h2 className="mb-6 text-2xl font-medium md:text-3xl">
            Latest updates
          </h2>
          <div className="space-y-4 animate-pulse">
            <div className="h-10 bg-muted rounded w-full" />
            <div className="h-20 bg-muted rounded w-full" />
            <div className="h-20 bg-muted rounded w-full" />
            <div className="h-20 bg-muted rounded w-full" />
          </div>
        </div>
      </section>
    );
  }

  if (guides.length === 0) {
    return (
      <section className="py-32">
        <div className="container">
          <div className="text-center py-12">
            <h3 className="text-2xl font-medium mb-2">No guides available</h3>
            <p className="text-muted-foreground">
              Check back later for new reading materials.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-32">
      <div className="container">
        <div>
          <h2 className="mb-6 text-2xl font-medium md:text-3xl">
            Latest updates
          </h2>
          <Tabs
            value={selectedGuide}
            className="border-border border-b"
            onValueChange={setSelectedGuide}
          >
            <TabsList className="bg-background flex h-auto gap-2 p-0 overflow-x-auto scrollbar-thin scrollbar-thumb-muted-foreground/20">
              {guides.map((guide) => (
                <TabsTrigger
                  key={guide.guide_id}
                  value={guide.guide_id}
                  className="group relative py-2.5 uppercase data-[state=active]:shadow-none text-xs sm:text-sm whitespace-nowrap"
                >
                  {guide.guide_name} ({guide.reading_count})
                  <span className="group-data-[state=active]:bg-primary absolute -bottom-px group-data-[state=active]:h-px group-data-[state=active]:w-full" />
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          <div className="mt-4">
            {readings.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No readings available for this guide yet.
                </p>
              </div>
            ) : (
              readings.map((reading) => (
              <a
                key={reading.id}
                href={`/library/${reading.id}`}
                className="border-border flex flex-col justify-between gap-4 border-b py-6 md:flex-row"
              >
                <h3 className="font-medium md:line-clamp-1">{reading.title}</h3>
                <div className="flex flex-col gap-2 sm:grid sm:grid-cols-2 md:grid-cols-3 md:max-w-80 w-full shrink-0">
                  <p className="text-muted-foreground text-sm truncate">
                    {reading.author}
                  </p>
                  <time className="text-muted-foreground text-sm truncate">
                    {new Date(reading.updated_at).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </time>
                  <div className="text-muted-foreground text-sm sm:text-right truncate">
                    {reading.read_time}
                  </div>
                </div>
              </a>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { LibraryResources };
