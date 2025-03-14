"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { RoutePaths } from "./RoutePaths";
import { Loading } from "../components/Loading";


export default function AnonymousOnly ({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // aguardando carregamento da sessão
    if (session) {
      // se houver sessão, redireciona para a home (ou outra página desejada)
      router.push(RoutePaths.HOME);
    }
  }, [session, status, router]);

  if (status === "loading" || session) {
    return <Loading />;
  }

  return <>{children}</>;
}
