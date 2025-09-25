import { LoginForm } from "@/components/login-form"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login - Access Your Templata Account',
  description: 'Login to your Templata account to access 150+ life planning templates, workspaces, and AI-powered guidance for life\'s biggest moments.',
  robots: {
    index: false,
    follow: true,
  },
  metadataBase: new URL('https://templata.com'),
  alternates: {
    canonical: '/login',
  },
};

export default function LoginPage() {
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}
