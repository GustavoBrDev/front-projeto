"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { Header } from "@/components/Header/Header";
import { BlueBackground } from "@/components/topBar/BlueBackground";
import { useUser } from "../UserProvider";
import { ChevronDown } from "lucide-react"

import {
  FileText,
  Settings,
} from "lucide-react";

import { RoutePaths } from "@/app/RoutePaths";
import { HomeTitle } from "@/components/topBar/HomeTitle";

export default function Home() {
  const { user } = useUser();

  useEffect(() => {
    const nomeSalvo = localStorage.getItem("usuario");
    if (nomeSalvo) {
      setUsername(nomeSalvo);
    }
  }, []);

  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState(1);

  const cards = [
    {
      icon: (
        <img
          src="/assets/profile.png"
          width={76}
          height={76}
          className="mb-4"
        />
      ),
      label: "Perfil",
      route: RoutePaths.PRE_COUNCILS,
    },
    {
      icon: <FileText size={48} className="mb-4" />,
      label: "Feedbacks",
      route: RoutePaths.FEEDBACKS,
    },
    {
      icon: <Settings size={48} className="mb-4" />,
      label: "Configurações",
      route: RoutePaths.CONFIGURATION,
    },
  ];

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : cards.length - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev < cards.length - 1 ? prev + 1 : 0));
  };

  const handleCardClick = (index) => {
    if (index === selectedIndex) {
      const selectedCard = cards[index];
      if (selectedCard?.route) {
        router.push(selectedCard.route);
      }
    } else {
      setSelectedIndex(index);
    }
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <BlueBackground>
        <HomeTitle iconWidth={40} iconHeight={40} textSize={"3xl"} />
      </BlueBackground>

      <div className="flex-1 bg-white rounded-t-3xl -mt-4 p-8 relative">
        <div className="max-w-5xl mx-auto">
          {/* Boas-vindas */}
          <div className="flex justify-center mt-6 mb-12">
            <div className="bg-gradient-to-r from-[var(--bluePrimary)] to-[var(--blueSecondary)] text-white  px-6 py-3 rounded-full flex items-center shadow-md">
              <span>AI PSIN 2023/2 INT 1</span>
              <ChevronDown/>
            </div>
          </div>

          {/* Título */}
          <div className="text-center mt-10 mb-10">
            <h1 className="text-4xl font-bold mb-4 text-[var(--black)]">
              Juntos, construímos um
              <br />
              futuro melhor para os alunos!
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conselhos de classe não precisam ser estressantes ou complicados.
              Aqui, nós fornecemos a oportunidade de tornar este processo algo
              fácil e tranquilo para todos.
            </p>
          </div>

          {/* Botão e perfis lado a lado */}
          <div className="flex items-center justify-center mt-10 mb-20 space-x-6">
            <a
              href="/sobre"
              className="bg-gradient-to-r from-[var(--bluePrimary)] to-[var(--blueSecondary)] text-white px-6 py-3 rounded-full shadow-md hover:from-blue-700 hover:to-blue-600 transition-all duration-300 inline-block"
            >
              Aprenda sobre nosso site
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
