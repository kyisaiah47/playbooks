import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guide Library - Templata",
  description:
    "Browse 1,000+ comprehensive guides covering every major life event. From wedding planning to career pivots, home buying to business launches—each guide refined through months of AI testing to ensure 90%+ coverage.",
  keywords: [
    "life guides library",
    "comprehensive guides",
    "wedding planning guide",
    "home buying guide",
    "career change guide",
    "life event guides",
    "planning resources",
    "templata library",
  ],
  openGraph: {
    title: "Guide Library - Templata",
    description:
      "Browse 1,000+ comprehensive guides covering every major life event, each refined to ensure 90%+ coverage.",
    url: "https://templata.org/library",
    siteName: "Templata",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://templata.org/og-image.png",
        width: 1200,
        height: 630,
        alt: "Templata Guide Library",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guide Library - Templata",
    description:
      "Browse 1,000+ comprehensive guides covering every major life event, each refined to ensure 90%+ coverage.",
    images: ["https://templata.org/og-image.png"],
  },
};

export default function LibraryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
