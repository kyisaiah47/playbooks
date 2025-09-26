import { BookOpen, MessageSquare, Layout } from "lucide-react";

export default function SplitScreenAdPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-purple-600 to-purple-800 text-white flex items-center justify-center p-8">
			<div className="max-w-7xl mx-auto text-center space-y-12">
				{/* Header */}
				<div className="space-y-6">
					<h1 className="text-8xl lg:text-9xl font-black leading-none tracking-tight">
						Prompts meet articles.
						<br />
						<span className="bg-white text-purple-800 px-6">Magic happens.</span>
					</h1>

					<p className="text-3xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
						Split-screen workspace where 15,000+ prompts work with 3,000+ expert articles
					</p>
				</div>

				{/* Split Screen Preview */}
				<div className="bg-white rounded-2xl p-8 text-black max-w-6xl mx-auto">
					<div className="flex items-center gap-3 mb-6">
						<Layout className="h-6 w-6 text-purple-600" />
						<span className="text-xl font-semibold text-purple-600">Live Workspace Preview</span>
					</div>

					<div className="grid lg:grid-cols-2 gap-8">
						{/* Left Side - Prompts */}
						<div className="space-y-4">
							<div className="flex items-center gap-3 mb-4">
								<MessageSquare className="h-5 w-5 text-purple-600" />
								<h3 className="text-2xl font-bold">Action Prompts</h3>
							</div>

							<div className="space-y-3">
								<div className="p-4 bg-gray-100 rounded-lg">
									<div className="text-lg">What's your venue budget range?</div>
								</div>
								<div className="p-4 bg-gray-100 rounded-lg">
									<div className="text-lg">Who are your must-have vendors?</div>
								</div>
								<div className="p-4 bg-purple-100 rounded-lg border-2 border-purple-300">
									<div className="text-lg font-semibold text-purple-800">→ Current: Guest count priorities</div>
								</div>
								<div className="p-4 bg-gray-100 rounded-lg">
									<div className="text-lg">What's your ceremony vision?</div>
								</div>
							</div>
						</div>

						{/* Right Side - Articles */}
						<div className="space-y-4">
							<div className="flex items-center gap-3 mb-4">
								<BookOpen className="h-5 w-5 text-purple-600" />
								<h3 className="text-2xl font-bold">Related Articles</h3>
							</div>

							<div className="space-y-3">
								<div className="p-4 bg-purple-50 rounded-lg border border-purple-200 cursor-pointer hover:bg-purple-100 transition-colors">
									<div className="text-lg font-medium">Venue Cost Breakdown Guide</div>
									<div className="text-sm text-gray-600 mt-1">Budget 25-40% for venue costs</div>
								</div>
								<div className="p-4 bg-purple-50 rounded-lg border border-purple-200 cursor-pointer hover:bg-purple-100 transition-colors">
									<div className="text-lg font-medium">Guest List Strategy</div>
									<div className="text-sm text-gray-600 mt-1">Start with must-haves, then expand</div>
								</div>
								<div className="p-4 bg-purple-50 rounded-lg border border-purple-200 cursor-pointer hover:bg-purple-100 transition-colors">
									<div className="text-lg font-medium">Seasonal Pricing Guide</div>
									<div className="text-sm text-gray-600 mt-1">Save 20-30% with off-season dates</div>
								</div>
							</div>

							<div className="text-center text-gray-500 text-lg pt-4 border-t">
								↗ Drag insights into your answers
							</div>
						</div>
					</div>
				</div>

				{/* Bottom CTA */}
				<div className="text-2xl text-purple-100">
					Experience the guided planning difference
				</div>
			</div>
		</div>
	);
}