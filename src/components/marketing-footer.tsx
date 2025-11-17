import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { LogoWithName } from "@/components/logo-with-name";

const sections = [
  {
    title: "Product",
    links: [
      { name: "Guides", href: "/guides" },
      { name: "Library", href: "/library" },
      { name: "Questions", href: "/questions" },
      { name: "Features", href: "/features" },
      { name: "Use Cases", href: "/use-cases" },
      { name: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Features",
    links: [
      { name: "Calendar", href: "/features/calendar" },
      { name: "Tasks", href: "/features/tasks" },
      { name: "Analytics", href: "/features/analytics" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Tags", href: "/tags" },
      { name: "Collections", href: "/collections" },
      { name: "Glossary", href: "/glossary" },
      { name: "Sitemap", href: "/site-map" },
      { name: "FAQ", href: "/faq" },
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
    title: "Compare",
    links: [
      { name: "vs Google", href: "/vs/google" },
      { name: "vs Wikipedia", href: "/vs/wikipedia" },
      { name: "vs Notion", href: "/vs/notion" },
      { name: "vs Google Docs", href: "/vs/google-docs" },
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
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
            <div className="lg:max-w-md">
              <LogoWithName href="/" size="lg" />
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

          <Separator className="my-8" />

          <div className="flex justify-end">
            <div className="flex gap-4 text-xs text-muted-foreground">
              <Link href="/privacy" className="hover:text-primary">Privacy</Link>
              <Link href="/terms" className="hover:text-primary">Terms</Link>
              <Link href="/changelog" className="hover:text-primary">Changelog</Link>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { MarketingFooter };
