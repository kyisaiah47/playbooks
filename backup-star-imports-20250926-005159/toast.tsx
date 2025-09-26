"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { X, Check, Star, Heart } from "lucide-react"

interface ToastProps {
  message: string
  type?: "success" | "info" | "warning" | "error"
  icon?: "star" | "heart" | "check" | "none"
  onClose: () => void
  duration?: number
}

export function Toast({
  message,
  type = "success",
  icon = "check",
  onClose,
  duration = 3000
}: ToastProps) {
  React.useEffect(() => {
    const timer = setTimeout(onClose, duration)
    return () => clearTimeout(timer)
  }, [onClose, duration])

  const typeStyles = {
    success: "bg-green-50 border-green-200 text-green-800",
    info: "bg-blue-50 border-blue-200 text-blue-800",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
    error: "bg-red-50 border-red-200 text-red-800"
  }

  const IconComponent = {
    star: Star,
    heart: Heart,
    check: Check,
    none: null
  }[icon]

  return (
    <div className={cn(
      "fixed top-4 right-4 flex items-center gap-3 px-4 py-3 rounded-lg border shadow-lg z-50",
      "animate-slide-in-right",
      typeStyles[type]
    )}>
      {IconComponent && (
        <IconComponent className={cn(
          "w-4 h-4",
          icon === "star" && type === "success" && "fill-yellow-400 text-yellow-500",
          icon === "heart" && type === "success" && "fill-red-400 text-red-500"
        )} />
      )}
      <span className="text-sm font-medium">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}

// Hook for managing toasts
export function useToast() {
  const [toasts, setToasts] = React.useState<Array<{
    id: string
    message: string
    type?: "success" | "info" | "warning" | "error"
    icon?: "star" | "heart" | "check" | "none"
  }>>([])

  const addToast = React.useCallback((toast: Omit<ToastProps, 'onClose'>) => {
    const id = Math.random().toString(36).substr(2, 9)
    setToasts(prev => [...prev, { id, ...toast }])
  }, [])

  const removeToast = React.useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }, [])

  const showSuccess = React.useCallback((message: string, icon?: "star" | "heart" | "check") => {
    addToast({ message, type: "success", icon })
  }, [addToast])

  const ToastContainer = React.useCallback(() => (
    <>
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </>
  ), [toasts, removeToast])

  return { addToast, showSuccess, ToastContainer }
}