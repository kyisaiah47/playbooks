"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Users, CheckCircle2, Heart, Sparkles } from "lucide-react";
import { Particles } from "@/components/magicui/particles";
import { SkiperUiMarquee } from "@/components/category-hero";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const PrivacyContent: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 pt-56">
        <div className="container flex flex-col items-center justify-center gap-4 overflow-hidden">
          <Badge variant="secondary" className="flex items-center gap-2">
            <Shield className="w-3 h-3" />
            Privacy First
          </Badge>

          <h1 className="relative z-15 max-w-3xl text-center text-6xl font-medium tracking-tighter md:text-7xl">
            <span
              className="overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                perspective: "600px",
              }}
            >
              {"Privacy Policy".split(" ").map((word, i) => (
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
          </h1>

          <p className="text-muted-foreground max-w-2xl text-center text-lg mt-4">
            How we collect, use, and protect your data
          </p>

          <Particles
            className="absolute inset-0 z-0"
            quantity={500}
            ease={80}
            refresh
          />

          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            className="relative z-20 mt-10 flex items-center justify-center gap-4"
          >
            <SkiperUiMarquee
              showCard={1}
              className=""
              reverse={true}
              icons={[Shield, Lock, Eye, FileText]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[Heart, Users, CheckCircle2, Sparkles]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={3}
              reverse={true}
              className=""
              icons={[Lock, FileText, Shield, Eye]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[Shield, Lock, Eye, FileText]}
              highlighted
            />
            <SkiperUiMarquee
              showCard={3}
              reverse={true}
              className=""
              icons={[Users, Heart, Sparkles, CheckCircle2]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[Eye, Shield, FileText, Lock]}
              dimmed
            />
            <SkiperUiMarquee
              reverse={true}
              showCard={1}
              className=""
              icons={[Sparkles, Users, Heart, CheckCircle2]}
              dimmed
            />
          </motion.div>

          <div className="h-92 bg-background absolute bottom-20 left-0 right-0 w-full blur-xl" />
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <p className="text-muted-foreground text-center mb-16">Last updated: October 18, 2025</p>

          <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
            <p>
              At Templata, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you visit our website and use our services.
            </p>

            <Separator className="my-12" />

            <div className="space-y-6">
              <h2 className="text-2xl font-medium text-foreground">Information We Collect</h2>

              <div className="space-y-6">
                <div>
                  <p className="font-medium text-foreground mb-2">Personal Information</p>
                  <p>Email address, account credentials (encrypted), and profile information you provide when creating an account.</p>
                </div>

                <div>
                  <p className="font-medium text-foreground mb-2">Usage Information</p>
                  <p>Guides you create and use, content you generate, features you access, and visit timestamps to help us understand how you interact with our platform.</p>
                </div>

                <div>
                  <p className="font-medium text-foreground mb-2">Technical Information</p>
                  <p>Browser type and version, device information, IP address, and cookies to ensure the platform works smoothly across all devices.</p>
                </div>
              </div>
            </div>

            <Separator className="my-12" />

            <div className="space-y-6">
              <h2 className="text-2xl font-medium text-foreground">How We Use Your Information</h2>

              <p>We use the information we collect to:</p>

              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Provide, operate, and maintain our services</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Improve and personalize your experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Develop new features and functionality</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Send updates about your account</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Respond to inquiries and support requests</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Detect and prevent fraud and abuse</span>
                </li>
              </ul>
            </div>

            <Separator className="my-12" />

            <div className="space-y-6">
              <h2 className="text-2xl font-medium text-foreground">Data Storage & Security</h2>

              <p>
                Your data is stored securely using industry-standard encryption. Authenticated users have data stored
                in our Supabase database with end-to-end encryption. Anonymous users have data stored locally in browser.
              </p>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <Separator className="my-12" />

            <div className="space-y-6">
              <h2 className="text-2xl font-medium text-foreground">Your Rights & Choices</h2>

              <p>You have the following rights regarding your personal information:</p>

              <div className="space-y-4 mt-4">
                <div>
                  <p className="font-medium text-foreground">Access</p>
                  <p>Request access to your personal information</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Correction</p>
                  <p>Request correction of inaccurate information</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Deletion</p>
                  <p>Request deletion of your account and data</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Export</p>
                  <p>Request a copy of your data in a portable format</p>
                </div>
              </div>
            </div>

            <Separator className="my-12" />

            <div className="space-y-6">
              <h2 className="text-2xl font-medium text-foreground">Data Sharing and Disclosure</h2>

              <p>
                We do not sell, rent, or trade your personal information. We may share your information only in these limited circumstances:
              </p>

              <div className="space-y-4 mt-4">
                <div>
                  <p className="font-medium text-foreground">Service Providers</p>
                  <p>Trusted third-parties who assist in operating our services under strict confidentiality agreements.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Legal Requirements</p>
                  <p>When required by law or valid legal requests from government authorities.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Business Transfers</p>
                  <p>During mergers, acquisitions, or asset sales, with notice to affected users.</p>
                </div>
              </div>
            </div>

            <Separator className="my-12" />

            <div className="space-y-6">
              <h2 className="text-2xl font-medium text-foreground">Cookies & Tracking</h2>

              <p>
                We use cookies and similar technologies to enhance your experience, analyze usage patterns, and improve our services.
                You can control cookies through your browser settings, though some features may not work properly if cookies are disabled.
              </p>
            </div>

            <Separator className="my-12" />

            <div className="space-y-6">
              <h2 className="text-2xl font-medium text-foreground">Children's Privacy</h2>

              <p>
                Our service is not intended for children under 13 years of age. We do not knowingly collect information from children under 13.
                If you believe we have inadvertently collected such information, please contact us immediately.
              </p>
            </div>

            <Separator className="my-12" />

            <div className="space-y-6">
              <h2 className="text-2xl font-medium text-foreground">Contact Us</h2>

              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us at:{" "}
                <a href="mailto:templata.app@gmail.com" className="text-primary hover:underline">templata.app@gmail.com</a>
              </p>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date.
                Your continued use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
