"use client";

import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { X, Calendar, ChevronDown } from "lucide-react";

const cursosFicticios = [
  "Programação de Sistemas",
  "Desenvolvimento Web",
  "Banco de Dados",
  "Redes de Computadores",
  "Engenharia de Software",
  "Sistemas Embarcados",
  "Segurança da Informação",
  "Inteligência Artificial",
];

export default function NovaTurmaModal({ isOpen, onClose, onCreate }) {
  const [nomeTurma, setNomeTurma] = useState("");
  const [curso, setCurso] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [capacidadeMax, setCapacidadeMax] = useState("");
  const [turno, setTurno] = useState("");

  const handleCapacidadeChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 2);
    setCapacidadeMax(value);
  };

  const handleDataChange = (e, tipo) => {
    const value = e.target.value;
    if (tipo === "inicio") setDataInicio(value);
    else setDataFim(value);
  };

  const handleSubmit = () => {
    onCreate({ nomeTurma, curso, dataInicio, dataFim, capacidadeMax, turno });
    setNomeTurma("");
    setCurso("");
    setDataInicio("");
    setDataFim("");
    setCapacidadeMax("");
    setTurno("");
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-black/25" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="bg-gray-100 rounded-lg w-full max-w-xl p-8 relative">
          <button
            onClick={onClose}
            className="absolute right-6 top-6 text-navy-900"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-gray-800 font-medium">
                Nome da Turma <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={nomeTurma}
                onChange={(e) => setNomeTurma(e.target.value)}
                className="w-full px-4 py-3 rounded-full bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[var(--black)]"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-gray-800 font-medium">Curso</label>
              <div className="relative">
                <select
                  value={curso}
                  onChange={(e) => setCurso(e.target.value)}
                  className="w-full px-4 py-3 rounded-full bg-white border border-gray-200 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-[var(--black)]"
                >
                  <option value="" disabled>
                    Selecione um curso
                  </option>
                  {cursosFicticios.map((item, idx) => (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-gray-800 font-medium">
                Data de Início <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={dataInicio}
                onChange={(e) => handleDataChange(e, "inicio")}
                className="w-full px-4 py-3 rounded-full bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[var(--black)]"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-gray-800 font-medium">
                Data de Fim
              </label>
              <input
                type="date"
                value={dataFim}
                onChange={(e) => handleDataChange(e, "fim")}
                className="w-full px-4 py-3 rounded-full bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[var(--black)]"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-gray-800 font-medium">
                  Capacidade Máx
                </label>
                <input
                  type="number"
                  value={capacidadeMax}
                  onChange={handleCapacidadeChange}
                  className="w-full px-4 py-3 rounded-full bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[var(--black)]"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-gray-800 font-medium">Turno</label>
                <select
                  value={turno}
                  onChange={(e) => setTurno(e.target.value)}
                  className="w-full px-4 py-3 rounded-full bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[var(--black)]"
                >
                  <option value="" disabled>
                    Selecione um turno
                  </option>
                  <option value="matutino">Matutino</option>
                  <option value="vespertino">Vespertino</option>
                  <option value="noturno">Noturno</option>
                  <option value="integral">Integral</option>
                </select>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <button
                type="button"
                onClick={handleSubmit}
                className="px-8 py-3 bg-[#003366] text-white font-medium rounded-full hover:bg-[#002244] transition-colors"
              >
                Próximo
              </button>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
