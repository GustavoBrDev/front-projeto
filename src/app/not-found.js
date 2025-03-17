"use client"

/**
 * Página de erro 404 do aplicativo.
 *
 * @author Gustavo Stinghen
 * @author Joana Reinert Voigt(documentação)
 * @since 13/03/2025
 */
import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowLeft, AlertCircle } from "lucide-react"

export default function NotFound() {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Iniciar animação quando o componente montar
    setIsAnimating(true)

    // Efeito de flutuação para o ícone
    const interval = setInterval(() => {
      setIsAnimating((prev) => !prev)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-950 flex flex-col items-center justify-center px-4 text-white">
      <div className={`transition-transform duration-1000 ${isAnimating ? "translate-y-2" : "-translate-y-2"}`}>
        <AlertCircle size={120} className="text-blue-300 mb-6" />
      </div>

      <h1 className="text-6xl md:text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
        404
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Página não encontrada</h2>

      <p className="text-lg text-blue-200 mb-8 text-center max-w-md">
        Ops! Parece que você se perdeu no caminho. A página que você está procurando não existe ou foi movida.
      </p>

      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-blue-800 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <Link
          href="/"
          className="relative flex items-center gap-2 px-8 py-3 bg-blue-800 rounded-lg font-medium transition-all duration-300 hover:bg-blue-900 focus:ring-2 focus:bg-blue-400 focus:outline-none"
        >
          <ArrowLeft size={20} />
          Voltar para a página inicial
        </Link>
      </div>

    </div>
  )
}

