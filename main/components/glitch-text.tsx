"use client"

import { useState } from "react"

interface GlitchTextProps {
  text: string
  className?: string
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [glitchedText, setGlitchedText] = useState(text)
  const [isGlitching, setIsGlitching] = useState(false)

  const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?"

  const triggerGlitch = () => {
    if (isGlitching) return

    setIsGlitching(true)
    let iterations = 0
    const maxIterations = 10

    const interval = setInterval(() => {
      setGlitchedText(
        text
          .split("")
          .map((char, index) => {
            if (index < iterations) {
              return text[index]
            }
            return glitchChars[Math.floor(Math.random() * glitchChars.length)]
          })
          .join(""),
      )

      iterations += 1

      if (iterations >= maxIterations) {
        clearInterval(interval)
        setGlitchedText(text)
        setIsGlitching(false)
      }
    }, 50)
  }

  return (
    <span className={`cursor-pointer transition-all duration-200 ${className}`} onMouseEnter={triggerGlitch}>
      {glitchedText}
    </span>
  )
}
