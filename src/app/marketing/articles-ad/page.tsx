export default function ArticlesAdPage() {
	return (
		<div className="min-h-screen bg-black text-white flex items-center justify-center p-16 relative overflow-hidden">
			{/* Logo in corner */}
			<div className="absolute top-8 left-8 flex items-center space-x-2 z-10">
				<img
					src="/brand/templata-logo.svg"
					alt="Templata"
					width={32}
					height={32}
					className="invert"
				/>
				<div className="text-2xl font-bold text-white">Templata</div>
			</div>

			{/* Main Content */}
			<div className="flex-1 flex items-center justify-center">
				<div className="max-w-4xl mx-auto text-center space-y-8">
					<h1 className="text-7xl lg:text-8xl font-black leading-none tracking-tight">
						26,000+ readings
						<br />
						for every
						<br />
						decision
					</h1>

					<p className="text-3xl text-gray-400 max-w-3xl mx-auto font-light">
						Expert guidance when you need it most.
					</p>
				</div>
			</div>

			{/* Articles list peeking from right */}
			<div className="absolute right-0 top-0 bottom-0 transform translate-x-[60%]">
				<div className="h-full w-[400px] bg-white rounded-l-2xl shadow-2xl overflow-hidden">
					<div className="p-6 border-b border-gray-200">
						<h3 className="text-lg font-semibold text-black">Expert Readings</h3>
						<p className="text-sm text-gray-600">Axiom Engine powered guidance</p>
					</div>
					<div className="p-4 space-y-3 text-black">
						<div className="p-3 bg-gray-50 rounded border-l-4 border-blue-500">
							<div className="font-medium text-sm">Wedding Budget Breakdown</div>
							<div className="text-xs text-gray-600">Complete cost analysis guide</div>
						</div>
						<div className="p-3 bg-gray-50 rounded border-l-4 border-green-500">
							<div className="font-medium text-sm">Career Change Strategy</div>
							<div className="text-xs text-gray-600">Transition planning essentials</div>
						</div>
						<div className="p-3 bg-gray-50 rounded border-l-4 border-purple-500">
							<div className="font-medium text-sm">Home Buying Checklist</div>
							<div className="text-xs text-gray-600">First-time buyer's guide</div>
						</div>
						<div className="p-3 bg-gray-50 rounded border-l-4 border-orange-500">
							<div className="font-medium text-sm">Business Launch Framework</div>
							<div className="text-xs text-gray-600">Startup validation process</div>
						</div>
						<div className="p-3 bg-gray-50 rounded border-l-4 border-red-500">
							<div className="font-medium text-sm">Investment Portfolio Setup</div>
							<div className="text-xs text-gray-600">Beginner wealth building</div>
						</div>
						<div className="p-3 bg-gray-50 rounded border-l-4 border-primary">
							<div className="font-medium text-sm">Fitness Goal Planning</div>
							<div className="text-xs text-gray-600">Sustainable habit formation</div>
						</div>
						<div className="p-3 bg-gray-50 rounded border-l-4 border-pink-500">
							<div className="font-medium text-sm">Moving Coordination Guide</div>
							<div className="text-xs text-gray-600">Stress-free relocation</div>
						</div>
						<div className="p-3 bg-gray-50 rounded border-l-4 border-yellow-500">
							<div className="font-medium text-sm">Event Planning Timeline</div>
							<div className="text-xs text-gray-600">Professional organization</div>
						</div>
						<div className="p-3 bg-gray-50 rounded border-l-4 border-cyan-500">
							<div className="font-medium text-sm">Retirement Strategy</div>
							<div className="text-xs text-gray-600">Long-term financial planning</div>
						</div>
						<div className="p-3 bg-gray-50 rounded border-l-4 border-teal-500">
							<div className="font-medium text-sm">Parenting Preparation</div>
							<div className="text-xs text-gray-600">New parent essentials</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}