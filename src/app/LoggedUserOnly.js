"use client";
/** 
* @author Gustavo Stinghen
* @author Joana Reinert Voigt(documentação)
* @since 13/03/2025
*/
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { RoutePaths } from "./RoutePaths";
import { Loading } from "../components/Loading";

/**
 * Componente que verifica se o usuário está logado e redireciona para a página de login se não estiver.
 *
 * @param {object} props - Propriedades do componente.
 * @param {JSX.Element} props.children - Elementos JSX que serão renderizados se o usuário estiver logado.
 * @return {JSX.Element} Elemento JSX que será renderizado.
 */
export default function LoggedUserOnly({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // aguardando carregamento da sessão
    if (!session) {
      router.push(`${RoutePaths.ERROR}/500`);
    }
  }, [session, status, router]);

  if (status === "loading" || !session) {
    return <Loading />;
  }

  return <>{children}</>;
}
