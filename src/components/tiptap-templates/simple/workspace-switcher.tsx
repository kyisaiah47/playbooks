"use client"

import * as React from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Moon, Layout, CheckSquare } from "lucide-react"

interface WorkspaceSwitcherProps {
  currentMode?: 'template' | 'reflection' | 'master'
  onSwitchMode?: (mode: 'guide' | 'reflection' | 'master') => void
}

export function WorkspaceSwitcher({ currentMode = 'reflection', onSwitchMode }: WorkspaceSwitcherProps) {
  const getIcon = (mode: string) => {
    switch (mode) {
      case 'template':
        return <Layout className="w-4 h-4" />
      case 'reflection':
        return <Moon className="w-4 h-4" />
      case 'master':
        return <CheckSquare className="w-4 h-4" />
      default:
        return <Moon className="w-4 h-4" />
    }
  }

  const getLabel = (mode: string) => {
    switch (mode) {
      case 'template':
        return 'Guide Workspace'
      case 'reflection':
        return 'Reflection Mode'
      case 'master':
        return 'Life OS'
      default:
        return 'Reflection Mode'
    }
  }

  return (
    <Select value={currentMode} onValueChange={onSwitchMode}>
      <SelectTrigger className="w-[200px] bg-transparent border-gray-600 text-white">
        <div className="flex items-center gap-2">
          {getIcon(currentMode)}
          <span>{getLabel(currentMode)}</span>
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="template">
          <div className="flex items-center gap-2">
            <Layout className="w-4 h-4" />
            <span>Guide Workspace</span>
          </div>
        </SelectItem>
        <SelectItem value="reflection">
          <div className="flex items-center gap-2">
            <Moon className="w-4 h-4" />
            <span>Reflection Mode</span>
          </div>
        </SelectItem>
        <SelectItem value="master" disabled>
          <div className="flex items-center gap-2 opacity-50">
            <CheckSquare className="w-4 h-4" />
            <span>Life OS</span>
            <span className="text-xs text-muted-foreground ml-auto">Coming Soon</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  )
}