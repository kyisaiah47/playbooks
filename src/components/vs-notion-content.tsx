"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check, X, Sparkles, FileText, Calendar, Target } from "lucide-react";
import { Particles } from "@/components/magicui/particles";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const VsNotionContent: React.FC = () => {
  const comparisons = [
    { feature: "Planning Guidance", templata: "Expert frameworks with 90%+ coverage", notion: "Blank pages, DIY structure" },
    { feature: "AI-Refined Questions", templata: "200-500+ per guide", notion: "None - create your own" },
    { feature: "Expert Readings", templata: "Curated, vetted content", notion: "DIY research" },
    { feature: "Setup Time", templata: "Start in minutes", notion: "Hours of customization" },
    { feature: "Pricing", templata: "Free forever", notion: "$10/month for meaningful features" },
    { feature: "Per-Guide Organization", templata: "Built-in, automatic", notion: "Manual setup required" },
    { feature: "Coverage Validation", templata: "Axiom Engine ensures 90%+", notion: "No validation" },
  ];

  return (
    <div>
      <section className="relative py-32 pt-56">
        <div className="container flex flex-col items-center justify-center gap-4 overflow-hidden">
          <Badge variant="secondary">Detailed Comparison</Badge>
          <h1 className="relative z-15 max-w-4xl text-center text-6xl font-medium tracking-tighter md:text-7xl">
            <span className="overflow-hidden" style={{transformStyle:"preserve-3d",perspective:"600px"}}>
              {"Templata vs Notion".split(" ").map((word,i)=>(
                <motion.span className="relative inline-block px-[6px] leading-[none]" key={i}
                  initial={{opacity:0,y:"70%",rotateX:"-28deg"}} animate={{opacity:1,y:"0%",rotateX:"0deg"}}
                  transition={{delay:i*0.08+0.1,duration:0.8,ease:[0.215,0.61,0.355,1]}}>{word}</motion.span>
              ))}
            </span>
          </h1>
          <p className="text-muted-foreground max-w-2xl text-center text-lg mt-4">
            Expert frameworks with AI-refined questions vs blank pages. See the difference.
          </p>
          <Particles className="absolute inset-0 z-0" quantity={500} ease={80} refresh/>
          <div className="h-92 bg-background absolute bottom-20 left-0 right-0 w-full blur-xl"/>
        </div>
      </section>

      <section className="py-16 border-t border-border">
        <div className="container max-w-5xl">
          <div className="space-y-3">
            {comparisons.map((comp,idx)=>(
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="text-lg">{comp.feature}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"/>
                      <div><strong>Templata:</strong> {comp.templata}</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5"/>
                      <div><strong>Notion:</strong> {comp.notion}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border bg-muted/30">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-semibold mb-4">Try Templata Free</h2>
          <p className="text-muted-foreground text-lg mb-8">Expert frameworks. AI-refined questions. Free forever.</p>
          <Link href="/guides"><Button size="lg">Start Planning Free</Button></Link>
        </div>
      </section>
    </div>
  );
};
