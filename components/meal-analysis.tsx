"use client"

import { useState } from "react"
import type { Meal } from "@/lib/meals-data"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RefreshCw, AlertTriangle, CheckCircle, QrCode } from "lucide-react"
import { QRCodeSVG } from "qrcode.react"

interface MealAnalysisProps {
  meal: Meal
  lang: "ar" | "en"
  onClose: () => void
  isMuted: boolean
}

const playSound = (type: "click" | "success" | "select", isMuted: boolean) => {
  if (isMuted) return

  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
  const oscillator = audioContext.createOscillator()
  const gainNode = audioContext.createGain()

  oscillator.connect(gainNode)
  gainNode.connect(audioContext.destination)

  if (type === "click") {
    oscillator.frequency.value = 800
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1)
    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.1)
  } else if (type === "success") {
    oscillator.frequency.value = 1000
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2)
    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.2)
  } else if (type === "select") {
    oscillator.frequency.value = 600
    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15)
    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.15)
  }
}

export default function MealAnalysis({ meal, lang, onClose, isMuted }: MealAnalysisProps) {
  const [showQR, setShowQR] = useState(false)

  const getNutritionColor = (type: string) => {
    switch (type) {
      case "fat":
        return "bg-orange-500"
      case "sugar":
        return "bg-pink-500"
      case "sodium":
        return "bg-red-500"
      case "calories":
        return "bg-purple-500"
      default:
        return "bg-gray-500"
    }
  }

  const getHealthIndexColor = (color: string) => {
    switch (color) {
      case "red":
        return { bg: "bg-red-50", border: "border-red-500", text: "text-red-700", icon: "🔴" }
      case "yellow":
        return { bg: "bg-yellow-50", border: "border-yellow-500", text: "text-yellow-700", icon: "🟡" }
      case "green":
        return { bg: "bg-green-50", border: "border-green-500", text: "text-green-700", icon: "🟢" }
      default:
        return { bg: "bg-gray-50", border: "border-gray-500", text: "text-gray-700", icon: "⚪" }
    }
  }

  const healthIndexStyle = getHealthIndexColor(meal.colorIndex)

  const handleShowSearch = () => {
    playSound("click", isMuted)
    setShowQR(!showQR)
  }

  const handleTryAgain = () => {
    playSound("success", isMuted)
    window.location.href = "/"
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <Card
        className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8 space-y-8">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              {lang === "ar" ? meal.nameAr : meal.nameEn}
            </h2>
          </div>

          {/* Nutrition Facts */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 text-right">
              {lang === "ar" ? "القيم الغذائية" : "Nutritional Values"}
            </h3>

            {[
              { labelAr: "الدهون", labelEn: "Fats", key: "fat", max: 50, unit: "g" },
              { labelAr: "السكريات", labelEn: "Sugars", key: "sugar", max: 30, unit: "g" },
              { labelAr: "الصوديوم", labelEn: "Sodium", key: "sodium", max: 2000, unit: "mg" },
              { labelAr: "السعرات", labelEn: "Calories", key: "calories", max: 800, unit: "kcal" },
            ].map((item) => (
              <div key={item.key} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-700">
                    {lang === "ar" ? item.labelAr : item.labelEn}
                  </span>
                  <span className="text-lg font-bold text-gray-900">
                    {meal.nutritionPer100g[item.key as keyof typeof meal.nutritionPer100g]}
                    {item.unit}
                  </span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${getNutritionColor(item.key)} rounded-full`}
                    style={{
                      width: `${Math.min(
                        (meal.nutritionPer100g[item.key as keyof typeof meal.nutritionPer100g] /
                          item.max) *
                          100,
                        100
                      )}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Potential Harms */}
          <div className="bg-rose-50 border-l-4 border-red-500 p-6 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div className="flex-1 text-right">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {lang === "ar" ? "⚠️ الأضرار المحتملة" : "⚠️ Potential Harms"}
                </h3>
                <p className="text-lg text-gray-800 leading-relaxed">
                  {lang === "ar" ? meal.healthImpactAr : meal.healthImpactEn}
                </p>
              </div>
            </div>
          </div>

          {/* Healthy Alternative */}
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div className="flex-1 text-right">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {lang === "ar" ? "✓ بديل صحي" : "✓ Healthy Alternative"}
                </h3>
                <p className="text-lg text-gray-800 leading-relaxed">
                  {lang === "ar" ? meal.alternativeAr : meal.alternativeEn}
                </p>
              </div>
            </div>
          </div>

          {/* Health Index */}
          <div className="bg-yellow-50 p-6 rounded-lg flex items-center gap-3">
            <span className="text-3xl">{healthIndexStyle.icon}</span>
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                {lang === "ar" ? "مؤشر الصحة:" : "Health Index:"}
              </h3>
              <p className="text-lg text-gray-800">
                {meal.colorIndex === "red" && (lang === "ar" ? "يحتاج تحكم شديد" : "Needs strict control")}
                {meal.colorIndex === "yellow" && (lang === "ar" ? "يحتاج تحكم" : "Needs control")}
                {meal.colorIndex === "green" && (lang === "ar" ? "مقبول عموماً" : "Generally acceptable")}
              </p>
            </div>
          </div>

          {/* QR Code Search Section */}
          {showQR && (
            <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg border-2 border-teal-200">
              <h3 className="text-xl font-bold text-gray-900">
                {lang === "ar" ? "امسح الرمز للبحث عن الوجبة" : "Scan to Search the Meal"}
              </h3>
              <div className="bg-white p-4 rounded-lg">
                <QRCodeSVG value={`https://www.google.com/search?q=${meal.nameAr}`} size={250} />
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="space-y-4 pt-8">
            <Button
              onClick={handleShowSearch}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white text-xl py-7 rounded-xl font-bold"
            >
              <QrCode className="w-6 h-6 ml-2" />
              {showQR
                ? lang === "ar"
                  ? "إخفاء البحث"
                  : "Hide Search"
                : lang === "ar"
                  ? "ابحث عن الوجبة أكثر"
                  : "Search More About Meal"}
            </Button>

            <Button
              onClick={handleTryAgain}
              className="w-full bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 hover:from-green-600 hover:via-teal-600 hover:to-blue-600 text-white text-xl py-7 rounded-xl font-bold"
            >
              <RefreshCw className="w-6 h-6 ml-2" />
              {lang === "ar" ? "جرب مرة أخرى" : "Try Again"}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
