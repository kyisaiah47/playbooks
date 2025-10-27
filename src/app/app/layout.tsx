import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Workspace | Templata',
  description: 'Your personal workspace in Templata. Create guides, journal reflections, and organize your life projects.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
