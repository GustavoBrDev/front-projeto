"use client"

import { useState } from "react"
import { Calendar, ChevronDown, ChevronUp } from "lucide-react"
import { SubjectOptions } from "./SubjectOptions.jsx"
import { ImprovementFeedback } from "./ImprovementFeedback.jsx"
import Image from "next/image"

// src/components/feedbacks/FeedbackList.jsx
export function FeedbackList({ dates, discipline, disciplines = [], onDisciplineChange, userType, feedbacks }) {
  const [expandedIds, setExpandedIds] = useState([]) // Mude para um array
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = (id) => {
    setExpandedIds((prev) => 
      prev.includes(id) ? prev.filter((expandedId) => expandedId !== id) : [...prev, id]
    )
  }

  const handleToggle = () => {
    setIsExpanded((prev) => {
      const newExpandedState = !prev;
      // Se a lista principal for recolhida, limpar os IDs expandidos
      if (!newExpandedState) {
        setExpandedIds([]); // Limpa os IDs expandidos
      }
      return newExpandedState;
    });
  }

  return (
    <div className="border border-gray-200 rounded-3xl shadow-sm overflow-hidden">
      <div className="w-full bg-[var(--blueSecondary)] text-[var(--white)] flex items-center justify-between p-4">
        <div className="flex-1">
          <span className="flex items-center">
            <Image
              src="/assets/class.png"
              alt="Icone da turma"
              width={25}
              height={25}
              objectFit="contain"
              className="mr-2"
            />
            AI PSIN 2023/2 INT 1
          </span>
        </div>

        <div className="flex items-center">
          {userType === "professor" && disciplines.length > 0 && onDisciplineChange && (
            <SubjectOptions
              subjects={disciplines.map((discipline) => discipline.value)}
              selectedSubject={discipline || ""}
              onChange={onDisciplineChange}
              className="mr-2"
            />
          )}

          <button onClick={handleToggle}>
            {isExpanded ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="bg-white">
          {dates.map((dateItem) => {
            const feedback = feedbacks.find((f) => f.id === dateItem.id)
            const isExpanded = expandedIds.includes(dateItem.id) // Verifique se o ID está no array

            return (
              <div key={dateItem.id} className="border-b border-gray-200 last:border-b-0">
                <div
                  className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => toggleExpand(dateItem.id)}
                >
                  <div className="flex items-center">
                    <Calendar className="mr-2 text-gray-500" size={18} />
                    <span>{dateItem.date}</span>
                  </div>
                  <button className="focus:outline-none text-gray-500">
                    {isExpanded ? <ChevronUp /> : <ChevronDown />}
                  </button>
                </div>
  
                {isExpanded && feedback && (
                  <div className="border-t border-gray-200">
                    <ImprovementFeedback
                      date={feedback.date}
                      discipline={feedback.discipline}
                      disciplines={disciplines}
                      onDisciplineChange={onDisciplineChange}
                      strengths={feedback.strengths}
                      improvements={feedback.improvements}
                      suggestions={feedback.suggestions}
                      userType={userType}
                    />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}