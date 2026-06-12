import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Community Playbooks — Playbook',
  description: 'Browse AI-generated playbooks created by Playbook users. Find playbooks for wedding planning, career moves, home buying, travel, and more. Fork any playbook and tailor it to your situation.',
  openGraph: {
    title: 'Community Playbooks — Playbook',
    description: 'Browse AI-generated playbooks for life\'s biggest moments. Fork and customize any playbook for your situation.',
    url: 'https://templata.org/community',
    type: 'website',
  },
  alternates: {
    canonical: 'https://templata.org/community',
  },
};

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
