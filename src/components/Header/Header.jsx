"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { NotificationDropdown } from "./NotificationDropdown"
import { LanguageSelector } from "./LanguageSelector"
import { useUser } from "@/app/UserProvider";
import { UserAvatar } from "@/app/UserProvider"

export function Header() {
  const { user, hasPermission } = useUser()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openMenus, setOpenMenus] = useState({})
  const menuRefs = useRef({})

  // Definição dos itens de navegação
  const navItems = [
    {
      label: "Feedbacks",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
      href: "/feedbacks",
      permission: "view_feedbacks",
    },
    {
      label: "Pré-Conselhos",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
      href: "/pre-conselhos",
      permission: "view_pre_conselhos",
    },
    {
      label: "Chat",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      ),
      href: "/chat",
      permission: "view_chat",
    },
    {
      label: "Configurações",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      ),
      href: "/configuracoes",
      permission: "view_feedbacks",
    },
  ]

  // Fechar dropdown quando clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      Object.keys(menuRefs.current).forEach((key) => {
        if (menuRefs.current[key] && !menuRefs.current[key].contains(event.target)) {
          setOpenMenus((prev) => ({ ...prev, [key]: false }))
        }
      })
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [menuRefs])

  // Função para renderizar os menus para usuários com permissão "view_all_menus"
  const renderAdvancedMenus = () => {
    if (!hasPermission("view_all_menus")) return null

    const menuCategories = ["Menu 1", "Menu 2", "Menu 3", "Menu 4"]

    return menuCategories.map((category, index) => (
      <div key={index} className="relative" ref={(el) => (menuRefs.current[`menu-${index}`] = el)}>
        <button
          className="flex items-center gap-1 px-3 py-2 text-white hover:bg-blue-700 rounded-md"
          onClick={() => setOpenMenus((prev) => ({ ...prev, [`menu-${index}`]: !prev[`menu-${index}`] }))}
        >
          {category}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
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

        {openMenus[`menu-${index}`] && (
          <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
            <div className="py-1">
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Opção 1
              </a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Opção 2
              </a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Opção 3
              </a>
            </div>
          </div>
        )}
      </div>
    ))
  }

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-white">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="p-2 rounded-md hover:bg-blue-700 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu principal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:flex-1 md:items-center md:justify-start md:space-x-4 md:ml-6">
            {hasPermission("view_all_menus")
              ? renderAdvancedMenus()
              : navItems.map(
                  (item, index) =>
                    hasPermission(item.permission) && (
                      <Link
                        key={index}
                        href={item.href}
                        className="flex items-center text-white hover:text-blue-100 transition-colors"
                      >
                        {item.icon}
                        {item.label}
                      </Link>
                    ),
                )}
          </nav>

          {/* Right side items */}
          <div className="flex items-center space-x-2">
            <LanguageSelector />
            <NotificationDropdown />
            <UserAvatar user={user} />
          </div>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-2 pb-4">
            {hasPermission("view_all_menus") ? (
              <div className="space-y-2">
                {["Menu 1", "Menu 2", "Menu 3", "Menu 4"].map((menu, index) => (
                  <div key={index} className="px-2 py-1">
                    <button className="w-full text-left px-3 py-2 text-white hover:bg-blue-700 rounded-md">
                      {menu}
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-2">
                {navItems.map(
                  (item, index) =>
                    hasPermission(item.permission) && (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md"
                      >
                        <div className="flex items-center">
                          {item.icon}
                          {item.label}
                        </div>
                      </Link>
                    ),
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  )
}

