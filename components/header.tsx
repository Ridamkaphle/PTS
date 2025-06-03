"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img src="/images/pts-logo.png" alt="Progress Tech Solutions" className="h-10 w-auto mr-3" />
              <h1 className="text-2xl font-bold" style={{ color: "#005FAF" }}>
                Progress Tech Solutions
              </h1>
            </div>
          </div>

          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#features"
                className="text-gray-700 hover:text-[#005FAF] px-3 py-2 text-sm font-medium transition-colors"
              >
                Features
              </a>
              <a
                href="#demo"
                className="text-gray-700 hover:text-[#005FAF] px-3 py-2 text-sm font-medium transition-colors"
              >
                Demo
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-[#005FAF] px-3 py-2 text-sm font-medium transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#comparison"
                className="text-gray-700 hover:text-[#005FAF] px-3 py-2 text-sm font-medium transition-colors"
              >
                Why Choose Us
              </a>
              <a
                href="#blog"
                className="text-gray-700 hover:text-[#005FAF] px-3 py-2 text-sm font-medium transition-colors"
              >
                Blog
              </a>
            </div>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-[#005FAF] hover:bg-[#004080]">Book Demo</Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-[#005FAF]">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#features" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#005FAF]">
                Features
              </a>
              <a href="#demo" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#005FAF]">
                Demo
              </a>
              <a
                href="#testimonials"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#005FAF]"
              >
                Testimonials
              </a>
              <a
                href="#comparison"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#005FAF]"
              >
                Why Choose Us
              </a>
              <a href="#blog" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#005FAF]">
                Blog
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-[#005FAF] hover:bg-[#004080]">Book Demo</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
