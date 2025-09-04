"use client";

import { useState } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
	useHomeBuying,
	getHomeBuyingDisplayData,
} from "@/contexts/home-buying-context";
import {
	Home,
	Search,
	Calculator,
	Users,
	CheckSquare,
	DollarSign,
	Calendar,
	MapPin,
	Clock,
	TrendingUp,
	AlertCircle,
	ArrowUpRight,
	Plus,
	FileText,
	Truck,
} from "lucide-react";

export function HomeBuyingOverview() {
	const { homeBuyingData } = useHomeBuying();
	const displayData = getHomeBuyingDisplayData(homeBuyingData);

	// Mock data for demonstration - in a real app, this would come from the context or database
	const [stats] = useState({
		savedProperties: 8,
		viewedProperties: 15,
		offersSubmitted: 2,
		underContract: 0,
		avgPriceViewed: 475000,
		daysSearching: 45,
	});

	const [recentActivities] = useState([
		{
			id: 1,
			type: "property",
			address: "123 Oak Street",
			price: 495000,
			date: "2 hours ago",
			status: "viewed",
		},
		{
			id: 2,
			type: "offer",
			address: "456 Maple Ave",
			price: 525000,
			date: "Yesterday",
			status: "submitted",
		},
		{
			id: 3,
			type: "agent",
			contact: "Sarah Johnson",
			company: "Premier Realty",
			date: "2 days ago",
			status: "meeting",
		},
		{
			id: 4,
			type: "mortgage",
			lender: "First National Bank",
			rate: 6.75,
			date: "3 days ago",
			status: "pre-approved",
		},
	]);

	const searchProgress = Math.min(
		(stats.daysSearching /
			(displayData.daysUntilTarget + stats.daysSearching)) *
			100,
		100
	);
	const budgetUtilization =
		(stats.avgPriceViewed / homeBuyingData.maxBudget) * 100;

	return (
		<div className="space-y-6">
			{/* Header */}
			<div className="space-y-2">
				<h1 className="text-3xl font-bold flex items-center">
					<Home className="mr-2 h-8 w-8" />
					Home Buying Dashboard
				</h1>
				<p className="text-muted-foreground">
					Track your progress towards finding your dream home in{" "}
					{displayData.targetLocation}
				</p>
			</div>

			{/* Quick Stats Cards */}
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">
							Saved Properties
						</CardTitle>
						<Search className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{stats.savedProperties}</div>
						<div className="text-xs text-muted-foreground">
							{stats.viewedProperties} viewed total
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">
							Offers Submitted
						</CardTitle>
						<FileText className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{stats.offersSubmitted}</div>
						<p className="text-xs text-muted-foreground">
							{stats.underContract} under contract
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">
							Avg Price Viewed
						</CardTitle>
						<TrendingUp className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">
							{homeBuyingData.currency} {stats.avgPriceViewed.toLocaleString()}
						</div>
						<p className="text-xs text-muted-foreground">
							{budgetUtilization.toFixed(0)}% of max budget
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">
							Days Searching
						</CardTitle>
						<Calendar className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{stats.daysSearching}</div>
						<p className="text-xs text-muted-foreground">
							{displayData.daysUntilTarget} days until target
						</p>
					</CardContent>
				</Card>
			</div>

			<div className="grid gap-6 lg:grid-cols-2">
				{/* Search Progress */}
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center">
							<Clock className="mr-2 h-5 w-5" />
							Search Progress
						</CardTitle>
						<CardDescription>Your home buying journey timeline</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="flex items-center justify-between">
							<div className="space-y-1">
								<p className="text-sm font-medium">Target Move-in Date</p>
								<p className="text-sm text-muted-foreground">
									{displayData.targetMoveInDate.toLocaleDateString()}
								</p>
							</div>
							<Badge variant="outline">
								{displayData.daysUntilTarget} days left
							</Badge>
						</div>

						<div className="space-y-2">
							<div className="flex justify-between text-sm">
								<span>Timeline Progress</span>
								<span>{searchProgress.toFixed(0)}%</span>
							</div>
							<Progress value={searchProgress} />
						</div>

						<div className="grid grid-cols-2 gap-4 text-sm">
							<div>
								<p className="font-medium">Property Type</p>
								<p className="text-muted-foreground">
									{displayData.propertyType}
								</p>
							</div>
							<div>
								<p className="font-medium">Bedrooms/Baths</p>
								<p className="text-muted-foreground">
									{displayData.bedBathDisplay}
								</p>
							</div>
							<div>
								<p className="font-medium">Square Footage</p>
								<p className="text-muted-foreground">
									{displayData.squareFeetRange}
								</p>
							</div>
							<div>
								<p className="font-medium">Buyer Type</p>
								<p className="text-muted-foreground">
									{displayData.firstTimeBuyer}
								</p>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Financial Summary */}
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center">
							<DollarSign className="mr-2 h-5 w-5" />
							Financial Summary
						</CardTitle>
						<CardDescription>
							Your budget and mortgage information
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="space-y-3">
							<div className="flex items-center justify-between">
								<div className="flex items-center space-x-2">
									<MapPin className="h-4 w-4 text-muted-foreground" />
									<span className="text-sm">Budget Range</span>
								</div>
								<span className="text-sm text-muted-foreground">
									{displayData.budgetRange}
								</span>
							</div>

							<div className="flex items-center justify-between">
								<div className="flex items-center space-x-2">
									<Calculator className="h-4 w-4 text-muted-foreground" />
									<span className="text-sm">Monthly Payment</span>
								</div>
								<span className="text-sm text-muted-foreground">
									~{homeBuyingData.currency}{" "}
									{displayData.monthlyPayment.toLocaleString()}
								</span>
							</div>

							<div className="flex items-center justify-between">
								<div className="flex items-center space-x-2">
									<DollarSign className="h-4 w-4 text-muted-foreground" />
									<span className="text-sm">Down Payment</span>
								</div>
								<span className="text-sm text-muted-foreground">
									{displayData.downPaymentDisplay}
								</span>
							</div>

							<div className="flex items-center justify-between">
								<div className="flex items-center space-x-2">
									<TrendingUp className="h-4 w-4 text-muted-foreground" />
									<span className="text-sm">Affordability Ratio</span>
								</div>
								<Badge
									variant={
										displayData.affordabilityRatio > 28
											? "destructive"
											: "secondary"
									}
								>
									{displayData.affordabilityRatio}%
								</Badge>
							</div>
						</div>

						<div className="pt-2">
							<Button
								variant="outline"
								size="sm"
								className="w-full"
							>
								<Calculator className="mr-2 h-4 w-4" />
								Run Mortgage Calculator
							</Button>
						</div>
					</CardContent>
				</Card>

				{/* Recent Activity */}
				<Card className="lg:col-span-2">
					<CardHeader>
						<CardTitle className="flex items-center justify-between">
							<span className="flex items-center">
								<Calendar className="mr-2 h-5 w-5" />
								Recent Activity
							</span>
							<Button
								variant="outline"
								size="sm"
							>
								<Plus className="mr-2 h-4 w-4" />
								Add Activity
							</Button>
						</CardTitle>
						<CardDescription>
							Your latest home buying activities and updates
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							{recentActivities.map((activity) => {
								const getActivityIcon = () => {
									switch (activity.type) {
										case "property":
											return <Home className="h-4 w-4" />;
										case "offer":
											return <FileText className="h-4 w-4" />;
										case "agent":
											return <Users className="h-4 w-4" />;
										case "mortgage":
											return <Calculator className="h-4 w-4 text-green-600" />;
										default:
											return <AlertCircle className="h-4 w-4" />;
									}
								};

								const getStatusColor = () => {
									switch (activity.status) {
										case "viewed":
											return "bg-blue-100 text-blue-800 border-blue-200";
										case "submitted":
											return "bg-yellow-100 text-yellow-800 border-yellow-200";
										case "meeting":
											return "bg-purple-100 text-purple-800 border-purple-200";
										case "pre-approved":
											return "bg-green-100 text-green-800 border-green-200";
										default:
											return "bg-gray-100 text-gray-800 border-gray-200";
									}
								};

								const getActivityDescription = () => {
									switch (activity.type) {
										case "property":
											return `${activity.address} • ${
												homeBuyingData.currency
											} ${activity.price?.toLocaleString() || "TBD"}`;
										case "offer":
											return `${activity.address} • ${
												homeBuyingData.currency
											} ${activity.price?.toLocaleString() || "TBD"}`;
										case "agent":
											return `${activity.contact} at ${activity.company}`;
										case "mortgage":
											return `${activity.lender} • ${activity.rate}% rate`;
										default:
											return "";
									}
								};

								return (
									<div
										key={activity.id}
										className="flex items-center justify-between p-3 rounded-lg border"
									>
										<div className="flex items-center space-x-3">
											<div className="flex-shrink-0">{getActivityIcon()}</div>
											<div className="min-w-0 flex-1">
												<p className="text-sm font-medium">
													{getActivityDescription()}
												</p>
												<p className="text-xs text-muted-foreground">
													{activity.date}
												</p>
											</div>
										</div>
										<Badge
											variant="outline"
											className={getStatusColor()}
										>
											{activity.status}
										</Badge>
									</div>
								);
							})}
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Quick Actions */}
			<Card>
				<CardHeader>
					<CardTitle>Quick Actions</CardTitle>
					<CardDescription>
						Common tasks to keep your home search moving forward
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
						<Button
							variant="outline"
							className="h-auto p-4 flex flex-col items-start"
						>
							<Search className="h-5 w-5 mb-2" />
							<span className="font-medium">Search Properties</span>
							<span className="text-xs text-muted-foreground">
								Find new homes in your area
							</span>
						</Button>
						<Button
							variant="outline"
							className="h-auto p-4 flex flex-col items-start"
						>
							<Calendar className="h-5 w-5 mb-2" />
							<span className="font-medium">Schedule Viewing</span>
							<span className="text-xs text-muted-foreground">
								Book property tours
							</span>
						</Button>
						<Button
							variant="outline"
							className="h-auto p-4 flex flex-col items-start"
						>
							<Calculator className="h-5 w-5 mb-2" />
							<span className="font-medium">Calculate Mortgage</span>
							<span className="text-xs text-muted-foreground">
								Estimate monthly payments
							</span>
						</Button>
						<Button
							variant="outline"
							className="h-auto p-4 flex flex-col items-start"
						>
							<Users className="h-5 w-5 mb-2" />
							<span className="font-medium">Contact Agent</span>
							<span className="text-xs text-muted-foreground">
								Get professional help
							</span>
						</Button>
					</div>
				</CardContent>
			</Card>

			{/* Next Steps */}
			<Card>
				<CardHeader>
					<CardTitle>Recommended Next Steps</CardTitle>
					<CardDescription>
						Based on your current progress, here&apos;s what you should focus on
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="space-y-3">
						{homeBuyingData.preApprovalAmount === 0 && (
							<div className="flex items-center justify-between p-3 rounded-lg bg-yellow-50 border border-yellow-200">
								<div className="flex items-center space-x-3">
									<AlertCircle className="h-5 w-5 text-yellow-600" />
									<div>
										<p className="text-sm font-medium">Get Pre-Approved</p>
										<p className="text-xs text-muted-foreground">
											Strengthen your offers with mortgage pre-approval
										</p>
									</div>
								</div>
								<Button
									size="sm"
									variant="outline"
								>
									<ArrowUpRight className="mr-2 h-4 w-4" />
									Start
								</Button>
							</div>
						)}

						{stats.viewedProperties < 5 && (
							<div className="flex items-center justify-between p-3 rounded-lg bg-blue-50 border border-blue-200">
								<div className="flex items-center space-x-3">
									<Search className="h-5 w-5 text-blue-600" />
									<div>
										<p className="text-sm font-medium">
											Explore More Properties
										</p>
										<p className="text-xs text-muted-foreground">
											View more homes to better understand the market
										</p>
									</div>
								</div>
								<Button
									size="sm"
									variant="outline"
								>
									<ArrowUpRight className="mr-2 h-4 w-4" />
									Search
								</Button>
							</div>
						)}

						{!homeBuyingData.realEstateAgent.name && (
							<div className="flex items-center justify-between p-3 rounded-lg bg-green-50 border border-green-200">
								<div className="flex items-center space-x-3">
									<Users className="h-5 w-5 text-green-600" />
									<div>
										<p className="text-sm font-medium">
											Find a Real Estate Agent
										</p>
										<p className="text-xs text-muted-foreground">
											Get professional guidance for your home search
										</p>
									</div>
								</div>
								<Button
									size="sm"
									variant="outline"
								>
									<ArrowUpRight className="mr-2 h-4 w-4" />
									Find Agent
								</Button>
							</div>
						)}

						{displayData.daysUntilTarget < 30 && (
							<div className="flex items-center justify-between p-3 rounded-lg bg-red-50 border border-red-200">
								<div className="flex items-center space-x-3">
									<Truck className="h-5 w-5 text-red-600" />
									<div>
										<p className="text-sm font-medium">Plan Your Move</p>
										<p className="text-xs text-muted-foreground">
											Your target date is approaching - time to plan logistics
										</p>
									</div>
								</div>
								<Button
									size="sm"
									variant="outline"
								>
									<ArrowUpRight className="mr-2 h-4 w-4" />
									Plan Move
								</Button>
							</div>
						)}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
