// FeedbackOptions.jsx
import { ChevronDown } from "lucide-react"
import React from "react"

export function FeedbackOptions({ category, onChange }) {
  // Validação: Garante que a categoria seja uma das opções válidas
  const validCategories = ["Pessoal", "Turma", "Ambos"]
  const currentCategory = validCategories.includes(category) ? category : "Ambos"

  return (
    <div className="relative inline-block w-32 mr-4">
      <select
        value={currentCategory}
        onChange={(e) => onChange(e.target.value)}
        className="block appearance-none w-full text[var(--white)] bg-[var(--bluePrimary)] p-2 px-4 pr-8 leading-tight focus:outline-none rounded-3xl"
      >
        {validCategories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
        <ChevronDown size={16} />
      </div>
    </div>
  )
}
