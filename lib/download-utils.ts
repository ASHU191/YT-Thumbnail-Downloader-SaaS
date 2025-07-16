export const downloadImage = async (imageUrl: string, filename: string): Promise<void> => {
  try {
    // Check if it's a placeholder image
    if (imageUrl.includes("placeholder.svg")) {
      // For placeholder images, just open in new tab
      const link = document.createElement("a")
      link.href = imageUrl
      link.download = filename
      link.target = "_blank"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      return
    }

    // For real images, try to fetch and download
    const response = await fetch(imageUrl, {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })

    if (response.ok) {
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)

      const link = document.createElement("a")
      link.href = url
      link.download = filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      // Clean up the object URL
      window.URL.revokeObjectURL(url)
    } else {
      throw new Error("Failed to fetch image")
    }
  } catch (error) {
    console.error("Download error:", error)
    // Fallback: open image in new tab
    const link = document.createElement("a")
    link.href = imageUrl
    link.download = filename
    link.target = "_blank"
    link.rel = "noopener noreferrer"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
}

export const downloadAllImages = async (images: Array<{ url: string; filename: string }>): Promise<void> => {
  for (const image of images) {
    await downloadImage(image.url, image.filename)
    // Add small delay between downloads
    await new Promise((resolve) => setTimeout(resolve, 500))
  }
}
