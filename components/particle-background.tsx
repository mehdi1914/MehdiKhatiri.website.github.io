"use client"

import { useCallback, useEffect, useState } from "react"
import Particles from "react-particles"
import type { Engine } from "tsparticles-engine"
import { loadSlim } from "tsparticles-slim"

export function ParticleBackground() {
  const [isMounted, setIsMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isLowPowerMode, setIsLowPowerMode] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Check for low power mode (simplified detection)
    const checkLowPower = () => {
      // Check battery if available
      if ("getBattery" in navigator) {
        // @ts-ignore - getBattery is not in the standard navigator type
        navigator
          .getBattery()
          .then((battery: any) => {
            setIsLowPowerMode(battery.level < 0.2 && !battery.charging)
          })
          .catch(() => {
            // If we can't access battery, assume low power on mobile
            setIsLowPowerMode(window.innerWidth < 768)
          })
      } else {
        // If battery API not available, use screen size as proxy
        setIsLowPowerMode(window.innerWidth < 768)
      }
    }

    checkMobile()
    checkLowPower()

    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  if (!isMounted) return null

  // Don't render particles on low power mode
  if (isLowPowerMode) {
    return (
      <div className="fixed inset-0 -z-10 bg-black opacity-50 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent)] pointer-events-none opacity-20" />
      </div>
    )
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: isMobile ? 30 : 60, // Lower FPS on mobile
        interactivity: {
          events: {
            onClick: {
              enable: !isMobile,
              mode: "push",
            },
            onHover: {
              enable: !isMobile,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: isMobile ? 1 : 2,
            },
            repulse: {
              distance: isMobile ? 50 : 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#a855f7",
          },
          links: {
            color: "#a855f7",
            distance: isMobile ? 100 : 150,
            enable: true,
            opacity: isMobile ? 0.2 : 0.3,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: isMobile ? 0.3 : 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: isMobile ? 15 : 40, // Significantly fewer particles on mobile
          },
          opacity: {
            value: isMobile ? 0.2 : 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: isMobile ? 2 : 3 },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 -z-10 pointer-events-none"
    />
  )
}

