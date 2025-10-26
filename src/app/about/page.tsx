"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PageLayout } from "@/components/layout"
import { ArrowRight, Github, Linkedin, Mail, Sparkles, Code, Heart, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"
import { BlankPageGraphic } from "@/components/about/BlankPageGraphic"
import { JourneyGraphic } from "@/components/about/JourneyGraphic"
import { TerminalGraphic } from "@/components/about/TerminalGraphic"
import { FutureGraphic } from "@/components/about/FutureGraphic"

export default function AboutPage() {
  return (
    <PageLayout includeHeaderPadding={false}>
      {/* Hero */}
      <section className="relative px-6 pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-[3.5rem] font-medium tracking-[-0.02em] md:text-[6rem] leading-[0.9] mb-8">
              Wikipedia × Notion
              <br />
              <span className="text-muted-foreground">for life</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Comprehensive guides meet flexible workspaces. Because life's biggest decisions shouldn't start with a blank page.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blank Page Graphic */}
      <section className="px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <BlankPageGraphic />
        </motion.div>
      </section>

      {/* The Problem & Solution - Side by side cards */}
      <section className="px-6 py-24 border-t border-border/40">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-muted/30 rounded-2xl p-8 md:p-10"
            >
              <div className="mb-6">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-red-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  The problem
                </h2>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Career changes, wedding planning, buying a home—millions have done these. But the knowledge is scattered across Reddit threads, blog posts, and paywalled content.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                You Google, bookmark dozens of articles you'll never read, and still end up staring at a blank page, overwhelmed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-muted/30 rounded-2xl p-8 md:p-10"
            >
              <div className="mb-6">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-green-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  The solution
                </h2>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Templata gives you structured questions to think through your decision systematically. Work in a split-screen workspace with questions on the left, your notes on the right.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Every guide includes curated readings. No prescriptive advice—just frameworks and questions to help you think it through yourself.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section - Full width with image */}
      <section className="px-6 py-24 border-t border-border/40">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/team/isaiah-kim.jpg"
                  alt="Isaiah Kim"
                  width={120}
                  height={120}
                  className="rounded-2xl grayscale"
                />
              </motion.div>
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
                  Built by Isaiah Kim
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Developer, builder, tinkerer
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://linkedin.com/in/kyisaiah47" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://github.com/kyisaiah47" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="mailto:kyisaiah47@gmail.com">
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Journey Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <JourneyGraphic />
          </motion.div>

          {/* Story in cards */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-muted/20 rounded-xl p-6 md:p-8"
            >
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Code className="w-5 h-5" />
                The journey
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                I've been building apps for over 7 years. Currently a Senior Developer at SS&C Technologies, where I've spent 2.5 years leading greenfield and brownfield projects. That experience completely changed how I think about building software.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Working with a team that had robust infrastructure and coding practices elevated my standards. I learned more in those years than in my entire career up to that point. It reignited the passion I had in college when I was constantly tinkering with projects.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-muted/20 rounded-xl p-6 md:p-8"
            >
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                The evolution
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                I started doing hackathons on DevPost, experimenting with new tech and ideas. Templata emerged from that period. I wanted a long-term passion project that brought together everything I was learning.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                The idea evolved over months—from "life shouldn't start with a blank page" to "the encyclopedia for life" to finally "Wikipedia × Notion." That last one clicked. It simplified the concept and made it immediately digestible.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                I've tried 30+ app ideas over the past 6 months. This is the only one that stuck. I've deleted the repo and started from scratch multiple times. It was a battle, but I believe this idea has legs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-muted/20 rounded-xl p-6 md:p-8"
            >
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Heart className="w-5 h-5" />
                The passion
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                I spent the past decade wandering, trying to figure out where I fit in. I was passionate about building in college, but the 9-5 grind, the pandemic, and life left me disillusioned. I should've tapped back into that passion sooner.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Now I'm based in NYC, working my day job, but dedicating nights and weekends to building. Instead of going out, I'm keeping up with trends, especially AI tooling, and bringing ideas to life.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                One thing I know for sure: I'm put on earth to build apps. Idea generation, tinkering, branding, aesthetics, being adventurous with technology—that's what drives me. Templata is the culmination of that journey so far.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy - Grid */}
      <section className="px-6 py-24 border-t border-border/40">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              How it works
            </h2>
            <p className="text-base text-muted-foreground">
              The principles behind Templata
            </p>
          </motion.div>

          {/* Terminal Graphic */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <TerminalGraphic />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="border border-border/40 rounded-xl p-6 hover:border-border transition-colors"
            >
              <h3 className="text-lg font-semibold mb-3">AI-assisted, human-curated</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I use AI to help generate and structure content, but every guide is reviewed and refined by hand. AI gives me scale, human judgment ensures quality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="border border-border/40 rounded-xl p-6 hover:border-border transition-colors"
            >
              <h3 className="text-lg font-semibold mb-3">Structured, not prescriptive</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Frameworks and questions, not answers. Your decisions are yours—I just help you think through them systematically.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="border border-border/40 rounded-xl p-6 hover:border-border transition-colors"
            >
              <h3 className="text-lg font-semibold mb-3">Comprehensive, not overwhelming</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Broad coverage across life situations, but each guide is focused and actionable. No endless scrolling—just the framework you need.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="border border-border/40 rounded-xl p-6 hover:border-border transition-colors"
            >
              <h3 className="text-lg font-semibold mb-3">Free to use</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Templata is free. I want to explore monetization eventually, but the core experience will always be accessible to everyone.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Next - Centered card */}
      <section className="px-6 py-24 border-t border-border/40">
        <div className="mx-auto max-w-5xl">
          {/* Future Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <FutureGraphic />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 border border-primary/20 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              What's next
            </h2>
            <div className="space-y-4 text-base text-muted-foreground leading-relaxed mb-8">
              <p>
                Right now, Templata is a side project. I'm working full-time as a senior dev, but dedicating nights and weekends to building this.
              </p>
              <p>
                My immediate goal is to get Templata in front of users, gather feedback, and iterate. I want to understand what resonates and how to make it genuinely useful.
              </p>
              <p>
                Long-term, I'd love to turn this into a company and generate revenue. I believe there's real value here, and I want to explore how to make it sustainable.
              </p>
              <p className="font-medium text-foreground">
                If you're using Templata, I want to hear from you. What's working? What's not? What's missing?
              </p>
            </div>
            <Button size="lg" asChild>
              <a href="mailto:kyisaiah47@gmail.com">
                <Mail className="h-4 w-4" />
                Get in touch
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 border-t border-border/40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            Try Templata
          </h2>
          <p className="text-base text-muted-foreground mb-8 leading-relaxed">
            Start planning your next big decision with structured guides and a flexible workspace.
          </p>
          <Button size="lg" asChild>
            <Link href="/app">
              Open Templata
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </section>
    </PageLayout>
  )
}
