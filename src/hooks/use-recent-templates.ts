"use client"

import { useState, useEffect } from "react"

export interface RecentTemplate {
  id: string
  name: string
  url: string
  category: string
  lastAccessed: number
  type: "template" | "article"
}

const STORAGE_KEY = "templata-recent-items"
const MAX_RECENT_ITEMS = 5

export function useRecentTemplates() {
  const [recentItems, setRecentItems] = useState<RecentTemplate[]>([])

  // Load recent items from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const items = JSON.parse(stored)
        // Sort by last accessed and limit to max items
        const sortedItems = items
          .sort((a: RecentTemplate, b: RecentTemplate) => b.lastAccessed - a.lastAccessed)
          .slice(0, MAX_RECENT_ITEMS)
        setRecentItems(sortedItems)
      }
    } catch (error) {
      console.error("Failed to load recent items:", error)
    }
  }, [])

  // Add item to recent list
  const addRecentItem = (item: Omit<RecentTemplate, "lastAccessed">) => {
    const newItem: RecentTemplate = {
      ...item,
      lastAccessed: Date.now()
    }

    setRecentItems(prev => {
      // Remove existing item if present
      const filtered = prev.filter(existingItem => existingItem.id !== item.id)

      // Add new item at the beginning
      const updated = [newItem, ...filtered].slice(0, MAX_RECENT_ITEMS)

      // Save to localStorage
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      } catch (error) {
        console.error("Failed to save recent items:", error)
      }

      return updated
    })
  }

  // Clear all recent items
  const clearRecentItems = () => {
    setRecentItems([])
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch (error) {
      console.error("Failed to clear recent items:", error)
    }
  }

  // Remove specific item
  const removeRecentItem = (id: string) => {
    setRecentItems(prev => {
      const updated = prev.filter(item => item.id !== id)
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      } catch (error) {
        console.error("Failed to update recent items:", error)
      }
      return updated
    })
  }

  return {
    recentItems,
    addRecentItem,
    clearRecentItems,
    removeRecentItem,
    hasRecentItems: recentItems.length > 0
  }
}