"use client";

import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from "react";

export interface HomeBuyingData {
	// Basic Home Search Info
	targetLocation: string;
	maxBudget: number;
	minBudget: number;
	currency: string;
	propertyType:
		| "single-family"
		| "townhouse"
		| "condo"
		| "multi-family"
		| "any";
	bedrooms: number;
	bathrooms: number;
	minSquareFeet: number;
	maxSquareFeet: number;

	// Lifestyle & Preferences
	mustHaveFeatures: string[];
	niceToHaveFeatures: string[];
	dealBreakers: string[];
	neighborhoodPreferences: string[];
	commutePreferences: string[];
	schoolDistrict: string;
	walkabilityScore: number;

	// Financial Information
	preApprovalAmount: number;
	downPaymentAmount: number;
	downPaymentPercentage: number;
	monthlyIncomeAfterTax: number;
	monthlyDebtPayments: number;
	estimatedMonthlyHOA: number;
	estimatedPropertyTaxes: number;
	homeInsuranceBudget: number;
	closingCostsBudget: number;

	// Mortgage Details
	mortgageType: "conventional" | "fha" | "va" | "usda" | "jumbo" | "other";
	loanTerm: "15" | "20" | "30";
	interestRate: number;
	lenderPreferences: string[];

	// Timeline & Goals
	targetMoveInDate: Date;
	searchTimeline:
		| "1-month"
		| "3-months"
		| "6-months"
		| "12-months"
		| "flexible";
	firstTimeBuyer: boolean;
	currentLivingSituation:
		| "renting"
		| "living-with-family"
		| "own-home"
		| "other";
	reasonForMoving: string;

	// Professional Team
	realEstateAgent: {
		name: string;
		phone: string;
		email: string;
		company: string;
	};
	mortgageLender: {
		name: string;
		phone: string;
		email: string;
		company: string;
	};
	homeInspector: {
		name: string;
		phone: string;
		email: string;
		company: string;
	};
	attorneyTitle: {
		name: string;
		phone: string;
		email: string;
		company: string;
	};
}

interface HomeBuyingContextType {
	homeBuyingData: HomeBuyingData;
	isWizardOpen: boolean;
	setWizardOpen: (open: boolean) => void;
	updateHomeBuyingData: (data: HomeBuyingData) => void;
}

const defaultHomeBuyingData: HomeBuyingData = {
	targetLocation: "",
	maxBudget: 500000,
	minBudget: 200000,
	currency: "USD",
	propertyType: "any",
	bedrooms: 3,
	bathrooms: 2,
	minSquareFeet: 1200,
	maxSquareFeet: 3000,
	mustHaveFeatures: [],
	niceToHaveFeatures: [],
	dealBreakers: [],
	neighborhoodPreferences: [],
	commutePreferences: [],
	schoolDistrict: "",
	walkabilityScore: 50,
	preApprovalAmount: 0,
	downPaymentAmount: 50000,
	downPaymentPercentage: 10,
	monthlyIncomeAfterTax: 8000,
	monthlyDebtPayments: 1000,
	estimatedMonthlyHOA: 0,
	estimatedPropertyTaxes: 800,
	homeInsuranceBudget: 150,
	closingCostsBudget: 15000,
	mortgageType: "conventional",
	loanTerm: "30",
	interestRate: 6.5,
	lenderPreferences: [],
	targetMoveInDate: new Date(Date.now() + 6 * 30 * 24 * 60 * 60 * 1000), // 6 months from now
	searchTimeline: "6-months",
	firstTimeBuyer: true,
	currentLivingSituation: "renting",
	reasonForMoving: "",
	realEstateAgent: {
		name: "",
		phone: "",
		email: "",
		company: "",
	},
	mortgageLender: {
		name: "",
		phone: "",
		email: "",
		company: "",
	},
	homeInspector: {
		name: "",
		phone: "",
		email: "",
		company: "",
	},
	attorneyTitle: {
		name: "",
		phone: "",
		email: "",
		company: "",
	},
};

const HomeBuyingContext = createContext<HomeBuyingContextType | undefined>(
	undefined
);

export function HomeBuyingProvider({ children }: { children: ReactNode }) {
	const [homeBuyingData, setHomeBuyingData] = useState<HomeBuyingData>(
		defaultHomeBuyingData
	);
	const [isWizardOpen, setIsWizardOpen] = useState(false);

	// Load from localStorage on mount
	useEffect(() => {
		const saved = localStorage.getItem("templata-home-buying-data");
		if (saved) {
			try {
				const parsedData = JSON.parse(saved);
				// Convert date string back to Date object
				if (parsedData.targetMoveInDate) {
					parsedData.targetMoveInDate = new Date(parsedData.targetMoveInDate);
				}
				setHomeBuyingData(parsedData);
			} catch (error) {
				console.error("Failed to parse saved home buying data:", error);
			}
		} else {
			// Show wizard for new users
			setIsWizardOpen(true);
		}
	}, []);

	// Save to localStorage whenever data changes
	useEffect(() => {
		localStorage.setItem(
			"templata-home-buying-data",
			JSON.stringify(homeBuyingData)
		);
	}, [homeBuyingData]);

	const setWizardOpen = (open: boolean) => {
		setIsWizardOpen(open);
	};

	const updateHomeBuyingData = (data: HomeBuyingData) => {
		setHomeBuyingData(data);
		setIsWizardOpen(false);
	};

	return (
		<HomeBuyingContext.Provider
			value={{
				homeBuyingData,
				isWizardOpen,
				setWizardOpen,
				updateHomeBuyingData,
			}}
		>
			{children}
		</HomeBuyingContext.Provider>
	);
}

export function useHomeBuying() {
	const context = useContext(HomeBuyingContext);
	if (context === undefined) {
		throw new Error("useHomeBuying must be used within a HomeBuyingProvider");
	}
	return context;
}

export function getHomeBuyingDisplayData(data: HomeBuyingData) {
	const timelineMonths =
		{
			"1-month": 1,
			"3-months": 3,
			"6-months": 6,
			"12-months": 12,
			flexible: 18,
		}[data.searchTimeline] || 6;

	const targetDate = new Date(data.targetMoveInDate);
	const daysUntilTarget = Math.ceil(
		(targetDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
	);

	const monthlyPayment = calculateMonthlyPayment(
		data.maxBudget - data.downPaymentAmount,
		data.interestRate / 100 / 12,
		parseInt(data.loanTerm) * 12
	);

	const affordabilityRatio =
		(monthlyPayment / data.monthlyIncomeAfterTax) * 100;

	return {
		targetLocation: data.targetLocation || "Your Target Area",
		budgetRange: `${
			data.currency
		} ${data.minBudget.toLocaleString()} - ${data.maxBudget.toLocaleString()}`,
		propertyType:
			data.propertyType.charAt(0).toUpperCase() +
			data.propertyType.slice(1).replace("-", " "),
		bedBathDisplay: `${data.bedrooms} bed, ${data.bathrooms} bath`,
		targetMoveInDate: targetDate,
		daysUntilTarget: Math.max(0, daysUntilTarget),
		searchTimeline: data.searchTimeline
			.replace("-", " ")
			.replace(/\b\w/g, (l) => l.toUpperCase()),
		monthlyPayment: Math.round(monthlyPayment),
		affordabilityRatio: Math.round(affordabilityRatio),
		downPaymentDisplay: `${
			data.currency
		} ${data.downPaymentAmount.toLocaleString()} (${
			data.downPaymentPercentage
		}%)`,
		firstTimeBuyer: data.firstTimeBuyer
			? "First-time buyer"
			: "Experienced buyer",
		squareFeetRange: `${data.minSquareFeet.toLocaleString()} - ${data.maxSquareFeet.toLocaleString()} sq ft`,
	};
}

// Helper function to calculate monthly mortgage payment
function calculateMonthlyPayment(
	principal: number,
	monthlyRate: number,
	numberOfPayments: number
): number {
	if (monthlyRate === 0) {
		return principal / numberOfPayments;
	}

	return (
		(principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
		(Math.pow(1 + monthlyRate, numberOfPayments) - 1)
	);
}
