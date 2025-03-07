"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Download, Menu, X, Github, Linkedin, Dribbble, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    // Add passive: true for better performance on mobile
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open (important for mobile)
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      // Add offset for fixed header
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4",
        isScrolled ? "bg-black/90 backdrop-blur-md py-2" : "bg-transparent py-3",
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-50 p-2">
          <div className="w-10 h-10 flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.6667 31.6667H5V8.33333H11.9533C17.4133 8.41333 17.5167 13.7733 14.6667 15.2333C18.1267 16.4933 18.2433 23.2933 11.6667 23.2933V31.6667ZM8.16667 22.6667H11.7167C14.7667 22.6667 14.58 19.6667 11.7633 19.6667H8.16667V22.6667ZM8.16667 13.6667H11.74C14.2467 13.6667 14.6433 10.6667 11.4333 10.6667H8.16667V13.6667Z"
                fill="white"
              />
              <path
                d="M35 17H28V15H35V17ZM36.7267 27C36.2847 28.2967 34.6977 30 31.6257 30C28.5517 30 26.0617 28.2713 26.0617 24.325C26.0617 20.415 28.3867 18.405 31.5277 18.405C34.6097 18.405 36.4917 20.187 36.9027 22.831C36.9807 23.337 37.0117 24.019 36.9977 24.971H28.9707C29.1007 28.182 32.4537 28.283 33.5587 27H36.7267ZM29.0407 23H34.0057C33.9007 21.453 32.8697 20.781 31.5287 20.781C30.0627 20.781 29.2517 21.549 29.0407 23Z"
                fill="white"
              />
            </svg>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
          <div className="flex items-center gap-6 lg:gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-white hover:text-purple-500 transition-colors py-2 px-3"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("bio")}
              className="text-white hover:text-purple-500 transition-colors py-2 px-3"
            >
              Bio
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-white hover:text-purple-500 transition-colors py-2 px-3"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className="text-white hover:text-purple-500 transition-colors py-2 px-3"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-purple-500 transition-colors py-2 px-3"
            >
              Contact
            </button>
            <Link
              href="/elevator-pitch"
              className="text-white hover:text-purple-500 transition-colors flex items-center gap-1 py-2 px-3"
            >
              Elevator Pitch
            </Link>
          </div>
        </nav>

        {/* Download CV Button */}
        <div className="hidden md:block">
          <a
            href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:8288764d-fc17-4854-a9ba-d03b462af49f"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md px-4 py-2 transition-colors"
          >
            <Download size={16} /> <span className="hidden lg:inline">Download CV</span>
          </a>
        </div>

        {/* Mobile Menu Button - Improved for touch */}
        <button
          className="md:hidden text-white z-50 p-3 h-14 w-14 flex items-center justify-center rounded-full bg-purple-600/20"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation - Enhanced for better mobile UX */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-black/95 z-40 pt-20 overflow-y-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col items-start gap-1 p-6">
              {[
                { name: "Home", id: "home" },
                { name: "Bio", id: "bio" },
                { name: "Skills", id: "skills" },
                { name: "Portfolio", id: "work" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white text-xl hover:text-purple-500 transition-colors w-full py-4 px-4 flex justify-between items-center border-b border-gray-800"
                >
                  <span>{item.name}</span>
                  <ChevronRight size={20} className="text-gray-500" />
                </button>
              ))}

              <Link
                href="/elevator-pitch"
                className="text-white text-xl hover:text-purple-500 transition-colors w-full py-4 px-4 flex justify-between items-center border-b border-gray-800"
              >
                <span>Elevator Pitch</span>
                <ChevronRight size={20} className="text-gray-500" />
              </Link>

              <div className="flex items-center justify-center gap-8 mt-8 w-full">
                <a
                  href="https://github.com/mehdi1914"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors p-3 h-14 w-14 flex items-center justify-center bg-gray-800/50 rounded-full"
                  aria-label="GitHub Profile"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mehdi-khatiri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors p-3 h-14 w-14 flex items-center justify-center bg-gray-800/50 rounded-full"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://www.behance.net/medikhatiri1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors p-3 h-14 w-14 flex items-center justify-center bg-gray-800/50 rounded-full"
                  aria-label="Behance Profile"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                  </svg>
                </a>
                <a
                  href="https://dribbble.com/MEHDI_UXUI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors p-3 h-14 w-14 flex items-center justify-center bg-gray-800/50 rounded-full"
                  aria-label="Dribbble Profile"
                >
                  <Dribbble size={24} />
                </a>
              </div>

              <a
                href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:8288764d-fc17-4854-a9ba-d03b462af49f"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white border-none rounded-md px-4 py-4 mt-8 w-full text-lg"
              >
                <Download size={20} /> Download CV
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

