"use client"

import { useState } from "react"
import { FileText, FileEdit, Settings } from "lucide-react"
import { Header } from "./Header/Header"

export default function Dashboard() {
  const [currentDate] = useState("15/02/2025")

  return (
    <div className="min-h-screen bg-gray-100 mx-auto">
      <Header />

      {/* Subheader */}
      <div className="bg-sky-500 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <FileText className="h-6 w-6" />
              <span className="text-xl font-medium">Conselhos</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-xl font-medium">Dashboard</span>
            </div>
            <div className="text-right">
              <h2 className="text-2xl font-bold">AI PSIN MI74</h2>
              <p className="text-sm">{currentDate}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6 flex flex-col justify-center md:border-r md:pr-6 border-gray-300">
              {/* Pre-Conselho Professores */}
              <div className="bg-[#0166B4] text-white rounded-lg p-6 flex flex-col items-center text-center">
                <h3 className="text-xl font-bold mb-4">PRÉ-CONSELHO - PROFESSORES</h3>
                <p className="mb-6">
                  Clique aqui para permitir que os professores associados escrevam sobre os alunos.
                </p>
                <div className="flex justify-center">
                  <button className="bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 px-6 rounded-md">
                    Permitir
                  </button>
                </div>
              </div>

              {/* Pre-Conselho Alunos */}
              <div className="bg-[#0166B4] text-white rounded-lg p-6 flex flex-col items-center text-center">
                <h3 className="text-xl font-bold mb-4">PRÉ-CONSELHO - ALUNOS</h3>
                <p className="mb-6">
                  Clique aqui para permitir que os representantes da turma escrevam seu Pré-Conselho.
                </p>
                <div className="flex justify-center">
                  <button className="bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 px-6 rounded-md">
                    Permitir
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:pl-6">
              {/* Participantes */}
              <div className="bg-[#0166B4] text-white rounded-lg p-6 flex flex-col items-center">
                <div className="flex justify-between w-full">
                  <h3 className="text-xl font-bold">PARTICIPANTES</h3>
                  <button className="text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex-grow flex items-center justify-center my-6">
                  <span className="text-6xl font-bold">15</span>
                </div>
                <button className="bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 px-6 rounded-md w-full">
                  Ver
                </button>
              </div>

              {/* Pre-Conselho */}
              <div className="bg-[#0166B4] text-white rounded-lg p-6 flex flex-col items-center">
                <div className="flex justify-between w-full">
                  <h3 className="text-xl font-bold">PRÉ-CONSELHO</h3>
                  <button className="text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex-grow flex items-center justify-center my-6">
                  <FileEdit className="h-16 w-16" />
                </div>
                <button className="bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 px-6 rounded-md w-full">
                  Visualizar
                </button>
              </div>

              {/* Conselho */}
              <div className="bg-[#0166B4] text-white rounded-lg p-6 flex flex-col items-center">
                <div className="flex justify-between w-full">
                  <h3 className="text-xl font-bold">CONSELHO</h3>
                  <button className="text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex-grow flex items-center justify-center my-6">
                  <FileText className="h-16 w-16" />
                </div>
                <button className="bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 px-6 rounded-md w-full">
                  Ver
                </button>
              </div>

              {/* Gerenciamento */}
              <div className="bg-[#0166B4] text-white rounded-lg p-6 flex flex-col items-center">
                <div className="flex justify-between w-full">
                  <h3 className="text-xl font-bold">GERENCIAMENTO</h3>
                  <button className="text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex-grow flex items-center justify-center my-6">
                  <Settings className="h-16 w-16" />
                </div>
                <button className="bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 px-6 rounded-md w-full">
                  Gerenciar
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
