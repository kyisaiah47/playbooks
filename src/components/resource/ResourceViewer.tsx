'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Resource } from '@/types/template';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, Clock, BookOpen, ExternalLink, Plus, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { InteractiveGlow } from '@/components/ui/glow-variants';

interface ResourceViewerProps {
  resource: Resource;
  onClose: () => void;
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'beginner': return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300';
    case 'intermediate': return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300';
    case 'expert': return 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300';
    default: return 'bg-muted text-muted-foreground';
  }
};

export function ResourceViewer({ resource, onClose }: ResourceViewerProps) {
  const [selectedText, setSelectedText] = useState('');
  const [isDragReady, setIsDragReady] = useState(false);
  const [fontSize, setFontSize] = useState(14);
  const [scrollProgress, setScrollProgress] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Track reading progress
  const handleScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight - container.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    setScrollProgress(Math.min(100, Math.max(0, progress)));
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleTextSelection = useCallback(() => {
    const selection = window.getSelection();
    if (selection && selection.toString().trim()) {
      const text = selection.toString().trim();
      setSelectedText(text);
      setIsDragReady(true);
    } else {
      setSelectedText('');
      setIsDragReady(false);
    }
  }, []);

  const handleDragStart = useCallback((e: React.DragEvent) => {
    const selection = window.getSelection();
    if (selection && selection.toString().trim()) {
      const text = selection.toString().trim();
      e.dataTransfer.setData('text/plain', text);
      e.dataTransfer.effectAllowed = 'copy';

      // Custom drag image
      const dragImage = document.createElement('div');
      dragImage.textContent = text.length > 50 ? text.substring(0, 50) + '...' : text;
      dragImage.style.cssText = 'position: absolute; top: -1000px; background: #3b82f6; color: white; padding: 8px 12px; border-radius: 6px; font-size: 14px; max-width: 300px; word-wrap: break-word; box-shadow: 0 4px 12px rgba(0,0,0,0.15);';
      document.body.appendChild(dragImage);
      e.dataTransfer.setDragImage(dragImage, 0, 0);

      setTimeout(() => {
        if (document.body.contains(dragImage)) {
          document.body.removeChild(dragImage);
        }
      }, 0);
    }
  }, []);

  const handleDragEnd = useCallback(() => {
    setIsDragReady(false);
    // Keep selection but remove drag state
  }, []);

  return (
    <div className="h-full flex flex-col relative overflow-hidden">
      {/* Reading Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-muted/30 z-10">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Gradient Header Background */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary/5 via-primary/2 to-transparent pointer-events-none" />

      {/* Header */}
      <div className="relative flex items-start justify-between p-6 border-b bg-background/80 backdrop-blur-md">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <BookOpen className="w-4 h-4 text-primary" />
            </div>
            <Badge variant="outline" className="text-xs bg-background/50 backdrop-blur">
              {resource.type}
            </Badge>
            <Badge className={`text-xs ${getDifficultyColor(resource.difficulty)} backdrop-blur`}>
              {resource.difficulty}
            </Badge>
            <div className="flex items-center gap-1 text-xs text-muted-foreground ml-auto bg-background/30 backdrop-blur px-2 py-1 rounded-full">
              <Clock className="w-3 h-3" />
              {resource.readTime}
            </div>
          </div>
          <h2 className="font-bold text-xl line-clamp-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            {resource.title}
          </h2>
          <div className="text-sm text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
            {resource.excerpt.split('**').map((part, index) =>
              index % 2 === 1 ? (
                <strong key={index} className="font-semibold text-foreground/90 bg-primary/10 px-1 rounded">
                  {part}
                </strong>
              ) : part
            )}
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="h-8 w-8 p-0 ml-4 flex-shrink-0 hover:bg-destructive/10 hover:text-destructive"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>

      {/* Content */}
      <div
        ref={scrollContainerRef}
        className="flex-1 overflow-auto relative bg-gradient-to-b from-background via-background/95 to-background"
      >
        <div
          ref={contentRef}
          className={`p-6 space-y-6 select-text transition-all duration-300 ${
            isDragReady
              ? 'cursor-grab [&::selection]:bg-gradient-to-r [&::selection]:from-blue-500 [&::selection]:to-purple-500 [&::selection]:text-white'
              : 'cursor-text'
          }`}
          draggable={isDragReady}
          onMouseUp={handleTextSelection}
          onKeyUp={handleTextSelection}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          {isDragReady && (
            <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-right-5 duration-300">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full shadow-xl border border-white/20 backdrop-blur flex items-center gap-2">
                <Plus className="w-4 h-4" />
                <span className="text-sm font-medium">Drag selected text to any note field</span>
              </div>
            </div>
          )}
          {/* Resource content */}
          <div
            className="max-w-2xl mx-auto"
            style={{
              '--font-size': `${fontSize}px`,
              '--font-size-sm': `${Math.max(fontSize - 2, 12)}px`,
              '--font-size-lg': `${fontSize + 2}px`,
              '--font-size-xl': `${fontSize + 4}px`,
              '--line-height': fontSize <= 14 ? '1.5' : '1.6', // Original spacing for small sizes
              '--spacing': fontSize <= 14 ? '0.125rem' : 'calc(var(--font-size) * 0.125)', // Tighter spacing for small fonts
              '--header-margin-top': fontSize <= 14 ? '1rem' : '2rem',
              '--header-margin-bottom': fontSize <= 14 ? '0.5rem' : '1rem'
            } as React.CSSProperties}
          >
            <InteractiveGlow className="mb-6">
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                    About this resource
                  </h3>
                </div>
                <div className="text-muted-foreground leading-relaxed" style={{ fontSize: 'var(--font-size)', lineHeight: 'var(--line-height)' }}>
                  {resource.excerpt.split('**').map((part, index) =>
                    index % 2 === 1 ? (
                      <strong key={index} className="font-semibold text-foreground bg-primary/10 px-1.5 py-0.5 rounded-md">
                        {part}
                      </strong>
                    ) : part
                  )}
                </div>
              </div>
            </InteractiveGlow>

            {/* Full blog post content */}
            <div style={{ marginTop: fontSize <= 14 ? '1rem' : '1.5rem', gap: fontSize <= 14 ? '0.75rem' : '1.5rem', display: 'flex', flexDirection: 'column' }}>
              {resource.content.split('\n').map((line, index) => {
                const trimmedLine = line.trim();
                
                // Skip empty lines
                if (!trimmedLine) {
                  return null;
                }
                
                // Handle headers
                if (trimmedLine.startsWith('##')) {
                  return (
                    <div key={index} className="flex items-center gap-3 my-8">
                      <div className="h-px bg-gradient-to-r from-primary/50 to-transparent flex-1" />
                      <h3 className="font-bold text-xl bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text px-4">
                        {trimmedLine.replace('##', '').trim()}
                      </h3>
                      <div className="h-px bg-gradient-to-l from-primary/50 to-transparent flex-1" />
                    </div>
                  );
                }
                
                // Handle standalone bold lines (subheaders)
                if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**') && !trimmedLine.includes('**', 2)) {
                  return (
                    <div key={index} className="flex items-center gap-3 my-6">
                      <div className="w-1 h-6 bg-gradient-to-b from-primary/80 to-primary/40 rounded-full" />
                      <h4 className="font-semibold text-lg text-foreground/90">
                        {trimmedLine.replace(/^\*\*|\*\*$/g, '')}
                      </h4>
                    </div>
                  );
                }
                
                // Handle numbered lists
                if (/^\d+\. /.test(trimmedLine)) {
                  const cleanItem = trimmedLine.replace(/^\d+\. /, '');
                  const number = trimmedLine.match(/^(\d+)\./)?.[1] || '1';
                  const renderMarkdown = (text: string) => {
                    const parts: (string | React.JSX.Element)[] = [];
                    let currentIndex = 0;
                    const boldRegex = /\*\*(.*?)\*\*/g;
                    let match;

                    while ((match = boldRegex.exec(text)) !== null) {
                      if (match.index > currentIndex) {
                        parts.push(text.slice(currentIndex, match.index));
                      }
                      parts.push(<strong key={match.index} className="font-semibold text-gray-900 dark:text-gray-100">{match[1]}</strong>);
                      currentIndex = match.index + match[0].length;
                    }

                    if (currentIndex < text.length) {
                      parts.push(text.slice(currentIndex));
                    }

                    return parts.length > 0 ? parts : text;
                  };

                  return (
                    <div key={index} className="flex items-start gap-4 py-3 ml-6 group">
                      <div className="mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                        <span className="text-white text-xs font-bold">{number}</span>
                      </div>
                      <div className="flex-1 text-muted-foreground leading-relaxed" style={{ fontSize: 'var(--font-size)' }}>
                        {renderMarkdown(cleanItem)}
                      </div>
                    </div>
                  );
                }

                // Handle bullet points
                if (trimmedLine.startsWith('- ')) {
                  const cleanItem = trimmedLine.replace(/^- /, '');
                  const renderMarkdown = (text: string) => {
                    const parts: (string | React.JSX.Element)[] = [];
                    let currentIndex = 0;
                    const boldRegex = /\*\*(.*?)\*\*/g;
                    let match;

                    while ((match = boldRegex.exec(text)) !== null) {
                      if (match.index > currentIndex) {
                        parts.push(text.slice(currentIndex, match.index));
                      }
                      parts.push(<strong key={match.index} className="font-semibold text-foreground bg-primary/10 px-1 rounded">{match[1]}</strong>);
                      currentIndex = match.index + match[0].length;
                    }

                    if (currentIndex < text.length) {
                      parts.push(text.slice(currentIndex));
                    }

                    return parts.length > 0 ? parts : text;
                  };

                  return (
                    <div key={index} className="flex items-start gap-4 py-3 ml-6 group">
                      <div className="mt-1.5 w-5 h-5 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <div className="flex-1 text-muted-foreground leading-relaxed" style={{ fontSize: 'var(--font-size)' }}>
                        {renderMarkdown(cleanItem)}
                      </div>
                    </div>
                  );
                }
                
                // Handle regular paragraphs with markdown
                const renderMarkdown = (text: string) => {
                  const parts: (string | React.JSX.Element)[] = [];
                  let currentIndex = 0;
                  const boldRegex = /\*\*(.*?)\*\*/g;
                  let match;
                  
                  while ((match = boldRegex.exec(text)) !== null) {
                    if (match.index > currentIndex) {
                      parts.push(text.slice(currentIndex, match.index));
                    }
                    parts.push(<strong key={match.index} className="font-semibold">{match[1]}</strong>);
                    currentIndex = match.index + match[0].length;
                  }
                  
                  if (currentIndex < text.length) {
                    parts.push(text.slice(currentIndex));
                  }
                  
                  return parts.length > 0 ? parts : text;
                };
                
                return (
                  <p key={index} className="text-muted-foreground select-text ml-6 leading-relaxed py-2" style={{ fontSize: 'var(--font-size)' }}>
                    {renderMarkdown(trimmedLine)}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t bg-background/80 backdrop-blur-md p-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary/60 to-primary/30" />
            <span>Resource • {resource.readTime} read</span>
            <div className="flex items-center gap-1 ml-2 text-xs bg-primary/10 px-2 py-1 rounded-full">
              <span>{Math.round(scrollProgress)}% complete</span>
            </div>
          </div>

          {/* Font Size Slider */}
          <div className="flex items-center gap-3 bg-muted/50 px-3 py-2 rounded-full">
            <span className="text-xs text-muted-foreground">A</span>
            <input
              type="range"
              min="12"
              max="20"
              value={fontSize}
              onChange={(e) => setFontSize(parseInt(e.target.value))}
              className="w-20 h-1 bg-muted rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-md"
            />
            <span className="text-sm text-muted-foreground font-medium">A</span>
          </div>

          {resource.relatedBlogPost ? (
            <Button variant="outline" size="sm" className="h-8 text-xs bg-background/50 backdrop-blur hover:bg-primary/10 border-primary/20" asChild>
              <Link href={`/blog/${resource.relatedBlogPost}`} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-3 h-3 mr-2" />
                Open Full View
              </Link>
            </Button>
          ) : (
            <Button variant="outline" size="sm" className="h-8 text-xs bg-muted/30" disabled>
              <ExternalLink className="w-3 h-3 mr-2" />
              Preview Only
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}