import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Feature {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const DATA: Feature[] = [
  {
    id: "analytics-dashboard",
    title: "Analytics",
    description: "Real-time data insights.",
    imageUrl: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
  },
  {
    id: "team-collaboration",
    title: "Collaboration",
    description: "Shared workspaces for teams.",
    imageUrl: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg",
  },
  {
    id: "third-party-integrations",
    title: "Integrations",
    description: "Connect with popular tools.",
    imageUrl: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg",
  },
  {
    id: "customizable-templates",
    title: "Templates",
    description: "Pre-built for your workflow.",
    imageUrl: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-4.svg",
  },
  {
    id: "automated-workflows",
    title: "Automation",
    description: "Streamline repetitive tasks.",
    imageUrl: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-5.svg",
  },
  {
    id: "data-security",
    title: "Security",
    description: "Advanced encryption & compliance.",
    imageUrl: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-6.svg",
  },
  {
    id: "customer-support",
    title: "Support",
    description: "24/7 dedicated assistance.",
    imageUrl: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg",
  },
  {
    id: "mobile-app",
    title: "Mobile",
    description: "Stay connected on the go.",
    imageUrl: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
  },
  {
    id: "scalable-infrastructure",
    title: "Scalability",
    description: "Grow with your business.",
    imageUrl: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-4.svg",
  },
];

const AppFeaturesGrid = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Features at a glance
          </h2>
          <p className="text-muted-foreground mb-8 max-w-3xl text-lg sm:text-xl">
            Discover our comprehensive suite of features designed to streamline
            your workflow, boost productivity, and scale your business
            operations seamlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {DATA.map((feature) => (
            <Card
              key={feature.id}
              className="border-muted mt-6 flex items-center rounded-none border-0 border-b pb-6 shadow-none"
            >
              <a href="#" className="hover:opacity-70">
                <img
                  src={feature.imageUrl}
                  alt={feature.title}
                  className="bg-muted mr-4 h-16 w-16 rounded-md object-contain p-2"
                />
              </a>
              <div className="min-w-0 grow">
                <h3 className="text-md font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground mt-1 text-xs">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="secondary" size="lg">
            Explore all features
          </Button>
        </div>
      </div>
    </section>
  );
};

export { AppFeaturesGrid };
