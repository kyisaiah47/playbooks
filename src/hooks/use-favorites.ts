"use client"

import { useState, useEffect } from "react"

export interface FavoriteItem {
  id: string
  name: string
  url: string
  category: string
  type: "template" | "article"
  addedAt: number
}

const STORAGE_KEY = "templata-favorites"

export function useFavorites() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([])

  // Load favorites from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const items = JSON.parse(stored)
        setFavorites(items)
      }
    } catch (error) {
      console.error("Failed to load favorites:", error)
    }
  }, [])

  // Check if item is favorited
  const isFavorited = (id: string): boolean => {
    return favorites.some(item => item.id === id)
  }

  // Toggle favorite status
  const toggleFavorite = (item: Omit<FavoriteItem, "addedAt">) => {
    setFavorites(prev => {
      let updated: FavoriteItem[]

      if (prev.some(existingItem => existingItem.id === item.id)) {
        // Remove from favorites
        updated = prev.filter(existingItem => existingItem.id !== item.id)
      } else {
        // Add to favorites
        const newItem: FavoriteItem = {
          ...item,
          addedAt: Date.now()
        }
        updated = [newItem, ...prev]
      }

      // Save to localStorage
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      } catch (error) {
        console.error("Failed to save favorites:", error)
      }

      return updated
    })
  }

  // Remove from favorites
  const removeFavorite = (id: string) => {
    setFavorites(prev => {
      const updated = prev.filter(item => item.id !== id)
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      } catch (error) {
        console.error("Failed to update favorites:", error)
      }
      return updated
    })
  }

  // Clear all favorites
  const clearFavorites = () => {
    setFavorites([])
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch (error) {
      console.error("Failed to clear favorites:", error)
    }
  }

  // Get favorites sorted by most recent
  const getFavorites = () => {
    return [...favorites].sort((a, b) => b.addedAt - a.addedAt)
  }

  return {
    favorites: getFavorites(),
    isFavorited,
    toggleFavorite,
    removeFavorite,
    clearFavorites,
    hasFavorites: favorites.length > 0,
    favoriteCount: favorites.length
  }
}