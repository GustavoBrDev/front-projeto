"use client"

import React, { createContext, useContext, useState } from "react"

const AccordionContext = createContext(undefined)

// Contexto para o AccordionItem
const AccordionItemContext = createContext(undefined)

export function Accordion({
  type = "multiple",
  collapsible = false,
  children,
  className = "",
}) {
  const [expandedItems, setExpandedItems] = useState({})

  const toggleItem = (value) => {
    setExpandedItems((prev) => {
      if (type === "single") {
        // Se o item já está expandido e collapsible é true, recolha-o
        if (prev[value] && collapsible) {
          return {}
        }
        // Caso contrário, expanda apenas este item
        return { [value]: true }
      } else {
        // Para multiple, alterne o item atual
        return { ...prev, [value]: !prev[value] }
      }
    })
  }

  return (
    <AccordionContext.Provider value={{ expandedItems, toggleItem, type }}>
      <div className={`divide-y divide-gray-200 ${className}`}>{children}</div>
    </AccordionContext.Provider>
  )
}

export function AccordionItem({
  value,
  children,
  className = "",
}) {
  return (
    <AccordionItemContext.Provider value={{ value }}>
      <div className={`border-b border-gray-200 last:border-0 ${className}`}>{children}</div>
    </AccordionItemContext.Provider>
  )
}

export function AccordionTrigger({
  children,
  className = "",
}) {
  const context = useContext(AccordionContext)
  const itemContext = useContext(AccordionItemContext)

  if (!context) {
    throw new Error("AccordionTrigger must be used within an Accordion")
  }

  if (!itemContext) {
    throw new Error("AccordionTrigger must be used within an AccordionItem")
  }

  const { toggleItem, expandedItems } = context
  const { value } = itemContext
  const isExpanded = expandedItems[value] || false

  return (
    <button
      className={`flex justify-between items-center w-full py-4 px-6 text-left font-medium text-gray-900 hover:bg-gray-50 ${className}`}
      onClick={() => toggleItem(value)}
      aria-expanded={isExpanded}
    >
      <span>{children}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>
  )
}

export function AccordionContent({
  children,
  className = "",
}) {
  const context = useContext(AccordionContext)
  const itemContext = useContext(AccordionItemContext)

  if (!context) {
    throw new Error("AccordionContent must be used within an Accordion")
  }

  if (!itemContext) {
    throw new Error("AccordionContent must be used within an AccordionItem")
  }

  const { expandedItems } = context
  const { value } = itemContext
  const isExpanded = expandedItems[value] || false

  if (!isExpanded) {
    return null
  }

  return <div className={`py-3 px-6 ${className}`}>{children}</div>
}