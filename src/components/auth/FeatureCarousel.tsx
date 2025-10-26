"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Circle, ChevronRight, BookOpen, FileText } from "lucide-react"

const features = [
  {
    title: "Split-screen workspace",
    component: (
      <div className="bg-background flex h-full">
        {/* Left - Questions */}
        <div className="w-1/2 border-r border-border p-3 overflow-hidden">
          <div className="mb-2">
            <h3 className="text-[10px] font-semibold">Career Transition</h3>
            <p className="text-[8px] text-muted-foreground">12 questions</p>
          </div>
          <div className="space-y-1.5">
            <div className="p-1.5 rounded bg-primary/5 border border-primary/20">
              <div className="flex items-start gap-1.5">
                <Circle className="w-2.5 h-2.5 mt-0.5 text-primary flex-shrink-0" />
                <p className="text-[9px] font-medium leading-snug">
                  What aspects energize you?
                </p>
              </div>
            </div>
            <div className="p-1.5 rounded hover:bg-muted/50">
              <div className="flex items-start gap-1.5">
                <Circle className="w-2.5 h-2.5 mt-0.5 text-muted-foreground flex-shrink-0" />
                <p className="text-[9px] leading-snug text-muted-foreground">
                  What are your requirements?
                </p>
              </div>
            </div>
            <div className="p-1.5 rounded hover:bg-muted/50">
              <div className="flex items-start gap-1.5">
                <Circle className="w-2.5 h-2.5 mt-0.5 text-muted-foreground flex-shrink-0" />
                <p className="text-[9px] leading-snug text-muted-foreground">
                  How much runway do you have?
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Right - Notes */}
        <div className="w-1/2 p-3">
          <div className="mb-2 pb-1.5 border-b border-border">
            <h4 className="text-[9px] font-medium">What aspects energize you?</h4>
          </div>
          <div className="text-[9px] leading-relaxed space-y-1.5">
            <p>Working directly with users and seeing immediate impact.</p>
            <p className="text-muted-foreground">
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Curated readings library",
    component: (
      <div className="bg-background p-3 h-full overflow-hidden">
        <div className="mb-2">
          <h3 className="text-[10px] font-semibold mb-0.5">Career Transition</h3>
          <p className="text-[8px] text-muted-foreground">8 curated readings</p>
        </div>
        <div className="space-y-1.5">
          {[
            { title: "So Good They Can't Ignore You", author: "Cal Newport", time: "12 min" },
            { title: "The Dip", author: "Seth Godin", time: "8 min" },
            { title: "Range: Why Generalists Triumph", author: "David Epstein", time: "15 min" },
          ].map((reading, i) => (
            <div key={i} className="p-2 rounded-md border border-border hover:bg-muted/50 transition-colors">
              <div className="flex items-start gap-2">
                <BookOpen className="w-3 h-3 mt-0.5 text-primary flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-[9px] font-medium leading-snug truncate">{reading.title}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <p className="text-[8px] text-muted-foreground">{reading.author}</p>
                    <span className="text-[8px] text-muted-foreground">•</span>
                    <p className="text-[8px] text-muted-foreground">{reading.time}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    title: "Track multiple guides",
    component: (
      <div className="bg-background p-3 h-full overflow-hidden">
        <div className="mb-2">
          <h3 className="text-[10px] font-semibold">Your Guides</h3>
          <p className="text-[8px] text-muted-foreground">3 in progress</p>
        </div>
        <div className="space-y-1.5">
          {[
            { name: "Career Transition", progress: 60, questions: "7 of 12 answered" },
            { name: "Moving Cities", progress: 30, questions: "3 of 10 answered" },
            { name: "Starting a Business", progress: 15, questions: "2 of 15 answered" },
          ].map((guide, i) => (
            <div key={i} className="p-2 rounded-md border border-border hover:bg-muted/50 transition-colors">
              <div className="flex items-start justify-between mb-1.5">
                <div className="flex items-start gap-1.5">
                  <FileText className="w-3 h-3 mt-0.5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-[9px] font-medium leading-snug">{guide.name}</p>
                    <p className="text-[8px] text-muted-foreground">{guide.questions}</p>
                  </div>
                </div>
                <ChevronRight className="w-3 h-3 text-muted-foreground" />
              </div>
              <div className="w-full bg-muted rounded-full h-1">
                <div
                  className="bg-primary h-1 rounded-full transition-all"
                  style={{ width: `${guide.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
]

export function FeatureCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-md">
        {/* Browser Chrome */}
        <div className="bg-muted/30 rounded-2xl overflow-hidden shadow-2xl">
          <div className="h-8 bg-muted/60 border-b border-border/60 flex items-center px-3 gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28CA42]" />
            </div>
            <div className="flex-1 flex justify-center -ml-12">
              <div className="px-2.5 py-0.5 bg-background/50 rounded text-[8px] text-muted-foreground border border-border/40 max-w-[150px] truncate">
                templata.org
              </div>
            </div>
          </div>

          {/* Feature Content */}
          <div className="h-[220px] overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="h-full"
              >
                {features[currentIndex].component}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Feature Title & Indicators */}
        <div className="mt-6 text-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-sm font-medium text-white/90 mb-3"
            >
              {features[currentIndex].title}
            </motion.p>
          </AnimatePresence>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-white/90 w-4"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
