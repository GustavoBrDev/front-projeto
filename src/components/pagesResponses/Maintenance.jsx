"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Settings, RefreshCw, Home } from "lucide-react"
import { RoutePaths } from "@/app/RoutePaths"

export default function MaintenancePage({ isPlanned = false, customMessage, estimatedTime } ) {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const title = isPlanned ? "Em Manutenção" : "Erro 500"
  const heading = isPlanned ? "Sistema em manutenção" : "Erro interno do servidor"
  const message =
    customMessage ||
    (isPlanned
      ? `Estamos realizando uma manutenção programada para melhorar nossos serviços.${estimatedTime ? ` Estaremos de volta em aproximadamente ${estimatedTime}.` : " Voltaremos em breve."}`
      : "Algo deu errado no nosso servidor. Nossa equipe técnica já foi notificada e está trabalhando para resolver o problema.")

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 to-slate-900 flex flex-col items-center justify-center px-4 text-white">
      <div className="relative mb-40 mr-32 items-center justify-center">
        <Settings size={100} className="text-slate-300 absolute" style={{ transform: `rotate(${rotation}deg)` }} />
        <Settings
          size={80}
          className="text-slate-400 absolute top-[85px] left-[35px]"
          style={{ transform: `rotate(-${rotation * 1.5}deg)` }}
        />
      </div>

      <h1 className="text-6xl md:text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-blue-300">
        {title}
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">{heading}</h2>

      <p className="text-lg text-slate-300 mb-8 text-center max-w-md">{message}</p>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-400 to-blue-400 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <Link
            href= {RoutePaths.HOME}
            className="relative flex items-center gap-2 px-8 py-3 bg-slate-800 rounded-lg font-medium transition-all duration-300 hover:bg-slate-700 focus:ring-2 focus:ring-slate-400 focus:outline-none"
          >
            <Home size={20} />
            Página inicial
          </Link>
        </div>

        {!isPlanned && (
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <button
              onClick={() => window.location.reload()}
              className="relative flex items-center gap-2 px-8 py-3 bg-blue-800 rounded-lg font-medium transition-all duration-300 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none w-full justify-center sm:w-auto"
            >
              <RefreshCw size={20} />
              Tentar novamente
            </button>
          </div>
        )}
      </div>

      {isPlanned && estimatedTime && (
        <div className="mt-8 p-4 bg-slate-700/30 rounded-lg border border-slate-600">
          <p className="text-slate-300">
            <span className="font-semibold">Tempo estimado:</span> {estimatedTime}
          </p>
        </div>
      )}
    </div>
  )
}

