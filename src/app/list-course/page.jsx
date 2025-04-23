"use client";

import React, { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { Header } from '@/components/Header/Header';
import { BlueBackground } from '@/components/topBar/BlueBackground';
import { WhiteContainer } from '@/components/White-Container';
import { CourseTitle } from '@/components/topBar/CourseTitle';

export default function CursosPage() {
  const [showModal, setShowModal] = useState(false);
  const [cursos, setCursos] = useState([
    { id: 1, nome: 'Programador de Sistemas da Informação' },
    { id: 2, nome: 'Usinagem' },
    { id: 3, nome: 'Ferramentaria' },
    { id: 4, nome: 'Elétrica' },
    { id: 5, nome: 'Química' },
    { id: 6, nome: 'Montagem' },
    { id: 7, nome: 'Mecânica' },
    { id: 8, nome: 'Eletrotecnica' },
  ]);
  const [novoCurso, setNovoCurso] = useState({
    nome: '',
    turno: '',
    cargaHoraria: '',
    identidadeVisual: ''
  });

  const [isLoading, setIsLoading] = useState(false); // Adicionado para evitar erro

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoCurso({
      ...novoCurso,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = cursos.length > 0 ? Math.max(...cursos.map(curso => curso.id)) + 1 : 1;
    const novoCursoCompleto = { id: newId, nome: novoCurso.nome };

    setCursos(prevCursos => {
      const updatedCursos = [...prevCursos, novoCursoCompleto].sort((a, b) =>
        a.nome.localeCompare(b.nome)
      );
      return updatedCursos;
    });

    setNovoCurso({
      nome: '',
      turno: '',
      cargaHoraria: '',
      identidadeVisual: ''
    });
    setShowModal(false);
  };

  const cursosOrdenados = useMemo(() => {
    return [...cursos].sort((a, b) => a.nome.localeCompare(b.nome));
  }, [cursos]);

  return (
    <div className="min-h-screen bg-gray-100 mx-auto">
      <Header />
      
      <BlueBackground>
        <CourseTitle iconWidth={40} iconHeight={40} textSize={"3xl"}/>
      </BlueBackground>

      <div className="container flex justify-center w-screen mx-auto">
        <WhiteContainer>
          {isLoading ? (
            <Loading />
          ) : (

            // Main Content
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex justify-between items-center mb-8">
                  <div className="relative w-full max-w-md">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Pesquise aqui..."
                      className="pl-10 pr-4 py-2 w-full border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                      </svg>
                    </button>
                  </div>
                  <button 
                    onClick={() => setShowModal(true)}
                    className="bg-[var(--bluePrimary)] hover:bg-blue-900 text-white px-4 py-2 rounded-[24px]"
                  >
                    Novo Curso
                  </button>
                </div>

                <div className="space-y-4">
                  {cursosOrdenados.map((curso) => (
                    <div key={curso.id} className="bg-[var(--bluePrimary)] text-white rounded-[24px] p-3 flex items-center">
                      <div className=" p-2 mr-4">
                        <img src="/assets/mortarboards/filled-mortarboard.png" />
                      </div>
                      <span className="font-medium">{curso.nome}</span>
                    </div>
                  ))}
                </div>
              </div>
            
          )}

          {/* Modal */}
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-gray-100 rounded-lg p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Novo Curso</h2>
                  <button 
                    onClick={() => setShowModal(false)}
                    className="text-gray-700 hover:text-gray-900"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-1 font-medium">Nome do Curso *</label>
                      <input
                        type="text"
                        name="nome"
                        value={novoCurso.nome}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border rounded-[24px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block mb-1 font-medium">Turno *</label>
                      <select
                        name="turno"
                        value={novoCurso.turno}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border rounded-[24px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Selecione o Turno</option>
                        <option value="Manhã">Manhã</option>
                        <option value="Tarde">Tarde</option>
                        <option value="Noite">Noite</option>
                      </select>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-1 font-medium">Carga Horária *</label>
                        <input
                          type="text"
                          name="cargaHoraria"
                          value={novoCurso.cargaHoraria}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border rounded-[24px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block mb-1 font-medium">Identidade Visual *</label>
                        <input
                          type="text"
                          name="identidadeVisual"
                          value={novoCurso.identidadeVisual}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border rounded-[24px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-center mt-6">
                      <button
                        type="submit"
                        className="bg-[var(--bluePrimary)] hover:bg-blue-900 text-white px-8 py-2 rounded-[24px]"
                      >
                        Cadastrar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}

        </WhiteContainer>
      </div>
    </div>
  );
}