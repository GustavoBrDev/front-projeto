"use client";

import { useState } from "react";
import { ChevronDown, Search, ArrowUp, Eye } from "lucide-react";
import { Header } from "./Header/Header";
import { BlueBackground } from "./topBar/BlueBackground";
import { motion, AnimatePresence } from "framer-motion";
import { WhiteContainer } from "./White-Container";
import { ClassesTitle } from "./topBar/ClassesTitle";
import { SuccessAlert } from "@/components/alerts/SucessAlert";
import { ErrorAlert } from "@/components/alerts/ErrorAlert";
import NovaTurmaModal from "./NovaTurmaModal"; // Importe o componente do modal

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  // se já estiver no formato com barra
  if (dateStr.includes("/")) return dateStr;
  const [year, month, day] = dateStr.split("-");
  return `${day}/${month}/${year}`;
};

export default function TurmasPage() {
  const [statusFilter, setStatusFilter] = useState("Todas");
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar o modal
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(false);
  const [sucess, setSucess] = useState(false);
  const [turmas, setTurmas] = useState([
    {
      id: 1,
      nome: "MI74",
      descricao: "Programação de Sistemas",
      turno: "Integral",
      dataInicio: "01/08/2023",
      dataFim: "29/04/2025",
      capacidade: 25,
    },
    {
      id: 2,
      nome: "MW79",
      descricao: "Desenvolvimento Web",
      turno: "Noturno",
      dataInicio: "15/02/2024",
      dataFim: "15/06/2025",
      capacidade: 30,
    },
    {
      id: 3,
      nome: "MB77",
      descricao: "Banco de Dados",
      turno: "Matutino",
      dataInicio: "10/01/2024",
      dataFim: "10/05/2025",
      capacidade: 28,
    },
    {
      id: 4,
      nome: "MR74",
      descricao: "Redes de Computadores",
      turno: "Vespertino",
      dataInicio: "20/03/2023",
      dataFim: "10/03/2025",
      capacidade: 26,
    },
    {
      id: 5,
      nome: "MN74",
      descricao: "Engenharia de Software",
      turno: "Noturno",
      dataInicio: "05/04/2024",
      dataFim: "05/08/2025",
      capacidade: 25,
    },
    {
      id: 6,
      nome: "MS79",
      descricao: "Sistemas Embarcados",
      turno: "Integral",
      dataInicio: "01/05/2024",
      dataFim: "01/09/2025",
      capacidade: 22,
    },
    {
      id: 7,
      nome: "MC80",
      descricao: "Segurança da Informação",
      turno: "Matutino",
      dataInicio: "12/03/2024",
      dataFim: "12/07/2026",
      capacidade: 27,
    },
    {
      id: 8,
      nome: "MA81",
      descricao: "Inteligência Artificial",
      turno: "Vespertino",
      dataInicio: "25/02/2024",
      dataFim: "25/06/2025",
      capacidade: 29,
    },
  ]);

  // Adiciona nova turma ao estado
  const handleAddTurma = ({
    nomeTurma,
    curso,
    dataInicio,
    dataFim,
    capacidadeMax,
    turno,
  }) => {
    setTurmas((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        nome: nomeTurma,
        descricao: curso,
        turno,
        dataInicio,
        dataFim,
        capacidade: Number(capacidadeMax),
      },
    ]);
  };

  const filteredTurmas = turmas.filter((turma) => {
    const matchesSearch =
      turma.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
      turma.descricao.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "Todas" ||
      (statusFilter === "Ativas" &&
        new Date(turma.dataFim.split("/").reverse().join("-")) >= new Date()) ||
      (statusFilter === "Inativas" &&
        new Date(turma.dataFim.split("/").reverse().join("-")) < new Date());
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />

      <BlueBackground>
        <ClassesTitle iconWidth={40} iconHeight={40} textSize={"3xl"} />
      </BlueBackground>

      {sucess && <SuccessAlert message={"Turma criada com sucesso"} />}
      {error && <ErrorAlert message={"Erro ao criar turma"} />}

      {/* Conteúdo principal com rolagem interna */}
      <div className="flex-1 overflow-auto container mx-auto px-4 py-6 text-[var(--black)]">
        <WhiteContainer>
          <div className="bg-white rounded-lg shadow-md p-6">
            {/* Filtro e ações */}
            <div className="mb-6 flex flex-col lg:flex-row lg:justify-between lg:items-center">
              <div className="mb-4 lg:mb-0">
                <label
                  htmlFor="status"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Status turma
                </label>
                <div className="relative inline-block">
                  <select
                    id="status"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="block w-48 appearance-none bg-white border border-gray-300 rounded-full py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option>Todas</option>
                    <option>Ativas</option>
                    <option>Inativas</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className="relative w-full sm:w-64 mb-2 sm:mb-0">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Pesquisa rápida"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 text-base"
                  />
                </div>
                <button
                  className="ml-0 sm:ml-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition duration-200"
                  onClick={() => setIsModalOpen(true)}
                >
                  Nova Turma
                </button>
              </div>
            </div>

            {/* Tabela de turmas */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nome
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Turno
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Início
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Fim
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Capacidade
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Alunos
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredTurmas.map((turma) => (
                    <tr key={turma.id} className="hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {turma.nome}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {turma.turno}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(turma.dataInicio)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(turma.dataFim)}
                      </td>
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
        </WhiteContainer>
      </div>

      {/* Modal Nova Turma */}
      <NovaTurmaModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleAddTurma}
      />
    </div>
  );
}
