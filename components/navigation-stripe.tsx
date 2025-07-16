"use client"

import Link from "next/link"
import { Globe, ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { translations, type Language, supportedLanguages } from "@/lib/translations"
import { useState } from "react"

interface NavigationStripeProps {
  currentLang: Language
  currentTool: string
  onLanguageChange: (lang: Language) => void
}

export default function NavigationStripe({ currentLang, currentTool, onLanguageChange }: NavigationStripeProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const t = translations[currentLang]

  const navItems = [
    { key: "home", href: "/", label: t.nav.home, icon: "🏠" },
    {
      key: "thumbnail",
      href: `/youtube-thumbnail-downloader/${currentLang}`,
      label: t.nav.thumbnailDownloader,
      icon: "📺",
    },
    {
      key: "profile",
      href: `/youtube-profile-picture-downloader/${currentLang}`,
      label: t.nav.profilePicDownloader,
      icon: "👤",
    },
    { key: "banner", href: `/youtube-banner-downloader/${currentLang}`, label: t.nav.bannerDownloader, icon: "🖼️" },
  ]

  return (
    <nav className="bg-gray-800 text-white py-3 px-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <img src="/placeholder.svg?height=32&width=32" alt="YT Tools Logo" className="w-8 h-8 rounded-lg" />
          <span className="text-xl font-bold hidden sm:block">YT Tools</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-2">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                currentTool === item.key ? "bg-gray-700 text-white shadow-md" : "hover:bg-gray-700/50 hover:text-white"
              }`}
            >
              <span className="text-sm">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button & Language Selector */}
        <div className="flex items-center space-x-3">
          {/* Language Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600 transition-colors"
              >
                <Globe className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">
                  {supportedLanguages.find((lang) => lang.code === currentLang)?.flag}{" "}
                  {supportedLanguages.find((lang) => lang.code === currentLang)?.shortName}
                </span>
                <span className="sm:hidden">{supportedLanguages.find((lang) => lang.code === currentLang)?.flag}</span>
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {supportedLanguages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => onLanguageChange(lang.code)}
                  className={`cursor-pointer ${currentLang === lang.code ? "bg-gray-100" : ""}`}
                >
                  <span className="mr-3">{lang.flag}</span>
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-white hover:bg-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-3 pb-3 border-t border-gray-700">
          <div className="flex flex-col space-y-2 mt-3">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  currentTool === item.key
                    ? "bg-gray-700 text-white shadow-md"
                    : "hover:bg-gray-700/50 hover:text-white"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
