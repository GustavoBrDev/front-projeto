import React from "react"

export function Badge({
  children,
  variant = "default",
  className = "",
}) {
  const variantClasses = {
    default: "bg-[#29abe2] text-white hover:bg-[#1d8eb9]",
    outline: "bg-transparent border border-current text-gray-700 hover:bg-gray-100",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
