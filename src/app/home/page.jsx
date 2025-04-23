"use client";

/**
 * Página inicial do aplicativo, acessível apenas para usuários logados.
 *
 * @author Gustavo Stinghen,
 * @author Joana Reinert Voigt(Documentação)
 * @since 13/03/2025
 * Atualizado em 08/04/2025
 * @author Cauã Justimiano Dutra
 */

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { Header } from "@/components/Header/Header";
import { BlueBackground } from "@/components/topBar/BlueBackground";
import { useUser } from "../UserProvider";

import Image from "next/image";
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
            <div className="bg-gradient-to-r from-[var(--bluePrimary)] to-[var(--blueSecondary)] text-[var(--white)]  px-6 py-3 rounded-full flex items-center shadow-md">
              <span>Bem vindo, {user?.name}!</span>
              <span className="ml-2">👋</span>
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
              className="bg-gradient-to-r from-[var(--bluePrimary)] to-[var(--blueSecondary)] text-[var(--white)] px-6 py-3 rounded-full shadow-md hover:from-blue-700 hover:to-blue-600 transition-all duration-300 inline-block"
            >
              Aprenda sobre nosso site
            </a>
            <div className="flex -space-x-4">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="w-12 h-12 rounded-full border-2 border-white overflow-hidden"
                >
                  <Image
                    src="/assets/Imagem-Romario.png"
                    alt={`Avatar ${index + 1}`}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Carrossel */}
          <div className="relative mt-20">
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 cursor-pointer hover:scale-110 transition duration-200"
            >
              <img
                src="/assets/arrows/blue-left-arrow.png"
                width={36}
                height={36}
                className="text-[var(--bluePrimary)]"
              />
            </button>

            <div className="flex justify-center gap-6 transition-all duration-300">
              {cards.map((card, index) => {
                const isActive = index === selectedIndex;
                return (
                  <div
                    key={index}
                    onClick={() => handleCardClick(index)}
                    className={`rounded-lg p-8 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105 ${
                      isActive
                        ? "w-56 h-56 bg-white scale-110 shadow-xl text-[var(--bluePrimary)]"
                        : "w-48 h-48 bg-gray-200 opacity-60 scale-95"
                    }`}
                  >
                    <div
                      className={`${
                        isActive ? "text-[var(--bluePrimary)]" : "text-[var(--blueTertiary)]"
                      }`}
                    >
                      {card.icon}
                    </div>
                    <span
                      className={`${
                        isActive
                          ? "font-semibold text-[var(--bluePrimary)]"
                          : "text-gray-600"
                      }`}
                    >
                      {card.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 p-2 z-10 cursor-pointer hover:scale-110 transition duration-200"
            >
              <img
                src="/assets/arrows/blue-right-arrow.png"
                width={36}
                height={36}
                className="text-[var(--bluePrimary)]"
              />
            </button>
          </div>
        </div>

        {/* Chat flutuante */}
        <div className="fixed bottom-6 right-6">
          <a href="/chat">
            <button className="bg-[var(--bluePrimary)] text-[var(--white)] rounded-full p-4 shadow-lg">
              <img
                src="/assets/chats/filled-chat-icon.png"
                alt="chat"
                width={36}
                height={36}
              />
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}
