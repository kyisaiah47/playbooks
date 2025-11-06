"use client";

import { ArrowRight, HelpCircle, BookOpen, Map, Calendar, ListTodo, Library, BarChart3, LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const IntegrationsNetwork = () => {
  const IconElem = ({ icon: Icon, title }: { icon: LucideIcon; title: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-muted mb-3 hidden h-14 w-14 rounded-lg p-2 shadow-[rgba(50,50,105,0.15)_0px_2px_5px_0px,rgba(0,0,0,0.05)_0px_1px_1px_0px] md:flex items-center justify-center">
        <Icon className="h-8 w-8" />
      </div>
      <Badge variant="secondary" className="font-mono text-xs font-semibold">
        {title}
      </Badge>
    </div>
  );

  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-16 flex flex-col items-center md:mb-6">
          <Badge variant="secondary" className="bg-muted mb-6">
            Complete System
          </Badge>
          <h1 className="mb-3 max-w-md text-center text-2xl font-medium md:text-4xl">
            Every Feature You Need
          </h1>
          <p className="mb-3 max-w-80 text-center">
            Questions, readings, calendar, tasks, and more—all organized by life event.
          </p>
          <Button variant="link" asChild className="text-blue-700">
            <a href="/guides">
              Explore Guides <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>
        <div className="relative mx-auto flex max-w-3xl flex-col gap-5 overflow-hidden pb-8 md:gap-0">
          <div className="flex justify-around md:mb-[-30px]">
            <IconElem
              icon={HelpCircle}
              title="Questions"
            />
            <IconElem
              icon={BookOpen}
              title="Readings"
            />
          </div>
          <div className="flex justify-center md:mb-[-30px]">
            <IconElem
              icon={Map}
              title="Guides"
            />
          </div>
          <div className="flex justify-evenly md:mb-[-30px]">
            <IconElem icon={Calendar} title="Calendar" />
            <IconElem icon={ListTodo} title="Tasks" />
          </div>
          <div className="flex justify-between">
            <IconElem
              icon={Library}
              title="Library"
            />
            <IconElem
              icon={BarChart3}
              title="Analytics"
            />
          </div>

          {[...Array(11)].map((_, index) => (
            <div
              key={index}
              className="absolute -bottom-2 left-1/2 z-[-2] aspect-square rounded-full border border-indigo-200"
              style={{
                width: 60 + 80 * index + "px",
                opacity: 0.5,
                filter: "saturate(10%)",
                transform: "translateX(-50%) translateY(50%)",
              }}
            />
          ))}
          <div className="bg-linear-to-b from-background absolute inset-0 z-[-1] via-transparent to-transparent" />
          <div className="bg-linear-to-l from-background absolute inset-0 z-[-1] via-transparent to-transparent" />
          <div className="bg-linear-to-r from-background absolute inset-0 z-[-1] via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 z-[-2] h-[1px] w-full bg-indigo-200 opacity-50" />
        </div>
      </div>
    </section>
  );
};

export { IntegrationsNetwork };
