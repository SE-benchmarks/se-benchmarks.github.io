"use client"

import { useState } from "react"
import { FileCode, FileText, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LeaderboardTable } from "./components/leaderboard-table"
import { NewsSection } from "./components/news-section"

const liteSubmissions = [
  {
    model: "CodeFixer-Lite",
    resolved: 78.3,
    organization: "AI Research Lab",
    date: "2024-01-25",
    repoUrl: "https://github.com/example/codefixer-lite",
  },
  {
    model: "BugNet-Lite",
    resolved: 72.1,
    organization: "Tech University",
    date: "2024-01-20",
    repoUrl: "https://github.com/example/bugnet-lite",
  },
  {
    model: "RepairGPT-Lite",
    resolved: 69.8,
    organization: "Open Source Team",
    date: "2024-01-15",
    repoUrl: "https://github.com/example/repairgpt-lite",
  },
]

const completeSubmissions = [
  {
    model: "CodeFixer-Full",
    resolved: 23.5,
    organization: "AI Research Lab",
    date: "2024-01-25",
    repoUrl: "https://github.com/example/codefixer-full",
  },
  {
    model: "BugNet-Full",
    resolved: 21.8,
    organization: "Tech University",
    date: "2024-01-20",
    repoUrl: "https://github.com/example/bugnet-full",
  },
  {
    model: "RepairGPT-Full",
    resolved: 19.2,
    organization: "Open Source Team",
    date: "2024-01-15",
    repoUrl: "https://github.com/example/repairgpt-full",
  },
]

const news = [
  {
    date: "2024-01-25",
    title: "Introducing Code-Fix Bench v1.0",
    content: "A new benchmark for evaluating automated code repair models",
    link: "#",
  },
  {
    date: "2024-01-20",
    title: "First baseline models released",
    content: "Check out our initial baseline models and their performance",
    link: "#",
  },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState("lite")

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
            Code-Fix Bench
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            CodeFix-Bench: A Large-scale Benchmark for Learning to Localize Code Changes from Issue Reports
          </p>
          <div className="text-sm text-muted-foreground mb-2">In Review (2025)</div>
          <div className="text-sm text-muted-foreground mb-8">Faizan Khan and Azeem Ghumman</div>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="outline" className="gap-2">
              <FileText className="w-4 h-4" />
              Paper
            </Button>
            <Button variant="outline" className="gap-2">
              <FileCode className="w-4 h-4" />
              Code
            </Button>
            <Button variant="outline" className="gap-2" asChild>
              <a href="mailto:faizan10114@gmail.com">
                <Upload className="w-4 h-4" />
                Submit
              </a>
            </Button>
          </div>
        </div>

        {/* News Section */}
        <NewsSection news={news} />

        {/* Benchmark Type Tabs */}
        <Tabs defaultValue="lite" className="mb-8" onValueChange={(value) => setActiveTab(value)}>
          <TabsList className="grid w-full max-w-xl mx-auto grid-cols-2">
            <TabsTrigger value="lite">Lite</TabsTrigger>
            <TabsTrigger value="complete">Complete</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Leaderboard */}
        <div className="space-y-8">
          {activeTab === "lite" ? (
            <LeaderboardTable submissions={liteSubmissions} />
          ) : (
            <LeaderboardTable submissions={completeSubmissions} />
          )}
        </div>
      </div>
    </div>
  )
}

