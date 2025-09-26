"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  Lightbulb,
  Target,
  FileText,
  ArrowRight,
  Clock,
  Star
} from "lucide-react";
import { PageLayout } from "@/components/layout";
import BackgroundPaperShaders from "@/components/ui/background-paper-shaders";
import {
  Announcement,
  AnnouncementTag,
  AnnouncementTitle
} from "@/components/ui/announcement";

interface LandingPageData {
  templateLanding: {
    seo: {
      title: string;
      description: string;
      keywords: string[];
      ogTitle: string;
      ogDescription: string;
    };
    hero: {
      announcement: {
        tag: string;
        title: string;
      };
      headline: string;
      subheadline: string;
      description: string;
      primaryCta: {
        text: string;
        subtext: string;
      };
      secondaryCta: {
        text: string;
        subtext: string;
      };
    };
    whatYouGet: {
      sectionTitle: string;
      sectionSubtitle: string;
      features: Array<{
        icon: string;
        title: string;
        description: string;
      }>;
    };
    howItWorks: {
      sectionTitle: string;
      sectionSubtitle: string;
      steps: Array<{
        number: string;
        title: string;
        description: string;
      }>;
    };
    exampleContent: {
      sectionTitle: string;
      sectionSubtitle: string;
      prompts: {
        title: string;
        subtitle: string;
        items: string[];
      };
      articles: {
        title: string;
        subtitle: string;
        items: Array<{
          title: string;
          description: string;
          readTime: string;
          difficulty: string;
        }>;
      };
    };
    finalCta: {
      sectionTitle: string;
      sectionSubtitle: string;
      primaryCta: {
        text: string;
        subtext: string;
      };
      secondaryCta: {
        text: string;
        subtext: string;
      };
      guarantee: string;
    };
  };
}

// Icon mapping
const iconMap: { [key: string]: any } = {
  CheckCircle2,
  Lightbulb,
  Target,
  FileText
};

interface MarketingClientProps {
  params: Promise<{ slug: string }>;
}

export default function MarketingClient({ params }: MarketingClientProps) {
  const { slug } = use(params);
  const [landingData, setLandingData] = useState<LandingPageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadLandingData = async () => {
      try {
        // Try to load the landing page JSON data
        const response = await fetch(`/${slug}-landing-page.json`);
        if (response.ok) {
          const data = await response.json();
          setLandingData(data);
        } else {
          console.error(`No landing page data found for ${slug}`);
        }
      } catch (error) {
        console.error(`Error loading landing page data for ${slug}:`, error);
      } finally {
        setLoading(false);
      }
    };

    loadLandingData();
  }, [slug]);

  if (loading) {
    return (
      <PageLayout>
        <div className="h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-pulse text-muted-foreground">Loading...</div>
          </div>
        </div>
      </PageLayout>
    );
  }

  if (!landingData) {
    return (
      <PageLayout>
        <div className="h-screen flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold">Template Not Found</h1>
            <p className="text-muted-foreground">Landing page data for "{slug}" could not be loaded.</p>
            <Button asChild>
              <Link href="/templates">Browse All Templates</Link>
            </Button>
          </div>
        </div>
      </PageLayout>
    );
  }

  const { templateLanding } = landingData;

  return (
    <PageLayout includeHeaderPadding={false}>
      {/* Hero Section with Shader Background */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <BackgroundPaperShaders />

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="text-center space-y-8">
            <Announcement className="border-white/30 text-white bg-white/10 backdrop-blur-sm">
              <AnnouncementTag>{templateLanding.hero.announcement.tag}</AnnouncementTag>
              <AnnouncementTitle>{templateLanding.hero.announcement.title}</AnnouncementTitle>
            </Announcement>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              {templateLanding.hero.headline}
            </h1>

            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {templateLanding.hero.subheadline}
            </p>

            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              {templateLanding.hero.description}
            </p>

          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-24 border-t bg-background">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              {templateLanding.whatYouGet.sectionTitle}
            </h2>
            <p className="text-xl text-muted-foreground">
              {templateLanding.whatYouGet.sectionSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {templateLanding.whatYouGet.features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon] || CheckCircle2;
              return (
                <Card key={index} className="text-center p-6">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              {templateLanding.howItWorks.sectionTitle}
            </h2>
            <p className="text-xl text-muted-foreground">
              {templateLanding.howItWorks.sectionSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {templateLanding.howItWorks.steps.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl font-bold mx-auto">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Content Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              {templateLanding.exampleContent.sectionTitle}
            </h2>
            <p className="text-xl text-muted-foreground">
              {templateLanding.exampleContent.sectionSubtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Example Prompts */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-2">
                  {templateLanding.exampleContent.prompts.title}
                </h3>
                <p className="text-muted-foreground">
                  {templateLanding.exampleContent.prompts.subtitle}
                </p>
              </div>

              <div className="space-y-4">
                {templateLanding.exampleContent.prompts.items.map((prompt, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-sm font-medium">{index + 1}</span>
                    </div>
                    <p className="text-sm leading-relaxed">{prompt}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Example Articles */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-2">
                  {templateLanding.exampleContent.articles.title}
                </h3>
                <p className="text-muted-foreground">
                  {templateLanding.exampleContent.articles.subtitle}
                </p>
              </div>

              <div className="space-y-4">
                {templateLanding.exampleContent.articles.items.map((article, index) => (
                  <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {article.difficulty}
                        </Badge>
                        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <h4 className="font-semibold leading-tight">{article.title}</h4>
                      <p className="text-sm text-muted-foreground">{article.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              {templateLanding.finalCta.sectionTitle}
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              {templateLanding.finalCta.sectionSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link href={`/${slug}/app`}>
                  {templateLanding.finalCta.primaryCta.text}
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                <Link href="/templates">
                  {templateLanding.finalCta.secondaryCta.text}
                </Link>
              </Button>
            </div>

            <p className="text-sm opacity-75">
              {templateLanding.finalCta.guarantee}
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}