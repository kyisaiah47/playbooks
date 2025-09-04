"use client";

import {
	useBabyPlanning,
	getBabyPlanningDisplayData,
} from "@/contexts/baby-planning-context";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	Baby,
	Heart,
	Calendar,
	DollarSign,
	Users,
	Home,
	Stethoscope,
	Clock,
	CheckCircle,
	TrendingUp,
	Target,
	BookOpen,
	ShoppingCart,
} from "lucide-react";

export function BabyPlanningOverview() {
	const { babyPlanningData } = useBabyPlanning();
	const displayData = getBabyPlanningDisplayData(babyPlanningData);

	const pregnancyProgress = Math.round(
		(babyPlanningData.currentWeek / 40) * 100
	);
	const budgetProgress = displayData.budgetProgress;

	const quickActions = [
		{
			title: "Track Weekly Development",
			description: "View baby&apos;s current development stage",
			icon: Baby,
			href: "#weekly-development",
			color: "bg-pink-100 text-pink-700 border-pink-200",
		},
		{
			title: "Add Pregnancy Symptom",
			description: "Log new symptoms or feelings",
			icon: Heart,
			href: "#symptoms-tracker",
			color: "bg-red-100 text-red-700 border-red-200",
		},
		{
			title: "Schedule Appointment",
			description: "Book your next prenatal visit",
			icon: Calendar,
			href: "#appointment-log",
			color: "bg-blue-100 text-blue-700 border-blue-200",
		},
		{
			title: "Update Budget",
			description: "Add new expenses or adjust budget",
			icon: DollarSign,
			href: "#budget",
			color: "bg-green-100 text-green-700 border-green-200",
		},
		{
			title: "Plan Nursery Items",
			description: "Add items to your nursery checklist",
			icon: Home,
			href: "#nursery",
			color: "bg-purple-100 text-purple-700 border-purple-200",
		},
		{
			title: "Research Baby Names",
			description: "Explore and save favorite names",
			icon: BookOpen,
			href: "#names",
			color: "bg-yellow-100 text-yellow-700 border-yellow-200",
		},
	];

	return (
		<div className="space-y-6">
			{/* Header */}
			<div>
				<h1 className="text-3xl font-bold">
					Welcome to Your Baby Planning Journey
				</h1>
				<p className="text-muted-foreground">
					Track your pregnancy progress and prepare for {displayData.babyName}
					&apos;s arrival
				</p>
			</div>

			{/* Key Stats */}
			<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">
							Pregnancy Progress
						</CardTitle>
						<Baby className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">
							Week {displayData.currentWeek}
						</div>
						<div className="flex items-center space-x-2 mt-2">
							<Progress
								value={pregnancyProgress}
								className="flex-1 h-2"
							/>
							<span className="text-xs text-muted-foreground">
								{pregnancyProgress}%
							</span>
						</div>
						<p className="text-xs text-muted-foreground mt-1">
							{displayData.trimester} Trimester • {displayData.daysUntilDue}{" "}
							days to go
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Budget Status</CardTitle>
						<DollarSign className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{budgetProgress}%</div>
						<div className="flex items-center space-x-2 mt-2">
							<Progress
								value={budgetProgress}
								className="flex-1 h-2"
							/>
						</div>
						<p className="text-xs text-muted-foreground mt-1">
							{displayData.budgetSpent} of {displayData.budgetTotal} allocated
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">
							Support Network
						</CardTitle>
						<Users className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">
							{displayData.supportSystemSize}
						</div>
						<p className="text-xs text-muted-foreground mt-1">
							People in your support system
						</p>
						<div className="flex gap-1 mt-2">
							{babyPlanningData.familySupport.length > 0 && (
								<Badge
									variant="outline"
									className="text-xs"
								>
									Family: {babyPlanningData.familySupport.length}
								</Badge>
							)}
							{babyPlanningData.professionalSupport.length > 0 && (
								<Badge
									variant="outline"
									className="text-xs"
								>
									Professional: {babyPlanningData.professionalSupport.length}
								</Badge>
							)}
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">
							Days Until Due
						</CardTitle>
						<Clock className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{displayData.daysUntilDue}</div>
						<p className="text-xs text-muted-foreground mt-1">
							Due: {displayData.dueDate.toLocaleDateString()}
						</p>
						<div className="mt-2">
							<Badge
								variant={
									displayData.daysUntilDue < 30
										? "destructive"
										: displayData.daysUntilDue < 90
										? "secondary"
										: "outline"
								}
								className="text-xs"
							>
								{displayData.daysUntilDue < 30
									? "Soon!"
									: displayData.daysUntilDue < 90
									? "Coming up"
									: "Plenty of time"}
							</Badge>
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Recent Activity & Quick Actions Grid */}
			<div className="grid lg:grid-cols-3 gap-6">
				{/* Baby Information */}
				<Card className="lg:col-span-1">
					<CardHeader>
						<CardTitle className="flex items-center">
							<Heart className="mr-2 h-5 w-5" />
							Baby Details
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<div>
							<div className="flex justify-between items-center">
								<span className="text-sm font-medium">Name</span>
								<span className="text-sm text-muted-foreground">
									{babyPlanningData.babyName || "Still choosing..."}
								</span>
							</div>
						</div>

						<div>
							<div className="flex justify-between items-center">
								<span className="text-sm font-medium">Gender</span>
								<span className="text-sm text-muted-foreground">
									{displayData.genderDisplay}
								</span>
							</div>
						</div>

						<div>
							<div className="flex justify-between items-center">
								<span className="text-sm font-medium">Multiple Pregnancy</span>
								<span className="text-sm text-muted-foreground">
									{babyPlanningData.multiplePregnancy
										? `Yes (${babyPlanningData.numberOfBabies} babies)`
										: "No"}
								</span>
							</div>
						</div>

						<div>
							<div className="flex justify-between items-center">
								<span className="text-sm font-medium">First Baby</span>
								<span className="text-sm text-muted-foreground">
									{babyPlanningData.isFirstBaby ? "Yes" : "No"}
								</span>
							</div>
						</div>

						<div>
							<div className="flex justify-between items-center">
								<span className="text-sm font-medium">High Risk</span>
								<span className="text-sm text-muted-foreground">
									{babyPlanningData.highRiskPregnancy ? "Yes" : "No"}
								</span>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Upcoming Milestones */}
				<Card className="lg:col-span-2">
					<CardHeader>
						<CardTitle className="flex items-center">
							<Target className="mr-2 h-5 w-5" />
							Upcoming Milestones & Tasks
						</CardTitle>
						<CardDescription>
							Important dates and tasks to complete
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-3">
							{/* Trimester-based milestones */}
							{displayData.currentWeek <= 12 && (
								<div className="flex items-center p-3 bg-muted rounded-lg">
									<CheckCircle className="h-4 w-4 mr-3 text-green-600" />
									<div className="flex-1">
										<div className="font-medium text-sm">
											First Trimester Tasks
										</div>
										<div className="text-xs text-muted-foreground">
											Schedule first prenatal appointment, start prenatal
											vitamins
										</div>
									</div>
								</div>
							)}

							{displayData.currentWeek > 12 &&
								displayData.currentWeek <= 27 && (
									<div className="flex items-center p-3 bg-muted rounded-lg">
										<CheckCircle className="h-4 w-4 mr-3 text-blue-600" />
										<div className="flex-1">
											<div className="font-medium text-sm">
												Second Trimester Tasks
											</div>
											<div className="text-xs text-muted-foreground">
												Schedule anatomy scan (18-22 weeks), plan nursery,
												consider babymoon
											</div>
										</div>
									</div>
								)}

							{displayData.currentWeek > 27 && (
								<div className="flex items-center p-3 bg-muted rounded-lg">
									<CheckCircle className="h-4 w-4 mr-3 text-orange-600" />
									<div className="flex-1">
										<div className="font-medium text-sm">
											Third Trimester Tasks
										</div>
										<div className="text-xs text-muted-foreground">
											Complete nursery, pack hospital bag, finalize birth plan,
											install car seat
										</div>
									</div>
								</div>
							)}

							{/* Specific upcoming dates */}
							{babyPlanningData.babyShowerPlanned &&
								babyPlanningData.babyShowerDate && (
									<div className="flex items-center p-3 border rounded-lg">
										<Calendar className="h-4 w-4 mr-3 text-purple-600" />
										<div className="flex-1">
											<div className="font-medium text-sm">Baby Shower</div>
											<div className="text-xs text-muted-foreground">
												{new Date(
													babyPlanningData.babyShowerDate
												).toLocaleDateString()}
											</div>
										</div>
									</div>
								)}

							{babyPlanningData.nurseryCompletionGoal && (
								<div className="flex items-center p-3 border rounded-lg">
									<Home className="h-4 w-4 mr-3 text-green-600" />
									<div className="flex-1">
										<div className="font-medium text-sm">
											Nursery Completion Goal
										</div>
										<div className="text-xs text-muted-foreground">
											{new Date(
												babyPlanningData.nurseryCompletionGoal
											).toLocaleDateString()}
										</div>
									</div>
								</div>
							)}

							{babyPlanningData.babymoonPlanned &&
								babyPlanningData.babymoonDate && (
									<div className="flex items-center p-3 border rounded-lg">
										<Heart className="h-4 w-4 mr-3 text-pink-600" />
										<div className="flex-1">
											<div className="font-medium text-sm">Babymoon</div>
											<div className="text-xs text-muted-foreground">
												{new Date(
													babyPlanningData.babymoonDate
												).toLocaleDateString()}
											</div>
										</div>
									</div>
								)}
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Quick Actions */}
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center">
						<TrendingUp className="mr-2 h-5 w-5" />
						Quick Actions
					</CardTitle>
					<CardDescription>
						Common tasks to help you stay organized
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
						{quickActions.map((action, index) => {
							const IconComponent = action.icon;
							return (
								<Button
									key={index}
									variant="outline"
									className={`h-auto p-4 justify-start ${action.color}`}
									onClick={() =>
										(window.location.hash = action.href.substring(1))
									}
								>
									<div className="flex items-start space-x-3">
										<IconComponent className="h-5 w-5 mt-0.5" />
										<div className="text-left">
											<div className="font-medium">{action.title}</div>
											<div className="text-xs opacity-80">
												{action.description}
											</div>
										</div>
									</div>
								</Button>
							);
						})}
					</div>
				</CardContent>
			</Card>

			{/* Healthcare Summary */}
			<div className="grid md:grid-cols-2 gap-6">
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center">
							<Stethoscope className="mr-2 h-5 w-5" />
							Healthcare Team
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-3">
						<div>
							<div className="flex justify-between items-center">
								<span className="text-sm font-medium">Primary Doctor</span>
								<span className="text-sm text-muted-foreground">
									{babyPlanningData.doctorName || "Not assigned"}
								</span>
							</div>
						</div>

						<div>
							<div className="flex justify-between items-center">
								<span className="text-sm font-medium">
									Hospital/Birth Center
								</span>
								<span className="text-sm text-muted-foreground">
									{babyPlanningData.hospitalName || "Not selected"}
								</span>
							</div>
						</div>

						<div>
							<div className="flex justify-between items-center">
								<span className="text-sm font-medium">Birth Plan</span>
								<span className="text-sm text-muted-foreground">
									{babyPlanningData.birthPlanType.charAt(0).toUpperCase() +
										babyPlanningData.birthPlanType.slice(1).replace("-", " ")}
								</span>
							</div>
						</div>

						<div className="flex gap-2 pt-2">
							{babyPlanningData.doula && (
								<Badge
									variant="outline"
									className="text-xs"
								>
									Doula
								</Badge>
							)}
							{babyPlanningData.midwife && (
								<Badge
									variant="outline"
									className="text-xs"
								>
									Midwife
								</Badge>
							)}
							{babyPlanningData.parentingClasses && (
								<Badge
									variant="outline"
									className="text-xs"
								>
									Parenting Classes
								</Badge>
							)}
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle className="flex items-center">
							<Home className="mr-2 h-5 w-5" />
							Home Preparation
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-3">
						<div>
							<div className="flex justify-between items-center">
								<span className="text-sm font-medium">Nursery Style</span>
								<span className="text-sm text-muted-foreground">
									{babyPlanningData.nurseryStyle.charAt(0).toUpperCase() +
										babyPlanningData.nurseryStyle.slice(1)}
								</span>
							</div>
						</div>

						<div>
							<div className="flex justify-between items-center">
								<span className="text-sm font-medium">Theme</span>
								<span className="text-sm text-muted-foreground">
									{babyPlanningData.nurseryTheme || "No theme selected"}
								</span>
							</div>
						</div>

						<div>
							<div className="flex justify-between items-center">
								<span className="text-sm font-medium">Preparation Tasks</span>
								<span className="text-sm text-muted-foreground">
									{babyPlanningData.homePreparation.length} items
								</span>
							</div>
						</div>

						<div className="flex gap-2 pt-2">
							{babyPlanningData.babyProofingNeeded && (
								<Badge
									variant="outline"
									className="text-xs"
								>
									Baby-proofing needed
								</Badge>
							)}
						</div>

						{babyPlanningData.homePreparation.length > 0 && (
							<div className="pt-2">
								<div className="text-xs text-muted-foreground mb-2">
									Recent tasks:
								</div>
								<div className="space-y-1">
									{babyPlanningData.homePreparation
										.slice(0, 3)
										.map((task, index) => (
											<div
												key={index}
												className="text-xs p-2 bg-muted rounded flex items-center"
											>
												<CheckCircle className="h-3 w-3 mr-2 text-green-600" />
												{task}
											</div>
										))}
									{babyPlanningData.homePreparation.length > 3 && (
										<div className="text-xs text-muted-foreground">
											+{babyPlanningData.homePreparation.length - 3} more tasks
										</div>
									)}
								</div>
							</div>
						)}
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
