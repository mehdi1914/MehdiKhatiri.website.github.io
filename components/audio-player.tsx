"use client"

import { motion } from "framer-motion"
import { Play, Pause, SkipBack, SkipForward, AlertCircle } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const isInitialMount = useRef(true)

  // Check if mobile
  useEffect(() => {
    setIsMobile(window.innerWidth < 768)

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    // Create audio element with error handling
    try {
      const audio = new Audio()
      audioRef.current = audio

      const handleLoadedMetadata = () => {
        setDuration(audio.duration)
        setIsLoading(false)
      }

      const handleTimeUpdate = () => {
        setCurrentTime(audio.currentTime)
      }

      const handleEnded = () => {
        setIsPlaying(false)
        setCurrentTime(0)
      }

      const handleError = () => {
        console.error("Audio failed to load")
        setError("Audio content is not available at the moment")
        setIsLoading(false)
      }

      audio.addEventListener("loadedmetadata", handleLoadedMetadata)
      audio.addEventListener("timeupdate", handleTimeUpdate)
      audio.addEventListener("ended", handleEnded)
      audio.addEventListener("error", handleError)

      // Set audio source
      audio.src = "/elevator-pitch.mp3"
      audio.preload = "metadata"
      audio.load()

      return () => {
        if (audio) {
          audio.removeEventListener("loadedmetadata", handleLoadedMetadata)
          audio.removeEventListener("timeupdate", handleTimeUpdate)
          audio.removeEventListener("ended", handleEnded)
          audio.removeEventListener("error", handleError)
          audio.pause()
          audio.src = ""
        }
      }
    } catch (err) {
      console.error("Error initializing audio:", err)
      setError("There was a problem initializing the audio player")
      setIsLoading(false)
    }
  }, [])

  // Handle play/pause
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
      return
    }

    if (!audioRef.current || isLoading) return

    try {
      if (isPlaying) {
        const playPromise = audioRef.current.play()
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.error("Playback error:", error)
            setIsPlaying(false)
            // Handle autoplay restrictions
            if (error.name === "NotAllowedError") {
              setError("Playback was blocked. Please interact with the page first.")
            }
          })
        }
      } else {
        audioRef.current.pause()
      }
    } catch (error) {
      console.error("Playback error:", error)
      setIsPlaying(false)
    }
  }, [isPlaying, isLoading])

  const formatTime = (time: number) => {
    if (!isFinite(time) || isNaN(time)) return "0:00"
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const seek = (time: number) => {
    if (!audioRef.current || isLoading) return

    try {
      const newTime = Math.max(0, Math.min(time, duration))
      audioRef.current.currentTime = newTime
      setCurrentTime(newTime)
    } catch (error) {
      console.error("Error seeking:", error)
    }
  }

  const skipBackward = () => {
    if (!audioRef.current || isLoading) return
    seek(Math.max(audioRef.current.currentTime - 10, 0))
  }

  const skipForward = () => {
    if (!audioRef.current || isLoading) return
    seek(Math.min(audioRef.current.currentTime + 10, duration))
  }

  const togglePlayPause = () => {
    if (isLoading) return
    setIsPlaying(!isPlaying)
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="w-20 h-20 md:w-24 md:h-24 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <AlertCircle className="w-10 h-10 md:w-12 md:h-12 text-red-500" />
        </motion.div>
        <h2 className="text-xl font-bold mb-4">Oops!</h2>
        <p className="text-gray-400 mb-8">{error}</p>
        <Button asChild variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600/10">
          <Link href="/#contact">Contact Me Instead</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Touch-friendly progress bar for mobile */}
      <div className="relative w-full h-3 bg-gray-800 rounded-full">
        <motion.div
          className="absolute h-full bg-purple-600 rounded-full"
          style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
          animate={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
          transition={{ duration: 0.1 }}
        />
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={(e) => seek(Number(e.target.value))}
          className="absolute w-full h-full opacity-0 cursor-pointer"
          disabled={isLoading || duration === 0}
          aria-label="Audio progress"
        />
      </div>

      <div className="flex justify-between text-sm text-gray-400">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      <div className="flex justify-center items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full h-12 w-12"
          onClick={skipBackward}
          disabled={isLoading}
          aria-label="Skip backward 10 seconds"
        >
          <SkipBack className="h-5 w-5 md:h-6 md:w-6" />
        </Button>

        <Button
          variant="default"
          size="icon"
          className="w-16 h-16 rounded-full bg-purple-600 hover:bg-purple-700"
          onClick={togglePlayPause}
          disabled={isLoading}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isLoading ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="w-5 h-5 md:w-6 md:h-6 border-2 border-white border-t-transparent rounded-full"
            />
          ) : isPlaying ? (
            <Pause className="h-6 w-6 md:h-8 md:w-8" />
          ) : (
            <Play className="h-6 w-6 md:h-8 md:w-8 ml-1" />
          )}
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="rounded-full h-12 w-12"
          onClick={skipForward}
          disabled={isLoading}
          aria-label="Skip forward 10 seconds"
        >
          <SkipForward className="h-5 w-5 md:h-6 md:w-6" />
        </Button>
      </div>
    </div>
  )
}

