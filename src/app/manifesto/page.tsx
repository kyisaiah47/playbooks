import { PageLayout } from "@/components/layout"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ManifestoAudio } from "@/components/manifesto-audio"

export default function ManifestoPage() {
	return (
		<PageLayout>
			<div className="container mx-auto max-w-2xl px-4 py-12">
				{/* Header */}
				<div className="text-center mb-16">
					<Badge variant="outline" className="mb-4">
						Our Philosophy
					</Badge>
					<h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
						Our Manifesto
					</h1>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Why we believe life shouldn't start with a blank page and how we're ending the empty template era.
					</p>
				</div>

				{/* Manifesto Content */}
				<Card className="border-0 shadow-lg relative">
					<ManifestoAudio />
					<CardContent className="p-8 md:p-12">
						<div className="space-y-8 text-lg leading-relaxed">
							<p>Life shouldn't start with a blank page.</p>

							<p>But for too long, that's all we've been given.<br />
							A white screen. An empty checklist.<br />
							A cursor blinking like a dare: 'figure it out.'</p>

							<p>Notion. Docs. Task apps.<br />
							They all hand you the same void.<br />
							And they call it productivity.</p>

							<p>But a blank page has never guided a wedding.<br />
							A blank page has never bought a home.<br />
							A blank page has never changed a life.</p>

							<p>Templata is the end of the blank page era.</p>

							<p>The first encyclopedia for living.</p>

							<p>150+ templates. 15,000+ reflection prompts. 3,000+ articles.<br />
							Not emptiness — abundance.<br />
							Not silence — guidance.<br />
							Not guessing — clarity.</p>

							<p>Every prompt sharpens your thinking.<br />
							Every resource carries the wisdom of experience.<br />
							Every template is a map through the chaos of life's biggest moments.</p>

							<p>This isn't stationery.<br />
							This isn't software.<br />
							This is your co-pilot for existence.<br />
							Your library of clarity.<br />
							Your guide through the uncharted.</p>

							<p>Life shouldn't start with a blank page.</p>

							<p>And starting today — it never will again.</p>

							<p>Templata. The blank page is dead.</p>
						</div>
					</CardContent>
				</Card>

			</div>
		</PageLayout>
	)
}