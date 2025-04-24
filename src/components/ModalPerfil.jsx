"use client";
import React, { useState } from 'react';
import { Trash2, Edit, Check, Plus, Camera } from 'lucide-react';

export default function ModalPerfil() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
  const [userData, setUserData] = useState({
    name: "João Pedro Silva Valentim",
    email: "joao.valentim@edu.sc.senai.br",
    workload: "10h",
    registration: "202006065466754343",
    subjects: [
      { name: "Data Science", code: "AI PSIN MI74" },
      { name: "Robótica", code: "AI PSIN MI76" },
      { name: "Programação JAVA", code: "AI PSIN MI79" },
      { name: "Data Science", code: "AI PSIN MI75" }
    ]
  });

  const handleDelete = () => {
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    // Lógica para deletar o usuário
    setShowDeleteConfirm(false);
    // Aqui você poderia redirecionar ou mostrar uma mensagem de sucesso
  };

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    setIsEditMode(false);
    setShowSuccessMessage(true);
    
    // Esconder a mensagem de sucesso após 3 segundos
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  return (
    <>
      <div className="relative w-full max-w-md rounded-lg overflow-hidden shadow-lg bg-[#0a3170] text-white">
        {/* Cabeçalho com ícones */}
        <div className="absolute top-4 right-4 flex space-x-4">
          {!isEditMode && (
            <>
              <button onClick={handleDelete} className="text-red-500 hover:text-red-400">
                <Trash2 size={24} />
              </button>
              <button onClick={handleEdit} className="text-blue-400 hover:text-blue-300">
                <Edit size={24} />
              </button>
            </>
          )}
          {isEditMode && (
            <button onClick={handleSave} className="text-green-500 hover:text-green-400">
              <Check size={24} />
            </button>
          )}
        </div>

        {/* Perfil do usuário */}
        <div className="p-6">
          <div className="flex flex-col items-center mb-6">
            <div className="relative">
              <img 
                src="/assets/imgPerfil.svg" 
                alt="Foto de perfil" 
                className="w-24 h-24 rounded-full object-cover border-2 border-white"
              />
              {isEditMode && (
                <button className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-1">
                  <Camera size={16} />
                </button>
              )}
            </div>
            
            <h2 className="text-2xl font-bold mt-3">{userData.name}</h2>
            <p className="text-gray-300">{userData.email}</p>
            <p className="text-gray-300">Carga Horária: {userData.workload}</p>
            <p className="text-gray-300">Matrícula: {userData.registration}</p>
          </div>

          {/* Lista de matérias */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-semibold">
                {isEditMode ? "Últimos Conselhos:" : "Matérias cadastradas:"}
              </h3>
              {isEditMode && (
                <button className="bg-blue-500 rounded-full p-2">
                  <Plus size={20} />
                </button>
              )}
            </div>
            
            <div className="space-y-2">
              {userData.subjects.map((subject, index) => (
                <div key={index} className="flex justify-between items-center bg-blue-600 rounded-lg p-3">
                  <span>{subject.name}</span>
                  <span>{subject.code}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal de confirmação de exclusão */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Confirmar exclusão</h3>
            <p className="text-gray-700 mb-6">Você tem certeza que deseja excluir este usuário? Esta ação não pode ser desfeita.</p>
            <div className="flex justify-end space-x-3">
              <button 
                onClick={() => setShowDeleteConfirm(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
              >
                Cancelar
              </button>
              <button 
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mensagem de sucesso */}
      {showSuccessMessage && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50">
          Alterações salvas com sucesso!
        </div>
      )}
    </>
  );
}