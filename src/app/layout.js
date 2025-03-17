"use client";

/**
 *
 * @author Gustavo Stinghen
 * @author Joana Reinert Voigt(documentação)
 * @since 13/03/2025
 */
import { SessionProvider } from 'next-auth/react';
import './globals.css';

/**
 * Layout raiz do aplicativo.
 *
 * @param {object} props - Propriedades do componente.
 * @param {JSX.Element} props.children - Elementos JSX que serão renderizados dentro do layout.
 * @return {JSX.Element} Elemento JSX do layout raiz.
 */
export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>
                <SessionProvider>{children}</SessionProvider>
            </body>
        </html>
    );
}