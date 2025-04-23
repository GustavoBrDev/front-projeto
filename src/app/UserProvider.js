"use client"

import { createContext, useContext, useState, useEffect, useRef } from "react"

const UserContext = createContext(undefined)

// Mapeamento de permissões por papel
const rolePermissions = {
  aluno: ["view_feedbacks", "view_chat"],
  representante: ["view_feedbacks", "view_chat", "view_pre_conselhos"],
  professor: ["view_feedbacks", "view_chat", "view_pre_conselhos"],
  tecnico: ["view_all_menus"],
  supervisor: ["view_all_menus"],
  administrador: ["view_all_menus", "admin_access"],
}

// Dados de exemplo para demonstração
const mockUsers = {
  aluno: { id: "1", name: "Pedro Augusto Wilhelm", email: "pedro@escola.edu", role: "aluno"},
  representante: { id: "2", name: "Leticia Moretti", email: "leticia@escola.edu", role: "representante"},
  professor: { id: "3", name: "Romário Hornburg", email: "romario@escola.edu", role: "professor" },
  tecnico: { id: "4", name: "Jusceline", email: "jusceline@escola.edu", role: "tecnico"},
  supervisor: { id: "5", name: "Andrei", email: "andrei@escola.edu", role: "supervisor" },
  administrador: { id: "6", name: "Administrador", email: "admin@escola.edu", role: "administrador"},
}

const mockNotifications = [
  { id: "1", title: "Novo feedback", message: "Você recebeu um novo feedback", date: new Date(), read: false },
  {
    id: "2",
    title: "Lembrete de reunião",
    message: "Reunião amanhã às 14h",
    date: new Date(Date.now() - 86400000),
    read: false,
  },
  {
    id: "3",
    title: "Atualização do sistema",
    message: "O sistema foi atualizado com novos recursos",
    date: new Date(Date.now() - 172800000),
    read: true,
  },
]

export function UserProvider({ children }) {
  const [user, setUser] = useState(mockUsers['aluno']) // Define o usuário "aluno" como padrão
  const [notifications, setNotifications] = useState(mockNotifications)

  const markNotificationAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const hasPermission = (permission) => {
    if (!user) return false

    if (permission === "view_all_menus" && ["tecnico", "supervisor", "administrador"].includes(user.role)) {
      return true
    }

    return rolePermissions[user.role].includes(permission)
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        notifications,
        markNotificationAsRead,
        hasPermission,
        mockUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}

// Componente de avatar reutilizável
export function UserAvatar({ user, onClick, showDropdown = false }) {
  const [isOpen, setIsOpen] = useState(false)
  const { setUser, mockUsers } = useUser()
  const dropdownRef = useRef(null)

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else if (showDropdown) {
      setIsOpen(!isOpen)
    }
  }

  // Fechar dropdown quando clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  const handleRoleChange = (role) => {
    setUser(mockUsers[role])
    setIsOpen(false)
  }

  if (!user) return null

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={handleClick}
        className="focus:outline-none"
        aria-label={showDropdown ? "Mudar usuário" : "Avatar do usuário"}
      >
        {user.avatarUrl ? (
          <div className="h-8 w-8 rounded-full overflow-hidden">
            <img src={user.avatarUrl || "/placeholder.svg"} alt={user.name} className="h-full w-full object-cover" />
          </div>
        ) : (
          <div className="h-8 w-8 rounded-full bg-[var(--red)] flex items-center justify-center text-[var(--white)] text-sm font-medium hover:bg-[var(--blueTertiary)] transition-colors duration-200">
            {user.name.substring(0, 2).toUpperCase()}
          </div>
        )}
      </button>

      {showDropdown && isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-[var(--white)] rounded-md shadow-lg z-10 transform origin-top-right transition-all duration-200 ease-in-out">
          <div className="py-1">
            <div className="px-4 py-2 text-sm text-gray-500 border-b">Mudar para:</div>
            {Object.keys(mockUsers).map((role) => (
              <button
                key={role}
                onClick={() => handleRoleChange(role)}
                className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-150 text-[var(--black)] ${
                  user.role === role ? "bg-blue-50 font-medium" : ""
                }`}
              >
                <div className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-[var(--red)] flex items-center justify-center text-[var(--white)] text-xs font-medium mr-2">
                    {mockUsers[role].name.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div>{mockUsers[role].name}</div>
                    <div className="text-xs text-gray-500 capitalize">{role}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// Hook para obter usuário de exemplo
export function useMockUser(role) {
  const { setUser, mockUsers } = useUser()

  useEffect(() => {
    setUser(role ? mockUsers[role] : mockUsers['aluno'])
  }, [role, setUser, mockUsers])
}
