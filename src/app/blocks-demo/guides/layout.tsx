import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guides - Templata",
  description:
    "Explore comprehensive guides for life's biggest moments. Each guide includes AI-refined questions covering 90%+ of what you need to consider, curated expert readings, and integrated planning tools.",
  keywords: [
    "life guides",
    "comprehensive planning",
    "life event guides",
    "templata guides",
    "expert guidance",
    "life planning resources",
    "major life decisions",
  ],
  openGraph: {
    title: "Guides - Templata",
    description:
      "Explore comprehensive guides for life's biggest moments with AI-refined questions and expert readings.",
    url: "https://templata.org/guides",
    siteName: "Templata",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://templata.org/og-image.png",
        width: 1200,
        height: 630,
        alt: "Templata Guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guides - Templata",
    description:
      "Explore comprehensive guides for life's biggest moments with AI-refined questions and expert readings.",
    images: ["https://templata.org/og-image.png"],
  },
};

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
