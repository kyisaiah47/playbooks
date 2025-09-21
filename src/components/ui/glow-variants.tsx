"use client";

import { cn } from "@/lib/utils";
import { GlowingEffect } from "./glowing-effect";

interface GlowVariantProps {
  children: React.ReactNode;
  variant?: "premium" | "interactive" | "subtle" | "css-only" | "none";
  className?: string;
  disabled?: boolean;
}

export function GlowVariant({
  children,
  variant = "subtle",
  className,
  disabled = false
}: GlowVariantProps) {
  // Respect user preferences
  const prefersReducedMotion = typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const isMobile = typeof window !== 'undefined' &&
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // Disable complex effects on mobile or if user prefers reduced motion
  const shouldUseFullGlow = !isMobile && !prefersReducedMotion && !disabled;

  switch (variant) {
    case "premium":
      // Full GlowingEffect - for hero cards, main CTAs
      return shouldUseFullGlow ? (
        <div className={cn("relative rounded-[1.25rem] border-[0.75px] border-border p-2", className)}>
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={3}
          />
          <div className="relative rounded-xl border-[0.75px] bg-background dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] h-full">
            {children}
          </div>
        </div>
      ) : (
        <div className={cn("relative rounded-xl border bg-background hover:border-primary/30 hover:shadow-lg transition-all duration-200 h-full", className)}>
          {children}
        </div>
      );

    case "interactive":
      // Medium GlowingEffect - for important interactive elements
      return shouldUseFullGlow ? (
        <div className={cn("relative rounded-lg border-[0.75px] border-border p-1.5", className)}>
          <GlowingEffect
            spread={30}
            glow={true}
            disabled={false}
            proximity={48}
            inactiveZone={0.05}
            borderWidth={2}
          />
          <div className="relative rounded-lg border-[0.75px] bg-background h-full">
            {children}
          </div>
        </div>
      ) : (
        <div className={cn("relative rounded-lg border bg-background hover:border-primary/25 hover:shadow-md transition-all duration-200 h-full", className)}>
          {children}
        </div>
      );

    case "subtle":
      // Light GlowingEffect - for secondary elements
      return shouldUseFullGlow ? (
        <div className={cn("relative rounded-lg border-[0.75px] border-border", className)}>
          <GlowingEffect
            spread={20}
            glow={true}
            disabled={false}
            proximity={32}
            inactiveZone={0.1}
            borderWidth={1}
          />
          <div className="relative rounded-lg bg-background h-full">
            {children}
          </div>
        </div>
      ) : (
        <div className={cn("relative rounded-lg border bg-background hover:border-primary/20 hover:shadow-sm transition-all duration-200 h-full", className)}>
          {children}
        </div>
      );

    case "css-only":
      // Pure CSS glow - performance friendly
      return (
        <div className={cn(
          "relative rounded-lg border bg-background transition-all duration-200 h-full",
          "hover:border-primary/30 hover:shadow-[0_0_20px_rgba(var(--primary),0.15)]",
          "hover:scale-[1.01]",
          className
        )}>
          {children}
        </div>
      );

    case "none":
    default:
      return (
        <div className={cn("relative rounded-lg border bg-background h-full", className)}>
          {children}
        </div>
      );
  }
}

// Convenience components for common use cases
export function PremiumGlow({ children, className, ...props }: Omit<GlowVariantProps, 'variant'>) {
  return <GlowVariant variant="premium" className={className} {...props}>{children}</GlowVariant>;
}

export function InteractiveGlow({ children, className, ...props }: Omit<GlowVariantProps, 'variant'>) {
  return <GlowVariant variant="interactive" className={className} {...props}>{children}</GlowVariant>;
}

export function SubtleGlow({ children, className, ...props }: Omit<GlowVariantProps, 'variant'>) {
  return <GlowVariant variant="subtle" className={className} {...props}>{children}</GlowVariant>;
}

export function CSSGlow({ children, className, ...props }: Omit<GlowVariantProps, 'variant'>) {
  return <GlowVariant variant="css-only" className={className} {...props}>{children}</GlowVariant>;
}