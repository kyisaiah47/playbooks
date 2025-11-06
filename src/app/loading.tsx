"use client";

import { motion } from "framer-motion";
import React from "react";
import { Loader2, RefreshCw, Clock, Hourglass, Sparkles, Zap, Target, TrendingUp } from "lucide-react";

import { cn } from "@/lib/utils";
import { Particles } from "@/components/magicui/particles";

export default function Loading() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-4 overflow-hidden">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-muted-foreground"
        >
          Loading your experience...
        </motion.p>
        <h1 className="realtive z-15 max-w-3xl text-center text-6xl font-medium tracking-tighter md:text-7xl">
          <span
            className="overflow-hidden"
            style={{
              transformStyle: "preserve-3d",
              perspective: "600px",
            }}
          >
            {"Getting Things Ready"
              .split(" ")
              .map((word, i) => (
                <motion.span
                  className="relative inline-block px-[6px] leading-[none]"
                  key={i}
                  initial={{
                    opacity: 0,
                    y: "70%",
                    rotateX: "-28deg",
                  }}
                  animate={{
                    opacity: 1,
                    y: "0%",
                    rotateX: "0deg",
                  }}
                  transition={{
                    delay: i * 0.08 + 0.1,
                    duration: 0.8,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                >
                  {word === "Ready" ? (
                    <span className="font-playfair italic">{word}</span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
          </span>
        </h1>
        <Particles
          className="absolute inset-0 z-0"
          quantity={500}
          ease={80}
          refresh
        />

        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="relative z-20 mt-10 flex items-center justify-center gap-4"
        >
          <SkiperUiMarquee
            showCard={1}
            className=""
            reverse={true}
            icons={[Loader2, RefreshCw, Clock, Hourglass]}
          />
          <SkiperUiMarquee
            showCard={2}
            className=""
            icons={[Sparkles, Zap, Target, TrendingUp]}
          />
          <SkiperUiMarquee
            showCard={3}
            reverse={true}
            className=""
            icons={[Loader2, Clock, Sparkles, RefreshCw]}
          />
          <SkiperUiMarquee
            showCard={2}
            className=""
            icons={[Zap, Hourglass, Target, TrendingUp]}
          />
          <SkiperUiMarquee
            showCard={3}
            reverse={true}
            className=""
            icons={[Loader2, Sparkles, Clock, RefreshCw]}
          />
          <SkiperUiMarquee
            showCard={2}
            className=""
            icons={[Target, Zap, Hourglass, TrendingUp]}
          />
          <SkiperUiMarquee
            reverse={true}
            showCard={1}
            className=""
            icons={[RefreshCw, Clock, Sparkles, Loader2]}
          />
        </motion.div>

        <div className="h-92 bg-background absolute bottom-20 left-0 right-0 w-full blur-xl" />
      </div>
    </section>
  );
}

function Marquee({
  className,
  reverse,
  children,
  vertical = false,
  repeat = 4,
  ...props
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex shrink-0 justify-around ![animation-duration:12s] [animation-play-state:running] [gap:var(--gap)] group-hover:[animation-play-state:paused]",
              {
                "animate-marquee flex-row": !vertical,
                "animate-marquee-vertical flex-col": vertical,
                "[animation-direction:reverse]": reverse,
              },
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

interface SkiperUiMarqueeProps {
  showCard: number;
  reverse?: boolean;
  className?: string;
  icons: React.ComponentType<{ className?: string }>[];
}

function SkiperUiMarquee({
  showCard,
  reverse = false,
  className,
  icons,
}: SkiperUiMarqueeProps) {
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{
        height: showCard * 113,
      }}
    >
      <Marquee reverse={reverse} vertical={true}>
        {icons.map((Icon, idx) => (
          <Card key={idx} Icon={Icon} />
        ))}
      </Marquee>
      <div className="from-background absolute top-0 z-10 h-8 w-full bg-gradient-to-b to-transparent" />
      <div className="from-background absolute bottom-0 z-10 h-8 w-full bg-gradient-to-t to-transparent" />
    </div>
  );
}

function Card({ Icon }: { Icon: React.ComponentType<{ className?: string }> }) {
  return (
    <div
      className={cn(
        "border-muted relative flex size-24 items-center justify-center overflow-hidden rounded-3xl border p-4",
        "from-muted/50 to-background bg-gradient-to-b",
        "dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <Icon className="size-8 animate-spin" />
    </div>
  );
}
