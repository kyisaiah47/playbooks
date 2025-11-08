import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Templata - Our Story & Mission",
  description:
    "Learn how Templata evolved into a premium planning platform for life's biggest moments. Comprehensive guides powered by the Axiom Engine, expert readings, and integrated planning tools with thoughtful design.",
  keywords: [
    "about templata",
    "templata story",
    "axiom engine",
    "life planning tool",
    "comprehensive guides",
    "luxury productivity",
    "notion alternative",
    "life event planning",
  ],
  openGraph: {
    title: "About Templata - Our Story & Mission",
    description:
      "Learn how Templata evolved into a premium planning platform for life's biggest moments. Comprehensive guides, expert readings, and integrated planning tools.",
    url: "https://templata.org/about",
    siteName: "Templata",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://templata.org/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Our Story - Templata",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Templata - Our Story & Mission",
    description:
      "Learn how Templata evolved into a premium planning platform for life's biggest moments. Comprehensive guides, expert readings, integrated tools.",
    images: ["https://templata.org/og-image.svg"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
