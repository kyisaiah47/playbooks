'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LayoutGrid, Calendar, BarChart3, FileText, Heart, TrendingUp, Flame, Download } from 'lucide-react';
import jsPDF from 'jspdf';

interface TemplateProgress {
  templateId: string;
  templateName: string;
  promptsCompleted: number;
  totalPrompts: number;
  lastWorked: string;
}

interface ReflectionSummary {
  date: string;
  mood: string;
  tags: string[];
  wordCount: number;
}

interface ReflectionDetail {
  id: string;
  date: string;
  content: string;
  mood: string;
  tags: string[];
  prompt?: string;
}

interface ActivityDay {
  date: string;
  reflections: number;
  promptsWorked: number;
}

interface Response {
  prompt_id: string;
  prompt: string;
  response: string;
  category: string;
  updated_at: string;
}

interface TemplateResponses {
  templateId: string;
  templateName: string;
  responses: Response[];
  totalPrompts: number;
}

export function OverviewView() {
  const [view, setView] = useState<'board' | 'timeline' | 'insights' | 'responses' | 'reflections'>('board');
  const [templateResponses, setTemplateResponses] = useState<TemplateResponses[]>([]);
  const [templates, setTemplates] = useState<TemplateProgress[]>([]);
  const [reflections, setReflections] = useState<ReflectionSummary[]>([]);
  const [reflectionDetails, setReflectionDetails] = useState<ReflectionDetail[]>([]);
  const [activityData, setActivityData] = useState<ActivityDay[]>([]);
  const [boardFilter, setBoardFilter] = useState<'all' | 'in-progress' | 'completed'>('all');
  const [selectedTemplateId, setSelectedTemplateId] = useState<string | null>(null);
  const [selectedDay, setSelectedDay] = useState<ActivityDay | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
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

  useEffect(() => {
    if (isLoggedIn !== null) {
      loadData();
      loadResponses();
    }
  }, [isLoggedIn]);

  // Check if we should navigate to specific tab
  useEffect(() => {
    const targetTab = sessionStorage.getItem('overview-tab');
    if (targetTab === 'responses' || targetTab === 'reflections') {
      setView(targetTab);
      sessionStorage.removeItem('overview-tab');
    }
  }, []);

  const loadResponses = async () => {
    try {
      const responsesMap = new Map<string, TemplateResponses>();
      const templatePromptsCache = new Map<string, any[]>();

      if (isLoggedIn) {
        // Fetch all responses from API
        const res = await fetch('/api/workspace/responses');
        const data = await res.json();

        if (data.responses) {
          // For each response, fetch the prompt details
          for (const response of data.responses) {
            if (!response.response || !response.response.trim()) continue;

            const templateId = response.template_id;

            // Fetch prompts for this template if not already fetched
            if (!templatePromptsCache.has(templateId)) {
              const promptsRes = await fetch(`/api/prompts?templateId=${templateId}`);
              const promptsData = await promptsRes.json();
              templatePromptsCache.set(templateId, promptsData.prompts || []);
            }

            const prompts = templatePromptsCache.get(templateId)!;
            const prompt = prompts.find((p: any) => p.id === response.prompt_id);

            if (!prompt) continue;

            if (!responsesMap.has(templateId)) {
              responsesMap.set(templateId, {
                templateId,
                templateName: templateId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                responses: [],
                totalPrompts: prompts.length,
              });
            }

            responsesMap.get(templateId)!.responses.push({
              prompt_id: response.prompt_id,
              prompt: prompt.prompt,
              response: response.response,
              category: prompt.categoryName || 'General',
              updated_at: response.updated_at,
            });
          }
        }
      } else {
        // Load from localStorage
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key && key.startsWith('workspace_')) {
            const stored = localStorage.getItem(key);
            if (stored) {
              try {
                const data = JSON.parse(stored);
                if (!data.response || !data.response.trim()) continue;

                const parts = key.split('_');
                if (parts.length >= 3) {
                  const templateId = parts[1];
                  const promptId = parts[2];

                  // Fetch prompts for this template if not cached
                  if (!templatePromptsCache.has(templateId)) {
                    const promptsRes = await fetch(`/api/prompts?templateId=${templateId}`);
                    const promptsData = await promptsRes.json();
                    templatePromptsCache.set(templateId, promptsData.prompts || []);
                  }

                  const prompts = templatePromptsCache.get(templateId)!;
                  const prompt = prompts.find((p: any) => p.id === promptId);

                  if (!prompt) continue;

                  if (!responsesMap.has(templateId)) {
                    responsesMap.set(templateId, {
                      templateId,
                      templateName: templateId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                      responses: [],
                      totalPrompts: prompts.length,
                    });
                  }

                  responsesMap.get(templateId)!.responses.push({
                    prompt_id: promptId,
                    prompt: prompt.prompt,
                    response: data.response,
                    category: prompt.categoryName || 'General',
                    updated_at: data.savedAt,
                  });
                }
              } catch (e) {
                console.error('Error parsing localStorage data:', e);
              }
            }
          }
        }
      }

      // Sort responses within each template by category and updated date
      const sorted = Array.from(responsesMap.values()).map(template => ({
        ...template,
        responses: template.responses.sort((a, b) => {
          if (a.category !== b.category) return a.category.localeCompare(b.category);
          return b.updated_at.localeCompare(a.updated_at);
        }),
      }));

      setTemplateResponses(sorted);

      // Set first template as selected by default
      if (sorted.length > 0 && !selectedTemplateId) {
        setSelectedTemplateId(sorted[0].templateId);
      }
    } catch (error) {
      console.error('Error loading responses:', error);
    }
  };

  const loadData = async () => {
    try {
      const templateMap = new Map<string, TemplateProgress>();
      const reflectionsList: ReflectionSummary[] = [];

      if (isLoggedIn) {
        // Fetch workspace responses from API
        const workspaceRes = await fetch('/api/workspace/responses');
        const workspaceData = await workspaceRes.json();

        // Fetch reflections from API
        const reflectionsRes = await fetch('/api/reflections');
        const reflectionsData = await reflectionsRes.json();

        // Process workspace data
        if (workspaceData.responses) {
          workspaceData.responses.forEach((response: any) => {
            const templateId = response.template_id;

            if (!templateMap.has(templateId)) {
              templateMap.set(templateId, {
                templateId,
                templateName: templateId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                promptsCompleted: 0,
                totalPrompts: 0,
                lastWorked: '',
              });
            }

            const template = templateMap.get(templateId)!;

            if (response.response && response.response.trim()) {
              template.promptsCompleted++;
            }
            template.totalPrompts++;

            if (response.updated_at && (!template.lastWorked || response.updated_at > template.lastWorked)) {
              template.lastWorked = response.updated_at;
            }
          });
        }

        // Process reflections data
        if (reflectionsData.reflections) {
          const details: ReflectionDetail[] = [];
          reflectionsData.reflections.forEach((reflection: any) => {
            if (reflection.content) {
              reflectionsList.push({
                date: reflection.date,
                mood: reflection.mood || '',
                tags: reflection.tags || [],
                wordCount: reflection.content.split(/\s+/).length,
              });
              details.push({
                id: reflection.id || reflection.date,
                date: reflection.date,
                content: reflection.content,
                mood: reflection.mood || '',
                tags: reflection.tags || [],
                prompt: reflection.prompt,
              });
            }
          });
          setReflectionDetails(details.sort((a, b) => b.date.localeCompare(a.date)));
        }
      } else {
        // Load from localStorage for anonymous users

        // Process workspace data from localStorage
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key && key.startsWith('workspace_')) {
            const stored = localStorage.getItem(key);
            if (stored) {
              try {
                const data = JSON.parse(stored);
                const parts = key.split('_');
                if (parts.length >= 2) {
                  const templateId = parts[1];

                  if (!templateMap.has(templateId)) {
                    templateMap.set(templateId, {
                      templateId,
                      templateName: templateId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                      promptsCompleted: 0,
                      totalPrompts: 0,
                      lastWorked: '',
                    });
                  }

                  const template = templateMap.get(templateId)!;
                  template.totalPrompts++;

                  if (data.response && data.response.trim()) {
                    template.promptsCompleted++;
                  }

                  if (data.savedAt && (!template.lastWorked || data.savedAt > template.lastWorked)) {
                    template.lastWorked = data.savedAt;
                  }
                }
              } catch (e) {
                console.error('Error parsing localStorage workspace data:', e);
              }
            }
          }
        }

        // Process reflections from localStorage
        const details: ReflectionDetail[] = [];
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key && key.startsWith('reflection-')) {
            const stored = localStorage.getItem(key);
            if (stored) {
              try {
                const reflection = JSON.parse(stored);
                if (reflection.content) {
                  reflectionsList.push({
                    date: reflection.date,
                    mood: reflection.mood || '',
                    tags: reflection.tags || [],
                    wordCount: reflection.content.split(/\s+/).length,
                  });
                  details.push({
                    id: key,
                    date: reflection.date,
                    content: reflection.content,
                    mood: reflection.mood || '',
                    tags: reflection.tags || [],
                    prompt: reflection.prompt,
                  });
                }
              } catch (e) {
                console.error('Error parsing localStorage reflection data:', e);
              }
            }
          }
        }
        setReflectionDetails(details.sort((a, b) => b.date.localeCompare(a.date)));
      }

      setTemplates(Array.from(templateMap.values()).filter(t => t.promptsCompleted > 0));
      setReflections(reflectionsList.sort((a, b) => b.date.localeCompare(a.date)));

      // Generate activity data (last 30 days)
      const activity: ActivityDay[] = [];
      const today = new Date();

      for (let i = 29; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const dateStr = date.toISOString().split('T')[0];

        activity.push({
          date: dateStr,
          reflections: reflectionsList.filter(r => r.date === dateStr).length,
          promptsWorked: Array.from(templateMap.values()).reduce((count, t) => {
            return count + (t.lastWorked?.startsWith(dateStr) ? 1 : 0);
          }, 0),
        });
      }

      setActivityData(activity);
    } catch (error) {
      console.error('Error loading Life OS data:', error);
    }
  };

  const totalReflections = reflections.length;
  const totalTemplates = templates.length;
  const totalPromptsCompleted = templates.reduce((sum, t) => sum + t.promptsCompleted, 0);
  const avgWordsPerReflection = reflections.length > 0
    ? Math.round(reflections.reduce((sum, r) => sum + r.wordCount, 0) / reflections.length)
    : 0;

  // Filter templates based on boardFilter
  const filteredTemplates = templates.filter(t => {
    if (boardFilter === 'all') return true;
    const isCompleted = t.promptsCompleted === t.totalPrompts;
    if (boardFilter === 'completed') return isCompleted;
    if (boardFilter === 'in-progress') return !isCompleted;
    return true;
  });

  // Calculate longest streak
  const longestStreak = (() => {
    let maxStreak = 0;
    let currentStreak = 0;

    activityData.forEach((day) => {
      if (day.reflections > 0 || day.promptsWorked > 0) {
        currentStreak++;
        maxStreak = Math.max(maxStreak, currentStreak);
      } else {
        currentStreak = 0;
      }
    });

    return maxStreak;
  })();

  // Calculate top themes from reflection tags
  const topThemes = (() => {
    const tagCounts: Record<string, number> = {};
    reflections.forEach(r => {
      r.tags.forEach(tag => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    });

    return Object.entries(tagCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([tag]) => tag);
  })();

  // Export functions
  const exportResponsesAsText = (template: TemplateResponses) => {
    let content = `${template.templateName}\n`;
    content += `${'='.repeat(template.templateName.length)}\n\n`;

    template.responses.forEach((response, index) => {
      content += `${index + 1}. ${response.prompt}\n\n`;
      content += `${response.response}\n\n`;
      content += `---\n\n`;
    });

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${template.templateId}-responses.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportResponsesAsPDF = (template: TemplateResponses) => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 25;
    const maxWidth = pageWidth - 2 * margin;
    let yPosition = margin;

    // Helper function to add footer
    const addFooter = (pageNum: number) => {
      doc.setFontSize(8);
      doc.setTextColor(128, 128, 128);
      doc.text('Generated by Templata', margin, pageHeight - 10);
      doc.text(`Page ${pageNum}`, pageWidth - margin - 15, pageHeight - 10);
      doc.setTextColor(0, 0, 0);
    };

    let pageNum = 1;

    // Add logo
    doc.addImage('/brand/templata-logo.jpg', 'JPEG', margin, yPosition, 10, 10);

    // Header with title
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0);
    doc.text('Templata', margin + 12, yPosition + 7);
    yPosition += 20;

    // Subtitle
    doc.setFontSize(10);
    doc.setTextColor(128, 128, 128);
    doc.text('Your Responses', margin, yPosition);
    yPosition += 15;

    // Template name
    doc.setFontSize(20);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'bold');
    const titleLines = doc.splitTextToSize(template.templateName, maxWidth);
    doc.text(titleLines, margin, yPosition);
    yPosition += titleLines.length * 8 + 5;

    // Metadata
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 100, 100);
    doc.text(`${template.responses.length} ${template.responses.length === 1 ? 'response' : 'responses'} · Exported on ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`, margin, yPosition);
    yPosition += 15;

    // Separator line
    doc.setDrawColor(200, 200, 200);
    doc.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 15;

    // Responses
    template.responses.forEach((response, index) => {
      // Check if we need a new page
      if (yPosition > pageHeight - 40) {
        addFooter(pageNum);
        doc.addPage();
        pageNum++;
        yPosition = margin;
      }

      // Question number and category badge
      doc.setFontSize(9);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 0, 0);
      doc.text(`Q${index + 1}`, margin, yPosition);

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(128, 128, 128);
      doc.text(`${response.category}`, margin + 15, yPosition);
      yPosition += 8;

      // Question
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 0, 0);
      const questionLines = doc.splitTextToSize(response.prompt, maxWidth);
      doc.text(questionLines, margin, yPosition);
      yPosition += questionLines.length * 6 + 5;

      // Answer
      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(50, 50, 50);
      const answerLines = doc.splitTextToSize(response.response, maxWidth);
      doc.text(answerLines, margin, yPosition);
      yPosition += answerLines.length * 5 + 15;

      // Light separator between responses
      if (index < template.responses.length - 1) {
        doc.setDrawColor(230, 230, 230);
        doc.line(margin, yPosition, pageWidth - margin, yPosition);
        yPosition += 15;
      }
    });

    addFooter(pageNum);
    doc.save(`${template.templateId}-responses.pdf`);
  };

  const exportReflectionsAsText = () => {
    let content = `My Reflections\n`;
    content += `${'='.repeat(14)}\n\n`;

    reflectionDetails.forEach((reflection) => {
      const date = new Date(reflection.date + 'T00:00:00').toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      });
      content += `${date}${reflection.mood ? ' ' + reflection.mood : ''}\n\n`;
      if (reflection.prompt) {
        content += `"${reflection.prompt}"\n\n`;
      }
      content += `${reflection.content}\n\n`;
      if (reflection.tags.length > 0) {
        content += `Tags: ${reflection.tags.join(', ')}\n\n`;
      }
      content += `---\n\n`;
    });

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `reflections.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Helper function to convert emoji moods to text
  const emojiToText = (emoji: string): string => {
    const moodMap: Record<string, string> = {
      '😊': 'Happy',
      '😃': 'Happy',
      '😄': 'Happy',
      '😁': 'Happy',
      '🙂': 'Content',
      '😌': 'Peaceful',
      '😢': 'Sad',
      '😭': 'Sad',
      '😔': 'Down',
      '😞': 'Disappointed',
      '😡': 'Angry',
      '😠': 'Angry',
      '😤': 'Frustrated',
      '😰': 'Anxious',
      '😨': 'Worried',
      '😓': 'Stressed',
      '😩': 'Tired',
      '😴': 'Sleepy',
      '🤔': 'Thoughtful',
      '🥳': 'Excited',
      '😍': 'Grateful',
      '🤗': 'Grateful',
      '😎': 'Confident',
      '🥰': 'Loved',
      '❤️': 'Loved',
    };
    return moodMap[emoji] || emoji;
  };

  const exportReflectionsAsPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 25;
    const maxWidth = pageWidth - 2 * margin;
    let yPosition = margin;

    // Helper function to add footer
    const addFooter = (pageNum: number) => {
      doc.setFontSize(8);
      doc.setTextColor(128, 128, 128);
      doc.text('Generated by Templata', margin, pageHeight - 10);
      doc.text(`Page ${pageNum}`, pageWidth - margin - 15, pageHeight - 10);
      doc.setTextColor(0, 0, 0);
    };

    let pageNum = 1;

    // Add logo
    doc.addImage('/brand/templata-logo.jpg', 'JPEG', margin, yPosition, 10, 10);

    // Header with title
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0);
    doc.text('Templata', margin + 12, yPosition + 7);
    yPosition += 25;

    // Title
    doc.setFontSize(20);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'bold');
    doc.text('My Reflections', margin, yPosition);
    yPosition += 13;

    // Metadata
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 100, 100);
    doc.text(`${reflectionDetails.length} ${reflectionDetails.length === 1 ? 'entry' : 'entries'} · Exported on ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`, margin, yPosition);
    yPosition += 15;

    // Separator line
    doc.setDrawColor(200, 200, 200);
    doc.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 15;

    // Reflections
    reflectionDetails.forEach((reflection, index) => {
      // Check if we need a new page
      if (yPosition > pageHeight - 40) {
        addFooter(pageNum);
        doc.addPage();
        pageNum++;
        yPosition = margin;
      }

      // Date with mood as text
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 0, 0);
      const date = new Date(reflection.date + 'T00:00:00').toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      });
      const moodText = reflection.mood ? ` - ${emojiToText(reflection.mood)}` : '';
      doc.text(`${date}${moodText}`, margin, yPosition);
      yPosition += 10;

      // Prompt
      if (reflection.prompt) {
        doc.setFontSize(10);
        doc.setFont('helvetica', 'italic');
        doc.setTextColor(100, 100, 100);
        const promptLines = doc.splitTextToSize(`"${reflection.prompt}"`, maxWidth);
        doc.text(promptLines, margin, yPosition);
        yPosition += promptLines.length * 5 + 5;
      }

      // Content
      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(50, 50, 50);
      const contentLines = doc.splitTextToSize(reflection.content, maxWidth);
      doc.text(contentLines, margin, yPosition);
      yPosition += contentLines.length * 5 + 5;

      // Tags
      if (reflection.tags.length > 0) {
        doc.setFontSize(9);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(100, 100, 100);
        doc.text(`Tags: ${reflection.tags.join(' · ')}`, margin, yPosition);
        yPosition += 10;
      }

      // Separator between reflections
      if (index < reflectionDetails.length - 1) {
        yPosition += 5;
        doc.setDrawColor(230, 230, 230);
        doc.line(margin, yPosition, pageWidth - margin, yPosition);
        yPosition += 15;
      }
    });

    addFooter(pageNum);
    doc.save('reflections.pdf');
  };

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
      <div className="border-b bg-background">
        <div className="container mx-auto max-w-7xl px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-foreground">Overview</h2>
              <p className="text-sm text-muted-foreground">Your complete progress dashboard</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={view} onValueChange={(v) => setView(v as any)} className="flex-1 flex flex-col">
        <div className="border-b bg-background">
          <div className="container mx-auto max-w-7xl px-8">
            <TabsList className="bg-transparent border-none h-auto p-0">
              <TabsTrigger value="board" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                <LayoutGrid className="h-4 w-4 mr-2" />
                Board
              </TabsTrigger>
              <TabsTrigger value="timeline" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                <Calendar className="h-4 w-4 mr-2" />
                Timeline
              </TabsTrigger>
              <TabsTrigger value="insights" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                <BarChart3 className="h-4 w-4 mr-2" />
                Insights
              </TabsTrigger>
              <TabsTrigger value="responses" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                <FileText className="h-4 w-4 mr-2" />
                Responses
              </TabsTrigger>
              <TabsTrigger value="reflections" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                <Heart className="h-4 w-4 mr-2" />
                Reflections
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        <div className="flex-1">
          <div className="container mx-auto max-w-7xl px-8 py-8">
            {/* Board View */}
            <TabsContent value="board" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Templates Section */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      Templates
                    </h3>
                    <Badge variant="outline">{filteredTemplates.length}</Badge>
                  </div>

                  {/* Filter Chips */}
                  <div className="flex gap-2 mb-4">
                    <Button
                      variant={boardFilter === 'all' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setBoardFilter('all')}
                    >
                      All
                    </Button>
                    <Button
                      variant={boardFilter === 'in-progress' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setBoardFilter('in-progress')}
                    >
                      In Progress
                    </Button>
                    <Button
                      variant={boardFilter === 'completed' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setBoardFilter('completed')}
                    >
                      Completed
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredTemplates.length === 0 ? (
                      <Card className="p-6 col-span-full">
                        <p className="text-center text-muted-foreground">
                          {boardFilter === 'all'
                            ? 'No templates started yet. Go to Workspace to begin!'
                            : `No ${boardFilter} templates.`}
                        </p>
                      </Card>
                    ) : (
                      filteredTemplates.map((template, index) => (
                        <motion.div
                          key={template.templateId}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                        >
                          <Card className="p-4 hover:bg-muted/50 transition-colors cursor-pointer h-full">
                            <h4 className="font-medium text-foreground mb-2">{template.templateName}</h4>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Progress</span>
                                <span className="text-foreground font-medium">
                                  {template.promptsCompleted}/{template.totalPrompts}
                                </span>
                              </div>
                              <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                                <motion.div
                                  className="bg-primary h-2 rounded-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: `${(template.promptsCompleted / template.totalPrompts) * 100}%` }}
                                  transition={{ duration: 0.5, delay: index * 0.05 + 0.2 }}
                                />
                              </div>
                              <p className="text-xs text-muted-foreground">
                                Last worked: {new Date(template.lastWorked).toLocaleDateString()}
                              </p>
                            </div>
                          </Card>
                        </motion.div>
                      ))
                    )}
                  </div>
                </div>

                {/* Reflections Section */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <Heart className="h-5 w-5" />
                      Recent Reflections
                    </h3>
                    <Badge variant="outline">{reflections.length}</Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {reflections.length === 0 ? (
                      <Card className="p-6 col-span-full">
                        <p className="text-center text-muted-foreground">
                          No reflections yet. Go to Reflection to write!
                        </p>
                      </Card>
                    ) : (
                      reflections.slice(0, 8).map((reflection, index) => (
                        <motion.div
                          key={reflection.date}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: (templates.length * 0.05) + (index * 0.03) }}
                        >
                          <Card className="p-4 hover:bg-muted/50 transition-colors cursor-pointer h-full">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-foreground">
                                {new Date(reflection.date).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                })}
                              </span>
                              {reflection.mood && <span className="text-xl">{reflection.mood}</span>}
                            </div>
                            <p className="text-xs text-muted-foreground mb-2">
                              {reflection.wordCount} words
                            </p>
                            {reflection.tags.length > 0 && (
                              <div className="flex gap-1 flex-wrap">
                                {reflection.tags.slice(0, 2).map((tag) => (
                                  <Badge key={tag} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </Card>
                        </motion.div>
                      ))
                    )}
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            {/* Timeline View */}
            <TabsContent value="timeline" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">Last 30 Days</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{activityData[0]?.date && new Date(activityData[0].date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    <span>→</span>
                    <span>{activityData[activityData.length - 1]?.date && new Date(activityData[activityData.length - 1].date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  </div>
                </div>
                <div className="grid grid-cols-10 gap-2">
                  {activityData.map((day, index) => {
                    const total = day.reflections + day.promptsWorked;
                    const intensity = total === 0 ? 0 : Math.min(total / 5, 1);
                    const date = new Date(day.date);
                    const isFirstOfMonth = date.getDate() === 1;
                    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' });
                    const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                    const isStartOrEnd = index === 0 || index === activityData.length - 1;

                    // Generate color based on intensity using theme colors
                    const getColor = () => {
                      if (total === 0) return 'bg-muted';
                      if (intensity <= 0.2) return 'bg-primary/20';
                      if (intensity <= 0.4) return 'bg-primary/40';
                      if (intensity <= 0.6) return 'bg-primary/60';
                      if (intensity <= 0.8) return 'bg-primary/80';
                      return 'bg-primary';
                    };

                    return (
                      <motion.div
                        key={day.date}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: index * 0.02 }}
                        className={`aspect-square rounded border border-border relative group cursor-pointer ${getColor()}`}
                        title={`${formattedDate} (${dayOfWeek}): ${day.reflections} reflections, ${day.promptsWorked} prompts`}
                        onClick={() => {
                          if (total > 0) {
                            setSelectedDay(day);
                            setDialogOpen(true);
                          }
                        }}
                      >
                        {/* Default: Show date for start/end, or month for first of month */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center group-hover:opacity-0 transition-opacity">
                          {isStartOrEnd ? (
                            <>
                              <span className="text-[10px] font-medium text-foreground leading-none">{date.toLocaleDateString('en-US', { month: 'short' })}</span>
                              <span className="text-xs font-bold text-foreground leading-none mt-0.5">{date.getDate()}</span>
                            </>
                          ) : isFirstOfMonth ? (
                            <span className="text-[10px] font-medium text-foreground">{date.toLocaleDateString('en-US', { month: 'short' })}</span>
                          ) : null}
                        </div>
                        {/* On hover: Show count */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 rounded">
                          <span className="text-xs font-medium text-foreground">{total}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>Less</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-4 rounded border border-border bg-muted" />
                    <div className="w-4 h-4 rounded border border-border bg-primary/20" />
                    <div className="w-4 h-4 rounded border border-border bg-primary/40" />
                    <div className="w-4 h-4 rounded border border-border bg-primary/60" />
                    <div className="w-4 h-4 rounded border border-border bg-primary/80" />
                    <div className="w-4 h-4 rounded border border-border bg-primary" />
                  </div>
                  <span>More</span>
                </div>
              </motion.div>
            </TabsContent>

            {/* Insights View */}
            <TabsContent value="insights" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <Card className="p-6 h-full">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <motion.p
                            className="text-2xl font-bold text-foreground"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                          >
                            {totalTemplates}
                          </motion.p>
                          <p className="text-sm text-muted-foreground">Templates Started</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                  >
                    <Card className="p-6 h-full">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <BarChart3 className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <motion.p
                            className="text-2xl font-bold text-foreground"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.25 }}
                          >
                            {totalPromptsCompleted}
                          </motion.p>
                          <p className="text-sm text-muted-foreground">Prompts Completed</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <Card className="p-6 h-full">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Heart className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <motion.p
                            className="text-2xl font-bold text-foreground"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                          >
                            {totalReflections}
                          </motion.p>
                          <p className="text-sm text-muted-foreground">Reflections Written</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.25 }}
                  >
                    <Card className="p-6 h-full">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Calendar className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <motion.p
                            className="text-2xl font-bold text-foreground"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.35 }}
                          >
                            {avgWordsPerReflection}
                          </motion.p>
                          <p className="text-sm text-muted-foreground">Avg Words/Reflection</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <Card className="p-6 h-full">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-orange-500/10">
                          <Flame className="h-6 w-6 text-orange-500" />
                        </div>
                        <div>
                          <motion.p
                            className="text-2xl font-bold text-foreground"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.4 }}
                          >
                            {longestStreak}
                          </motion.p>
                          <p className="text-sm text-muted-foreground">Longest Streak</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </div>

                {/* Top Themes Section */}
                {topThemes.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.35 }}
                  >
                    <Card className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-semibold text-foreground">Top Themes</h3>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        {topThemes.map((theme, index) => (
                          <motion.div
                            key={theme}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: 0.4 + (index * 0.05) }}
                          >
                            <Badge variant="secondary" className="text-sm px-3 py-1">
                              {theme}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground mt-3">
                        Most frequently used tags in your reflections
                      </p>
                    </Card>
                  </motion.div>
                )}
              </motion.div>
            </TabsContent>

            {/* Responses View */}
            <TabsContent value="responses" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {templateResponses.length === 0 ? (
                  <Card className="p-8">
                    <p className="text-center text-muted-foreground">
                      No responses yet. Go to Templates to start answering prompts!
                    </p>
                  </Card>
                ) : (
                  <>
                    {/* Template Filter Tabs and Export */}
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                      <div className="flex gap-2 flex-wrap">
                        {templateResponses.map((template) => (
                          <Button
                            key={template.templateId}
                            variant={selectedTemplateId === template.templateId ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setSelectedTemplateId(template.templateId)}
                          >
                            {template.templateName}
                          </Button>
                        ))}
                      </div>
                      {selectedTemplateId && (
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              Export
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem
                              onClick={() => {
                                const template = templateResponses.find(t => t.templateId === selectedTemplateId);
                                if (template) exportResponsesAsText(template);
                              }}
                            >
                              Plain Text (.txt)
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => {
                                const template = templateResponses.find(t => t.templateId === selectedTemplateId);
                                if (template) exportResponsesAsPDF(template);
                              }}
                            >
                              PDF (Styled)
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      )}
                    </div>

                    {/* Selected Template Content */}
                    {selectedTemplateId && templateResponses.find(t => t.templateId === selectedTemplateId) && (
                      <motion.div
                        key={selectedTemplateId}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Card className="p-6">
                          <h3 className="text-xl font-bold text-foreground mb-1">
                            {templateResponses.find(t => t.templateId === selectedTemplateId)!.templateName}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-6">
                            {templateResponses.find(t => t.templateId === selectedTemplateId)!.responses.length}{' '}
                            {templateResponses.find(t => t.templateId === selectedTemplateId)!.responses.length === 1 ? 'response' : 'responses'}
                          </p>
                          <div className="space-y-6">
                            {templateResponses
                              .find(t => t.templateId === selectedTemplateId)!
                              .responses.map((response, responseIndex) => (
                                <motion.div
                                  key={response.prompt_id}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.2, delay: responseIndex * 0.05 }}
                                  className="pb-6 border-b border-border last:border-b-0 last:pb-0"
                                >
                                  <div className="mb-2">
                                    <Badge variant="outline" className="text-xs mb-2">{response.category}</Badge>
                                    <h4 className="font-semibold text-foreground mb-1">{response.prompt}</h4>
                                    <p className="text-xs text-muted-foreground">
                                      Last updated: {new Date(response.updated_at).toLocaleDateString()}
                                    </p>
                                  </div>
                                  <div className="mt-3 p-4 bg-muted/30 rounded-lg">
                                    <p className="text-sm text-foreground whitespace-pre-wrap">{response.response}</p>
                                  </div>
                                </motion.div>
                              ))}
                          </div>
                        </Card>
                      </motion.div>
                    )}
                  </>
                )}
              </motion.div>
            </TabsContent>

            {/* Reflections View */}
            <TabsContent value="reflections" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {reflectionDetails.length === 0 ? (
                  <Card className="p-8">
                    <p className="text-center text-muted-foreground">
                      No reflections yet. Go to Reflection to start writing!
                    </p>
                  </Card>
                ) : (
                  <>
                    {/* Export Button */}
                    <div className="flex justify-end">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Export All Reflections
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem onClick={exportReflectionsAsText}>
                            Plain Text (.txt)
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={exportReflectionsAsPDF}>
                            PDF (Styled)
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    {reflectionDetails.map((reflection, index) => (
                    <motion.div
                      key={reflection.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Card className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <h3 className="text-lg font-bold text-foreground">
                              {new Date(reflection.date + 'T00:00:00').toLocaleDateString('en-US', {
                                weekday: 'long',
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric',
                              })}
                            </h3>
                            {reflection.mood && <span className="text-2xl">{reflection.mood}</span>}
                          </div>
                        </div>
                        {reflection.prompt && (
                          <p className="text-sm text-muted-foreground italic mb-4">
                            "{reflection.prompt}"
                          </p>
                        )}
                        <div className="p-4 bg-muted/30 rounded-lg">
                          <p className="text-sm text-foreground whitespace-pre-wrap leading-relaxed">
                            {reflection.content}
                          </p>
                        </div>
                        {reflection.tags.length > 0 && (
                          <div className="flex gap-2 flex-wrap mt-4">
                            {reflection.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </Card>
                    </motion.div>
                  ))}
                  </>
                )}
              </motion.div>
            </TabsContent>
          </div>
        </div>
      </Tabs>

      {/* Activity Day Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {selectedDay && new Date(selectedDay.date).toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </DialogTitle>
          </DialogHeader>
          {selectedDay && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="h-4 w-4 text-primary" />
                    <p className="text-sm font-medium text-foreground">Reflections</p>
                  </div>
                  <p className="text-2xl font-bold text-foreground">{selectedDay.reflections}</p>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <p className="text-sm font-medium text-foreground">Prompts Worked</p>
                  </div>
                  <p className="text-2xl font-bold text-foreground">{selectedDay.promptsWorked}</p>
                </Card>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>Total activity: {selectedDay.reflections + selectedDay.promptsWorked}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
