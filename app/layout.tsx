import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedCursor } from "@/components/animated-cursor"
import { AnimatedBackground } from "@/components/animated-background"
import { ParticleBackground } from "@/components/particle-background"
import { ErrorBoundary } from "@/components/error-boundary"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mehdi Khatiri | UI/UX Designer & Frontend Developer",
  description: "Personal portfolio showcasing UI/UX design and frontend development work",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${inter.className} bg-black text-white`}>
        <AnimatedCursor />
        <AnimatedBackground />
        <ParticleBackground />
        <Navbar />
        <ErrorBoundary>{children}</ErrorBoundary>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'