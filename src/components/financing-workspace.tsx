"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { 
  Building2, 
  Handshake, 
  Building, 
  FileText, 
  CheckCircle,
  Star,
  TrendingUp,
  Clock,
  DollarSign,
  Calculator,
  Phone,
  ExternalLink,
  Plus,
  Edit,
  Trash2,
  AlertCircle,
  Car
} from "lucide-react"

interface FinancingOption {
  id: string
  lender: string
  type: 'loan' | 'lease'
  apr: number
  term: number
  monthlyPayment: number
  downPayment: number
  totalCost: number
  status: 'researching' | 'applied' | 'approved' | 'pre-approved' | 'denied'
  notes: string
  applicationDate?: string
  approvalDate?: string
  expirationDate?: string
  loanAmount?: number
  creditScore?: number
  rating?: number
}

const mockFinancingOptions: FinancingOption[] = [
  {
    id: "1",
    lender: "First National Bank",
    type: "loan",
    apr: 4.2,
    term: 60,
    monthlyPayment: 485,
    downPayment: 5000,
    totalCost: 34100,
    status: "pre-approved",
    notes: "Excellent customer service, quick approval",
    applicationDate: "2024-01-10",
    approvalDate: "2024-01-12",
    expirationDate: "2024-02-12",
    loanAmount: 25000,
    creditScore: 720,
    rating: 4.5
  },
  {
    id: "2",
    lender: "Community Credit Union",
    type: "loan",
    apr: 3.8,
    term: 48,
    monthlyPayment: 520,
    downPayment: 3000,
    totalCost: 27960,
    status: "approved",
    notes: "Member benefits, lower rates",
    applicationDate: "2024-01-08",
    approvalDate: "2024-01-11",
    loanAmount: 22000,
    creditScore: 720,
    rating: 4.7
  },
  {
    id: "3",
    lender: "Honda Financial Services",
    type: "lease",
    apr: 2.9,
    term: 36,
    monthlyPayment: 299,
    downPayment: 2000,
    totalCost: 12764,
    status: "researching",
    notes: "Manufacturer financing option",
    loanAmount: 30000,
    rating: 4.1
  }
]

// Bank Loans Component
export function BankLoans() {
  const [loans] = useState<FinancingOption[]>(
    mockFinancingOptions.filter(option => option.type === 'loan' && option.lender.includes('Bank'))
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center mb-2">
          <Building2 className="mr-2 h-8 w-8" />
          Bank Loans
        </h1>
        <p className="text-muted-foreground">
          Traditional bank auto loans with competitive rates
        </p>
      </div>

      <div className="grid gap-6">
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle>Why Choose Bank Loans?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold">Lower Interest Rates</p>
                  <p className="text-muted-foreground">Often offer competitive APRs</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold">Pre-approval Available</p>
                  <p className="text-muted-foreground">Know your budget before shopping</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold">Established Relationships</p>
                  <p className="text-muted-foreground">Work with your existing bank</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          {loans.map((loan) => (
            <FinancingCard key={loan.id} option={loan} />
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Popular Bank Lenders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <BankOption 
                name="Chase Auto Finance"
                apr="3.9% - 8.9%"
                features={["Pre-qualification available", "Existing customer discounts", "Online account management"]}
                rating={4.3}
              />
              <BankOption 
                name="Bank of America Auto Loans"
                apr="4.1% - 9.2%"
                features={["Preferred Rewards discounts", "AutoPay rate reduction", "Mobile app access"]}
                rating={4.1}
              />
              <BankOption 
                name="Wells Fargo Auto Loans"
                apr="4.2% - 9.5%"
                features={["Relationship discounts", "Payment protection options", "Dealer partnerships"]}
                rating={4.0}
              />
              <BankOption 
                name="US Bank Auto Loans"
                apr="3.8% - 8.8%"
                features={["Fast approval process", "Flexible terms", "GAP coverage available"]}
                rating={4.2}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Credit Union Component
export function CreditUnion() {
  const [loans] = useState<FinancingOption[]>(
    mockFinancingOptions.filter(option => option.lender.includes('Credit Union'))
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center mb-2">
          <Handshake className="mr-2 h-8 w-8" />
          Credit Union Loans
        </h1>
        <p className="text-muted-foreground">
          Member-owned financial institutions often offering the best rates
        </p>
      </div>

      <div className="grid gap-6">
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle>Credit Union Advantages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start space-x-2">
                <TrendingUp className="h-4 w-4 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold">Lowest Rates</p>
                  <p className="text-muted-foreground">Typically 0.5-1% lower than banks</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Handshake className="h-4 w-4 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold">Member-Focused</p>
                  <p className="text-muted-foreground">Not-for-profit, member benefits</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold">Flexible Terms</p>
                  <p className="text-muted-foreground">Willing to work with members</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          {loans.map((loan) => (
            <FinancingCard key={loan.id} option={loan} />
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Find Local Credit Unions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Navy Federal Credit Union</h4>
                  <p className="text-sm text-muted-foreground mb-2">Military members and families</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-semibold">As low as 2.79% APR</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-primary mr-1" />
                      <span className="text-sm">4.8</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Alliant Credit Union</h4>
                  <p className="text-sm text-muted-foreground mb-2">Anyone can join with $5 donation</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-semibold">As low as 3.49% APR</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-primary mr-1" />
                      <span className="text-sm">4.6</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Find Credit Unions Near You
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Dealer Financing Component
export function DealerFinancing() {
  const [loans] = useState<FinancingOption[]>(
    mockFinancingOptions.filter(option => option.lender.includes('Services') || option.lender.includes('Financial'))
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center mb-2">
          <Building className="mr-2 h-8 w-8" />
          Dealer Financing
        </h1>
        <p className="text-muted-foreground">
          Financing options directly from car dealerships and manufacturers
        </p>
      </div>

      <div className="grid gap-6">
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle>Dealer Financing Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold">One-Stop Shopping</p>
                  <p className="text-muted-foreground">Handle car and financing together</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <DollarSign className="h-4 w-4 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold">Incentives & Rebates</p>
                  <p className="text-muted-foreground">Special manufacturer offers</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold">Quick Approval</p>
                  <p className="text-muted-foreground">Same-day financing decisions</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
          <div className="flex items-start space-x-2">
            <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h4 className="font-semibold text-primary">Pro Tip</h4>
              <p className="text-sm">Always get pre-approved from banks/credit unions first. Use this as leverage when negotiating dealer rates.</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {loans.map((loan) => (
            <FinancingCard key={loan.id} option={loan} />
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Manufacturer Financial Services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <ManufacturerOption 
                name="Honda Financial Services"
                currentOffers={["0.9% APR for 36 months", "$1,000 college graduate bonus"]}
                rating={4.2}
              />
              <ManufacturerOption 
                name="Toyota Financial Services"
                currentOffers={["1.9% APR for qualified buyers", "$500 lease loyalty bonus"]}
                rating={4.3}
              />
              <ManufacturerOption 
                name="Ford Credit"
                currentOffers={["0% APR for 60 months", "$750 first responder bonus"]}
                rating={4.1}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Lease Options Component
export function LeaseOptions() {
  const [leases] = useState<FinancingOption[]>(
    mockFinancingOptions.filter(option => option.type === 'lease')
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center mb-2">
          <FileText className="mr-2 h-8 w-8" />
          Lease Options
        </h1>
        <p className="text-muted-foreground">
          Lower monthly payments with the option to buy or return
        </p>
      </div>

      <div className="grid gap-6">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle>Lease Advantages</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                  <span>Lower monthly payments</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                  <span>Drive newer cars with latest features</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                  <span>Warranty coverage during lease term</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                  <span>No repair costs (usually)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Lease Considerations</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-2">
                  <AlertCircle className="h-4 w-4 text-primary mt-0.5" />
                  <span>Mileage restrictions (10k-15k/year)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <AlertCircle className="h-4 w-4 text-primary mt-0.5" />
                  <span>Wear and tear charges</span>
                </li>
                <li className="flex items-start space-x-2">
                  <AlertCircle className="h-4 w-4 text-primary mt-0.5" />
                  <span>No ownership/equity building</span>
                </li>
                <li className="flex items-start space-x-2">
                  <AlertCircle className="h-4 w-4 text-primary mt-0.5" />
                  <span>Early termination penalties</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {leases.map((lease) => (
            <LeaseCard key={lease.id} option={lease} />
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Lease vs Buy Calculator</CardTitle>
          </CardHeader>
          <CardContent>
            <LeaseVsBuyCalculator />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Pre-approvals Component
export function PreApprovals() {
  const [preApprovals] = useState<FinancingOption[]>(
    mockFinancingOptions.filter(option => option.status === 'pre-approved' || option.status === 'approved')
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center mb-2">
          <CheckCircle className="mr-2 h-8 w-8" />
          Pre-approvals
        </h1>
        <p className="text-muted-foreground">
          Your approved financing options ready to use
        </p>
      </div>

      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle>Benefits of Pre-approval</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div className="text-center p-4 bg-primary/5 rounded-lg">
              <DollarSign className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="font-semibold">Know Your Budget</p>
              <p className="text-muted-foreground">Shop within your approved amount</p>
            </div>
            <div className="text-center p-4 bg-primary/5 rounded-lg">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="font-semibold">Negotiating Power</p>
              <p className="text-muted-foreground">Act like a cash buyer</p>
            </div>
            <div className="text-center p-4 bg-primary/5 rounded-lg">
              <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="font-semibold">Faster Process</p>
              <p className="text-muted-foreground">Close deals quickly</p>
            </div>
            <div className="text-center p-4 bg-primary/5 rounded-lg">
              <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="font-semibold">Rate Protection</p>
              <p className="text-muted-foreground">Lock in your rate</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        {preApprovals.map((approval) => (
          <Card key={approval.id} className="border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    {approval.lender}
                  </h3>
                  <p className="text-sm text-muted-foreground capitalize">
                    {approval.type} • {approval.status}
                  </p>
                </div>
                <Badge className="bg-primary">
                  {approval.status === 'pre-approved' ? 'Pre-approved' : 'Approved'}
                </Badge>
              </div>

              <div className="grid md:grid-cols-4 gap-4 mb-4">
                <div className="text-center p-3 bg-background rounded-lg">
                  <p className="text-sm text-muted-foreground">APR</p>
                  <p className="text-lg font-bold text-primary">{approval.apr}%</p>
                </div>
                <div className="text-center p-3 bg-background rounded-lg">
                  <p className="text-sm text-muted-foreground">Term</p>
                  <p className="text-lg font-bold">{approval.term} months</p>
                </div>
                <div className="text-center p-3 bg-background rounded-lg">
                  <p className="text-sm text-muted-foreground">Monthly Payment</p>
                  <p className="text-lg font-bold">${approval.monthlyPayment}</p>
                </div>
                <div className="text-center p-3 bg-background rounded-lg">
                  <p className="text-sm text-muted-foreground">Max Amount</p>
                  <p className="text-lg font-bold">${approval.loanAmount?.toLocaleString()}</p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  {approval.expirationDate && (
                    <p>Expires: {approval.expirationDate}</p>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button size="sm">
                    <Car className="mr-1 h-3 w-3" />
                    Use This Approval
                  </Button>
                  <Button size="sm" variant="outline">
                    <FileText className="mr-1 h-3 w-3" />
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {preApprovals.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <CheckCircle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No pre-approvals yet</h3>
            <p className="text-muted-foreground mb-4">Apply for pre-approval to strengthen your negotiating position</p>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Apply for Pre-approval
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

// Shared Components
function FinancingCard({ option }: { option: FinancingOption }) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': case 'pre-approved': return 'bg-primary/10 text-primary'
      case 'applied': return 'bg-primary/10 text-primary'
      case 'denied': return 'bg-destructive/10 text-destructive'
      default: return 'bg-muted text-muted-foreground'
    }
  }

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{option.lender}</CardTitle>
          <Badge className={getStatusColor(option.status)}>
            {option.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-muted-foreground">APR:</span>
            <p className="font-semibold text-primary">{option.apr}%</p>
          </div>
          <div>
            <span className="text-muted-foreground">Term:</span>
            <p className="font-semibold">{option.term} months</p>
          </div>
          <div>
            <span className="text-muted-foreground">Monthly:</span>
            <p className="font-semibold">${option.monthlyPayment}</p>
          </div>
          <div>
            <span className="text-muted-foreground">Total Cost:</span>
            <p className="font-semibold">${option.totalCost.toLocaleString()}</p>
          </div>
        </div>
        
        {option.rating && (
          <div className="flex items-center">
            <Star className="h-4 w-4 text-primary mr-1" />
            <span className="text-sm">{option.rating}/5</span>
          </div>
        )}

        <div className="flex gap-2 pt-2">
          <Button size="sm" variant="outline">
            <Phone className="mr-1 h-3 w-3" />
            Contact
          </Button>
          <Button size="sm" variant="outline">
            <Calculator className="mr-1 h-3 w-3" />
            Calculate
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function LeaseCard({ option }: { option: FinancingOption }) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg">{option.lender}</CardTitle>
        <p className="text-sm text-muted-foreground">Lease Option</p>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-center p-4 bg-primary/5 rounded-lg">
          <p className="text-2xl font-bold text-primary">${option.monthlyPayment}/mo</p>
          <p className="text-sm text-muted-foreground">{option.term} month lease</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-muted-foreground">Down Payment:</span>
            <p className="font-semibold">${option.downPayment.toLocaleString()}</p>
          </div>
          <div>
            <span className="text-muted-foreground">Total Cost:</span>
            <p className="font-semibold">${option.totalCost.toLocaleString()}</p>
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Button size="sm" variant="outline">
            <Calculator className="mr-1 h-3 w-3" />
            Lease Calculator
          </Button>
          <Button size="sm" variant="outline">
            <ExternalLink className="mr-1 h-3 w-3" />
            Apply
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function BankOption({ name, apr, features, rating }: { name: string; apr: string; features: string[]; rating: number }) {
  return (
    <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h4 className="font-semibold">{name}</h4>
        <div className="flex items-center">
          <Star className="h-4 w-4 text-primary mr-1" />
          <span className="text-sm">{rating}</span>
        </div>
      </div>
      <p className="text-primary font-semibold mb-3">{apr} APR</p>
      <ul className="space-y-1 text-sm text-muted-foreground">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="h-3 w-3 text-primary mr-2 mt-0.5 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      <Button size="sm" className="w-full mt-3">
        <ExternalLink className="mr-1 h-3 w-3" />
        Apply Now
      </Button>
    </div>
  )
}

function ManufacturerOption({ name, currentOffers, rating }: { name: string; currentOffers: string[]; rating: number }) {
  return (
    <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h4 className="font-semibold">{name}</h4>
        <div className="flex items-center">
          <Star className="h-4 w-4 text-primary mr-1" />
          <span className="text-sm">{rating}</span>
        </div>
      </div>
      <div className="space-y-2 mb-3">
        {currentOffers.map((offer, index) => (
          <div key={index} className="text-sm bg-primary/5 px-2 py-1 rounded">
            {offer}
          </div>
        ))}
      </div>
      <Button size="sm" className="w-full">
        <ExternalLink className="mr-1 h-3 w-3" />
        View Offers
      </Button>
    </div>
  )
}

function LeaseVsBuyCalculator() {
  const [calc, setCalc] = useState({
    vehiclePrice: 30000,
    downPayment: 3000,
    loanTerm: 60,
    loanRate: 4.5,
    leaseTerm: 36,
    leaseRate: 2.9,
    leaseDown: 2000
  })

  // Loan calculations
  const loanAmount = calc.vehiclePrice - calc.downPayment
  const monthlyLoanPayment = loanAmount > 0 && calc.loanRate > 0 
    ? (loanAmount * (calc.loanRate / 100 / 12)) / (1 - Math.pow(1 + calc.loanRate / 100 / 12, -calc.loanTerm))
    : 0

  // Lease calculations (simplified)
  const monthlyLeasePayment = (calc.vehiclePrice * 0.6) / calc.leaseTerm + calc.leaseDown / calc.leaseTerm

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div>
        <h4 className="font-semibold mb-4">Vehicle Details</h4>
        <div className="space-y-3">
          <div>
            <Label>Vehicle Price</Label>
            <Input
              type="number"
              value={calc.vehiclePrice}
              onChange={(e) => setCalc(prev => ({ ...prev, vehiclePrice: parseInt(e.target.value) || 0 }))}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label>Down Payment (Buy)</Label>
              <Input
                type="number"
                value={calc.downPayment}
                onChange={(e) => setCalc(prev => ({ ...prev, downPayment: parseInt(e.target.value) || 0 }))}
              />
            </div>
            <div>
              <Label>Down Payment (Lease)</Label>
              <Input
                type="number"
                value={calc.leaseDown}
                onChange={(e) => setCalc(prev => ({ ...prev, leaseDown: parseInt(e.target.value) || 0 }))}
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-4">Comparison</h4>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <p className="text-sm text-muted-foreground">Buy Monthly</p>
              <p className="text-xl font-bold text-primary">${monthlyLoanPayment.toFixed(0)}</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <p className="text-sm text-muted-foreground">Lease Monthly</p>
              <p className="text-xl font-bold text-primary">${monthlyLeasePayment.toFixed(0)}</p>
            </div>
          </div>
          <div className="text-center p-4 bg-primary/5 rounded-lg">
            <p className="text-sm text-muted-foreground">Monthly Savings (Lease)</p>
            <p className="text-lg font-bold text-primary">
              ${(monthlyLoanPayment - monthlyLeasePayment).toFixed(0)}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}