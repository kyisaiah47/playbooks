import type { Metadata } from 'next';
import Script from 'next/script';
import { PageLayout } from '@/components/layout';
import { TasksFeatureContent } from '@/components/tasks-feature-content';

export const metadata: Metadata = {
  title: 'Task Management - Organize Action Items Per Guide | Templata',
  description: 'Per-guide task management to track action items and to-dos for each life event. Wedding tasks, career action items, home buying to-dos—all organized separately by priority and status. Free task management tool.',
  keywords: 'task management, to-do list, action items, per-guide tasks, wedding planning tasks, career planning to-dos, project task management, task organization, free task manager, life planning tasks, milestone tasks, priority tasks',
  authors: [{ name: 'Templata' }],
  creator: 'Templata',
  publisher: 'Templata',
  openGraph: {
    title: 'Task Management - Organize Action Items Per Guide | Templata',
    description: 'Per-guide task management to track action items for each life event separately.',
    url: 'https://templata.org/features/tasks',
    siteName: 'Templata',
    images: [
      {
        url: 'https://templata.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Templata Tasks Feature',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Task Management - Organize Action Items Per Guide | Templata',
    description: 'Per-guide task management to track action items for each life event separately.',
    images: ['https://templata.org/og-image.png'],
    creator: '@templata',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://templata.org/features/tasks',
  },
};

export default function TasksFeaturePage() {
  // WebPage schema
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Task Management - Templata',
    description: 'Per-guide task management for organizing action items across life events',
    url: 'https://templata.org/features/tasks',
  };

  // SoftwareApplication schema
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Templata Tasks',
    applicationCategory: 'ProductivityApplication',
    description: 'Per-guide task management system for tracking action items across multiple life events',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'Per-guide task organization',
      'Priority levels (low, medium, high)',
      'Status tracking (todo, in progress, done)',
      'Due date management',
      'Task descriptions and notes',
      'Separate task lists per life event',
    ],
  };

  // FAQ schema for tasks feature
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does per-guide task management work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Each life event guide gets its own dedicated task list. Wedding tasks stay in your wedding guide, career tasks stay in your career guide, and so on. This separation prevents task overload and helps you focus on the right action items for each life event.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I prioritize my tasks?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Set priority levels (low, medium, high) for each task to focus on what matters most. Track status (To Do, In Progress, Done) and add optional due dates to manage deadlines effectively.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is task management free in Templata?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, task management is free during beta. You get unlimited tasks across all your guides with full priority management, status tracking, and due dates at no cost during beta.',
        },
      },
    ],
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://templata.org',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Features',
        item: 'https://templata.org/features',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Tasks',
        item: 'https://templata.org/features/tasks',
      },
    ],
  };

  return (
    <>
      <Script
        id="tasks-webpage-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Script
        id="tasks-software-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <Script
        id="tasks-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="tasks-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageLayout>
        <TasksFeatureContent />
      </PageLayout>

      {/* Hidden SEO content */}
      <div className="sr-only" aria-hidden="true">
        <h2>Task Management Feature - Templata</h2>
        <p>
          Templata's per-guide task system helps you organize action items and to-dos for each life event separately. Track wedding vendor tasks, career transition action items, and home buying to-dos—all in dedicated task lists that keep your planning organized.
        </p>

        <h3>Per-Guide Task Organization</h3>
        <p>
          Each life event guide gets its own task list. Your wedding planning tasks stay separate from your career transition action items, preventing confusion and helping you focus on the right tasks for each life event.
        </p>

        <h3>Priority Management</h3>
        <p>
          Set priority levels (low, medium, high) for each task to focus on what matters most. Tackle high-priority vendor bookings first, then move to medium-priority planning details, and handle low-priority nice-to-haves when time allows.
        </p>

        <h3>Status Tracking</h3>
        <p>
          Track task progress through three statuses: To Do (not started), In Progress (working on it), and Done (completed). See at a glance what needs attention and what's been accomplished.
        </p>

        <h3>Due Date Management</h3>
        <p>
          Add optional due dates to tasks to track deadlines. See upcoming tasks across all your guides or focus on deadlines for a specific life event.
        </p>

        <h3>Use Cases</h3>
        <p><strong>Wedding Planning:</strong> Track tasks like "Book venue," "Send invitations," "Finalize menu," and "Order cake"—all in your wedding task list.</p>
        <p><strong>Career Transitions:</strong> Manage action items like "Update resume," "Research companies," "Practice interview questions," and "Follow up with contacts."</p>
        <p><strong>Home Buying:</strong> Organize tasks such as "Get pre-approved," "Schedule inspections," "Review contracts," and "Arrange movers."</p>
        <p><strong>Business Launch:</strong> Keep track of "Finalize business plan," "Register LLC," "Build website," and "Launch marketing campaign."</p>
      </div>
    </>
  );
}
