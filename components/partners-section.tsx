"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function PartnersSection() {
  const partners = [
    {
      name: "Jira",
      url: "https://www.atlassian.com/software/jira",
      icon: "🔷",
      description: "Issue tracking",
    },
    {
      name: "Slack",
      url: "https://slack.com",
      icon: "💬",
      description: "Team communication",
    },
    {
      name: "Microsoft Teams",
      url: "https://www.microsoft.com/en-us/microsoft-teams",
      icon: "👥",
      description: "Video conferencing",
    },
    {
      name: "Gmail",
      url: "https://gmail.com",
      icon: "📧",
      description: "Email integration",
    },
    {
      name: "Outlook",
      url: "https://outlook.com",
      icon: "📅",
      description: "Calendar & email",
    },
    {
      name: "Notion",
      url: "https://www.notion.so",
      icon: "📝",
      description: "Documentation",
    },
    {
      name: "Linear",
      url: "https://linear.app",
      icon: "⚡",
      description: "Issue tracking",
    },
    {
      name: "Figma",
      url: "https://www.figma.com",
      icon: "🎨",
      description: "Design collaboration",
    },
  ]

  const handleToolClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Integrates with Your Favorite Tools</h2>
          <p className="text-gray-600">Seamlessly connect with the tools you already use</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
          {partners.map((partner, index) => (
            <Button
              key={index}
              variant="ghost"
              className="flex flex-col items-center p-6 h-auto bg-white hover:bg-college-blue/5 hover:shadow-lg transition-all duration-300 rounded-xl border border-gray-200 hover:border-college-blue/20 group"
              onClick={() => handleToolClick(partner.url)}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {partner.icon}
              </div>
              <span className="text-sm text-gray-700 font-medium mb-1 group-hover:text-college-blue transition-colors">
                {partner.name}
              </span>
              <span className="text-xs text-gray-500 text-center leading-tight">{partner.description}</span>
              <ExternalLink className="w-3 h-3 text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Click any tool to visit their website and learn more about integration possibilities
          </p>
        </div>
      </div>
    </section>
  )
}
