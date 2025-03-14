"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { RoutePaths } from "./RoutePaths";
import { Loading } from "../components/Loading";


export default function LoggedUserOnly({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // aguardando carregamento da sessão
    if (!session) {
      // redireciona para a página de login se não houver sessão
      router.push(RoutePaths.LOGIN);
    }
  }, [session, status, router]);

  if (status === "loading" || !session) {
    return <Loading />;
  }

  return <>{children}</>;
}
