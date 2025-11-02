import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import {
  FileSpreadsheet,
  Flag,
  Layout,
  MessagesSquare,
  Settings,
  Target,
  Timer,
  Wand,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

const FeaturesTabbedHero = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4">
          <Badge
            variant="outline"
            className="flex items-center gap-1 px-2.5 py-1.5 text-sm"
          >
            <Flag className="h-auto w-4" />
            Highlights
          </Badge>
          <h2 className="text-center text-3xl font-semibold lg:text-4xl">
            Steps to Achieve Your Goals
          </h2>
          <p className="text-muted-foreground text-center lg:text-lg">
            Discover effective strategies to maximize your potential and enhance
            performance. Our platform is designed to help you achieve your
            goals.
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-7xl">
          <Tabs defaultValue="tab-1">
            <div className="max-w-[100vw-4rem] overflow-x-auto">
              <TabsList className="mx-auto flex w-fit justify-center gap-5 border-b">
                <TabsTrigger
                  value="tab-1"
                  className="data-[state=active]:border-primary group -mb-px flex flex-col items-center gap-1.5 px-1 pb-3.5 data-[state=active]:border-b"
                >
                  <span className="bg-muted group-data-[state=active]:bg-primary group-data-[state=active]:text-background flex size-12 items-center justify-center rounded-md transition-colors duration-300">
                    <Target className="w-7" />
                  </span>
                  <p className="text-muted-foreground text-sm">Aim</p>
                </TabsTrigger>
                <TabsTrigger
                  value="tab-2"
                  className="data-[state=active]:border-primary group -mb-px flex flex-col items-center gap-1.5 px-1 pb-3.5 data-[state=active]:border-b"
                >
                  <span className="bg-muted group-data-[state=active]:bg-primary group-data-[state=active]:text-background flex size-12 items-center justify-center rounded-md transition-colors duration-300">
                    <Layout className="w-7" />
                  </span>
                  <p className="text-muted-foreground text-sm">Plans</p>
                </TabsTrigger>
                <TabsTrigger
                  value="tab-3"
                  className="data-[state=active]:border-primary group -mb-px flex flex-col items-center gap-1.5 px-1 pb-3.5 data-[state=active]:border-b"
                >
                  <span className="bg-muted group-data-[state=active]:bg-primary group-data-[state=active]:text-background flex size-12 items-center justify-center rounded-md transition-colors duration-300">
                    <Wand className="w-7" />
                  </span>
                  <p className="text-muted-foreground text-sm">Execution</p>
                </TabsTrigger>
                <TabsTrigger
                  value="tab-4"
                  className="data-[state=active]:border-primary group -mb-px flex flex-col items-center gap-1.5 px-1 pb-3.5 data-[state=active]:border-b"
                >
                  <span className="bg-muted group-data-[state=active]:bg-primary group-data-[state=active]:text-background flex size-12 items-center justify-center rounded-md transition-colors duration-300">
                    <FileSpreadsheet className="w-7" />
                  </span>
                  <p className="text-muted-foreground text-sm">Files</p>
                </TabsTrigger>
                <TabsTrigger
                  value="tab-5"
                  className="data-[state=active]:border-primary group -mb-px flex flex-col items-center gap-1.5 px-1 pb-3.5 data-[state=active]:border-b"
                >
                  <span className="bg-muted group-data-[state=active]:bg-primary group-data-[state=active]:text-background flex size-12 items-center justify-center rounded-md transition-colors duration-300">
                    <Timer className="w-7" />
                  </span>
                  <p className="text-muted-foreground text-sm">Monitor</p>
                </TabsTrigger>
                <TabsTrigger
                  value="tab-6"
                  className="data-[state=active]:border-primary group -mb-px flex flex-col items-center gap-1.5 px-1 pb-3.5 data-[state=active]:border-b"
                >
                  <span className="bg-muted group-data-[state=active]:bg-primary group-data-[state=active]:text-background flex size-12 items-center justify-center rounded-md transition-colors duration-300">
                    <MessagesSquare className="w-7" />
                  </span>
                  <p className="text-muted-foreground text-sm">Comms</p>
                </TabsTrigger>
                <TabsTrigger
                  value="tab-7"
                  className="data-[state=active]:border-primary group -mb-px flex flex-col items-center gap-1.5 px-1 pb-3.5 data-[state=active]:border-b"
                >
                  <span className="bg-muted group-data-[state=active]:bg-primary group-data-[state=active]:text-background flex size-12 items-center justify-center rounded-md transition-colors duration-300">
                    <Settings className="w-7" />
                  </span>
                  <p className="text-muted-foreground text-sm">Settings</p>
                </TabsTrigger>
              </TabsList>
            </div>
            <div className="mt-5">
              <TabsContent value="tab-1" className="aspect-video">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                  alt="placeholder"
                  className="h-full w-full rounded-xl border object-cover"
                />
              </TabsContent>
              <TabsContent value="tab-2" className="aspect-video">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                  alt="placeholder"
                  className="h-full w-full rounded-xl border object-cover"
                />
              </TabsContent>
              <TabsContent value="tab-3" className="aspect-video">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
                  alt="placeholder"
                  className="h-full w-full rounded-xl border object-cover"
                />
              </TabsContent>
              <TabsContent value="tab-4" className="aspect-video">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg"
                  alt="placeholder"
                  className="h-full w-full rounded-xl border object-cover"
                />
              </TabsContent>
              <TabsContent value="tab-5" className="aspect-video">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg"
                  alt="placeholder"
                  className="h-full w-full rounded-xl border object-cover"
                />
              </TabsContent>
              <TabsContent value="tab-6" className="aspect-video">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-6.svg"
                  alt="placeholder"
                  className="h-full w-full rounded-xl border object-cover"
                />
              </TabsContent>
              <TabsContent value="tab-7" className="aspect-video">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                  alt="placeholder"
                  className="h-full w-full rounded-xl border object-cover"
                />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export { FeaturesTabbedHero };
