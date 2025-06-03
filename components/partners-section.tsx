export function PartnersSection() {
  const partners = [
    { name: "Notion", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Jira", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Slack", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Linear", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Figma", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Miro", logo: "/placeholder.svg?height=60&width=120" },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Integrates with Your Favorite Tools</h2>
          <p className="text-gray-600">Seamlessly connect with the tools you already use</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
