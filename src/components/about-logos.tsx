import { Notion } from "@/components/ui/svgs/notion";
import { Raycast } from "@/components/ui/svgs/raycast";
import { Linear } from "@/components/ui/svgs/linear";
import { Vercel } from "@/components/ui/svgs/vercel";
import { ShadcnUi } from "@/components/ui/svgs/shadcnUi";

const AboutLogos = () => {
  const topRowCompanies = [
    {
      name: "Notion",
      component: Notion,
      width: 32,
      height: 32,
      href: "https://notion.so",
    },
    {
      name: "Raycast",
      component: Raycast,
      width: 32,
      height: 32,
      href: "https://raycast.com",
    },
  ];

  const bottomRowCompanies = [
    {
      name: "Linear",
      component: Linear,
      width: 32,
      height: 32,
      href: "https://linear.app",
    },
    {
      name: "Vercel",
      component: Vercel,
      width: 32,
      height: 32,
      href: "https://vercel.com",
    },
    {
      name: "shadcn/ui",
      component: ShadcnUi,
      width: 32,
      height: 32,
      href: "https://ui.shadcn.com",
    },
  ];

  return (
    <section className="py-32">
      <div className="container space-y-10 lg:space-y-16">
        <div className="text-center">
          <h2 className="mb-4 text-balance text-2xl font-medium tracking-tight md:text-3xl lg:text-4xl">
            Inspired by the best.
            <br className="max-md:hidden" />
            <span className="text-muted-foreground">
              Brands that democratized complex tools for everyone.
            </span>
          </h2>
        </div>

        <div className="flex w-full flex-col items-center gap-8">
          {/* Top row - 2 logos */}
          <div className="grid grid-cols-2 items-center justify-items-center gap-x-12 gap-y-8 max-md:w-full sm:grid-cols-2 md:gap-x-20 lg:gap-x-28">
            {topRowCompanies.map((company, index) => {
              const Component = company.component;
              return (
                <a href={company.href} target="_blank" key={index} className="flex items-center gap-3 opacity-60 grayscale transition-opacity hover:opacity-80">
                  <Component
                    width={company.width}
                    height={company.height}
                    className="object-contain invert-0 dark:invert"
                  />
                  <span className="text-base font-medium">{company.name}</span>
                </a>
              );
            })}
          </div>

          {/* Bottom row - 3 logos */}
          <div className="grid grid-cols-2 items-center justify-items-center gap-x-12 gap-y-8 max-md:w-full sm:grid-cols-3 md:gap-x-20 lg:gap-x-28">
            {bottomRowCompanies.map((company, index) => {
              const Component = company.component;
              return (
                <a href={company.href} target="_blank" key={index} className="flex items-center gap-3 opacity-60 grayscale transition-opacity hover:opacity-80">
                  <Component
                    width={company.width}
                    height={company.height}
                    className="object-contain invert-0 dark:invert"
                  />
                  <span className="text-base font-medium">{company.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutLogos };
