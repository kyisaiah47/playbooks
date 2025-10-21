import { PageLayout } from '@/components/layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Changelog | Templata',
  description: 'Latest updates, features, and improvements to Templata - Track our product evolution and new releases.',
  openGraph: {
    title: 'Changelog | Templata',
    description: 'Latest updates, features, and improvements to Templata.',
    url: 'https://templata.org/changelog',
    siteName: 'Templata',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://templata.org/changelog',
  },
};

export default function ChangelogPage() {
  return (
    <PageLayout>
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-4">Changelog</h1>
          <p className="text-muted-foreground mb-8">
            Track the latest updates, features, and improvements to Templata.
          </p>

          <div className="space-y-12">
            {/* Latest updates */}
            <section className="mb-8">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-sm text-muted-foreground">October 19, 2025</span>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">New Features</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Added How It Works page to help new users understand the app</li>
                    <li>Added PDF export for your responses and reflections</li>
                    <li>Added Responses and Reflections tabs to Overview to view everything in one place</li>
                    <li>Added search in articles to find specific information</li>
                    <li>Organized featured templates into 3 sections: General, Gen Z, and Health & Wellness</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Improvements</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Made the banner interactive - click on highlighted words to see how the app works</li>
                    <li>Added helpful explanations throughout the site to guide you</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-sm text-muted-foreground">October 18, 2025</span>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                <li>Featured templates section added for quick access to popular templates in your workspace</li>
              </ul>
            </section>

            {/* Version 0.1.0 */}
            <section className="mb-8">
              <div className="flex items-baseline gap-3 mb-4">
                <h2 className="text-2xl font-semibold">Version 0.1.0</h2>
                <span className="text-sm text-muted-foreground">October 18, 2025</span>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Public Beta Launch</h3>
                  <p className="mb-4">
                    Templata is now live in public beta with a comprehensive template library for life planning.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>1,298 templates across all life categories</li>
                    <li>104K+ AI-generated prompts</li>
                    <li>25,936 articles providing expert knowledge</li>
                    <li>User authentication and workspace management</li>
                    <li>3 view model: Templates, Reflection, and Overview for comprehensive life planning</li>
                    <li>Demo mode for unauthenticated users</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <section className="mt-12 pt-8 border-t">
            <h2 className="text-2xl font-semibold mb-4">Stay Updated</h2>
            <p className="mb-4">
              Want to be the first to know about new features and updates? Follow us on social media or
              check back here regularly for the latest changes.
            </p>
            <p className="text-muted-foreground">
              Have feedback or suggestions? Contact us at templata.app@gmail.com
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
