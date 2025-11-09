"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FloatingDockNav } from "@/components/floating-dock-nav";
import { GuidesViewWrapper } from '@/app/app/views/GuidesViewWrapper';
import { NotesViewWrapper } from '@/app/app/views/NotesViewWrapper';
import { OverviewView } from '@/app/app/views/OverviewView';
import { DataCacheProvider } from '@/contexts/DataCacheContext';

type View = 'guides' | 'notes' | 'overview';

export default function AppPage() {
	const [currentView, setCurrentView] = useState<View>('guides');
	const [selectedTrackIds, setSelectedTrackIds] = useState<string[]>([]);
	const [isDark, setIsDark] = useState(false);
	const [trackSelectorOpen, setTrackSelectorOpen] = useState(false);
	const [calendarSelectorOpen, setCalendarSelectorOpen] = useState(false);
	const [tasksSelectorOpen, setTasksSelectorOpen] = useState(false);

	useEffect(() => {
		loadUser();
		loadSelectedTracks();
		checkTheme();

		async function loadUser() {
			try {
				const res = await fetch('/api/auth/me');
				const data = await res.json();

				if (data.user) {
					// User is authenticated
				}
				// Allow anonymous users - don't redirect
			} catch {
				// Allow anonymous users - don't redirect
			}
		}

		function loadSelectedTracks() {
			const saved = localStorage.getItem('selectedTrackIds');
			if (saved) {
				try {
					setSelectedTrackIds(JSON.parse(saved));
				} catch (_e) {
					// Ignore parse errors
				}
			}
		}

		function checkTheme() {
			const isDarkMode = document.documentElement.classList.contains("dark");
			setIsDark(isDarkMode);
		}
	}, []);

	// Persist selected tracks to localStorage
	useEffect(() => {
		localStorage.setItem('selectedTrackIds', JSON.stringify(selectedTrackIds));
	}, [selectedTrackIds]);

	const handleViewChange = (newView: View) => {
		setCurrentView(newView);
	};

	const handleThemeToggle = () => {
		const newIsDark = !isDark;
		setIsDark(newIsDark);

		if (newIsDark) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	};

	return (
		<DataCacheProvider>
		<div className="h-screen flex flex-col bg-background">
			{/* Info Banner */}
			<div className="border-b bg-primary/5 border-primary/20 overflow-hidden">
				<div className="py-3">
					<div className="inline-flex animate-scroll hover:pause-animation whitespace-nowrap">
						<div className="inline-flex items-center gap-3 text-sm text-foreground px-6">
							<span className="inline-flex items-center gap-1.5">
								<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-semibold">1</span>
								Choose a{' '}
								<button
									onClick={() => setTrackSelectorOpen(!trackSelectorOpen)}
									className="px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 hover:bg-yellow-500/20 font-medium transition-colors"
								>
									Track
								</button>
							</span>
							<span className="text-muted-foreground">→</span>
							<span className="inline-flex items-center gap-1.5">
								<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-semibold">2</span>
								Explore{' '}
								<button
									onClick={() => handleViewChange('guides')}
									className="px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 hover:bg-yellow-500/20 font-medium transition-colors"
								>
									Guides
								</button>
								{' '}and capture{' '}
								<button
									onClick={() => handleViewChange('notes')}
									className="px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 hover:bg-yellow-500/20 font-medium transition-colors"
								>
									Notes
								</button>
							</span>
							<span className="text-muted-foreground">→</span>
							<span className="inline-flex items-center gap-1.5">
								<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-semibold">3</span>
								Schedule with{' '}
								<button
									onClick={() => setTasksSelectorOpen(!tasksSelectorOpen)}
									className="px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 hover:bg-yellow-500/20 font-medium transition-colors"
								>
									Tasks
								</button>
								{' '}and{' '}
								<button
									onClick={() => setCalendarSelectorOpen(!calendarSelectorOpen)}
									className="px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 hover:bg-yellow-500/20 font-medium transition-colors"
								>
									Calendar
								</button>
							</span>
							<span className="text-muted-foreground">→</span>
							<span className="inline-flex items-center gap-1.5">
								<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-semibold">4</span>
								Review in{' '}
								<button
									onClick={() => handleViewChange('overview')}
									className="px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 hover:bg-yellow-500/20 font-medium transition-colors"
								>
									Overview
								</button>
							</span>
						</div>
						{/* Duplicate for seamless loop */}
						<div className="inline-flex items-center gap-3 text-sm text-foreground px-6">
							<span className="inline-flex items-center gap-1.5">
								<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-semibold">1</span>
								Choose a{' '}
								<button
									onClick={() => setTrackSelectorOpen(!trackSelectorOpen)}
									className="px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 hover:bg-yellow-500/20 font-medium transition-colors"
								>
									Track
								</button>
							</span>
							<span className="text-muted-foreground">→</span>
							<span className="inline-flex items-center gap-1.5">
								<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-semibold">2</span>
								Explore{' '}
								<button
									onClick={() => handleViewChange('guides')}
									className="px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 hover:bg-yellow-500/20 font-medium transition-colors"
								>
									Guides
								</button>
								{' '}and capture{' '}
								<button
									onClick={() => handleViewChange('notes')}
									className="px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 hover:bg-yellow-500/20 font-medium transition-colors"
								>
									Notes
								</button>
							</span>
							<span className="text-muted-foreground">→</span>
							<span className="inline-flex items-center gap-1.5">
								<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-semibold">3</span>
								Schedule with{' '}
								<button
									onClick={() => setTasksSelectorOpen(!tasksSelectorOpen)}
									className="px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 hover:bg-yellow-500/20 font-medium transition-colors"
								>
									Tasks
								</button>
								{' '}and{' '}
								<button
									onClick={() => setCalendarSelectorOpen(!calendarSelectorOpen)}
									className="px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 hover:bg-yellow-500/20 font-medium transition-colors"
								>
									Calendar
								</button>
							</span>
							<span className="text-muted-foreground">→</span>
							<span className="inline-flex items-center gap-1.5">
								<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-semibold">4</span>
								Review in{' '}
								<button
									onClick={() => handleViewChange('overview')}
									className="px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 hover:bg-yellow-500/20 font-medium transition-colors"
								>
									Overview
								</button>
							</span>
						</div>
					</div>
				</div>
				<style jsx>{`
					@keyframes scroll {
						0% { transform: translateX(0); }
						100% { transform: translateX(-50%); }
					}
					.animate-scroll {
						animation: scroll 60s linear infinite;
					}
					.hover\\:pause-animation:hover {
						animation-play-state: paused;
					}
				`}</style>
			</div>

			{/* View Viewport with transitions */}
			<div className={`flex-1 relative bg-background pb-20 ${currentView === 'overview' ? 'overflow-y-auto' : 'overflow-hidden'}`}>
				<motion.div
					initial={{ opacity: 1, y: 0 }}
					animate={{
						opacity: currentView === 'guides' ? 1 : 0,
						y: currentView === 'guides' ? 0 : 20,
					}}
					transition={{ duration: 0.3, ease: 'easeInOut' }}
					className="absolute inset-0"
					style={{
						pointerEvents: currentView === 'guides' ? 'auto' : 'none',
						zIndex: currentView === 'guides' ? 10 : 0
					}}
				>
					<GuidesViewWrapper
						selectedTrackIds={selectedTrackIds}
					/>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{
						opacity: currentView === 'notes' ? 1 : 0,
						y: currentView === 'notes' ? 0 : 20,
					}}
					transition={{ duration: 0.3, ease: 'easeInOut' }}
					className="absolute inset-0"
					style={{
						pointerEvents: currentView === 'notes' ? 'auto' : 'none',
						zIndex: currentView === 'notes' ? 10 : 0
					}}
				>
					<NotesViewWrapper
						selectedTrackIds={selectedTrackIds}
					/>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{
						opacity: currentView === 'overview' ? 1 : 0,
						y: currentView === 'overview' ? 0 : 20,
					}}
					transition={{ duration: 0.3, ease: 'easeInOut' }}
					className="absolute inset-0"
					style={{
						pointerEvents: currentView === 'overview' ? 'auto' : 'none',
						zIndex: currentView === 'overview' ? 10 : 0
					}}
				>
					<OverviewView />
				</motion.div>
			</div>

			{/* Floating Dock Navigation */}
			<FloatingDockNav
				currentView={currentView}
				onViewChange={handleViewChange}
				onThemeToggle={handleThemeToggle}
				isDark={isDark}
				selectedTrackIds={selectedTrackIds}
				onTrackSelectionChange={setSelectedTrackIds}
				trackSelectorOpen={trackSelectorOpen}
				setTrackSelectorOpen={setTrackSelectorOpen}
				calendarSelectorOpen={calendarSelectorOpen}
				setCalendarSelectorOpen={setCalendarSelectorOpen}
				tasksSelectorOpen={tasksSelectorOpen}
				setTasksSelectorOpen={setTasksSelectorOpen}
			/>
		</div>
		</DataCacheProvider>
	);
}
