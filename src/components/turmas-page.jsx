"use client"

import { useState } from "react"
import { ChevronDown, Search, ArrowUp, Eye } from "lucide-react"
import { Header } from "./Header/Header"
import { BlueBackground } from "./topBar/BlueBackground"
import { WhiteContainer } from "./White-Container"
import { ClassesTitle } from "./topBar/ClassesTitle"

export default function TurmasPage() {
  const [statusFilter, setStatusFilter] = useState("Todas")

  // Dados de exemplo para as turmas
  const turmas = [
    {
        id: 1,
        nome: "MI74",
        descricao: "Programação de Sistemas",
        turno: "Integral",
        dataInicio: "01/03/2024",
        dataFim: "30/06/2024",
        capacidade: 24,
      },
      {
        id: 2,
        nome: "MI75",
        descricao: "Desenvolvimento Web",
        turno: "Noturno",
        dataInicio: "15/02/2024",
        dataFim: "15/06/2024",
        capacidade: 30,
      },
      {
        id: 3,
        nome: "MI76",
        descricao: "Banco de Dados",
        turno: "Matutino",
        dataInicio: "10/01/2024",
        dataFim: "10/05/2024",
        capacidade: 28,
      },
      {
        id: 4,
        nome: "MI77",
        descricao: "Redes de Computadores",
        turno: "Vespertino",
        dataInicio: "20/03/2024",
        dataFim: "20/07/2024",
        capacidade: 26,
      },
      {
        id: 5,
        nome: "MI78",
        descricao: "Engenharia de Software",
        turno: "Noturno",
        dataInicio: "05/04/2024",
        dataFim: "05/08/2024",
        capacidade: 25,
      },
      {
        id: 6,
        nome: "MI79",
        descricao: "Sistemas Embarcados",
        turno: "Integral",
        dataInicio: "01/05/2024",
        dataFim: "01/09/2024",
        capacidade: 22,
      },
      {
        id: 7,
        nome: "MI80",
        descricao: "Segurança da Informação",
        turno: "Matutino",
        dataInicio: "12/03/2024",
        dataFim: "12/07/2024",
        capacidade: 27,
      },
      {
        id: 8,
        nome: "MI81",
        descricao: "Inteligência Artificial",
        turno: "Vespertino",
        dataInicio: "25/02/2024",
        dataFim: "25/06/2024",
        capacidade: 29,
      }
  ]

  return (
    <div className="min-h-screen bg-gray-100 mx-auto">
      <Header />
      
      <BlueBackground>
        <ClassesTitle iconWidth={40} iconHeight={40} textSize={"3xl"}/>
      </BlueBackground>

      <div className="container flex justify-center w-screen mx-auto">
        <WhiteContainer>

      {/* Conteúdo principal */}
      <div className="flex-1 bg-white p-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Filtro de status */}
          <div className="mb-6 ">
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1 ">
              Status turma
            </label>
            <div className="relative">
              <select
                id="status"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="block w-64 appearance-none bg-white border border-gray-300 rounded-[24px] py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option>Todas</option>
                <option>Ativas</option>
                <option>Inativas</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Barra de pesquisa */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Pesquisa rápida"
              className="block w-full pl-10 pr-3 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 text-base"
            />
          </div>

          {/* Tabela de turmas */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider border-b border-t border-gray-200"
                  >
                    <div className="flex items-center">
                      Nome da Turma
                      <ArrowUp className="ml-1 h-4 w-4" />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider border-b border-t border-gray-200"
                  >
                    Turno
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider border-b border-t border-gray-200"
                  >
                    Data de Início
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider border-b border-t border-gray-200"
                  >
                    Data de Fim
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider border-b border-t border-gray-200"
                  >
                    Capacidade Máx
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider border-b border-t border-gray-200"
                  >
                    Alunos
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {turmas.map((turma) => (
                  <tr key={turma.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{turma.nome}</div>
                      <div className="text-sm text-gray-500">{turma.descricao}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{turma.turno}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{turma.dataInicio}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{turma.dataFim}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                      {turma.capacidade}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                      <button className="text-gray-600 hover:text-gray-900">
                        <Eye className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </WhiteContainer>
      </div>
    </div>
  )
}
