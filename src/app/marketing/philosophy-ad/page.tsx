import { Announcement, AnnouncementTag, AnnouncementTitle } from "@/components/ui/announcement";

export default function PhilosophyAdPage() {
	return (
		<div className="min-h-screen bg-black text-white flex items-center justify-center p-16 relative overflow-hidden">
			{/* Background Image */}
			<div
				className="absolute inset-0 bg-cover bg-center opacity-30"
				style={{
					backgroundImage: "url('/chaos-to-order.png')"
				}}
			></div>
			{/* Logo in corner */}
			<div className="absolute top-8 left-8 flex items-center space-x-2">
				<img
					src="/shift.svg"
					alt="Templata"
					width={32}
					height={32}
					className="invert"
				/>
				<div className="text-2xl font-bold text-white">Templata</div>
			</div>

			{/* Main Content - Simple and Clean like Linear */}
			<div className="max-w-4xl mx-auto text-center space-y-12">
				<Announcement className="border-white/30 text-white bg-white/10 backdrop-blur-sm">
					<AnnouncementTag>New</AnnouncementTag>
					<AnnouncementTitle>Life OS Mode</AnnouncementTitle>
				</Announcement>

				<h1 className="text-7xl lg:text-8xl font-black leading-none tracking-tight">
					Templates evolve
					<br />
					into your
					<br />
					life system
				</h1>

				<p className="text-3xl text-gray-400 max-w-3xl mx-auto font-light">
					Start guided. End autonomous.
				</p>
			</div>
		</div>
	);
}