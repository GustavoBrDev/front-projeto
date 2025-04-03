"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { UserAvatar } from "@/app/UserProvider"

export function MobileSidebar({ isOpen, onClose, navItems, hasPermission, user }) {
  const sidebarRef = useRef(null)
  const [subMenus, setSubMenus] = useState({})

  // Fechar sidebar quando clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  // Renderizar menus avançados para usuários com permissão
  const renderAdvancedMenus = () => {
    if (!hasPermission("view_all_menus")) return null

    const menuCategories = ["Menu 1", "Menu 2", "Menu 3", "Menu 4"]

    return (
      <div className="space-y-1 py-2">
        {menuCategories.map((category, index) => (
          <div key={index} className="px-2">
            <button
              className="flex items-center justify-between w-full px-3 py-2 text-white hover:bg-blue-700 rounded-md transition-colors duration-200"
              onClick={() => setSubMenus((prev) => ({ ...prev, [`menu-${index}`]: !prev[`menu-${index}`] }))}
            >
              <span>{category}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform duration-200 ${subMenus[`menu-${index}`] ? "rotate-180" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {subMenus[`menu-${index}`] && (
              <div className="pl-4 mt-1 space-y-1 overflow-hidden transition-all duration-200 ease-in-out">
                <a
                  href="#"
                  className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md transition-colors duration-150"
                >
                  Opção 1
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md transition-colors duration-150"
                >
                  Opção 2
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md transition-colors duration-150"
                >
                  Opção 3
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-64 bg-blue-600 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-blue-500">
            <Link href="/" className="text-white">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <button
              className="p-2 rounded-md hover:bg-blue-700 focus:outline-none transition-colors duration-200"
              onClick={onClose}
              aria-label="Fechar menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* User info */}
          <div className="p-4 border-b border-blue-500">
            <div className="flex items-center space-x-3">
              <UserAvatar user={user} />
              {user && (
                <div>
                  <p className="text-white font-medium">{user.name}</p>
                  <p className="text-blue-200 text-sm capitalize">{user.role}</p>
                </div>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto py-2">
            {hasPermission("view_all_menus") ? (
              renderAdvancedMenus()
            ) : (
              <div className="space-y-1 px-2">
                {navItems.map(
                  (item, index) =>
                    hasPermission(item.permission) && (
                      <div
                        key={index}
                        className="flex items-center px-3 py-2 text-white hover:bg-blue-700 rounded-md transition-colors duration-200"
                      >
                        {item.label}
                      </div>
                    ),
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

