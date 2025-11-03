import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reading - Templata",
  description:
    "Expert curated content to guide your biggest life decisions. Each reading is crafted to save you hundreds of hours of research, distilling complex topics into actionable insights.",
  keywords: [
    "life guidance",
    "expert readings",
    "curated content",
    "life planning resources",
    "expert advice",
    "decision guidance",
  ],
  openGraph: {
    title: "Reading - Templata",
    description:
      "Expert curated content to guide your biggest life decisions.",
    url: "https://templata.org/reading",
    siteName: "Templata",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://templata.org/og-image.png",
        width: 1200,
        height: 630,
        alt: "Templata Reading",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reading - Templata",
    description:
      "Expert curated content to guide your biggest life decisions.",
    images: ["https://templata.org/og-image.png"],
  },
};

export default function ReadingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
