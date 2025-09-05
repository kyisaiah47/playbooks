"use client";

import { useState, useEffect } from "react";
import { CollegePlanningSidebarLeft } from "@/components/college-planning-sidebar-left";
import { SidebarRight } from "@/components/sidebar-right";
import { CollegePlanningOverview } from "@/components/college-planning-overview";
import { ApplicationTracker } from "@/components/application-tracker";
import { FinancialAidTracker } from "@/components/financial-aid-tracker";
import { CoursePlanning } from "@/components/course-planning";
import { CampusVisitPlanner } from "@/components/campus-visit-planner";
import { EssayManager } from "@/components/essay-manager";
import { RecommendationTracker } from "@/components/recommendation-tracker";
import { CollegePlanningSetupWizard } from "@/components/college-planning-setup-wizard";
import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	useCollegePlanning,
	getCollegePlanningDisplayData,
} from "@/contexts/college-planning-context";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import {
	CalendarIcon,
	Clock,
	Target,
	Wand2,
	Settings2,
	LifeBuoy,
	GraduationCap,
} from "lucide-react";

function CollegePlanningTemplatePage() {
	const [activeSection, setActiveSection] = useState("overview");
	const {
		collegePlanningData,
		isWizardOpen,
		setWizardOpen,
		updateCollegePlanningData,
	} = useCollegePlanning();

	useEffect(() => {
		const handleHashChange = () => {
			const hash = window.location.hash.replace("#", "");
			if (hash) {
				setActiveSection(hash);
			}
		};

		handleHashChange();
		window.addEventListener("hashchange", handleHashChange);

		return () => {
			window.removeEventListener("hashchange", handleHashChange);
		};
	}, []);

	const renderContent = () => {
		switch (activeSection) {
			case "applications":
				return <ApplicationTracker />;
			case "financial-aid":
				return <FinancialAidTracker />;
			case "course-planning":
				return <CoursePlanning />;
			case "campus-visits":
				return <CampusVisitPlanner />;
			case "essays":
				return <EssayManager />;
			case "recommendations":
				return <RecommendationTracker />;
			case "calendar":
				return <CollegePlanningCalendar />;
			case "settings":
				return <CollegePlanningSettings />;
			case "help":
				return <CollegePlanningHelp />;
			case "overview":
			default:
				return <CollegePlanningOverview />;
		}
	};

	const resetAllData = () => {
		if (
			window.confirm(
				"Are you sure you want to reset all college planning data? This action cannot be undone."
			)
		) {
			localStorage.removeItem("templata-college-planning-data");
			window.location.reload();
		}
	};

	const CollegePlanningSettings = () => (
		<div className="space-y-6">
			<div>
				<h1 className="text-3xl font-bold flex items-center">
					<Settings2 className="mr-2 h-8 w-8" />
					Settings
				</h1>
				<p className="text-muted-foreground">
					Manage your college planning preferences and data
				</p>
			</div>

			<div className="grid gap-6">
				<div className="rounded-lg border p-6">
					<h3 className="text-lg font-semibold mb-2">College Planning Setup</h3>
					<p className="text-sm text-muted-foreground mb-4">
						Update your college planning information or restart the setup
						process
					</p>
					<div className="flex gap-3">
						<button
							onClick={() => setWizardOpen(true)}
							className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
						>
							Edit College Planning Details
						</button>
						<button
							onClick={resetAllData}
							className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-destructive border-destructive/30 hover:bg-destructive/10"
						>
							Reset All Data
						</button>
					</div>
					<p className="text-xs text-muted-foreground mt-2">
						Reset will clear all college planning data and restart the setup
						wizard
					</p>
				</div>

				<div className="rounded-lg border p-6">
					<h3 className="text-lg font-semibold mb-2">Current Profile</h3>
					<div className="grid md:grid-cols-2 gap-4 text-sm">
						<div>
							<span className="font-medium">Student Name:</span>
							<p className="text-muted-foreground">
								{collegePlanningData.studentName || "Not set"}
							</p>
						</div>
						<div>
							<span className="font-medium">Graduation Year:</span>
							<p className="text-muted-foreground">
								{collegePlanningData.graduationYear}
							</p>
						</div>
						<div>
							<span className="font-medium">Intended Major:</span>
							<p className="text-muted-foreground">
								{collegePlanningData.intendedMajor || "Not set"}
							</p>
						</div>
						<div>
							<span className="font-medium">Current GPA:</span>
							<p className="text-muted-foreground">
								{collegePlanningData.currentGPA}/4.0
							</p>
						</div>
						<div>
							<span className="font-medium">Target GPA:</span>
							<p className="text-muted-foreground">
								{collegePlanningData.targetGPA}/4.0
							</p>
						</div>
						<div>
							<span className="font-medium">Application Target:</span>
							<p className="text-muted-foreground">
								{collegePlanningData.maxApplications} colleges
							</p>
						</div>
					</div>
				</div>

				<div className="rounded-lg border p-6">
					<h3 className="text-lg font-semibold mb-2">Test Scores</h3>
					<div className="grid md:grid-cols-2 gap-4 text-sm">
						<div>
							<span className="font-medium">SAT Score:</span>
							<p className="text-muted-foreground">
								{collegePlanningData.standardizedTests.sat.taken
									? `${collegePlanningData.standardizedTests.sat.totalScore}/1600`
									: "Not taken"}
							</p>
						</div>
						<div>
							<span className="font-medium">ACT Score:</span>
							<p className="text-muted-foreground">
								{collegePlanningData.standardizedTests.act.taken
									? `${collegePlanningData.standardizedTests.act.compositeScore}/36`
									: "Not taken"}
							</p>
						</div>
						<div>
							<span className="font-medium">AP Courses Taken:</span>
							<p className="text-muted-foreground">
								{collegePlanningData.standardizedTests.ap.coursesTaken.length}
							</p>
						</div>
						<div>
							<span className="font-medium">AP Courses Planned:</span>
							<p className="text-muted-foreground">
								{collegePlanningData.standardizedTests.ap.coursesPlanned.length}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);

	const CollegePlanningHelp = () => (
		<div className="space-y-6">
			<div>
				<h1 className="text-3xl font-bold flex items-center">
					<LifeBuoy className="mr-2 h-8 w-8" />
					Help & Support
				</h1>
				<p className="text-muted-foreground">
					Tips and guidance for your college planning journey
				</p>
			</div>

			<div className="grid gap-6">
				<div className="rounded-lg border p-6">
					<h3 className="text-lg font-semibold mb-4">Getting Started</h3>
					<div className="space-y-4">
						<div>
							<h4 className="font-medium mb-2">1. Complete Your Profile</h4>
							<p className="text-sm text-muted-foreground">
								Use the setup wizard to configure your academic profile,
								preferences, and goals.
							</p>
						</div>
						<div>
							<h4 className="font-medium mb-2">2. Research Colleges</h4>
							<p className="text-sm text-muted-foreground">
								Use our college search tools to find schools that match your
								criteria and goals.
							</p>
						</div>
						<div>
							<h4 className="font-medium mb-2">3. Track Applications</h4>
							<p className="text-sm text-muted-foreground">
								Keep detailed records of all college applications, deadlines,
								and requirements.
							</p>
						</div>
						<div>
							<h4 className="font-medium mb-2">4. Plan Your Finances</h4>
							<p className="text-sm text-muted-foreground">
								Explore financial aid options, scholarships, and create a
								college funding strategy.
							</p>
						</div>
						<div>
							<h4 className="font-medium mb-2">5. Prepare Strong Essays</h4>
							<p className="text-sm text-muted-foreground">
								Use our essay tools to brainstorm, draft, and refine your
								application essays.
							</p>
						</div>
					</div>
				</div>

				<div className="rounded-lg border p-6">
					<h3 className="text-lg font-semibold mb-4">
						College Application Timeline
					</h3>
					<div className="space-y-3 text-sm">
						<div className="font-medium">Junior Year:</div>
						<div className="pl-4 space-y-1">
							<div>• Take PSAT/NMSQT and practice tests</div>
							<div>• Research colleges and create preliminary list</div>
							<div>• Take SAT/ACT (spring)</div>
							<div>• Plan summer activities or jobs</div>
						</div>
						<div className="font-medium mt-4">Senior Year Fall:</div>
						<div className="pl-4 space-y-1">
							<div>• Finalize college list</div>
							<div>• Request recommendation letters</div>
							<div>• Work on essays and applications</div>
							<div>• Submit Early Action/Decision applications (Nov 1-15)</div>
						</div>
						<div className="font-medium mt-4">Senior Year Spring:</div>
						<div className="pl-4 space-y-1">
							<div>• Submit Regular Decision applications (Jan 1)</div>
							<div>• Complete FAFSA and CSS Profile</div>
							<div>• Apply for scholarships</div>
							<div>• Make final college decision (May 1)</div>
						</div>
					</div>
				</div>

				<div className="rounded-lg border p-6">
					<h3 className="text-lg font-semibold mb-4">Best Practices</h3>
					<div className="space-y-2 text-sm">
						<div>• Start early and stay organized with deadlines</div>
						<div>• Create a balanced college list (reach, match, safety)</div>
						<div>• Show demonstrated interest in your target schools</div>
						<div>
							• Write authentic, personal essays that showcase your voice
						</div>
						<div>• Request recommendation letters well in advance</div>
						<div>
							• Apply for financial aid even if you think you won&apos;t qualify
						</div>
						<div>
							• Keep copies of all applications and supporting documents
						</div>
						<div>• Visit campuses when possible (virtual or in-person)</div>
					</div>
				</div>
			</div>
		</div>
	);

	const CollegePlanningCalendar = () => (
		<div className="space-y-6">
			<div>
				<h1 className="text-3xl font-bold flex items-center">
					<CalendarIcon className="mr-2 h-8 w-8" />
					College Planning Calendar
				</h1>
				<p className="text-muted-foreground">
					Important dates and deadlines for your college journey
				</p>
			</div>

			<div className="grid gap-6">
				<div className="rounded-lg border p-6">
					<h3 className="text-lg font-semibold mb-4">Upcoming Deadlines</h3>
					<div className="space-y-4">
						<div className="flex items-center justify-between p-3 bg-accent/50 rounded-lg">
							<div>
								<h4 className="font-medium">Early Action Deadlines</h4>
								<p className="text-sm text-muted-foreground">
									Most EA applications due
								</p>
							</div>
							<div className="text-right">
								<div className="font-medium">Nov 1-15</div>
								<div className="text-sm text-muted-foreground">
									{getCollegePlanningDisplayData(collegePlanningData)
										.daysUntilEarlyDeadlines > 0
										? `${
												getCollegePlanningDisplayData(collegePlanningData)
													.daysUntilEarlyDeadlines
										  } days`
										: "Past due"}
								</div>
							</div>
						</div>
						<div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
							<div>
								<h4 className="font-medium">Regular Decision Deadlines</h4>
								<p className="text-sm text-muted-foreground">
									Most RD applications due
								</p>
							</div>
							<div className="text-right">
								<div className="font-medium">Jan 1-15</div>
								<div className="text-sm text-muted-foreground">
									{getCollegePlanningDisplayData(collegePlanningData)
										.daysUntilRegularDeadlines > 0
										? `${
												getCollegePlanningDisplayData(collegePlanningData)
													.daysUntilRegularDeadlines
										  } days`
										: "Past due"}
								</div>
							</div>
						</div>
						<div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
							<div>
								<h4 className="font-medium">FAFSA Opens</h4>
								<p className="text-sm text-muted-foreground">
									Federal financial aid application
								</p>
							</div>
							<div className="text-right">
								<div className="font-medium">Oct 1</div>
								<div className="text-sm text-muted-foreground">Annual</div>
							</div>
						</div>
					</div>
				</div>

				<div className="rounded-lg border p-6">
					<h3 className="text-lg font-semibold mb-4">Test Dates</h3>
					<div className="grid md:grid-cols-2 gap-4">
						<div>
							<h4 className="font-medium mb-3">SAT Test Dates</h4>
							<div className="space-y-2 text-sm">
								<div className="flex justify-between">
									<span>October</span>
									<span>Oct 7, 2024</span>
								</div>
								<div className="flex justify-between">
									<span>November</span>
									<span>Nov 4, 2024</span>
								</div>
								<div className="flex justify-between">
									<span>December</span>
									<span>Dec 2, 2024</span>
								</div>
								<div className="flex justify-between">
									<span>March</span>
									<span>Mar 8, 2025</span>
								</div>
							</div>
						</div>
						<div>
							<h4 className="font-medium mb-3">ACT Test Dates</h4>
							<div className="space-y-2 text-sm">
								<div className="flex justify-between">
									<span>October</span>
									<span>Oct 26, 2024</span>
								</div>
								<div className="flex justify-between">
									<span>December</span>
									<span>Dec 14, 2024</span>
								</div>
								<div className="flex justify-between">
									<span>February</span>
									<span>Feb 8, 2025</span>
								</div>
								<div className="flex justify-between">
									<span>April</span>
									<span>Apr 12, 2025</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);

	const getSectionTitle = () => {
		switch (activeSection) {
			case "applications":
				return "Applications";
			case "financial-aid":
				return "Financial Aid";
			case "course-planning":
				return "Course Planning";
			case "campus-visits":
				return "Campus Visits";
			case "essays":
				return "Essays";
			case "recommendations":
				return "Recommendations";
			case "calendar":
				return "Calendar";
			case "settings":
				return "Settings";
			case "help":
				return "Help";
			case "overview":
			default:
				return "College Planning Overview";
		}
	};

	const displayData = getCollegePlanningDisplayData(collegePlanningData);

	return (
		<SidebarProvider>
			<CollegePlanningSidebarLeft />
			<SidebarInset>
				<header className="bg-background sticky top-0 flex h-14 shrink-0 items-center gap-2 border-b">
					<div className="flex flex-1 items-center gap-2 px-3">
						<SidebarTrigger />
						<Separator
							orientation="vertical"
							className="mr-2 data-[orientation=vertical]:h-4"
						/>
						<Breadcrumb>
							<BreadcrumbList>
								<BreadcrumbItem>
									<BreadcrumbPage className="line-clamp-1">
										{getSectionTitle()} - {displayData.studentName}
									</BreadcrumbPage>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
					</div>
					<div className="flex items-center space-x-3 px-3">
						<Badge
							variant="secondary"
							className="text-sm hidden sm:flex"
						>
							<GraduationCap className="mr-1 h-3 w-3" />
							Class of {displayData.graduationYear}
						</Badge>
						<Badge
							variant="outline"
							className="text-sm hidden sm:flex"
						>
							<Target className="mr-1 h-3 w-3" />
							{displayData.currentGPA}/{displayData.targetGPA} GPA
						</Badge>
						<Badge
							variant="outline"
							className="text-sm hidden sm:flex"
						>
							<Clock className="mr-1 h-3 w-3" />
							{displayData.daysUntilGraduation} days to graduation
						</Badge>
						<div className="flex items-center space-x-2">
							<Button
								variant="outline"
								size="sm"
								onClick={() => setWizardOpen(true)}
							>
								<Wand2 className="mr-2 h-4 w-4" />
								Setup
							</Button>
							<ThemeToggle />
						</div>
					</div>
				</header>
				<div className="flex flex-1 flex-col gap-4 p-4">{renderContent()}</div>
			</SidebarInset>
			<SidebarRight />
			<CollegePlanningSetupWizard
				isOpen={isWizardOpen}
				onClose={() => setWizardOpen(false)}
				onComplete={(data) => updateCollegePlanningData(data)}
				initialData={collegePlanningData}
			/>
		</SidebarProvider>
	);
}

export default function Page() {
	return <CollegePlanningTemplatePage />;
}
