"use client"

import { createContext, useContext, useState, useEffect } from "react"

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
  aluno: { id: "1", name: "João Silva", email: "joao@escola.edu", role: "aluno" },
  representante: { id: "2", name: "Maria Souza", email: "maria@escola.edu", role: "representante" },
  professor: { id: "3", name: "Carlos Ferreira", email: "carlos@escola.edu", role: "professor" },
  tecnico: { id: "4", name: "Ana Oliveira", email: "ana@escola.edu", role: "tecnico" },
  supervisor: { id: "5", name: "Pedro Santos", email: "pedro@escola.edu", role: "supervisor" },
  administrador: { id: "6", name: "Lucia Mendes", email: "lucia@escola.edu", role: "administrador" },
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
  const [user, setUser] = useState(null)
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
export function UserAvatar({ user }) {
  if (!user) return null

  if (user.avatarUrl) {
    return (
      <div className="h-8 w-8 rounded-full overflow-hidden">
        <img src={user.avatarUrl || "/placeholder.svg"} alt={user.name} className="h-full w-full object-cover" />
      </div>
    )
  }

  return (
    <div className="h-8 w-8 rounded-full bg-blue-800 flex items-center justify-center text-white text-sm font-medium">
      {user.name.substring(0, 2).toUpperCase()}
    </div>
  )
}

// Hook para obter usuário de exemplo
export function useMockUser(role) {
  const { setUser } = useUser()

  useEffect(() => {
    setUser(mockUsers[role])
  }, [role, setUser])
}

