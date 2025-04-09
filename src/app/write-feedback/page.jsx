"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/components/Header/Header";
import { UserProvider } from "../UserProvider";
import { Loading } from "@/components/Loading";
import { Search, Users, FileText, MessageSquare, Settings, ChevronLeft, ChevronRight } from "lucide-react";
import SearchBar from "@/components/inputs/SearchBar";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function WriteFeedback() {
  const [selectedStudent, setSelectedStudent] = useState("Bianca Martins");
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userType, setUserType] = useState("regular");
  const [callForConversation, setCallForConversation] = useState(false);
  const [viewMode, setViewMode] = useState("students") // "students" or "teachers"
  const [expandedTeacher, setExpandedTeacher] = useState("Heitor Valentim")

  const students = [
    { name: "Camila Souza", status: "Finalizado", avatar: "/placeholder.svg" },
    { name: "Bianca Martins", status: "Em andamento", avatar: "/placeholder.svg" },
    { name: "Heitor Valentim", status: "Sem feedback", avatar: "/placeholder.svg" },
    { name: "Lara Costa", status: "Sem feedback", avatar: "/placeholder.svg" },
    { name: "Mariana Rocha", status: "Finalizado", avatar: "/placeholder.svg" },
    { name: "Pedro Lima", status: "Sem feedback", avatar: "/placeholder.svg" },
    { name: "Pedro Mathias", status: "Sem feedback", avatar: "/placeholder.svg" },
    { name: "Regina Silva", status: "Sem feedback", avatar: "/placeholder.svg" },
    { name: "Camila Videiras", status: "Sem feedback", avatar: "/placeholder.svg" },
    { name: "Gabriel Silva", status: "Sem feedback", avatar: "/placeholder.svg" },
    { name: "Julia Souza", status: "Finalizado", avatar: "/placeholder.svg" },
    { name: "Bernardo Martins", status: "Em andamento", avatar: "/placeholder.svg" },
    { name: "Valeria Valentim", status: "Finalizado", avatar: "/placeholder.svg" },
    { name: "Caetano Costa", status: "Sem feedback", avatar: "/placeholder.svg" },
    { name: "Maria Rocha", status: "Finalizado", avatar: "/placeholder.svg" },
    { name: "Pietro Lima", status: "Sem feedback", avatar: "/placeholder.svg" },
    { name: "Priscila Mathias", status: "Sem feedback", avatar: "/placeholder.svg" },
    { name: "Rogerio Silva", status: "Sem feedback", avatar: "/placeholder.svg" },
    { name: "Camilly Videiras", status: "Sem feedback", avatar: "/placeholder.svg" },
    { name: "Gabriela Silva", status: "Sem feedback", avatar: "/placeholder.svg" },
  ];

  const currentStudentIndex = students.findIndex((student) => student.name === selectedStudent);
  const completedFeedbacks = students.filter((s) => s.status === "Finalizado").length;

  const teachers = [
    {
      name: "Camila Souza",
      avatar: "/placeholder.svg?height=40&width=40",
      feedback:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi u",

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
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    },
    {
      name: "Mariana Rocha",
      avatar: "/placeholder.svg?height=40&width=40",
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    },
    {
      name: "Pedro Lima",
      avatar: "/placeholder.svg?height=40&width=40",
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    },
    {
      name: "Carlos Souza",
      avatar: "/placeholder.svg?height=40&width=40",
      feedback:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi u",

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
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    },
    {
      name: "Mario Rocha",
      avatar: "/placeholder.svg?height=40&width=40",
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    },
    {
      name: "Patricia Lima",
      avatar: "/placeholder.svg?height=40&width=40",
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    },
  ]

  const toggleUserType = () => {
    setUserType(userType === "regular" ? "technical" : "regular");
  };

  useEffect(() => {
    const checkIfMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setSidebarOpen(!mobile);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === "students" ? "teachers" : "students")
  }

  const toggleTeacherExpansion = (teacherName) => {
    if (expandedTeacher === teacherName) {
      setExpandedTeacher(null)
    } else {
      setExpandedTeacher(teacherName)
    }
  }

  
  useEffect(() => {
    const checkIfMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      setSidebarOpen(!mobile) 
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const navigateToPrevStudent = () => {
    if (currentStudentIndex > 0) {
      setSelectedStudent(students[currentStudentIndex - 1].name);
    }
  };

  const navigateToNextStudent = () => {
    if (currentStudentIndex < students.length - 1) {
      setSelectedStudent(students[currentStudentIndex + 1].name);
    }
  };

  return (
      <div className="min-h-screen bg-gray-100 mx-auto">
      <UserProvider>
        <Header />
      </UserProvider>

      {isLoading ? (
        <Loading />
      ) : (

        <><div className="flex items-center space-x-2">
              {/* Para fins de demonstração - alternar entre os tipos de usuário */}
              <button onClick={toggleUserType} className="text-xs bg-blue-700 px-2 py-1 rounded mr-2">
                {userType === "technical" ? "Modo Técnico" : "Modo Regular"}
              </button>

              
            </div><div className="flex flex-1 overflow-hidden relative">
                {/* Sobreposição lista mobile */}
                {sidebarOpen && isMobile && (
                  <div
                    className="fixed inset-0 bg-opacity-50 z-30 md:hidden"
                    onClick={toggleSidebar}
                    aria-hidden="true" />
                )}

                {/* Sidebar dos nomes */}
                <aside
                  className={`
                      bg-blue-800 text-white flex flex-col flex-shrink-0 
                      transition-all duration-300 ease-in-out z-40
                      ${isMobile ? "fixed right-0 top-0 bottom-0 pt-14" : "relative left-0"}
                      ${sidebarOpen
                      ? "w-64 translate-x-0"
                      : isMobile
                        ? "w-0 translate-x-full"
                        : "w-0 -translate-x-full md:translate-x-0 md:w-64"}
                `}
                >
                  {/* Barra de pesquisa */}
                <div className="py-2 px-3 flex m-3">
                    <SearchBar
                    placeholder="Pesquisar por disciplina ou feedback"
                    onChange={setSearchQuery}
                  />
                </div>
              

                  {/* Botão de alternância entre alunos e professores (somente para usuários técnicos) */}
                  {userType === "technical" && (
                    <div className="px-3 pb-2">
                      <button
                        className="w-full bg-blue-600 text-white py-2 px-3 rounded-[24px] text-sm font-medium hover:bg-blue-500"
                        onClick={toggleViewMode}
                      >
                        {viewMode === "students" ? "Ver professores" : "Ver alunos"}
                      </button>
                    </div>
                  )}

                  {/*Lista de alunos - exibida quando o modo de exibição é "alunos" */}
                  {viewMode === "students" && (
                    <div
                      className="overflow-y-auto flex-grow"
                      style={{ maxHeight: isMobile ? "calc(100vh - 110px)" : "calc(100vh - 56px)" }}
                    >
                      {students.map((student, index) => (
                        <div
                          key={index}
                          className={`flex items-center p-3 border-b border-blue-700 cursor-pointer ${student.name === selectedStudent ? "bg-blue-700" : "hover:bg-blue-700"}`}
                          onClick={() => {
                            setSelectedStudent(student.name);
                            // On mobile, close sidebar after selection
                            if (isMobile) {
                              setSidebarOpen(false);
                            }
                          } }
                        >
                          <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
                            <img
                              src={student.avatar || "/placeholder.svg"}
                              alt={student.name}
                              className="w-full h-full object-cover" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="font-medium truncate">{student.name}</div>
                            <div
                              className={`text-xs ${student.status === "Finalizado"
                                  ? "text-green-300"
                                  : student.status === "Em andamento"
                                    ? "text-yellow-300"
                                    : "text-gray-300"}`}
                            >
                              {student.status}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Lista de professores - exibida quando o viewMode é "professores" */}
                  {viewMode === "teachers" && (
                    <div
                      className="overflow-y-auto flex-grow"
                      style={{ maxHeight: isMobile ? "calc(100vh - 110px)" : "calc(100vh - 56px)" }}
                    >
                      {teachers.map((teacher, index) => (
                        <div key={index} className="border-b border-blue-700">
                          <div
                            className="flex items-center p-3 cursor-pointer hover:bg-blue-700"
                            onClick={() => toggleTeacherExpansion(teacher.name)}
                          >
                            <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
                              <img
                                src={teacher.avatar || "/placeholder.svg"}
                                alt={teacher.name}
                                className="w-full h-full object-cover" />
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

                <main className="flex-1 flex flex-col bg-gray-100 overflow-hidden">
                  {/* Cabeçalho */}
                  <div className="bg-white p-4 border-b flex justify-between items-center flex-shrink-0">
                    {userType === "technical" ? (
                      <>
                        <div className="text-xl font-semibold text-blue-800">
                          {completedFeedbacks}/{students.length} feedbacks concluídos
                        </div>
                        <div className="md:hidden">
                          <button
                            className="text-blue-800 p-1 bg-gray-100 rounded-full shadow-md"
                            onClick={toggleSidebar}
                            aria-label="Toggle student list"
                          >
                            <Users size={20} />
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="text-xl font-semibold text-blue-800">
                          {completedFeedbacks}/{students.length} pré-conselhos
                        </div>
                        <div className="md:hidden">
                          <button
                            className="text-blue-800 p-1 bg-gray-100 rounded-full shadow-md"
                            onClick={toggleSidebar}
                            aria-label="Toggle student list"
                          >
                            <Users size={20} />
                          </button>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Conteúdo - Esta parte deve ter seu próprio scroll */}
                  <div className="flex-1 overflow-y-auto p-3 md:p-6 relative">
                    {userType === "technical" ? (
                      <h1 className="text-xl md:text-2xl font-bold text-blue-800 mb-4 md:mb-6 text-center">
                        AI PSIN 2023/2 INT 1
                      </h1>
                    ) : (
                      <h1 className="text-xl md:text-2xl font-bold text-blue-800 mb-4 md:mb-6 text-center">Programação JAVA</h1>
                    )}

                    {/* Setas de navegação para usuários técnicos*/}
                    {userType === "technical" && (
                      <>
                        <button
                          onClick={navigateToPrevStudent}
                          disabled={currentStudentIndex <= 0}
                          className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md ${currentStudentIndex <= 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}
                        >
                          <ChevronLeft size={24} className="text-blue-800" />
                        </button>
                        <button
                          onClick={navigateToNextStudent}
                          disabled={currentStudentIndex >= students.length - 1}
                          className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md ${currentStudentIndex >= students.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}
                        >
                          <ChevronRight size={24} className="text-blue-800" />
                        </button>
                      </>
                    )}

                    <div className="bg-white w-[calc(100%-5rem)] mx-auto rounded-lg shadow-md overflow-hidden">
                        <div className="bg-gray-200 p-3 md:p-4 flex items-center">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden mr-2 md:mr-3 flex-shrink-0">
            <img
                src={students.find((student) => student.name === selectedStudent)?.avatar || "/placeholder.svg"}
                alt={selectedStudent}
                className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 min-w-0">
            <div className="font-medium text-sm md:text-base truncate">{selectedStudent}</div>
                            </div>
                            {userType === "technical" && (
            <div className="text-xs md:text-sm text-gray-600">AIPSIN MI80 {students.find((s) => s.name === selectedStudent)?.id || ""}</div>
                            )}
                            {userType !== "technical" && (
            <div className="text-xs md:text-sm text-gray-600">AI PSIN 2023/2 INT 1</div>
                            )}
                        </div>
                        <div className="p-3 md:p-4 ">
        <textarea
            className="w-full h-48 md:h-64 p-2 md:p-3 border rounded-md text-gray-700 text-sm md:text-base"
            placeholder="Digite aqui o seu feedback sobre esse aluno, as alterações são salvas automaticamente."
        ></textarea>
        {userType === "technical" && (
            <div className="mt-3 flex items-center">
                <input
                    type="checkbox"
                    id="callForConversation"
                    checked={callForConversation}
                    onChange={() => setCallForConversation(!callForConversation)}
                    className="mr-2 h-4 w-4" />
                <label htmlFor="callForConversation" className="text-sm text-gray-700">Chamar o aluno para uma conversa</label>
            </div>
        )}
        <div className="flex justify-end mt-3 md:mt-4">
            <button className="bg-blue-800 text-white px-4 md:px-6 py-1.5 md:py-2 rounded-[24px] hover:bg-blue-700 text-sm md:text-base">
                Enviar
            </button>
        </div>
                        </div>

                        
                      </div>
                    </div>

                  {/* Botão de alternância móvel  */}
                  <button
                    className="md:hidden fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg z-30"
                    onClick={toggleSidebar}
                    aria-label="Toggle list"
                  >
                    <Users size={24} />
                  </button>
                </main>
              </div></>
      )};
      </div>
  );
}
