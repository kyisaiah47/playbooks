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
  title: 'Templata | Wikipedia × Notion',
  description: 'Comprehensive guides meet flexible workspaces. Navigate major life decisions with expert-curated guides, guided questions, and split-screen note-taking.',
  keywords: 'life planning, decision making, guided questions, note taking, career change, personal development, life guides, workspace, planning tools',
  authors: [{ name: 'Templata' }],
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
    title: 'Templata | Wikipedia × Notion',
    description: 'Comprehensive guides meet flexible workspaces. Navigate major life decisions with expert-curated guides and split-screen note-taking.',
    url: 'https://templata.org',
    siteName: 'Templata',
    images: [
      {
        url: 'https://templata.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Templata - Wikipedia × Notion',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Templata | Wikipedia × Notion',
    description: 'Comprehensive guides meet flexible workspaces. Navigate major life decisions with expert-curated guides.',
    images: ['https://templata.org/og-image.png'],
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
              "@type": "WebApplication",
              "name": "Templata",
              "description": "Wikipedia × Notion - Comprehensive guides meet flexible workspaces",
              "url": "https://templata.org",
              "applicationCategory": "ProductivityApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
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
