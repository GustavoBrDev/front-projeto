"use client"

import { useState } from "react"

export function Switch({ checked = false, onCheckedChange, className = "" }) {
  const [isChecked, setIsChecked] = useState(checked)

  const handleToggle = () => {
    const newState = !isChecked
    setIsChecked(newState)
    if (onCheckedChange) {
      onCheckedChange(newState)
    }
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isChecked}
      onClick={handleToggle}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
        isChecked ? "bg-[var(--blueSecondary)]" : "bg-gray-400"
      } ${className}`}
    >
      <span className="sr-only">Toggle switch</span>
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-gray-200 transition-transform ${
          isChecked ? "translate-x-5" : "translate-x-1"
        }`}
      />
    </button>
  )
}

