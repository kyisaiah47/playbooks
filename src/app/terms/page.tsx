import { PageLayout } from '@/components/layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Templata',
  description: 'Terms of service for Templata - Rules and guidelines for using our life planning platform. User agreements, content policies, and service terms.',
  openGraph: {
    title: 'Terms of Service | Templata',
    description: 'Terms of service for Templata - Rules and guidelines for using our life planning platform.',
    url: 'https://templata.org/terms',
    siteName: 'Templata',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://templata.org/terms',
  },
};

export default function TermsPage() {
  return (
    <PageLayout>
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: October 18, 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
            <p className="mb-4">
              By accessing or using Templata, you agree to be bound by these Terms of Service and all applicable laws
              and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing
              this site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Description of Service</h2>
            <p className="mb-4">
              Templata provides a platform for creating, managing, and using templates for various life events and
              projects. Our service includes:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Access to a library of pre-made templates</li>
              <li>Tools to customize and personalize templates</li>
              <li>Workspace for organizing your template-based projects</li>
              <li>Educational articles and resources</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">User Accounts</h2>
            <h3 className="text-xl font-semibold mb-3">Account Creation</h3>
            <p className="mb-4">
              To access certain features of our service, you may be required to create an account. You agree to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain the security of your password</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Be responsible for all activities that occur under your account</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Account Termination</h3>
            <p className="mb-4">
              We reserve the right to suspend or terminate your account if you violate these Terms of Service or engage
              in fraudulent, abusive, or illegal activity.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Acceptable Use</h2>
            <p className="mb-4">You agree not to use Templata to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Violate any laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Distribute malware or engage in hacking activities</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Spam or send unsolicited communications</li>
              <li>Impersonate any person or entity</li>
              <li>Interfere with or disrupt the service</li>
              <li>Collect or harvest information about other users</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Content and Intellectual Property</h2>
            <h3 className="text-xl font-semibold mb-3">Your Content</h3>
            <p className="mb-4">
              You retain ownership of any content you create using Templata. By using our service, you grant us a
              limited license to store, display, and process your content solely for the purpose of providing our
              services to you.
            </p>

            <h3 className="text-xl font-semibold mb-3">Our Content</h3>
            <p className="mb-4">
              All templates, articles, designs, text, graphics, and other materials provided by Templata are owned by
              us or our licensors and are protected by copyright and other intellectual property laws. You may use
              our content in accordance with these terms, but you may not:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Resell or redistribute our templates</li>
              <li>Claim our content as your own</li>
              <li>Use our content in a way that suggests endorsement by Templata</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Disclaimer of Warranties</h2>
            <p className="mb-4">
              Templata is provided "as is" and "as available" without warranties of any kind, either express or implied.
              We do not warrant that:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>The service will be uninterrupted or error-free</li>
              <li>Defects will be corrected</li>
              <li>The service is free of viruses or harmful components</li>
              <li>The results obtained from using the service will be accurate or reliable</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="mb-4">
              To the fullest extent permitted by law, Templata shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or
              indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Your use or inability to use the service</li>
              <li>Any unauthorized access to or use of our servers</li>
              <li>Any interruption or cessation of transmission to or from the service</li>
              <li>Any bugs, viruses, or other harmful code</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Indemnification</h2>
            <p className="mb-4">
              You agree to indemnify and hold harmless Templata and its officers, directors, employees, and agents from
              any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Your use of the service</li>
              <li>Your violation of these Terms of Service</li>
              <li>Your violation of any rights of another person or entity</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to Service</h2>
            <p className="mb-4">
              We reserve the right to modify or discontinue, temporarily or permanently, the service (or any part thereof)
              with or without notice. You agree that we shall not be liable to you or any third party for any modification,
              suspension, or discontinuance of the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p className="mb-4">
              These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction
              in which Templata operates, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to update these Terms of Service at any time. We will notify you of any changes by
              posting the new Terms of Service on this page and updating the "Last updated" date. Your continued use
              of the service after any changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="mb-4">
              Email: templata.app@gmail.com
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
