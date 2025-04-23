"use client";

/**
 *
 * @author Gustavo Stinghen
 * @author Joana Reinert Voigt(documentação)
 * @since 13/03/2025
 */
import { SessionProvider } from 'next-auth/react';
import './globals.css';
import { UserProvider } from './UserProvider';

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
            <link rel="icon" href="/assets/LogoRedondo.svg" />
            <title>Conselho do Estudante</title>
            <body>
                <SessionProvider>
                    <UserProvider>
                        {children}
                    </UserProvider>
                </SessionProvider>
            </body>
        </html>
    );
}