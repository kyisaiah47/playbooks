"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const VsGoogleDocsContent: React.FC = () => (
  <div className="container max-w-4xl py-32">
    <Badge variant="secondary" className="mb-4">Comparison</Badge>
    <h1 className="text-5xl font-bold mb-4">Templata vs Google Docs</h1>
    <p className="text-xl text-muted-foreground mb-8">Expert frameworks vs blank documents for life planning</p>
    <div className="space-y-6 mb-8">
      <div><h3 className="font-semibold mb-2">Planning Guidance</h3><p className="text-muted-foreground">Templata: Expert frameworks with 200-500+ AI-refined questions per guide. Google Docs: Blank documents, no guidance.</p></div>
      <div><h3 className="font-semibold mb-2">Coverage</h3><p className="text-muted-foreground">Templata: 90%+ validated through Axiom Engine. Google Docs: You determine what's important.</p></div>
      <div><h3 className="font-semibold mb-2">Expert Content</h3><p className="text-muted-foreground">Templata: Curated expert readings. Google Docs: External research required.</p></div>
      <div><h3 className="font-semibold mb-2">Organization</h3><p className="text-muted-foreground">Templata: Per-guide workspaces with calendars, tasks, notes. Google Docs: Manual folder organization.</p></div>
      <div><h3 className="font-semibold mb-2">Pricing</h3><p className="text-muted-foreground">Both free. Templata includes expert content. Google Docs requires external research.</p></div>
    </div>
    <Link href="/guides"><Button size="lg">Try Templata Free</Button></Link>
  </div>
);
