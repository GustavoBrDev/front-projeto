"use client"

/**
 * Componente para a parte esquerda da página de login. Exibe o logotipo e o texto de boas-vindas.
 *
 * @author Gustavo Stinghen
 * @author Joana Reinert Voigt(documentação)
 * @since 13/03/2025
 */
import Image from "next/image";
import { React } from "react";

export default function AcessLeft( { principalWidth, principalHeight, iconeWidth, iconeHeight } ) {
    return (
        <>
            <div className="flex-1 md:flex-[3] bg-[var(--blueSecondary)] p-6">
                <Image
                    src="/assets/icone.png"
                    alt="Logo"
                    width={iconeWidth}
                    height={iconeHeight}
                    priority={true}
                    objectFit="contain"
                />
                <h1 className="text-7xl font-bold font-(family-name:<Poppins>) text-[var(--white)] mt-12">
                    Bem-Vindo ao
                </h1>
                <h2 className="text-6xl font-(family-name:<Poppins>) text-[var(--white)]">
                    conselho do estudante
                </h2>
                <p className="text-2xl font-(family-name:<Poppins>) text-[var(--white)] mt-4">
                    Pare de correr atrás de seus sonhos e faça-os virem até você
                </p>
                
                <div className="flex justify-center items-center mt-12">
                    <Image
                    src="/assets/principal.png"
                    alt="Principal"
                    width={principalWidth}
                    height={principalHeight}
                    priority={true}
                    objectFit="contain"
                    />
                </div>
            </div>
        </>
    );
}