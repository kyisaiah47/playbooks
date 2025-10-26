"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { BookOpen, Search, ExternalLink, ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { ReadingContent } from '@/app/readings/[slug]/reading-content';

interface GuideWithReadings {
  guide_id: string;
  guide_name: string;
  reading_count: number;
}

interface Reading {
  id: string;
  title: string;
  author: string;
  excerpt: string;
  content: string;
  read_time: string;
  type: string;
  influences: string[];
  updated_at: string;
}

export default function LibraryPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [guideSearchQuery, setGuideSearchQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [guides, setGuides] = useState<GuideWithReadings[]>([]);
  const [readings, setReadings] = useState<Reading[]>([]);
  const [loadingGuides, setLoadingGuides] = useState(true);
  const [loadingReadings, setLoadingReadings] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState<string | null>(null);
  const [selectedReading, setSelectedReading] = useState<Reading | null>(null);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  // Fetch guides on mount and set selected guide from URL
  useEffect(() => {
    async function fetchGuides() {
      try {
        setLoadingGuides(true);
        const res = await fetch('/api/library');
        const data = await res.json();
        setGuides(data.guides || []);

        // Set selected guide from URL param or auto-select first guide
        const guideParam = searchParams.get('guide');
        if (guideParam) {
          setSelectedGuide(guideParam);
        } else if (data.guides && data.guides.length > 0) {
          setSelectedGuide(data.guides[0].guide_id);
          // Update URL with first guide
          router.replace(`/library?guide=${data.guides[0].guide_id}`);
        }
      } catch (error) {
        console.error('Error fetching guides:', error);
      } finally {
        setLoadingGuides(false);
      }
    }

    fetchGuides();
  }, [searchParams, router]);

  // Fetch readings when guide changes or search query changes
  useEffect(() => {
    async function fetchReadings() {
      if (!selectedGuide) return;

      try {
        setLoadingReadings(true);
        const params = new URLSearchParams({ guide: selectedGuide });
        if (searchQuery.trim()) {
          params.append('search', searchQuery.trim());
        }

        const res = await fetch(`/api/library?${params}`);
        const data = await res.json();
        setReadings(data.readings || []);
      } catch (error) {
        console.error('Error fetching readings:', error);
      } finally {
        setLoadingReadings(false);
      }
    }

    fetchReadings();
  }, [selectedGuide, searchQuery]);

  // Sync selected reading from URL
  useEffect(() => {
    const readingParam = searchParams.get('reading');
    if (readingParam && readings.length > 0) {
      const reading = readings.find((r) => r.id === readingParam);
      if (reading) {
        setSelectedReading(reading);
      }
    } else {
      setSelectedReading(null);
    }
  }, [searchParams, readings]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  // Filter guides by search query
  const filteredGuides = guideSearchQuery.trim()
    ? guides.filter(guide =>
        guide.guide_name.toLowerCase().includes(guideSearchQuery.toLowerCase())
      )
    : guides;

  // Group guides by first letter
  const groupGuidesByLetter = () => {
    const grouped: Record<string, GuideWithReadings[]> = {};

    filteredGuides.forEach(guide => {
      const firstLetter = guide.guide_name.charAt(0).toUpperCase();
      if (!grouped[firstLetter]) {
        grouped[firstLetter] = [];
      }
      grouped[firstLetter].push(guide);
    });

    return Object.entries(grouped)
      .map(([letter, guides]) => ({
        id: letter,
        letter,
        guides: guides.sort((a, b) => a.guide_name.localeCompare(b.guide_name))
      }))
      .sort((a, b) => a.letter.localeCompare(b.letter));
  };

  const totalReadings = guides.reduce((sum, guide) => sum + guide.reading_count, 0);
  const selectedGuideData = guides.find(g => g.guide_id === selectedGuide);
  const groupedGuides = groupGuidesByLetter();

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'book': return 'bg-blue-500/10 text-blue-600 dark:text-blue-400';
      case 'article': return 'bg-green-500/10 text-green-600 dark:text-green-400';
      case 'youtube': return 'bg-red-500/10 text-red-600 dark:text-red-400';
      case 'podcast': return 'bg-purple-500/10 text-purple-600 dark:text-purple-400';
      case 'publication': return 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="flex h-[calc(100vh-3.5rem)] overflow-hidden">
      {/* Sidebar Navigation */}
      <aside className="hidden lg:block w-80 flex-shrink-0 border-r border-border overflow-y-auto bg-background">
        <div className="py-6 px-4 space-y-4">
          {/* Search guides */}
          <div className="relative">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/40" />
            <input
              type="text"
              placeholder="Search guides..."
              value={guideSearchQuery}
              onChange={(e) => setGuideSearchQuery(e.target.value)}
              className="w-full h-8 pl-8 pr-3 bg-transparent border-b border-border/60 focus:border-foreground/40 outline-none text-[13px] transition-colors"
            />
          </div>

          <nav className="space-y-1">
            {groupedGuides.map((section) => (
              <div key={section.id}>
                <button
                  onClick={() => toggleSection(section.id)}
                  className="flex items-center justify-between w-full text-sm font-medium py-1.5 px-2 hover:bg-muted/50 rounded transition-colors text-left"
                >
                  <span className="text-sm">{section.letter}</span>
                  {expandedSections.includes(section.id) ? (
                    <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
                  )}
                </button>

                {expandedSections.includes(section.id) && (
                  <div className="ml-3 mt-1 space-y-0.5 border-l border-border pl-3">
                    {section.guides.map((guide) => {
                      const isSelected = selectedGuide === guide.guide_id;
                      return (
                        <button
                          key={guide.guide_id}
                          onClick={() => {
                            setSelectedGuide(guide.guide_id);
                            router.push(`/library?guide=${guide.guide_id}`);
                          }}
                          className={cn(
                            "flex items-center gap-2 w-full text-left text-sm py-1.5 px-2 rounded transition-colors",
                            isSelected
                              ? 'text-foreground bg-muted/50'
                              : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                          )}
                        >
                          <BookOpen className="h-3.5 w-3.5" />
                          <span className="truncate flex-1">{guide.guide_name}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="px-6 lg:px-12 py-8">
          {selectedGuideData ? (
            <>
              {loadingReadings ? (
                <div className="text-center py-12 text-muted-foreground text-sm">
                  Loading readings...
                </div>
              ) : selectedReading ? (
                <div className="max-w-3xl">
                  <button
                    onClick={() => {
                      setSelectedReading(null);
                      const params = new URLSearchParams(searchParams);
                      params.delete('reading');
                      router.push(`/library?${params.toString()}`);
                    }}
                    className="text-sm text-muted-foreground hover:text-foreground mb-6 flex items-center gap-1"
                  >
                    ← Back to readings
                  </button>
                  <h1 className="text-3xl font-semibold mb-3">{selectedReading.title}</h1>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                    <span>{selectedReading.author}</span>
                    <span>•</span>
                    <span>{selectedReading.read_time}</span>
                  </div>
                  {selectedReading.influences && selectedReading.influences.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2 mb-8">
                      <span className="text-xs text-muted-foreground">Curated from:</span>
                      {selectedReading.influences.map((influence, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs px-2 py-0.5"
                        >
                          {influence}
                        </Badge>
                      ))}
                    </div>
                  )}
                  <ReadingContent content={selectedReading.content} />
                </div>
              ) : (
                <>
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <h2 className="text-xl font-semibold tracking-tight">{selectedGuideData.guide_name}</h2>
                    </div>
                    <p className="text-[12px] text-muted-foreground mb-4">
                      {selectedGuideData.reading_count} curated {selectedGuideData.reading_count === 1 ? 'reading' : 'readings'}
                    </p>

                    {/* Search */}
                    <div className="relative max-w-xs">
                      <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/40" />
                      <input
                        type="text"
                        placeholder="Search readings..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full h-8 pl-8 pr-3 bg-transparent border-b border-border/60 focus:border-foreground/40 outline-none text-[13px] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Readings List */}
                  <div>
                    <div className="flex items-center justify-between mb-3 pb-2 border-b border-border/40">
                      <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
                        {readings.length} readings
                      </span>
                    </div>

                  </div>
                </>
              )}

              {!loadingReadings && !selectedReading && readings.length > 0 && (
                <div className="space-y-0">
                  {readings.map((reading) => (
                      <div
                        key={reading.id}
                        onClick={() => {
                          setSelectedReading(reading);
                          const params = new URLSearchParams(searchParams);
                          params.set('reading', reading.id);
                          router.push(`/library?${params.toString()}`);
                        }}
                        className="py-4 border-b border-border/40 hover:bg-muted/20 -mx-3 px-3 transition-colors group cursor-pointer"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                                {reading.title}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground mb-2">
                              {reading.author}
                            </p>
                            {reading.influences && reading.influences.length > 0 && (
                              <div className="flex flex-wrap gap-1 mb-2">
                                {reading.influences.slice(0, 3).map((influence, idx) => (
                                  <Badge
                                    key={idx}
                                    variant="outline"
                                    className="text-[10px] px-1.5 py-0.5"
                                  >
                                    {influence}
                                  </Badge>
                                ))}
                                {reading.influences.length > 3 && (
                                  <span className="text-[10px] text-muted-foreground">+{reading.influences.length - 3} more</span>
                                )}
                              </div>
                            )}
                            <p className="text-xs text-muted-foreground/80 line-clamp-2">
                              {reading.excerpt}
                            </p>
                          </div>
                          <Badge
                            variant="secondary"
                            className={cn("text-[10px] px-2 py-1 font-medium", getTypeColor(reading.type))}
                          >
                            {reading.type}
                          </Badge>
                        </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              {loadingGuides ? 'Loading guides...' : 'Select a guide to view readings'}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
