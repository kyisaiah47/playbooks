"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	CalendarIcon,
	Scale,
	ArrowLeft,
	ArrowRight,
	Check,
	User,
	Gavel,
	FileText,
	DollarSign,
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { DivorceCoordinationData } from "@/contexts/divorce-coordination-context";

const step1Schema = z.object({
	clientName: z.string().optional(),
	spouseName: z.string().optional(),
	divorceType: z.string().optional(),
	hasChildren: z.boolean().optional(),
	childrenCount: z.number().optional(),
});

const step2Schema = z.object({
	filingDate: z.date().optional(),
	finalHearingDate: z.date().optional(),
	estimatedBudget: z.number().optional(),
});

const step3Schema = z.object({
	attorneyName: z.string().optional(),
	attorneyPhone: z.string().optional(),
	attorneyEmail: z.string().optional(),
	courtName: z.string().optional(),
	courtAddress: z.string().optional(),
	caseNumber: z.string().optional(),
});

const step4Schema = z.object({
	primaryConcerns: z.array(z.string()).optional(),
	childCustodyArrangement: z.string().optional(),
	assetDivisionNotes: z.string().optional(),
	specialCircumstances: z.string().optional(),
});

const divorceTypes = [
	"No-Fault Divorce",
	"Fault-Based Divorce",
	"Uncontested Divorce",
	"Contested Divorce",
	"Collaborative Divorce",
	"Mediated Divorce",
];

const primaryConcernOptions = [
	"Child Custody",
	"Child Support",
	"Asset Division",
	"Spousal Support",
	"Debt Division",
	"Business Interests",
	"Real Estate",
	"Retirement Accounts",
];

const steps = [
	{
		id: 1,
		title: "Basic Information",
		description: "Tell us about you and your situation",
		icon: User,
		schema: step1Schema,
	},
	{
		id: 2,
		title: "Timeline & Budget",
		description: "Important dates and financial planning",
		icon: DollarSign,
		schema: step2Schema,
	},
	{
		id: 3,
		title: "Legal Team & Court",
		description: "Your attorney and court information",
		icon: Gavel,
		schema: step3Schema,
	},
	{
		id: 4,
		title: "Key Concerns",
		description: "Your priorities and special circumstances",
		icon: FileText,
		schema: step4Schema,
	},
];

interface DivorceCoordinationSetupWizardProps {
	isOpen: boolean;
	onClose: () => void;
	onComplete: (data: DivorceCoordinationData) => void;
}

export function DivorceCoordinationSetupWizard({
	isOpen,
	onClose,
	onComplete,
}: DivorceCoordinationSetupWizardProps) {
	const [currentStep, setCurrentStep] = useState(1);
	const [allFormData, setAllFormData] = useState<Partial<DivorceCoordinationData>>({});

	const currentSchema = steps[currentStep - 1]?.schema || z.object({});

	const form = useForm({
		resolver: zodResolver(currentSchema),
		defaultValues: allFormData,
	});

	const handleNext = async () => {
		const isValid = await form.trigger();
		if (isValid) {
			const currentData = form.getValues();
			const updatedData = { ...allFormData, ...currentData };
			setAllFormData(updatedData);

			if (currentStep < steps.length) {
				setCurrentStep(currentStep + 1);
				form.reset(updatedData);
			} else {
				// Ensure required defaults are set
				const finalData: DivorceCoordinationData = {
					clientName: updatedData.clientName || "",
					spouseName: updatedData.spouseName || "",
					filingDate: updatedData.filingDate,
					finalHearingDate: updatedData.finalHearingDate,
					divorceType: updatedData.divorceType || "",
					hasChildren: updatedData.hasChildren || false,
					childrenCount: updatedData.childrenCount || 0,
					estimatedBudget: updatedData.estimatedBudget || 0,
					attorneyName: updatedData.attorneyName || "",
					attorneyPhone: updatedData.attorneyPhone || "",
					attorneyEmail: updatedData.attorneyEmail || "",
					courtName: updatedData.courtName || "",
					courtAddress: updatedData.courtAddress || "",
					caseNumber: updatedData.caseNumber || "",
					primaryConcerns: updatedData.primaryConcerns || [],
					childCustodyArrangement: updatedData.childCustodyArrangement || "",
					assetDivisionNotes: updatedData.assetDivisionNotes || "",
					specialCircumstances: updatedData.specialCircumstances || "",
				};
				onComplete(finalData);
			}
		}
	};

	const handlePrevious = () => {
		if (currentStep > 1) {
			const currentData = form.getValues();
			setAllFormData({ ...allFormData, ...currentData });
			setCurrentStep(currentStep - 1);
			form.reset({ ...allFormData, ...currentData });
		}
	};

	const renderStep = () => {
		switch (currentStep) {
			case 1:
				return (
					<div className="space-y-6">
						<div className="grid grid-cols-2 gap-4">
							<FormField
								control={form.control}
								name="clientName"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Your Name</FormLabel>
										<FormControl>
											<Input
												placeholder="e.g., Sarah Thompson"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="spouseName"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Spouse Name</FormLabel>
										<FormControl>
											<Input
												placeholder="e.g., Michael Thompson"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<FormField
							control={form.control}
							name="divorceType"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Type of Divorce</FormLabel>
									<Select
										onValueChange={field.onChange}
										value={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select divorce type" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{divorceTypes.map((type) => (
												<SelectItem
													key={type}
													value={type.toLowerCase().replace(/\s+/g, "-")}
												>
													{type}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>

						<div className="grid grid-cols-2 gap-4">
							<FormField
								control={form.control}
								name="hasChildren"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Do you have children together?</FormLabel>
										<Select
											onValueChange={(value) => field.onChange(value === "true")}
											value={field.value?.toString()}
										>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Select" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="true">Yes</SelectItem>
												<SelectItem value="false">No</SelectItem>
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
							{form.watch("hasChildren") && (
								<FormField
									control={form.control}
									name="childrenCount"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Number of Children</FormLabel>
											<FormControl>
												<Input
													type="number"
													placeholder="e.g., 2"
													min="1"
													{...field}
													onChange={(e) =>
														field.onChange(parseInt(e.target.value) || 0)
													}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							)}
						</div>
					</div>
				);

			case 2:
				return (
					<div className="space-y-6">
						<div className="grid grid-cols-2 gap-4">
							<FormField
								control={form.control}
								name="filingDate"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Filing Date</FormLabel>
										<Popover>
											<PopoverTrigger asChild>
												<FormControl>
													<Button
														variant="outline"
														className={cn(
															"justify-start text-left font-normal",
															!field.value && "text-muted-foreground"
														)}
													>
														<CalendarIcon className="mr-2 h-4 w-4" />
														{field.value ? (
															format(field.value, "PPP")
														) : (
															<span>Pick filing date</span>
														)}
													</Button>
												</FormControl>
											</PopoverTrigger>
											<PopoverContent className="w-auto p-0">
												<Calendar
													mode="single"
													selected={field.value}
													onSelect={field.onChange}
													initialFocus
												/>
											</PopoverContent>
										</Popover>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="finalHearingDate"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Final Hearing Date</FormLabel>
										<Popover>
											<PopoverTrigger asChild>
												<FormControl>
													<Button
														variant="outline"
														className={cn(
															"justify-start text-left font-normal",
															!field.value && "text-muted-foreground"
														)}
													>
														<CalendarIcon className="mr-2 h-4 w-4" />
														{field.value ? (
															format(field.value, "PPP")
														) : (
															<span>Pick final hearing date</span>
														)}
													</Button>
												</FormControl>
											</PopoverTrigger>
											<PopoverContent className="w-auto p-0">
												<Calendar
													mode="single"
													selected={field.value}
													onSelect={field.onChange}
													disabled={(date) => date < new Date()}
													initialFocus
												/>
											</PopoverContent>
										</Popover>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<Card>
							<CardHeader>
								<CardTitle className="text-lg flex items-center">
									<DollarSign className="mr-2 h-5 w-5" />
									Estimated Budget
								</CardTitle>
								<CardDescription>
									What&apos;s your estimated budget for legal fees and other divorce-related expenses?
								</CardDescription>
							</CardHeader>
							<CardContent>
								<FormField
									control={form.control}
									name="estimatedBudget"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Budget Amount ($)</FormLabel>
											<FormControl>
												<Input
													type="number"
													placeholder="e.g., 15000"
													min="0"
													{...field}
													onChange={(e) =>
														field.onChange(parseInt(e.target.value) || 0)
													}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</CardContent>
						</Card>
					</div>
				);

			case 3:
				return (
					<div className="space-y-6">
						<Card>
							<CardHeader>
								<CardTitle className="text-lg">Attorney Information</CardTitle>
								<CardDescription>
									Details about your legal representation
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<FormField
									control={form.control}
									name="attorneyName"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Attorney Name</FormLabel>
											<FormControl>
												<Input
													placeholder="e.g., Jennifer Smith, Esq."
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<div className="grid grid-cols-2 gap-4">
									<FormField
										control={form.control}
										name="attorneyPhone"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Phone Number</FormLabel>
												<FormControl>
													<Input
														placeholder="e.g., (555) 123-4567"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="attorneyEmail"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Email</FormLabel>
												<FormControl>
													<Input
														type="email"
														placeholder="e.g., attorney@lawfirm.com"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className="text-lg">Court Information</CardTitle>
								<CardDescription>
									Details about the court handling your case
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<FormField
									control={form.control}
									name="courtName"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Court Name</FormLabel>
											<FormControl>
												<Input
													placeholder="e.g., Superior Court of California"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="courtAddress"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Court Address</FormLabel>
											<FormControl>
												<Textarea
													placeholder="Full court address including city, state, zip"
													rows={3}
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="caseNumber"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Case Number</FormLabel>
											<FormControl>
												<Input
													placeholder="e.g., FL-2024-001234"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</CardContent>
						</Card>
					</div>
				);

			case 4:
				return (
					<div className="space-y-6">
						<FormField
							control={form.control}
							name="primaryConcerns"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Primary Concerns</FormLabel>
									<div className="grid grid-cols-2 gap-2">
										{primaryConcernOptions.map((concern) => (
											<label
												key={concern}
												className="flex items-center space-x-2 cursor-pointer"
											>
												<input
													type="checkbox"
													checked={(field.value || []).includes(concern)}
													onChange={(e) => {
														const currentConcerns = field.value || [];
														if (e.target.checked) {
															field.onChange([...currentConcerns, concern]);
														} else {
															field.onChange(
																currentConcerns.filter((c) => c !== concern)
															);
														}
													}}
													className="rounded border-gray-300"
												/>
												<span className="text-sm">{concern}</span>
											</label>
										))}
									</div>
									<FormMessage />
								</FormItem>
							)}
						/>

						{form.watch("primaryConcerns")?.includes("Child Custody") && (
							<FormField
								control={form.control}
								name="childCustodyArrangement"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Preferred Custody Arrangement</FormLabel>
										<FormControl>
											<Textarea
												placeholder="Describe your preferred custody arrangement..."
												rows={3}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						)}

						<FormField
							control={form.control}
							name="assetDivisionNotes"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Asset Division Notes</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Any specific notes about asset division..."
											rows={3}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="specialCircumstances"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Special Circumstances</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Any special circumstances or additional information..."
											rows={4}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Card className="bg-primary/5 border-primary/20">
							<CardHeader>
								<CardTitle className="text-lg flex items-center">
									<Check className="mr-2 h-5 w-5 text-primary" />
									Ready to Begin!
								</CardTitle>
								<CardDescription>
									You&apos;re all set to start coordinating your divorce process.
								</CardDescription>
							</CardHeader>
						</Card>
					</div>
				);

			default:
				return null;
		}
	};

	const progress = (currentStep / steps.length) * 100;

	return (
		<Dialog
			open={isOpen}
			onOpenChange={(open) => {
				if (!open) {
					onClose()
				}
			}}
		>
			<DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle className="flex items-center text-2xl">
						<Scale className="mr-2 h-6 w-6 text-primary" />
						Divorce Coordination Setup
					</DialogTitle>
					<DialogDescription>
						Let&apos;s gather some basic information to help coordinate your divorce process effectively
					</DialogDescription>
				</DialogHeader>

				<Form {...form}>
					<form
						onSubmit={form.handleSubmit((data) => handleNext())}
						className="space-y-6"
					>
						<div className="space-y-2">
							<div className="flex items-center justify-between text-sm">
								<span>
									Step {currentStep} of {steps.length}
								</span>
								<span>{Math.round(progress)}% complete</span>
							</div>
							<Progress value={progress} />
						</div>

						<div className="grid grid-cols-4 gap-2">
							{steps.map((step) => {
								const Icon = step.icon;
								const isActive = currentStep === step.id;
								const isCompleted = currentStep > step.id;

								return (
									<div
										key={step.id}
										className={cn(
											"p-3 rounded-lg border text-center transition-colors",
											isActive && "border-primary bg-primary/5",
											isCompleted && "border-primary bg-primary/10",
											!isActive && !isCompleted && "border-border bg-muted/30"
										)}
									>
										<Icon
											className={cn(
												"h-5 w-5 mx-auto mb-2",
												isActive && "text-primary",
												isCompleted && "text-primary",
												!isActive && !isCompleted && "text-muted-foreground"
											)}
										/>
										<p className="text-xs font-medium">{step.title}</p>
									</div>
								);
							})}
						</div>

						<Separator />

						<div className="min-h-96">
							<div className="mb-4">
								<h3 className="text-xl font-semibold">
									{steps[currentStep - 1]?.title}
								</h3>
								<p className="text-muted-foreground">
									{steps[currentStep - 1]?.description}
								</p>
							</div>
							{renderStep()}
						</div>

						<DialogFooter className="flex justify-between">
							<Button
								type="button"
								variant="outline"
								onClick={handlePrevious}
								disabled={currentStep === 1}
							>
								<ArrowLeft className="mr-2 h-4 w-4" />
								Previous
							</Button>
							<Button type="submit">
								{currentStep === steps.length ? (
									<>
										<Check className="mr-2 h-4 w-4" />
										Complete Setup
									</>
								) : (
									<>
										Next
										<ArrowRight className="ml-2 h-4 w-4" />
									</>
								)}
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}