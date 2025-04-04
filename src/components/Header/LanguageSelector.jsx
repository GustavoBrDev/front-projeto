"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

const languages = [
  {
    code: "pt-BR",
    name: "Português (Brasil)",
    flag: "/assets/flags/flag-brazil.png",
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
        className="p-1 rounded-md hover:bg-blue-700 focus:outline-none transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Selecionar idioma"
      >
        <Image
          src={currentLanguage.flag || "/assets/flags/flag-brazil.png"}
          alt={currentLanguage.name}
          width={24}
          height={16}
          className="rounded"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 max-w-[calc(100vw-2rem)] bg-white rounded-md shadow-lg z-10 transform origin-top-right transition-all duration-200 ease-in-out">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                setCurrentLanguage(language)
                setIsOpen(false)
              }}
              className="flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors duration-150"
            >
              <Image
                src={language.flag || "/assets/flags/flag-brazil.png"}
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

