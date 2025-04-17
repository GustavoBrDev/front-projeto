"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { NotificationDropdown } from "./NotificationDropdown";
import { useUser, UserAvatar } from "@/app/UserProvider";
import { MobileSidebar } from "./MobileSideBar";
import { FeedbackTitle } from "../topBar/FeedbackTitle";
import { PreCouncilTitle } from "../topBar/PreCouncilTitle";
import { ChatTitle } from "../topBar/ChatTitle";
import { ConfigurationTitle } from "../topBar/ConfigurationTitle";
import { RoutePaths } from "@/app/RoutePaths";
import Image from "next/image";

export function Header() {
  const { user, hasPermission } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({});
  const menuRefs = useRef({});

  // Definição dos itens de navegação
  const navItems = [
    {
      label: (
        <FeedbackTitle iconWidth={24} iconHeight={24} textSize="text-lg" />
      ),
      href: RoutePaths.FEEDBACKS,
      permission: "view_feedbacks",
    },
    {
      label: (
        <PreCouncilTitle iconWidth={24} iconHeight={24} textSize="text-lg" />
      ),
      href: RoutePaths.PRE_COUNCILS,
      permission: "view_pre_conselhos",
    },
    {
      label: <ChatTitle iconWidth={24} iconHeight={24} textSize="text-lg" />,
      href: RoutePaths.CHAT,
      permission: "view_chat",
    },
    {
      label: (
        <ConfigurationTitle iconWidth={24} iconHeight={24} textSize="text-lg" />
      ),
      href: RoutePaths.CONFIGURATION,
      permission: "view_feedbacks",
    },
  ];

  // Fechar dropdown quando clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      Object.keys(menuRefs.current).forEach((key) => {
        if (
          menuRefs.current[key] &&
          !menuRefs.current[key].contains(event.target)
        ) {
          setOpenMenus((prev) => ({ ...prev, [key]: false }));
        }
      });
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRefs]);

  // Função para renderizar os menus para usuários com permissão "view_all_menus"
  const renderAdvancedMenus = () => {
    if (!hasPermission("view_all_menus")) return null;

    const menuCategories = ["Menu 1", "Menu 2", "Menu 3", "Menu 4"];

    return menuCategories.map((category, index) => (
      <div
        key={index}
        className="relative"
        ref={(el) => (menuRefs.current[`menu-${index}`] = el)}
      >
        <button
          className="flex items-center gap-1 px-3 py-2 text-white hover:bg-blue-700 rounded-md transition-colors duration-200"
          onClick={() =>
            setOpenMenus((prev) => ({
              ...prev,
              [`menu-${index}`]: !prev[`menu-${index}`],
            }))
          }
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
          <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 transform origin-top-left transition-all duration-200 ease-in-out">
            <div className="py-1">
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-150"
              >
                Opção 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-150"
              >
                Opção 2
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-150"
              >
                Opção 3
              </a>
            </div>
          </div>
        )}
      </div>
    ));
  };

  // Prevenir scroll quando o menu mobile está aberto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="bg-blue-600 text-white fixed px-6 top-0 w-full z-30">
        <div className="w-full px-6">
          <div className="flex h-16 items-center justify-between w-full">
            {/* Logo - oculto em mobile */}
            <div className="hidden md:flex items-center">
              <Link href={RoutePaths.HOME} className="text-white">
                <Image
                  src="/assets/icone.png"
                  alt="Logo"
                  width={30}
                  height={30}
                />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                className="p-2 rounded-md hover:bg-blue-700 focus:outline-none transition-colors duration-200"
                onClick={() => setMobileMenuOpen(true)}
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
            <nav className="hidden md:flex md:flex-1 md:items-center md:justify-start md:space-x-4 md:ml-4">
              {hasPermission("view_all_menus")
                ? renderAdvancedMenus()
                : navItems.map(
                    (item, index) =>
                      hasPermission(item.permission) && (
                        <Link
                          key={index}
                          href={item.href}
                          className="flex items-center text-white hover:text-blue-100 transition-colors duration-200"
                        >
                          {item.label}
                        </Link>
                      )
                  )}
            </nav>

            {/* Right side items */}
            <div className="flex items-center space-x-2">
              <NotificationDropdown />
              <UserAvatar user={user} showDropdown={true} />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile sidebar */}
      <MobileSidebar
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
        hasPermission={hasPermission}
        user={user}
      />

      {/* Espaço para compensar o header fixo */}
      <div className="h-16"></div>
    </>
  );
}
