"use client"

import Image from "next/image"
import type { Meal } from "@/lib/meals-data"
import { Card } from "@/components/ui/card"

interface MealCardProps {
  meal: Meal
  lang: "ar" | "en"
  onClick: () => void
  isMuted: boolean // Added isMuted prop
}

const playSelectSound = (isMuted: boolean) => {
  if (isMuted) return

  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
  const oscillator = audioContext.createOscillator()
  const gainNode = audioContext.createGain()

  oscillator.connect(gainNode)
  gainNode.connect(audioContext.destination)

  oscillator.frequency.value = 600
  gainNode.gain.setValueAtTime(0.2, audioContext.currentTime)
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15)
  oscillator.start(audioContext.currentTime)
  oscillator.stop(audioContext.currentTime + 0.15)
}

export default function MealCard({ meal, lang, onClick, isMuted }: MealCardProps) {
  const handleClick = () => {
    playSelectSound(isMuted) // Pass isMuted to sound function
    onClick()
  }

  return (
    <Card
      className="cursor-pointer hover:scale-105 transition-transform duration-200 overflow-hidden shadow-lg hover:shadow-xl"
      onClick={handleClick}
    >
      <div className="relative aspect-square">
        <Image
          src={meal.image || "/placeholder.svg"}
          alt={lang === "ar" ? meal.nameAr : meal.nameEn}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-3 bg-white">
        <h3 className="font-bold text-center text-lg text-teal-900">{lang === "ar" ? meal.nameAr : meal.nameEn}</h3>
      </div>
    </Card>
  )
}
