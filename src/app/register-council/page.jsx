"use client"

import { useState } from "react"
import { ChevronDown, Calendar, Clock, X } from "lucide-react"

export default function AgendarConselho() {
  // Modifique o estado para rastrear o professor selecionado sem substituir a interface
  const [selectedProfessor, setSelectedProfessor] = useState(null)
  const [highlightedProfessor, setHighlightedProfessor] = useState(null)
  const [currentStep, setCurrentStep] = useState(1)

  const handleProximoClick = () => {
    setCurrentStep(2)
  }

  const handleVoltarClick = () => {
    setCurrentStep(1)
  }

  // Modifique a função handleProfessorClick
  const handleProfessorClick = (professor) => {
    setSelectedProfessor(professor)
    setHighlightedProfessor(professor.id)
  }

  // Modifique a função handleCloseCalendar
  const handleCloseCalendar = () => {
    setSelectedProfessor(null)
    setHighlightedProfessor(null)
  }

  const professores = [
    { id: 1, name: "Fernanda Agnes Amorim", color: "red" },
    { id: 2, name: "Pedro Augusto Wilhelm", color: "orange" },
    { id: 3, name: "Gabriela Carolina Pellense", color: "blue" },
    { id: 4, name: "André Felipe Witt", color: "green" },
    { id: 5, name: "Fernanda Agnes Amorim", color: "red" },
    { id: 6, name: "Pedro Augusto Wilhelm", color: "orange" },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-3 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <a href="#" className="font-bold text-white flex items-center">
            <span className="bg-white text-blue-600 rounded p-1 mr-2">C</span>
            Conselhos
          </a>

          {["Menu", "Menu", "Menu", "Menu"].map((item, index) => (
            <div key={index} className="flex items-center">
              <span>{item}</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-3">
          <span className="flex items-center">
            <img src="/placeholder.svg?height=24&width=24" alt="Bandeira do Brasil" className="h-6 w-6 rounded-full" />
          </span>
          <span className="text-white cursor-pointer">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </span>
          <img src="/placeholder.svg?height=32&width=32" alt="Perfil" className="h-8 w-8 rounded-full" />
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-blue-500 text-white p-3 flex items-center">
        <div className="flex items-center">
          <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <span className="font-medium">Conselhos</span>
          <svg className="h-5 w-5 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span>Agendar Novo Conselho</span>
          {currentStep === 2 && (
            <>
              <svg className="h-5 w-5 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>Professores Substitutos</span>
            </>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-4 relative">
        <div className="bg-white rounded-lg shadow-md p-6">
          {currentStep === 1 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div>
                {/* Turma */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Turma</label>
                  <div className="relative">
                    <select className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md appearance-none">
                      <option>Selecione uma turma</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Professores */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium text-gray-700">Professores</label>
                    <button className="text-blue-600 hover:text-blue-800">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="h-40 overflow-y-auto pr-2 space-y-2 custom-scrollbar">
                    {professores.map((professor) => (
                      <div
                        key={professor.id}
                        className={`${
                          highlightedProfessor === professor.id ? "bg-blue-600" : "bg-blue-800"
                        } text-white p-2 rounded flex items-center cursor-pointer hover:bg-blue-700`}
                        onClick={() => handleProfessorClick(professor)}
                      >
                        <div
                          className={`bg-${professor.color}-500 h-6 w-6 rounded-full flex items-center justify-center text-white text-xs mr-2`}
                        >
                          {professor.name.charAt(0)}
                        </div>
                        <span>{professor.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pedagógico */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium text-gray-700">Pedagógico</label>
                    <button className="text-blue-600 hover:text-blue-800">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="h-40 overflow-y-auto pr-2 space-y-2 custom-scrollbar">
                    {professores.map((professor) => (
                      <div
                        key={professor.id}
                        className={`${
                          highlightedProfessor === professor.id ? "bg-blue-600" : "bg-blue-800"
                        } text-white p-2 rounded flex items-center cursor-pointer hover:bg-blue-700`}
                        onClick={() => handleProfessorClick(professor)}
                      >
                        <div
                          className={`bg-${professor.color}-500 h-6 w-6 rounded-full flex items-center justify-center text-white text-xs mr-2`}
                        >
                          {professor.name.charAt(0)}
                        </div>
                        <span>{professor.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Calendar */}
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-center font-medium mb-4">Definir data e hora personalizadas</h3>

                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-medium">Março 2025</h4>
                  <div className="flex space-x-2">
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </button>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="grid grid-cols-7 gap-1 text-center">
                    {["D", "S", "T", "Q", "Q", "S", "S"].map((day, index) => (
                      <div key={index} className="text-sm font-medium">
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center">
                    {[
                      { day: 23, current: false },
                      { day: 24, current: false },
                      { day: 25, current: false },
                      { day: 26, current: false },
                      { day: 27, current: false },
                      { day: 28, current: false },
                      { day: 1, current: true },
                      { day: 2, current: true },
                      { day: 3, current: true },
                      { day: 4, current: true },
                      { day: 5, current: true, selected: true },
                      { day: 6, current: true },
                      { day: 7, current: true },
                      { day: 8, current: true },
                      { day: 9, current: true },
                      { day: 10, current: true },
                      { day: 11, current: true },
                      { day: 12, current: true },
                      { day: 13, current: true },
                      { day: 14, current: true },
                      { day: 15, current: true },
                      { day: 16, current: true },
                      { day: 17, current: true },
                      { day: 18, current: true },
                      { day: 19, current: true },
                      { day: 20, current: true },
                      { day: 21, current: true },
                      { day: 22, current: true },
                      { day: 23, current: true },
                      { day: 24, current: true },
                      { day: 25, current: true },
                      { day: 26, current: true },
                      { day: 27, current: true },
                      { day: 28, current: true },
                      { day: 29, current: true },
                      { day: 30, current: true },
                      { day: 31, current: true },
                      { day: 1, current: false },
                      { day: 2, current: false },
                      { day: 3, current: false },
                      { day: 4, current: false },
                      { day: 5, current: false },
                    ].map((date, index) => (
                      <div
                        key={index}
                        className={`text-sm p-1 rounded-full ${date.selected ? "bg-blue-500 text-white" : ""} ${!date.current ? "text-gray-400" : "hover:bg-gray-200 cursor-pointer"}`}
                      >
                        {date.day}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center mb-6">
                  <div className="flex-1 flex items-center border rounded p-2 bg-white">
                    <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                    <input type="text" value="05/05/2025" className="w-full focus:outline-none" readOnly />
                  </div>
                </div>

                <div className="flex items-center mb-6">
                  <div className="flex-1 flex items-center border rounded p-2 bg-white">
                    <Clock className="h-5 w-5 text-gray-500 mr-2" />
                    <input type="text" value="08:00" className="w-full focus:outline-none" readOnly />
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded"
                    onClick={handleProximoClick}
                  >
                    Próximo
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column - Lists */}
              <div>
                {/* Professores */}
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-3">Professores</h3>
                  <div className="h-48 overflow-y-auto pr-2 space-y-2 custom-scrollbar">
                    {professores.map((professor) => (
                      <div
                        key={professor.id}
                        className={`${
                          highlightedProfessor === professor.id ? "bg-blue-600" : "bg-blue-800"
                        } text-white p-2 rounded flex items-center cursor-pointer hover:bg-blue-700`}
                        onClick={() => handleProfessorClick(professor)}
                      >
                        <div
                          className={`bg-${professor.color}-500 h-6 w-6 rounded-full flex items-center justify-center text-white text-xs mr-2`}
                        >
                          {professor.name.charAt(0)}
                        </div>
                        <span>{professor.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Professores Substitutos */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-medium">Professores Substitutos</h3>
                    <button className="text-blue-600 hover:text-blue-800">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="h-48 overflow-y-auto pr-2 space-y-2 custom-scrollbar">
                    {professores.map((professor) => (
                      <div
                        key={professor.id}
                        className={`${
                          highlightedProfessor === professor.id ? "bg-blue-600" : "bg-blue-800"
                        } text-white p-2 rounded flex items-center cursor-pointer hover:bg-blue-700`}
                        onClick={() => handleProfessorClick(professor)}
                      >
                        <div
                          className={`bg-${professor.color}-500 h-6 w-6 rounded-full flex items-center justify-center text-white text-xs mr-2`}
                        >
                          {professor.name.charAt(0)}
                        </div>
                        <span>{professor.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Calendar */}
              <div>
                <div className="bg-white border rounded-lg overflow-hidden">
                  <div className="grid grid-cols-7 bg-blue-900 text-white text-center">
                    {["D", "S", "T", "Q", "Q", "S", "S"].map((day, index) => (
                      <div key={index} className="py-1 border-r border-blue-800 last:border-r-0">
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 grid-rows-5">
                    {Array.from({ length: 35 }).map((_, index) => {
                      const day = index + 1
                      const hasEvent = [9, 10, 13, 14, 17, 18, 21, 22, 25, 26, 27].includes(day)
                      const eventColors = {
                        9: "bg-green-200 text-green-800",
                        10: "bg-green-200 text-green-800",
                        13: "bg-blue-200 text-blue-800",
                        14: "bg-blue-200 text-blue-800",
                        17: "bg-orange-200 text-orange-800",
                        18: "bg-orange-200 text-orange-800",
                        21: "bg-green-200 text-green-800",
                        22: "bg-green-200 text-green-800",
                        25: "bg-orange-200 text-orange-800",
                        26: "bg-yellow-200 text-yellow-800",
                        27: "bg-red-200 text-red-800",
                      }

                      return (
                        <div
                          key={index}
                          className={`h-20 border-r border-b p-1 relative ${index % 7 === 6 ? "border-r-0" : ""}`}
                        >
                          <div className="text-right text-sm font-medium">{day}</div>
                          {hasEvent && (
                            <div
                              className={`absolute inset-x-1 top-6 bottom-1 ${eventColors[day]} rounded p-1 text-xs overflow-hidden`}
                            >
                              <div className="font-medium">Conselho</div>
                              <div>Turma 301</div>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-6">
                  <button
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-6 rounded"
                    onClick={handleVoltarClick}
                  >
                    Voltar
                  </button>
                  <div className="space-x-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded">
                      Editar Email
                    </button>
                    <button className="bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 px-6 rounded">
                      Agendar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Professor Calendar Overlay */}
        {selectedProfessor && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-2xl overflow-hidden z-10 w-11/12 md:w-3/4 lg:w-2/3 max-h-[90vh]">
            <div className="bg-blue-700 text-white p-3 flex justify-between items-center">
              <div className="flex items-center">
                <div
                  className={`bg-${selectedProfessor.color}-500 h-6 w-6 rounded-full flex items-center justify-center text-white text-xs mr-2`}
                >
                  {selectedProfessor.name.charAt(0)}
                </div>
                <span className="font-medium">{selectedProfessor.name}</span>
              </div>
              <button onClick={handleCloseCalendar} className="text-white hover:text-gray-200">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="overflow-auto max-h-[calc(90vh-4rem)]">
              <div className="grid grid-cols-7 bg-blue-900 text-white text-center text-sm">
                <div className="py-2 border-r border-blue-800">Domingo</div>
                <div className="py-2 border-r border-blue-800">Segunda</div>
                <div className="py-2 border-r border-blue-800">Terça</div>
                <div className="py-2 border-r border-blue-800">Quarta</div>
                <div className="py-2 border-r border-blue-800">Quinta</div>
                <div className="py-2 border-r border-blue-800">Sexta</div>
                <div className="py-2">Sábado</div>
              </div>

              <div className="grid grid-cols-7">
                {Array.from({ length: 35 }).map((_, index) => {
                  const day = index + 1
                  const hasEvent = [9, 10, 13, 14, 17, 18, 21, 22, 25, 26, 27].includes(day)
                  const eventColors = {
                    9: "bg-green-200 text-green-800",
                    10: "bg-green-200 text-green-800",
                    13: "bg-blue-200 text-blue-800",
                    14: "bg-blue-200 text-blue-800",
                    17: "bg-orange-200 text-orange-800",
                    18: "bg-orange-200 text-orange-800",
                    21: "bg-green-200 text-green-800",
                    22: "bg-green-200 text-green-800",
                    25: "bg-orange-200 text-orange-800",
                    26: "bg-yellow-200 text-yellow-800",
                    27: "bg-red-200 text-red-800",
                  }

                  return (
                    <div
                      key={index}
                      className={`h-20 border-r border-b p-1 relative ${index % 7 === 6 ? "border-r-0" : ""}`}
                    >
                      <div className="text-right text-sm font-medium">{day}</div>
                      {hasEvent && (
                        <div
                          className={`absolute inset-x-1 top-6 bottom-1 ${eventColors[day]} rounded p-1 text-xs overflow-hidden`}
                        >
                          <div className="font-medium">Conselho</div>
                          <div>Turma 301</div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="p-4 flex justify-end space-x-4 border-t">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded"
                onClick={handleCloseCalendar}
              >
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
