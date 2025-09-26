import { MessageSquare, ArrowRight } from "lucide-react";

export default function FeaturePromptsAdPage() {
	return (
		<div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
			<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
				{/* Left Side - Big Statement */}
				<div className="space-y-8">
					<h1 className="text-8xl lg:text-9xl font-black leading-none tracking-tight">
						Never stare at a
						<br />
						<span className="bg-white text-black px-4">blank page</span>
						<br />
						again
					</h1>

					<p className="text-3xl text-gray-300 max-w-lg leading-relaxed">
						15,000+ action prompts guide you through every decision
					</p>
				</div>

				{/* Right Side - Prompt Examples */}
				<div className="space-y-6">
					<div className="flex items-center gap-4 mb-8">
						<MessageSquare className="h-8 w-8 text-white" />
						<span className="text-2xl font-semibold">Live Prompts Preview</span>
					</div>

					<div className="space-y-4">
						<div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
							<div className="text-lg font-medium mb-2 text-gray-400">Wedding Planning</div>
							<div className="text-2xl">What's your dream venue style?</div>
						</div>

						<div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
							<div className="text-lg font-medium mb-2 text-gray-400">Job Search</div>
							<div className="text-2xl">What are your non-negotiable benefits?</div>
						</div>

						<div className="bg-white text-black p-6 rounded-xl border-2 border-white">
							<div className="text-lg font-medium mb-2 text-gray-600">→ Current: Home Buying</div>
							<div className="text-2xl font-bold">What's your maximum commute time?</div>
						</div>

						<div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
							<div className="text-lg font-medium mb-2 text-gray-400">Business Launch</div>
							<div className="text-2xl">Who is your target customer segment?</div>
						</div>
					</div>

					<div className="flex items-center gap-3 text-gray-400 pt-4">
						<ArrowRight className="h-5 w-5" />
						<span className="text-lg">15,000+ prompts across 150+ templates</span>
					</div>
				</div>
			</div>
		</div>
	);
}