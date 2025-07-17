import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'YT Media Downloader',
  description: 'Created with Love',
  generator: 'Muhammad Arsalan Aftab',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
