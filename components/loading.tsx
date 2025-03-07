"use client"

import { motion } from "framer-motion"

export function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[200px] w-full">
      <motion.div
        className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
    </div>
  )
}

