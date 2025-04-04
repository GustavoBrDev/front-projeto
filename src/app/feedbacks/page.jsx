"use client"

import { useState, useEffect } from "react"
import { HeaderDemo } from "@/components/Header/HeaderDemo"
import { Header } from "@/components/Header/Header"
import { BlueBackground } from "@/components/topBar/BlueBackground"
import { WhiteContainer } from "@/components/White-Container"
import { StudentFeedback } from "@/components/feedbacks/StudentFeedback"
import { FeedbackList } from "@/components/feedbacks/FeedbackList"
import { FeedbackTitle } from "@/components/topBar/FeedbackTitle"
import { useUser } from "../UserProvider"
import { Loading } from "@/components/Loading"
import SearchBar from "@/components/inputs/SearchBar"

// Dados de exemplo para os feedbacks de estudantes
const studentFeedbackData = [
  {
    id: 1,
    date: "15/06/2025",
    category: "Pessoal",
    studentName: "Pedro Augusto Wilhelm",
    studentId: "AI PSIN 2023/2 INT 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    classContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    date: "14/02/2025",
    category: "Turma",
    studentName: "Pedro Augusto Wilhelm",
    studentId: "AI PSIN 2023/2 INT 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    classContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    date: "12/12/2024",
    category: "Ambos",
    studentName: "Pedro Augusto Wilhelm",
    studentId: "AI PSIN 2023/2 INT 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    classContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
]

// Dados de exemplo para os feedbacks de professores
const teacherFeedbackData = [
  {
    id: "1",
    date: "14/02/2025",
    discipline: "Programação Java",
    strengths:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    improvements:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    suggestions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "2",
    date: "12/02/2025",
    discipline: "Programação Java",
    strengths:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    improvements:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    suggestions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "3",
    date: "12/12/2024",
    discipline: "Programação Java",
    strengths:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    improvements:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    suggestions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "4",
    date: "10/11/2024",
    discipline: "Programação Java",
    strengths:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    improvements:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    suggestions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "5",
    date: "14/02/2025",
    discipline: "Banco de Dados",
    strengths:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    improvements:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    suggestions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
]

// Dados de exemplo para os feedbacks de supervisores
const supervisorFeedbackData = [
  {
    id: "1",
    date: "14/02/2025",
    strengths:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    improvements:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    suggestions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "2",
    date: "12/02/2025",
    strengths:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    improvements:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    suggestions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "3",
    date: "12/12/2024",
    strengths:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    improvements:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    suggestions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
]

// Disciplinas de exemplo
const disciplinesData = [
  { value: "Programação Java", label: "Programação Java" },
  { value: "Banco de Dados", label: "Banco de Dados" },
  { value: "Desenvolvimento Web", label: "Desenvolvimento Web" },
]

const filterOptions = [ "Disciplina", "Strenghts", "Improvements", "Suggestions" ];

export default function FeedbacksPage() {
  const { user } = useUser()
  const [isLoading, setIsLoading] = useState(true)
  const [selectedDiscipline, setSelectedDiscipline] = useState(disciplinesData[0].value)
  const [searchQuery, setSearchQuery] = useState("")
  
  const isStudentOrRepresentative = ["aluno", "representante"].includes(user?.role)
  const isProfessor = user?.role === "professor"
  const isSupervisorOrTechnical = ["supervisor", "tecnico"].includes(user?.role)

  const filterOptions = [
    { label: 'Disciplina', value: 'Disciplina' },
    { label: 'Strenghts', value: 'Strenghts' },
    { label: 'Improvements', value: 'Improvements' },
    { label: 'Suggestions', value: 'Suggestions' }
  ];

  // Filtros combinados
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
      
      <BlueBackground>
        <FeedbackTitle iconWidth={40} iconHeight={40} textSize={"3xl"}/>
      </BlueBackground>

      <div className="container flex justify-center w-screen mx-auto">
        <WhiteContainer>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="space-y-8">
              {/* Barra de pesquisa */}
              {!isStudentOrRepresentative && (
                <div className="flex justify-center">
                    <SearchBar
                    placeholder="Pesquisar por disciplina ou feedback"
                    onChange={setSearchQuery}
                    filterOptions={filterOptions}
                  />
                </div>
              )}

              {/* Seção de Estudante (apenas para alunos/representantes) */}
              {isStudentOrRepresentative && (
                <div>
                  {studentFeedbackData.map((feedback) => (
                    <StudentFeedback
                      key={feedback.id}
                      {...feedback}
                    />
                  ))}
                </div>
              )}

              {/* Seção de Professor (apenas para professores/supervisores) */}
              {(isProfessor ) && (
                <div>
                  <FeedbackList
                    title="Feedbacks de Professores"
                    dates={filteredTeacherFeedbacks.map(f => ({ id: f.id, date: f.date }))}
                    discipline={selectedDiscipline}
                    disciplines={disciplinesData}
                    onDisciplineChange={setSelectedDiscipline}
                    feedbacks={filteredTeacherFeedbacks}
                    userType={user?.role}
                    >
                  </FeedbackList>
                </div>
              )}

              {/* Seção de Supervisor (apenas para supervisores/técnicos) */}
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
      <HeaderDemo />
    </div>
  )
}

