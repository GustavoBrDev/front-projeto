"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

const languages = [
  {
    code: "pt-BR",
    name: "Português (Brasil)",
    flag: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-X24bs2uW5kcWHemX5MfkjGFXiq4y6A.png", // Normalmente usaríamos uma imagem local, mas estou usando a URL da imagem fornecida para demonstração
  },
]

export function LanguageSelector() {
  const [currentLanguage, setCurrentLanguage] = useState(languages[0])
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Fechar dropdown quando clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [dropdownRef])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="p-1 rounded-md hover:bg-blue-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Selecionar idioma"
      >
        <Image
          src={currentLanguage.flag || "/placeholder.svg"}
          alt={currentLanguage.name}
          width={24}
          height={16}
          className="rounded"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                setCurrentLanguage(language)
                setIsOpen(false)
              }}
              className="flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-gray-100"
            >
              <Image
                src={language.flag || "/placeholder.svg"}
                alt={language.name}
                width={20}
                height={14}
                className="rounded"
              />
              <span>{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

