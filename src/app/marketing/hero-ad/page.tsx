import { FullTemplatePreview } from "@/components/preview/FullTemplatePreview";

export default function HeroAdPage() {
	return (
		<div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
			{/* Background Image */}
			<div
				className="absolute inset-0 bg-cover bg-center opacity-20"
				style={{
					backgroundImage: "url('/floating-papers.png')"
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

			{/* Text in center */}
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[100%]">
				<div className="text-center space-y-8">
					<h1 className="text-7xl lg:text-8xl font-black leading-none tracking-tight">
						Skip the
						<br />
						blank page
					</h1>

					<p className="text-3xl text-gray-400 max-w-3xl mx-auto font-light">
						1,298 templates. 15,000+ prompts. Zero overwhelm.
					</p>
				</div>
			</div>

			{/* Preview at bottom */}
			<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[25%]">
				<div className="w-[80vw]">
					<div className="bg-white rounded-t-2xl shadow-2xl overflow-hidden">
						<div className="h-[60vh] overflow-hidden">
							<FullTemplatePreview templateType="Wedding Planning" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}