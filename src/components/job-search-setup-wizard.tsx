"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { JobSearchData } from "@/contexts/job-search-context";
import {
	Briefcase,
	ArrowLeft,
	ArrowRight,
	Check,
	MapPin,
	DollarSign,
	Target,
	User,
} from "lucide-react";

interface JobSearchSetupWizardProps {
	isOpen: boolean;
	onClose: () => void;
	onComplete: (data: JobSearchData) => void;
	initialData?: JobSearchData;
}

const formSchema = z.object({
	targetRole: z.string().min(1, "Target role is required"),
	industry: z.string().min(1, "Industry is required"),
	experienceLevel: z.enum([
		"entry-level",
		"mid-level",
		"senior-level",
		"executive",
	]),
	locations: z.array(z.string()),
	workType: z.enum(["remote", "hybrid", "on-site", "flexible"]),
	companySizePreference: z.enum(["startup", "small", "medium", "large", "any"]),
	coreSkills: z.array(z.string()),
	certifications: z.array(z.string()),
	education: z.string().min(1, "Education is required"),
	salaryMin: z.number().min(0, "Minimum salary must be positive"),
	salaryMax: z.number().min(0, "Maximum salary must be positive"),
	currency: z.string(),
	benefitsPriorities: z.array(z.string()),
	searchTimeline: z.enum([
		"1-month",
		"3-months",
		"6-months",
		"12-months",
		"no-rush",
	]),
	weeklyApplicationTarget: z
		.number()
		.min(1, "Weekly target must be at least 1"),
	currentEmploymentStatus: z.enum([
		"employed",
		"unemployed",
		"student",
		"career-change",
	]),
	linkedinUrl: z.string().optional(),
	portfolioUrl: z.string().optional(),
	githubUrl: z.string().optional(),
	personalStatement: z
		.string()
		.min(10, "Personal statement should be at least 10 characters"),
});

const benefitsOptions = [
	"Health Insurance",
	"401k/Retirement",
	"Flexible Hours",
	"Remote Work",
	"Professional Development",
	"Stock Options",
	"Paid Time Off",
	"Parental Leave",
	"Dental/Vision",
	"Gym Membership",
	"Mental Health Support",
	"Life Insurance",
];

export function JobSearchSetupWizard({
	isOpen,
	onClose,
	onComplete,
	initialData,
}: JobSearchSetupWizardProps) {
	const [currentStep, setCurrentStep] = useState(1);
	const [coreSkills, setCoreSkills] = useState<string[]>(
		initialData?.coreSkills || []
	);
	const [certifications, setCertifications] = useState<string[]>(
		initialData?.certifications || []
	);
	const [locations, setLocations] = useState<string[]>(
		initialData?.locations || []
	);
	const totalSteps = 7;

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			targetRole: initialData?.targetRole || "",
			industry: initialData?.industry || "",
			experienceLevel: initialData?.experienceLevel || "mid-level",
			locations: initialData?.locations || [],
			workType: initialData?.workType || "hybrid",
			companySizePreference: initialData?.companySizePreference || "any",
			coreSkills: initialData?.coreSkills || [],
			certifications: initialData?.certifications || [],
			education: initialData?.education || "",
			salaryMin: initialData?.salaryMin || 50000,
			salaryMax: initialData?.salaryMax || 100000,
			currency: initialData?.currency || "USD",
			benefitsPriorities: initialData?.benefitsPriorities || [],
			searchTimeline: initialData?.searchTimeline || "3-months",
			weeklyApplicationTarget: initialData?.weeklyApplicationTarget || 5,
			currentEmploymentStatus:
				initialData?.currentEmploymentStatus || "employed",
			linkedinUrl: initialData?.linkedinUrl || "",
			portfolioUrl: initialData?.portfolioUrl || "",
			githubUrl: initialData?.githubUrl || "",
			personalStatement: initialData?.personalStatement || "",
		},
	});

	// Reset form when dialog opens with new data
	React.useEffect(() => {
		if (isOpen && initialData) {
			setCoreSkills(initialData.coreSkills || []);
			setCertifications(initialData.certifications || []);
			setLocations(initialData.locations || []);
			setCurrentStep(1);
			form.reset({
				targetRole: initialData.targetRole || "",
				industry: initialData.industry || "",
				experienceLevel: initialData.experienceLevel || "mid-level",
				locations: initialData.locations || [],
				workType: initialData.workType || "hybrid",
				companySizePreference: initialData.companySizePreference || "any",
				coreSkills: initialData.coreSkills || [],
				certifications: initialData.certifications || [],
				education: initialData.education || "",
				salaryMin: initialData.salaryMin || 50000,
				salaryMax: initialData.salaryMax || 100000,
				currency: initialData.currency || "USD",
				benefitsPriorities: initialData.benefitsPriorities || [],
				searchTimeline: initialData.searchTimeline || "3-months",
				weeklyApplicationTarget: initialData.weeklyApplicationTarget || 5,
				currentEmploymentStatus:
					initialData.currentEmploymentStatus || "employed",
				linkedinUrl: initialData.linkedinUrl || "",
				portfolioUrl: initialData.portfolioUrl || "",
				githubUrl: initialData.githubUrl || "",
				personalStatement: initialData.personalStatement || "",
			});
		}
	}, [isOpen, initialData, form]);

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		const data: JobSearchData = {
			...values,
			coreSkills,
			certifications,
			locations,
		};
		onComplete(data);
	};

	const nextStep = () => {
		if (currentStep < totalSteps) {
			setCurrentStep(currentStep + 1);
		}
	};

	const prevStep = () => {
		if (currentStep > 1) {
			setCurrentStep(currentStep - 1);
		}
	};

	const addSkill = (skill: string) => {
		if (skill.trim() && !coreSkills.includes(skill.trim())) {
			setCoreSkills([...coreSkills, skill.trim()]);
		}
	};

	const removeSkill = (skill: string) => {
		setCoreSkills(coreSkills.filter((s) => s !== skill));
	};

	const addCertification = (cert: string) => {
		if (cert.trim() && !certifications.includes(cert.trim())) {
			setCertifications([...certifications, cert.trim()]);
		}
	};

	const removeCertification = (cert: string) => {
		setCertifications(certifications.filter((c) => c !== cert));
	};

	const addLocation = (location: string) => {
		if (location.trim() && !locations.includes(location.trim())) {
			setLocations([...locations, location.trim()]);
		}
	};

	const removeLocation = (location: string) => {
		setLocations(locations.filter((l) => l !== location));
	};

	const renderStep = () => {
		switch (currentStep) {
			case 1:
				return (
					<div className="space-y-4">
						<div className="text-center mb-6">
							<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
								<User className="h-6 w-6 text-primary" />
							</div>
							<h3 className="text-lg font-semibold">Basic Information</h3>
							<p className="text-sm text-muted-foreground">
								Tell us about your career goals and current situation
							</p>
						</div>

						<FormField
							control={form.control}
							name="targetRole"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Target Role/Job Title</FormLabel>
									<FormControl>
										<Input
											placeholder="e.g., Senior Software Engineer, Marketing Manager"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="industry"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Industry</FormLabel>
									<FormControl>
										<Input
											placeholder="e.g., Technology, Healthcare, Finance"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="experienceLevel"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Experience Level</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select your experience level" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value="entry-level">
												Entry Level (0-2 years)
											</SelectItem>
											<SelectItem value="mid-level">
												Mid Level (3-5 years)
											</SelectItem>
											<SelectItem value="senior-level">
												Senior Level (6-10 years)
											</SelectItem>
											<SelectItem value="executive">
												Executive (10+ years)
											</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="currentEmploymentStatus"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Current Employment Status</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select your current status" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value="employed">
												Currently Employed
											</SelectItem>
											<SelectItem value="unemployed">Unemployed</SelectItem>
											<SelectItem value="student">Student</SelectItem>
											<SelectItem value="career-change">
												Career Change
											</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				);

			case 2:
				return (
					<div className="space-y-4">
						<div className="text-center mb-6">
							<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
								<MapPin className="h-6 w-6 text-primary" />
							</div>
							<h3 className="text-lg font-semibold">
								Location & Work Preferences
							</h3>
							<p className="text-sm text-muted-foreground">
								Where and how do you want to work?
							</p>
						</div>

						<div>
							<FormLabel>Preferred Locations</FormLabel>
							<FormDescription className="mb-3">
								Add cities or regions where you&apos;d like to work
							</FormDescription>
							<div className="flex flex-wrap gap-2 mb-2">
								{locations.map((location, index) => (
									<div
										key={index}
										className="flex items-center bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm"
									>
										{location}
										<button
											type="button"
											onClick={() => removeLocation(location)}
											className="ml-2 text-muted-foreground hover:text-foreground"
										>
											×
										</button>
									</div>
								))}
							</div>
							<div className="flex gap-2">
								<Input
									placeholder="Add a location"
									onKeyPress={(e) => {
										if (e.key === "Enter") {
											e.preventDefault();
											addLocation(e.currentTarget.value);
											e.currentTarget.value = "";
										}
									}}
								/>
								<Button
									type="button"
									variant="outline"
									onClick={(e) => {
										const input = e.currentTarget
											.previousElementSibling as HTMLInputElement;
										addLocation(input.value);
										input.value = "";
									}}
								>
									Add
								</Button>
							</div>
						</div>

						<FormField
							control={form.control}
							name="workType"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Work Type Preference</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select work type" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value="remote">Remote</SelectItem>
											<SelectItem value="hybrid">Hybrid</SelectItem>
											<SelectItem value="on-site">On-site</SelectItem>
											<SelectItem value="flexible">Flexible</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="companySizePreference"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Company Size Preference</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select company size" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value="startup">
												Startup (1-50 employees)
											</SelectItem>
											<SelectItem value="small">
												Small (51-200 employees)
											</SelectItem>
											<SelectItem value="medium">
												Medium (201-1000 employees)
											</SelectItem>
											<SelectItem value="large">
												Large (1000+ employees)
											</SelectItem>
											<SelectItem value="any">Any size</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				);

			case 3:
				return (
					<div className="space-y-4">
						<div className="text-center mb-6">
							<h3 className="text-lg font-semibold">Skills & Qualifications</h3>
							<p className="text-sm text-muted-foreground">
								Highlight your key skills and educational background
							</p>
						</div>

						<div>
							<FormLabel>Core Skills</FormLabel>
							<FormDescription className="mb-3">
								Add your most relevant technical and soft skills
							</FormDescription>
							<div className="flex flex-wrap gap-2 mb-2">
								{coreSkills.map((skill, index) => (
									<div
										key={index}
										className="flex items-center bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm"
									>
										{skill}
										<button
											type="button"
											onClick={() => removeSkill(skill)}
											className="ml-2 text-muted-foreground hover:text-foreground"
										>
											×
										</button>
									</div>
								))}
							</div>
							<div className="flex gap-2">
								<Input
									placeholder="Add a skill"
									onKeyPress={(e) => {
										if (e.key === "Enter") {
											e.preventDefault();
											addSkill(e.currentTarget.value);
											e.currentTarget.value = "";
										}
									}}
								/>
								<Button
									type="button"
									variant="outline"
									onClick={(e) => {
										const input = e.currentTarget
											.previousElementSibling as HTMLInputElement;
										addSkill(input.value);
										input.value = "";
									}}
								>
									Add
								</Button>
							</div>
						</div>

						<div>
							<FormLabel>Certifications (Optional)</FormLabel>
							<FormDescription className="mb-3">
								Add relevant professional certifications
							</FormDescription>
							<div className="flex flex-wrap gap-2 mb-2">
								{certifications.map((cert, index) => (
									<div
										key={index}
										className="flex items-center bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm"
									>
										{cert}
										<button
											type="button"
											onClick={() => removeCertification(cert)}
											className="ml-2 text-muted-foreground hover:text-foreground"
										>
											×
										</button>
									</div>
								))}
							</div>
							<div className="flex gap-2">
								<Input
									placeholder="Add a certification"
									onKeyPress={(e) => {
										if (e.key === "Enter") {
											e.preventDefault();
											addCertification(e.currentTarget.value);
											e.currentTarget.value = "";
										}
									}}
								/>
								<Button
									type="button"
									variant="outline"
									onClick={(e) => {
										const input = e.currentTarget
											.previousElementSibling as HTMLInputElement;
										addCertification(input.value);
										input.value = "";
									}}
								>
									Add
								</Button>
							</div>
						</div>

						<FormField
							control={form.control}
							name="education"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Education</FormLabel>
									<FormControl>
										<Input
											placeholder="e.g., Bachelor's in Computer Science, MBA"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				);

			case 4:
				return (
					<div className="space-y-4">
						<div className="text-center mb-6">
							<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
								<DollarSign className="h-6 w-6 text-primary" />
							</div>
							<h3 className="text-lg font-semibold">Salary & Benefits</h3>
							<p className="text-sm text-muted-foreground">
								Define your compensation expectations
							</p>
						</div>

						<div className="grid grid-cols-2 gap-4">
							<FormField
								control={form.control}
								name="salaryMin"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Minimum Salary</FormLabel>
										<FormControl>
											<Input
												type="number"
												placeholder="50000"
												{...field}
												onChange={(e) =>
													field.onChange(parseInt(e.target.value))
												}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="salaryMax"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Maximum Salary</FormLabel>
										<FormControl>
											<Input
												type="number"
												placeholder="100000"
												{...field}
												onChange={(e) =>
													field.onChange(parseInt(e.target.value))
												}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<FormField
							control={form.control}
							name="currency"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Currency</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select currency" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value="USD">USD</SelectItem>
											<SelectItem value="EUR">EUR</SelectItem>
											<SelectItem value="GBP">GBP</SelectItem>
											<SelectItem value="CAD">CAD</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="benefitsPriorities"
							render={() => (
								<FormItem>
									<FormLabel>
										Important Benefits (Select your priorities)
									</FormLabel>
									<div className="grid grid-cols-2 gap-2 mt-2">
										{benefitsOptions.map((benefit) => (
											<FormField
												key={benefit}
												control={form.control}
												name="benefitsPriorities"
												render={({ field }) => {
													return (
														<FormItem
															key={benefit}
															className="flex flex-row items-start space-x-3 space-y-0"
														>
															<FormControl>
																<Checkbox
																	checked={field.value?.includes(benefit)}
																	onCheckedChange={(checked) => {
																		return checked
																			? field.onChange([
																					...field.value,
																					benefit,
																			  ])
																			: field.onChange(
																					field.value?.filter(
																						(value) => value !== benefit
																					)
																			  );
																	}}
																/>
															</FormControl>
															<FormLabel className="text-sm font-normal">
																{benefit}
															</FormLabel>
														</FormItem>
													);
												}}
											/>
										))}
									</div>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				);

			case 5:
				return (
					<div className="space-y-4">
						<div className="text-center mb-6">
							<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
								<Target className="h-6 w-6 text-primary" />
							</div>
							<h3 className="text-lg font-semibold">Search Goals & Timeline</h3>
							<p className="text-sm text-muted-foreground">
								Set your job search targets and timeline
							</p>
						</div>

						<FormField
							control={form.control}
							name="searchTimeline"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Search Timeline</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="How long do you want to search?" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value="1-month">1 month (urgent)</SelectItem>
											<SelectItem value="3-months">
												3 months (typical)
											</SelectItem>
											<SelectItem value="6-months">
												6 months (flexible)
											</SelectItem>
											<SelectItem value="12-months">
												12 months (long-term)
											</SelectItem>
											<SelectItem value="no-rush">No rush (passive)</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="weeklyApplicationTarget"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Weekly Application Target</FormLabel>
									<FormControl>
										<Input
											type="number"
											min="1"
											max="50"
											placeholder="5"
											{...field}
											onChange={(e) => field.onChange(parseInt(e.target.value))}
										/>
									</FormControl>
									<FormDescription>
										How many applications do you want to submit per week?
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				);

			case 6:
				return (
					<div className="space-y-4">
						<div className="text-center mb-6">
							<h3 className="text-lg font-semibold">Online Presence</h3>
							<p className="text-sm text-muted-foreground">
								Share your professional profiles (optional)
							</p>
						</div>

						<FormField
							control={form.control}
							name="linkedinUrl"
							render={({ field }) => (
								<FormItem>
									<FormLabel>LinkedIn Profile (Optional)</FormLabel>
									<FormControl>
										<Input
											placeholder="https://linkedin.com/in/yourprofile"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="portfolioUrl"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Portfolio Website (Optional)</FormLabel>
									<FormControl>
										<Input
											placeholder="https://yourportfolio.com"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="githubUrl"
							render={({ field }) => (
								<FormItem>
									<FormLabel>GitHub Profile (Optional)</FormLabel>
									<FormControl>
										<Input
											placeholder="https://github.com/yourusername"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				);

			case 7:
				return (
					<div className="space-y-4">
						<div className="text-center mb-6">
							<h3 className="text-lg font-semibold">Personal Statement</h3>
							<p className="text-sm text-muted-foreground">
								Write a brief summary of your career goals and value proposition
							</p>
						</div>

						<FormField
							control={form.control}
							name="personalStatement"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Personal Statement</FormLabel>
									<FormControl>
										<Textarea
											placeholder="I am a passionate [your role] with [X] years of experience in [industry/field]. I excel at [key strengths] and am seeking opportunities to [career goals]..."
											className="min-h-[120px]"
											{...field}
										/>
									</FormControl>
									<FormDescription>
										This will be used in your job search materials and tracking
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				);

			default:
				return null;
		}
	};

	return (
		<Dialog
			open={isOpen}
			onOpenChange={onClose}
		>
			<DialogContent className="sm:max-w-[525px] max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>Job Search Setup</DialogTitle>
					<DialogDescription>
						Let&apos;s set up your personalized job search workspace
					</DialogDescription>
				</DialogHeader>

				<div className="mb-4">
					<div className="flex justify-between text-sm text-muted-foreground mb-2">
						<span>
							Step {currentStep} of {totalSteps}
						</span>
						<span>
							{Math.round((currentStep / totalSteps) * 100)}% complete
						</span>
					</div>
					<Progress
						value={(currentStep / totalSteps) * 100}
						className="h-2"
					/>
				</div>

				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-4"
					>
						{renderStep()}

						<div className="flex justify-between pt-4">
							<Button
								type="button"
								variant="outline"
								onClick={prevStep}
								disabled={currentStep === 1}
							>
								<ArrowLeft className="mr-2 h-4 w-4" />
								Previous
							</Button>

							{currentStep === totalSteps ? (
								<Button
									type="submit"
									className="ml-auto"
								>
									<Check className="mr-2 h-4 w-4" />
									Complete Setup
								</Button>
							) : (
								<Button
									type="button"
									onClick={nextStep}
									className="ml-auto"
								>
									Next
									<ArrowRight className="ml-2 h-4 w-4" />
								</Button>
							)}
						</div>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
