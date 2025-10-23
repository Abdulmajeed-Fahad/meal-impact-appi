"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX } from "lucide-react"

const playButtonSound = (isMuted: boolean) => {
  if (isMuted) return

  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
  const oscillator = audioContext.createOscillator()
  const gainNode = audioContext.createGain()

  oscillator.connect(gainNode)
  gainNode.connect(audioContext.destination)

  oscillator.frequency.value = 800
  gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1)
  oscillator.start(audioContext.currentTime)
  oscillator.stop(audioContext.currentTime + 0.1)
}

export default function LandingPage() {
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.log("Autoplay prevented:", err)
      })
    }
  }, [])

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
    }
    setIsMuted(!isMuted)
  }

  const selectLanguage = (lang: "ar" | "en") => {
    playButtonSound(isMuted) // Pass isMuted to sound function
    router.push(`/meals?lang=${lang}`)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 p-8 relative">
      <audio ref={audioRef} loop>
        <source src="/background-music.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMute}
        className="absolute top-6 left-6 p-3 bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors z-10"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <VolumeX className="w-6 h-6 text-teal-700" /> : <Volume2 className="w-6 h-6 text-teal-700" />}
      </button>

      <div className="mt-8">
        <Image
          src="/conference-logo.png"
          alt="Hail International Lifestyle Medicine Conference 2025"
          width={500}
          height={600}
          className="object-contain"
          priority
        />
      </div>

      <div className="text-center space-y-6 flex-1 flex flex-col justify-center max-w-4xl">
        <h1 className="text-6xl md:text-7xl font-bold text-teal-900 leading-tight text-balance">
          اختر وجبتك واكتشف تأثيرها
        </h1>
        <h2 className="text-5xl md:text-6xl font-bold text-teal-800 leading-tight text-balance">
          Choose Your Meal and Discover Its Impact
        </h2>
      </div>

      <div className="flex gap-8 mb-12 mt-12">
        <Button
          onClick={() => selectLanguage("ar")}
          size="lg"
          className="text-3xl px-16 py-10 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-2xl shadow-xl transition-all hover:scale-105"
        >
          ابدأ
        </Button>
        <Button
          onClick={() => selectLanguage("en")}
          size="lg"
          className="text-3xl px-16 py-10 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-2xl shadow-xl transition-all hover:scale-105"
        >
          Start
        </Button>
      </div>
    </div>
  )
}
