export default function PromptsAdPage() {
	return (
		<div className="min-h-screen bg-black text-white flex items-center justify-center p-16 relative overflow-hidden">
			{/* Background Image */}
			<div
				className="absolute inset-0 bg-cover bg-center opacity-25"
				style={{
					backgroundImage: "url('/prompt-matrix.png')"
				}}
			></div>

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
				<div className="max-w-4xl text-center space-y-12">
					<h1 className="text-7xl lg:text-8xl font-black leading-none tracking-tight">
						15,000+
						<br />
						prompts for
						<br />
						every
						<br />
						situation
					</h1>

					<p className="text-3xl text-gray-400 max-w-3xl mx-auto font-light">
						Never wonder "what should I ask myself?" again.
					</p>
				</div>
			</div>
		</div>
	);
}