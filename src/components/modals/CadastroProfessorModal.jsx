"use client"

import { useState } from "react"
import { ChevronDown, X } from "lucide-react"

export default function CadastroProfessorModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    cadastro: "",
    cargaHoraria: "",
    curso: "",
  })

  const handleOpenModal = () => setIsOpen(true)
  const handleCloseModal = () => setIsOpen(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Dados do professor:", formData)
    handleCloseModal()
  }

  return (
    <>
      <button
        onClick={handleOpenModal}
        className="px-4 py-2 bg-[#003366] text-white rounded-3xl hover:bg-[#002244] transition-colors"
      >
        Cadastrar Professor
      </button>

      {isOpen && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <div className="bg-white shadow-xl rounded-3xl p-6 w-full max-w-md relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl text-gray-600 font-light">Cadastrar professor</h2>
              <button onClick={handleCloseModal} className="text-gray-700 hover:text-gray-900">
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome do Professor/a <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cadastro" className="block text-sm font-medium text-gray-700 mb-1">
                      Cadastro <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="cadastro"
                      name="cadastro"
                      required
                      value={formData.cadastro}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="cargaHoraria" className="block text-sm font-medium text-gray-700 mb-1">
                      Carga Horária <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="cargaHoraria"
                      name="cargaHoraria"
                      required
                      value={formData.cargaHoraria}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="curso" className="block text-sm font-medium text-gray-700 mb-1">
                    Curso
                  </label>
                  <div className="relative">
                    <select
                      id="curso"
                      name="curso"
                      value={formData.curso}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                    >
                      <option value="" disabled>
                        Selecione um curso
                      </option>
                      <option value="usinagem">Usinagem</option>
                      <option value="sistemas">Programador de Sistemas da Informação</option>
                      <option value="ferramentaria">Ferramentaria</option>
                      <option value="eletrica">Elétrica</option>
                      <option value="mecanica">Mecânica</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <ChevronDown className="h-4 w-4 text-gray-500" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#003366] text-white rounded-full hover:bg-[#002244] transition-colors"
                  >
                    Cadastrar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
