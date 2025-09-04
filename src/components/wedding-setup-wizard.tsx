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
	Heart,
	ArrowLeft,
	ArrowRight,
	Check,
	MapPin,
	Users,
	DollarSign,
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface WeddingData {
	partner1Name: string;
	partner2Name: string;
	weddingDate: Date | undefined;
	weddingTime: string;
	weddingStyle: string;
	guestCount: number;
	totalBudget: number;
	ceremonyVenue: string;
	ceremonyAddress: string;
	receptionVenue: string;
	receptionAddress: string;
	themeColors: string[];
	specialRequirements: string;
	culturalTraditions: string;
}

const step1Schema = z.object({
	partner1Name: z.string().min(1, "Partner name is required"),
	partner2Name: z.string().min(1, "Partner name is required"),
	weddingDate: z.date({ required_error: "Wedding date is required" }),
	weddingTime: z.string().min(1, "Wedding time is required"),
	weddingStyle: z.string().min(1, "Wedding style is required"),
});

const step2Schema = z.object({
	ceremonyVenue: z.string().min(1, "Ceremony venue is required"),
	ceremonyAddress: z.string().min(1, "Ceremony address is required"),
	receptionVenue: z.string().min(1, "Reception venue is required"),
	receptionAddress: z.string().min(1, "Reception address is required"),
});

const step3Schema = z.object({
	guestCount: z.number().min(1, "Must be at least 1 guest"),
	totalBudget: z.number().min(1, "Must be at least $1"),
});

const step4Schema = z.object({
	culturalTraditions: z.string().optional(),
	specialRequirements: z.string().optional(),
});

const weddingStyles = [
	"Traditional",
	"Modern",
	"Rustic",
	"Elegant",
	"Casual",
	"Destination",
	"Elopement",
	"Garden",
	"Beach",
	"Vintage",
];

const steps = [
	{
		id: 1,
		title: "Basic Information",
		description: "Tell us about yourselves and your wedding",
		icon: Heart,
		schema: step1Schema,
	},
	{
		id: 2,
		title: "Venue Details",
		description: "Where will your celebration take place?",
		icon: MapPin,
		schema: step2Schema,
	},
	{
		id: 3,
		title: "Guest & Budget",
		description: "Guest count and budget planning",
		icon: Users,
		schema: step3Schema,
	},
	{
		id: 4,
		title: "Final Details",
		description: "Colors, traditions, and special requirements",
		icon: Check,
		schema: step4Schema,
	},
];

interface WeddingSetupWizardProps {
	isOpen: boolean;
	onClose: () => void;
	onComplete: (data: WeddingData) => void;
}

export function WeddingSetupWizard({
	isOpen,
	onClose,
	onComplete,
}: WeddingSetupWizardProps) {
	const [currentStep, setCurrentStep] = useState(1);
	const [allFormData, setAllFormData] = useState<Partial<WeddingData>>({});

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
				onComplete(updatedData as WeddingData);
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
								name="partner1Name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>First Partner Name</FormLabel>
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
								name="partner2Name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Second Partner Name</FormLabel>
										<FormControl>
											<Input
												placeholder="e.g., Michael Johnson"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<div className="grid grid-cols-2 gap-4">
							<FormField
								control={form.control}
								name="weddingDate"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Wedding Date</FormLabel>
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
															<span>Pick a date</span>
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
								name="weddingTime"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Wedding Time</FormLabel>
										<FormControl>
											<Input
												type="time"
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
							name="weddingStyle"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Wedding Style</FormLabel>
									<Select
										onValueChange={field.onChange}
										value={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select your wedding style" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{weddingStyles.map((style) => (
												<SelectItem
													key={style}
													value={style.toLowerCase()}
												>
													{style}
												</SelectItem>
											))}
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
					<div className="space-y-6">
						<Card>
							<CardHeader>
								<CardTitle className="text-lg">Ceremony Venue</CardTitle>
								<CardDescription>
									Where will your ceremony take place?
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<FormField
									control={form.control}
									name="ceremonyVenue"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Venue Name</FormLabel>
											<FormControl>
												<Input
													placeholder="e.g., St. Mary's Cathedral"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="ceremonyAddress"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Address</FormLabel>
											<FormControl>
												<Textarea
													placeholder="Full address including city, state, zip"
													rows={3}
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className="text-lg">Reception Venue</CardTitle>
								<CardDescription>
									Where will your reception be held?
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<FormField
									control={form.control}
									name="receptionVenue"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Venue Name</FormLabel>
											<FormControl>
												<Input
													placeholder="e.g., Grand Ballroom Hotel"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="receptionAddress"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Address</FormLabel>
											<FormControl>
												<Textarea
													placeholder="Full address including city, state, zip"
													rows={3}
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

			case 3:
				return (
					<div className="space-y-6">
						<div className="grid grid-cols-2 gap-6">
							<Card>
								<CardHeader>
									<CardTitle className="text-lg flex items-center">
										<Users className="mr-2 h-5 w-5" />
										Guest Count
									</CardTitle>
									<CardDescription>
										How many guests are you expecting?
									</CardDescription>
								</CardHeader>
								<CardContent>
									<FormField
										control={form.control}
										name="guestCount"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Number of Guests</FormLabel>
												<FormControl>
													<Input
														type="number"
														placeholder="e.g., 150"
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
								</CardContent>
							</Card>

							<Card>
								<CardHeader>
									<CardTitle className="text-lg flex items-center">
										<DollarSign className="mr-2 h-5 w-5" />
										Total Budget
									</CardTitle>
									<CardDescription>
										What&apos;s your overall wedding budget?
									</CardDescription>
								</CardHeader>
								<CardContent>
									<FormField
										control={form.control}
										name="totalBudget"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Budget Amount ($)</FormLabel>
												<FormControl>
													<Input
														type="number"
														placeholder="e.g., 25000"
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
								</CardContent>
							</Card>
						</div>

						<Card className="bg-muted/30">
							<CardContent className="pt-6">
								<div className="text-center space-y-2">
									<p className="text-sm text-muted-foreground">
										Estimated cost per guest:
									</p>
									<p className="text-2xl font-bold text-primary">
										$
										{form.watch("guestCount") > 0 &&
										form.watch("totalBudget") > 0
											? Math.round(
													form.watch("totalBudget") / form.watch("guestCount")
											  )
											: 0}
									</p>
								</div>
							</CardContent>
						</Card>
					</div>
				);

			case 4:
				return (
					<div className="space-y-6">
						<FormField
							control={form.control}
							name="culturalTraditions"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Cultural Traditions</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Any specific cultural or religious traditions to include?"
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
							name="specialRequirements"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Special Requirements</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Accessibility needs, dietary restrictions, or other special considerations..."
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
									You&apos;re all set to start planning your perfect wedding
									day.
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
			onOpenChange={() => {}}
		>
			<DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle className="flex items-center text-2xl">
						<Heart className="mr-2 h-6 w-6 text-primary" />
						Wedding Setup Wizard
					</DialogTitle>
					<DialogDescription>
						Let&apos;s gather some basic information to personalize your wedding
						planning experience
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
