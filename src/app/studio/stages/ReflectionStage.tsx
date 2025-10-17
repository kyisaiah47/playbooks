'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Save } from 'lucide-react';

interface ReflectionEntry {
  id: string;
  date: string;
  prompt: string;
  content: string;
  mood: string;
  tags: string[];
  savedAt: string;
}

const DAILY_PROMPTS = [
  "What did you let go of today?",
  "What moment made you feel most alive today?",
  "What challenged you today, and what did you learn from it?",
  "What are you grateful for right now?",
  "What would you tell your past self from a week ago?",
  "What truth are you avoiding today?",
  "What small win can you celebrate today?",
];

const MOODS = ['😊', '😌', '😐', '😔', '😤', '😴', '🤔'];

export function ReflectionStage() {
  const today = new Date().toISOString().split('T')[0];
  const [content, setContent] = useState('');
  const [selectedMood, setSelectedMood] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [showPastEntries, setShowPastEntries] = useState(false);
  const [pastEntries, setPastEntries] = useState<ReflectionEntry[]>([]);
  const [dailyPrompt, setDailyPrompt] = useState('');

  // Load today's entry from Supabase
  useEffect(() => {
    loadTodayReflection();

    async function loadTodayReflection() {
      try {
        const res = await fetch(`/api/reflections?date=${today}`);
        const data = await res.json();

        if (data.reflections && data.reflections.length > 0) {
          const reflection = data.reflections[0];
          setContent(reflection.content || '');
          setSelectedMood(reflection.mood || '');
          setTags(reflection.tags || []);
          setDailyPrompt(reflection.prompt || '');
          setLastSaved(reflection.updated_at ? new Date(reflection.updated_at) : null);
        }
      } catch (e) {
        console.error('Error loading reflection:', e);
      }
    }

    // Set daily prompt (consistent per day)
    if (!dailyPrompt) {
      const dayOfYear = Math.floor((new Date().getTime() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
      const promptIndex = dayOfYear % DAILY_PROMPTS.length;
      setDailyPrompt(DAILY_PROMPTS[promptIndex]);
    }
  }, [today, dailyPrompt]);

  // Load past entries from Supabase
  useEffect(() => {
    loadPastEntries();

    async function loadPastEntries() {
      try {
        const res = await fetch('/api/reflections?limit=30');
        const data = await res.json();

        if (data.reflections) {
          const entries: ReflectionEntry[] = data.reflections
            .filter((r: any) => r.date !== today)
            .map((r: any) => ({
              id: r.id,
              date: r.date,
              prompt: r.prompt,
              content: r.content,
              mood: r.mood,
              tags: r.tags || [],
              savedAt: r.updated_at,
            }));

          setPastEntries(entries);
        }
      } catch (e) {
        console.error('Error loading past entries:', e);
      }
    }
  }, [today, lastSaved]);

  // Autosave to Supabase
  useEffect(() => {
    if (!dailyPrompt) return; // Wait for prompt to be set

    const timeoutId = setTimeout(async () => {
      try {
        await fetch('/api/reflections', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            date: today,
            prompt: dailyPrompt,
            content,
            mood: selectedMood,
            tags,
          }),
        });
        setLastSaved(new Date());
      } catch (e) {
        console.error('Error auto-saving reflection:', e);
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [content, selectedMood, tags, today, dailyPrompt]);

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(t => t !== tagToRemove));
  };

  const loadPastEntry = (entry: ReflectionEntry) => {
    setContent(entry.content);
    setSelectedMood(entry.mood);
    setTags(entry.tags);
    setDailyPrompt(entry.prompt);
    setShowPastEntries(false);
  };

  return (
    <div className="h-full flex bg-background">
      {/* Past Entries Sidebar */}
      <div
        className={`${
          showPastEntries ? 'w-80' : 'w-0'
        } border-r bg-background overflow-y-auto transition-all duration-300`}
      >
        {showPastEntries && (
          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground">Past Reflections</h3>
              <Badge variant="outline" className="text-xs">
                {pastEntries.length}
              </Badge>
            </div>
            <div className="space-y-2">
              {pastEntries.map((entry) => (
                <Card
                  key={entry.id}
                  className="p-3 cursor-pointer hover:bg-muted/50 transition-colors border-border"
                  onClick={() => loadPastEntry(entry)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">
                      {new Date(entry.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                    {entry.mood && <span className="text-lg">{entry.mood}</span>}
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {entry.content || 'No content'}
                  </p>
                  {entry.tags.length > 0 && (
                    <div className="flex gap-1 mt-2 flex-wrap">
                      {entry.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="border-b bg-background">
          <div className="container mx-auto max-w-4xl px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowPastEntries(!showPastEntries)}
                >
                  {showPastEntries ? (
                    <>
                      <ChevronLeft className="h-4 w-4 mr-2" />
                      Hide Past
                    </>
                  ) : (
                    <>
                      <ChevronRight className="h-4 w-4 mr-2" />
                      Past Reflections
                    </>
                  )}
                </Button>
                <div className="h-6 w-px bg-border" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {new Date(today).toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {lastSaved && (
                  <span className="text-xs text-muted-foreground">
                    Saved {lastSaved.toLocaleTimeString()}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Editor */}
        <div className="flex-1 overflow-y-auto">
          <div className="container mx-auto max-w-4xl px-8 py-8">
            <div className="space-y-6">
              {/* Prompt */}
              <div>
                <p className="text-xl font-medium text-foreground mb-6 leading-relaxed">
                  {dailyPrompt}
                </p>
              </div>

              {/* Mood & Tags */}
              <div className="flex items-center gap-4 pb-4 border-b border-border">
                {/* Mood Selector */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Mood:</span>
                  <div className="flex gap-2">
                    {MOODS.map((mood) => (
                      <button
                        key={mood}
                        onClick={() => setSelectedMood(mood)}
                        className={`text-2xl transition-all ${
                          selectedMood === mood
                            ? 'scale-125'
                            : 'opacity-50 hover:opacity-100'
                        }`}
                      >
                        {mood}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="h-6 w-px bg-border" />

                {/* Tags */}
                <div className="flex items-center gap-2 flex-1">
                  <span className="text-sm text-muted-foreground">Tags:</span>
                  <div className="flex gap-1 flex-wrap items-center">
                    {tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="cursor-pointer"
                        onClick={() => handleRemoveTag(tag)}
                      >
                        {tag} ×
                      </Badge>
                    ))}
                    <input
                      type="text"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={handleAddTag}
                      placeholder="Add tag..."
                      className="text-sm bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground w-24"
                    />
                  </div>
                </div>
              </div>

              {/* Editor */}
              <Card className="p-8 min-h-[500px] border-border bg-background">
                <textarea
                  className="w-full h-full min-h-[500px] bg-transparent border-none outline-none resize-none text-foreground text-lg leading-relaxed"
                  placeholder="Start writing..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  autoFocus
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
