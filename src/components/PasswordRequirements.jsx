"use client";

/**
 * Componente de regra de senha. 
 *
 * @author Gustavo Stinghen
 * @author Joana Reinert Voigt(documentação)
 * @since 13/03/2025
 */
import React from "react";
import PasswordChecklist from "react-password-checklist";
import "../app/globals.css";

export default function PasswordRequirements({ password, confirmPassword }) {
  return (
    <div className="absolute top-full left-0 mt-2 z-10 p-4 rounded bg-[var(--bluePrimary)]">
      <PasswordChecklist
        rules={[
          "minLength",
          "specialChar",
          "number",
          "capital",
          "match",
          "notEmpty",
          "lowerCase"
        ]}
        minLength={8}
        value={password}
        specialChar={1}
        valueAgain={confirmPassword}
        messages={{
          minLength: "A senha deve ter pelo menos 8 caracteres.",
          specialChar: "A senha deve conter um caractere especial.",
          number: "A senha deve conter um número.",
          capital: "A senha deve conter uma letra maiúscula.",
          match: "As senhas não concidem.",
          notEmpty: "A senha deve ser preenchida.",
          lowerCase: "A senha deve conter uma letra minúscula."
        }}
        className="text-white"
      />
    </div>
  );
}
