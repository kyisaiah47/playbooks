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
      if (trimmed.includes('Article #')) return false;
      if (trimmed.match(/^---+$/)) return false; // Remove separator lines
      if (trimmed.length === 0) return false; // Remove empty paragraphs
      return true;
    });

  // Track if we've seen the first h1 title (to skip it since it's in the hero)
  let hasSeenTitle = false;

  return (
    <div className="max-w-none">
      {cleanedContent.map((paragraph, index) => {

        // Title headings (single #) - skip the first one since it's in the hero
        if (paragraph.startsWith('# ') && !paragraph.startsWith('## ')) {
          if (!hasSeenTitle) {
            hasSeenTitle = true;
            return null; // Skip the first title
          }
          const headingText = paragraph.replace('# ', '');
          const id = headingText.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
          return (
            <h1 key={index} id={id} className="text-3xl font-bold mt-0 mb-6 text-foreground">
              {headingText}
            </h1>
          );
        }

        // Main headings with IDs for navigation
        if (paragraph.startsWith('## ')) {
          const headingText = paragraph.replace('## ', '');
          const id = headingText.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
          return (
            <h2 key={index} id={id} className="text-xl font-semibold mt-8 mb-4 text-foreground">
              {headingText}
            </h2>
          );
        }

        // Sub headings with IDs - check if heading has bullets after it
        if (paragraph.startsWith('### ')) {
          const content = paragraph.replace('### ', '');
          const lines = content.split('\n');
          const headingText = lines[0];
          const bulletLines = lines.slice(1).filter(line => line.trim().startsWith('- '));

          // If heading has bullets after it, render as heading + list
          if (bulletLines.length > 0) {
            const id = headingText.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
            return (
              <div key={index} className="my-6">
                <h3 id={id} className="text-lg font-semibold mb-3 text-foreground">
                  {headingText}
                </h3>
                <ul className="space-y-1.5 ml-5 list-disc">
                  {bulletLines.map((line, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-foreground/90">
                      {line.replace(/^[-•]\s*/, '').trim()}
                    </li>
                  ))}
                </ul>
              </div>
            );
          }

          // Regular heading without bullets
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

            // Combined regex for bold text, links, highlights, underlines, percentages, and dollar amounts
            const combinedRegex = /(\*\*(.*?)\*\*|\[([^\]]+)\]\(([^)]+)\)|==(.*?)==|__(.*?)__|\$[\d,]+(?:\.\d{2})?(?:-\$[\d,]+(?:\.\d{2})?)?|\d+(?:\.\d+)?(?:-\d+(?:\.\d+)?)?%)/g;
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
                // Highlighted text - yellow/orange highlight
                const highlightedText = match[0].slice(2, -2);
                parts.push(
                  <mark key={match.index} className="bg-yellow-300 dark:bg-yellow-600 text-black dark:text-white px-1 rounded">
                    {highlightedText}
                  </mark>
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
              } else if (match[0].startsWith('$')) {
                // Dollar amounts - emerald for single, purple for ranges
                const isDollarRange = match[0].includes('-');
                parts.push(
                  <span
                    key={match.index}
                    className={`inline-flex items-center px-2 py-1 rounded-full text-sm font-medium mx-1 ${
                      isDollarRange
                        ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300'
                        : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300'
                    }`}
                  >
                    {match[0]}
                  </span>
                );
              } else if (match[0].includes('%')) {
                // Percentages - green for single, purple for ranges
                const isPercentRange = match[0].includes('-');
                parts.push(
                  <span
                    key={match.index}
                    className={`inline-flex items-center px-2 py-1 rounded-full text-sm font-medium mx-1 ${
                      isPercentRange
                        ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300'
                        : 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300'
                    }`}
                  >
                    {match[0]}
                  </span>
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

          // Pull quotes (text starting with >)
          if (paragraph.startsWith('> ')) {
            return (
              <blockquote key={index} className="bg-muted/50 border-l-2 border-primary/30 pl-4 py-3 my-4">
                <p className="text-sm italic text-foreground/80">
                  {renderText(paragraph.replace('> ', ''))}
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
                  <table className="w-full border-collapse border border-border rounded-lg">
                    <thead>
                      <tr className="bg-muted/50">
                        {headers.map((header, headerIndex) => (
                          <th key={headerIndex} className="border border-border px-4 py-3 text-left text-sm font-semibold">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {dataRows.map((row, rowIndex) => {
                        const cells = row.split('|').map(c => c.trim()).filter(c => c);
                        return (
                          <tr key={rowIndex} className="hover:bg-muted/30">
                            {cells.map((cell, cellIndex) => (
                              <td key={cellIndex} className="border border-border px-4 py-3 text-sm">
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

          // Check for inline pattern: "Header - item - item - item"
          const dashSeparatorCount = (paragraph.match(/ - /g) || []).length;
          if (dashSeparatorCount >= 2) {
            const firstDashIndex = paragraph.indexOf(' - ');
            const header = paragraph.substring(0, firstDashIndex).trim();
            const bulletContent = paragraph.substring(firstDashIndex + 3);
            const items = bulletContent.split(' - ').map(item => item.trim()).filter(item => item.length > 0);

            return (
              <div key={index} className="my-4">
                <p className="text-sm font-semibold text-foreground mb-2">{renderText(header)}</p>
                <ul className="space-y-1.5 ml-5 list-disc">
                  {items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-foreground/90">
                      {renderText(item)}
                    </li>
                  ))}
                </ul>
              </div>
            );
          }

          // Check for bullets after a colon header
          const lines = paragraph.split('\n');
          const firstLine = lines[0];

          // Look for pattern ": - " in first line (the ** for bold are BEFORE the text, not after the colon!)
          const colonDashPattern = /:\s+-\s+/;
          const hasInlineBulletsOnFirstLine = colonDashPattern.test(firstLine);

          if (firstLine.includes(':') && (hasInlineBulletsOnFirstLine || lines.length > 1)) {
            let allItems: string[] = [];
            let header = '';

            if (hasInlineBulletsOnFirstLine) {
              // Split at FIRST occurrence of ": - " or ":** - " or ":* - "
              const match = firstLine.match(colonDashPattern);
              if (match) {
                const splitIndex = firstLine.indexOf(match[0]);
                header = firstLine.substring(0, splitIndex + 1); // Keep up to and including the colon
                const bulletsText = firstLine.substring(splitIndex + match[0].length);
                const inlineBullets = bulletsText.split(' - ').map(item => item.trim()).filter(item => item.length > 0);
                allItems.push(...inlineBullets);
              }
            } else {
              header = firstLine;
            }

            // Get ALL non-empty lines from following lines
            const restOfLines = lines.slice(1);
            for (const line of restOfLines) {
              const trimmed = line.trim();
              if (trimmed.length === 0) continue;

              // Add ALL lines as bullets - strip leading "- " if present
              const bulletContent = trimmed.replace(/^[-•]\s+/, '');
              if (bulletContent.length > 0) {
                allItems.push(bulletContent);
              }
            }

            if (allItems.length > 0) {
              return (
                <div key={index} className="my-4">
                  <p className="text-sm font-semibold text-foreground mb-2">{renderText(header)}</p>
                  <ul className="space-y-1.5 ml-5 list-disc">
                    {allItems.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-foreground/90">
                        {renderText(item)}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }
          }

          // Bullet points that start with - or •
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
