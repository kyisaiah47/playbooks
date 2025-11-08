import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story - Templata",
  description:
    "From democratizing complexity to transforming life's biggest moments. Learn how Templata evolved into a luxury guide + planning tool powered by the Axiom Engine, delivering comprehensive coverage with Superhuman × Co-Star sophistication.",
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
    title: "Our Story - Templata",
    description:
      "From democratizing complexity to transforming life's biggest moments. Learn how Templata evolved into a luxury guide + planning tool.",
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
    title: "Our Story - Templata",
    description:
      "From democratizing complexity to transforming life's biggest moments. Learn how Templata evolved into a luxury guide + planning tool.",
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
