import { SmallBusinessProvider } from "@/contexts/small-business-context"

export default function SmallBusinessLaunchAppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SmallBusinessProvider>
      {children}
    </SmallBusinessProvider>
  )
}