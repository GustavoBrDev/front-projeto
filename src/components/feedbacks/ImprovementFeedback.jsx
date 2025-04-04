"use client"

import Image from "next/image"
import React from "react"

const exportFeedback = () => {
  // Lógica para exportar o feedback
}

export function ImprovementFeedback({
  strengths,
  improvements,
  suggestions,
}) {
  return (
    <div className="bg-gray-50 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h2 className="text-xl font-bold mb-3">Pontos Fortes</h2>
          <p className="text-gray-800">{strengths}</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-3">Oportunidades de Melhoria</h2>
          <p className="text-gray-800">{improvements}</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3">Sugestões da Turma</h2>
        <p className="text-gray-800">{suggestions}</p>
      </div>

      <div className="flex justify-end mt-4">
        <button className="text-gray-500 hover:text-gray-700">
            <Image
                src="/assets/export-feedback.png"
                alt="Logo"
                width={30}
                height={30}
                objectFit="contain"
                onClick={exportFeedback()}
              />
        </button>
      </div>
    </div>
  )
}

