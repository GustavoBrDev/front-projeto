"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { FeedbackOptions } from "./FeedbackOptions" // Caixa de seleção para categoria
import Image from "next/image"

export function StudentFeedback({
  date,
  category = "Ambos", // "Pessoal", "Turma" ou "Ambos"
  studentName = "Aluno",
  studentId = "ID do Aluno",
  studentContent = "Conteúdo do feedback pessoal.",
  classContent = "Conteúdo do feedback da turma.",
}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(category)

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev)
  }

  const exportFeedback = () => {
    // Lógica para exportar o feedback
  }

  const renderContent = () => {
    if (selectedCategory === "Ambos") {
      return (
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-1">Feedback Pessoal</h2>
            <p className="text-gray-600 mb-4">
              {studentName} - {studentId}
            </p>
            <p className="text-gray-800 mb-4">{studentContent}</p>
          </div>
          <div className="flex-1">
            <h2 className={`text-xl font-bold mb-1 ${selectedCategory === "Ambos" ? "" : "text-center"}`}>Feedback da Turma</h2>
            <p className="text-gray-600 mb-4">Turma</p>
            <p className="text-gray-800 mb-4">{classContent}</p>
          </div>
        </div>
      )
    } else if (selectedCategory === "Pessoal") {
      return (
        <div>
          <div className="text-center">
            <h2 className="text-xl font-bold mb-1">Feedback Pessoal</h2>
            <p className="text-gray-600 mb-4">
              {studentName} - {studentId}
            </p>
          </div>
          <p className="text-gray-800 mb-4">{studentContent}</p>
        </div>
      )
    } else {
      // selectedCategory === "Turma"
      return (
        <div>
          <div className="text-center">
            <h2 className="text-xl font-bold mb-1">Feedback da Turma</h2>
            <p className="text-gray-600 mb-4">Turma</p>
          </div>
          <p className="text-gray-800 mb-4">{classContent}</p>
        </div>
      )
    }
  }

  return (
    <div className="mb-4 border border-gray-200 rounded-3xl shadow-sm overflow-hidden">
      {/* Cabeçalho */}
      <div className="w-full bg-[var(--blueSecondary)] text-[var(--white)] p-4 flex items-center justify-between">
        <div className="flex items-center cursor-pointer" onClick={toggleExpand}>
          <Image
            src="/assets/calendars/white-calendar.png"
            alt="Icone do calendário"
            width={25}
            height={25}
            objectFit="contain"
            className="mr-2"
          />
          <span>{date}</span>
        </div>
        <div className="flex items-center">
          {/* Caixa de seleção para escolher a categoria */}
          <FeedbackOptions category={selectedCategory} onChange={setSelectedCategory} />
          <button onClick={toggleExpand} className="focus:outline-none">
            {isExpanded ? <ChevronUp /> : <ChevronDown />}
          </button>
        </div>
      </div>
      {/* Conteúdo expandido */}
      {isExpanded && (
        <div className="bg-gray-50 p-6">
          {renderContent()}
          <div className="flex justify-end">
            <button className="text-gray-500 hover:text-gray-700">
              <Image
                src="/assets/export-feedback.png"
                alt="Logo"
                width={30}
                height={30}
                objectFit="contain"
                onClick={exportFeedback()}
              />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
