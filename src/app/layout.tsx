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
  metadataBase: new URL('https://templata.org'),
  title: 'Templata — AI Playbooks for Life\'s Biggest Moments',
  description: 'Describe what you\'re planning and Claude builds a personalized playbook in seconds. Tasks, questions, and AI insight tailored to your situation — not a generic template.',
  keywords: 'ai planning, life planning, wedding planning app, career change planner, home buying guide, ai playbook, personalized planning, claude ai, life events',
  authors: [{ name: 'Templata' }],
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
    title: 'Templata — AI Playbooks for Life\'s Biggest Moments',
    description: 'Describe what you\'re planning and Claude builds a personalized playbook in seconds. Not a generic template — yours.',
    url: 'https://templata.org',
    siteName: 'Templata',
    images: [
      {
        url: 'https://templata.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Templata — AI Playbooks for Life\'s Biggest Moments',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Templata — AI Playbooks for Life\'s Biggest Moments',
    description: 'Describe what you\'re planning and Claude builds a personalized playbook in seconds.',
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
    canonical: 'https://templata.org',
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
              "name": "Templata",
              "description": "Expert-crafted templates for life's biggest moments",
              "url": "https://templata.org",
              "logo": "https://templata.org/logo.png",
              "sameAs": [
                "https://twitter.com/templata",
                "https://linkedin.com/company/templata"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "templata.app@gmail.com"
              },
              "offers": {
                "@type": "Offer",
                "name": "Templata - Free Beta",
                "price": "0",
                "priceCurrency": "USD",
                "description": "Expertly crafted guides for life's biggest moments. Free beta access."
              }
            })
          }}
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
