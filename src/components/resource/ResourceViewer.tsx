'use client';

import React from 'react';
import { Resource } from '@/types/template';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, Clock, BookOpen, ExternalLink } from 'lucide-react';
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
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{resource.excerpt}</p>
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
      <div className="flex-1 overflow-auto">
        <div className="p-4 space-y-4">
          {/* Resource content would go here */}
          <div className="prose prose-sm max-w-none dark:prose-invert text-sm">
            <div className="bg-muted/50 rounded-lg p-3 mb-4">
              <h3 className="text-sm font-medium mb-2">About this resource</h3>
              <p className="text-sm text-muted-foreground">
                {resource.excerpt}
              </p>
            </div>

            {/* Full blog post content */}
            <div className="space-y-4">
              {resource.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('##')) {
                  return (
                    <h3 key={index} className="text-base font-semibold mt-6 mb-3">
                      {paragraph.replace('##', '').trim()}
                    </h3>
                  );
                }
                if (paragraph.trim()) {
                  // Enhanced markdown parsing for bold text
                  const renderMarkdown = (text: string) => {
                    const parts: (string | React.JSX.Element)[] = [];
                    let currentIndex = 0;
                    
                    // Find all bold text matches
                    const boldRegex = /\*\*(.*?)\*\*/g;
                    let match;
                    
                    while ((match = boldRegex.exec(text)) !== null) {
                      // Add text before the match
                      if (match.index > currentIndex) {
                        parts.push(text.slice(currentIndex, match.index));
                      }
                      
                      // Add the bold text
                      parts.push(<strong key={match.index} className="font-semibold">{match[1]}</strong>);
                      
                      currentIndex = match.index + match[0].length;
                    }
                    
                    // Add remaining text
                    if (currentIndex < text.length) {
                      parts.push(text.slice(currentIndex));
                    }
                    
                    return parts.length > 1 ? parts : text;
                  };

                  return (
                    <p key={index} className="text-sm leading-6 text-foreground">
                      {renderMarkdown(paragraph)}
                    </p>
                  );
                }
                return null;
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