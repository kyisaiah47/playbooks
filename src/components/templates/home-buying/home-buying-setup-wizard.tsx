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
	Home,
	ArrowLeft,
	ArrowRight,
	Check,
	MapPin,
	Users,
	DollarSign,
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { HomeBuyingData } from "@/contexts/home-buying-context";

const step1Schema = z.object({
	buyerName: z.string().optional(),
	cobuyerName: z.string().optional(),
	targetMoveDate: z.date().optional(),
	budgetMin: z.number().optional(),
	budgetMax: z.number().optional(),
});

const step2Schema = z.object({
	preApprovalAmount: z.number().optional(),
	lenderName: z.string().optional(),
	loanType: z.string().optional(),
	downPayment: z.number().optional(),
});

const step3Schema = z.object({
	preferredArea: z.string().optional(),
	homeType: z.string().optional(),
	bedrooms: z.number().optional(),
	bathrooms: z.number().optional(),
});

const step4Schema = z.object({
	mustHaveFeatures: z.array(z.string()).optional(),
	dealBreakers: z.array(z.string()).optional(),
	specialRequirements: z.string().optional(),
});

const steps = [
	{
		title: "Basic Information",
		description: "Tell us about your home buying timeline and budget",
		schema: step1Schema,
	},
	{
		title: "Financing Details",
		description: "Share your financing situation and preferences",
		schema: step2Schema,
	},
	{
		title: "Home Preferences",
		description: "What type of home are you looking for?",
		schema: step3Schema,
	},
	{
		title: "Requirements",
		description: "Your must-haves and deal-breakers",
		schema: step4Schema,
	},
];

interface HomeBuyingSetupWizardProps {
	isOpen: boolean;
	onClose: () => void;
	onComplete: (data: HomeBuyingData) => void;
}

export function HomeBuyingSetupWizard({
	isOpen,
	onClose,
	onComplete,
}: HomeBuyingSetupWizardProps) {
	const [currentStep, setCurrentStep] = useState(0);
	const [formData, setFormData] = useState<Partial<HomeBuyingData>>({});

	const currentStepSchema = steps[currentStep].schema;
	
	const form = useForm({
		resolver: zodResolver(currentStepSchema),
		defaultValues: formData,
	});

	const handleNext = () => {
		const stepData = form.getValues();
		const updatedFormData = { ...formData, ...stepData };
		setFormData(updatedFormData);

		if (currentStep < steps.length - 1) {
			setCurrentStep(currentStep + 1);
			form.reset(updatedFormData);
		} else {
			// Final step - complete the wizard
			const finalData: HomeBuyingData = {
				buyerName: updatedFormData.buyerName || "",
				cobuyerName: updatedFormData.cobuyerName || "",
				targetMoveDate: updatedFormData.targetMoveDate,
				budgetMin: updatedFormData.budgetMin || 0,
				budgetMax: updatedFormData.budgetMax || 0,
				preApprovalAmount: updatedFormData.preApprovalAmount || 0,
				preferredArea: updatedFormData.preferredArea || "",
				homeType: updatedFormData.homeType || "",
				bedrooms: updatedFormData.bedrooms || 0,
				bathrooms: updatedFormData.bathrooms || 0,
				downPayment: updatedFormData.downPayment || 0,
				lenderName: updatedFormData.lenderName || "",
				loanType: updatedFormData.loanType || "",
				mustHaveFeatures: updatedFormData.mustHaveFeatures || [],
				dealBreakers: updatedFormData.dealBreakers || [],
				specialRequirements: updatedFormData.specialRequirements || "",
			};
			onComplete(finalData);
		}
	};

	const handlePrevious = () => {
		const stepData = form.getValues();
		setFormData({ ...formData, ...stepData });
		setCurrentStep(currentStep - 1);
		form.reset({ ...formData, ...stepData });
	};

	const renderStep = () => {
		switch (currentStep) {
			case 0:
				return (
					<div className="space-y-6">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<FormField
								control={form.control}
								name="buyerName"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Primary Buyer Name</FormLabel>
										<FormControl>
											<Input placeholder="Your name" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="cobuyerName"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Co-buyer Name (Optional)</FormLabel>
										<FormControl>
											<Input placeholder="Co-buyer name" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<FormField
							control={form.control}
							name="targetMoveDate"
							render={({ field }) => (
								<FormItem className="flex flex-col">
									<FormLabel>Target Move Date</FormLabel>
									<Popover>
										<PopoverTrigger asChild>
											<FormControl>
												<Button
													variant="outline"
													className={cn(
														"w-full pl-3 text-left font-normal",
														!field.value && "text-muted-foreground"
													)}
												>
													{field.value ? (
														format(field.value, "PPP")
													) : (
														<span>When would you like to move?</span>
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
												disabled={(date) => date < new Date()}
												initialFocus
											/>
										</PopoverContent>
									</Popover>
									<FormMessage />
								</FormItem>
							)}
						/>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<FormField
								control={form.control}
								name="budgetMin"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Minimum Budget</FormLabel>
										<FormControl>
											<Input
												type="number"
												placeholder="300000"
												{...field}
												onChange={(e) => field.onChange(Number(e.target.value) || 0)}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="budgetMax"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Maximum Budget</FormLabel>
										<FormControl>
											<Input
												type="number"
												placeholder="500000"
												{...field}
												onChange={(e) => field.onChange(Number(e.target.value) || 0)}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						{form.watch("budgetMin") && form.watch("budgetMax") && (
							<Card className="bg-muted/30">
								<CardContent className="pt-6">
									<div className="text-center space-y-2">
										<p className="text-sm text-muted-foreground">
											Budget Range:
										</p>
										<p className="text-2xl font-bold text-primary">
											${form.watch("budgetMin")?.toLocaleString()} - ${form.watch("budgetMax")?.toLocaleString()}
										</p>
									</div>
								</CardContent>
							</Card>
						)}
					</div>
				);

			case 1:
				return (
					<div className="space-y-6">
						<FormField
							control={form.control}
							name="preApprovalAmount"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Pre-approval Amount</FormLabel>
									<FormControl>
										<Input
											type="number"
											placeholder="450000"
											{...field}
											onChange={(e) => field.onChange(Number(e.target.value) || 0)}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="lenderName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Preferred Lender</FormLabel>
									<FormControl>
										<Input placeholder="Bank or lender name" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="loanType"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Loan Type</FormLabel>
									<Select onValueChange={field.onChange} defaultValue={field.value}>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select loan type" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value="conventional">Conventional</SelectItem>
											<SelectItem value="fha">FHA</SelectItem>
											<SelectItem value="va">VA</SelectItem>
											<SelectItem value="usda">USDA</SelectItem>
											<SelectItem value="jumbo">Jumbo</SelectItem>
											<SelectItem value="other">Other</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="downPayment"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Down Payment Amount</FormLabel>
									<FormControl>
										<Input
											type="number"
											placeholder="90000"
											{...field}
											onChange={(e) => field.onChange(Number(e.target.value) || 0)}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				);

			case 2:
				return (
					<div className="space-y-6">
						<FormField
							control={form.control}
							name="preferredArea"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Preferred Area/Neighborhood</FormLabel>
									<FormControl>
										<Input placeholder="Downtown, Suburbs, etc." {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="homeType"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Home Type</FormLabel>
									<Select onValueChange={field.onChange} defaultValue={field.value}>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select home type" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value="single-family">Single Family Home</SelectItem>
											<SelectItem value="condo">Condominium</SelectItem>
											<SelectItem value="townhouse">Townhouse</SelectItem>
											<SelectItem value="multi-family">Multi-family</SelectItem>
											<SelectItem value="mobile">Mobile Home</SelectItem>
											<SelectItem value="other">Other</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<FormField
								control={form.control}
								name="bedrooms"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Bedrooms</FormLabel>
										<Select onValueChange={(value) => field.onChange(Number(value))} defaultValue={field.value?.toString()}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Number of bedrooms" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="1">1 Bedroom</SelectItem>
												<SelectItem value="2">2 Bedrooms</SelectItem>
												<SelectItem value="3">3 Bedrooms</SelectItem>
												<SelectItem value="4">4 Bedrooms</SelectItem>
												<SelectItem value="5">5+ Bedrooms</SelectItem>
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="bathrooms"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Bathrooms</FormLabel>
										<Select onValueChange={(value) => field.onChange(Number(value))} defaultValue={field.value?.toString()}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Number of bathrooms" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="1">1 Bathroom</SelectItem>
												<SelectItem value="2">2 Bathrooms</SelectItem>
												<SelectItem value="3">3 Bathrooms</SelectItem>
												<SelectItem value="4">4+ Bathrooms</SelectItem>
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					</div>
				);

			case 3:
				return (
					<div className="space-y-6">
						<FormField
							control={form.control}
							name="specialRequirements"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Special Requirements</FormLabel>
									<FormControl>
										<Textarea 
											placeholder="Any specific needs, accessibility requirements, etc."
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<div className="text-center space-y-4">
							<div>
								<h3 className="text-lg font-semibold mb-2">You&apos;re all set!</h3>
								<p className="text-muted-foreground">
									We&apos;ll create your personalized home buying workspace with all your preferences.
								</p>
							</div>
						</div>
					</div>
				);

			default:
				return null;
		}
	};

	if (!isOpen) return null;

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
				<DialogHeader>
					<div className="flex items-center gap-3 mb-2">
						<div className="p-2 bg-primary/10 rounded-lg">
							<Home className="h-6 w-6 text-primary" />
						</div>
						<div>
							<DialogTitle className="text-2xl">Home Buying Setup</DialogTitle>
							<DialogDescription>
								{steps[currentStep].description}
							</DialogDescription>
						</div>
					</div>
					<div className="space-y-2">
						<div className="flex justify-between text-sm text-muted-foreground">
							<span>Step {currentStep + 1} of {steps.length}</span>
							<span>{Math.round(((currentStep + 1) / steps.length) * 100)}% Complete</span>
						</div>
						<Progress value={((currentStep + 1) / steps.length) * 100} className="h-2" />
					</div>
				</DialogHeader>

				<div className="py-6">
					<h3 className="text-xl font-semibold mb-6">{steps[currentStep].title}</h3>
					<Form {...form}>
						<form className="space-y-6">
							{renderStep()}
						</form>
					</Form>
				</div>

				<DialogFooter className="flex justify-between">
					<Button
						type="button"
						variant="outline"
						onClick={handlePrevious}
						disabled={currentStep === 0}
						className="flex items-center gap-2"
					>
						<ArrowLeft className="h-4 w-4" />
						Previous
					</Button>
					<Button
						type="button"
						onClick={handleNext}
						className="flex items-center gap-2"
					>
						{currentStep === steps.length - 1 ? (
							<>
								<Check className="h-4 w-4" />
								Complete Setup
							</>
						) : (
							<>
								Next
								<ArrowRight className="h-4 w-4" />
							</>
						)}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}