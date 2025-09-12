'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Clock, Heart, Shield, Users, Baby, Stethoscope, DollarSign, Home, Calendar, Target } from 'lucide-react';
import { PageLayout } from '@/components/layout';

const processSteps = [
  {
    icon: Stethoscope,
    title: 'Pregnancy Preparation & Health',
    description: 'Essential health preparations, prenatal care, and lifestyle adjustments for a healthy pregnancy.'
  },
  {
    icon: DollarSign,
    title: 'Financial Planning & Insurance',
    description: 'Budget for baby expenses, understand insurance coverage, and plan for parental leave.'
  },
  {
    icon: Home,
    title: 'Nursery Setup & Baby Gear',
    description: 'Plan the nursery layout, select essential gear, and prepare your home for baby\'s arrival.'
  },
  {
    icon: Calendar,
    title: 'Birth Planning & Hospital Preparation',
    description: 'Create your birth plan, prepare for labor and delivery, and organize hospital logistics.'
  },
  {
    icon: Baby,
    title: 'Newborn Care & Feeding',
    description: 'Learn essential newborn care skills, establish feeding routines, and understand baby development.'
  },
  {
    icon: Users,
    title: 'Work-Life Balance & Future Planning',
    description: 'Plan your return to work, establish childcare, and adapt to life as new parents.'
  }
];

const benefits = [
  {
    icon: Shield,
    title: 'Comprehensive Preparation',
    description: 'Cover every aspect of pregnancy and baby preparation with expert guidance'
  },
  {
    icon: Heart,
    title: 'Reduced Anxiety',
    description: 'Feel confident and prepared for parenthood with clear, actionable steps'
  },
  {
    icon: Clock,
    title: 'Time-Efficient Planning',
    description: 'Organized approach saves time and ensures nothing important is forgotten'
  },
  {
    icon: Target,
    title: 'Expert-Backed Guidance',
    description: 'Evidence-based recommendations from healthcare professionals and experienced parents'
  }
];

const features = [
  'Prenatal care scheduling and health monitoring',
  'Complete baby budget breakdown and cost-saving strategies',
  'Nursery design and safety checklist',
  'Birth plan templates and hospital bag packing lists',
  'Newborn care skill tutorials and feeding guidance',
  'Childcare research and work transition planning',
  'Insurance and legal planning (wills, guardianship)',
  'Postpartum support and recovery planning'
];

export default function BabyPlanningPage() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="outline" className="px-4 py-2 w-fit">
                <Baby className="mr-2 h-4 w-4" />
                Baby Planning
              </Badge>
              
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  Prepare for Your
                  <span className="text-primary block">Little One</span>
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-lg">
                  Complete guidance for expecting parents from pregnancy through baby's first year. Feel confident and prepared for parenthood.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="w-fit">
                  <Link href="/baby-planning/app">
                    Start Planning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="w-fit">
                  View Sample Plan
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Card className="transform rotate-3 hover:rotate-6 transition-transform">
                  <CardHeader className="pb-2">
                    <Badge className="w-fit">Prenatal Care</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Scheduled appointments and health monitoring timeline</p>
                  </CardContent>
                </Card>
                <Card className="transform -rotate-2 hover:-rotate-3 transition-transform mt-6">
                  <CardHeader className="pb-2">
                    <Badge variant="secondary" className="w-fit">Nursery</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Safe, functional space designed for baby and parents</p>
                  </CardContent>
                </Card>
                <Card className="transform rotate-1 hover:rotate-2 transition-transform -mt-2">
                  <CardHeader className="pb-2">
                    <Badge variant="outline" className="w-fit">Budget</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">First-year costs planned and savings strategies in place</p>
                  </CardContent>
                </Card>
                <Card className="transform -rotate-3 hover:-rotate-4 transition-transform">
                  <CardHeader className="pb-2">
                    <Badge className="w-fit">Birth Plan</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Labor preferences and hospital logistics organized</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Complete Baby Planning Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive 6-step framework guides you through every aspect of preparing for parenthood.
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

      {/* Benefits */}
      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Why Parents Choose Our Guide</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by thousands of expecting parents for comprehensive, expert-backed guidance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="px-4 py-2 w-fit">
                <Heart className="mr-2 h-4 w-4" />
                What's Included
              </Badge>
              
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Everything You Need for Confident Parenting
                </h2>
                <p className="text-lg text-muted-foreground">
                  Comprehensive toolkit covering pregnancy through baby's first year with expert guidance and practical resources.
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

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Welcome Your Baby?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join thousands of parents who felt confident and prepared for their baby's arrival with our comprehensive planning guide.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/baby-planning/app">
                  Start Your Baby Planning Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/templates">
                  Browse All Templates
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}