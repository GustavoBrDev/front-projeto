"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/Header/Header"
import { BackgroundContainer } from "@/components/topBar/BackgroundContainer"
import { WhiteContainer } from "@/components/White-Container"
import { FeedbackList } from "@/components/feedbacks/FeedbackList"
import { FeedbackTitle } from "@/components/topBar/FeedbackTitle"
import { useUser } from "../UserProvider"
import { Loading } from "@/components/Loading"
import SearchBar from "@/components/inputs/SearchBar"
import { UserList } from "@/components/user/UserList"

const studentFeedbackData = [
  // (dados de exemplo mantidos como estavam)
]

export default function FeedbacksPage() {
  const { user } = useUser()
  const [isLoading, setIsLoading] = useState(true)
  const [selectedDiscipline, setSelectedDiscipline] = useState(disciplinesData[0].value)
  const [searchQuery, setSearchQuery] = useState("")

  const isStudentOrRepresentative = ["aluno", "representante"].includes(user?.role)
  const isProfessor = user?.role === "professor"
  const isSupervisorOrTechnical = ["supervisor", "tecnico"].includes(user?.role)

  const filteredTeacherFeedbacks = teacherFeedbackData
    .filter(f => selectedDiscipline ? f.discipline === selectedDiscipline : true)
    .filter(f => 
      f.discipline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.strengths.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.improvements.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.suggestions.toLowerCase().includes(searchQuery.toLowerCase())
    )

  const filteredSupervisorFeedbacks = supervisorFeedbackData
    .filter(f => 
      f.strengths.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.improvements.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.suggestions.toLowerCase().includes(searchQuery.toLowerCase())
    )

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 mx-auto">
      <Header />

      <BackgroundContainer>
        <FeedbackTitle iconWidth={40} iconHeight={40} textSize={"3xl"} />
      </BackgroundContainer>

      <div className="container flex justify-center w-screen mx-auto">
        <WhiteContainer>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="space-y-8">
              {!isStudentOrRepresentative && (
                <div className="flex justify-center">
                  <SearchBar
                    placeholder="Pesquisar por disciplina ou feedback"
                    onChange={setSearchQuery}
                  />
                </div>
              )}

              {isStudentOrRepresentative && (
                <UserList />
              )}

              {isProfessor && (
                <div>
                  <FeedbackList
                    title="Feedbacks de Professores"
                    dates={filteredTeacherFeedbacks.map(f => ({ id: f.id, date: f.date }))}
                    discipline={selectedDiscipline}
                    disciplines={disciplinesData}
                    onDisciplineChange={setSelectedDiscipline}
                    feedbacks={filteredTeacherFeedbacks}
                    userType={user?.role}
                  />
                </div>
              )}

              {isSupervisorOrTechnical && (
                <div>
                  <FeedbackList
                    title="Feedbacks de Supervisores"
                    dates={filteredSupervisorFeedbacks.map(f => ({ id: f.id, date: f.date }))}
                    feedbacks={filteredSupervisorFeedbacks}
                  />
                </div>
              )}
            </div>
          )}
        </WhiteContainer>
      </div>
    </div>
  )
}
