"use client"

import { useState } from "react"
import { Bell, ChevronDown, Filter, Search } from "lucide-react"
import { cn } from "@/lib/utils"
import PreConselhoDetalhes from "./pre-conselho-detalhes"

export default function PreConselhos() {
  const [conselhos, setConselhos] = useState([
    {
      id: "1",
      title: "AI PSIN 2023/2 INT 1",
      dates: [
        { date: "16/02/2025", action: "Clique para abrir" },
        { date: "12/02/2025", action: "Clique para abrir" },
        { date: "12/12/2024", action: "Clique para abrir" },
        { date: "10/11/2024", action: "Clique para abrir" },
      ],
      isOpen: false,
      isExpanded: false,
    },
    {
      id: "2",
      title: "AI PSIN 2023/2 INT 2",
      dates: [
        { date: "15/02/2025", action: "Clique para abrir" },
        { date: "11/02/2025", action: "Clique para abrir" },
        { date: "10/12/2024", action: "Clique para abrir" },
      ],
      isOpen: false,
      isExpanded: false,
    },
    {
      id: "3",
      title: "AI PSIN 2023/2 INT 3",
      dates: [
        { date: "14/02/2025", action: "Clique para abrir" },
        { date: "10/02/2025", action: "Clique para abrir" },
        { date: "09/12/2024", action: "Clique para abrir" },
      ],
      isOpen: false,
      isExpanded: false,
    },
    {
      id: "4",
      title: "AI PSIN 2023/2 INT 4",
      dates: [
        { date: "13/02/2025", action: "Clique para abrir" },
        { date: "09/02/2025", action: "Clique para abrir" },
        { date: "08/12/2024", action: "Clique para abrir" },
      ],
      isOpen: false,
      isExpanded: false,
    },
  ])

  const [selectedConselho, setSelectedConselho] = useState(null)

  const toggleConselho = (id) => {
    setConselhos(
      conselhos.map((conselho) => (conselho.id === id ? { ...conselho, isExpanded: !conselho.isExpanded } : conselho)),
    )
  }

  const openConselhoDetails = (title, date) => {
    setSelectedConselho({
      title,
      date,
      dataEnvio: "06/12/2025", // Data fixa para exemplo
    })
  }

  const closeConselhoDetails = () => {
    setSelectedConselho(null)
  }

  // Se um conselho estiver selecionado, mostrar a tela de detalhes
  if (selectedConselho) {
    return (
      <PreConselhoDetalhes
        title={selectedConselho.title}
        date={selectedConselho.date}
        dataEnvio={selectedConselho.dataEnvio}
        onClose={closeConselhoDetails}
      />
    )
  }

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
        {/* Título Pré-Conselhos */}
        <div className="px-12 py-6">
          <div className="flex items-center gap-3 text-white text-3xl font-bold mb-6">
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
            <h1>Pré-Conselhos</h1>
          </div>
        </div>

        {/* Container branco que envolve todo o conteúdo */}
        <div className="bg-white rounded-t-3xl mx-12 shadow-lg">
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto pt-6 pb-4">
            <div className="flex items-center justify-between bg-gray-100 rounded-full shadow-md overflow-hidden">
              <div className="flex items-center flex-1">
                <div className="pl-4 py-2">
                  <Search className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="text"
                  placeholder="Pesquise aqui..."
                  className="py-2 px-2 w-full bg-transparent border-none focus:outline-none text-gray-700"
                />
              </div>
              <div className="pr-4 py-2 border-l border-gray-200">
                <Filter className="h-5 w-5 text-gray-500" />
              </div>
            </div>
          </div>

          {/* Conselho Items */}
          <div className="space-y-4 px-6 pb-6">
            {conselhos.map((conselho) => (
              <div key={conselho.id} className="rounded-xl overflow-hidden">
                <div
                  className="bg-blue-900 text-white p-4 flex items-center justify-between cursor-pointer"
                  onClick={() => toggleConselho(conselho.id)}
                >
                  <div className="flex items-center gap-3">
                    <svg
                      width="20"
                      height="20"
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
                    <span className="font-medium">{conselho.title}</span>
                  </div>
                  <ChevronDown
                    className={cn("h-5 w-5 transition-transform", {
                      "transform rotate-180": conselho.isExpanded,
                    })}
                  />
                </div>
                {conselho.isExpanded && (
                  <div className="bg-white border border-gray-200">
                    {conselho.dates.map((date, index) => (
                      <div
                        key={index}
                        className={cn("flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer", {
                          "border-b": index !== conselho.dates.length - 1,
                        })}
                        onClick={() => openConselhoDetails(conselho.title, date.date)}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-gray-700">{date.date}</span>
                        </div>
                        <span className="text-gray-400 text-sm">{date.action}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
