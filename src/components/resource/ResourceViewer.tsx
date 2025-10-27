'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Resource } from '@/types/guide';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, Clock, BookOpen, ExternalLink, Plus, CheckCircle, ArrowLeft, Circle, Lightbulb, DollarSign, Calendar, Users, Camera } from 'lucide-react';
import Link from 'next/link';
import { InteractiveGlow } from '@/components/ui/glow-variants';
import { Highlighter } from '@/components/ui/highlighter';
import { motion, useScroll } from 'motion/react';

interface ResourceViewerProps {
  resource: Resource;
  onClose: () => void;
}


export function ResourceViewer({ resource, onClose }: ResourceViewerProps) {
  const [selectedText, setSelectedText] = useState('');
  const [isDragReady, setIsDragReady] = useState(false);
  const [fontSize, setFontSize] = useState(14);
  const [scrollProgress, setScrollProgress] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Use framer motion's useScroll with specific container
  const { scrollYProgress } = useScroll({
    container: scrollContainerRef
  });

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

  const handleClick = useCallback(() => {
    // Reset drag state on any click
    const selection = window.getSelection();
    if (!selection || !selection.toString().trim()) {
      setSelectedText('');
      setIsDragReady(false);
    }
  }, []);

  const handleDragStart = useCallback((e: React.DragEvent) => {
    const selection = window.getSelection();
    if (selection && selection.toString().trim()) {
      const text = selection.toString().trim();

      // Check if the drag started within the selected text
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // If drag didn't start near the selection, prevent it
      if (mouseX < rect.left - 10 || mouseX > rect.right + 10 ||
          mouseY < rect.top - 10 || mouseY > rect.bottom + 10) {
        e.preventDefault();
        return;
      }

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
    } else {
      // No text selected, prevent drag
      e.preventDefault();
    }
  }, []);

  const handleDragEnd = useCallback(() => {
    setIsDragReady(false);
    setSelectedText('');
    // Clear selection to prevent stuck state
    const selection = window.getSelection();
    if (selection) {
      selection.removeAllRanges();
    }
  }, []);

  return (
    <div className="h-full flex flex-col relative overflow-hidden">
      {/* Enhanced Selection Styles */}
      <style jsx>{`
        .drag-ready-content ::selection {
          background: #3b82f6 !important;
          color: white !important;
        }
        .normal-selection ::selection {
          background: rgba(59, 130, 246, 0.3) !important;
          color: inherit !important;
        }
      `}</style>
      {/* Reading Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 z-10 origin-left bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92]"
        style={{
          scaleX: scrollYProgress,
        }}
      />

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
                <strong key={index} className="font-semibold text-foreground/90">
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
              ? 'cursor-grab drag-ready-content'
              : 'cursor-text normal-selection'
          }`}
          draggable={isDragReady && selectedText.length > 0}
          onMouseUp={handleTextSelection}
          onKeyUp={handleTextSelection}
          onClick={handleClick}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          {isDragReady && (
            <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-right-5 duration-300">
              <div className="bg-gradient-to-r from-primary to-purple-500 text-white px-2 py-1 rounded-full shadow-lg border border-white/20 backdrop-blur flex items-center gap-1">
                <ArrowLeft className="w-3 h-3" />
                <span className="text-xs font-medium">Drag selected text to any note field</span>
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
                      <strong key={index} className="font-semibold text-foreground">
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
                      <h3 className="font-black text-2xl bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text px-4">
                        {trimmedLine.replace('##', '').trim()}
                      </h3>
                      <div className="h-px bg-gradient-to-l from-primary/50 to-transparent flex-1" />
                    </div>
                  );
                }
                
                // Handle standalone bold lines (subheaders)
                if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**') && !trimmedLine.includes('**', 2)) {
                  const subheaderText = trimmedLine.replace(/^\*\*|\*\*$/g, '');

                  // Choose emoji/icon based on subheader content
                  const getSubheaderIcon = (text: string) => {
                    const lowerText = text.toLowerCase();
                    if (lowerText.includes('venue') || lowerText.includes('reception')) return '🎉';
                    if (lowerText.includes('catering') || lowerText.includes('food') || lowerText.includes('bar')) return '🍽';
                    if (lowerText.includes('photo') || lowerText.includes('video')) return '📸';
                    if (lowerText.includes('flower') || lowerText.includes('decor')) return '🌸';
                    if (lowerText.includes('music') || lowerText.includes('band') || lowerText.includes('dj')) return '🎵';
                    if (lowerText.includes('dress') || lowerText.includes('attire')) return '👗';
                    if (lowerText.includes('ring') || lowerText.includes('jewelry')) return '💍';
                    if (lowerText.includes('transport') || lowerText.includes('car')) return '🚗';
                    return '✨';
                  };

                  return (
                    <div key={index} className="my-6 ml-2">
                      <div className="flex items-center gap-3 p-3">
                        <span className="text-lg">{getSubheaderIcon(subheaderText)}</span>
                        <h4 className="font-bold text-lg text-foreground/90">
                          {subheaderText}
                        </h4>
                      </div>
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
                    <div key={index} className="flex items-center gap-4 py-3 ml-6 group">
                      <div className="flex items-center justify-center flex-shrink-0">
                        <Circle className="w-4 h-4 text-primary fill-primary/20" />
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
                      parts.push(<strong key={match.index} className="font-semibold text-foreground">{match[1]}</strong>);
                      currentIndex = match.index + match[0].length;
                    }

                    if (currentIndex < text.length) {
                      parts.push(text.slice(currentIndex));
                    }

                    return parts.length > 0 ? parts : text;
                  };

                  return (
                    <div key={index} className="flex items-center gap-4 py-3 ml-6 group">
                      <div className="flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-primary fill-primary/20" />
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

                  // Combined regex for bold text, highlights, underlines, percentages, and dollar amounts
                  const combinedRegex = /(\*\*(.*?)\*\*|==(.*?)==|__(.*?)__|(\d+(?:\.\d+)?(?:–|-)\d+(?:\.\d+)?%|\d+(?:\.\d+)?%)|(\$[\d,]+(?:–|-\$[\d,]+)?|\$\d+(?:\.\d+)?(?:k|K|m|M)?(?:–|-\$\d+(?:\.\d+)?(?:k|K|m|M)?)?))/g;
                  let match;

                  while ((match = combinedRegex.exec(text)) !== null) {
                    if (match.index > currentIndex) {
                      parts.push(text.slice(currentIndex, match.index));
                    }

                    if (match[1].startsWith('**')) {
                      // Bold text
                      parts.push(<strong key={match.index} className="font-semibold text-foreground">{match[2]}</strong>);
                    } else if (match[1].startsWith('==')) {
                      // Highlighted text - subtle yellow highlight with underline
                      const highlightedText = match[3];
                      parts.push(
                        <Highlighter
                          key={match.index}
                          action="underline"
                          color="#fbbf24"
                          isView={true}
                          animationDuration={800}
                          strokeWidth={2}
                        >
{highlightedText}
                        </Highlighter>
                      );
                    } else if (match[1].startsWith('__')) {
                      // Underlined text - purple underline
                      const underlinedText = match[4];
                      parts.push(
                        <Highlighter
                          key={match.index}
                          action="underline"
                          color="#a855f7"
                          isView={true}
                          animationDuration={600}
                          strokeWidth={2}
                        >
                          {underlinedText}
                        </Highlighter>
                      );
                    } else if (match[5]) {
                      // Percentage or range
                      const percentage = match[5];
                      const badgeColor = percentage.includes('–') || percentage.includes('-')
                        ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-700'
                        : 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-700';

                      parts.push(
                        <span key={match.index} className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${badgeColor}`}>
                          {percentage}
                        </span>
                      );
                    } else if (match[6]) {
                      // Dollar amount
                      const dollarAmount = match[6];
                      const dollarBadgeColor = 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-700';

                      parts.push(
                        <span key={match.index} className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${dollarBadgeColor}`}>
                          {dollarAmount}
                        </span>
                      );
                    }

                    currentIndex = match.index + match[0].length;
                  }

                  if (currentIndex < text.length) {
                    parts.push(text.slice(currentIndex));
                  }

                  return parts.length > 0 ? parts : text;
                };
                
                // Check for Pro Tips or special callouts
                if (trimmedLine.toLowerCase().includes('pro tip') ||
                    trimmedLine.includes('💡') ||
                    trimmedLine.toLowerCase().includes('tip:') ||
                    trimmedLine.toLowerCase().includes('remember:') ||
                    trimmedLine.toLowerCase().includes('important:')) {

                  const calloutText = trimmedLine.replace(/💡/g, '').trim();
                  const calloutType = trimmedLine.toLowerCase().includes('important') ? 'warning' : 'tip';

                  const calloutStyles = calloutType === 'warning'
                    ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-200'
                    : 'bg-primary/5 dark:bg-primary/10 border-primary/20 dark:border-primary/30 text-foreground';

                  const calloutIcon = calloutType === 'warning' ? '⚠️' : '💡';

                  return (
                    <div key={index} className={`my-4 p-4 rounded-lg border-l-4 ${calloutStyles} ml-2`}>
                      <div className="flex items-start gap-3">
                        <span className="text-lg flex-shrink-0 mt-0.5">{calloutIcon}</span>
                        <div className="flex-1" style={{ fontSize: 'var(--font-size)' }}>
                          {renderMarkdown(calloutText)}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <p key={index} className="text-muted-foreground/70 select-text ml-6 leading-relaxed py-2" style={{ fontSize: 'calc(var(--font-size) - 1px)' }}>
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
              <Link href={`/readings/${resource.relatedBlogPost}`} target="_blank" rel="noopener noreferrer">
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