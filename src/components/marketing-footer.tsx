import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";

const sections = [
  {
    title: "Product",
    links: [
      { name: "Guides", href: "/guides" },
      { name: "Library", href: "/library" },
      { name: "Questions", href: "/questions" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Tags", href: "/tags" },
      { name: "Collections", href: "/collections" },
      { name: "Glossary", href: "/glossary" },
      { name: "Sitemap", href: "/sitemap" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "How to Use", href: "/how-to-use" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
      { name: "Changelog", href: "/changelog" },
    ],
  },
];

interface Footer23Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
}
const MarketingFooter = ({
  logo = {
    url: "https://templata.org",
    src: "/favicon.svg",
    alt: "Templata",
    title: "Templata",
  },
}: Footer23Props) => {
  return (
    <section className="pb-16">
      <div className="container">
        <footer>
          <Separator className="my-14" />
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div className="lg:max-w-md">
              <div className="flex items-center justify-start gap-2">
                <Link href="/">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.title}
                    width={32}
                    height={32}
                    className="h-8 w-8 dark:invert-0 invert"
                  />
                </Link>
                <h2 className="text-xl font-semibold tracking-tighter">
                  {logo.title}
                </h2>
              </div>
              <p className="text-muted-foreground mt-2 text-left text-sm italic">
                Notion meets a life coach
              </p>
              <p className="text-muted-foreground mt-4 text-left text-sm">
                The comprehensive guide + planning tool for life's biggest moments.
                Comprehensive questions, expert readings, and integrated planning—all in one place.
              </p>
            </div>
            <div className="mt-8 flex w-full flex-wrap justify-between gap-12 lg:mt-0 lg:w-fit">
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx} className="mb-4">
                  <h3 className="mb-4 font-semibold tracking-tight">
                    {section.title}
                  </h3>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx} className="hover:text-primary">
                        <Link href={link.href}>{link.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { MarketingFooter };
