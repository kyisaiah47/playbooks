"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

interface Heading {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState('');

  // Track active section for table of contents
  const handleScroll = useCallback(() => {
    const headingElements = headings.map(heading =>
      document.getElementById(heading.id)
    ).filter(Boolean);

    for (let i = headingElements.length - 1; i >= 0; i--) {
      const element = headingElements[i];
      if (element && element.getBoundingClientRect().top <= 100) {
        setActiveSection(headings[i].id);
        break;
      }
    }
  }, [headings]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="sticky top-8 max-h-screen overflow-y-auto">
      <h3 className="font-semibold text-sm text-foreground mb-4">ON THIS PAGE</h3>
      <nav className="space-y-2">
        {headings.map((heading) => (
          <Link
            key={heading.id}
            href={`#${heading.id}`}
            className={`block text-sm transition-colors ${
              activeSection === heading.id
                ? 'text-foreground font-medium'
                : 'text-muted-foreground hover:text-foreground'
            } ${heading.level === 3 ? 'ml-4' : ''}`}
          >
            {heading.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
