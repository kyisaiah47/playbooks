import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App - Templata",
  description:
    "Experience the premium planning platform for life's biggest moments. Browse comprehensive guides, answer structured questions, read expert content, and track progress with premium analytics—all in one sophisticated interface.",
  keywords: [
    "templata app",
    "life planning app",
    "guide application",
    "productivity tool",
    "premium analytics",
    "life event tracker",
    "comprehensive questions",
    "expert readings",
    "premium productivity",
  ],
  openGraph: {
    title: "App - Templata",
    description:
      "Experience the premium planning platform for life's biggest moments. Comprehensive guides with premium analytics.",
    url: "https://templata.org/app",
    siteName: "Templata",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://templata.org/og-image.png",
        width: 1200,
        height: 630,
        alt: "Templata App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "App - Templata",
    description:
      "Experience the premium planning platform for life's biggest moments. Comprehensive guides with premium analytics.",
    images: ["https://templata.org/og-image.png"],
  },
  robots: {
    index: false, // Don't index the app page itself
    follow: true,
  },
};

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
