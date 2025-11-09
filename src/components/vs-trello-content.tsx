"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const VsTrelloContent: React.FC = () => (
  <div className="container max-w-4xl py-32">
    <Badge variant="secondary" className="mb-4">Comparison</Badge>
    <h1 className="text-5xl font-bold mb-4">Templata vs Trello</h1>
    <p className="text-xl text-muted-foreground mb-8">Comprehensive planning frameworks vs basic task management</p>
    <div className="space-y-6 mb-8">
      <div><h3 className="font-semibold mb-2">Planning Approach</h3><p className="text-muted-foreground">Templata: Comprehensive frameworks with AI-refined questions and expert guidance. Trello: Kanban task boards.</p></div>
      <div><h3 className="font-semibold mb-2">Expert Content</h3><p className="text-muted-foreground">Templata: Curated expert readings integrated with planning. Trello: No content, just task management.</p></div>
      <div><h3 className="font-semibold mb-2">Coverage</h3><p className="text-muted-foreground">Templata: 90%+ validated comprehensive coverage. Trello: Track tasks you've already identified.</p></div>
      <div><h3 className="font-semibold mb-2">Organization</h3><p className="text-muted-foreground">Templata: Per-guide workspaces with integrated tools. Trello: Flexible boards and cards.</p></div>
      <div><h3 className="font-semibold mb-2">Pricing</h3><p className="text-muted-foreground">Templata: Free forever. Trello: $5-10+/month for power-ups and unlimited boards.</p></div>
    </div>
    <Link href="/guides"><Button size="lg">Start Planning Free</Button></Link>
  </div>
);
