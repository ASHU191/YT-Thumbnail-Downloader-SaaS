"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Download, ArrowLeft, Zap, Shield, Star } from "lucide-react"
import { translations, type Language } from "@/lib/translations"
import { setStoredLanguage } from "@/lib/language-utils"
import NavigationStripe from "@/components/navigation-stripe"

interface ProfilePicDownloaderProps {
  params: {
    lang: Language
  }
}

export default function ProfilePicDownloader({ params }: ProfilePicDownloaderProps) {
  const [currentLang, setCurrentLang] = useState<Language>(params.lang)
  const [url, setUrl] = useState("")
  const [profilePics, setProfilePics] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [videoTitle, setVideoTitle] = useState("")

  useEffect(() => {
    setCurrentLang(params.lang)
    setStoredLanguage(params.lang)
  }, [params.lang])

  const handleLanguageChange = (newLang: Language) => {
    setCurrentLang(newLang)
    setStoredLanguage(newLang)
    window.location.href = `/youtube-profile-picture-downloader/${newLang}`
  }

  const extractVideoId = (url: string) => {
    const regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/
    const match = url.match(regex)
    return match ? match[1] : null
  }

  const getProfilePics = async () => {
    if (!url.trim()) return

    setLoading(true)
    const videoId = extractVideoId(url)

    if (!videoId) {
      alert("Please enter a valid YouTube URL")
      setLoading(false)
      return
    }

    // Generate profile picture sizes using video thumbnail
    const mockProfilePics = [
      {
        size: "1920x1920",
        url: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        quality: "Ultra High Quality",
        filename: `profile-${videoId}-1920x1920.jpg`,
      },
      {
        size: "1280x1280",
        url: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        quality: "High Quality",
        filename: `profile-${videoId}-1280x1280.jpg`,
      },
      {
        size: "800x800",
        url: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        quality: "Recommended",
        filename: `profile-${videoId}-800x800.jpg`,
      },
      {
        size: "400x400",
        url: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        quality: "Standard",
        filename: `profile-${videoId}-400x400.jpg`,
      },
      {
        size: "240x240",
        url: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
        quality: "Small",
        filename: `profile-${videoId}-240x240.jpg`,
      },
      {
        size: "176x176",
        url: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
        quality: "Mobile",
        filename: `profile-${videoId}-176x176.jpg`,
      },
      {
        size: "88x88",
        url: `https://img.youtube.com/vi/${videoId}/default.jpg`,
        quality: "Tiny",
        filename: `profile-${videoId}-88x88.jpg`,
      },
    ]

    setProfilePics(mockProfilePics)
    setVideoTitle("Video Profile Pictures")
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
      <NavigationStripe currentLang={currentLang} currentTool="profile" onLanguageChange={handleLanguageChange} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-4 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t.nav.home}
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              {t.nav.profilePicDownloader}
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">{t.profilePic.description}</p>
        </div>

        {/* Input Section */}
        <Card className="max-w-2xl mx-auto mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-blue-600" />
              {t.nav.profilePicDownloader}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                placeholder="Paste YouTube video URL here..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1"
              />
              <Button
                onClick={getProfilePics}
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto"
              >
                {loading ? "Loading..." : t.thumbnails.getImages}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Profile Pictures Grid */}
        {profilePics.length > 0 && (
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-center mb-6">{videoTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {profilePics.map((pic, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="relative mb-4">
                      <img
                        src={pic.url || "/placeholder.svg"}
                        alt={`Profile Picture ${pic.size}`}
                        className="w-full rounded-lg aspect-square object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg?height=400&width=400"
                        }}
                      />
                      <Badge className="absolute top-2 right-2 bg-black/70 text-white">{pic.size}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{pic.size}</p>
                        <p className="text-sm text-gray-600">{pic.quality}</p>
                      </div>
                      <Button
                        onClick={() => downloadImage(pic.url, pic.filename)}
                        className="bg-blue-600 hover:bg-blue-700"
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
              <CardTitle>About YouTube Profile Picture Downloader</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="mb-4">
                Looking to download YouTube profile pictures (also known as channel logos or avatars)? Our YouTube
                Profile Picture aka PFP Downloader allows you to view and download high-resolution profile images from
                any YouTube channel.
              </p>

              <h3 className="text-xl font-semibold mb-3">How to Use the YouTube Profile Picture Downloader:</h3>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Step 1: Paste the YouTube video URL.</li>
                <li>Step 2: Select your desired resolution from the available options.</li>
                <li>Step 3: Click "Download".</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Available Profile Picture Sizes:</h3>
              <ul className="list-disc list-inside mb-6 space-y-1">
                <li>1920x1920 (Ultra High Quality)</li>
                <li>1280x1280 (High Quality)</li>
                <li>800x800 (Recommended by YouTube)</li>
                <li>400x400 (Standard)</li>
                <li>240x240 (Small)</li>
                <li>176x176 (Mobile)</li>
                <li>88x88 (Tiny)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Why Use Our YouTube Profile Picture Downloader?</h3>

              <h4 className="text-lg font-semibold mb-2">Multiple Size Options:</h4>
              <p className="mb-4">
                Get the exact size you need for your project, from tiny 88x88 icons to high-resolution 1920x1920 images.
              </p>

              <h4 className="text-lg font-semibold mb-2">High-Resolution Image Quality:</h4>
              <p className="mb-4">
                Download the profile pictures in the same resolution as they appear on YouTube. Perfect for use in
                websites, presentations, or personal projects.
              </p>

              <h4 className="text-lg font-semibold mb-2">Engagement Boost:</h4>
              <p className="mb-6">
                A high-quality, memorable profile picture can enhance your online identity and attract more subscribers
                to your YouTube channel.
              </p>

              <h3 className="text-xl font-semibold mb-3">Legal and Privacy Considerations:</h3>
              <p className="mb-6">
                Our tool respects privacy and adheres to YouTube's Terms of Service. It is important to download and use
                profile pictures in compliance with copyright laws. You are solely responsible for how you use the
                images, ensuring they are used ethically and legally.
              </p>

              <h3 className="text-xl font-semibold mb-3">Frequently Asked Questions (FAQ):</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Is this tool free to use?</h4>
                  <p>Yes! The YouTube Profile Picture Downloader is completely free to use.</p>
                </div>
                <div>
                  <h4 className="font-semibold">Can I download images anonymously?</h4>
                  <p>You don't need to provide any personal information.</p>
                </div>
                <div>
                  <h4 className="font-semibold">What image resolution can I download?</h4>
                  <p>
                    The tool offers various resolutions, including HD quality (1280x1280) and standard resolutions like
                    800x800 and 400x400.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Is there a limit on how many images I can download?</h4>
                  <p>No! You can download as many YouTube profile pictures as you need.</p>
                </div>
                <div>
                  <h4 className="font-semibold">Is the tool compatible with all devices?</h4>
                  <p>Yes, it works perfectly on Windows, Mac, Android, and iOS devices with an updated browser.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
