"use client"

import Image from "next/image";
import { useState, useEffect } from "react"
import { Header } from "@/components/Header/Header"
import { BlueBackground } from "@/components/topBar/BlueBackground"
import { WhiteContainer } from "@/components/White-Container"
import { ListUsersTitle } from "@/components/topBar/ListUsersTitle";
import { useUser } from "../UserProvider"
import { Loading } from "@/components/Loading"
import SearchBar from "@/components/inputs/SearchBar";
import CadastroProfessorModal from "@/components/modals/CadastroProfessorModal";

const usersData = [
  { id: 1, name: "Pedro Wilhelm", email: "pedro@email.com", role: "aluno", avatar: "/default-avatar.png" },
  { id: 2, name: "Ana Souza", email: "ana@email.com", role: "professor", avatar: "/default-avatar.png" },
  { id: 3, name: "Carlos Lima", email: "carlos@email.com", role: "supervisor", avatar: "/default-avatar.png" },
  { id: 4, name: "Juliana Alves", email: "juliana@email.com", role: "técnico", avatar: "/default-avatar.png" },
  { id: 5, name: "Fernanda Torres", email: "fernanda@email.com", role: "representante", avatar: "/default-avatar.png" },
]

export default function ListUsers() {
  const { user } = useUser()
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredUsers = usersData.filter(
    u =>
      u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.role.toLowerCase().includes(searchQuery.toLowerCase())
  )

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <BlueBackground>
        <ListUsersTitle iconWidth={40} iconHeight={40} textSize={"3xl"} type={"Teachers"} />
      </BlueBackground>

      <div className="container flex justify-center w-screen mx-auto">
        <WhiteContainer>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="space-y-8">

              {/* Botão de cadastrar usuário com modal embutido */}
              <div className="flex justify-end px-4">
                <CadastroProfessorModal />
              </div>

              {/* Barra de pesquisa */}
              <div className="flex justify-center">
                <SearchBar />
              </div>

              {/* Lista de usuários */}
              <div className="space-y-4">
                {filteredUsers.map(user => (
                  <div
                    key={user.id}
                    className="bg-[var(--bluePrimary)] text-white flex items-center rounded-3xl shadow-md space-x-4 px-6 mx-auto w-full max-w-[1217px] h-[85px]"
                  >
                    <Image
                      src={user?.avatar || "/assets/profile.png"}
                      alt={user.name}
                      width={20}
                      height={20}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white"
                    />
                    <div>
                      <h2 className="font-semibold">{user.name}</h2>
                      <p className="text-gray-300 text-sm">{user.email}</p>
                    </div>
                  </div>
                ))}
                {filteredUsers.length === 0 && (
                  <p className="text-center text-gray-500">Nenhum usuário encontrado.</p>
                )}
              </div>
            </div>
          )}
        </WhiteContainer>
      </div>
    </div>
  )
}
