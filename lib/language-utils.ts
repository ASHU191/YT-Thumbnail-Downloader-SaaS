import type { Language } from "./translations"

export function getStoredLanguage(): Language {
  if (typeof window === "undefined") return "en"

  try {
    const stored = localStorage.getItem("preferred-language")
    if (stored && ["en", "es", "fr", "de", "pt"].includes(stored)) {
      return stored as Language
    }
  } catch (error) {
    console.error("Error reading from localStorage:", error)
  }

  return "en"
}

export function setStoredLanguage(language: Language): void {
  if (typeof window === "undefined") return

  try {
    localStorage.setItem("preferred-language", language)
  } catch (error) {
    console.error("Error writing to localStorage:", error)
  }
}

export function getBrowserLanguage(): Language {
  if (typeof window === "undefined") return "en"

  const browserLang = navigator.language.split("-")[0]

  if (["es", "fr", "de", "pt"].includes(browserLang)) {
    return browserLang as Language
  }

  return "en"
}
