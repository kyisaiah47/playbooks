"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  FileText,
  Users,
  Shield,
  Zap,
  MessageSquare,
  Download,
  Search,
  ChevronDown,
  ChevronRight
} from "lucide-react";

export default function DocsPage() {
  const [expandedSections, setExpandedSections] = useState<string[]>(['getting-started']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const sidebarSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      items: [
        { title: 'Introduction', href: '/docs/intro' },
        { title: 'Quick Start', href: '/docs/quick-start' },
        { title: 'Browse Guides', href: '/docs/browse-guides' }
      ]
    },
    {
      id: 'guides',
      title: 'Using Guides',
      items: [
        { title: 'How Guides Work', href: '/docs/how-guides-work' },
        { title: 'Workspace', href: '/docs/workspace' },
        { title: 'Export & Share', href: '/docs/export' }
      ]
    },
    {
      id: 'community',
      title: 'Community',
      items: [
        { title: 'Discussions', href: '/docs/discussions' },
        { title: 'Request a Guide', href: '/docs/request-guide' },
        { title: 'Guidelines', href: '/docs/community-guidelines' }
      ]
    },
    {
      id: 'account',
      title: 'Account & Privacy',
      items: [
        { title: 'Privacy & Data', href: '/docs/privacy' },
        { title: 'Account Settings', href: '/docs/account' }
      ]
    }
  ];

  const popularDocs = [
    {
      title: "Getting Started",
      description: "Learn the basics of using Templata guides",
      icon: Zap,
      href: "/docs/getting-started"
    },
    {
      title: "How Guides Work",
      description: "Understand the structure and purpose of guides",
      icon: BookOpen,
      href: "/docs/how-guides-work"
    },
    {
      title: "Privacy & Data",
      description: "How we handle your information",
      icon: Shield,
      href: "/docs/privacy"
    },
    {
      title: "Community Guidelines",
      description: "Rules for discussions and contributions",
      icon: Users,
      href: "/docs/community-guidelines"
    }
  ];

  const basicsDocs = [
    {
      title: "Browse Guides",
      description: "How to find the right guide for your situation",
      icon: Search,
      href: "/docs/browse-guides"
    },
    {
      title: "Using the Workspace",
      description: "Answer questions and save your progress",
      icon: FileText,
      href: "/docs/workspace"
    },
    {
      title: "Export & Share",
      description: "Download your work as PDF",
      icon: Download,
      href: "/docs/export"
    },
    {
      title: "Request a Guide",
      description: "Suggest new guides for the community",
      icon: MessageSquare,
      href: "/docs/request-guide"
    }
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar Navigation */}
      <aside className="hidden lg:block w-64 flex-shrink-0 border-r border-border h-[calc(100vh-3.5rem)] sticky top-14 overflow-y-auto bg-background">
          <div className="py-6 px-4 space-y-6">
            <nav className="space-y-1">
              {sidebarSections.map((section) => (
                <div key={section.id}>
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="flex items-center justify-between w-full text-sm font-medium py-1.5 px-2 hover:bg-muted/50 rounded transition-colors text-left"
                  >
                    <span className="text-sm">{section.title}</span>
                    {expandedSections.includes(section.id) ? (
                      <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
                    ) : (
                      <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
                    )}
                  </button>

                  {expandedSections.includes(section.id) && (
                    <div className="ml-3 mt-1 space-y-0.5 border-l border-border pl-3">
                      {section.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block text-sm text-muted-foreground hover:text-foreground py-1.5 px-2 rounded hover:bg-muted/50 transition-colors"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 py-8">
            {/* Header */}
            <div className="mb-10">
              <h1 className="text-3xl font-semibold tracking-tight mb-2">Documentation</h1>
              <p className="text-base text-muted-foreground">
                Everything you need to know about using Templata
              </p>
            </div>

            {/* Popular */}
            <div className="mb-12">
              <h2 className="text-xl font-semibold mb-4">Popular</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {popularDocs.map((doc) => (
                  <Link
                    key={doc.href}
                    href={doc.href}
                    className="group border border-border rounded-md p-4 hover:border-primary/50 transition-colors bg-card"
                  >
                    <doc.icon className="h-4 w-4 text-muted-foreground mb-2" />
                    <h3 className="text-sm font-semibold mb-1.5 group-hover:text-primary transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                      {doc.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Templata Basics */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Templata Basics</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {basicsDocs.map((doc) => (
                  <Link
                    key={doc.href}
                    href={doc.href}
                    className="group border border-border rounded-md p-4 hover:border-primary/50 transition-colors bg-card"
                  >
                    <doc.icon className="h-4 w-4 text-muted-foreground mb-2" />
                    <h3 className="text-sm font-semibold mb-1.5 group-hover:text-primary transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                      {doc.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
  );
}
