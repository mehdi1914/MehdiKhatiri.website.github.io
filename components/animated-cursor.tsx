"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function AnimatedCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(true) // Default to true to prevent flash on mobile

  useEffect(() => {
    setIsMounted(true)

    // Check if mobile/touch device
    const checkMobile = () => {
      const isTouchDevice =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        // @ts-ignore
        navigator.msMaxTouchPoints > 0

      setIsMobile(isTouchDevice || window.innerWidth < 768)
    }

    checkMobile()

    // Don't add listeners on mobile devices
    if (isMobile) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      // Check if the cursor is over a clickable element
      const target = e.target as HTMLElement
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
          target.tagName.toLowerCase() === "button" ||
          target.tagName.toLowerCase() === "a" ||
          target.closest("button") !== null ||
          target.closest("a") !== null,
      )
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [isMobile])

  if (!isMounted || isMobile) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-purple-500 rounded-full mix-blend-difference pointer-events-none z-50"
        animate={{ x: mousePosition.x - 8, y: mousePosition.y - 8 }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-purple-500 rounded-full mix-blend-difference pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.8 }}
      />
    </>
  )
}

