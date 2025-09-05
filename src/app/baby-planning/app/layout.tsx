import { BabyPlanningProvider } from "@/contexts/baby-planning-context"

export default function BabyPlanningAppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <BabyPlanningProvider>
      {children}
    </BabyPlanningProvider>
  )
}