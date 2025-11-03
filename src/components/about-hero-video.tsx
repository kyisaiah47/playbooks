"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Particles } from "@/components/magicui/particles";

const stats = [
  {
    number: "90%+",
    text: "coverage from day one",
  },
  {
    number: "1000+",
    text: "guides planned",
  },
  {
    number: "3",
    text: "core features",
  },
];

const AboutHeroVideo = () => {
  return (
    <section className="pt-48 pb-24 relative">
      <Particles
        className="absolute inset-0 z-0"
        quantity={500}
        ease={80}
        refresh
      />
      <div className="container max-w-5xl relative z-10">
        {/* Main Content */}
        <div className="mb-16 text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            The Comprehensive Guide + Planning Tool
          </Badge>
          <h2 className="leading-tighter mb-6 text-5xl font-medium tracking-tight lg:text-6xl">
            <span
              className="overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                perspective: "600px",
              }}
            >
              {"Major life events".split(" ").map((word, i) => (
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
                  {word}
                </motion.span>
              ))}
            </span>
            <span className="text-primary block overflow-hidden" style={{
              transformStyle: "preserve-3d",
              perspective: "600px",
            }}>
              {"deserve better".split(" ").map((word, i) => (
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
                    delay: (i + 3) * 0.08 + 0.1,
                    duration: 0.8,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h2>
          <p className="text-muted-foreground mx-auto mb-8 max-w-3xl text-xl leading-relaxed">
            Comprehensive questions covering 90%+ of what you need to consider.
            Expert guidance to make informed decisions. Integrated planning to keep everything organized.
          </p>
          <Button size="lg" className="px-8 py-6 text-lg">
            Get Started
            <ArrowRight />
          </Button>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="mb-16"
        >
          <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-3xl">
            <img
              src="/geometric-monuments.webp"
              alt="Background"
              className="block size-full object-cover object-center"
            />
          </AspectRatio>
        </motion.div>
      </div>
    </section>
  );
};

export { AboutHeroVideo };
