'use client';

import React, { useState, useRef, useCallback } from 'react';
import { Resource } from '@/types/template';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, Clock, BookOpen, ExternalLink, Plus } from 'lucide-react';
import Link from 'next/link';

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
  const [fontSize, setFontSize] = useState(14); // Start with original text-sm size
  const contentRef = useRef<HTMLDivElement>(null);

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
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between p-4 border-b bg-background/50 backdrop-blur">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4 text-primary flex-shrink-0" />
            <Badge variant="outline" className="text-xs">
              {resource.type}
            </Badge>
            <Badge className={`text-xs ${getDifficultyColor(resource.difficulty)}`}>
              {resource.difficulty}
            </Badge>
            <div className="flex items-center gap-1 text-xs text-muted-foreground ml-auto">
              <Clock className="w-3 h-3" />
              {resource.readTime}
            </div>
          </div>
          <h2 className="font-semibold text-lg line-clamp-2">{resource.title}</h2>
          <div className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {resource.excerpt.split('**').map((part, index) => 
              index % 2 === 1 ? <strong key={index} className="font-semibold">{part}</strong> : part
            )}
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="h-8 w-8 p-0 ml-3 flex-shrink-0"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto relative">
        <div
          ref={contentRef}
          className={`p-4 space-y-4 select-text transition-all duration-300 ${
            isDragReady
              ? 'cursor-grab [&::selection]:bg-blue-500 [&::selection]:text-white'
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
              <div className="bg-blue-500 text-white px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                <Plus className="w-3 h-3" />
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
            <div className="bg-muted/30 rounded-lg" style={{ padding: fontSize <= 14 ? '0.75rem' : '1rem', marginBottom: fontSize <= 14 ? '1rem' : '1.5rem' }}>
              <h3 className="font-medium text-gray-800 dark:text-gray-200" style={{ fontSize: 'var(--font-size)', marginBottom: fontSize <= 14 ? '0.5rem' : '0.75rem' }}>About this resource</h3>
              <div className="text-gray-600 dark:text-gray-300" style={{ fontSize: 'var(--font-size)', lineHeight: 'var(--line-height)' }}>
                {resource.excerpt.split('**').map((part, index) =>
                  index % 2 === 1 ? <strong key={index} className="font-semibold text-gray-800 dark:text-gray-200">{part}</strong> : part
                )}
              </div>
            </div>

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
                    <h3 key={index} className="font-semibold text-gray-900 dark:text-gray-100" style={{ fontSize: 'var(--font-size-xl)', marginTop: 'var(--header-margin-top)', marginBottom: 'var(--header-margin-bottom)', lineHeight: 'var(--line-height)' }}>
                      {trimmedLine.replace('##', '').trim()}
                    </h3>
                  );
                }
                
                // Handle standalone bold lines (subheaders)
                if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**') && !trimmedLine.includes('**', 2)) {
                  return (
                    <h4 key={index} className="font-semibold text-gray-800 dark:text-gray-200 ml-2" style={{ fontSize: 'var(--font-size-lg)', marginTop: 'calc(var(--header-margin-top) * 0.75)', marginBottom: 'calc(var(--header-margin-bottom) * 0.75)', lineHeight: 'var(--line-height)' }}>
                      {trimmedLine.replace(/^\*\*|\*\*$/g, '')}
                    </h4>
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
                    <div key={index} className="flex items-start gap-3 leading-8 text-gray-700 dark:text-gray-300 select-text py-2 ml-6" style={{ fontSize: 'var(--font-size)' }}>
                      <span className="text-gray-500 dark:text-gray-400 mt-0.5 font-medium" style={{ fontSize: 'var(--font-size)' }}>{number}.</span>
                      <div className="flex-1">{renderMarkdown(cleanItem)}</div>
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
                      parts.push(<strong key={match.index} className="font-semibold text-gray-900 dark:text-gray-100">{match[1]}</strong>);
                      currentIndex = match.index + match[0].length;
                    }
                    
                    if (currentIndex < text.length) {
                      parts.push(text.slice(currentIndex));
                    }
                    
                    return parts.length > 0 ? parts : text;
                  };
                  
                  return (
                    <div key={index} className="flex items-start gap-3 leading-8 text-gray-700 dark:text-gray-300 select-text py-2 ml-6" style={{ fontSize: 'var(--font-size)' }}>
                      <span className="text-gray-400 dark:text-gray-500 mt-3 w-2 h-2 rounded-full bg-current flex-shrink-0"></span>
                      <div className="flex-1">{renderMarkdown(cleanItem)}</div>
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
                  <p key={index} className="text-gray-700 dark:text-gray-300 select-text ml-6" style={{ fontSize: 'var(--font-size)', lineHeight: 'var(--line-height)', paddingTop: 'var(--spacing)', paddingBottom: 'var(--spacing)' }}>
                    {renderMarkdown(trimmedLine)}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t p-4 bg-background/50">
        <div className="flex items-center justify-between">
          <div className="text-xs text-muted-foreground">
            Resource • {resource.readTime} read
          </div>

          {/* Font Size Slider */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">A</span>
            <input
              type="range"
              min="12"
              max="20"
              value={fontSize}
              onChange={(e) => setFontSize(parseInt(e.target.value))}
              className="w-16 h-1 bg-muted rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
            />
            <span className="text-sm text-muted-foreground font-medium">A</span>
          </div>

          {resource.relatedBlogPost ? (
            <Button variant="outline" size="sm" className="h-7 text-xs" asChild>
              <Link href={`/blog/${resource.relatedBlogPost}`} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-3 h-3 mr-1" />
                Open Full View
              </Link>
            </Button>
          ) : (
            <Button variant="outline" size="sm" className="h-7 text-xs" disabled>
              <ExternalLink className="w-3 h-3 mr-1" />
              Preview Only
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}