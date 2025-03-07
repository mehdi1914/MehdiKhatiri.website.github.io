"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address")
      return
    }

    setError("")
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setEmail("")
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center p-4 bg-purple-900/20 rounded-lg"
      >
        <p className="text-green-400 font-medium">Thank you for subscribing!</p>
        <p className="text-gray-400 text-sm mt-2">We'll notify you when the elevator pitch is ready.</p>
      </motion.div>
    )
  }

  return (
    <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="flex-1 relative">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-base"
          aria-label="Email address"
          disabled={isSubmitting}
        />
        {error && <p className="text-red-400 text-xs mt-1 absolute">{error}</p>}
      </div>
      <Button
        type="submit"
        className="bg-purple-600 hover:bg-purple-700 min-w-[120px] h-12 text-base"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <Loader2 className="animate-spin mr-2 h-4 w-4" />
            Sending
          </span>
        ) : (
          "Notify Me"
        )}
      </Button>
    </form>
  )
}

