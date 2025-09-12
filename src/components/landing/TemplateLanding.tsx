'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Heart, LucideIcon, Star, FileText } from 'lucide-react';
import { PageLayout } from '@/components/layout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Metadata } from 'next';

interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface HeroCard {
  badge: string;
  badgeVariant?: 'default' | 'secondary' | 'outline';
  content: string;
}

interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
}

interface GuidedNote {
  name: string;
  icon: LucideIcon;
  description: string;
}

interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

interface FAQ {
  question: string;
  answer: string;
}

interface HeroBenefit {
  text: string;
}

interface TemplateLandingProps {
  // SEO & Metadata
  metadata?: Metadata;
  jsonLd?: any;
  faqJsonLd?: any;

  // Hero Section
  badgeIcon: LucideIcon;
  badgeText: string;
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  ctaText: string;
  appPath: string;
  heroCards?: HeroCard[];
  heroBenefits?: HeroBenefit[];

  // Process Section
  processTitle: string;
  processDescription: string;
  processSteps: ProcessStep[];

  // Benefits Section
  benefitsTitle: string;
  benefitsDescription: string;
  benefits: Benefit[];

  // Features Section
  featuresIcon: LucideIcon;
  featuresTitle: string;
  featuresDescription: string;
  features: string[];

  // How It Works Section (optional)
  howItWorks?: HowItWorksStep[];
  
  // Guided Notes Section (optional)
  guidedNotes?: GuidedNote[];
  
  // Testimonials Section (optional)
  testimonials?: Testimonial[];
  
  // FAQ Section (optional)
  faqs?: FAQ[];

  // CTA Section
  ctaTitle: string;
  ctaDescription: string;
  finalCtaText: string;
}

export function TemplateLanding({
  metadata,
  jsonLd,
  faqJsonLd,
  badgeIcon: BadgeIcon,
  badgeText,
  heroTitle,
  heroHighlight,
  heroDescription,
  ctaText,
  appPath,
  heroCards,
  heroBenefits,
  processTitle,
  processDescription,
  processSteps,
  benefitsTitle,
  benefitsDescription,
  benefits,
  featuresIcon: FeaturesIcon,
  featuresTitle,
  featuresDescription,
  features,
  howItWorks,
  guidedNotes,
  testimonials,
  faqs,
  ctaTitle,
  ctaDescription,
  finalCtaText,
}: TemplateLandingProps) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <PageLayout>
      {/* SEO JSON-LD */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-background to-muted/10"></div>
        <div className="relative container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
              <BadgeIcon className="w-4 h-4 mr-2" />
              {badgeText}
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight max-w-5xl mx-auto">
              {heroTitle}
              <span className="block text-primary">
                {heroHighlight}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-4xl mx-auto">
              {heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-4 h-auto" asChild>
                <Link href={appPath}>
                  {ctaText}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 h-auto" asChild>
                <Link href="#features">
                  See Features
                </Link>
              </Button>
            </div>

            {heroBenefits && (
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
                {heroBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{benefit.text}</span>
                  </div>
                ))}
              </div>
            )}

            {heroCards && (
              <div className="mt-16 relative">
                <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
                  {heroCards.map((card, index) => {
                    const rotations = ['rotate-3 hover:rotate-6', '-rotate-2 hover:-rotate-3 mt-6', 'rotate-1 hover:rotate-2 -mt-2', '-rotate-3 hover:-rotate-4'];
                    return (
                      <Card key={index} className={`transform ${rotations[index % rotations.length]} transition-transform`}>
                        <CardHeader className="pb-2">
                          <Badge variant={card.badgeVariant || 'default'} className="w-fit">{card.badge}</Badge>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">{card.content}</p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 border-t">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <FeaturesIcon className="w-4 h-4 mr-2" />
              Complete Solution
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {benefitsTitle}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {benefitsDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      {howItWorks && (
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                <FileText className="w-4 h-4 mr-2" />
                Simple Process
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How It Works
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {processDescription}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Overview */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">{processTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {processDescription}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card 
                  key={index} 
                  className={`cursor-pointer transition-all duration-200 ${
                    activeStep === index ? 'ring-2 ring-primary' : 'hover:shadow-md'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        Step {index + 1}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guided Notes Section */}
      {guidedNotes && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                <FileText className="w-4 h-4 mr-2" />
                Expert Guidance
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Step-by-Step Planning Guides
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Each section includes prompts, examples, and expert tips to guide you through every aspect of planning.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {guidedNotes.map((note, index) => (
                <Card key={index} className="hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <note.icon className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-lg">{note.name}</CardTitle>
                    <CardDescription>{note.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Social Proof */}
      {testimonials && (
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Loved by Users Everywhere
              </h2>
              <p className="text-xl text-muted-foreground">
                See what real users are saying about our template.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <CardDescription className="text-base italic mb-4">
                      &ldquo;{testimonial.text}&rdquo;
                    </CardDescription>
                    <CardTitle className="text-lg">— {testimonial.name}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="px-4 py-2 w-fit">
                <FeaturesIcon className="mr-2 h-4 w-4" />
                What's Included
              </Badge>
              
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  {featuresTitle}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {featuresDescription}
                </p>
              </div>
            </div>
            
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {faqs && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                <FileText className="w-4 h-4 mr-2" />
                Common Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about using our template.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="mb-8">
            <BadgeIcon className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {ctaTitle}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {ctaDescription}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="text-lg px-8 py-4 h-auto" asChild>
              <Link href={appPath}>
                {finalCtaText}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 h-auto" asChild>
              <Link href="/templates">
                Browse All Templates
              </Link>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Free to start • No credit card required • Set up in minutes
          </p>
        </div>
      </section>

    </PageLayout>
  );
}