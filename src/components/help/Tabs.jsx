"use client"

import React from "react"
import { createContext, useContext, useState } from "react"

const TabsContext = createContext(Object);

export function Tabs({
  defaultValue,
  children,
  className = "",
}) {
  const [activeTab, setActiveTab] = useState(defaultValue)

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>''
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  )
}

export function TabsList({
  children,
  className = "",
}) {
  return <div className={`flex ${className}`}>{children}</div>
}

export function TabsTrigger({
  value,
  children,
  className = "",
}) {
  const context = useContext(TabsContext)

  if (!context) {
    throw new Error("TabsTrigger must be used within a Tabs component")
  }

  const { activeTab, setActiveTab } = context
  const isActive = activeTab === value

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`px-4 py-2 text-sm font-medium transition-colors ${
        isActive ? "bg-[#29abe2] text-white" : "bg-transparent text-gray-700 hover:bg-gray-100"
      } ${className}`}
      data-state={isActive ? "active" : "inactive"}
    >
      {children}
    </button>
  )
}

export function TabsContent({
  value,
  children,
  className = "",
}) {
  const context = useContext(TabsContext)

  if (!context) {
    throw new Error("TabsContent must be used within a Tabs component")
  }

  const { activeTab } = context

  if (activeTab !== value) {
    return null
  }

  return <div className={className}>{children}</div>
}
