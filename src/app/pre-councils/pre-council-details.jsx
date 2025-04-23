"use client"

import { Bell, ChevronDown } from "lucide-react"
import { useRouter } from "next/navigation"

export default function PreConselhoDetalhes({
  date = "14/02/2025",
  title = "AI PSIN 2023/2 INT 1",
  dataEnvio = "06/12/2025",
  onClose,
}) {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white flex items-center">
        <div className="p-4 border-r border-blue-700">
          <div className="text-2xl font-bold">CS</div>
        </div>
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="p-4 border-r border-blue-700">
            <span className="font-medium">Menu -</span>
          </div>
        ))}
        <div className="ml-auto flex items-center gap-4 p-4">
          <div className="flex items-center gap-2">
            <span className="text-sm">🇧🇷</span>
            <ChevronDown className="h-4 w-4" />
          </div>
          <Bell className="h-5 w-5" />
          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-blue-600 font-bold">
            U
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="bg-sky-400 flex-1">
        {/* Título Pré-conselho */}
        <div className="px-12 py-6 flex justify-between items-center">
          <div className="flex items-center gap-3 text-white text-3xl font-bold">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M19 5V19H5V5H19ZM21 3H3V21H21V3ZM17 17H7V16H17V17ZM17 15H7V14H17V15ZM17 12H7V7H17V12Z"
                fill="currentColor"
              />
            </svg>
            <h1>Pré-conselho {date}</h1>
          </div>

          <div className="text-white text-right">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-sm">Data de Envio: {dataEnvio}</p>
          </div>
        </div>

        {/* Container branco que envolve todo o conteúdo */}
        <div className="bg-white rounded-t-3xl mx-12 shadow-lg p-8">
          <div className="space-y-8">
            {/* Professor */}
            <div>
              <h2 className="text-xl font-bold mb-2">Professor</h2>
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full flex items-center gap-1">
                  <span className="h-4 w-4 bg-gray-500 rounded-full"></span>
                  <span>Romario Hornburg</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            </div>

            {/* Pontos positivos */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Pontos positivos</h2>
              <p className="text-gray-700 text-sm">
                Gostaria de expressar minha profunda admiração pelo professor Romário. Sua dedicação incansável ao
                ensino e sua paixão pela educação são verdadeiramente inspiradoras. Ele possui uma habilidade única de
                tornar até os tópicos mais complexos acessíveis e interessantes para todos os alunos. Além disso, sua
                paciência e empatia criam um ambiente de aprendizado acolhedor e motivador.
              </p>
            </div>

            {/* Pontos de melhoria */}
            <div>
              <h2 className="text-xl font-bold mb-4">Pontos de melhoria</h2>
              <p className="text-gray-700 text-sm">
                Gostaria de expressar minha profunda admiração pelo professor Romário. Sua dedicação incansável ao
                ensino e sua paixão pela educação são verdadeiramente inspiradoras. Ele possui uma habilidade única de
                tornar até os tópicos mais complexos acessíveis e interessantes para todos os alunos. Além disso, sua
                paciência e empatia criam um ambiente de aprendizado acolhedor e motivador.
              </p>
            </div>

            {/* Sugestões de Melhoria */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Sugestões de Melhoria</h2>
              <p className="text-gray-700 text-sm">
                Gostaria de expressar minha profunda admiração pelo professor Romário. Sua dedicação incansável ao
                ensino e sua paixão pela educação são verdadeiramente inspiradoras. Ele possui uma habilidade única de
                tornar até os tópicos mais complexos acessíveis e interessantes para todos os alunos. Além disso, sua
                paciência e empatia criam um ambiente de aprendizado acolhedor e motivador.
              </p>
            </div>

            {/* Infraestrutura */}
            <div>
              <h2 className="text-xl font-bold mb-2">Infraestrutura</h2>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
