"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface AnimatedIconProps {
  icon: LucideIcon
  className?: string
  delay?: number
}

export function AnimatedIcon({ icon: Icon, className = "", delay = 0 }: AnimatedIconProps) {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay,
      }}
      whileHover={{ scale: 1.2, rotate: 360 }}
      className={className}
    >
      <Icon />
    </motion.div>
  )
}

