"use client";

import Link from "next/link";
import React from "react";
import { Lightbulb } from "lucide-react";
import { Highlighter } from "@/components/ui/highlighter";

interface ReadingContentProps {
  content: string;
  searchQuery?: string;
}

export function ReadingContent({ content, searchQuery = '' }: ReadingContentProps) {
  // Normalize line breaks and split content
  // Handle both \n\n and \n as paragraph separators
  const normalizedContent = content.replace(/\n\n+/g, '\n\n'); // Normalize multiple newlines to double

  const cleanedContent = normalizedContent
    .split('\n\n')
    .filter(paragraph => {
      const trimmed = paragraph.trim();
      // Remove generation metadata
      if (trimmed.includes('ARTICLE GENERATION COMPLETE')) return false;
      if (trimmed.includes('Reading #')) return false;
      if (trimmed.match(/^---+$/)) return false; // Remove separator lines
      if (trimmed.length === 0) return false; // Remove empty paragraphs
      return true;
    });

  return (
    <div className="max-w-none">
      {cleanedContent.map((paragraph, index) => {

        // H1 headings (main title)
        if (paragraph.startsWith('# ') && !paragraph.startsWith('## ')) {
          const headingText = paragraph.replace('# ', '');
          const id = headingText.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
          return (
            <h1 key={index} id={id} className="text-2xl font-bold mt-4 mb-6 text-foreground">
              {headingText}
            </h1>
          );
        }

        // Main headings with IDs for navigation
        if (paragraph.startsWith('## ')) {
          const headingText = paragraph.replace('## ', '');
          const id = headingText.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
          return (
            <h2 key={index} id={id} className="text-xl font-semibold mt-10 mb-4 text-foreground border-b border-border/40 pb-2">
              {headingText}
            </h2>
          );
        }

        // Sub headings with IDs
        if (paragraph.startsWith('### ')) {
          const headingText = paragraph.replace('### ', '');
          const id = headingText.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
          return (
            <h3 key={index} id={id} className="text-lg font-semibold mt-6 mb-3 text-foreground">
              {headingText}
            </h3>
          );
        }

        if (paragraph.trim()) {
          // Enhanced markdown parsing with links, percentages, and dollar amounts
          const renderText = (text: string) => {
            const parts: (string | React.JSX.Element)[] = [];
            let currentIndex = 0;

            // Helper function to highlight search query in text
            const highlightSearchQuery = (str: string, keyPrefix: string | number = '') => {
              if (!searchQuery.trim() || searchQuery.length < 2) return str;

              const searchLower = searchQuery.toLowerCase();
              const regex = new RegExp(`(${searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
              const matches = str.match(regex);

              if (!matches) return str;

              const highlighted: (string | React.JSX.Element)[] = [];
              let lastIndex = 0;

              regex.lastIndex = 0; // Reset regex
              let searchMatch;
              while ((searchMatch = regex.exec(str)) !== null) {
                if (searchMatch.index > lastIndex) {
                  highlighted.push(str.slice(lastIndex, searchMatch.index));
                }
                highlighted.push(
                  <mark key={`${keyPrefix}-search-${searchMatch.index}`} className="bg-yellow-500/20 dark:bg-yellow-500/40 text-foreground rounded px-0.5">
                    {searchMatch[0]}
                  </mark>
                );
                lastIndex = searchMatch.index + searchMatch[0].length;
              }

              if (lastIndex < str.length) {
                highlighted.push(str.slice(lastIndex));
              }

              return highlighted;
            };

            // Combined regex for bold text, links, highlights, and underlines (removed percentages and dollar amounts)
            const combinedRegex = /(\*\*(.*?)\*\*|\[([^\]]+)\]\(([^)]+)\)|==(.*?)==|__(.*?)__)/g;
            let match;

            while ((match = combinedRegex.exec(text)) !== null) {
              if (match.index > currentIndex) {
                parts.push(...(Array.isArray(highlightSearchQuery(text.slice(currentIndex, match.index), `p${index}-${currentIndex}`)) ? highlightSearchQuery(text.slice(currentIndex, match.index), `p${index}-${currentIndex}`) as (string | React.JSX.Element)[] : [highlightSearchQuery(text.slice(currentIndex, match.index), `p${index}-${currentIndex}`)]));
              }

              if (match[0].startsWith('**')) {
                // Bold text - extract text between **
                const boldText = match[0].slice(2, -2);
                parts.push(<strong key={match.index} className="font-semibold">{highlightSearchQuery(boldText, `bold-${match.index}`)}</strong>);
              } else if (match[0].startsWith('[')) {
                // Link - extract from full match
                const linkMatch = match[0].match(/\[([^\]]+)\]\(([^)]+)\)/);
                if (linkMatch) {
                  parts.push(
                    <Link
                      key={match.index}
                      href={linkMatch[2]}
                      className="text-primary hover:text-primary/80 underline underline-offset-2"
                    >
                      {highlightSearchQuery(linkMatch[1], `link-${match.index}`)}
                    </Link>
                  );
                }
              } else if (match[0].startsWith('==') && match[0].endsWith('==')) {
                // Highlighted text - blue highlight
                const highlightedText = match[0].slice(2, -2);
                parts.push(
                  <Highlighter
                    key={match.index}
                    action="highlight"
                    color="#3b82f6"
                    isView={true}
                    animationDuration={800}
                  >
                    {highlightedText}
                  </Highlighter>
                );
              } else if (match[0].startsWith('__') && match[0].endsWith('__')) {
                // Underlined text - purple underline
                const underlinedText = match[0].slice(2, -2);
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
              }

              currentIndex = match.index + match[0].length;
            }

            if (currentIndex < text.length) {
              const remaining = text.slice(currentIndex);
              parts.push(...(Array.isArray(highlightSearchQuery(remaining, `end-${currentIndex}`)) ? highlightSearchQuery(remaining, `end-${currentIndex}`) as (string | React.JSX.Element)[] : [highlightSearchQuery(remaining, `end-${currentIndex}`)]));
            }

            return parts.length > 0 ? parts : text;
          };

          // Pull quotes (text starting with >) - styled as Notion callouts
          if (paragraph.startsWith('> ')) {
            const quoteText = paragraph.replace('> ', '');
            // Detect if it has an emoji at the start
            const emojiMatch = quoteText.match(/^([\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}])\s*/u);
            const hasEmoji = emojiMatch !== null;

            return (
              <blockquote key={index} className="bg-primary/5 dark:bg-primary/10 border-l-4 border-primary/30 pl-4 py-3 my-6 rounded-r">
                <p className="text-sm text-foreground/90 leading-relaxed">
                  {renderText(quoteText)}
                </p>
              </blockquote>
            );
          }

          // Tables (simple pipe-separated format)
          if (paragraph.includes('|') && paragraph.split('\n').length > 1) {
            const rows = paragraph.split('\n').filter(row => row.includes('|'));
            const headerRow = rows[0];
            const dataRows = rows.slice(2); // Skip header and separator

            if (headerRow && dataRows.length > 0) {
              const headers = headerRow.split('|').map(h => h.trim()).filter(h => h);

              return (
                <div key={index} className="my-8 overflow-x-auto">
                  <table className="w-full border-collapse border border-border/60 rounded-lg overflow-hidden shadow-sm">
                    <thead>
                      <tr className="bg-muted/50">
                        {headers.map((header, headerIndex) => (
                          <th key={headerIndex} className="border-b-2 border-border px-4 py-3 text-left text-sm font-semibold text-foreground">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {dataRows.map((row, rowIndex) => {
                        const cells = row.split('|').map(c => c.trim()).filter(c => c);
                        return (
                          <tr key={rowIndex} className="hover:bg-muted/40 transition-colors border-b border-border/30 last:border-0">
                            {cells.map((cell, cellIndex) => (
                              <td key={cellIndex} className="px-4 py-3 text-sm">
                                {renderText(cell)}
                              </td>
                            ))}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              );
            }
          }

          // Pro Tip callouts with lightbulb
          if (paragraph.includes('Pro Tip:') || paragraph.includes('**Pro Tip:**')) {
            return (
              <div key={index} className="bg-primary/5 dark:bg-primary/10 border border-primary/20 dark:border-primary/30 rounded-lg p-4 my-4">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Lightbulb className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm">Pro Tip!</h4>
                    <p className="text-muted-foreground text-sm">
                      {renderText(paragraph.replace('**Pro Tip:** ', '').replace('Pro Tip: ', ''))}
                    </p>
                  </div>
                </div>
              </div>
            );
          }

          // Numbered lists (ordered lists) - optimized for featured snippets
          if (paragraph.match(/^\d+\.\s/)) {
            const items = paragraph.split('\n').filter(line => line.trim().match(/^\d+\.\s/));
            return (
              <ol key={index} className="space-y-2 my-4 ml-5 list-decimal">
                {items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm text-foreground/90 pl-2">
                    {renderText(item.replace(/^\d+\.\s*/, ''))}
                  </li>
                ))}
              </ol>
            );
          }

          // Bullet points
          if (paragraph.startsWith('- ') || paragraph.startsWith('• ')) {
            const items = paragraph.split('\n').filter(line => line.trim().startsWith('-') || line.trim().startsWith('•'));
            return (
              <ul key={index} className="space-y-1.5 my-3 ml-5 list-disc">
                {items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm text-foreground/90">
                    {renderText(item.replace(/^[-•]\s*/, ''))}
                  </li>
                ))}
              </ul>
            );
          }

          // Regular paragraphs
          return (
            <p key={index} className="text-sm leading-relaxed mb-4 text-foreground/90">
              {renderText(paragraph)}
            </p>
          );
        }
        return null;
      })}
    </div>
  );
}
