"use client"

import React, { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause } from "lucide-react"

export function ManifestoAudio() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlayPause = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleAudioEnd = () => {
    setIsPlaying(false)
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/templata-manifesto.mp3"
        onEnded={handleAudioEnd}
        preload="metadata"
      />
      <Button
        onClick={togglePlayPause}
        size="sm"
        variant="outline"
        className="absolute top-4 right-4 z-10 bg-background/95 backdrop-blur-sm hover:bg-primary/10"
      >
        {isPlaying ? (
          <Pause className="w-4 h-4" />
        ) : (
          <Play className="w-4 h-4" />
        )}
      </Button>
    </>
  )
}