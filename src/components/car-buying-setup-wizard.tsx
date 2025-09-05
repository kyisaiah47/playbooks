"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { CarBuyingData } from "@/contexts/car-buying-context"
import { Car, ArrowLeft, ArrowRight, Check, MapPin, DollarSign, Target, User, Settings, Calendar } from "lucide-react"

interface CarBuyingSetupWizardProps {
  isOpen: boolean
  onClose: () => void
  onComplete: (data: CarBuyingData) => void
  initialData?: CarBuyingData
}

const formSchema = z.object({
  vehicleType: z.enum(["sedan", "suv", "truck", "coupe", "convertible", "hatchback", "wagon", "minivan"]),
  fuelType: z.enum(["gasoline", "hybrid", "electric", "diesel", "plug-in-hybrid"]),
  transmission: z.enum(["manual", "automatic", "cvt", "any"]),
  driveType: z.enum(["fwd", "rwd", "awd", "4wd", "any"]),
  budgetMin: z.number().min(0, "Minimum budget must be positive"),
  budgetMax: z.number().min(0, "Maximum budget must be positive"),
  currency: z.string(),
  financingType: z.enum(["cash", "loan", "lease", "undecided"]),
  downPayment: z.number().min(0, "Down payment must be positive"),
  monthlyPaymentMax: z.number().min(0, "Monthly payment must be positive"),
  loanTermMonths: z.number().min(12, "Loan term must be at least 12 months"),
  creditScore: z.number().min(300, "Credit score must be at least 300").max(850, "Credit score cannot exceed 850"),
  yearMin: z.number().min(1990, "Year must be 1990 or later"),
  yearMax: z.number().min(1990, "Year must be 1990 or later"),
  mileageMax: z.number().min(0, "Maximum mileage must be positive"),
  engineSizeMin: z.number().min(1.0, "Engine size must be at least 1.0L"),
  engineSizeMax: z.number().min(1.0, "Engine size must be at least 1.0L"),
  mpgMin: z.number().min(10, "MPG must be at least 10"),
  seatingCapacity: z.number().min(2, "Seating capacity must be at least 2"),
  requiredFeatures: z.array(z.string()),
  preferredFeatures: z.array(z.string()),
  safetyRating: z.number().min(1, "Safety rating must be at least 1").max(5, "Safety rating cannot exceed 5"),
  warrantyImportance: z.enum(["low", "medium", "high"]),
  searchRadius: z.number().min(5, "Search radius must be at least 5 miles"),
  preferredDealerships: z.array(z.string()),
  avoidDealerships: z.array(z.string()),
  locationZipCode: z.string().min(5, "ZIP code is required"),
  willingToTravel: z.boolean(),
  maxTravelDistance: z.number().min(0, "Travel distance must be positive"),
  purchaseTimeline: z.enum(["1-week", "1-month", "3-months", "6-months", "no-rush"]),
  currentVehicleStatus: z.enum(["none", "trade-in", "selling-private", "keeping"]),
  tradeInValue: z.number().min(0, "Trade-in value must be positive"),
  urgencyLevel: z.enum(["low", "medium", "high", "emergency"]),
  preferredBrands: z.array(z.string()),
  avoidBrands: z.array(z.string()),
  specificModels: z.array(z.string()),
  newVsUsed: z.enum(["new-only", "used-only", "both", "certified-pre-owned"]),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  licenseNumber: z.string().optional(),
  insuranceCompany: z.string().optional(),
})

const vehicleFeatures = [
  "Air Conditioning",
  "Backup Camera",
  "Bluetooth",
  "Heated Seats",
  "Sunroof",
  "Navigation",
  "Leather Seats",
  "Automatic Transmission",
  "All-Wheel Drive",
  "Cruise Control",
  "Keyless Entry",
  "Power Windows",
  "Power Steering",
  "Anti-lock Brakes",
  "Airbags",
  "Parking Sensors"
]

const carBrands = [
  "Toyota", "Honda", "Ford", "Chevrolet", "Nissan", "BMW", "Mercedes-Benz", 
  "Audi", "Volkswagen", "Hyundai", "Kia", "Mazda", "Subaru", "Lexus", 
  "Acura", "Infiniti", "Cadillac", "Lincoln", "Buick", "GMC", "Ram", 
  "Jeep", "Chrysler", "Dodge", "Volvo", "Jaguar", "Land Rover", "Porsche"
]

export function CarBuyingSetupWizard({ isOpen, onClose, onComplete, initialData }: CarBuyingSetupWizardProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [requiredFeatures, setRequiredFeatures] = useState<string[]>(initialData?.requiredFeatures || [])
  const [preferredFeatures, setPreferredFeatures] = useState<string[]>(initialData?.preferredFeatures || [])
  const [preferredBrands, setPreferredBrands] = useState<string[]>(initialData?.preferredBrands || [])
  const [avoidBrands, setAvoidBrands] = useState<string[]>(initialData?.avoidBrands || [])
  const [specificModels, setSpecificModels] = useState<string[]>(initialData?.specificModels || [])
  const [preferredDealerships, setPreferredDealerships] = useState<string[]>(initialData?.preferredDealerships || [])
  const [avoidDealerships, setAvoidDealerships] = useState<string[]>(initialData?.avoidDealerships || [])
  const totalSteps = 8

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      vehicleType: initialData?.vehicleType || "sedan",
      fuelType: initialData?.fuelType || "gasoline",
      transmission: initialData?.transmission || "automatic",
      driveType: initialData?.driveType || "any",
      budgetMin: initialData?.budgetMin || 15000,
      budgetMax: initialData?.budgetMax || 35000,
      currency: initialData?.currency || "USD",
      financingType: initialData?.financingType || "undecided",
      downPayment: initialData?.downPayment || 5000,
      monthlyPaymentMax: initialData?.monthlyPaymentMax || 500,
      loanTermMonths: initialData?.loanTermMonths || 60,
      creditScore: initialData?.creditScore || 700,
      yearMin: initialData?.yearMin || 2018,
      yearMax: initialData?.yearMax || 2024,
      mileageMax: initialData?.mileageMax || 50000,
      engineSizeMin: initialData?.engineSizeMin || 1.5,
      engineSizeMax: initialData?.engineSizeMax || 4.0,
      mpgMin: initialData?.mpgMin || 25,
      seatingCapacity: initialData?.seatingCapacity || 5,
      requiredFeatures: initialData?.requiredFeatures || [],
      preferredFeatures: initialData?.preferredFeatures || [],
      safetyRating: initialData?.safetyRating || 4,
      warrantyImportance: initialData?.warrantyImportance || "medium",
      searchRadius: initialData?.searchRadius || 50,
      preferredDealerships: initialData?.preferredDealerships || [],
      avoidDealerships: initialData?.avoidDealerships || [],
      locationZipCode: initialData?.locationZipCode || "",
      willingToTravel: initialData?.willingToTravel ?? true,
      maxTravelDistance: initialData?.maxTravelDistance || 100,
      purchaseTimeline: initialData?.purchaseTimeline || "3-months",
      currentVehicleStatus: initialData?.currentVehicleStatus || "none",
      tradeInValue: initialData?.tradeInValue || 0,
      urgencyLevel: initialData?.urgencyLevel || "medium",
      preferredBrands: initialData?.preferredBrands || [],
      avoidBrands: initialData?.avoidBrands || [],
      specificModels: initialData?.specificModels || [],
      newVsUsed: initialData?.newVsUsed || "both",
      firstName: initialData?.firstName || "",
      lastName: initialData?.lastName || "",
      email: initialData?.email || "",
      phone: initialData?.phone || "",
      licenseNumber: initialData?.licenseNumber || "",
      insuranceCompany: initialData?.insuranceCompany || "",
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const data: CarBuyingData = {
      ...values,
      licenseNumber: values.licenseNumber || "",
      insuranceCompany: values.insuranceCompany || "",
      requiredFeatures,
      preferredFeatures,
      preferredBrands,
      avoidBrands,
      specificModels,
      preferredDealerships,
      avoidDealerships,
    }
    onComplete(data)
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const toggleArrayItem = (array: string[], setArray: (items: string[]) => void, item: string) => {
    if (array.includes(item)) {
      setArray(array.filter(i => i !== item))
    } else {
      setArray([...array, item])
    }
  }

  const addArrayItem = (array: string[], setArray: (items: string[]) => void, item: string) => {
    if (item.trim() && !array.includes(item.trim())) {
      setArray([...array, item.trim()])
    }
  }

  const removeArrayItem = (array: string[], setArray: (items: string[]) => void, item: string) => {
    setArray(array.filter(i => i !== item))
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Personal Information</h3>
              <p className="text-sm text-muted-foreground">
                Tell us about yourself and your car buying goals
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john.doe@example.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="(555) 123-4567" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="locationZipCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ZIP Code</FormLabel>
                  <FormControl>
                    <Input placeholder="12345" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )

      case 2:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Vehicle Preferences</h3>
              <p className="text-sm text-muted-foreground">
                What type of vehicle are you looking for?
              </p>
            </div>

            <FormField
              control={form.control}
              name="vehicleType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vehicle Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select vehicle type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="sedan">Sedan</SelectItem>
                      <SelectItem value="suv">SUV</SelectItem>
                      <SelectItem value="truck">Truck</SelectItem>
                      <SelectItem value="coupe">Coupe</SelectItem>
                      <SelectItem value="convertible">Convertible</SelectItem>
                      <SelectItem value="hatchback">Hatchback</SelectItem>
                      <SelectItem value="wagon">Wagon</SelectItem>
                      <SelectItem value="minivan">Minivan</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fuelType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fuel Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select fuel type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="gasoline">Gasoline</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                      <SelectItem value="electric">Electric</SelectItem>
                      <SelectItem value="diesel">Diesel</SelectItem>
                      <SelectItem value="plug-in-hybrid">Plug-in Hybrid</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="transmission"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Transmission</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select transmission" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="automatic">Automatic</SelectItem>
                        <SelectItem value="manual">Manual</SelectItem>
                        <SelectItem value="cvt">CVT</SelectItem>
                        <SelectItem value="any">Any</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="driveType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Drive Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select drive type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="fwd">Front-Wheel Drive</SelectItem>
                        <SelectItem value="rwd">Rear-Wheel Drive</SelectItem>
                        <SelectItem value="awd">All-Wheel Drive</SelectItem>
                        <SelectItem value="4wd">4-Wheel Drive</SelectItem>
                        <SelectItem value="any">Any</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="newVsUsed"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New vs Used</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select preference" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="new-only">New Only</SelectItem>
                      <SelectItem value="used-only">Used Only</SelectItem>
                      <SelectItem value="certified-pre-owned">Certified Pre-Owned</SelectItem>
                      <SelectItem value="both">Both New and Used</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )

      case 3:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Budget & Financing</h3>
              <p className="text-sm text-muted-foreground">
                Set your budget and financing preferences
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="budgetMin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Minimum Budget</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="15000"
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value))}
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
                        placeholder="35000"
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="financingType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Financing Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select financing type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="cash">Cash Purchase</SelectItem>
                      <SelectItem value="loan">Auto Loan</SelectItem>
                      <SelectItem value="lease">Lease</SelectItem>
                      <SelectItem value="undecided">Undecided</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="downPayment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Down Payment</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="5000"
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="monthlyPaymentMax"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Max Monthly Payment</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="500"
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value))}
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
                name="loanTermMonths"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Loan Term (Months)</FormLabel>
                    <Select onValueChange={(value) => field.onChange(parseInt(value))} defaultValue={field.value.toString()}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="24">24 months</SelectItem>
                        <SelectItem value="36">36 months</SelectItem>
                        <SelectItem value="48">48 months</SelectItem>
                        <SelectItem value="60">60 months</SelectItem>
                        <SelectItem value="72">72 months</SelectItem>
                        <SelectItem value="84">84 months</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="creditScore"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Credit Score</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min="300"
                        max="850"
                        placeholder="700"
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Vehicle Specifications</h3>
              <p className="text-sm text-muted-foreground">
                Define your technical requirements
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="yearMin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Minimum Year</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min="1990"
                        max="2024"
                        placeholder="2018"
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="yearMax"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Maximum Year</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min="1990"
                        max="2024"
                        placeholder="2024"
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="mileageMax"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Maximum Mileage</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="50000"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="mpgMin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Min MPG</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="25"
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="seatingCapacity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Seating</FormLabel>
                    <Select onValueChange={(value) => field.onChange(parseInt(value))} defaultValue={field.value.toString()}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="2">2 seats</SelectItem>
                        <SelectItem value="4">4 seats</SelectItem>
                        <SelectItem value="5">5 seats</SelectItem>
                        <SelectItem value="7">7 seats</SelectItem>
                        <SelectItem value="8">8+ seats</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="safetyRating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Min Safety Rating</FormLabel>
                    <Select onValueChange={(value) => field.onChange(parseInt(value))} defaultValue={field.value.toString()}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="3">3 stars</SelectItem>
                        <SelectItem value="4">4 stars</SelectItem>
                        <SelectItem value="5">5 stars</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="engineSizeMin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Min Engine Size (L)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.1"
                        placeholder="1.5"
                        {...field}
                        onChange={(e) => field.onChange(parseFloat(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="engineSizeMax"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Max Engine Size (L)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.1"
                        placeholder="4.0"
                        {...field}
                        onChange={(e) => field.onChange(parseFloat(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold">Required & Preferred Features</h3>
              <p className="text-sm text-muted-foreground">
                Select features that are must-haves vs nice-to-haves
              </p>
            </div>

            <div>
              <FormLabel>Required Features</FormLabel>
              <FormDescription className="mb-3">
                Features the vehicle must have
              </FormDescription>
              <div className="grid grid-cols-2 gap-2">
                {vehicleFeatures.map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <Checkbox
                      checked={requiredFeatures.includes(feature)}
                      onCheckedChange={() => toggleArrayItem(requiredFeatures, setRequiredFeatures, feature)}
                    />
                    <label className="text-sm">{feature}</label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <FormLabel>Preferred Features (Optional)</FormLabel>
              <FormDescription className="mb-3">
                Features you'd like but aren't deal-breakers
              </FormDescription>
              <div className="grid grid-cols-2 gap-2">
                {vehicleFeatures.filter(f => !requiredFeatures.includes(f)).map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <Checkbox
                      checked={preferredFeatures.includes(feature)}
                      onCheckedChange={() => toggleArrayItem(preferredFeatures, setPreferredFeatures, feature)}
                    />
                    <label className="text-sm">{feature}</label>
                  </div>
                ))}
              </div>
            </div>

            <FormField
              control={form.control}
              name="warrantyImportance"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Warranty Importance</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="How important is warranty?" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="low">Low - Not a major factor</SelectItem>
                      <SelectItem value="medium">Medium - Somewhat important</SelectItem>
                      <SelectItem value="high">High - Very important</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )

      case 6:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold">Brand & Model Preferences</h3>
              <p className="text-sm text-muted-foreground">
                Tell us about your brand preferences
              </p>
            </div>

            <div>
              <FormLabel>Preferred Brands</FormLabel>
              <FormDescription className="mb-3">
                Select brands you prefer or trust
              </FormDescription>
              <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto">
                {carBrands.map((brand) => (
                  <div key={brand} className="flex items-center space-x-2">
                    <Checkbox
                      checked={preferredBrands.includes(brand)}
                      onCheckedChange={() => toggleArrayItem(preferredBrands, setPreferredBrands, brand)}
                    />
                    <label className="text-sm">{brand}</label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <FormLabel>Brands to Avoid (Optional)</FormLabel>
              <FormDescription className="mb-3">
                Select brands you prefer to avoid
              </FormDescription>
              <div className="grid grid-cols-3 gap-2 max-h-32 overflow-y-auto">
                {carBrands.filter(b => !preferredBrands.includes(b)).map((brand) => (
                  <div key={brand} className="flex items-center space-x-2">
                    <Checkbox
                      checked={avoidBrands.includes(brand)}
                      onCheckedChange={() => toggleArrayItem(avoidBrands, setAvoidBrands, brand)}
                    />
                    <label className="text-sm">{brand}</label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <FormLabel>Specific Models (Optional)</FormLabel>
              <FormDescription className="mb-3">
                Add specific car models you're interested in
              </FormDescription>
              <div className="flex flex-wrap gap-2 mb-2">
                {specificModels.map((model, index) => (
                  <div key={index} className="flex items-center bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm">
                    {model}
                    <button
                      type="button"
                      onClick={() => removeArrayItem(specificModels, setSpecificModels, model)}
                      className="ml-2 text-muted-foreground hover:text-foreground"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="e.g., Honda Accord, Toyota Camry"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault()
                      addArrayItem(specificModels, setSpecificModels, e.currentTarget.value)
                      e.currentTarget.value = ''
                    }
                  }}
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={(e) => {
                    const input = e.currentTarget.previousElementSibling as HTMLInputElement
                    addArrayItem(specificModels, setSpecificModels, input.value)
                    input.value = ''
                  }}
                >
                  Add
                </Button>
              </div>
            </div>
          </div>
        )

      case 7:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Search Location & Dealerships</h3>
              <p className="text-sm text-muted-foreground">
                Configure your search area and dealership preferences
              </p>
            </div>

            <FormField
              control={form.control}
              name="searchRadius"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Search Radius (miles)</FormLabel>
                  <Select onValueChange={(value) => field.onChange(parseInt(value))} defaultValue={field.value.toString()}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="5">5 miles</SelectItem>
                      <SelectItem value="10">10 miles</SelectItem>
                      <SelectItem value="25">25 miles</SelectItem>
                      <SelectItem value="50">50 miles</SelectItem>
                      <SelectItem value="100">100 miles</SelectItem>
                      <SelectItem value="250">250 miles</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="willingToTravel"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Willing to travel for the right car
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="maxTravelDistance"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Max Travel Distance (miles)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="100"
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormLabel>Preferred Dealerships (Optional)</FormLabel>
              <FormDescription className="mb-3">
                Add dealerships you prefer to work with
              </FormDescription>
              <div className="flex flex-wrap gap-2 mb-2">
                {preferredDealerships.map((dealer, index) => (
                  <div key={index} className="flex items-center bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm">
                    {dealer}
                    <button
                      type="button"
                      onClick={() => removeArrayItem(preferredDealerships, setPreferredDealerships, dealer)}
                      className="ml-2 text-muted-foreground hover:text-foreground"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="e.g., ABC Honda, XYZ Toyota"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault()
                      addArrayItem(preferredDealerships, setPreferredDealerships, e.currentTarget.value)
                      e.currentTarget.value = ''
                    }
                  }}
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={(e) => {
                    const input = e.currentTarget.previousElementSibling as HTMLInputElement
                    addArrayItem(preferredDealerships, setPreferredDealerships, input.value)
                    input.value = ''
                  }}
                >
                  Add
                </Button>
              </div>
            </div>

            <div>
              <FormLabel>Dealerships to Avoid (Optional)</FormLabel>
              <FormDescription className="mb-3">
                Add dealerships you prefer to avoid
              </FormDescription>
              <div className="flex flex-wrap gap-2 mb-2">
                {avoidDealerships.map((dealer, index) => (
                  <div key={index} className="flex items-center bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm">
                    {dealer}
                    <button
                      type="button"
                      onClick={() => removeArrayItem(avoidDealerships, setAvoidDealerships, dealer)}
                      className="ml-2 text-muted-foreground hover:text-foreground"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Dealership name"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault()
                      addArrayItem(avoidDealerships, setAvoidDealerships, e.currentTarget.value)
                      e.currentTarget.value = ''
                    }
                  }}
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={(e) => {
                    const input = e.currentTarget.previousElementSibling as HTMLInputElement
                    addArrayItem(avoidDealerships, setAvoidDealerships, input.value)
                    input.value = ''
                  }}
                >
                  Add
                </Button>
              </div>
            </div>
          </div>
        )

      case 8:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Timeline & Current Vehicle</h3>
              <p className="text-sm text-muted-foreground">
                When do you want to buy and what about your current car?
              </p>
            </div>

            <FormField
              control={form.control}
              name="purchaseTimeline"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Purchase Timeline</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="When do you want to buy?" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1-week">Within 1 week</SelectItem>
                      <SelectItem value="1-month">Within 1 month</SelectItem>
                      <SelectItem value="3-months">Within 3 months</SelectItem>
                      <SelectItem value="6-months">Within 6 months</SelectItem>
                      <SelectItem value="no-rush">No rush / Just browsing</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="urgencyLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Urgency Level</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="How urgent is this purchase?" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="low">Low - Taking my time</SelectItem>
                      <SelectItem value="medium">Medium - Moderately urgent</SelectItem>
                      <SelectItem value="high">High - Need soon</SelectItem>
                      <SelectItem value="emergency">Emergency - Need ASAP</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="currentVehicleStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Vehicle Status</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="What about your current car?" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="none">Don't have a vehicle</SelectItem>
                      <SelectItem value="trade-in">Will trade in</SelectItem>
                      <SelectItem value="selling-private">Will sell privately</SelectItem>
                      <SelectItem value="keeping">Keeping current vehicle</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tradeInValue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Estimated Trade-in Value (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="0"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                    />
                  </FormControl>
                  <FormDescription>
                    Estimated value if trading in your current vehicle
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="licenseNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Driver's License # (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="DL123456789" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="insuranceCompany"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Insurance Company (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., State Farm, Geico" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Car Buying Setup</DialogTitle>
          <DialogDescription>
            Let's set up your personalized car buying workspace
          </DialogDescription>
        </DialogHeader>

        <div className="mb-4">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Step {currentStep} of {totalSteps}</span>
            <span>{Math.round((currentStep / totalSteps) * 100)}% complete</span>
          </div>
          <Progress value={(currentStep / totalSteps) * 100} className="h-2" />
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                <Button type="submit" className="ml-auto">
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
  )
}