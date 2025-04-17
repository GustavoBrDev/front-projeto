"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  FileEdit,
  FileText,
  Settings,
} from "lucide-react";

const CARDS = [
  {
    icon: <FileEdit size={48} />,
    label: "Pré-conselhos",
  },
  {
    icon: <FileText size={48} />,
    label: "Feedbacks",
  },
  {
    icon: <Settings size={48} />,
    label: "Configurações",
  },
];

export default function Carousel({ options }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <div className="relative mt-8">
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white rounded-full p-2 shadow z-10"
      >
        <ChevronLeft size={24} className="text-blue-900" />
      </button>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-x space-x-6 px-10">
          {CARDS.map((card, index) => {
            const isActive = index === selectedIndex;
            return (
              <div
                key={index}
                className={`flex-none transition-all duration-300 ease-in-out rounded-lg flex flex-col items-center justify-center ${
                  isActive
                    ? "w-56 h-56 bg-white shadow-lg scale-105 text-blue-900"
                    : "w-48 h-48 bg-gray-200 scale-95 opacity-60"
                }`}
              >
                <div
                  className={`mb-4 ${
                    isActive ? "text-blue-900" : "text-blue-400"
                  }`}
                >
                  {card.icon}
                </div>
                <span
                  className={`${isActive ? "font-medium" : "text-gray-600"}`}
                >
                  {card.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white rounded-full p-2 shadow z-10"
      >
        <ChevronRight size={24} className="text-blue-900" />
      </button>
    </div>
  );
}
