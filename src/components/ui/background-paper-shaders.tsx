"use client"

import Prism from "./prism"

export default function BackgroundPaperShaders() {
  return (
    <div className="w-full h-full absolute inset-0 overflow-hidden">
      <Prism
        height={4}
        baseWidth={6}
        animationType="3drotate"
        glow={1.2}
        noise={0.3}
        transparent={true}
        scale={2.5}
        hueShift={0.5}
        colorFrequency={1.5}
        bloom={1.5}
        timeScale={0.3}
        suspendWhenOffscreen={true}
      />
    </div>
  )
}

export { BackgroundPaperShaders }
