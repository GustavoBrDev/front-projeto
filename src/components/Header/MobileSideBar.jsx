"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { UserAvatar } from "@/app/UserProvider"
import { useRouter } from "next/navigation"

/**
 * MobileSidebar
 * Combines basic navItems and advancedMenus (with expandable submenus)
 * Props:
 *  - isOpen: boolean
 *  - onClose: () => void
 *  - navItems: Array<{ href, label, permission }>
 *  - advancedMenus: Array<{ category, href, permission?, subItems?: Array<{ href, label, permission? }> }>
 *  - hasPermission: (perm: string) => boolean
 *  - user: { name, role }
 */
export function MobileSidebar({
  isOpen,
  onClose,
  navItems,
  advancedMenus = [],
  hasPermission = () => false,
  user = null,
}) {
  const sidebarRef = useRef(null)
  const [subMenus, setSubMenus] = useState({})
  const router = useRouter()

  // Fechar sidebar quando clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose()
      }
    }
    if (isOpen) document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen, onClose])

  // Navega para rota e fecha sidebar
  const navigateTo = (href) => {
    router.push(href)
    onClose()
  }

  // Função para alternar o estado do menu
  const toggleMenu = (key) => {
    setSubMenus((prev) => {
      const newState = { ...prev }
      newState[key] = !prev[key]
      return newState
    })
  }

  // Renderizar menus avançados para usuários com permissão
  const renderAdvancedMenus = () => {
    if (!hasPermission("view_all_menus")) return null

    return (
      <div className="space-y-1 py-2">
        {advancedMenus.map((menu, index) => {
          // Verifica permissão do menu
          if (menu.permission && !hasPermission(menu.permission)) return null

          const key = `menu-${index}`
          const items = menu.subItems ?? []
          const visible = items.filter((item) => !item.permission || hasPermission(item.permission))

          // Se não há subitens ou não há permissão para nenhum, link direto
          if (visible.length === 0) {
            return (
              <Link
                key={key}
                href={menu.href}
                className="flex items-center px-3 py-2 text-[var(--white)] hover:bg-[var(--bluePrimary)] rounded-md transition-colors duration-200 mx-2"
                onClick={onClose}
              >
                {menu.icon}
                <span>{menu.category}</span>
              </Link>
            )
          }

          // Menu com subitens
          return (
            <div key={key} className="px-2">
              <div className="flex items-center justify-between">
                <button
                  className="flex items-center px-3 py-2 text-[var(--white)] hover:bg-[var(--bluePrimary)] rounded-md transition-colors duration-200 flex-grow"
                  onClick={() => navigateTo(menu.href)}
                >
                  {menu.icon}
                  <span>{menu.category}</span>
                </button>
                <button
                  className="p-1 text-[var(--white)] hover:bg-[var(--bluePrimary)] rounded-md transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    toggleMenu(key)
                  }}
                  aria-label={`Expandir menu ${menu.category}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 transition-transform duration-200 ${subMenus[key] ? "rotate-180" : ""}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
              </div>

              {/* Submenu - Garantindo visibilidade */}
              <div
                className={`mt-1 pl-4 transition-all duration-200 ${
                  subMenus[key] ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
                style={{ display: subMenus[key] ? "block" : "none" }}
              >
                {visible.map((subItem, subIndex) => (
                  <Link
                    key={`${key}-sub-${subIndex}`}
                    href={subItem.href}
                    className="flex items-center px-3 py-2 text-[var(--white)] hover:bg-[var(--bluePrimary)] rounded-md transition-colors duration-150 mb-1"
                    onClick={onClose}
                  >
                    {subItem.icon}
                    <span>{subItem.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-[var(--black)] bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-64 bg-[var(--bluePrimary)] z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-[var(--blueSecondary)]">
            <Link href="/" className="text-[var(--white)]">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <button
              className="p-2 rounded-md hover:bg-[var(--bluePrimary)] focus:outline-none transition-colors duration-200"
              onClick={onClose}
              aria-label="Fechar menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[var(--white)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* User info */}
          {user && (
            <div className="p-4 border-b border-[var(--blueSecondary)]">
              <div className="flex items-center space-x-3">
                <UserAvatar user={user} />
                <div>
                  <p className="text-[var(--white)] font-medium">{user.name}</p>
                  <p className="text-[var(--white)] text-sm capitalize">{user.role}</p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto py-2">
            {hasPermission("view_all_menus") ? (
              renderAdvancedMenus()
            ) : (
              <div className="space-y-1 px-2">
                {navItems.map(
                  (item, index) =>
                    hasPermission(item.permission) && (
                      <Link
                        href={item.href}
                        key={index}
                        className="flex items-center px-3 py-2 text-[var(--white)] hover:bg-[var(--bluePrimary)] rounded-md transition-colors duration-200"
                        onClick={onClose}
                      >
                        {item.label}
                      </Link>
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
