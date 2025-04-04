"use client";

/**
 * Página inicial do aplicativo, acessível apenas para usuários logados.
 *
 * @author Gustavo Stinghen
 * @author Joana Reinert Voigt(Documentação)
 * @since 13/03/2025
 */
import { React } from "react";
import MaintenancePage from "@/components/pagesResponses/Maintenance";

export default function Home() {
    return (
        <MaintenancePage {...{ isPlanned: true,  estimatedTime: "1 Semana", customMessage: "Essa página está em desenvolvimento" }} />
    );
}