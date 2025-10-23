"use client";

import Link from "next/link";
import { PageLayout } from "@/components/layout";
import {
  BookOpen,
  FileText,
  Users,
  Shield,
  Zap,
  MessageSquare,
  Download,
  Search,
  ArrowRight
} from "lucide-react";

export default function DocsPage() {
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
    <PageLayout>
      <div className="max-w-7xl mx-auto px-6 py-12">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
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
    </PageLayout>
  );
}
