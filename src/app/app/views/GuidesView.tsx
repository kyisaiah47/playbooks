'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import { FileText, BookOpen, ChevronRight, ChevronDown, Save, ArrowLeft, X, AlertCircle, ChevronsUpDown, Check, CheckCircle, Star, Menu, Search } from 'lucide-react';
import { ReadingContent } from '@/components/readings/ReadingContent';
import Link from 'next/link';
import { GuideHeader } from '@/components/app/guides/GuideHeader';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Question {
  id: string;
  question: string;
  categoryName: string;
}

interface Reading {
  id: string;
  title: string;
  excerpt: string;
  readTime: string;
}

interface ReadingDetail extends Reading {
  content: string;
  author: string;
  publishedAt: string;
  sources?: string[];
}

interface Guide {
  id: string;
  name: string;
  category: string;
}

const GUIDES_PER_LOAD = 50;

// Featured guides for demo mode
const FEATURED_GENERAL_IDS = [
  'wedding-planning',
  'job-search',
  'home-buying',
  'business-launch',
];

const FEATURED_GENZ_IDS = [
  'college-planning',
  'first-job-change',
  'first-apartment-independence',
  'content-creator-career',
];

const FEATURED_HEALTH_IDS = [
  'fitness-journey',
  'mental-health',
  'nutrition-planning-system',
  'health-wellness',
];

const FEATURED_GUIDE_IDS = [...FEATURED_GENERAL_IDS, ...FEATURED_GENZ_IDS, ...FEATURED_HEALTH_IDS];

interface GuidesViewProps {
  onViewChange?: (view: 'guides' | 'reflection' | 'overview') => void;
  setActions?: (actions: {
    openGuideDropdown?: () => void;
    selectFirstQuestion?: () => void;
    openFirstReading?: () => void;
  }) => void;
  workspaceId?: string;
  userGuideId?: string;
  defaultGuideId?: string;
}

export function GuidesView({ onViewChange, setActions, workspaceId, userGuideId, defaultGuideId }: GuidesViewProps) {
  const [selectedGuide, setSelectedGuide] = useState(defaultGuideId || 'wedding-planning');

  // Update selectedGuide when defaultGuideId changes
  useEffect(() => {
    if (defaultGuideId && defaultGuideId !== selectedGuide) {
      setSelectedGuide(defaultGuideId);
    }
  }, [defaultGuideId, selectedGuide]);
  const [guides, setGuides] = useState<Guide[]>([]);
  const [displayedGuides, setDisplayedGuides] = useState<Guide[]>([]);
  const [guideInfo, setGuideInfo] = useState<{ id: string; name: string } | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [readings, setReadings] = useState<Reading[]>([]);
  const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(null);
  const [questionResponse, setQuestionResponse] = useState('');
  const [loading, setLoading] = useState(true);
  const [autoSave, setAutoSave] = useState(true);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [selectedReading, setSelectedReading] = useState<ReadingDetail | null>(null);
  const [loadingReading, setLoadingReading] = useState(false);
  const [collapsedCategories, setCollapsedCategories] = useState<Set<string>>(new Set());
  const [open, setOpen] = useState(false);
  const [hasMoreGuides, setHasMoreGuides] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [questionSearchQuery, setQuestionSearchQuery] = useState('');
  const [readingSearchQuery, setReadingSearchQuery] = useState('');
  const [readingContentSearchQuery, setReadingContentSearchQuery] = useState('');

  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<string>>(new Set());
  const [userGuide, setUserGuide] = useState<any | null>(null);

  // Mobile drawer state
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [mobileDrawerTab, setMobileDrawerTab] = useState<'questions' | 'readings'>('questions');
  const [isMobile, setIsMobile] = useState(false);

  // Define handleReadingClick early so it can be used in setActions
  const handleReadingClick = useCallback(async (readingId: string) => {
    console.log('[handleReadingClick] Called with readingId:', readingId);
    try {
      setLoadingReading(true);
      const res = await fetch(`/api/readings?id=${readingId}`);
      const data = await res.json();
      console.log('[handleReadingClick] API response:', data);
      setSelectedReading(data.reading);
      console.log('[handleReadingClick] Set selectedReading to:', data.reading);
    } catch (error) {
      console.error('Error fetching reading:', error);
    } finally {
      setLoadingReading(false);
    }
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Set up actions for parent to call
  useEffect(() => {
    if (setActions) {
      setActions({
        openGuideDropdown: () => {
          setOpen(true);
        },
        selectFirstQuestion: () => {
          if (questions.length > 0) {
            const groupedQuestions = questions.reduce((acc, question) => {
              const category = question.categoryName || 'General';
              if (!acc[category]) {
                acc[category] = [];
              }
              acc[category].push(question);
              return acc;
            }, {} as Record<string, Question[]>);
            const firstCategory = Object.keys(groupedQuestions).sort()[0];
            // Expand first category
            setCollapsedCategories((prev) => {
              const newSet = new Set(prev);
              newSet.delete(firstCategory);
              return newSet;
            });
            // Select first question
            const firstQuestion = groupedQuestions[firstCategory][0];
            if (firstQuestion) {
              setSelectedQuestionId(firstQuestion.id);
            }
          }
        },
        openFirstReading: () => {
          if (readings.length > 0) {
            handleReadingClick(readings[0].id);
          }
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questions, readings, handleReadingClick]);

  // Check authentication status
  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch('/api/auth/me');
        const data = await res.json();
        setIsAuthenticated(!!data.user);
      } catch {
        setIsAuthenticated(false);
      }
    }
    checkAuth();
  }, []);

  // Fetch user guide data if userGuideId is provided
  useEffect(() => {
    async function fetchUserGuide() {
      if (!userGuideId || !isAuthenticated) return;

      try {
        const res = await fetch(`/api/user-guides/${userGuideId}`);

        if (!res.ok) {
          console.error('Failed to fetch user guide:', res.status);
          return;
        }

        const data = await res.json();
        setUserGuide(data.userGuide);
      } catch (error) {
        console.error('Error fetching user guide:', error);
      }
    }

    fetchUserGuide();
  }, [userGuideId, isAuthenticated]);

  // Load data from Supabase (auth) or localStorage (anonymous)
  useEffect(() => {
    if (selectedQuestionId && selectedGuide && isAuthenticated !== null) {
      loadResponse();
    }

    async function loadResponse() {
      try {
        if (isAuthenticated) {
          // Load from Supabase
          const params = new URLSearchParams({
            guideId: selectedGuide,
          });

          // If we have a userGuideId, include it for filtering
          if (userGuideId) {
            params.append('userGuideId', userGuideId);
          }

          const res = await fetch(`/api/workspace/responses?${params.toString()}`);
          const data = await res.json();

          if (data.responses) {
            const response = data.responses.find(
              (r: any) =>
                r.guide_id === selectedGuide && r.question_id === selectedQuestionId
            );

            if (response) {
              setQuestionResponse(response.response || '');
              setLastSaved(response.updated_at ? new Date(response.updated_at) : null);
            } else {
              setQuestionResponse('');
              setLastSaved(null);
            }
          }
        } else {
          // Load from localStorage
          const key = `workspace_${selectedGuide}_${selectedQuestionId}`;
          const saved = localStorage.getItem(key);
          if (saved) {
            try {
              const data = JSON.parse(saved);
              setQuestionResponse(data.response || '');
              setLastSaved(data.savedAt ? new Date(data.savedAt) : null);
            } catch (e) {
              console.error('Error loading from localStorage:', e);
              setQuestionResponse('');
              setLastSaved(null);
            }
          } else {
            setQuestionResponse('');
            setLastSaved(null);
          }
        }
      } catch (e) {
        console.error('Error loading saved data:', e);
        setQuestionResponse('');
        setLastSaved(null);
      }
    }
  }, [selectedQuestionId, selectedGuide, isAuthenticated, userGuideId]);

  // Autosave functionality - save to Supabase or localStorage
  useEffect(() => {
    if (!autoSave || !selectedQuestionId || !selectedGuide || isAuthenticated === null) return;

    const timeoutId = setTimeout(async () => {
      try {
        if (isAuthenticated) {
          // Save to Supabase
          const body: any = {
            guideId: selectedGuide,
            questionId: selectedQuestionId,
            response: questionResponse,
          };

          // Include userGuideId if available
          if (userGuideId) {
            body.userGuideId = userGuideId;
          }

          await fetch('/api/workspace/responses', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
          });
          setLastSaved(new Date());
        } else {
          // Save to localStorage
          const key = `workspace_${selectedGuide}_${selectedQuestionId}`;
          const data = {
            response: questionResponse,
            savedAt: new Date().toISOString(),
          };
          localStorage.setItem(key, JSON.stringify(data));
          setLastSaved(new Date());
        }
      } catch (e) {
        console.error('Error auto-saving:', e);
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [questionResponse, autoSave, selectedQuestionId, selectedGuide, isAuthenticated, userGuideId]);

  // Fetch guides list
  useEffect(() => {
    async function fetchGuides() {
      try {
        const res = await fetch('/api/guides');
        const data = await res.json();
        const allGuides = (data.guides || []).sort((a: Guide, b: Guide) =>
          a.name.localeCompare(b.name)
        );
        setGuides(allGuides);

        // Initially load first batch
        setDisplayedGuides(allGuides.slice(0, GUIDES_PER_LOAD));
        setHasMoreGuides(allGuides.length > GUIDES_PER_LOAD);
      } catch (error) {
        console.error('Error fetching guides:', error);
      }
    }
    fetchGuides();
  }, []);

  // Load more guides
  const loadMoreGuides = () => {
    if (!hasMoreGuides) return;

    const currentLength = displayedGuides.length;
    const nextBatch = guides.slice(currentLength, currentLength + GUIDES_PER_LOAD);

    if (nextBatch.length > 0) {
      setDisplayedGuides(prev => [...prev, ...nextBatch]);
      setHasMoreGuides(currentLength + nextBatch.length < guides.length);
    }
  };

  // Filter guides based on search
  const filteredGuides = searchQuery.trim()
    ? guides.filter(g =>
        g.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        g.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : displayedGuides;

  // Split into featured and regular guides (only when no search)
  // Always pull featured from full guides array to ensure they're included
  const showFeatured = !searchQuery.trim();
  const featuredGeneralGuides = showFeatured
    ? guides.filter(g => FEATURED_GENERAL_IDS.includes(g.id))
    : [];
  const featuredGenZGuides = showFeatured
    ? guides.filter(g => FEATURED_GENZ_IDS.includes(g.id))
    : [];
  const featuredHealthGuides = showFeatured
    ? guides.filter(g => FEATURED_HEALTH_IDS.includes(g.id))
    : [];
  const regularGuides = showFeatured
    ? filteredGuides.filter(g => !FEATURED_GUIDE_IDS.includes(g.id))
    : filteredGuides;

  // Fetch questions and readings when guide changes
  useEffect(() => {
    async function fetchData() {
      if (!selectedGuide) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);

        const guide = guides.find(g => g.id === selectedGuide);
        if (guide) {
          setGuideInfo({ id: guide.id, name: guide.name });
        }

        const questionsRes = await fetch(`/api/guides/${selectedGuide}/questions`);
        const questionsData = await questionsRes.json();
        const fetchedQuestions = questionsData.questions || [];
        setQuestions(fetchedQuestions);

        // Collapse all categories by default
        const groupedQuestions = fetchedQuestions.reduce((acc: Record<string, Question[]>, question: Question) => {
          const category = question.categoryName || 'General';
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(question);
          return acc;
        }, {});
        const allCategories = Object.keys(groupedQuestions);
        setCollapsedCategories(new Set(allCategories));

        const readingsRes = await fetch(`/api/guides/${selectedGuide}/readings`);
        const readingsData = await readingsRes.json();
        setReadings(readingsData.readings || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [selectedGuide, guides]);

  // Check which questions have been answered
  useEffect(() => {
    async function checkAnsweredQuestions() {
      if (isAuthenticated === null || questions.length === 0) return;

      const answered = new Set<string>();

      if (isAuthenticated) {
        // Check API responses
        try {
          const params = new URLSearchParams({
            guideId: selectedGuide,
          });

          // If we have a userGuideId, include it for filtering
          if (userGuideId) {
            params.append('userGuideId', userGuideId);
          }

          const res = await fetch(`/api/workspace/responses?${params.toString()}`);
          const data = await res.json();
          if (data.responses) {
            data.responses.forEach((r: any) => {
              if (r.response && r.response.trim().length > 0) {
                answered.add(r.question_id);
              }
            });
          }
        } catch (e) {
          console.error('Error checking answered questions:', e);
        }
      } else {
        // Check localStorage
        questions.forEach((question) => {
          const key = `workspace_${selectedGuide}_${question.id}`;
          const saved = localStorage.getItem(key);
          if (saved) {
            try {
              const data = JSON.parse(saved);
              if (data.response && data.response.trim().length > 0) {
                answered.add(question.id);
              }
            } catch (e) {
              // Ignore parse errors
            }
          }
        });
      }

      // Optimistically show checkmark for current question if it has content
      if (selectedQuestionId && questionResponse.trim().length > 0) {
        answered.add(selectedQuestionId);
      }

      setAnsweredQuestions(answered);
    }

    checkAnsweredQuestions();
  }, [selectedGuide, questions, isAuthenticated, lastSaved, selectedQuestionId, questionResponse, userGuideId]);

  const handleGuideChange = (newGuideId: string) => {
    setSelectedGuide(newGuideId);
    setSelectedQuestionId(null);
    setQuestionResponse('');
    setSearchQuery('');
    setOpen(false);
  };

  const handleCloseReading = () => {
    setSelectedReading(null);
    setReadingContentSearchQuery(''); // Clear search when closing reading
  };

  const toggleCategory = (category: string) => {
    setCollapsedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  };

  const handleManualSave = async () => {
    if (selectedQuestionId && selectedGuide) {
      try {
        if (isAuthenticated) {
          // Save to Supabase
          const body: any = {
            guideId: selectedGuide,
            questionId: selectedQuestionId,
            response: questionResponse,
          };

          // Include userGuideId if available
          if (userGuideId) {
            body.userGuideId = userGuideId;
          }

          await fetch('/api/workspace/responses', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
          });
          setLastSaved(new Date());
        } else {
          // Save to localStorage
          const key = `workspace_${selectedGuide}_${selectedQuestionId}`;
          const data = {
            response: questionResponse,
            savedAt: new Date().toISOString(),
          };
          localStorage.setItem(key, JSON.stringify(data));
          setLastSaved(new Date());
        }
      } catch (e) {
        console.error('Error saving:', e);
      }
    }
  };

  // Filter questions based on search query
  const filteredQuestions = questionSearchQuery.trim()
    ? questions.filter(q =>
        q.question.toLowerCase().includes(questionSearchQuery.toLowerCase()) ||
        (q.categoryName && q.categoryName.toLowerCase().includes(questionSearchQuery.toLowerCase()))
      )
    : questions;

  const groupedQuestions = filteredQuestions.reduce((acc, question) => {
    const category = question.categoryName || 'General';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(question);
    return acc;
  }, {} as Record<string, Question[]>);

  const categories = Object.keys(groupedQuestions).sort();
  const selectedQuestion = questions.find(q => q.id === selectedQuestionId);

  // Auto-expand all categories when filtering
  useEffect(() => {
    if (questionSearchQuery.trim()) {
      // Expand all categories when searching
      setCollapsedCategories(new Set());
    } else {
      // Collapse all categories when filter is cleared
      const allCategories = Object.keys(questions.reduce((acc, question) => {
        const category = question.categoryName || 'General';
        acc[category] = true;
        return acc;
      }, {} as Record<string, boolean>));
      setCollapsedCategories(new Set(allCategories));
    }
  }, [questionSearchQuery, questions]);

  // Filter readings based on search query
  const filteredReadings = readingSearchQuery.trim()
    ? readings.filter(r =>
        r.title.toLowerCase().includes(readingSearchQuery.toLowerCase()) ||
        r.excerpt.toLowerCase().includes(readingSearchQuery.toLowerCase())
      )
    : readings;

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Anonymous User Banner */}
      {isAuthenticated === false && (
        <div className="bg-yellow-500/10 border-b border-yellow-500/20 px-4 py-3">
          <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <AlertCircle className="h-4 w-4 text-yellow-600 dark:text-yellow-500 flex-shrink-0" />
              <span className="text-foreground">
                <span className="hidden sm:inline">Your work is saved locally in your browser. Create an account to save permanently and access from any device.</span>
                <span className="sm:hidden">Saved locally. Sign up to sync across devices.</span>
              </span>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto">
              <Link href="/signup" className="flex-1 sm:flex-initial">
                <Button size="sm" variant="default" className="w-full sm:w-auto">Sign Up</Button>
              </Link>
              <Link href="/login" className="flex-1 sm:flex-initial">
                <Button size="sm" variant="ghost" className="w-full sm:w-auto">Log In</Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Guide Header - Only show in workspace context */}
      {userGuideId && userGuide && (
        <GuideHeader
          guideName={userGuide.custom_name || userGuide.guides?.name || guideInfo?.name || 'Guide'}
          guideIcon={userGuide.custom_icon || userGuide.guides?.icon}
          coverImage={userGuide.custom_cover_image}
          progress={userGuide.progress || 0}
          guideName={guideInfo?.name}
          onNameChange={async (newName) => {
            try {
              const res = await fetch(`/api/user-guides/${userGuideId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: newName }),
              });
              if (res.ok) {
                const data = await res.json();
                setUserGuide(data.userGuide);
              }
            } catch (error) {
              console.error('Error updating guide name:', error);
            }
          }}
          onIconChange={async (newIcon) => {
            try {
              console.log('Updating icon to:', newIcon);
              const res = await fetch(`/api/user-guides/${userGuideId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ icon: newIcon }),
              });
              console.log('Response status:', res.status);
              if (res.ok) {
                const data = await res.json();
                console.log('Updated userGuide:', data.userGuide);
                setUserGuide(data.userGuide);
              } else {
                const errorData = await res.json();
                console.error('Error response:', errorData);
              }
            } catch (error) {
              console.error('Error updating guide icon:', error);
            }
          }}
          onCoverChange={async (coverUrl) => {
            try {
              const res = await fetch(`/api/user-guides/${userGuideId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ cover_image: coverUrl }),
              });
              if (res.ok) {
                const data = await res.json();
                setUserGuide(data.userGuide);
              }
            } catch (error) {
              console.error('Error updating cover image:', error);
            }
          }}
        />
      )}

      {/* Main Content - 3 Column Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Questions (Desktop only) */}
        <div className="hidden md:block w-80 border-r bg-background overflow-y-auto">
          <div className="p-4 space-y-4">
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="h-4 w-4 text-primary" />
                <h2 className="font-semibold text-foreground">Questions</h2>
                <Badge variant="outline" className="ml-auto text-xs">
                  {questions.length}
                </Badge>
              </div>
              <Input
                type="text"
                placeholder="Filter questions..."
                value={questionSearchQuery}
                onChange={(e) => setQuestionSearchQuery(e.target.value)}
                className="h-8 text-sm mb-2"
              />
              <p className="text-xs text-muted-foreground">
                Select a question, write your answer, and see a checkmark appear
              </p>
            </div>

            {loading ? (
              <p className="text-sm text-muted-foreground">Loading questions...</p>
            ) : categories.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                {questionSearchQuery.trim() ? 'No questions match your search' : 'No questions available'}
              </p>
            ) : (
              <div className="space-y-4">
                {categories.map((category) => (
                  <div key={category} className="space-y-2">
                    <button
                      onClick={() => toggleCategory(category)}
                      className="flex items-center gap-2 w-full text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider hover:text-foreground transition-colors"
                    >
                      <motion.div
                        animate={{ rotate: collapsedCategories.has(category) ? -90 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-3 w-3" />
                      </motion.div>
                      {category}
                    </button>
                    <AnimatePresence initial={false}>
                      {!collapsedCategories.has(category) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-1 overflow-hidden"
                        >
                          {groupedQuestions[category].map((question, index) => (
                            <motion.button
                              key={question.id}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: index * 0.03 }}
                              onClick={() => setSelectedQuestionId(question.id)}
                              className={`w-full text-left p-3 rounded-lg transition-colors text-sm flex items-start gap-2 ${
                                selectedQuestionId === question.id
                                  ? 'bg-primary/10 text-primary border border-primary/20'
                                  : 'bg-muted/50 text-foreground hover:bg-muted'
                              }`}
                            >
                              {answeredQuestions.has(question.id) && (
                                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 flex-shrink-0 mt-0.5" />
                              )}
                              <span className="flex-1">{question.question}</span>
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Middle - Editor */}
        <div className="flex-1 overflow-y-auto bg-background">
          <div className="container mx-auto max-w-4xl px-4 md:px-8 py-4 md:py-8 h-full">
            <AnimatePresence mode="wait">
              {selectedQuestion ? (
                <motion.div
                  key={selectedQuestionId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="h-full flex flex-col gap-4 md:gap-6"
                >
                  <div>
                    <Badge variant="outline" className="mb-2 md:mb-3 text-xs">
                      {selectedQuestion.categoryName}
                    </Badge>
                    <h2 className="text-lg md:text-xl font-bold text-foreground mb-2">
                      {selectedQuestion.question}
                    </h2>
                    <p className="text-xs md:text-sm text-muted-foreground hidden md:block">
                      {autoSave
                        ? 'Your work is automatically saved as you type'
                        : 'Remember to save your work manually'}
                    </p>
                  </div>

                  <Card className="p-4 md:p-8 flex-1 border-border bg-muted/30">
                    <textarea
                      className="w-full h-full bg-transparent border-none outline-none resize-none text-foreground text-[15px] leading-relaxed font-normal placeholder:text-muted-foreground/60"
                      placeholder="Start writing your response here..."
                      value={questionResponse}
                      onChange={(e) => setQuestionResponse(e.target.value)}
                      style={{ fontFamily: 'inherit' }}
                    />
                  </Card>
                </motion.div>
              ) : (
                <motion.div
                  key="empty-state"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center h-full"
                >
                  <div className="text-center space-y-2">
                    <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground">
                      Select a question to begin
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-md">
                      Choose a question from the left sidebar to start working on your guide
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Sidebar - Readings or Reading Content (Desktop only) */}
        <motion.div
          className="hidden md:block border-l bg-background overflow-y-auto"
          animate={{ width: selectedReading ? 600 : 320 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className="p-6 space-y-4">
            <AnimatePresence mode="wait">
              {selectedReading ? (
                <motion.div
                  key="reading-detail"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleCloseReading}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to readings
                      </Button>
                    </div>

                    {/* Floating search bar */}
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                      <Input
                        type="text"
                        placeholder="Search in reading..."
                        value={readingContentSearchQuery}
                        onChange={(e) => setReadingContentSearchQuery(e.target.value)}
                        className="h-9 text-sm pl-9"
                      />
                    </div>
                  </div>

                  {loadingReading ? (
                    <div className="py-8 text-center">
                      <p className="text-muted-foreground">Loading reading...</p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <header>
                        <h2 className="text-2xl font-bold text-foreground mb-4">
                          {selectedReading.title}
                        </h2>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span>{selectedReading.author}</span>
                          <span>•</span>
                          <span>{selectedReading.readTime} min read</span>
                          <span>•</span>
                          <span>{new Date(selectedReading.publishedAt).toLocaleDateString()}</span>
                        </div>
                      </header>

                      {selectedReading.sources && selectedReading.sources.length > 0 && (
                        <Card className="p-4 bg-muted/30 border-border">
                          <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
                            <BookOpen className="h-4 w-4" />
                            Sources
                          </h3>
                          <ul className="text-sm space-y-1 text-muted-foreground">
                            {selectedReading.sources.map((source, i) => (
                              <li key={i}>• {source}</li>
                            ))}
                          </ul>
                        </Card>
                      )}

                      <ReadingContent content={selectedReading.content} searchQuery={readingContentSearchQuery} />
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="reading-list"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <h2 className="font-semibold text-foreground">Readings</h2>
                      <Badge variant="outline" className="ml-auto text-xs">
                        {readings.length}
                      </Badge>
                    </div>
                    <Input
                      type="text"
                      placeholder="Filter readings..."
                      value={readingSearchQuery}
                      onChange={(e) => setReadingSearchQuery(e.target.value)}
                      className="h-8 text-sm mb-2"
                    />
                    <p className="text-xs text-muted-foreground">
                      Read to help guide your responses
                    </p>
                  </div>

                  {loading ? (
                    <p className="text-sm text-muted-foreground">Loading readings...</p>
                  ) : filteredReadings.length === 0 ? (
                    <p className="text-sm text-muted-foreground">
                      {readingSearchQuery.trim() ? 'No readings match your search' : 'No readings available'}
                    </p>
                  ) : (
                    <div className="space-y-3">
                      {filteredReadings.map((reading, index) => (
                        <motion.div
                          key={reading.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <Card
                            className="p-4 cursor-pointer hover:bg-muted/50 transition-colors border-border"
                            onClick={() => handleReadingClick(reading.id)}
                          >
                            <h3 className="text-sm font-medium text-foreground mb-1">
                              {reading.title}
                            </h3>
                            <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                              {reading.excerpt}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <span>{reading.readTime} min read</span>
                              <ChevronRight className="h-3 w-3 ml-auto" />
                            </div>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Mobile Reading Viewer */}
      {isMobile && selectedReading && (
        <Drawer open={!!selectedReading} onOpenChange={(open) => !open && handleCloseReading()}>
          <DrawerContent className="max-h-[90vh]">
            <DrawerHeader>
              <div className="flex items-center justify-between mb-3">
                <DrawerTitle className="text-left">{selectedReading.title}</DrawerTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCloseReading}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                <span>{selectedReading.author}</span>
                <span>•</span>
                <span>{selectedReading.readTime} min read</span>
              </div>
              {/* Search bar for mobile */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                <Input
                  type="text"
                  placeholder="Search in reading..."
                  value={readingContentSearchQuery}
                  onChange={(e) => setReadingContentSearchQuery(e.target.value)}
                  className="h-9 text-sm pl-9"
                />
              </div>
            </DrawerHeader>
            <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-4">
              {loadingReading ? (
                <div className="py-8 text-center">
                  <p className="text-muted-foreground">Loading reading...</p>
                </div>
              ) : (
                <>
                  {selectedReading.sources && selectedReading.sources.length > 0 && (
                    <Card className="p-4 bg-muted/30 border-border">
                      <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        Sources
                      </h3>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        {selectedReading.sources.map((source, i) => (
                          <li key={i}>• {source}</li>
                        ))}
                      </ul>
                    </Card>
                  )}
                  <ReadingContent content={selectedReading.content} searchQuery={readingContentSearchQuery} />
                </>
              )}
            </div>
          </DrawerContent>
        </Drawer>
      )}

      {/* Mobile Drawer - Questions & Readings */}
      {isMobile && (
        <Drawer open={mobileDrawerOpen} onOpenChange={setMobileDrawerOpen}>
          <DrawerTrigger asChild>
            <Button
              size="lg"
              className="fixed bottom-6 right-6 z-40 rounded-full w-14 h-14 shadow-lg"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="max-h-[85vh]">
          <DrawerHeader>
            <DrawerTitle>Browse</DrawerTitle>
          </DrawerHeader>

          <Tabs value={mobileDrawerTab} onValueChange={(v) => setMobileDrawerTab(v as 'questions' | 'readings')} className="flex-1 flex flex-col overflow-hidden">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="questions" className="gap-1.5">
                <FileText className="h-4 w-4" />
                <span>Questions</span>
              </TabsTrigger>
              <TabsTrigger value="readings" className="gap-1.5">
                <BookOpen className="h-4 w-4" />
                <span>Readings</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="questions" className="flex-1 overflow-y-auto px-4 mt-0">
              <div className="space-y-4 py-4">
                <Input
                  type="text"
                  placeholder="Filter questions..."
                  value={questionSearchQuery}
                  onChange={(e) => setQuestionSearchQuery(e.target.value)}
                  className="h-8 text-sm -mt-2"
                />
                <p className="text-xs text-muted-foreground -mt-2">
                  Select a question, write your answer, and see a checkmark appear
                </p>
                {loading ? (
                  <p className="text-sm text-muted-foreground">Loading questions...</p>
                ) : categories.length === 0 ? (
                  <p className="text-sm text-muted-foreground">
                    {questionSearchQuery.trim() ? 'No questions match your search' : 'No questions available'}
                  </p>
                ) : (
                  <div className="space-y-4">
                    {categories.map((category) => (
                      <div key={category} className="space-y-2">
                        <button
                          onClick={() => toggleCategory(category)}
                          className="flex items-center gap-2 w-full text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider hover:text-foreground transition-colors"
                        >
                          <motion.div
                            animate={{ rotate: collapsedCategories.has(category) ? -90 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="h-3 w-3" />
                          </motion.div>
                          {category}
                        </button>
                        <AnimatePresence initial={false}>
                          {!collapsedCategories.has(category) && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="space-y-1 overflow-hidden"
                            >
                              {groupedQuestions[category].map((question) => (
                                <button
                                  key={question.id}
                                  onClick={() => {
                                    setSelectedQuestionId(question.id);
                                    setMobileDrawerOpen(false);
                                  }}
                                  className={`w-full text-left p-3 rounded-lg transition-colors text-sm flex items-start gap-2 ${
                                    selectedQuestionId === question.id
                                      ? 'bg-primary/10 text-primary border border-primary/20'
                                      : 'bg-muted/50 text-foreground hover:bg-muted'
                                  }`}
                                >
                                  {answeredQuestions.has(question.id) && (
                                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 flex-shrink-0 mt-0.5" />
                                  )}
                                  <span className="flex-1">{question.question}</span>
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="readings" className="flex-1 overflow-y-auto px-4 mt-0">
              <div className="space-y-4 py-4">
                <Input
                  type="text"
                  placeholder="Filter readings..."
                  value={readingSearchQuery}
                  onChange={(e) => setReadingSearchQuery(e.target.value)}
                  className="h-8 text-sm -mt-2"
                />
                {loading ? (
                  <p className="text-sm text-muted-foreground">Loading readings...</p>
                ) : filteredReadings.length === 0 ? (
                  <p className="text-sm text-muted-foreground">
                    {readingSearchQuery.trim() ? 'No readings match your search' : 'No readings available for this guide yet.'}
                  </p>
                ) : (
                  <div className="space-y-2">
                    {filteredReadings.map((reading) => (
                      <Card
                        key={reading.id}
                        className="p-4 cursor-pointer hover:bg-muted/50 transition-colors border-border"
                        onClick={() => {
                          handleReadingClick(reading.id);
                          setMobileDrawerOpen(false);
                        }}
                      >
                        <h3 className="text-sm font-medium text-foreground mb-1">
                          {reading.title}
                        </h3>
                        <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                          {reading.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>{reading.readTime} min read</span>
                          <ChevronRight className="h-3 w-3 ml-auto" />
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </DrawerContent>
        </Drawer>
      )}
    </div>
  );
}
