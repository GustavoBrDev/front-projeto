import React from "react"

export function Card({
  children,
  className = "",
}) {
  return <div className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`}>{children}</div>
}

export function CardHeader({
  children,
  className = "",
}) {
  return <div className={`p-6 ${className}`}>{children}</div>
}

export function CardTitle({
  children,
  className = "",
}) {
  return <h3 className={`text-xl font-semibold text-gray-900 ${className}`}>{children}</h3>
}

export function CardDescription({
  children,
  className = "",
}) {
  return <p className={`text-sm text-gray-500 ${className}`}>{children}</p>
}

export function CardContent({
  children,
  className = "",
}) {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>
}
