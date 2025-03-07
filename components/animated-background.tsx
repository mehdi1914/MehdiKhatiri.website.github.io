"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Check if mobile device for performance
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()

    // Throttle the mousemove event for better performance
    let timeoutId: NodeJS.Timeout | null = null
    const handleMouseMove = (e: MouseEvent) => {
      if (timeoutId) return

      timeoutId = setTimeout(() => {
        setMousePosition({ x: e.clientX, y: e.clientY })
        timeoutId = null
      }, 50) // 50ms throttle
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", checkMobile)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  if (!isMounted) return null

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-50"
        animate={{
          background: [
            "radial-gradient(600px at var(--x) var(--y), rgba(29, 78, 216, 0.15), transparent 80%)",
            "radial-gradient(600px at var(--x) var(--y), rgba(139, 92, 246, 0.15), transparent 80%)",
          ],
        }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        style={
          {
            "--x": isMobile ? "50%" : mousePosition.x + "px",
            "--y": isMobile ? "30%" : mousePosition.y + "px",
          } as any
        }
      />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent)] pointer-events-none opacity-30" />
    </div>
  )
}

