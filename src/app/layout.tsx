import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes"
import { SessionProvider } from "@/components/providers/session-provider"
import { UIProvider } from "@/components/providers/ui-provider"
import { QueryProvider } from "@/components/providers/QueryProvider"
import { ErrorBoundary } from "@/components/error-boundary"
import { AuthProvider } from "@/contexts/auth-context"
import { Analytics } from "@/components/analytics"
import { SpeedInsights } from "@vercel/speed-insights/next"

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Templata | Wikipedia × Notion for Life Planning',
  description: 'Expert-curated guides for life\'s biggest decisions. Get the framework — not a blank page.  guides with guided questions and curated reading.',
  keywords: 'life planning guides, decision framework, guided questions, curated reading, career change, relationships, health, personal growth, expert guidance',
  authors: [{ name: 'Templata Team' }],
  icons: {
    icon: "/brand/favicon-white.svg",
  },
  manifest: '/manifest.json',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    title: 'Templata | Wikipedia × Notion for Life Planning',
    description: 'Expert-curated guides for life\'s biggest decisions. Get the framework — not a blank page.',
    url: 'https://templata.org',
    siteName: 'Templata',
    images: [
      {
        url: 'https://templata.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Templata - Organize Life\'s Biggest Moments',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Templata | Wikipedia × Notion for Life Planning',
    description: 'Expert-curated guides for life\'s biggest decisions. Get the framework — not a blank page.',
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
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://templata.org',
  },
  category: 'productivity',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Templata",
              "description": "Expert-curated guides for life's biggest decisions",
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
                "name": "Templata - Free Forever",
                "price": "0",
                "priceCurrency": "USD",
                "description": "Full access to  guides with guided questions and curated reading. Completely free, no paywalls."
              }
            })
          }}
        />
      </head>
      <body
        className={`${outfit.variable} antialiased font-sans`}
      >
        <ErrorBoundary>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
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
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
