import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CustomThemeProvider } from "@/components/theme-provider-custom"
import { SessionProvider } from "@/components/providers/session-provider"
import { UIProvider } from "@/components/providers/ui-provider"
import { ErrorBoundary } from "@/components/error-boundary"
import { AuthProvider } from "@/contexts/auth-context"
import { UserUnlockProvider } from "@/contexts/UserUnlockContext"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Templata | Organize Life\'s Biggest Moments',
  description: 'Skip the blank page with expertly crafted templates for life\'s biggest moments. From wedding planning to career changes, get organized in minutes with proven frameworks from domain experts.',
  keywords: 'life planning templates, wedding planning, career change, home buying, business planning, expert guidance, structured frameworks, life organization',
  authors: [{ name: 'Templata Team' }],
  icons: {
    icon: "/brand/favicon-white.svg",
  },
  openGraph: {
    title: 'Templata | Organize Life\'s Biggest Moments',
    description: 'Skip the blank page with expertly crafted templates for life\'s biggest moments. Get organized in minutes with proven frameworks from domain experts.',
    url: 'https://templata.com',
    siteName: 'Templata',
    images: [
      {
        url: 'https://templata.com/og-image.png',
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
    title: 'Templata | Organize Life\'s Biggest Moments',
    description: 'Skip the blank page with expertly crafted templates for life\'s biggest moments.',
    images: ['https://templata.com/og-image.png'],
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
    canonical: 'https://templata.com',
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
              "description": "Expert-crafted templates for life's biggest moments",
              "url": "https://templata.com",
              "logo": "https://templata.com/logo.png",
              "sameAs": [
                "https://twitter.com/templata",
                "https://linkedin.com/company/templata"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "support@templata.com"
              },
              "offers": {
                "@type": "Offer",
                "name": "Templata - Free Forever",
                "price": "0",
                "priceCurrency": "USD",
                "description": "Full access to 1,298 templates, 15,000+ prompts, and 26,000+ articles. Completely free, no paywalls."
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ErrorBoundary>
          <CustomThemeProvider>
            <SessionProvider>
              <AuthProvider>
                <UserUnlockProvider>
                  <UIProvider>
                    {children}
                  </UIProvider>
                </UserUnlockProvider>
              </AuthProvider>
            </SessionProvider>
          </CustomThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
