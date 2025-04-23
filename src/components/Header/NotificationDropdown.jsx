"use client"

import { useState, useRef, useEffect } from "react"
import { useUser } from "@/app/UserProvider"
import Image from "next/image"

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
        className="relative p-2 text-[var(--white)] rounded-full hover:bg-[var(--bluePrimary)] focus:outline-none transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Notificações"
      >
        <Image
          src="/assets/notification.png"
          alt="Notificação"
          width={24}
          height={24}
          className="w-6 h-6"
        />

        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full bg-[var(--red)] text-[var(--white)] text-xs transform transition-transform duration-200">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 max-w-[calc(100vw-2rem)] bg-[var(--white)] rounded-md shadow-lg z-10 transform origin-top-right transition-all duration-200 ease-in-out">
          <div className="p-2 font-medium border-b text-[var(--bluePrimary)]">Notificações</div>

          {notifications.length === 0 ? (
            <div className="p-4 text-center text-gray-500">Nenhuma notificação</div>
          ) : (
            <div className="max-h-96 overflow-y-auto">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-3 cursor-pointer hover:bg-gray-100 transition-colors duration-150 ${!notification.read ? "bg-blue-50" : ""}`}
                  onClick={() => handleNotificationClick(notification.id)}
                >
                  <div className="flex flex-col gap-1 w-full">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-[var(--black)]">{notification.title}</span>
                      <span className="text-xs text-[var(--gray)]">{formatDate(notification.date)}</span>
                    </div>
                    <p className="text-sm text-gray-600">{notification.message}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {notifications.length > 0 && (
            <div className="p-2 text-center border-t">
              <button className="text-[var(--bluePrimary)] text-sm hover:underline w-full transition-colors duration-150 cursor-pointer">
                Ver todas
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

