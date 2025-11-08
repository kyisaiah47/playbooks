import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reading Library - Expert Insights & Guides | Templata",
  description:
    "Browse curated expert readings covering major life events. From wedding planning tips to career change strategies, home buying advice to business insights—practical, actionable knowledge from domain experts.",
  keywords: [
    "expert readings",
    "life planning advice",
    "wedding planning tips",
    "home buying guide",
    "career change advice",
    "expert insights",
    "planning resources",
    "templata library",
  ],
  openGraph: {
    title: "Reading Library - Expert Insights & Guides | Templata",
    description:
      "Browse curated expert readings covering major life events. Practical, actionable knowledge from domain experts.",
    url: "https://templata.org/library",
    siteName: "Templata",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://templata.org/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Templata Reading Library",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reading Library - Expert Insights & Guides | Templata",
    description:
      "Browse curated expert readings covering major life events. Practical, actionable knowledge from domain experts.",
    images: ["https://templata.org/og-image.svg"],
  },
};

export default function LibraryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
