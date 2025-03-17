"use client";

/**
 * Página inicial do aplicativo, acessível apenas para usuários logados.
 *
 * @author Gustavo Stinghen
 * @author Joana Reinert Voigt(Documentação)
 * @since 13/03/2025
 */
import { React } from "react";
import LoggedUserOnly from "../LoggedUserOnly";

export default function Home() {
    return (
        <LoggedUserOnly><h1>Home</h1></LoggedUserOnly>
    );
}