import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "@/components/providers/session-provider"
import { UIProvider } from "@/components/providers/ui-provider"
import { QueryProvider } from "@/components/providers/QueryProvider"
import { ErrorBoundary } from "@/components/error-boundary"
import { AuthProvider } from "@/contexts/auth-context"
import { Analytics } from "@/components/analytics"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { TEMPLATA_FAQ, faqPageSchema } from "@/lib/seo"

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://playbooksai.vercel.app'),
  title: 'Playbooks — AI Playbooks for Life\'s Biggest Moments',
  description: 'Describe what you\'re planning and Claude builds a personalized playbook in seconds. Tasks, questions, and AI insight tailored to your situation — not a generic template.',
  keywords: 'ai planning, life planning, wedding planning app, career change planner, home buying guide, ai playbook, personalized planning, claude ai, life events',
  authors: [{ name: 'Playbooks' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Playbooks — AI Playbooks for Life\'s Biggest Moments',
    description: 'Describe what you\'re planning and Claude builds a personalized playbook in seconds. Not a generic template — yours.',
    url: 'https://playbooksai.vercel.app',
    siteName: 'Playbooks',
    images: [
      {
        url: '/social.png',
        width: 400,
        height: 400,
        alt: 'Playbooks — AI Playbooks for Life\'s Biggest Moments',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Playbooks — AI Playbooks for Life\'s Biggest Moments',
    description: 'Describe what you\'re planning and Claude builds a personalized playbook in seconds.',
    images: ['/social.png'],
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
    canonical: 'https://playbooksai.vercel.app',
  },
  category: 'productivity',
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
    other: {
      'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || '',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Playbooks",
              "description": "AI playbook generator for life's biggest moments. Describe your goal and get a personalized, step-by-step playbook in seconds.",
              "url": "https://playbooksai.vercel.app",
              "logo": "/social.png",
              "sameAs": [
                "https://twitter.com/templata",
                "https://linkedin.com/company/templata"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "templata.app@gmail.com"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Playbooks",
              "url": "https://playbooksai.vercel.app",
              "description": "AI-generated personalized playbooks for life's biggest moments.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://playbooksai.vercel.app/community?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Playbooks",
              "applicationCategory": "ProductivityApplication",
              "operatingSystem": "Web",
              "url": "https://playbooksai.vercel.app",
              "description": "Describe what you're planning and get a personalized AI-generated playbook in seconds — tasks, reflection questions, and resources tailored to your situation.",
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Free",
                  "price": "0",
                  "priceCurrency": "USD",
                  "description": "2 playbooks and 5 AI insights per month, community browsing"
                },
                {
                  "@type": "Offer",
                  "name": "Pro",
                  "price": "9",
                  "priceCurrency": "USD",
                  "description": "Unlimited playbooks and 100 AI insights per month"
                }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema()) }}
        />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased`}
      >
        <ErrorBoundary>
          <QueryProvider>
            <SessionProvider>
              <AuthProvider>
                  <UIProvider>
                    <Analytics />
                    <SpeedInsights />
                    {children}
                  </UIProvider>
              </AuthProvider>
            </SessionProvider>
          </QueryProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
