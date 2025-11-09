"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Scale, Shield, Lock, AlertCircle, CheckCircle2, Users, Sparkles } from "lucide-react";
import { Particles } from "@/components/magicui/particles";
import { SkiperUiMarquee } from "@/components/category-hero";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const TermsContent: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 pt-56">
        <div className="container flex flex-col items-center justify-center gap-4 overflow-hidden">
          <Badge variant="secondary" className="flex items-center gap-2">
            <Scale className="w-3 h-3" />
            Legal Terms
          </Badge>

          <h1 className="relative z-15 max-w-3xl text-center text-6xl font-medium tracking-tighter md:text-7xl">
            <span
              className="overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                perspective: "600px",
              }}
            >
              {"Terms of Service".split(" ").map((word, i) => (
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
            Rules and guidelines for using our life planning platform
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
              icons={[FileText, Scale, Shield, Lock]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[AlertCircle, CheckCircle2, Users, Sparkles]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={3}
              reverse={true}
              className=""
              icons={[Shield, FileText, Lock, Scale]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[FileText, Scale, Shield, Lock]}
              highlighted
            />
            <SkiperUiMarquee
              showCard={3}
              reverse={true}
              className=""
              icons={[Users, Sparkles, AlertCircle, CheckCircle2]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[Lock, Shield, FileText, Scale]}
              dimmed
            />
            <SkiperUiMarquee
              reverse={true}
              showCard={1}
              className=""
              icons={[Sparkles, Users, AlertCircle, CheckCircle2]}
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
              By accessing or using Templata, you agree to be bound by these Terms of Service and all applicable laws
              and regulations. If you do not agree with any of these terms, you are prohibited from using this site.
            </p>

            <Separator className="my-12" />

            <div className="space-y-6">
              <h2 className="text-2xl font-medium text-foreground">Our Service</h2>
              <p>Templata provides a comprehensive life planning platform with:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Access to expert planning guides covering life's biggest moments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>AI-refined questions and frameworks ensuring 90%+ coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Curated expert readings from industry specialists</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Integrated planning workspace for organizing your journey</span>
                </li>
              </ul>
            </div>

            <Separator className="my-12" />

            <div className="space-y-6">
              <h2 className="text-2xl font-medium text-foreground">Account Creation</h2>
              <p>When creating an account, you agree to:</p>
              <div className="space-y-3 mt-4">
                <p>Provide accurate and complete information when setting up your profile.</p>
                <p>Maintain the security of your password and account credentials.</p>
                <p>Notify us immediately of any unauthorized account use or security breaches.</p>
                <p>Accept responsibility for all activities that occur under your account.</p>
              </div>
            </div>

            <Separator className="my-12" />

            <div className="space-y-6">
              <h2 className="text-2xl font-medium text-foreground">Acceptable Use</h2>
              <p>To maintain a safe and productive environment for all users, you agree not to:</p>
              <div className="space-y-3 mt-4">
                <p>Violate any applicable laws, regulations, or third-party rights.</p>
                <p>Infringe upon intellectual property rights or proprietary information of others.</p>
                <p>Distribute malware, viruses, or any other harmful code or content.</p>
                <p>Harass, abuse, or harm other users or interfere with their use of the service.</p>
              </div>
            </div>

            <Separator className="my-12" />

            <div className="space-y-6">
              <h2 className="text-2xl font-medium text-foreground">Your Content</h2>
              <p>
                You retain full ownership of all content you create using Templata—including your answers, notes, and plans.
                We receive only a limited license to store, display, and process your content solely for the purpose of
                providing our services to you. We will never sell or share your personal content with third parties.
              </p>
            </div>

            <Separator className="my-12" />

            <div className="space-y-6">
              <h2 className="text-2xl font-medium text-foreground">Our Content</h2>
              <p>
                All guides, questions, readings, frameworks, and materials provided by Templata are protected by copyright
                and intellectual property laws. You may use our content as intended within the platform, but you may not:
              </p>
              <div className="space-y-3 mt-4">
                <p>Resell, redistribute, or commercially exploit our content outside the platform.</p>
                <p>Claim our content as your own work or remove attribution.</p>
                <p>Use our content in a way that falsely suggests Templata endorsement of your products or services.</p>
              </div>
            </div>

            <Separator className="my-12" />

            <div className="space-y-6">
              <h2 className="text-2xl font-medium text-foreground">Disclaimer of Warranties</h2>
              <p>
                Templata is provided "as is" and "as available" without warranties of any kind, either express or implied.
                While we strive for excellence, we do not warrant that:
              </p>
              <div className="space-y-3 mt-4">
                <p>The service will be uninterrupted, timely, secure, or error-free.</p>
                <p>Any defects or errors will be corrected promptly.</p>
                <p>The service is entirely free of viruses or other harmful components.</p>
                <p>The results obtained from using the service will meet your specific requirements or be accurate in all cases.</p>
              </div>
            </div>

            <Separator className="my-12" />

            <div className="space-y-6">
              <h2 className="text-2xl font-medium text-foreground">Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Templata and its team shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages, including but not limited to:
              </p>
              <div className="space-y-3 mt-4">
                <p>Loss of profits, revenues, or business opportunities.</p>
                <p>Loss of data, use, goodwill, or other intangible losses.</p>
                <p>Damages resulting from unauthorized access to our servers or databases.</p>
                <p>Service interruptions, bugs, or technical issues beyond our reasonable control.</p>
              </div>
            </div>

            <Separator className="my-12" />

            <div className="space-y-6">
              <h2 className="text-2xl font-medium text-foreground">Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless Templata and its team members from any claims, damages,
                losses, liabilities, and expenses (including reasonable attorney fees) arising from your use of the service,
                your violation of these terms, or your violation of any rights of another party.
              </p>
            </div>

            <Separator className="my-12" />

            <div className="space-y-6">
              <h2 className="text-2xl font-medium text-foreground">Changes to Service</h2>
              <p>
                We reserve the right to modify, suspend, or discontinue any aspect of the service at any time, with or
                without notice. We may also impose limits on certain features or restrict access to parts or all of the
                service without liability to you or any third party.
              </p>
            </div>

            <Separator className="my-12" />

            <div className="space-y-6">
              <h2 className="text-2xl font-medium text-foreground">Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with applicable laws, without
                regard to conflict of law provisions. Any legal action or proceeding arising under these terms will be
                brought exclusively in the appropriate courts.
              </p>
            </div>

            <Separator className="my-12" />

            <div className="space-y-6">
              <h2 className="text-2xl font-medium text-foreground">Contact & Updates</h2>
              <p>
                If you have questions about these Terms of Service, please contact us at:{" "}
                <a href="mailto:templata.app@gmail.com" className="text-primary hover:underline">templata.app@gmail.com</a>
              </p>
              <p>
                We may update these Terms from time to time to reflect changes in our practices or for legal reasons.
                Changes will be posted on this page with an updated effective date. Your continued use of the service
                after such changes constitutes your acceptance of the new terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
