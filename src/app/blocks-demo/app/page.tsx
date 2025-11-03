"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FloatingDockNav } from "@/components/floating-dock-nav";
import { GuidesViewWrapper } from '@/app/app/views/GuidesViewWrapper';
import { NotesViewWrapper } from '@/app/app/views/NotesViewWrapper';
import { OverviewView } from '@/app/app/views/OverviewView';
import { CalendarView } from '@/app/app/views/CalendarView';
import { TasksView } from '@/app/app/views/TasksView';

type View = 'guides' | 'notes' | 'overview' | 'calendar' | 'tasks';

export default function AppPage() {
	const [currentView, setCurrentView] = useState<View>('guides');
	const [viewKeys, setViewKeys] = useState({
		guides: 0,
		notes: 0,
		overview: 0,
		calendar: 0,
		tasks: 0,
	});
	const [selectedTrackIds, setSelectedTrackIds] = useState<string[]>([]);
	const [isDark, setIsDark] = useState(false);
	const [userEmail, setUserEmail] = useState('');

	// Callbacks for interactive banner
	const [templatesActions, setTemplatesActions] = useState<{
		openTemplateDropdown?: () => void;
		selectFirstPrompt?: () => void;
		openFirstArticle?: () => void;
	}>({});

	useEffect(() => {
		loadUser();
		loadSelectedTracks();
		checkTheme();

		async function loadUser() {
			try {
				const res = await fetch('/api/auth/me');
				const data = await res.json();

				if (data.user) {
					setUserEmail(data.user.email || '');
				}
				// Allow anonymous users - don't redirect
			} catch (error) {
				console.error('Error loading user:', error);
				// Allow anonymous users - don't redirect
			}
		}

		function loadSelectedTracks() {
			const saved = localStorage.getItem('selectedTrackIds');
			if (saved) {
				try {
					setSelectedTrackIds(JSON.parse(saved));
				} catch (e) {
					console.error('Error loading selected tracks:', e);
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
		// Increment the key for the new view to retrigger animations
		setViewKeys(prev => ({
			...prev,
			[newView]: prev[newView] + 1,
		}));
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
		<div className="h-screen flex flex-col bg-background">
			{/* Info Banner */}
			<div className="border-b bg-primary/5 border-primary/20 overflow-hidden">
				<div className="py-3">
					<div className="inline-flex animate-scroll hover:pause-animation whitespace-nowrap">
						<div className="inline-flex items-center gap-3 text-sm text-foreground px-6">
							<span className="inline-flex items-center gap-1.5">
								<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-semibold">1</span>
								Pick a{' '}
								<button
									onClick={() => {
										if (currentView !== 'guides') handleViewChange('guides');
										setTimeout(() => templatesActions.openTemplateDropdown?.(), 100);
									}}
									className="px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 hover:bg-yellow-500/20 font-medium transition-colors"
								>
									guide
								</button>{' '}
								that fits your goal
							</span>
							<span className="text-muted-foreground">→</span>
							<span className="inline-flex items-center gap-1.5">
								<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-semibold">2</span>
								Answer thoughtful{' '}
								<button
									onClick={() => {
										if (currentView !== 'guides') handleViewChange('guides');
										setTimeout(() => templatesActions.selectFirstPrompt?.(), 100);
									}}
									className="px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 hover:bg-yellow-500/20 font-medium transition-colors"
								>
									questions
								</button>
							</span>
							<span className="text-muted-foreground">→</span>
							<span className="inline-flex items-center gap-1.5">
								<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-semibold">3</span>
								Read curated{' '}
								<button
									onClick={() => {
										if (currentView !== 'guides') handleViewChange('guides');
										setTimeout(() => templatesActions.openFirstArticle?.(), 100);
									}}
									className="px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 hover:bg-yellow-500/20 font-medium transition-colors"
								>
									readings
								</button>{' '}
								for help
							</span>
							<span className="text-muted-foreground">→</span>
							<span className="inline-flex items-center gap-1.5">
								<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-semibold">4</span>
								Create todos/events in{' '}
								<button
									onClick={() => handleViewChange('tasks')}
									className="px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 hover:bg-yellow-500/20 font-medium transition-colors"
								>
									Tasks
								</button>
								/
								<button
									onClick={() => handleViewChange('calendar')}
									className="px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 hover:bg-yellow-500/20 font-medium transition-colors"
								>
									Calendar
								</button>
							</span>
							<span className="text-muted-foreground">→</span>
							<span className="inline-flex items-center gap-1.5">
								<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-semibold">5</span>
								Add freeform notes in{' '}
								<button
									onClick={() => handleViewChange('notes')}
									className="px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 hover:bg-yellow-500/20 font-medium transition-colors"
								>
									Notes
								</button>
							</span>
							<span className="text-muted-foreground">→</span>
							<span className="inline-flex items-center gap-1.5">
								<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-semibold">6</span>
								See everything in one place in{' '}
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
								Pick a{' '}
								<button
									onClick={() => {
										if (currentView !== 'guides') handleViewChange('guides');
										setTimeout(() => templatesActions.openTemplateDropdown?.(), 100);
									}}
									className="px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 hover:bg-yellow-500/20 font-medium transition-colors"
								>
									guide
								</button>{' '}
								that fits your goal
							</span>
							<span className="text-muted-foreground">→</span>
							<span className="inline-flex items-center gap-1.5">
								<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-semibold">2</span>
								Answer thoughtful{' '}
								<button
									onClick={() => {
										if (currentView !== 'guides') handleViewChange('guides');
										setTimeout(() => templatesActions.selectFirstPrompt?.(), 100);
									}}
									className="px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 hover:bg-yellow-500/20 font-medium transition-colors"
								>
									questions
								</button>
							</span>
							<span className="text-muted-foreground">→</span>
							<span className="inline-flex items-center gap-1.5">
								<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-semibold">3</span>
								Read curated{' '}
								<button
									onClick={() => {
										if (currentView !== 'guides') handleViewChange('guides');
										setTimeout(() => templatesActions.openFirstArticle?.(), 100);
									}}
									className="px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 hover:bg-yellow-500/20 font-medium transition-colors"
								>
									readings
								</button>{' '}
								for help
							</span>
							<span className="text-muted-foreground">→</span>
							<span className="inline-flex items-center gap-1.5">
								<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-semibold">4</span>
								Create todos/events in{' '}
								<button
									onClick={() => handleViewChange('tasks')}
									className="px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 hover:bg-yellow-500/20 font-medium transition-colors"
								>
									Tasks
								</button>
								/
								<button
									onClick={() => handleViewChange('calendar')}
									className="px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 hover:bg-yellow-500/20 font-medium transition-colors"
								>
									Calendar
								</button>
							</span>
							<span className="text-muted-foreground">→</span>
							<span className="inline-flex items-center gap-1.5">
								<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-semibold">5</span>
								Add freeform notes in{' '}
								<button
									onClick={() => handleViewChange('notes')}
									className="px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 hover:bg-yellow-500/20 font-medium transition-colors"
								>
									Notes
								</button>
							</span>
							<span className="text-muted-foreground">→</span>
							<span className="inline-flex items-center gap-1.5">
								<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-semibold">6</span>
								See everything in one place in{' '}
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
						key={`guides-${viewKeys.guides}`}
						onViewChange={handleViewChange}
						setActions={setTemplatesActions}
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
						key={`notes-${viewKeys.notes}`}
						selectedTrackIds={selectedTrackIds}
					/>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{
						opacity: currentView === 'calendar' ? 1 : 0,
						y: currentView === 'calendar' ? 0 : 20,
					}}
					transition={{ duration: 0.3, ease: 'easeInOut' }}
					className="absolute inset-0"
					style={{
						pointerEvents: currentView === 'calendar' ? 'auto' : 'none',
						zIndex: currentView === 'calendar' ? 10 : 0
					}}
				>
					<CalendarView
						key={`calendar-${viewKeys.calendar}`}
						selectedTrackIds={selectedTrackIds}
					/>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{
						opacity: currentView === 'tasks' ? 1 : 0,
						y: currentView === 'tasks' ? 0 : 20,
					}}
					transition={{ duration: 0.3, ease: 'easeInOut' }}
					className="absolute inset-0"
					style={{
						pointerEvents: currentView === 'tasks' ? 'auto' : 'none',
						zIndex: currentView === 'tasks' ? 10 : 0
					}}
				>
					<TasksView
						key={`tasks-${viewKeys.tasks}`}
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
					<OverviewView key={`overview-${viewKeys.overview}`} />
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
			/>
		</div>
	);
}
