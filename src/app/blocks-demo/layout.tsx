import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Templata - The Luxury Guide for Life's Biggest Moments",
  description:
    "Transform life's biggest moments from overwhelming to exhilarating. Comprehensive questions covering 90%+ of what you need to consider, expert readings to guide decisions, and premium analytics—all wrapped in sophisticated design.",
  keywords: [
    "life planning",
    "wedding planning",
    "home buying guide",
    "career change",
    "life decisions",
    "productivity tool",
    "planning app",
    "life guides",
    "comprehensive questions",
    "expert guidance",
  ],
  authors: [{ name: "Templata" }],
  openGraph: {
    title: "Templata - The Luxury Guide for Life's Biggest Moments",
    description:
      "Transform life's biggest moments from overwhelming to exhilarating. Comprehensive questions, expert readings, and premium analytics.",
    url: "https://templata.org",
    siteName: "Templata",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://templata.org/og-image.png",
        width: 1200,
        height: 630,
        alt: "Templata - The Luxury Guide for Life's Biggest Moments",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Templata - The Luxury Guide for Life's Biggest Moments",
    description:
      "Transform life's biggest moments from overwhelming to exhilarating. Comprehensive questions, expert readings, and premium analytics.",
    images: ["https://templata.org/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function BlocksDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
