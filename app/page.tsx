"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Download, Github, Linkedin, Dribbble, ExternalLink, Play, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const skillItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

// Animated Section component
function AnimatedSection({
  children,
  id,
  className = "",
}: {
  children: React.ReactNode
  id: string
  className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.section id={id} ref={ref} variants={fadeIn} initial="hidden" animate={controls} className={className}>
      {children}
    </motion.section>
  )
}

export default function Home() {
  const [titleIndex, setTitleIndex] = useState(0)
  const titles = ["UI/UX Designer", "Frontend Developer", "Problem Solver"]

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <AnimatedSection
        id="home"
        className="flex flex-col items-center justify-center min-h-screen px-4 md:px-8 text-center"
      >
        <motion.p
          className="text-purple-500 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Mehdi Khatiri
        </motion.p>
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Hi, I&apos;m{" "}
          <AnimatePresence mode="wait">
            <motion.span
              key={titleIndex}
              className="text-purple-500 inline-block min-w-64 md:min-w-96"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {titles[titleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-8 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Building Founder-Focused Digital Experiences
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Button
            variant="outline"
            className="bg-purple-600 hover:bg-purple-700 text-white border-none transition-all duration-300 transform hover:scale-105"
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore My Work
          </Button>
          <Button
            variant="outline"
            className="border-purple-600 text-purple-600 hover:bg-purple-600/10 transition-all duration-300 transform hover:scale-105"
            asChild
          >
            <a
              href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:8288764d-fc17-4854-a9ba-d03b462af49f"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Download CV <Download size={16} />
            </a>
          </Button>
        </motion.div>
        <motion.div
          className="flex gap-6 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <a
            href="https://github.com/mehdi1914"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
            aria-label="GitHub Profile"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/mehdi-khatiri/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://www.behance.net/medikhatiri1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
            aria-label="Behance Profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
            </svg>
          </a>
          <a
            href="https://dribbble.com/MEHDI_UXUI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
            aria-label="Dribbble Profile"
          >
            <Dribbble size={24} />
          </a>
        </motion.div>
      </AnimatedSection>

      {/* Bio Section */}
      <AnimatedSection id="bio" className="py-20 px-4 md:px-8 bg-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2 className="text-4xl font-bold mb-6" variants={fadeIn}>
              Bio
            </motion.h2>
            <motion.h3 className="text-2xl mb-4" variants={fadeIn}>
              Mehdi Khatiri
            </motion.h3>
            <motion.p className="text-purple-500 italic mb-6" variants={fadeIn}>
              UI/UX Designer | ALX Pathway Program Learner
            </motion.p>
            <motion.p className="text-gray-300 mb-8" variants={fadeIn}>
              Passionate about crafting human-centered digital experiences, I blend creativity with technical precision.
              As an ALX learner, I&apos;ve honed skills in problem-solving, agile collaboration, and project management
              to deliver solutions that empower users and businesses alike.
            </motion.p>
            <motion.div className="space-y-6" variants={staggerContainer} initial="hidden" animate="visible">
              <motion.div variants={skillItem}>
                <h4 className="text-xl font-semibold mb-3">What I Do</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>Design intuitive interfaces using Figma and Adobe Suite</li>
                  <li>Conduct user research and prototype testing</li>
                  <li>Collaborate with developers using HTML/CSS for seamless handoffs</li>
                </ul>
              </motion.div>
              <motion.div variants={skillItem}>
                <h4 className="text-xl font-semibold mb-3">Beyond Work</h4>
                <p className="text-gray-300">
                  Gym discipline fuels my focus • Storytelling through photography • Theater-inspired empathy for user
                  narratives
                </p>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            className="flex justify-center"
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-purple-600 rounded-full opacity-30 blur-xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Mehdi Khatiri"
                  width={400}
                  height={400}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection id="skills" className="py-20 px-4 md:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 className="text-4xl font-bold mb-4 text-white" variants={fadeIn}>
              Skills & Expertise
            </motion.h2>
            <motion.p className="text-gray-400 max-w-2xl mx-auto" variants={fadeIn}>
              A combination of design thinking, technical knowledge, and soft skills that enable me to create impactful
              digital experiences
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Design Skills */}
            <motion.div
              className="bg-[#1a1a1a] rounded-xl p-6 hover:bg-[#242424] transition-colors duration-300"
              variants={fadeIn}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-purple-600/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Design</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">UI/UX Design</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-1.5 h-6 bg-purple-600 rounded-full" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Figma</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-1.5 h-6 bg-purple-600 rounded-full" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Adobe Suite</span>
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-1.5 h-6 bg-purple-600 rounded-full" />
                    ))}
                    <div className="w-1.5 h-6 bg-gray-700 rounded-full" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Wireframing</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-1.5 h-6 bg-purple-600 rounded-full" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Prototyping</span>
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-1.5 h-6 bg-purple-600 rounded-full" />
                    ))}
                    <div className="w-1.5 h-6 bg-gray-700 rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Development Skills */}
            <motion.div
              className="bg-[#1a1a1a] rounded-xl p-6 hover:bg-[#242424] transition-colors duration-300"
              variants={fadeIn}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-purple-600/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Development</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">HTML/CSS</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-1.5 h-6 bg-purple-600 rounded-full" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">JavaScript</span>
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-1.5 h-6 bg-purple-600 rounded-full" />
                    ))}
                    <div className="w-1.5 h-6 bg-gray-700 rounded-full" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">React</span>
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-1.5 h-6 bg-purple-600 rounded-full" />
                    ))}
                    <div className="w-1.5 h-6 bg-gray-700 rounded-full" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Next.js</span>
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-1.5 h-6 bg-purple-600 rounded-full" />
                    ))}
                    <div className="w-1.5 h-6 bg-gray-700 rounded-full" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Tailwind CSS</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-1.5 h-6 bg-purple-600 rounded-full" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              className="bg-[#1a1a1a] rounded-xl p-6 hover:bg-[#242424] transition-colors duration-300"
              variants={fadeIn}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-purple-600/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Soft Skills</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Problem Solving</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-1.5 h-6 bg-purple-600 rounded-full" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Communication</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-1.5 h-6 bg-purple-600 rounded-full" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Teamwork</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-1.5 h-6 bg-purple-600 rounded-full" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Leadership</span>
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-1.5 h-6 bg-purple-600 rounded-full" />
                    ))}
                    <div className="w-1.5 h-6 bg-gray-700 rounded-full" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Time Management</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-1.5 h-6 bg-purple-600 rounded-full" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Work Section */}
      <AnimatedSection id="work" className="py-16 md:py-20 px-4 md:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-4xl font-bold mb-12 text-center" variants={fadeIn}>
            My Work
          </motion.h2>

          <div className="mb-16">
            <motion.h3 className="text-2xl font-semibold mb-8" variants={fadeIn}>
              ALX Pathway Projects
            </motion.h3>
            <motion.div
              className="bg-gray-900 rounded-lg overflow-hidden"
              variants={fadeIn}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=600&width=1200"
                  alt="VoyagePath App"
                  width={1200}
                  height={600}
                  className="object-cover w-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <a
                    href="https://www.youtube.com/watch?v=ac57oC_fZCA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center cursor-pointer transform hover:scale-110 transition-transform"
                    aria-label="Play VoyagePath App Demo Video"
                  >
                    <Play className="text-white ml-1" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">VoyagePath App</h4>
                <p className="text-gray-400 mb-4">
                  Collaborated with ALX peers to design and prototype innovative solutions for safer travel. My role:
                  UI/UX Designer and Researcher.
                </p>
                <Button variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                  <a
                    href="https://drive.google.com/file/d/1kzffK9JG3ZEJktQ-HczkL9oORS50Bx5k/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    View Slide Deck <ExternalLink size={16} />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.h3 className="text-2xl font-semibold mb-8" variants={fadeIn}>
              Personal Projects
            </motion.h3>
            <motion.div
              className="grid md:grid-cols-2 gap-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {[
                {
                  title: "Go Dev CRM",
                  description:
                    "A streamlined sign-up/sign-in flow for a CRM platform, featuring modern UI design and intuitive user experience. Designed with a focus on user-centered principles and clean aesthetics.",
                  image: "https://v0.dev/placeholder.svg?height=300&width=600",
                  link: "https://www.figma.com/file/YPh8cJhW8mKHAXl4vBZbfE/Go-Dev-CRM?type=design&node-id=0%3A1&mode=design&t=Ue8UxRQBGIqPxvtA-1",
                  type: "figma",
                  tools: ["Figma", "UI Design", "UX Design", "Prototyping"],
                },
                {
                  title: "Fresh Market E-Commerce UI",
                  description:
                    "Modern and intuitive e-commerce interface design for a fruit and vegetable marketplace. Features a clean, nature-inspired design system with focus on product presentation and easy navigation.",
                  image: "https://v0.dev/placeholder.svg?height=300&width=600",
                  link: "https://www.figma.com/file/2L7ZVJdAFeXBdJ8CgxFRBg/Fresh-Market?type=design&node-id=0%3A1&mode=design&t=Ue8UxRQBGIqPxvtA-1",
                  type: "figma",
                  tools: ["Figma", "E-commerce", "UI Design", "Design System"],
                },
                {
                  title: "Task Management App",
                  description:
                    "A comprehensive task management application built with React and Node.js. Features include task organization, team collaboration, and real-time updates.",
                  image: "https://v0.dev/placeholder.svg?height=300&width=600",
                  link: "https://github.com/MehdiKhatiri1/management.git",
                  type: "github",
                  tools: ["React", "Node.js", "MongoDB", "Express"],
                },
                {
                  title: "Portfolio Website",
                  description:
                    "Modern portfolio website built with Next.js and Framer Motion, featuring smooth animations, responsive design, and optimized performance.",
                  image: "https://v0.dev/placeholder.svg?height=300&width=600",
                  link: "https://github.com/mehdi1914/portfolio",
                  type: "github",
                  tools: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900 rounded-lg overflow-hidden"
                  variants={skillItem}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-video relative group overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={300}
                      className="object-cover w-full transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Mobile-only project link button */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 flex justify-center md:hidden">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-purple-600 text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm"
                      >
                        View Project {project.type === "github" ? <Github size={14} /> : <ExternalLink size={14} />}
                      </a>
                    </div>

                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 md:transition-opacity md:duration-300 flex items-center justify-center sm:opacity-100 md:opacity-0">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-purple-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
                      >
                        View Project {project.type === "github" ? <Github size={16} /> : <ExternalLink size={16} />}
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div
                        className={`px-3 py-1 rounded-full text-sm ${
                          project.type === "figma" ? "bg-blue-500/20 text-blue-400" : "bg-green-500/20 text-green-400"
                        }`}
                      >
                        {project.type === "figma" ? "Figma Design" : "GitHub Project"}
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tools.map((tool, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-800 rounded-md text-sm text-gray-300">
                          {tool}
                        </span>
                      ))}
                    </div>
                    <Button variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        {project.type === "figma" ? "View Design" : "View Code"}{" "}
                        {project.type === "github" ? <Github size={16} /> : <ExternalLink size={16} />}
                      </a>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" className="py-20 px-4 md:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-4xl font-bold mb-4 text-center" variants={fadeIn}>
            Let&apos;s Connect
          </motion.h2>
          <motion.p className="text-center text-gray-300 mb-12" variants={fadeIn}>
            Have a project in mind? Let&apos;s discuss how we can work together
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeIn}>
              <p className="mb-8 text-gray-300">
                I&apos;m always interested in hearing about new projects and opportunities. Whether you have a question
                or just want to say hi, I&apos;ll try my best to get back to you!
              </p>

              <motion.div className="space-y-6" variants={staggerContainer} initial="hidden" animate="visible">
                <motion.div className="flex items-center gap-4" variants={skillItem} whileHover={{ x: 5 }}>
                  <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-purple-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a href="mailto:mehdikhatiri.19@gmail.com" className="hover:text-purple-400 transition-colors">
                      mehdikhatiri.19@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div className="flex items-center gap-4" variants={skillItem} whileHover={{ x: 5 }}>
                  <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-purple-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <a href="tel:+212636832636" className="hover:text-purple-400 transition-colors">
                      +212 636 832 636
                    </a>
                  </div>
                </motion.div>

                <motion.div className="flex items-center gap-4" variants={skillItem} whileHover={{ x: 5 }}>
                  <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-purple-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p>128 Rabat, Morocco</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeIn}>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-3 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                    aria-label="Your name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                    aria-label="Your email"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full p-3 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                    aria-label="Subject"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your message..."
                    rows={5}
                    className="w-full p-3 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                    aria-label="Your message"
                  ></textarea>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  Send Message <Send size={16} />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}

