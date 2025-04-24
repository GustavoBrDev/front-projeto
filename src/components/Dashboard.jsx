"use client"

import { useState, useEffect } from "react"
import { FileText, Users, Clock, PieChart } from "lucide-react"
import { Header } from "./Header/Header"
import { BlueBackground } from "./topBar/BlueBackground"
import { WhiteContainer } from "./White-Container"
import { DashboardTitle } from "./topBar/DashboardTitle"
import { RoutePaths } from "@/app/RoutePaths"
import Link from "next/link"


// Student data for the student list view
const studentData = [
  { id: 1, name: "Fernanda Agnes Amorim", image: "/placeholder.svg?height=40&width=40" },
  { id: 2, name: "Pedro Augusto Wilhelm", image: "/placeholder.svg?height=40&width=40" },
  { id: 3, name: "Gabriela Carolina Pallense", image: "/placeholder.svg?height=40&width=40" },
  { id: 4, name: "André Felipe Witt", image: "/placeholder.svg?height=40&width=40" },
  { id: 5, name: "Fernanda Agnes Amorim", image: "/placeholder.svg?height=40&width=40" },
  { id: 6, name: "Pedro Augusto Wilhelm", image: "/placeholder.svg?height=40&width=40" },
]

// Chart data for the feedback visualization
const chartData = {
  viewed: 40,
  notViewed: 60,
}

export default function Dashboard() {
  const [currentDate] = useState("15/02/2025")
  const [currentView, setCurrentView] = useState("default") // "default", "countdown", "students", "chart"
  const [countdown, setCountdown] = useState({ hours: 10, minutes: 32, seconds: 47 })
  const [isLoading, setIsLoading] = useState(false) // Adicionei para não quebrar

  // Handle countdown timer
  useEffect(() => {
    if (currentView !== "countdown") return

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(timer)
          return prev
        }
      <BlueBackground>
        <DashboardTitle iconWidth={40} iconHeight={40} textSize={"3xl"} turma="AI PSIN 2023/2 INT 1" currentDate={currentDate} />
      </BlueBackground>

        let newSeconds = prev.seconds - 1
        let newMinutes = prev.minutes
        let newHours = prev.hours

        if (newSeconds < 0) {
          newSeconds = 59
          newMinutes -= 1
        }

        if (newMinutes < 0) {
          newMinutes = 59
          newHours -= 1
        }

        return { hours: newHours, minutes: newMinutes, seconds: newSeconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [currentView])

  const handlePermitClick = () => {
    setCurrentView("countdown")
  }

  const handleCancelClick = () => {
    setCurrentView("default")
  }

  // Render the left column based on the current view
  const renderLeftColumn = () => {
    switch (currentView) {
      case "countdown":
        return (
          <div className="space-y-6 flex flex-col justify-center md:border-r md:pr-6 border-gray-300">
            {/* Countdown Timer */}
            <div className="bg-sky-500 text-white rounded-lg p-6 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-4">Liberação do Feedback</h3>
              <div className="flex justify-center items-center gap-2 my-6">
                <div className="flex flex-col items-center">
                  <span className="text-6xl font-bold">{countdown.hours.toString().padStart(2, "0")}</span>
                  <span className="text-xs mt-1">HORAS</span>
                </div>
                <span className="text-6xl font-bold">:</span>
                <div className="flex flex-col items-center">
                  <span className="text-6xl font-bold">{countdown.minutes.toString().padStart(2, "0")}</span>
                  <span className="text-xs mt-1">MINUTOS</span>
                </div>
                <span className="text-6xl font-bold">:</span>
                <div className="flex flex-col items-center">
                  <span className="text-6xl font-bold">{countdown.seconds.toString().padStart(2, "0")}</span>
                  <span className="text-xs mt-1">SEGUNDOS</span>
                </div>
              </div>
              <button
                className="bg-[var(--bluePrimary)] hover:bg-blue-900 text-white font-medium py-2 px-15 rounded-[24px] w-auto"
                onClick={handleCancelClick}
              >
                Cancelar Liberação
              </button>
            </div>
          </div>
        )

      case "students":
        return (
          <div className="space-y-6 flex flex-col justify-center md:border-r md:pr-6 border-gray-300">
            <div className="bg-white rounded-lg p-6 flex flex-col">
              <h3 className="text-lg font-medium mb-4 border-b pb-2">Alunos a Chamar</h3>
              <div className="space-y-2">
                {studentData.map((student) => (
                  <div
                    key={student.id}
                    className="flex items-center justify-between bg-[var(--bluePrimary)] text-white p-2 rounded-[24px]"
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={student.image || "/placeholder.svg"}
                        alt={student.name}
                        className="w-8 h-8 rounded-full bg-white"
                      />
                      <span className="text-sm">{student.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <img src="/assets/chats/white-chat.png" />
                      </div>
                      <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                        <img src="/assets/rights/green-right-filled-icon.png"/>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case "chart":
        return (
          <div className="space-y-6 flex flex-col justify-center md:border-r md:pr-6 border-gray-300">
            <div className="bg-white rounded-lg p-6 flex flex-col items-center">
              <h3 className="text-lg font-medium mb-4">Visualização de Feedback</h3>
              {/* Pie Chart */}
              <div className="relative my-4">
                <svg viewBox="0 0 100 100" className="w-48 h-48 rounded-full">
                  {/* Background circle */}
                  <circle cx="50" cy="50" r="50" fill="white" />
                  {/* Purple segment (Not Viewed) */}
                  <path
                    d={`M 50 50 L 50 0 A 50 50 0 ${chartData.notViewed > 50 ? 1 : 0} 1 ${
                      50 + 50 * Math.sin((2 * Math.PI * chartData.notViewed) / 100)
                    } ${50 - 50 * Math.cos((2 * Math.PI * chartData.notViewed) / 100)} Z`}
                    fill="#8A2BE2"
                  />
                  {/* Turquoise segment (Viewed) */}
                  <path
                    d={`M 50 50 L ${50 + 50 * Math.sin((2 * Math.PI * chartData.notViewed) / 100)} ${
                      50 - 50 * Math.cos((2 * Math.PI * chartData.notViewed) / 100)
                    } A 50 50 0 ${chartData.viewed > 50 ? 1 : 0} 1 50 0 Z`}
                    fill="#40E0D0"
                  />
                </svg>
              </div>
              {/* Legend */}
              <div className="flex flex-col gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#40E0D0]"></div>
                  <span className="text-sm">Visualizado</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#8A2BE2]"></div>
                  <span className="text-sm">Não Visualizado</span>
                </div>
              </div>
              <button
                className="bg-[#0166B4] hover:bg-blue-800 text-white font-medium py-2 px-6 rounded-md w-full"
                onClick={() => setCurrentView("students")}
              >
                Ver Alunos
              </button>
            </div>
          </div>
        )

      default:
        return (
          <div className="space-y-6 flex flex-col justify-center md:border-r md:pr-6 border-gray-300">
            {/* Pre-Conselho Professores */}
            <div className="bg-[#0166B4] text-white rounded-lg p-6 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-4">PRÉ-CONSELHO PROFESSORES</h3>
              <p className="mb-6">Clique aqui para permitir que os professores associados escrevam sobre os alunos.</p>
              <div className="flex justify-center">
                <button
                  className="bg-[var(--bluePrimary)] hover:bg-blue-900 text-white font-medium py-2 px-6 rounded-[24px] w-full"
                  onClick={handlePermitClick}
                >
                  Permitir
                </button>
              </div>
            </div>
            {/* Pre-Conselho Alunos */}
            <div className="bg-[#0166B4] text-white rounded-lg p-6 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-4">PRÉ-CONSELHO ALUNOS</h3>
              <p className="mb-6">
                Clique aqui para permitir que os representantes da turma escrevam seu Pré-Conselho.
              </p>
              <div className="flex justify-center">
                <button
                  className="bg-[var(--bluePrimary)] hover:bg-blue-900 text-white font-medium py-2 px-6 rounded-[24px] w-full"
                  onClick={handlePermitClick}
                >
                  Permitir
                </button>
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 mx-auto">
      <Header />
      <BlueBackground>
        <DashboardTitle iconWidth={40} iconHeight={40} textSize={"3xl"}/>
      </BlueBackground>
      <div className="container flex justify-center w-screen mx-auto">
        <WhiteContainer>
          {isLoading ? (
            <Loading />
          ) : (
            // Main Content
            <main className="container mx-auto p-4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Column - Conditional rendering based on state */}
                  {renderLeftColumn()}
                  {/* Right Column */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:pl-6">
                    {/* Participantes */}
                    <div className="bg-[#0166B4] text-white rounded-lg p-6 flex flex-col items-center">
                      <div className="flex justify-between w-full">
                        <h3 className="text-xl font-bold">PARTICIPANTES</h3>
                        <button className="text-white">
                          <img src="/assets/question.png" alt="Question" className="h-6 w-6" />
                        </button>
                      </div>
                      <div className="flex-grow flex items-center justify-center my-6">
                        <span className="text-6xl font-bold">15</span>
                      </div>
                      <button className="bg-[var(--bluePrimary)] hover:bg-blue-900 text-white font-medium py-2 px-6 rounded-[24px] w-full">
                        Ver
                      </button>
                    </div>
                    {/* Pre-Conselho */}
                    <div className="bg-[#0166B4] text-white rounded-lg p-6 flex flex-col items-center">
                      <div className="flex justify-between w-full">
                        <h3 className="text-xl font-bold">PRÉ-CONSELHO</h3>
                        <button className="text-white">
                          <img src="/assets/question.png" alt="Question" className="h-6 w-6" />
                        </button>
                      </div>
                      <div className="flex-grow flex items-center justify-center my-6">
                        <img src="/assets/pre-councils/white-pre-council.svg" className="h-16 w-16" />
                      </div>
                      <Link href={RoutePaths.PRECOUNCIL} className="w-full">
                      <button className="bg-[var(--bluePrimary)] hover:bg-blue-900 text-white font-medium py-2 px-6 rounded-[24px] w-full" >
                        Visualizar
                      </button>
                      </Link>
                    </div>
                    {/* Conselho */}
                    <div className="bg-[#0166B4] text-white rounded-lg p-6 flex flex-col items-center">
                      <div className="flex justify-between w-full">
                        <h3 className="text-xl font-bold">CONSELHO</h3>
                        <button className="text-white">
                          <img src="/assets/question.png" alt="Question" className="h-6 w-6" />
                        </button>
                      </div>
                      <div className="flex-grow flex items-center justify-center my-6">
                        <img src="/assets/feedbacks/council.svg" className="h-16 w-16" />
                      </div>
                      <Link href={RoutePaths.FEEDBACK} className="w-full">
                      <button className="bg-[var(--bluePrimary)] hover:bg-blue-900 text-white font-medium py-2 px-6 rounded-[24px] w-full" >
                        Ver
                      </button>
                      </Link>
                    </div>
                    {/* Gerenciamento */}
                    <div className="bg-[#0166B4] text-white rounded-lg p-6 flex flex-col items-center">
                      <div className="flex justify-between w-full">
                        <h3 className="text-xl font-bold">GERENCIAMENTO</h3>
                        <button className="text-white">
                          <img src="/assets/question.png" alt="Question" className="h-6 w-6" />
                        </button>
                      </div>
                      <div className="flex-grow flex items-center justify-center my-6">
                        <img src="/assets/settings/setting.svg" className="h-16 w-16" />
                      </div>
                      <button className="bg-[var(--bluePrimary)] hover:bg-blue-900 text-white font-medium py-2 px-6 rounded-[24px] w-full">
                        Gerenciar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          )}
          {/* View Toggle Buttons */}
          <div className="fixed bottom-4 left-0 right-0 flex justify-center gap-3">
            <button
              onClick={() => setCurrentView("default")}
              className={`px-4 py-2 rounded-md shadow-md flex items-center justify-center gap-2 ${
                currentView === "default" ? "bg-[#0166B4] text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
              title="Painéis Principais"
            >
              <FileText className="h-5 w-5" />
              <span className="font-medium">Painéis</span>
            </button>
            <button
              onClick={() => setCurrentView("countdown")}
              className={`px-4 py-2 rounded-md shadow-md flex items-center justify-center gap-2 ${
                currentView === "countdown" ? "bg-[#0166B4] text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
              title="Contagem Regressiva"
            >
              <Clock className="h-5 w-5" />
              <span className="font-medium">Contagem</span>
            </button>
            <button
              onClick={() => setCurrentView("students")}
              className={`px-4 py-2 rounded-md shadow-md flex items-center justify-center gap-2 ${
                currentView === "students" ? "bg-[#0166B4] text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
              title="Lista de Alunos"
            >
              <Users className="h-5 w-5" />
              <span className="font-medium">Alunos</span>
            </button>
            <button
              onClick={() => setCurrentView("chart")}
              className={`px-4 py-2 rounded-md shadow-md flex items-center justify-center gap-2 ${
                currentView === "chart" ? "bg-[#0166B4] text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
              title="Visualização de Feedback"
            >
              <PieChart className="h-5 w-5" />
              <span className="font-medium">Feedback</span>
            </button>
          </div>
        </WhiteContainer>
      </div>
    </div>
  )
}