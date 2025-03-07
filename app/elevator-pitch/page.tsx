import { ComingSoonSection } from "@/components/coming-soon-section"
import { AudioPlayer } from "@/components/audio-player"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Elevator Pitch | Mehdi Khatiri",
  description:
    "Listen to Mehdi Khatiri's elevator pitch about his skills and experience in UI/UX design and frontend development.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
}

export default function ElevatorPitch() {
  // For demo purposes, set this to true if you don't have the audio file yet
  const isComingSoon = true // Set this to false when you have the audio file

  if (isComingSoon) {
    return <ComingSoonSection />
  }

  return (
    <div className="min-h-screen bg-black pt-20 md:pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900 rounded-2xl p-5 md:p-8 lg:p-12">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-10 md:mb-12">
            <div className="relative w-28 h-28 md:w-36 md:h-36 lg:w-48 lg:h-48">
              <div className="absolute inset-0 bg-purple-600 rounded-full opacity-30 blur-xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Mehdi Khatiri"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-center md:text-left">
                Elevator Pitch
              </h1>
              <p className="text-gray-400 text-center md:text-left">
                Listen to my 60-second pitch about who I am, what I do, and how I can add value to your team.
              </p>
            </div>
          </div>

          <AudioPlayer />
        </div>
      </div>
    </div>
  )
}

