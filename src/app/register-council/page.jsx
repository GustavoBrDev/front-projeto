"use client"

import { useState } from "react"
import { ChevronDown, Calendar, Clock, X } from "lucide-react"
import { WhiteContainer } from "@/components/White-Container"
import { Header } from "@/components/Header/Header"
import { BlueBackground } from "@/components/topBar/BlueBackground"
import { RegisterCouncilTitle } from "@/components/topBar/RegisterCouncilTitle"

export default function AgendarConselho() {
  // Modifique o estado para rastrear o professor selecionado sem substituir a interface
  const [selectedProfessor, setSelectedProfessor] = useState(null)
  const [highlightedProfessor, setHighlightedProfessor] = useState(null)
  const [currentStep, setCurrentStep] = useState(1)
  const [showConfirmation, setShowConfirmation] = useState(false)

  const [selectedDate, setSelectedDate] = useState(5) // Default to day 5
  const [selectedMonth, setSelectedMonth] = useState(3) // March (0-indexed would be 2, but using 3 for display)
  const [selectedYear, setSelectedYear] = useState(2025)
  const [selectedTime, setSelectedTime] = useState("08:00")
  const [showTimeSelector, setShowTimeSelector] = useState(false)
  const [isLoading, setIsLoading] = useState(false) // Adicionei para evitar erro

  const timeOptions = [
    "07:00",
    "07:30",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
  ]

  // Add these functions after the existing state declarations (around line 25)
  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ]

  const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate()
  }

  const getFirstDayOfMonth = (month, year) => {
    // Day of week (0 = Sunday, 1 = Monday, etc.)
    return new Date(year, month - 1, 1).getDay()
  }

  const handlePreviousMonth = () => {
    if (selectedMonth === 1) {
      setSelectedMonth(12)
      setSelectedYear(selectedYear - 1)
    } else {
      setSelectedMonth(selectedMonth - 1)
    }
    // Reset selected date if it doesn't exist in the new month
    const daysInNewMonth = getDaysInMonth(
      selectedMonth === 1 ? 12 : selectedMonth - 1,
      selectedMonth === 1 ? selectedYear - 1 : selectedYear,
    )
    if (selectedDate > daysInNewMonth) {
      setSelectedDate(daysInNewMonth)
    }
  }

  const handleNextMonth = () => {
    if (selectedMonth === 12) {
      setSelectedMonth(1)
      setSelectedYear(selectedYear + 1)
    } else {
      setSelectedMonth(selectedMonth + 1)
    }
    // Reset selected date if it doesn't exist in the new month
    const daysInNewMonth = getDaysInMonth(
      selectedMonth === 12 ? 1 : selectedMonth + 1,
      selectedMonth === 12 ? selectedYear + 1 : selectedYear,
    )
    if (selectedDate > daysInNewMonth) {
      setSelectedDate(daysInNewMonth)
    }
  }

  // Generate calendar days for the current month
  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(selectedMonth, selectedYear)
    const firstDay = getFirstDayOfMonth(selectedMonth, selectedYear)

    // Previous month days
    const daysInPrevMonth = getDaysInMonth(
      selectedMonth === 1 ? 12 : selectedMonth - 1,
      selectedMonth === 1 ? selectedYear - 1 : selectedYear,
    )
    const prevMonthDays = Array.from({ length: firstDay }, (_, i) => ({
      day: daysInPrevMonth - firstDay + i + 1,
      current: false,
    }))

    // Current month days
    const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => ({
      day: i + 1,
      current: true,
    }))

    // Next month days
    const remainingDays = 42 - (prevMonthDays.length + currentMonthDays.length)
    const nextMonthDays = Array.from({ length: remainingDays }, (_, i) => ({
      day: i + 1,
      current: false,
    }))

    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays]
  }

  const calendarDays = generateCalendarDays()

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

  const handleAgendarClick = () => {
    setShowConfirmation(true)
  }

  const handleConfirmAgendamento = () => {
    // Aqui você implementaria a lógica para salvar o agendamento
    setShowConfirmation(false)
    // Poderia redirecionar para outra página ou mostrar uma mensagem de sucesso
  }

  const handleCancelAgendamento = () => {
    setShowConfirmation(false)
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
    <div className="min-h-screen bg-gray-100 mx-auto">
      <Header />
      
      <BlueBackground>
        <RegisterCouncilTitle iconWidth={40} iconHeight={40} textSize={"3xl"}/>
      </BlueBackground>

      <div className="container flex justify-center w-screen mx-auto">
        <WhiteContainer>
          {isLoading ? (
            <Loading />
          ) : (

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
                    <select className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-[24px] appearance-none">
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
                    <img src="/assets/plus/dark-blue-plus.png" className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="h-40 overflow-y-auto pr-2 space-y-2 custom-scrollbar">
                    {professores.map((professor) => (
                      <div
                        key={professor.id}
                        className={`${
                          highlightedProfessor === professor.id ? "bg-blue-600" : "bg-[var(--bluePrimary)]"
                        } text-white p-2 rounded-[24px] flex items-center cursor-pointer hover:bg-blue-700`}
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
                      <img src="/assets/plus/dark-blue-plus.png" className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="h-40 overflow-y-auto pr-2 space-y-2 custom-scrollbar">
                    {professores.map((professor) => (
                      <div
                        key={professor.id}
                        className={`${
                          highlightedProfessor === professor.id ? "bg-blue-600" : "bg-[var(--bluePrimary)]"
                        } text-white p-2 rounded-[24px] flex items-center cursor-pointer hover:bg-blue-700`}
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
                  <h4 className="font-medium">
                    {monthNames[selectedMonth - 1]} {selectedYear}
                  </h4>
                  <div className="flex space-x-2">
                    <button className="p-1 hover:bg-gray-200 rounded" onClick={handlePreviousMonth}>
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </button>
                    <button className="p-1 hover:bg-gray-200 rounded" onClick={handleNextMonth}>
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
                    {calendarDays.map((date, index) => (
                      <div
                        key={index}
                        className={`text-sm p-1 rounded-full ${
                          date.current && date.day === selectedDate ? "bg-blue-500 text-white" : ""
                        } ${!date.current ? "text-gray-400" : "hover:bg-gray-200 cursor-pointer"}`}
                        onClick={() => date.current && setSelectedDate(date.day)}
                      >
                        {date.day}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center mb-6">
                  <div className="flex-1 flex items-center border rounded-[24px] p-2 bg-white">
                    <img src="/assets/calendars/black-calendar.png" className="h-5 w-5 text-gray-50" />
                    <span className="ml-2 text-gray-700">{selectedDate.toString().padStart(2, "0")}/{selectedMonth.toString().padStart(2, "0")}/{selectedYear}</span>
                  </div>
                  <div className="flex-1 flex items-center border rounded-[24px] p-2 ml-2 bg-white relative">
                    <img src="/assets/clock.png" className="h-5 w-5 text-gray-50" />
                    <span
                      className="ml-2 text-gray-700 cursor-pointer"
                      onClick={() => setShowTimeSelector(!showTimeSelector)}
                    >
                      {selectedTime}
                    </span>
                    {showTimeSelector && (
                      <div className="absolute z-50 top-full left-0 mt-2 w-32 bg-white border rounded shadow-lg max-h-48 overflow-y-auto">
                        {timeOptions.map((time) => (
                          <div
                            key={time}
                            className={`p-2 hover:bg-blue-100 cursor-pointer ${selectedTime === time ? "bg-blue-200" : ""}`}
                            onClick={() => {
                              setSelectedTime(time)
                              setShowTimeSelector(false)
                            }}
                          >
                            {time}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-[24px]"
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
                          highlightedProfessor === professor.id ? "bg-blue-600" : "bg-[var(--bluePrimary)]"
                        } text-white p-2 rounded-[24px] flex items-center cursor-pointer hover:bg-blue-700`}
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
                    <img src="/assets/plus/dark-blue-plus.png" className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="h-48 overflow-y-auto pr-2 space-y-2 custom-scrollbar">
                    {professores.map((professor) => (
                      <div
                        key={professor.id}
                        className={`${
                          highlightedProfessor === professor.id ? "bg-blue-600" : "bg-[var(--bluePrimary)]"
                        } text-white p-2 rounded-[24px] flex items-center cursor-pointer hover:bg-blue-700`}
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
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-6 rounded-[24px]"
                    onClick={handleVoltarClick}
                  >
                    Voltar
                  </button>
                  <div className="space-x-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-[24px]">
                      Editar Email
                    </button>
                    <button
                      className="bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 px-6 rounded-[24px]"
                      onClick={handleAgendarClick}
                    >
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
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-[24px]"
                onClick={handleCloseCalendar}
              >
                Fechar
              </button>
            </div>
          </div>
        )}

        {/* Confirmation Modal */}
        {showConfirmation && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden w-96">
              <div className="bg-blue-700 text-white p-3">
                <h3 className="text-lg font-medium">Confirmar Agendamento</h3>
              </div>

              <div className="p-4">
                <div className="flex flex-col items-center mb-3">
                  <p className="text-gray-600 text-sm text-center">
                    Confirmar agendamento do conselho para Turma 301 no dia {selectedDate.toString().padStart(2, "0")}/
                    {selectedMonth.toString().padStart(2, "0")}/{selectedYear} às {selectedTime}?
                  </p>
                </div>

                <div className="flex justify-end space-x-2">
                  <button
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 text-sm py-1.5 px-4 rounded-[24px]"
                    onClick={handleCancelAgendamento}
                  >
                    Cancelar
                  </button>
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-1.5 px-4 rounded-[24px]"
                    onClick={handleConfirmAgendamento}
                  >
                    Confirmar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
          )}
        </WhiteContainer>
      </div>
    </div>
  )
}