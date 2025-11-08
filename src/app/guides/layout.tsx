import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planning Guides & Templates - Templata",
  description:
    "Explore comprehensive planning guides for life's biggest moments. Each guide includes structured questions, curated expert readings, and integrated planning tools to help you think through every important decision.",
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
    title: "Planning Guides & Templates - Templata",
    description:
      "Explore comprehensive planning guides for life's biggest moments. Structured questions, curated expert readings, and integrated planning tools.",
    url: "https://templata.org/guides",
    siteName: "Templata",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://templata.org/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Templata Guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Planning Guides & Templates - Templata",
    description:
      "Explore comprehensive planning guides for life's biggest moments. Structured questions, curated expert readings, and integrated tools.",
    images: ["https://templata.org/og-image.svg"],
  },
};

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
