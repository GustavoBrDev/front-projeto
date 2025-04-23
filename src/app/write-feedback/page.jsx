"use client"

import React from "react"
import { useUser } from "../UserProvider"
import { Header } from "@/components/Header/Header"
import { Loading } from "@/components/Loading"
import { useState, useEffect } from "react"
import { ErrorAlert } from "@/components/alerts/ErrorAlert"
import {
  Search,
  Users,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Clipboard,
} from "lucide-react"

import Image from "next/image"

// SearchBar component
const SearchBar = ({ placeholder, onChange }) => {
  const [query, setQuery] = useState("")

  const handleChange = (e) => {
    const value = e.target.value
    setQuery(value)
    if (onChange) {
      onChange(value)
    }
  }

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
        className="w-full bg-white text-black rounded-md pl-9 pr-3 py-2 text-sm border border-gray-300"
      />
      <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
    </div>
  )
}


export default function FeedbackSystem() {
  const [selectedStudent, setSelectedStudent] = useState("Bianca Martins")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [callForConversation, setCallForConversation] = useState(false)
  const [viewMode, setViewMode] = useState("students") // "students" or "teachers"
  const [expandedTeacher, setExpandedTeacher] = useState("Heitor Valentim");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useUser();
  const [ error, setError ] = useState("");

  // State to store feedback text for each student
  const [feedbackTexts, setFeedbackTexts] = useState({
    "Bianca Martins":
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  })

  // Initial students data
  const [students, setStudents] = useState([
    { name: "Camila Souza", status: "Finalizado", avatar: "/placeholder.svg?height=40&width=40", id: "M171" },
    { name: "Bianca Martins", status: "Em andamento", avatar: "/placeholder.svg?height=40&width=40", id: "M174" },
    { name: "Heitor Valentim", status: "Sem feedback", avatar: "/placeholder.svg?height=40&width=40", id: "M175" },
    { name: "Lara Costa", status: "Sem feedback", avatar: "/placeholder.svg?height=40&width=40", id: "M176" },
    { name: "Mariana Rocha", status: "Finalizado", avatar: "/placeholder.svg?height=40&width=40", id: "M177" },
    { name: "Pedro Lima", status: "Sem feedback", avatar: "/placeholder.svg?height=40&width=40", id: "M178" },
    { name: "Pedro Mathias", status: "Sem feedback", avatar: "/placeholder.svg?height=40&width=40", id: "M179" },
    { name: "Regina Silva", status: "Sem feedback", avatar: "/placeholder.svg?height=40&width=40", id: "M180" },
    { name: "Camila Souza", status: "Sem feedback", avatar: "/placeholder.svg?height=40&width=40", id: "M181" },
    { name: "Gabriel Silva", status: "Sem feedback", avatar: "/placeholder.svg?height=40&width=40", id: "M182" },
    { name: "Ana Silva", status: "Sem feedback", avatar: "/placeholder.svg?height=40&width=40", id: "M183" },
    { name: "Bruno Costa", status: "Sem feedback", avatar: "/placeholder.svg?height=40&width=40", id: "M184" },
    { name: "Julia Souza", status: "Finalizado", avatar: "/placeholder.svg?height=40&width=40", id: "M185" },
    { name: "Bernardo Martins", status: "Em andamento", avatar: "/placeholder.svg?height=40&width=40", id: "M186" },
    { name: "Valeria Valentim", status: "Finalizado", avatar: "/placeholder.svg?height=40&width=40", id: "M187" },
    { name: "Caetano Costa", status: "Sem feedback", avatar: "/placeholder.svg?height=40&width=40", id: "M188" },
    { name: "Maria Rocha", status: "Finalizado", avatar: "/placeholder.svg?height=40&width=40", id: "M189" },
    { name: "Pietro Lima", status: "Sem feedback", avatar: "/placeholder.svg?height=40&width=40", id: "M190" },
    { name: "Priscila Mathias", status: "Sem feedback", avatar: "/placeholder.svg?height=40&width=40", id: "M191" },
    { name: "Rogerio Silva", status: "Sem feedback", avatar: "/placeholder.svg?height=40&width=40", id: "M192" },
  ])

  // Toggle view mode between students and teachers
  const toggleViewMode = () => {
    setViewMode(viewMode === "students" ? "teachers" : "students")
  }

  // Toggle teacher expansion
  const toggleTeacherExpansion = (teacherName) => {
    if (expandedTeacher === teacherName) {
      setExpandedTeacher(null)
    } else {
      setExpandedTeacher(teacherName)
    }
  }

  // Handle submit feedback
  const handleSubmitFeedback = () => {
    if (!feedbackTexts[selectedStudent]) {
      setError("Por favor, insira um feedback ao estudante.")
      return
    }

    setError(null)
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      // Update student status
      setStudents((prevStudents) =>
        prevStudents.map((student) =>
          student.name === selectedStudent ? { ...student, status: "Finalizado" } : student,
        ),
      )

      setIsLoading(false)
    }, 500)
  }

  // Handle feedback text change
  const handleFeedbackChange = (text) => {
    setFeedbackTexts((prev) => ({
      ...prev,
      [selectedStudent]: text,
    }))
  }

  // Check if we're on mobile and set initial sidebar state
  useEffect(() => {
    const checkIfMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      setSidebarOpen(!mobile) // Open by default on desktop, closed on mobile
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const teachers = [
    {
      name: "Camila Souza",
      avatar: "/placeholder.svg?height=40&width=40",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi u",
    },
    {
      name: "Bianca Martins",
      avatar: "/placeholder.svg?height=40&width=40",
      feedback: "Excelente aluna, muito dedicada.",
    },
    {
      name: "Heitor Valentim",
      avatar: "/placeholder.svg?height=40&width=40",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi u",
    },
    {
      name: "Lara Costa",
      avatar: "/placeholder.svg?height=40&width=40",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    },
    {
      name: "Mariana Rocha",
      avatar: "/placeholder.svg?height=40&width=40",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    },
    {
      name: "Pedro Lima",
      avatar: "/placeholder.svg?height=40&width=40",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    },
    {
      name: "Carlos Souza",
      avatar: "/placeholder.svg?height=40&width=40",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi u",
    },
    {
      name: "Bernardo Martins",
      avatar: "/placeholder.svg?height=40&width=40",
      feedback: "Excelente aluna, muito dedicada.",
    },
    {
      name: "Hiago Valentim",
      avatar: "/placeholder.svg?height=40&width=40",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi u",
    },
    {
      name: "Luan Costa",
      avatar: "/placeholder.svg?height=40&width=40",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    },
    {
      name: "Mario Rocha",
      avatar: "/placeholder.svg?height=40&width=40",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    },
    {
      name: "Patricia Lima",
      avatar: "/placeholder.svg?height=40&width=40",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    },
  ]

  // Get the current student index
  const currentStudentIndex = students.findIndex((student) => student.name === selectedStudent)

  // Navigate to previous/next student
  const navigateToPrevStudent = () => {
    if (currentStudentIndex > 0) {
      setSelectedStudent(students[currentStudentIndex - 1].name)
    }
  }

  const navigateToNextStudent = () => {
    if (currentStudentIndex < students.length - 1) {
      setSelectedStudent(students[currentStudentIndex + 1].name)
    }
  }

  // Count completed feedbacks
  const completedFeedbacks = students.filter((student) => student.status === "Finalizado").length

  // Check if current student feedback is completed
  const isCurrentFeedbackCompleted = students.find((s) => s.name === selectedStudent)?.status === "Finalizado"

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="min-h-screen bg-gray-100 mx-auto">
        <Header />
        
        <div className="flex flex-1 overflow-hidden relative">
          {/* Mobile Overlay */}
          {sidebarOpen && isMobile && (
            <div
              className="fixed inset-0 bg-gray-500 opacity-20 z-50 md:hidden"
              onClick={toggleSidebar}
              aria-hidden="true"
            />
          )}

          {/* Left Sidebar on Desktop, Right Sidebar on Mobile */}
          <aside
            className={`
            bg-[var(--bluePrimary)] text-[var(--white)] flex flex-col flex-shrink-0 
              transition-all duration-300 ease-in-out z-20
              ${isMobile ? "fixed right-0 top-0 bottom-0 pt-14 z-60" : "relative left-0"}
              ${
                sidebarOpen
                  ? "w-64 translate-x-0"
                  : isMobile
                    ? "w-0 translate-x-full "
                    : "w-0 -translate-x-full md:translate-x-0 md:w-64"
              }
            `}
          >
            {/* Search Box */}
            <div className="py-2 px-3 flex m-3">
              <SearchBar placeholder="Pesquisar aqui..." onChange={setSearchQuery} />
            </div>

            {/* Toggle button between students and teachers (only for technical users) */}
            {user?.role === "tecnico" && (
              <div className="px-3 pb-2">
                <button
                  className="w-full bg-[var(--bluePrimary)] text-[var(--white)] py-2 px-3 rounded-[24px] text-sm font-medium hover:text-[var(--blueTertiary)]"
                  onClick={toggleViewMode}
                >
                  {viewMode === "students" ? "Ver professores" : "Ver alunos"}
                </button>
              </div>
            )}

            {/* Student List - shown when viewMode is "students" */}
            {viewMode === "students" && (
              <div
                className="overflow-y-auto flex-grow"
                style={{ maxHeight: isMobile ? "calc(100vh - 110px)" : "calc(100vh - 56px)" }}
              >
                {students.map((student, index) => (
                  <div
                    key={index}
                    className={`flex items-center p-3 border-b border-[var(--bluePrimary)] cursor-pointer ${
                      student.name === selectedStudent ? "bg-[var(--bluePrimary)]" : "hover:bg-[var(--bluePrimary)]"
                    }`}
                    onClick={() => {
                      setSelectedStudent(student.name)
                      // On mobile, close sidebar after selection
                      if (isMobile) {
                        setSidebarOpen(false)
                      }
                    }}
                  >
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
                      <Image
                        src={student.avatar ? student.avatar : `/assets/avatar-padrao.jpg`}
                        alt={student.name}
                        width={10}
                        height={10}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-medium truncate">{student.name}</div>
                      <div
                        className={`text-xs ${
                          student.status === "Finalizado"
                            ? "text-[var(--green)]"
                            : student.status === "Em andamento"
                              ? "text-yellow-300"
                              : "text-gray-300"
                        }`}
                      >
                        {student.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Teacher List - shown when viewMode is "teachers" */}
            {viewMode === "teachers" && (
              <div
                className="overflow-y-auto flex-grow"
                style={{ maxHeight: isMobile ? "calc(100vh - 110px)" : "calc(100vh - 56px)" }}
              >
                {teachers.map((teacher, index) => (
                  <div key={index} className="border-b bg-[var(--bluePrimary)]">
                    <div
                      className="flex items-center p-3 cursor-pointer hover:bg-[var(--bluePrimary)]"
                      onClick={() => toggleTeacherExpansion(teacher.name)}
                    >
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
                        <Image
                          src={teacher.avatar ? teacher.avatar : `/assets/avatar-padrao.jpg`}
                          alt={teacher.name}
                          width={10}
                          height={10}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-medium truncate">{teacher.name}</div>
                      </div>
                      <div className="ml-2">
                        {expandedTeacher === teacher.name ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </div>
                    </div>

                    {/* Expanded teacher feedback */}
                    {expandedTeacher === teacher.name && <div className="px-3 pb-3 text-sm">{teacher.feedback}</div>}
                  </div>
                ))}
              </div>
            )}
          </aside>

          {/* Main Content */}
          <main className="flex-1 flex flex-col bg-gray-100 overflow-hidden">
            {/* Header */}
            <div className="bg-white p-4 border-b flex justify-between items-center flex-shrink-0">
              {user?.role === "tecnico" ? (
                <>
                  <div className="text-xl font-semibold text-[var(--bluePrimary)]">
                    {completedFeedbacks}/{students.length} feedbacks concluídos
                  </div>
                  <div className="md:hidden">
                    <button
                      className="text-[var(--bluePrimary)] p-1 bg-gray-100 rounded-full shadow-md"
                      onClick={toggleSidebar}
                      aria-label="Toggle student list"
                    >
                      <Users size={20} />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-xl font-semibold text-[var(--bluePrimary)]">
                    {completedFeedbacks}/{students.length} pré-conselhos
                  </div>
                  <div className="md:hidden">
                    <button
                      className="text-[var(--bluePrimary)] p-1 bg-gray-100 rounded-full shadow-md"
                      onClick={toggleSidebar}
                      aria-label="Toggle student list"
                    >
                      <Users size={20} />
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Content - This part should have its own scroll */}
            <div className="flex-1 overflow-y-auto p-3 md:p-6 relative">
              {user?.role === "tecnico" ? (
                <h1 className="text-xl md:text-2xl font-bold text-[var(--bluePrimary)] mb-4 md:mb-6 text-center">
                  AI PSIN 2023/2 INT 1
                </h1>
              ) : (
                <h1 className="text-xl md:text-2xl font-bold text-[var(--bluePrimary)] mb-4 md:mb-6 text-center">
                  Programação JAVA
                </h1>
              )}

              {/* Navigation arrows for technical users */}
              {user?.role === "tecnico" && (
                <>
                  <button
                    onClick={navigateToPrevStudent}
                    disabled={currentStudentIndex <= 0}
                    className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-[var(--white)] p-2 rounded-full shadow-md ${
                      currentStudentIndex <= 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
                    }`}
                  >
                    <ChevronLeft size={24} className="bg-[var(--bluePrimary)]" />
                  </button>
                  <button
                    onClick={navigateToNextStudent}
                    disabled={currentStudentIndex >= students.length - 1}
                    className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-[var(--white)] p-2 rounded-full shadow-md ${
                      currentStudentIndex >= students.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
                    }`}
                  >
                    <ChevronRight size={24} className="bg-[var(--bluePrimary)]" />
                  </button>
                </>
              )}

              {/* Feedback Card */}
              <div className="bg-[var(--white)] w-[calc(100%-5rem)] mx-auto rounded-lg shadow-md overflow-hidden">
              
                {/* Student Info */}
                <div className="bg-gray-200 p-3 md:p-4 flex items-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden mr-2 md:mr-3 flex-shrink-0">
                    <Image
                      src={
                        students.find((student) => student.name === selectedStudent)?.avatar ||
                        "/assets/avatar-padrao.jpg"
                      }
                      width={10}
                      height={10}
                      alt={selectedStudent}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm md:text-base truncate">{selectedStudent}</div>
                  </div>
                  {user?.role === "tecnico" ? (
                    <div className="text-xs md:text-sm text-gray-600">
                      AIPSIN MI80 {students.find((s) => s.name === selectedStudent)?.id || ""}
                    </div>
                  ) : (
                    <div className="text-xs md:text-sm text-gray-600">AI PSIN 2023/2 INT 1</div>
                  )}
                </div>

                {/* Feedback Form or Display based on status */}
                <div className="p-3 md:p-4 relative">
                  {isCurrentFeedbackCompleted ? (
                    // Read-only feedback display
                    <>
                      <div className="w-full h-48 md:h-64 p-2 md:p-3 text-gray-700 text-sm md:text-base">
                        {feedbackTexts[selectedStudent] || "Sem feedback disponível."}
                      </div>
                      {/* Clipboard icon for completed feedback */}
                      <div className="absolute bottom-4 right-4 bg-[var(--bluePrimary)]">
                        <button className="p-2 rounded-full hover:bg-blue-50">
                          <Clipboard size={20} />
                        </button>
                      </div>
                    </>
                  ) : (
                    // Editable feedback form
                    <>
                      <textarea
                        className="w-full h-48 md:h-64 p-2 md:p-3 border rounded-md text-gray-700 text-sm md:text-base"
                        placeholder="Digite aqui o seu feedback sobre esse aluno, as alterações são salvas automaticamente."
                        value={feedbackTexts[selectedStudent] || ""}
                        onChange={(e) => handleFeedbackChange(e.target.value)}
                      ></textarea>

                      {/* Call for conversation checkbox - only for technical users */}
                      {user?.role === "tecnico" && (
                        <div className="mt-3 flex items-center">
                          <input
                            type="checkbox"
                            id="callForConversation"
                            checked={callForConversation}
                            onChange={() => setCallForConversation(!callForConversation)}
                            className="mr-2 h-4 w-4"
                          />
                          <label htmlFor="callForConversation" className="text-sm text-gray-700">
                            Chamar o aluno para uma conversa
                          </label>
                        </div>
                      )}

                      { error && <ErrorAlert message={error} /> }
                      <div className="flex justify-end mt-3 md:mt-4">
                        <button
                          className="bg-[var(--bluePrimary)] text-[var(--white)] px-4 md:px-6 py-1.5 md:py-2 rounded-[24px] hover:bg-[var(--blueTertiary)] text-sm md:text-base"
                          onClick={handleSubmitFeedback}
                        >
                          Enviar
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Fixed Mobile Toggle Button */}
            <button
              className="md:hidden fixed bottom-4 right-4 bg-[var(--bluePrimary)] text-[var(--white)] p-3 rounded-full shadow-lg z-30"
              onClick={toggleSidebar}
              aria-label="Toggle list"
            >
              <Users size={24} />
            </button>
          </main>
        </div>
    </div>
  )
}
