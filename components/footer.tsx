"use client"

import { Github, Linkedin, Dribbble, ArrowUp, Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-gray-900 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">Mehdi Khatiri</h3>
            <p className="text-gray-400 mb-6">
              UI/UX Designer & Frontend Developer building founder-focused digital experiences.
            </p>
            <div className="flex items-center gap-5">
              <motion.a
                href="https://github.com/mehdi1914"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 h-10 w-10 flex items-center justify-center bg-gray-800/50 rounded-full"
                aria-label="GitHub Profile"
                whileHover={{ scale: 1.1 }}
              >
                <Github size={18} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mehdi-khatiri/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 h-10 w-10 flex items-center justify-center bg-gray-800/50 rounded-full"
                aria-label="LinkedIn Profile"
                whileHover={{ scale: 1.1 }}
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a
                href="https://www.behance.net/medikhatiri1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 h-10 w-10 flex items-center justify-center bg-gray-800/50 rounded-full"
                aria-label="Behance Profile"
                whileHover={{ scale: 1.1 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://dribbble.com/MEHDI_UXUI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 h-10 w-10 flex items-center justify-center bg-gray-800/50 rounded-full"
                aria-label="Dribbble Profile"
                whileHover={{ scale: 1.1 }}
              >
                <Dribbble size={18} />
              </motion.a>
            </div>
          </div>

          <div className="mt-2 md:mt-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
                className="text-gray-400 hover:text-white transition-colors py-2 text-left"
              >
                Home
              </button>
              <button
                onClick={() => document.getElementById("bio")?.scrollIntoView({ behavior: "smooth" })}
                className="text-gray-400 hover:text-white transition-colors py-2 text-left"
              >
                Bio
              </button>
              <button
                onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
                className="text-gray-400 hover:text-white transition-colors py-2 text-left"
              >
                Skills
              </button>
              <button
                onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
                className="text-gray-400 hover:text-white transition-colors py-2 text-left"
              >
                Portfolio
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="text-gray-400 hover:text-white transition-colors py-2 text-left"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="mt-2 md:mt-0">
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="text-purple-500 mt-1 flex-shrink-0" size={18} />
                <div>
                  <a
                    href="mailto:mehdikhatiri.19@gmail.com"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    mehdikhatiri.19@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-purple-500 mt-1 flex-shrink-0" size={18} />
                <div>
                  <a href="tel:+212636832636" className="text-purple-400 hover:text-purple-300 transition-colors">
                    +212 636 832 636
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-purple-500 mt-1 flex-shrink-0" size={18} />
                <div>
                  <span>128 Rabat, Morocco</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-6 md:mb-0 text-center md:text-left">
            © {new Date().getFullYear()} Mehdi Khatiri. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors bg-gray-800/50 p-3 rounded-full"
            aria-label="Back to top"
            whileHover={{ y: -3 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

