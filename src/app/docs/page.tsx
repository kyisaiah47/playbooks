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
    <div className="flex">
      {/* Sidebar Navigation */}
      <aside className="hidden lg:block w-64 flex-shrink-0 border-r border-border h-[calc(100vh-3.5rem)] sticky top-14 overflow-y-auto">
          <div className="p-6 space-y-6">
            <div>
              <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Documentation
              </h2>
            </div>

            <nav className="space-y-1">
              {sidebarSections.map((section) => (
                <div key={section.id}>
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="flex items-center justify-between w-full text-sm font-medium py-2 px-2 hover:bg-muted rounded-md transition-colors"
                  >
                    <span>{section.title}</span>
                    {expandedSections.includes(section.id) ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </button>

                  {expandedSections.includes(section.id) && (
                    <div className="ml-2 mt-1 space-y-1">
                      {section.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block text-sm text-muted-foreground hover:text-foreground py-2 px-3 rounded-md hover:bg-muted transition-colors"
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
        <main className="flex-1 px-6 lg:px-12 py-12">
          <div className="max-w-5xl">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl font-semibold tracking-tight mb-3">Documentation</h1>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about using Templata
              </p>
            </div>

            {/* Popular */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-6">Popular</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {popularDocs.map((doc) => (
                  <Link
                    key={doc.href}
                    href={doc.href}
                    className="group border border-border rounded-lg p-5 hover:border-primary/50 transition-colors"
                  >
                    <doc.icon className="h-5 w-5 text-muted-foreground mb-3" />
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {doc.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Templata Basics */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Templata Basics</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {basicsDocs.map((doc) => (
                  <Link
                    key={doc.href}
                    href={doc.href}
                    className="group border border-border rounded-lg p-5 hover:border-primary/50 transition-colors"
                  >
                    <doc.icon className="h-5 w-5 text-muted-foreground mb-3" />
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
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
