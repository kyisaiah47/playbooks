"use client";

import React from "react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface StatItem {
  title: string;
  description: string;
}

const statsData: StatItem[] = [
  {
    title: "Wedding",
    description: "Most active guide",
  },
  {
    title: "Home Buying",
    description: "Second most active",
  },
  {
    title: "Career",
    description: "Recently started",
  },
];

const StatsRadar = () => {
  return (
    <section className="overflow-hidden py-32">
      <div className="container flex w-full flex-col items-center justify-center px-4">
        <p className="bg-muted mb-4 rounded-full px-2 py-1 text-xs uppercase">
          ANALYTICS
        </p>
        <h2 className="relative py-2 text-center font-sans text-4xl font-semibold tracking-tighter lg:text-5xl">
          Track Your Progress Over Time
        </h2>
        <p className="text-muted-foreground mx-auto max-w-xl px-5 text-center text-sm lg:text-base">
          See which guides you've been working on most. Track trends across months.
          Understand your progress at a glance.
        </p>

        <div className="my-10 h-[40vh] w-full max-w-xl">
          <ChartRadarDots />
        </div>
        <div className="flex w-full max-w-2xl items-center justify-between">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="w-25 flex flex-col items-center justify-center gap-2 text-center"
            >
              <h2 className="text-3xl font-semibold tracking-tighter md:text-5xl">
                {stat.title}
              </h2>
              <p className="text-muted-foreground text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const chartData = [
  { category: "Personal", guides: 5 },
  { category: "Professional", guides: 8 },
  { category: "Financial", guides: 6 },
  { category: "Health", guides: 7 },
  { category: "Relationships", guides: 4 },
  { category: "Education", guides: 3 },
];

const chartConfig = {
  guides: {
    label: "Guides",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

const ChartRadarDots = () => {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[350px]"
    >
      <RadarChart data={chartData}>
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <PolarAngleAxis dataKey="category" />
        <PolarGrid />
        <Radar
          dataKey="guides"
          fill="var(--color-guides)"
          fillOpacity={0.6}
          dot={{
            r: 4,
            fillOpacity: 1,
          }}
        />
      </RadarChart>
    </ChartContainer>
  );
};

export { StatsRadar };
