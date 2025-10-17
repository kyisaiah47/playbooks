"use client"

import { useToast } from "@/components/ui/toast"

export function Toaster() {
  const { ToastContainer } = useToast()
  return <ToastContainer />
}
