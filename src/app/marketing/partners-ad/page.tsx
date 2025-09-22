"use client";

import { Announcement, AnnouncementTag, AnnouncementTitle } from "@/components/ui/announcement";

export default function PartnersAdPage() {
	return (
		<div className="min-h-screen bg-black text-white flex items-center justify-center p-16 relative overflow-hidden">
			{/* Background Image */}
			<div
				className="absolute inset-0 bg-cover bg-center opacity-25"
				style={{
					backgroundImage: "url('/expert-network.png')"
				}}
			></div>

			{/* Logo in corner */}
			<div className="absolute top-8 left-8 flex items-center space-x-2 z-10">
				<img
					src="/shift.svg"
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
					<Announcement className="border-white/30 text-white bg-white/10 backdrop-blur-sm">
						<AnnouncementTag>Coming Soon</AnnouncementTag>
						<AnnouncementTitle>Expert Partners</AnnouncementTitle>
					</Announcement>

					<h1 className="text-7xl lg:text-8xl font-black leading-none tracking-tight">
						Guidance from
						<br />
						life's best
						<br />
						experts
					</h1>

					<p className="text-3xl text-gray-400 max-w-3xl mx-auto font-light">
						Templates designed by therapists, coaches, and specialists.
					</p>
				</div>
			</div>
		</div>
	);
}