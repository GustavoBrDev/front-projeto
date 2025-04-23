"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/Header/Header"
import { BlueBackground } from "@/components/topBar/BlueBackground"
import { WhiteContainer } from "@/components/White-Container"
import { PreCouncilTitle } from "@/components/topBar/PreCouncilTitle"
import { SuccessAlert } from "@/components/alerts/SucessAlert"

export default function PreConselho() {
  const [professor, setProfessor] = useState("Romario Hornburg - Programação Java")
  const [isEditing, setIsEditing] = useState(true)
  const [showProfessorSelect, setShowProfessorSelect] = useState(false)
  const [progressPercentage, setProgressPercentage] = useState(50)
  const [allFieldsFilled, setAllFieldsFilled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    pontosPositivos: "",
    pontosMelhoria: "",
    sugestoesMelhoria: "",
    infraestruturaPontos: "",
  })

  // Estado para controlar quais campos estão focados
  const [focusedFields, setFocusedFields] = useState({
    pontosPositivos: false,
    pontosMelhoria: false,
    sugestoesMelhoria: false,
    infraestruturaPontos: false,
  })

  const professores = [
    "Romario Hornburg - Programação Java",
    "Ana Silva - Banco de Dados",
    "Carlos Oliveira - Desenvolvimento Web",
    "Mariana Santos - Inteligência Artificial",
    "Roberto Almeida - Redes de Computadores",
  ]

  // Atualiza a barra de progresso e verifica se todos os campos estão preenchidos
  useEffect(() => {
    const totalFields = 4 // Número total de campos
    let filledFields = 0

    // Conta campos preenchidos
    if (formData.pontosPositivos.trim() !== "") filledFields++
    if (formData.pontosMelhoria.trim() !== "") filledFields++
    if (formData.sugestoesMelhoria.trim() !== "") filledFields++
    if (formData.infraestruturaPontos.trim() !== "") filledFields++

    // Verifica se todos os campos estão preenchidos
    setAllFieldsFilled(filledFields === totalFields)

    // Calcula a porcentagem (começa com 50% como na imagem)
    const basePercentage = 50
    const additionalPercentage = (filledFields / totalFields) * 50
    setProgressPercentage(basePercentage + additionalPercentage)
  }, [formData])

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    })
  }

  const handleFocus = (field) => {
    setFocusedFields({
      ...focusedFields,
      [field]: true,
    })
  }

  const handleBlur = (field) => {
    setFocusedFields({
      ...focusedFields,
      [field]: false,
    })
  }

  const handleSubmit = () => {
    if (allFieldsFilled) {
      setIsEditing(false)
      setProgressPercentage(100)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 mx-auto">
      <Header />

      <BlueBackground>
        <PreCouncilTitle iconWidth={40} iconHeight={40} textSize={"3xl"} />
      </BlueBackground>

      <div className="container flex justify-center w-screen mx-auto">
        <WhiteContainer>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="max-w-6xl mx-auto p-6 bg[var(--white)] rounded-lg shadow-md my-6">
              {/* Conteúdo principal */}

              {/* Barra de progresso */}
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
                <div
                  className="bg-[var(--bluePrimary)] h-2.5 rounded-full"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>

              {/* Seleção de professor */}
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <h3 className="text-lg font-bold">Professor</h3>
                  <div className="relative ml-4 flex-grow">
                    {showProfessorSelect ? (
                      <div className="border border-gray-300 rounded-md md:w-1/3 w-full">
                        <select
                          className="w-full p-2 outline-none bg-[var(--white)] text-sm"
                          value={professor}
                          onChange={(e) => {
                            setProfessor(e.target.value)
                            setShowProfessorSelect(false)
                          }}
                          disabled={!isEditing}
                        >
                          {professores.map((prof, index) => (
                            <option key={index} value={prof}>
                              {prof}
                            </option>
                          ))}
                        </select>
                      </div>
                    ) : (
                      <div
                        className="border border-gray-300 rounded-[24px] p-2 cursor-pointer flex items-center justify-between bg-gray-100 text-sm w-1/3"
                        onClick={() => isEditing && setShowProfessorSelect(true)}
                      >
                        <span>{professor}</span>
                        {isEditing && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-2 text-gray-500 "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 mt-2 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat.
                </p>
              </div>

              {/* Pontos positivos */}
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-2">Pontos positivos</h3>
                <div className="relative">
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-md h-32 bg-gray-50 text-sm resize-none"
                    value={formData.pontosPositivos}
                    onChange={(e) => handleInputChange("pontosPositivos", e.target.value)}
                    onFocus={() => handleFocus("pontosPositivos")}
                    onBlur={() => handleBlur("pontosPositivos")}
                    disabled={!isEditing}
                    placeholder={
                      isEditing
                        ? "Digite aqui os pontos positivos, as alterações são salvas automaticamente..."
                        : ""
                    }
                  />
                </div>
              </div>

              {/* Pontos de melhoria */}
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-2">Pontos de melhoria</h3>
                <div className="relative">
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-md h-32 bg-gray-50 text-sm resize-none"
                    value={formData.pontosMelhoria}
                    onChange={(e) => handleInputChange("pontosMelhoria", e.target.value)}
                    onFocus={() => handleFocus("pontosMelhoria")}
                    onBlur={() => handleBlur("pontosMelhoria")}
                    disabled={!isEditing}
                    placeholder={
                      isEditing
                        ? "Digite aqui os pontos de melhoria, as alterações são salvas automaticamente..."
                        : ""
                    }
                  />
                </div>
              </div>

              {/* Sugestões de Melhoria */}
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-2">Sugestões de Melhoria</h3>
                <div className="relative">
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-md h-32 bg-gray-50 text-sm resize-none"
                    value={formData.sugestoesMelhoria}
                    onChange={(e) => handleInputChange("sugestoesMelhoria", e.target.value)}
                    onFocus={() => handleFocus("sugestoesMelhoria")}
                    onBlur={() => handleBlur("sugestoesMelhoria")}
                    disabled={!isEditing}
                    placeholder={
                      isEditing
                        ? "Digite aqui as sugestões de melhoria, as alterações são salvas automaticamente..."
                        : ""
                    }
                  />
                </div>
              </div>

              {/* Infraestrutura */}
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-2">Infraestrutura</h3>
                <p className="text-gray-600 mb-2 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat.
                </p>
                <h4 className="font-bold mb-2">Pontos positivos</h4>
                <div className="relative">
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-md h-32 bg-gray-50 text-sm resize-none"
                    value={formData.infraestruturaPontos}
                    onChange={(e) => handleInputChange("infraestruturaPontos", e.target.value)}
                    onFocus={() => handleFocus("infraestruturaPontos")}
                    onBlur={() => handleBlur("infraestruturaPontos")}
                    disabled={!isEditing}
                    placeholder={isEditing ? "Digite aqui os pontos positivos da infraestrutura..." : ""}
                  />
                </div>
              </div>

              {/* Botão de enviar */}
              {isEditing && (
                <div className="flex justify-end mt-8">
                  <button
                    className={`px-6 py-2 rounded-md transition-colors ${
                      allFieldsFilled
                        ? "bg-[var(--bluePrimary)] text-white hover:bg-[var(--blueTertiary)] cursor-pointer"
                        : "bg-[var(--gray)] text-gray-200 cursor-not-allowed"
                    }`}
                    onClick={handleSubmit}
                    disabled={!allFieldsFilled}
                  >
                    Enviar
                  </button>
                </div>
              )}

              {/* Mensagem quando não está editando */}
              {!isEditing && (
                <SuccessAlert message="Seu feedback foi enviado com sucesso!" />
              )}
            </div>
          )}
        </WhiteContainer>
      </div>
    </div>
  )
}