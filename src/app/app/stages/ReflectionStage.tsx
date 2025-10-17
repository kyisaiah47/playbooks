'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [currentDate, setCurrentDate] = useState(today); // Track which date is being viewed
  const [content, setContent] = useState('');
  const [selectedMood, setSelectedMood] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [showPastEntries, setShowPastEntries] = useState(false);
  const [pastEntries, setPastEntries] = useState<ReflectionEntry[]>([]);
  const [dailyPrompt, setDailyPrompt] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is logged in
  useEffect(() => {
    checkAuth();
    async function checkAuth() {
      try {
        const res = await fetch('/api/auth/me');
        const data = await res.json();
        setIsLoggedIn(!!data.user);
      } catch {
        setIsLoggedIn(false);
      }
    }
  }, []);

  // Load reflection for current date
  useEffect(() => {
    loadReflection();

    async function loadReflection() {
      if (isLoggedIn) {
        // Load from API
        try {
          const res = await fetch(`/api/reflections?date=${currentDate}`);
          const data = await res.json();

          if (data.reflections && data.reflections.length > 0) {
            const reflection = data.reflections[0];
            setContent(reflection.content || '');
            setSelectedMood(reflection.mood || '');
            setTags(reflection.tags || []);
            setDailyPrompt(reflection.prompt || '');
            setLastSaved(reflection.updated_at ? new Date(reflection.updated_at) : null);
          } else {
            clearFields();
          }
        } catch (e) {
          console.error('Error loading reflection:', e);
          clearFields();
        }
      } else {
        // Load from localStorage
        const stored = localStorage.getItem(`reflection-${currentDate}`);
        if (stored) {
          const reflection = JSON.parse(stored);
          setContent(reflection.content || '');
          setSelectedMood(reflection.mood || '');
          setTags(reflection.tags || []);
          setDailyPrompt(reflection.prompt || '');
          setLastSaved(reflection.savedAt ? new Date(reflection.savedAt) : null);
        } else {
          clearFields();
        }
      }
    }

    function clearFields() {
      setContent('');
      setSelectedMood('');
      setTags([]);
      setLastSaved(null);

      // Set daily prompt if viewing today
      if (currentDate === today) {
        const dayOfYear = Math.floor((new Date().getTime() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
        const promptIndex = dayOfYear % DAILY_PROMPTS.length;
        setDailyPrompt(DAILY_PROMPTS[promptIndex]);
      }
    }
  }, [currentDate, today, isLoggedIn]);

  // Load past entries
  useEffect(() => {
    loadPastEntries();

    async function loadPastEntries() {
      if (isLoggedIn) {
        // Load from API
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
      } else {
        // Load from localStorage
        const entries: ReflectionEntry[] = [];
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key && key.startsWith('reflection-') && key !== `reflection-${today}`) {
            const stored = localStorage.getItem(key);
            if (stored) {
              const reflection = JSON.parse(stored);
              entries.push({
                id: key,
                date: key.replace('reflection-', ''),
                prompt: reflection.prompt,
                content: reflection.content,
                mood: reflection.mood,
                tags: reflection.tags || [],
                savedAt: reflection.savedAt,
              });
            }
          }
        }
        entries.sort((a, b) => b.date.localeCompare(a.date));
        setPastEntries(entries.slice(0, 30));
      }
    }
  }, [today, lastSaved, isLoggedIn]);

  // Autosave (only save if viewing current date)
  useEffect(() => {
    if (!dailyPrompt || currentDate !== today) return; // Only autosave for today

    const timeoutId = setTimeout(async () => {
      const now = new Date();
      if (isLoggedIn) {
        // Save to API
        try {
          await fetch('/api/reflections', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              date: currentDate,
              prompt: dailyPrompt,
              content,
              mood: selectedMood,
              tags,
            }),
          });
          setLastSaved(now);
        } catch (e) {
          console.error('Error auto-saving reflection:', e);
        }
      } else {
        // Save to localStorage
        localStorage.setItem(`reflection-${currentDate}`, JSON.stringify({
          date: currentDate,
          prompt: dailyPrompt,
          content,
          mood: selectedMood,
          tags,
          savedAt: now.toISOString(),
        }));
        setLastSaved(now);
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [content, selectedMood, tags, currentDate, today, dailyPrompt, isLoggedIn]);

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
    setCurrentDate(entry.date); // Change the current date being viewed
    setShowPastEntries(false);
  };

  const returnToToday = () => {
    setCurrentDate(today);
  };

  return (
    <div className="h-full flex bg-background">
      {/* Past Entries Sidebar */}
      <motion.div
        className="border-r bg-background overflow-y-auto"
        animate={{ width: showPastEntries ? 320 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <AnimatePresence>
          {showPastEntries && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="p-4 space-y-3"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">Past Reflections</h3>
                <Badge variant="outline" className="text-xs">
                  {pastEntries.length}
                </Badge>
              </div>
              <div className="space-y-2">
                {pastEntries.map((entry, index) => (
                  <motion.div
                    key={entry.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.03 }}
                  >
                    <Card
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
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

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
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-foreground">
                    {new Date(currentDate).toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  {currentDate !== today && (
                    <Button variant="ghost" size="sm" onClick={returnToToday}>
                      Back to Today
                    </Button>
                  )}
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
              <Card className="p-8 min-h-[500px] border-border bg-muted/30">
                <textarea
                  className="w-full h-full min-h-[500px] bg-transparent border-none outline-none resize-none text-foreground text-[16px] leading-relaxed font-normal placeholder:text-muted-foreground/60"
                  placeholder="Start writing your reflection..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  autoFocus
                  style={{ fontFamily: 'inherit' }}
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
