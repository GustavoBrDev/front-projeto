// SubjectOptions.jsx
import { ChevronDown } from "lucide-react"
import React from "react"

export function SubjectOptions({ subjects, selectedSubject, onChange }) {
  // Validação: Se subjects não for um array, retorna null (ou exibe uma mensagem de erro)
  if (!Array.isArray(subjects) || subjects.length === 0) {
    console.error("A propriedade 'subjects' deve ser um array com ao menos um item.")
    return null
  }
  
  return (
    <div className="relative inline-block w-content mr-4 text-[var(--white)]">
      <select
        value={selectedSubject}
        onChange={(e) => onChange(e.target.value)}
        className="block appearance-none w-full bg-[var(--bluePrimary)] p-2 px-4 pr-8 leading-tight focus:outline-none rounded-3xl"
      >
        {subjects.map((subject, index) => (
          <option key={index} value={subject} className="text-[var(--white)]">
            {subject}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
        <ChevronDown size={16} />
      </div>
    </div>
  )
}
