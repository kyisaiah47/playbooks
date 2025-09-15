"use client";

import { TemplateView } from "@/components/template/TemplateView";
import { HomeBuyingProvider } from "@/contexts/home-buying-context";
import { templateRegistry } from "@/registry/templates";

export default function HomeBuyingAppPage() {
  const template = templateRegistry.find(t => t.id === "home-buying")?.template;
  
  if (!template) {
    return <div>Template not found</div>;
  }

  return (
    <HomeBuyingProvider>
      <TemplateView template={template} />
    </HomeBuyingProvider>
  );
}