"use client";

import React, { useEffect, useState } from "react";
import { List } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    // Extract headings from content
    const extractedHeadings: Heading[] = [];
    const lines = content.split('\n');

    lines.forEach((line) => {
      const trimmed = line.trim();

      // Match ## headings (h2)
      if (trimmed.startsWith('## ') && !trimmed.startsWith('### ')) {
        const text = trimmed.replace('## ', '');
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
        extractedHeadings.push({ id, text, level: 2 });
      }
      // Match ### headings (h3)
      else if (trimmed.startsWith('### ')) {
        const text = trimmed.replace('### ', '');
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
        extractedHeadings.push({ id, text, level: 3 });
      }
    });

    setHeadings(extractedHeadings);
  }, [content]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Find the scrollable parent container
      let scrollContainer = element.parentElement;
      while (scrollContainer && scrollContainer !== document.body) {
        const overflowY = window.getComputedStyle(scrollContainer).overflowY;
        if (overflowY === 'auto' || overflowY === 'scroll') {
          break;
        }
        scrollContainer = scrollContainer.parentElement;
      }

      if (scrollContainer && scrollContainer !== document.body) {
        // Scroll within the container
        const containerTop = scrollContainer.getBoundingClientRect().top;
        const elementTop = element.getBoundingClientRect().top;
        const offset = -20; // Small offset for spacing
        scrollContainer.scrollTo({
          top: scrollContainer.scrollTop + (elementTop - containerTop) + offset,
          behavior: 'smooth'
        });
      } else {
        // Fallback to window scroll
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className="space-y-1">
      {headings.map((heading) => (
        <button
          key={heading.id}
          onClick={() => handleClick(heading.id)}
          type="button"
          className={`block text-left w-full text-sm transition-all duration-200 cursor-pointer ${
            heading.level === 3 ? 'pl-4' : ''
          } text-muted-foreground hover:text-foreground`}
        >
          {heading.text}
        </button>
      ))}
    </nav>
  );
}
