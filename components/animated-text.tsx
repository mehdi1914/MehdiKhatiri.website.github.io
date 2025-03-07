"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedTextProps {
  text: string | ReactNode
  className?: string
  delay?: number
}

export function AnimatedText({ text, className = "", delay = 0 }: AnimatedTextProps) {
  if (typeof text !== "string") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className={className}
      >
        {text}
      </motion.div>
    )
  }

  const words = text.split(" ")

  return (
    <motion.div className={`flex flex-wrap ${className}`}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="mr-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.1,
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

