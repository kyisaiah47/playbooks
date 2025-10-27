import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up | Templata',
  description: 'Create a free Templata account to access 1,298 guides, 104,000+ questions, and 25,936 readings for life planning.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
