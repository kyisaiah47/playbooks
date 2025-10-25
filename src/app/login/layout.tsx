import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Log In | Templata',
  description: 'Log in to your Templata account to access your guides, reflections, and life planning workspace.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
