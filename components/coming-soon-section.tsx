"use client"

import { AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { NewsletterForm } from "@/components/newsletter-form"
import { motion } from "framer-motion"

export function ComingSoonSection() {
  return (
    <div className="min-h-screen bg-black pt-20 md:pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900 rounded-2xl p-5 md:p-8 lg:p-12"
        >
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="w-20 h-20 md:w-24 md:h-24 bg-purple-600/20 rounded-full flex items-center justify-center mb-6"
            >
              <AlertCircle className="w-10 h-10 md:w-12 md:h-12 text-purple-500" />
            </motion.div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Coming Soon!</h1>
            <p className="text-gray-400 mb-8 max-w-lg">
              I'm currently crafting a compelling elevator pitch that showcases my skills and passion for UI/UX design
              and frontend development. Check back soon!
            </p>

            <div className="space-y-4 w-full max-w-xs">
              <motion.div
                className="h-3 bg-gray-800 rounded-full w-full overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="h-full bg-purple-600"
                  initial={{ width: "0%" }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 1, delay: 0.4 }}
                />
              </motion.div>
              <p className="text-sm text-gray-500">75% Complete</p>
            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-8">
              <Button
                asChild
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-600/10 h-12 px-6 text-base"
              >
                <Link href="/#contact">Contact Me</Link>
              </Button>
            </motion.div>
          </div>

          {/* Additional sections showing what's coming - mobile optimized */}
          <div className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-4 md:p-6 bg-gray-800/50 rounded-xl"
            >
              <h3 className="font-semibold mb-2">Professional Journey</h3>
              <p className="text-gray-400 text-sm">Hear about my experience in UI/UX design and frontend development</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-4 md:p-6 bg-gray-800/50 rounded-xl"
            >
              <h3 className="font-semibold mb-2">Key Skills</h3>
              <p className="text-gray-400 text-sm">
                Learn about my technical expertise and creative problem-solving abilities
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-4 md:p-6 bg-gray-800/50 rounded-xl sm:col-span-2 md:col-span-1"
            >
              <h3 className="font-semibold mb-2">Value Proposition</h3>
              <p className="text-gray-400 text-sm">Discover how I can contribute to your team and projects</p>
            </motion.div>
          </div>

          {/* Newsletter Signup - mobile optimized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 md:mt-12 p-4 md:p-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl"
          >
            <h3 className="text-xl font-semibold mb-4 text-center">Get Notified</h3>
            <p className="text-gray-400 text-center mb-6">
              Want to know when my elevator pitch is ready? Leave your email and I'll let you know!
            </p>
            <NewsletterForm />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

