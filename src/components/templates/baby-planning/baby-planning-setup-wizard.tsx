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
	Baby,
	ArrowLeft,
	ArrowRight,
	Check,
	Stethoscope,
	DollarSign,
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { BabyPlanningData } from "@/contexts/baby-planning-context";

const step1Schema = z.object({
	parentName1: z.string().optional(),
	parentName2: z.string().optional(),
	babyName: z.string().optional(),
	dueDate: z.date().optional(),
	babyGender: z.string().optional(),
	babyShowerDate: z.date().optional(),
});

const step2Schema = z.object({
	hospital: z.string().optional(),
	doctor: z.string().optional(),
	birthPlan: z.string().optional(),
	specialNeeds: z.string().optional(),
});

const step3Schema = z.object({
	totalBudget: z.number().optional(),
	nurseryBudget: z.number().optional(),
	registryBudget: z.number().optional(),
	nurseryTheme: z.string().optional(),
});

const step4Schema = z.object({
	nurseryColors: z.array(z.string()).optional(),
	homePreparations: z.string().optional(),
});

const babyGenders = [
	"Boy",
	"Girl", 
	"Surprise",
	"Twins - Boys",
	"Twins - Girls",
	"Twins - Mixed",
	"Prefer not to say",
];

const nurseryThemes = [
	"Safari Adventure",
	"Under the Sea",
	"Woodland Animals",
	"Space Explorer",
	"Princess Castle",
	"Dinosaur World",
	"Garden Fairy",
	"Transportation",
	"Rainbow & Clouds",
	"Classic Neutral",
	"Modern Minimalist",
	"Bohemian",
];

const steps = [
	{
		id: 1,
		title: "Basic Information",
		description: "Tell us about your family and baby",
		icon: Baby,
		schema: step1Schema,
	},
	{
		id: 2,
		title: "Healthcare & Birth Plan",
		description: "Your healthcare team and birth preferences",
		icon: Stethoscope,
		schema: step2Schema,
	},
	{
		id: 3,
		title: "Budget & Nursery",
		description: "Planning your budget and nursery theme",
		icon: DollarSign,
		schema: step3Schema,
	},
	{
		id: 4,
		title: "Final Touches",
		description: "Colors, preparations, and finishing touches",
		icon: Check,
		schema: step4Schema,
	},
];

interface BabyPlanningSetupWizardProps {
	isOpen: boolean;
	onClose: () => void;
	onComplete: (data: BabyPlanningData) => void;
}

export function BabyPlanningSetupWizard({
	isOpen,
	onClose,
	onComplete,
}: BabyPlanningSetupWizardProps) {
	const [currentStep, setCurrentStep] = useState(1);
	const [allFormData, setAllFormData] = useState<Partial<BabyPlanningData>>({});

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
				onComplete(updatedData as BabyPlanningData);
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
					<div className="space-y-4">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<FormField
								control={form.control}
								name="parentName1"
								render={({ field }) => (
									<FormItem>
										<FormLabel>First Parent Name</FormLabel>
										<FormControl>
											<Input placeholder="Enter name" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="parentName2"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Second Parent Name</FormLabel>
										<FormControl>
											<Input placeholder="Enter name" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<FormField
							control={form.control}
							name="babyName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Baby Name (if chosen)</FormLabel>
									<FormControl>
										<Input placeholder="Enter baby&apos;s name or leave blank" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<FormField
								control={form.control}
								name="dueDate"
								render={({ field }) => (
									<FormItem className="flex flex-col">
										<FormLabel>Due Date</FormLabel>
										<Popover>
											<PopoverTrigger asChild>
												<FormControl>
													<Button
														variant={"outline"}
														className={cn(
															"pl-3 text-left font-normal",
															!field.value && "text-muted-foreground"
														)}
													>
														{field.value ? (
															format(field.value, "PPP")
														) : (
															<span>Pick due date</span>
														)}
														<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
													</Button>
												</FormControl>
											</PopoverTrigger>
											<PopoverContent className="w-auto p-0" align="start">
												<Calendar
													mode="single"
													selected={field.value}
													onSelect={field.onChange}
													disabled={(date) =>
														date < new Date() || date < new Date("1900-01-01")
													}
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
								name="babyGender"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Baby Gender</FormLabel>
										<Select onValueChange={field.onChange} value={field.value}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Select gender (optional)" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{babyGenders.map((gender) => (
													<SelectItem key={gender} value={gender}>
														{gender}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<FormField
							control={form.control}
							name="babyShowerDate"
							render={({ field }) => (
								<FormItem className="flex flex-col">
									<FormLabel>Baby Shower Date (optional)</FormLabel>
									<Popover>
										<PopoverTrigger asChild>
											<FormControl>
												<Button
													variant={"outline"}
													className={cn(
														"pl-3 text-left font-normal",
														!field.value && "text-muted-foreground"
													)}
												>
													{field.value ? (
														format(field.value, "PPP")
													) : (
														<span>Pick baby shower date</span>
													)}
													<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
												</Button>
											</FormControl>
										</PopoverTrigger>
										<PopoverContent className="w-auto p-0" align="start">
											<Calendar
												mode="single"
												selected={field.value}
												onSelect={field.onChange}
												disabled={(date) =>
													date < new Date() || date < new Date("1900-01-01")
												}
												initialFocus
											/>
										</PopoverContent>
									</Popover>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				);

			case 2:
				return (
					<div className="space-y-4">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<FormField
								control={form.control}
								name="hospital"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Hospital/Birth Center</FormLabel>
										<FormControl>
											<Input placeholder="Enter hospital name" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="doctor"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Doctor/Midwife</FormLabel>
										<FormControl>
											<Input placeholder="Enter doctor&apos;s name" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<FormField
							control={form.control}
							name="birthPlan"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Birth Plan Preferences</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Describe your birth plan preferences (natural, epidural, c-section planned, etc.)"
											className="resize-none"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="specialNeeds"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Special Needs or Considerations</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Any special medical needs, allergies, or other considerations"
											className="resize-none"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				);

			case 3:
				return (
					<div className="space-y-4">
						<FormField
							control={form.control}
							name="nurseryTheme"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Nursery Theme</FormLabel>
									<Select onValueChange={field.onChange} value={field.value}>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select nursery theme" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{nurseryThemes.map((theme) => (
												<SelectItem key={theme} value={theme}>
													{theme}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
							<FormField
								control={form.control}
								name="totalBudget"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Total Baby Budget</FormLabel>
										<FormControl>
											<Input
												type="number"
												placeholder="0"
												{...field}
												onChange={(e) =>
													field.onChange(
														e.target.value ? parseFloat(e.target.value) : undefined
													)
												}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="nurseryBudget"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Nursery Budget</FormLabel>
										<FormControl>
											<Input
												type="number"
												placeholder="0"
												{...field}
												onChange={(e) =>
													field.onChange(
														e.target.value ? parseFloat(e.target.value) : undefined
													)
												}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="registryBudget"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Registry Budget</FormLabel>
										<FormControl>
											<Input
												type="number"
												placeholder="0"
												{...field}
												onChange={(e) =>
													field.onChange(
														e.target.value ? parseFloat(e.target.value) : undefined
													)
												}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						{/* Budget Preview Card */}
						<Card className="bg-muted/30">
							<CardContent className="pt-6">
								<div className="text-center space-y-2">
									<p className="text-sm text-muted-foreground">
										Total Baby Expenses Planned:
									</p>
									<p className="text-2xl font-bold text-primary">
										$
										{((form.watch("totalBudget") ?? 0) || 0).toLocaleString()}
									</p>
								</div>
							</CardContent>
						</Card>
					</div>
				);

			case 4:
				return (
					<div className="space-y-4">
						<FormField
							control={form.control}
							name="homePreparations"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Home Preparations</FormLabel>
									<FormControl>
										<Textarea
											placeholder="What preparations do you need to make at home? (baby-proofing, room setup, etc.)"
											className="resize-none"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Summary Card */}
						<Card>
							<CardHeader>
								<CardTitle className="text-lg">Planning Summary</CardTitle>
								<CardDescription>
									Here&apos;s what we&apos;ve set up for your baby planning journey
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-3">
								<div className="flex justify-between items-center">
									<span className="text-sm font-medium">Parents:</span>
									<span className="text-sm text-muted-foreground">
										{allFormData.parentName1 || "Parent 1"} &amp; {allFormData.parentName2 || "Parent 2"}
									</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-sm font-medium">Baby:</span>
									<span className="text-sm text-muted-foreground">
										{allFormData.babyName || "Baby"} ({allFormData.babyGender || "Gender not specified"})
									</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-sm font-medium">Due Date:</span>
									<span className="text-sm text-muted-foreground">
										{allFormData.dueDate 
											? format(allFormData.dueDate, "PPP")
											: "Not set"}
									</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-sm font-medium">Hospital:</span>
									<span className="text-sm text-muted-foreground">
										{allFormData.hospital || "Not specified"}
									</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-sm font-medium">Nursery Theme:</span>
									<span className="text-sm text-muted-foreground">
										{allFormData.nurseryTheme || "Not selected"}
									</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-sm font-medium">Total Budget:</span>
									<span className="text-sm text-muted-foreground">
										${((allFormData.totalBudget ?? 0) || 0).toLocaleString()}
									</span>
								</div>
							</CardContent>
						</Card>
					</div>
				);

			default:
				return null;
		}
	};

	if (!isOpen) return null;

	const currentStepData = steps[currentStep - 1];
	const progress = (currentStep / steps.length) * 100;

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle className="flex items-center space-x-2">
						<currentStepData.icon className="w-5 h-5" />
						<span>{currentStepData.title}</span>
					</DialogTitle>
					<DialogDescription>{currentStepData.description}</DialogDescription>
				</DialogHeader>

				{/* Progress Bar */}
				<div className="space-y-2">
					<div className="flex justify-between text-xs text-muted-foreground">
						<span>Step {currentStep} of {steps.length}</span>
						<span>{Math.round(progress)}% complete</span>
					</div>
					<Progress value={progress} className="h-2" />
				</div>

				{/* Step Indicators */}
				<div className="flex justify-between">
					{steps.map((step) => (
						<div
							key={step.id}
							className={cn(
								"flex flex-col items-center space-y-2 flex-1",
								step.id <= currentStep ? "text-primary" : "text-muted-foreground"
							)}
						>
							<div
								className={cn(
									"w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
									step.id < currentStep
										? "bg-primary text-primary-foreground"
										: step.id === currentStep
										? "bg-primary text-primary-foreground"
										: "bg-muted text-muted-foreground"
								)}
							>
								{step.id < currentStep ? <Check className="w-4 h-4" /> : step.id}
							</div>
							<span className="text-xs text-center">{step.title}</span>
						</div>
					))}
				</div>

				<Separator />

				<Form {...form}>
					<form className="space-y-4">
						{renderStep()}
					</form>
				</Form>

				<DialogFooter className="flex justify-between">
					<Button
						type="button"
						variant="outline"
						onClick={handlePrevious}
						disabled={currentStep === 1}
					>
						<ArrowLeft className="w-4 h-4 mr-2" />
						Previous
					</Button>
					<Button type="button" onClick={handleNext}>
						{currentStep === steps.length ? (
							<>
								<Check className="w-4 h-4 mr-2" />
								Complete Setup
							</>
						) : (
							<>
								Next
								<ArrowRight className="w-4 h-4 ml-2" />
							</>
						)}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}