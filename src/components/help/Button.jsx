import React from "react"

export function Button({
  children,
  variant = "default",
  size = "default",
  className = "",
  ...props
}) {
  const variantClasses = {
    default: "bg-[#29abe2] text-white hover:bg-[#1d8eb9] border border-transparent",
    outline: "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100 border-none",
    link: "bg-transparent text-[#29abe2] hover:underline border-none p-0",
  }

  const sizeClasses = {
    default: "h-10 px-4 py-2",
    sm: "h-8 px-3 py-1 text-sm",
    lg: "h-12 px-6 py-3 text-lg",
  }

  return (
    <button
      className={`inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#29abe2] focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
