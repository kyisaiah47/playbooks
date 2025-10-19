'use client';

import { PageLayout } from '@/components/layout';
import { FileText, Lightbulb, BarChart3, Download, Target, BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function HowItWorksPage() {
  const steps = [
    {
      number: 1,
      icon: Target,
      title: "Pick a Template",
      description: "Choose a template that matches your current situation from 1,298 options covering everything from buying your first home to planning a wedding.",
      details: [
        "Don't worry about choosing the \"right\" one - just pick whatever feels closest",
        "Try starting with featured templates if you're not sure where to begin",
        "You can always switch to a different template later"
      ]
    },
    {
      number: 2,
      icon: Lightbulb,
      title: "Answer Prompts",
      description: "Each template has thoughtful prompts to help you reflect and organize your thoughts. They're not graded or judged - they're just for you.",
      details: [
        "Go at your own pace - answer one prompt or twenty",
        "Your answers are automatically saved",
        "Skip prompts that don't feel relevant",
        "Write as much or as little as you want"
      ]
    },
    {
      number: 3,
      icon: FileText,
      title: "Read Articles",
      description: "Every template includes curated articles with practical information. Use the search feature to find specific topics.",
      details: [
        "Focused guides, not generic blog posts",
        "Saves you hours of Googling",
        "All important information in one place"
      ]
    },
    {
      number: 4,
      icon: BarChart3,
      title: "See Everything in Overview",
      description: "The Overview tab shows all your progress: responses organized by template, reflections, timeline, and insights.",
      details: [
        "Export your work as PDF",
        "Share with a partner or advisor",
        "Keep a record of your thinking"
      ]
    }
  ];

  const faqs = [
    {
      question: "Do I need an account?",
      answer: "No! Try Templata without an account in demo mode. Your work is saved locally. Create a free account to access your work across devices."
    },
    {
      question: "Is my information private?",
      answer: "Yes. Your responses and reflections are private and only visible to you. We never share your personal writing."
    },
    {
      question: "How much does it cost?",
      answer: "Templata is completely free. All 1,298 templates, 104K+ prompts, and 25K+ articles are available to everyone."
    },
    {
      question: "Can I use multiple templates?",
      answer: "Absolutely! Many life situations overlap. Use as many templates as you want. Your Overview keeps everything organized."
    },
    {
      question: "What if I get stuck?",
      answer: "Skip prompts that don't resonate and come back later. Or switch to a different template. There's no wrong way to use Templata."
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            className="text-center space-y-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="px-4 py-2">
              <BookOpen className="mr-2 h-4 w-4" />
              Quick Guide
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              How to use
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Templata
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Templata helps you organize your thoughts during major life transitions. Here's how it works.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4 Steps Section */}
      <motion.section
        className="py-16 bg-muted/30 border-y"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Four simple steps</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From picking a template to exporting your work - here's the complete workflow
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-lg h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                          {step.number}
                        </div>
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">{step.title}</CardTitle>
                      <CardDescription className="text-base mt-2">{step.description}</CardDescription>
                      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="text-primary">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* FAQs Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Common Questions</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know to get started
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                    <CardDescription className="text-base mt-2">{faq.answer}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-16 bg-muted/30 border-y"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Try Templata now - no account required
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <a href="/app">Open Templata</a>
          </Button>
          <p className="text-sm text-muted-foreground mt-6">
            Have questions? Contact us at templata.app@gmail.com
          </p>
        </div>
      </motion.section>
    </PageLayout>
  );
}
