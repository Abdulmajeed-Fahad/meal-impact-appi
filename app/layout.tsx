import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "اختر وجبتك واكتشف تأثيرها | Choose Your Meal and Discover Its Impact",
  description: "Interactive meal analysis app for Saudi/Gulf cuisine",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta
          name="viewport"
          content="width=1080, height=1920, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
