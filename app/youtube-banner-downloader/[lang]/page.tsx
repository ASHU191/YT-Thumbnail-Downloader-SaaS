"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageIcon, Download, ArrowLeft, Zap, Shield, Star } from "lucide-react"
import { translations, type Language } from "@/lib/translations"
import { setStoredLanguage } from "@/lib/language-utils"
import NavigationStripe from "@/components/navigation-stripe"

interface BannerDownloaderProps {
  params: {
    lang: Language
  }
}

export default function BannerDownloader({ params }: BannerDownloaderProps) {
  const [currentLang, setCurrentLang] = useState<Language>(params.lang)
  const [url, setUrl] = useState("")
  const [banners, setBanners] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [videoTitle, setVideoTitle] = useState("")

  useEffect(() => {
    setCurrentLang(params.lang)
    setStoredLanguage(params.lang)
  }, [params.lang])

  const handleLanguageChange = (newLang: Language) => {
    setCurrentLang(newLang)
    setStoredLanguage(newLang)
    window.location.href = `/youtube-banner-downloader/${newLang}`
  }

  const extractVideoId = (url: string) => {
    const regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/
    const match = url.match(regex)
    return match ? match[1] : null
  }

  const getBanners = async () => {
    if (!url.trim()) return

    setLoading(true)
    const videoId = extractVideoId(url)

    if (!videoId) {
      alert("Please enter a valid YouTube URL")
      setLoading(false)
      return
    }

    // Generate banner sizes using video thumbnail
    const mockBanners = [
      {
        size: "2560x1440",
        url: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        quality: "Full HD (Recommended)",
        filename: `banner-${videoId}-2560x1440.jpg`,
        description: "Optimal for all devices",
      },
      {
        size: "2048x1152",
        url: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        quality: "TV Display",
        filename: `banner-${videoId}-2048x1152.jpg`,
        description: "Perfect for TV screens",
      },
      {
        size: "1920x1080",
        url: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        quality: "Desktop",
        filename: `banner-${videoId}-1920x1080.jpg`,
        description: "Standard desktop size",
      },
      {
        size: "1707x960",
        url: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        quality: "Laptop",
        filename: `banner-${videoId}-1707x960.jpg`,
        description: "Laptop screen optimized",
      },
      {
        size: "1546x423",
        url: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        quality: "Safe Area",
        filename: `banner-${videoId}-1546x423.jpg`,
        description: "Always visible area",
      },
      {
        size: "1280x720",
        url: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        quality: "Tablet",
        filename: `banner-${videoId}-1280x720.jpg`,
        description: "Tablet optimized",
      },
      {
        size: "960x540",
        url: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
        quality: "Mobile",
        filename: `banner-${videoId}-960x540.jpg`,
        description: "Mobile device size",
      },
    ]

    setBanners(mockBanners)
    setVideoTitle("Video Banners")
    setLoading(false)
  }

  const downloadImage = (url: string, filename: string) => {
    const link = document.createElement("a")
    link.href = url
    link.download = filename
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const t = translations[currentLang]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <NavigationStripe currentLang={currentLang} currentTool="banner" onLanguageChange={handleLanguageChange} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-4 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t.nav.home}
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
              {t.nav.bannerDownloader}
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">{t.banner.description}</p>
        </div>

        {/* Input Section */}
        <Card className="max-w-2xl mx-auto mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ImageIcon className="h-5 w-5 text-purple-600" />
              {t.nav.bannerDownloader}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                placeholder={t.thumbnails.placeholder}
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1"
              />
              <Button
                onClick={getBanners}
                disabled={loading}
                className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto"
              >
                {loading ? "Loading..." : t.thumbnails.getImages}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Banners Grid */}
        {banners.length > 0 && (
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-center mb-6">{videoTitle}</h2>
            <div className="grid grid-cols-1 gap-6">
              {banners.map((banner, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="relative mb-4">
                      <img
                        src={banner.url || "/placeholder.svg"}
                        alt={`Banner ${banner.size}`}
                        className="w-full rounded-lg"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg?height=720&width=1280"
                        }}
                      />
                      <Badge className="absolute top-2 right-2 bg-black/70 text-white">{banner.size}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{banner.size}</p>
                        <p className="text-sm text-gray-600">{banner.quality}</p>
                        <p className="text-xs text-gray-500">{banner.description}</p>
                      </div>
                      <Button
                        onClick={() => downloadImage(banner.url, banner.filename)}
                        className="bg-purple-600 hover:bg-purple-700"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        {t.thumbnails.download}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{t.home.features.lightningFast}</h3>
              <p className="text-gray-600 text-sm">{t.home.features.lightningFastDesc}</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{t.home.features.free}</h3>
              <p className="text-gray-600 text-sm">{t.home.features.freeDesc}</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Star className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{t.home.features.hdQuality}</h3>
              <p className="text-gray-600 text-sm">{t.home.features.hdQualityDesc}</p>
            </CardContent>
          </Card>
        </div>

        {/* About Section */}
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>{t.banner.about.title}</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="mb-4">{t.banner.about.description}</p>

              <h3 className="text-xl font-semibold mb-3">{t.banner.about.howToUse.title}</h3>
              <ol className="list-decimal list-inside mb-6 space-y-2">
                {t.banner.about.howToUse.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>

              <h3 className="text-xl font-semibold mb-3">{t.banner.about.whatIs.title}</h3>
              <p className="mb-6">{t.banner.about.whatIs.description}</p>

              <h3 className="text-xl font-semibold mb-3">{t.banner.about.benefits.title}</h3>
              <ul className="list-disc list-inside mb-6 space-y-2">
                {t.banner.about.benefits.list.map((item, index) => (
                  <li key={index}>
                    <strong>{item.title}</strong> {item.description}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold mb-3">{t.banner.about.recommendedSize.title}</h3>
              <p className="mb-4">{t.banner.about.recommendedSize.description}</p>

              <h3 className="text-xl font-semibold mb-3">{t.banner.about.availableSizes.title}</h3>
              <ul className="list-disc list-inside mb-6 space-y-1">
                {t.banner.about.availableSizes.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold mb-3">{t.banner.about.download.title}</h3>
              <p className="mb-6">{t.banner.about.download.description}</p>

              <h3 className="text-xl font-semibold mb-3">{t.banner.about.legal.title}</h3>
              <p className="mb-6">{t.banner.about.legal.description}</p>

              <h3 className="text-xl font-semibold mb-3">{t.banner.about.faq.title}</h3>
              <div className="space-y-4">
                {t.banner.about.faq.questions.map((q, index) => (
                  <div key={index}>
                    <h4 className="font-semibold">{q.question}</h4>
                    <p>{q.answer}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
