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
	title: 'Expert Planning Guides & Templates | Templata',
	description: 'Browse expert-crafted planning guides for life\'s biggest moments. Wedding planning, career changes, home buying, business planning, and more. Free forever.',
	keywords: 'planning guides, life templates, wedding planning guide, career change guide, home buying guide, business planning template, expert planning frameworks, free planning guides',
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
		images: ['https://templata.org/og-image.svg'],
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
