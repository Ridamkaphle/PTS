"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Users, BarChart3, TrendingUp, MessageSquare, Calendar } from "lucide-react"
import { useState } from "react"

export function FeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const features = [
    {
      icon: FileText,
      title: "Instant PRD Generation",
      description:
        "Create comprehensive Product Requirements Documents in minutes, not hours. AI analyzes your inputs and generates structured, detailed PRDs.",
      color: "from-college-blue to-college-blue-light",
      bgColor: "bg-college-gray",
    },
    {
      icon: Users,
      title: "User Story Creation",
      description:
        "Transform requirements into actionable user stories with acceptance criteria. Perfect for agile teams and sprint planning.",
      color: "from-college-blue-light to-college-blue-lighter",
      bgColor: "bg-college-gray",
    },
    {
      icon: BarChart3,
      title: "Smart Prioritization",
      description:
        "Use RICE, MoSCoW, and custom frameworks to prioritize features. AI considers impact, effort, and strategic alignment.",
      color: "from-college-blue-lighter to-college-blue",
      bgColor: "bg-college-gray",
    },
    {
      icon: TrendingUp,
      title: "Market Intelligence",
      description:
        "Monitor competitors and market trends in real-time. Get insights on feature gaps and opportunities.",
      color: "from-college-blue to-college-blue-dark",
      bgColor: "bg-college-gray",
    },
    {
      icon: MessageSquare,
      title: "Feedback Analysis",
      description:
        "Analyze user feedback from support tickets, reviews, and surveys. Extract actionable insights automatically.",
      color: "from-college-blue-dark to-college-blue-light",
      bgColor: "bg-college-gray",
    },
    {
      icon: Calendar,
      title: "Roadmap Builder",
      description:
        "Generate visual roadmaps from strategy inputs. Keep stakeholders aligned with timeline and milestone tracking.",
      color: "from-college-blue-light to-college-blue",
      bgColor: "bg-college-gray",
    },
  ]

  return (
    <section id="features" className="py-20 bg-white animate-on-scroll">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Everything Product Managers Need</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our AI agent handles the heavy lifting so you can focus on strategy and innovation. From ideation to
            execution, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden animate-fade-in-up ${
                hoveredIndex === index ? "scale-105 -translate-y-2" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              <CardHeader className="relative z-10">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-college-blue transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative z-10">
                <CardDescription className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </CardDescription>
              </CardContent>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-college-blue-light transition-colors duration-500"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
