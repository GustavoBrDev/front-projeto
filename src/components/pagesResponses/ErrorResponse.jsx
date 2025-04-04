"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowLeft, AlertCircle, ShieldAlert, Clock, ServerCrash, RefreshCw, LogIn } from "lucide-react"
export default function ErrorPage({ type = "401", customMessage } ) {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Iniciar animação quando o componente montar
    setIsAnimating(true)

    // Efeito de flutuação para o ícone
    const interval = setInterval(() => {
      setIsAnimating((prev) => !prev)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  // Configurações específicas para cada tipo de erro
  const errorConfig = {
    "404": {
      title: "404",
      heading: "Página não encontrada",
      message:
        customMessage ||
        "Ops! Parece que você se perdeu no caminho. A página que você está procurando não existe ou foi movida.",
      icon: <AlertCircle size={120} className="text-blue-300 mb-6" />,
      gradient: "from-blue-900 to-sky-800",
      textGradient: "from-blue-300 to-cyan-300",
      buttonGradient: "from-blue-400 to-cyan-400",
      buttonBg: "bg-blue-800",
      buttonHoverBg: "hover:bg-blue-700",
      buttonRing: "focus:ring-blue-400",
      textColor: "text-blue-200",
      footerColor: "text-blue-300",
      primaryAction: {
        text: "Voltar para a página inicial",
        icon: <ArrowLeft size={20} />,
        href: "/",
      },
    },
    "403": {
      title: "403",
      heading: "Acesso negado",
      message:
        customMessage ||
        "Você não tem permissão para acessar esta página. Por favor, verifique suas credenciais ou entre em contato com o administrador.",
      icon: <ShieldAlert size={120} className="text-blue-300 mb-6" />,
      gradient: "from-blue-900 to-indigo-800",
      textGradient: "from-blue-300 to-indigo-300",
      buttonGradient: "from-blue-400 to-indigo-400",
      buttonBg: "bg-indigo-800",
      buttonHoverBg: "hover:bg-indigo-700",
      buttonRing: "focus:ring-indigo-400",
      textColor: "text-blue-200",
      footerColor: "text-indigo-300",
      primaryAction: {
        text: "Voltar para área segura",
        icon: <ArrowLeft size={20} />,
        href: "/",
      },
    },
    "401": {
      title: "401",
      heading: "Token expirado",
      message:
        customMessage ||
        "Sua sessão expirou ou as credenciais não são mais válidas. Por favor, faça login novamente para continuar.",
      icon: <Clock size={120} className="text-cyan-300 mb-6" />,
      gradient: "from-cyan-900 to-blue-800",
      textGradient: "from-cyan-300 to-blue-300",
      buttonGradient: "from-cyan-400 to-blue-400",
      buttonBg: "bg-cyan-800",
      buttonHoverBg: "hover:bg-cyan-700",
      buttonRing: "focus:ring-cyan-400",
      textColor: "text-cyan-200",
      footerColor: "text-cyan-300",
      primaryAction: {
        text: "Fazer login novamente",
        icon: <LogIn size={20} />,
        href: "/login",
      },
    },
    "500": {
      title: "500",
      heading: "Erro interno do servidor",
      message:
        customMessage ||
        "Algo deu errado no nosso servidor. Nossa equipe técnica já foi notificada. Por favor, tente novamente mais tarde.",
      icon: <ServerCrash size={120} className="text-sky-300 mb-6" />,
      gradient: "from-sky-900 to-blue-900",
      textGradient: "from-sky-300 to-blue-300",
      buttonGradient: "from-sky-400 to-blue-400",
      buttonBg: "bg-sky-800",
      buttonHoverBg: "hover:bg-sky-700",
      buttonRing: "focus:ring-sky-400",
      textColor: "text-sky-200",
      footerColor: "text-sky-300",
      primaryAction: {
        text: "Tentar novamente",
        icon: <RefreshCw size={20} />,
        href: "#",
        onClick: () => window.location.reload(),
      },
    },
  }

  const config = errorConfig[type]

  return (
    <div
      className={`min-h-screen bg-gradient-to-b ${config.gradient} flex flex-col items-center justify-center px-4 text-white`}
    >
      <div className={`transition-transform duration-1000 ${isAnimating ? "translate-y-2" : "-translate-y-2"}`}>
        {config.icon}
      </div>

      <h1
        className={`text-6xl md:text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${config.textGradient}`}
      >
        {config.title}
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">{config.heading}</h2>

      <p className={`text-lg ${config.textColor} mb-8 text-center max-w-md`}>{config.message}</p>

      <div className="relative group">
        <div
          className={`absolute -inset-0.5 bg-gradient-to-r ${config.buttonGradient} rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}
        ></div>
        <Link
          href={config.primaryAction.href}
          onClick={config.primaryAction.onClick}
          className={`relative flex items-center gap-2 px-8 py-3 ${config.buttonBg} rounded-lg font-medium transition-all duration-300 ${config.buttonHoverBg} ${config.buttonRing} focus:outline-none`}
        >
          {config.primaryAction.icon}
          {config.primaryAction.text}
        </Link>
      </div>

      <div className={`mt-16 ${config.footerColor} text-sm`}>
        <p>© {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.</p>
      </div>
    </div>
  )
}

