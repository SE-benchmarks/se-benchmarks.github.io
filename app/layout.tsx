import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Code-Fix Bench",
  description: "Evaluating AI Models on Real-World Code Repair Tasks",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/code-fix-bench/_next/static/css/app/layout.css" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
