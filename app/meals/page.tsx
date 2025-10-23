"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { getRandomMeals } from "@/lib/utils"
import type { Meal } from "@/lib/meals-data"
import MealCard from "@/components/meal-card"
import MealAnalysis from "@/components/meal-analysis"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Volume2, VolumeX } from "lucide-react"
import Image from "next/image"

function MealsContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const lang = (searchParams.get("lang") || "en") as "ar" | "en"
  const [meals, setMeals] = useState<Meal[]>([])
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    setMeals(getRandomMeals(15))
  }, [])

  const handleMealSelect = (meal: Meal) => {
    setSelectedMeal(meal)
  }

  const handleClose = () => {
    setSelectedMeal(null)
  }

  const handleRestart = () => {
    setMeals(getRandomMeals(15))
    setSelectedMeal(null)
  }

  const handleBackToHome = () => {
    router.push("/")
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex justify-between items-center mb-6">
          <Button onClick={handleBackToHome} variant="outline" className="gap-2 bg-white/80 hover:bg-white">
            <ArrowLeft className="w-5 h-5" />
            {lang === "ar" ? "العودة للرئيسية" : "Back to Home"}
          </Button>

          <button
            onClick={toggleMute}
            className="p-3 bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="w-6 h-6 text-teal-700" /> : <Volume2 className="w-6 h-6 text-teal-700" />}
          </button>

          <Button onClick={handleRestart} className="bg-teal-600 hover:bg-teal-700 text-white">
            {lang === "ar" ? "جرب مرة أخرى" : "Try Again"}
          </Button>
        </div>

        <div className={`flex ${lang === "ar" ? "justify-end" : "justify-start"} mb-6`}>
          <Image
            src="/conference-logo.png"
            alt="Hail International Lifestyle Medicine Conference 2025"
            width={200}
            height={240}
            className="object-contain"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-teal-900 text-center mb-8">
          {lang === "ar" ? "اختر وجبتك" : "Choose Your Meal"}
        </h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-3 md:grid-cols-5 gap-6">
        {meals.map((meal) => (
          <MealCard key={meal.id} meal={meal} lang={lang} onClick={() => handleMealSelect(meal)} isMuted={isMuted} />
        ))}
      </div>

      {selectedMeal && <MealAnalysis meal={selectedMeal} lang={lang} onClose={handleClose} isMuted={isMuted} />}
    </div>
  )
}

export default function MealsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
          <div className="text-3xl font-bold text-teal-900 text-center space-y-2">
            <div>جاري التحميل...</div>
            <div>Loading...</div>
          </div>
        </div>
      }
    >
      <MealsContent />
    </Suspense>
  )
}
