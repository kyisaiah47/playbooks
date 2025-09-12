'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Clock, Users, TrendingUp, Target, Briefcase, Search, FileText, Handshake, Award, BookOpen } from 'lucide-react';
import { PageLayout } from '@/components/layout';

const processSteps = [
  {
    icon: Target,
    title: 'Career Assessment & Goals',
    description: 'Define your target roles, assess your skills, and identify your unique value proposition in the market.'
  },
  {
    icon: FileText,
    title: 'Application Materials',
    description: 'Create compelling resumes, cover letters, and portfolios optimized for ATS and hiring managers.'
  },
  {
    icon: Search,
    title: 'Strategic Job Search',
    description: 'Execute multi-channel search strategy using networking, job boards, and recruiter relationships.'
  },
  {
    icon: Users,
    title: 'Interview Preparation',
    description: 'Master STAR method storytelling, company research, and technical preparation for all interview formats.'
  },
  {
    icon: Handshake,
    title: 'Offer Evaluation',
    description: 'Negotiate compensation packages and evaluate opportunities to make the best career decisions.'
  },
  {
    icon: TrendingUp,
    title: 'Career Development',
    description: 'Build long-term career success through continuous learning and professional growth strategies.'
  }
];

const benefits = [
  {
    icon: Clock,
    title: 'Accelerated Timeline',
    description: 'Strategic approach reduces average job search time from 6+ months to 2-3 months'
  },
  {
    icon: TrendingUp,
    title: 'Higher Compensation',
    description: 'Negotiation strategies and positioning tactics typically result in 15-25% higher offers'
  },
  {
    icon: Target,
    title: 'Better Role Fit',
    description: 'Systematic evaluation process leads to roles that align with career goals and values'
  },
  {
    icon: Award,
    title: 'Professional Growth',
    description: 'Develop career management skills that benefit you throughout your professional journey'
  }
];

const features = [
  'Career assessment and goal-setting framework',
  'ATS-optimized resume templates and strategies',
  'LinkedIn profile optimization guide',
  'Interview preparation with STAR method training',
  'Salary negotiation tactics and market research',
  'Networking strategies and relationship building',
  'Application tracking and follow-up systems',
  'Professional development planning'
];

export default function JobSearchPage() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="outline" className="px-4 py-2 w-fit">
                <Briefcase className="mr-2 h-4 w-4" />
                Career Strategy
              </Badge>
              
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  Land Your Dream Job
                  <span className="text-primary block">Strategically</span>
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-lg">
                  Master the job search process with expert guidance, proven strategies, and actionable frameworks that get results.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="w-fit">
                  <Link href="/job-search/app">
                    Start Your Job Search
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
                    <Badge className="w-fit">Resume</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">ATS-optimized format with quantified achievements</p>
                  </CardContent>
                </Card>
                <Card className="transform -rotate-2 hover:-rotate-3 transition-transform mt-6">
                  <CardHeader className="pb-2">
                    <Badge variant="secondary" className="w-fit">Interview</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">STAR method stories prepared for behavioral questions</p>
                  </CardContent>
                </Card>
                <Card className="transform rotate-1 hover:rotate-2 transition-transform -mt-2">
                  <CardHeader className="pb-2">
                    <Badge variant="outline" className="w-fit">Network</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Strategic connections in target companies</p>
                  </CardContent>
                </Card>
                <Card className="transform -rotate-3 hover:-rotate-4 transition-transform">
                  <CardHeader className="pb-2">
                    <Badge className="w-fit">Offer</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Negotiated 25% above initial offer</p>
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
            <h2 className="text-3xl md:text-4xl font-bold">Strategic Job Search Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our proven 6-step framework takes you from career uncertainty to landing offers at your target companies.
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
            <h2 className="text-3xl md:text-4xl font-bold">Why Our Approach Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Data-driven strategies and expert guidance that deliver measurable results.
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
                <BookOpen className="mr-2 h-4 w-4" />
                What's Included
              </Badge>
              
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Everything You Need to Succeed
                </h2>
                <p className="text-lg text-muted-foreground">
                  Comprehensive toolkit with templates, guides, and expert strategies used by career professionals.
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
                Ready to Transform Your Career?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join thousands of professionals who have successfully navigated their job search with our strategic framework.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/job-search/app">
                  Start Your Job Search Strategy
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