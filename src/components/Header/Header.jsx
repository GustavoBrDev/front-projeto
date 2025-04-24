"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { NotificationDropdown } from "./NotificationDropdown"
import { useUser, UserAvatar } from "@/app/UserProvider"
import { MobileSidebar } from "./MobileSideBar"
import { FeedbackTitle } from "../topBar/FeedbackTitle"
import { PreCouncilTitle } from "../topBar/PreCouncilTitle"
import { ChatTitle } from "../topBar/ChatTitle"
import { ConfigurationTitle } from "../topBar/ConfigurationTitle"
import { RoutePaths } from "@/app/RoutePaths"
import Image from "next/image"

export function Header() {
  // Tente usar o contexto, mas forneça valores padrão se não estiver disponível
  const { user, hasPermission: hasPermissionContext } = useUser() || {
    user: null,
    hasPermission: () => false,
  }

  const hasPermission = useCallback(
    (permission) => {
      if (hasPermissionContext) {
        return hasPermissionContext(permission)
      }
      return false
    },
    [hasPermissionContext],
  )

  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openMenus, setOpenMenus] = useState({})
  const menuRefs = useRef({})

  const advancedMenus = [
    {
      category: "Usuários",
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
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      href: RoutePaths.USERS,
      permission: "manage_users",
      subItems: [
        {
          label: "Professores",
          href: RoutePaths.USERS,
          icon: <Image src="/assets/teachers.png" alt="Icone de usuários" width={20} height={20} priority={true} objectFit="contain" />
        },
        {
          label: "Técnicos",
          href: RoutePaths.USERS,
          permission: "view_tecnicos",
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
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 12h-4"></path>
              <path d="M18 8v8"></path>
            </svg>
          ),
        },
        {
          label: "Orientadores",
          href: RoutePaths.USERS,
          permission: "view_orientadores",
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
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M21 15l-3-3m0 0l-3 3m3-3v6"></path>
            </svg>
          ),
        },
        {
          label: "Alunos",
          href: RoutePaths.USERS,
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
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <line x1="23" y1="11" x2="17" y2="11"></line>
            </svg>
          ),
        },
      ],
    },
    {
      category: "Gerenciamento",
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
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      ),
      href: RoutePaths.CLASSES,
      permission: "manage_management",
      subItems: [
        {
          label: "Turmas",
          href: RoutePaths.CLASSES,
          icon: (
            <Image src="/assets/clipboard.png" alt="Logo" width={20} height={20} priority={true} objectFit="contain" />
          ),
        },
        {
          label: "Turnos",
          href: "/gerenciamento/turnos",
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
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          ),
        },
        {
          label: "Cursos",
          href: RoutePaths.COURSES,
          icon: (
            <Image src="/assets/mortarboards/mortarboard.png" alt="Logo" width={20} height={20} priority={true} objectFit="contain" />
          ),
        },
      ],
    },
    {
      category: "Educacional",
      icon: (
        <Image src="/assets/feedbacks/white-feedbacks.svg" alt="Logo" width={20} height={20} priority={true} objectFit="contain" />
      ),
      href: RoutePaths.COUNCILS,
      permission: "manage_educational",
      subItems: [
        {
          label: "Conselhos de Classe",
          href: RoutePaths.COUNCILS,
          icon: (
            <Image src="/assets/feedbacks/white-feedbacks.svg" alt="Logo" width={20} height={20} priority={true} objectFit="contain" />
          ),
        },
        {
          label: "Pré Conselhos",
          href: RoutePaths.PRE_COUNCILS,
          icon: (
            <Image src="/assets/pre-councils/white-pre-council.svg" alt="Icone de pré-conselho" width={20} height={20} priority={true} objectFit="contain" />
          ),
        },
        {
          label: "Feedbacks",
          href: RoutePaths.FEEDBACKS,
          permission: "view_feedbacks",
          icon: (
            <Image src="/assets/feedbacks/white-feedbacks.svg" alt="Logo" width={20} height={20} priority={true} objectFit="contain" />
          ),
        },
      ],
    },
    {
      category: "Chat",
      icon: (
        <Image src="/assets/chats/white-chat.svg" alt="Icone do chat" width={20} height={20} priority={true} objectFit="contain" />
      ),
      href: RoutePaths.CHAT,
      permission: "view_chat",
      subItems: [
        {
          label: "Alunos",
          href: RoutePaths.CHAT,
          icon: (
            <Image src="/assets/chats/white-chat.svg" alt="Icone do chat" width={20} height={20} priority={true} objectFit="contain" />
          ),
        },
        {
          label: "Professores",
          href: RoutePaths.CHAT,
          icon: (
            <Image src="/assets/chats/white-chat.svg" alt="Icone do chat" width={20} height={20} priority={true} objectFit="contain" />
          ),
        },
      ],
    },
  ]

  // Itens básicos de navegação
  const navItems = [
    {
      label: <FeedbackTitle iconWidth={24} iconHeight={24} textSize="text-lg" />,
      href: RoutePaths.FEEDBACKS,
      permission: "view_feedbacks",
    },
    {
      label: <PreCouncilTitle iconWidth={24} iconHeight={24} textSize="text-lg" />,
      href: RoutePaths.PRE_COUNCILS,
      permission: "view_pre_conselhos",
    },
    {
      label: <ChatTitle iconWidth={24} iconHeight={24} textSize="text-lg" />,
      href: RoutePaths.CHAT,
      permission: "view_chat",
    },
    {
      label: <ConfigurationTitle iconWidth={24} iconHeight={24} textSize="text-lg" />,
      href: RoutePaths.CONFIGURATION,
      permission: "view_feedbacks",
    },
  ]

  // Fechar dropdowns externos
  useEffect(() => {
    function handleClickOutside(event) {
      Object.keys(menuRefs.current).forEach((key) => {
        if (menuRefs.current[key] && !menuRefs.current[key].contains(event.target)) {
          setOpenMenus((prev) => ({ ...prev, [key]: false }))
        }
      })
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Navegação e controle mobile
  const navigateTo = (href) => {
    router.push(href)
    setMobileMenuOpen(false)
  }

  // Função para alternar o estado do menu
  const toggleMenu = (key) => {
    setOpenMenus((prev) => {
      const newState = { ...prev }
      newState[key] = !prev[key]
      return newState
    })
  }

  // Renderiza menus avançados
  const renderAdvancedMenus = () => {
    if (!hasPermission("view_all_menus")) return null

    return advancedMenus.map((menu, idx) => {
      if (menu.permission && !hasPermission(menu.permission)) return null

      const key = `menu-${idx}`
      const subs = menu.subItems ?? []
      const visibleSubs = subs.filter((i) => !i.permission || hasPermission(i.permission))

      // Sem subitens => link direto
      if (!visibleSubs.length) {
        return (
          <Link
            key={key}
            href={menu.href}
            className="flex items-center gap-1 px-3 py-2 text-[var(--white)] hover:bg-[var(--bluePrimary)] rounded-md transition-colors duration-200"
          >
            {menu.icon}
            {menu.category}
          </Link>
        )
      }

      // Com subitens => dropdown
      return (
        <div key={key} className="relative" ref={(el) => (menuRefs.current[key] = el)}>
          <div className="flex items-center">
            <button
              className="flex items-center gap-1 px-3 py-2 text-[var(--white)] hover:bg-[var(--bluePrimary)] rounded-md transition-colors duration-200"
              onClick={() => navigateTo(menu.href)}
            >
              {menu.icon}
              {menu.category}
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
                className={`h-4 w-4 transition-transform duration-200 ${openMenus[key] ? "rotate-180" : ""}`}
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

          {/* Menu dropdown - Garantindo visibilidade */}
          <div
            className={`absolute left-0 mt-1 w-48 bg-[var(--white)] rounded-md shadow-lg z-[100] transition-opacity duration-200 ${
              openMenus[key] ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            style={{ display: openMenus[key] ? "block" : "none" }}
          >
            <div className="py-1">
              {visibleSubs.map((sub, sidx) => (
                <Link
                  key={sidx}
                  href={sub.href}
                  className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-150"
                  onClick={() => setOpenMenus((prev) => ({ ...prev, [key]: false }))}
                >
                  {sub.icon}
                  {sub.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )
    })
  }

  // Bloqueio de scroll
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto"
  }, [mobileMenuOpen])

  return (
    <>
      <header className="bg-[var(--blueSecondary)] text-[var(--white)] fixed px-6 top-0 w-full z-30">
        <div className="flex h-16 items-center justify-between w-full">
          {/* Logo desktop */}
          <div className="hidden md:flex items-center">
            <Link href={RoutePaths.HOME} className="text-[var(--white)]">
              <Image src="/assets/icone.png" alt="Logo" width={30} height={30} />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="p-2 rounded-md hover:bg-[var(--bluePrimary)] transition-colors duration-200"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Menu principal"
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
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:flex-1 md:items-center md:justify-start md:space-x-4 md:ml-4">
            {hasPermission("view_all_menus")
              ? renderAdvancedMenus()
              : navItems.map(
                  (item, index) =>
                    hasPermission(item.permission) && (
                      <Link
                        key={index}
                        href={item.href}
                        className="flex items-center text-[var(--white)] hover:text-[#e0f2fe] transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    ),
                )}
          </nav>

          {/* Right side items */}
          <div className="flex items-center space-x-2">
            {user && <NotificationDropdown />}
            <UserAvatar user={user} showDropdown={true} />
          </div>
        </div>
      </header>

      {/* Mobile sidebar */}
      <MobileSidebar
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
        advancedMenus={advancedMenus}
        hasPermission={hasPermission}
        user={user}
      />

      {/* Espaço para compensar o header fixo */}
      <div className="h-16"></div>
    </>
  )
}
