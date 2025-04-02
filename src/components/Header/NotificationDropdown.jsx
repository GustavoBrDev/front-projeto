"use client"

import { useState, useRef, useEffect } from "react"
import { useUser } from "@/app/UserProvider";

export function NotificationDropdown() {
  const { notifications, markNotificationAsRead } = useUser()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const unreadCount = notifications.filter((n) => !n.read).length

  const handleNotificationClick = (id) => {
    markNotificationAsRead(id)
  }

  const formatDate = (date) => {
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

    if (diffDays === 0) {
      return "Hoje"
    } else if (diffDays === 1) {
      return "Ontem"
    } else {
      return `${diffDays} dias atrás`
    }
  }

  // Fechar dropdown quando clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [dropdownRef])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="relative p-2 text-white rounded-full hover:bg-blue-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Notificações"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>

        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full bg-red-500 text-white text-xs">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-10">
          <div className="p-2 font-medium border-b">Notificações</div>

          {notifications.length === 0 ? (
            <div className="p-4 text-center text-gray-500">Nenhuma notificação</div>
          ) : (
            <div className="max-h-96 overflow-y-auto">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-3 cursor-pointer hover:bg-gray-100 ${!notification.read ? "bg-blue-50" : ""}`}
                  onClick={() => handleNotificationClick(notification.id)}
                >
                  <div className="flex flex-col gap-1 w-full">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{notification.title}</span>
                      <span className="text-xs text-gray-500">{formatDate(notification.date)}</span>
                    </div>
                    <p className="text-sm text-gray-600">{notification.message}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {notifications.length > 0 && (
            <div className="p-2 text-center border-t">
              <button className="text-blue-600 text-sm hover:underline w-full">Ver todas</button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

