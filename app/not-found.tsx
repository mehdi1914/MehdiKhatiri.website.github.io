"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Home, Mail } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-10">
      <div className="text-center max-w-md">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-7xl font-bold mb-4 text-purple-500">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-gray-400 mb-8 px-4">The page you are looking for doesn't exist or has been moved.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="default" className="bg-purple-600 hover:bg-purple-700 h-12 gap-2">
              <Link href="/">
                <Home size={18} /> Return Home
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-600/10 h-12 gap-2"
            >
              <Link href="/#contact">
                <Mail size={18} /> Contact Me
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

