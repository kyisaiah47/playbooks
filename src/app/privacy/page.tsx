import { PageLayout } from '@/components/layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Templata',
  description: 'Privacy policy for Templata - How we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <PageLayout>
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: October 18, 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="mb-4">
              At Templata, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
            <p className="mb-4">
              When you create an account, we collect information such as:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Email address</li>
              <li>Account credentials (encrypted password)</li>
              <li>Profile information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Usage Information</h3>
            <p className="mb-4">
              We collect information about how you interact with our service:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Templates you use and create</li>
              <li>Content you generate (stored securely)</li>
              <li>Features you access</li>
              <li>Time and date of your visits</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Technical Information</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>IP address</li>
              <li>Cookies and similar technologies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide, operate, and maintain our services</li>
              <li>Improve and personalize your experience</li>
              <li>Develop new features and functionality</li>
              <li>Send you updates and communications about your account</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Detect and prevent fraud and abuse</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Storage and Security</h2>
            <p className="mb-4">
              Your data is stored securely using industry-standard encryption. For authenticated users, data is stored
              in our Supabase database with end-to-end encryption. For anonymous users, data is stored locally in your
              browser using localStorage.
            </p>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against
              unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Sharing and Disclosure</h2>
            <p className="mb-4">We do not sell, rent, or trade your personal information. We may share your information only in the following circumstances:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and services.</li>
              <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests.</li>
              <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Rights and Choices</h2>
            <p className="mb-4">You have the following rights regarding your personal information:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Access:</strong> You can request access to the personal information we hold about you.</li>
              <li><strong>Correction:</strong> You can request that we correct any inaccurate information.</li>
              <li><strong>Deletion:</strong> You can request deletion of your account and associated data.</li>
              <li><strong>Export:</strong> You can request a copy of your data in a portable format.</li>
              <li><strong>Opt-out:</strong> You can opt out of marketing communications at any time.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking</h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our website. You can control
              cookies through your browser settings, though this may affect some functionality of our service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
            <p className="mb-4">
              Our service is not intended for children under the age of 13. We do not knowingly collect personal information
              from children under 13. If you believe we have collected information from a child under 13, please contact us
              immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
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
