import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Community Playbooks — Playbooks',
  description: 'Browse AI-generated playbooks created by Playbooks users. Find playbooks for wedding planning, career moves, home buying, travel, and more. Fork any playbook and tailor it to your situation.',
  openGraph: {
    title: 'Community Playbooks — Playbooks',
    description: 'Browse AI-generated playbooks for life\'s biggest moments. Fork and customize any playbook for your situation.',
    url: 'https://playbooksai.vercel.app/community',
    type: 'website',
  },
  alternates: {
    canonical: 'https://playbooksai.vercel.app/community',
  },
};

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
