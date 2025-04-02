"use client";

/**
 * Componente de card de acesso. Utilizado na página de login e redefinição de senha.
 *
 * @author Gustavo Stinghen
 * @author Joana Reinert Voigt(documentação)
 * @since 13/03/2025
 */
import Image from "next/image";
import { React } from "react";


export default function AcessCard( {forms, logoWidth, logoHeight, textTitle, text} ) {
    return (
        <div className="flex-2 md:flex-[2] flex justify-center items-center">
          <div className="bg-transparent md:bg-[var(--blueSecondary)] p-8 rounded-3xl w-full md:w-2/3">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={logoWidth}
              height={logoHeight}
              priority={true}
              className="mx-auto mb-12 hidden md:block"
              objectFit="contain"
            />
            <h3 className="text-3xl font-bold font-(family-name:<Poppins>) mb-3 md:text-[var(--white)]">
              {textTitle}
            </h3>
            <p className="text-1xl font-medium font-(family-name:<Poppins>) mb-3 md:text-[var(--white)]">
              {text}
            </p>
            
            {forms}

          </div>
        </div>
      );
}