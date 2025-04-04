"use client"

import { useState } from "react"
import {  Header } from "./Header"
import { useMockUser } from "@/app/UserProvider";

export function HeaderDemo() {
  const [selectedRole, setSelectedRole] = useState("aluno")

  return (
    <>
      <HeaderWithRole role={selectedRole} />

      <div className="container">
        <div className="flex flex-wrap">
          {["aluno", "representante", "professor", "tecnico", "supervisor", "administrador"].map((role) => (
            <button
              key={role}
              className={`px-4 py-2 rounded-md capitalize ${
                selectedRole === role
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100"
              }`}
              onClick={() => setSelectedRole(role)}
            >
              {role}
            </button>
          ))}
        </div>
      </div>
      </>
  )
}

function HeaderWithRole({ role }) {
  useMockUser(role)
}


