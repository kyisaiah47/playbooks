import type { Metadata } from 'next';
import Script from 'next/script';
import { createClient } from '@supabase/supabase-js';
import { GuidesHero } from "@/components/guides-hero";
import { GuidesList } from "@/components/guides-list";
import { PageLayout } from "@/components/layout";
import { TEMPLATA_FAQ } from '@/lib/seo';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export const metadata: Metadata = {
	title: 'Free Life Planning Guides - Wedding, Career, Home Buying & More | Templata',
	description: 'Browse expert planning guides: Wedding, Career Change, Home Buying, Business Launch, Financial Planning & more. Each with AI-refined questions, curated readings, 90%+ coverage. Free forever.',
	keywords: 'free planning guides, life event planning guides, wedding planning guide free, career change guide, home buying guide checklist, business planning template free, expert planning frameworks, comprehensive life guides, major life event templates, planning guide library, free life planning templates, ai planning guides, expert curated planning, 90 percent coverage guides, complete planning frameworks',
	authors: [{ name: 'Templata' }],
	creator: 'Templata',
	publisher: 'Templata',
	openGraph: {
		title: 'Expert Planning Guides & Templates | Templata',
		description: 'Browse expert-crafted planning guides for life\'s biggest moments. Free forever.',
		url: 'https://templata.org/guides',
		siteName: 'Templata',
		images: [
			{
				url: 'https://templata.org/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Templata Planning Guides',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Expert Planning Guides & Templates | Templata',
		description: 'Browse expert-crafted planning guides for life\'s biggest moments.',
		images: ['https://templata.org/og-image.png'],
		creator: '@templata',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	alternates: {
		canonical: 'https://templata.org/guides',
	},
};

async function getAllGuidesWithContent() {
	try {
		const { data: guides } = await supabase
			.from('guides')
			.select('id, name, description, category, difficulty, estimated_time, tags')
			.order('name');

		return guides || [];
	} catch {
		return [];
	}
}

async function getAllReadingsWithContent() {
	try {
		const { data: readings } = await supabase
			.from('readings')
			.select('id, title, content, excerpt, author, read_time, guide')
			.order('created_at', { ascending: false });

		return readings || [];
	} catch {
		return [];
	}
}

async function getAllQuestions() {
	try {
		const { data: questions } = await supabase
			.from('questions')
			.select('id, question, question_number, guide_id')
			.order('question_number');

		return questions || [];
	} catch {
		return [];
	}
}

export default async function GuidesPage() {
	const [guides, readings, questions] = await Promise.all([
		getAllGuidesWithContent(),
		getAllReadingsWithContent(),
		getAllQuestions(),
	]);

	// FAQ schema
	const faqSchema = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: TEMPLATA_FAQ.map((faq) => ({
			'@type': 'Question',
			name: faq.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: faq.answer,
			},
		})),
	};

	// ItemList schema for all guides
	const itemListSchema = {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		name: 'Templata Planning Guides',
		description: 'Comprehensive collection of expert planning guides for life\'s biggest moments',
		numberOfItems: guides.length,
		itemListElement: guides.map((guide, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			item: {
				'@type': 'HowTo',
				name: guide.name,
				description: guide.description,
				url: `https://templata.org/guides/${guide.id}`,
			},
		})),
	};

	// Breadcrumb schema
	const breadcrumbSchema = {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				name: 'Home',
				item: 'https://templata.org',
			},
			{
				'@type': 'ListItem',
				position: 2,
				name: 'Guides',
				item: 'https://templata.org/guides',
			},
		],
	};

	return (
		<>
			<Script
				id="guides-faq-jsonld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
			/>
			<Script
				id="guides-itemlist-jsonld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
			/>
			<Script
				id="guides-breadcrumb-jsonld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
			/>

			<PageLayout>
				<GuidesHero />
				<GuidesList />
			</PageLayout>

			{/* Hidden SEO content - all guides, questions, and readings for search engines */}
			<div className="sr-only" aria-hidden="true">
				<h2>Complete Planning Guide Collection</h2>
				<p>
					Comprehensive collection of {readings.length} expert readings and {questions.length} planning questions across {guides.length} guides.
				</p>

				<h3>All Planning Guides</h3>
				<ul>
					{guides.map((guide: any) => (
						<li key={guide.id}>
							<h4>{guide.name}</h4>
							<p>{guide.description}</p>
							<p>Category: {guide.category}</p>
							<p>Difficulty: {guide.difficulty || 'All levels'}</p>
							{guide.estimated_time && <p>Estimated time: {guide.estimated_time}</p>}
							{guide.tags && <p>Tags: {guide.tags.join(', ')}</p>}
						</li>
					))}
				</ul>

				<h3>All Planning Questions</h3>
				<ul>
					{questions.map((q: any) => (
						<li key={q.id}>{q.question}</li>
					))}
				</ul>

				<h3>All Expert Readings</h3>
				{readings.map((reading: any) => (
					<article key={`seo-${reading.id}`}>
						<h4>{reading.title}</h4>
						<p>By {reading.author} • {reading.read_time}</p>
						<div>
							{reading.content?.replace(/\n/g, ' ') || reading.excerpt || ''}
						</div>
					</article>
				))}
			</div>
		</>
	);
}
