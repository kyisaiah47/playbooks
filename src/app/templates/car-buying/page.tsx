"use client"

import { useState, useEffect } from "react"
import { CarBuyingSidebarLeft } from "@/components/car-buying-sidebar-left"
import { SidebarRight } from "@/components/sidebar-right"
import { CarBuyingOverview } from "@/components/car-buying-overview"
import { VehicleSearch } from "@/components/vehicle-search"
import { DealershipManager } from "@/components/dealership-manager"
import { FinancingOptions } from "@/components/financing-options"
import { TestDriveManager } from "@/components/test-drive-manager"
import { MaintenanceTracker } from "@/components/maintenance-tracker"
import { VehicleComparison } from "@/components/vehicle-comparison"
import { CarBuyingSetupWizard } from "@/components/car-buying-setup-wizard"
import { ThemeToggle } from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useCarBuying, getCarBuyingDisplayData } from "@/contexts/car-buying-context"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Car, Clock, Target, Wand2, Settings2, LifeBuoy, DollarSign } from "lucide-react"

// Import all the new component pages
import {
  VehicleValuation,
  InsuranceQuotes,
  LoanCalculator,
  VinDecoder,
  RecallCheck,
  MpgCalculator,
  TradeInValue,
  WarrantyInfo,
  RegistrationGuide,
  InspectionChecklist,
} from "@/components/car-buying-tools"
import {
  SavedVehicles,
  ContactedDealers,
  TestDriveScheduled,
  UnderConsideration,
  Negotiating,
  Purchased,
} from "@/components/vehicle-pipeline"
import {
  BankLoans,
  CreditUnion,
  DealerFinancing,
  LeaseOptions,
  PreApprovals,
} from "@/components/financing-workspace"
import {
  VehicleReviews,
  SafetyRatings,
  ReliabilityReports,
  MarketPrices,
  OwnershipCosts,
} from "@/components/research-hub"
import {
  PurchaseContracts,
  InsuranceDocuments,
  RegistrationPapers,
  ServiceRecords,
  WarrantyPapers,
} from "@/components/documentation"

function CarBuyingTemplatePage() {
  const [activeSection, setActiveSection] = useState("overview")
  const { carBuyingData, isWizardOpen, setWizardOpen, updateCarBuyingData } = useCarBuying()

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "")
      if (hash) {
        setActiveSection(hash)
      }
    }

    handleHashChange()
    window.addEventListener("hashchange", handleHashChange)
    
    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  const renderContent = () => {
    switch (activeSection) {
      case "vehicle-search":
        return <VehicleSearch />
      case "dealerships":
        return <DealershipManager />
      case "financing":
        return <FinancingOptions />
      case "test-drives":
        return <TestDriveManager />
      case "maintenance":
        return <MaintenanceTracker />
      case "comparison":
        return <VehicleComparison />
      case "settings":
        return <CarBuyingSettings />
      case "help":
        return <CarBuyingHelp />
      
      // Favorites/Tools pages
      case "valuation":
        return <VehicleValuation />
      case "insurance":
        return <InsuranceQuotes />
      case "loan-calc":
        return <LoanCalculator />
      case "vin-decoder":
        return <VinDecoder />
      case "recalls":
        return <RecallCheck />
      case "mpg-calc":
        return <MpgCalculator />
      case "trade-in":
        return <TradeInValue />
      case "warranty":
        return <WarrantyInfo />
      case "registration":
        return <RegistrationGuide />
      case "inspection":
        return <InspectionChecklist />
      
      // Vehicle Pipeline pages
      case "saved-vehicles":
        return <SavedVehicles />
      case "contacted":
        return <ContactedDealers />
      case "scheduled":
        return <TestDriveScheduled />
      case "considering":
        return <UnderConsideration />
      case "negotiating":
        return <Negotiating />
      case "purchased":
        return <Purchased />
      
      // Financing Options pages
      case "bank-loans":
        return <BankLoans />
      case "credit-union":
        return <CreditUnion />
      case "dealer-financing":
        return <DealerFinancing />
      case "leasing":
        return <LeaseOptions />
      case "pre-approved":
        return <PreApprovals />
      
      // Research Hub pages
      case "reviews":
        return <VehicleReviews />
      case "safety":
        return <SafetyRatings />
      case "reliability":
        return <ReliabilityReports />
      case "market-prices":
        return <MarketPrices />
      case "ownership-costs":
        return <OwnershipCosts />
      
      // Documentation pages
      case "contracts":
        return <PurchaseContracts />
      case "insurance-docs":
        return <InsuranceDocuments />
      case "registration-docs":
        return <RegistrationPapers />
      case "service-records":
        return <ServiceRecords />
      case "warranty-docs":
        return <WarrantyPapers />
      
      case "overview":
      default:
        return <CarBuyingOverview />
    }
  }

  const resetAllData = () => {
    if (window.confirm('Are you sure you want to reset all car buying data? This action cannot be undone.')) {
      localStorage.removeItem('templata-car-buying-data')
      window.location.reload()
    }
  }

  const CarBuyingSettings = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center">
          <Settings2 className="mr-2 h-8 w-8" />
          Settings
        </h1>
        <p className="text-muted-foreground">Manage your car buying preferences and data</p>
      </div>
      
      <div className="grid gap-6">
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-2">Car Buying Setup</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Update your car buying information or restart the setup process
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => setWizardOpen(true)}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Edit Car Buying Details
            </button>
            <button
              onClick={resetAllData}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-destructive border-destructive/30 hover:bg-destructive/10"
            >
              Reset All Data
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Reset will clear all car buying data and restart the setup wizard
          </p>
        </div>

        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-2">Current Preferences</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Vehicle Type:</span>
              <p className="text-muted-foreground">{carBuyingData.vehicleType || "Not set"}</p>
            </div>
            <div>
              <span className="font-medium">Budget Range:</span>
              <p className="text-muted-foreground">{carBuyingData.budgetMin && carBuyingData.budgetMax ? `$${carBuyingData.budgetMin.toLocaleString()} - $${carBuyingData.budgetMax.toLocaleString()}` : "Not set"}</p>
            </div>
            <div>
              <span className="font-medium">Fuel Type:</span>
              <p className="text-muted-foreground">{carBuyingData.fuelType.charAt(0).toUpperCase() + carBuyingData.fuelType.slice(1)}</p>
            </div>
            <div>
              <span className="font-medium">Timeline:</span>
              <p className="text-muted-foreground">{carBuyingData.purchaseTimeline.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const CarBuyingHelp = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center">
          <LifeBuoy className="mr-2 h-8 w-8" />
          Help & Support
        </h1>
        <p className="text-muted-foreground">Tips and guidance for your car buying journey</p>
      </div>
      
      <div className="grid gap-6">
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-4">Getting Started</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">1. Define Your Needs</h4>
              <p className="text-sm text-muted-foreground">Use the setup wizard to configure your vehicle preferences, budget, and timeline.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">2. Research Vehicles</h4>
              <p className="text-sm text-muted-foreground">Use the vehicle search to find cars that match your criteria and save favorites.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">3. Compare Options</h4>
              <p className="text-sm text-muted-foreground">Use the comparison tool to evaluate different vehicles side by side.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">4. Schedule Test Drives</h4>
              <p className="text-sm text-muted-foreground">Track your test drives and take detailed notes about each vehicle.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">5. Secure Financing</h4>
              <p className="text-sm text-muted-foreground">Compare financing options from banks, credit unions, and dealerships.</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-4">Best Practices</h3>
          <div className="space-y-2 text-sm">
            <div>• Get pre-approved for financing to know your budget</div>
            <div>• Research vehicle values using multiple sources</div>
            <div>• Always test drive before purchasing</div>
            <div>• Get a pre-purchase inspection for used cars</div>
            <div>• Negotiate the total price, not just monthly payments</div>
            <div>• Review all paperwork carefully before signing</div>
            <div>• Keep detailed records of all transactions</div>
            <div>• Consider total cost of ownership, not just purchase price</div>
          </div>
        </div>
      </div>
    </div>
  )

  const getSectionTitle = () => {
    switch (activeSection) {
      case "vehicle-search":
        return "Vehicle Search"
      case "dealerships":
        return "Dealerships"
      case "financing":
        return "Financing Options"
      case "test-drives":
        return "Test Drives"
      case "maintenance":
        return "Maintenance Tracker"
      case "comparison":
        return "Vehicle Comparison"
      case "settings":
        return "Settings"
      case "help":
        return "Help"
      
      // Favorites/Tools pages
      case "valuation":
        return "Vehicle Valuation"
      case "insurance":
        return "Insurance Quotes"
      case "loan-calc":
        return "Loan Calculator"
      case "vin-decoder":
        return "VIN Decoder"
      case "recalls":
        return "Recall Check"
      case "mpg-calc":
        return "MPG Calculator"
      case "trade-in":
        return "Trade-in Value"
      case "warranty":
        return "Warranty Info"
      case "registration":
        return "Registration Guide"
      case "inspection":
        return "Inspection Checklist"
      
      // Vehicle Pipeline pages
      case "saved-vehicles":
        return "Saved Vehicles"
      case "contacted":
        return "Contacted Dealers"
      case "scheduled":
        return "Test Drive Scheduled"
      case "considering":
        return "Under Consideration"
      case "negotiating":
        return "Negotiating"
      case "purchased":
        return "Purchased"
      
      // Financing Options pages
      case "bank-loans":
        return "Bank Loans"
      case "credit-union":
        return "Credit Union"
      case "dealer-financing":
        return "Dealer Financing"
      case "leasing":
        return "Lease Options"
      case "pre-approved":
        return "Pre-approvals"
      
      // Research Hub pages
      case "reviews":
        return "Vehicle Reviews"
      case "safety":
        return "Safety Ratings"
      case "reliability":
        return "Reliability Reports"
      case "market-prices":
        return "Market Prices"
      case "ownership-costs":
        return "Ownership Costs"
      
      // Documentation pages
      case "contracts":
        return "Purchase Contracts"
      case "insurance-docs":
        return "Insurance Documents"
      case "registration-docs":
        return "Registration Papers"
      case "service-records":
        return "Service Records"
      case "warranty-docs":
        return "Warranty Papers"
      
      case "overview":
      default:
        return "Car Buying Overview"
    }
  }

  const displayData = getCarBuyingDisplayData(carBuyingData)

  return (
    <SidebarProvider>
      <CarBuyingSidebarLeft />
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
                    {getSectionTitle()} - {displayData.vehicleType}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center space-x-3 px-3">
            <Badge variant="secondary" className="text-sm hidden sm:flex">
              <Target className="mr-1 h-3 w-3" />
              {displayData.budgetRange}
            </Badge>
            <Badge variant="outline" className="text-sm hidden sm:flex">
              <Clock className="mr-1 h-3 w-3" />
              {displayData.daysUntilTarget} days left
            </Badge>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={() => setWizardOpen(true)}>
                <Wand2 className="mr-2 h-4 w-4" />
                Setup
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {renderContent()}
        </div>
      </SidebarInset>
      <SidebarRight />
      <CarBuyingSetupWizard 
        isOpen={isWizardOpen}
        onClose={() => setWizardOpen(false)}
        onComplete={(data) => updateCarBuyingData(data)}
        initialData={carBuyingData}
      />
    </SidebarProvider>
  )
}

export default function Page() {
  return <CarBuyingTemplatePage />
}