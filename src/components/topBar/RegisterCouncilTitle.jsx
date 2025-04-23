import React from "react";
import Image from "next/image";
import { Columns } from "lucide-react";

export const RegisterCouncilTitle = ( { iconWidth, iconHeight, textSize, onClick, turma ,currentDate }) => {
    return (
        <div className="flex justify-between text-[var(--white)]">
            <div className="flex items-center gap-4" onClick={onClick}>
                <Image src="/assets/feedbacks/white-feedbacks.svg" alt="Icone do chat" width={iconWidth} height={iconHeight} priority={true} objectFit="contain" />
                <h1 className="text-${textSize} font-bold font-(family-name:<Montserrat>) text-[var(--white)]">Conselhos</h1>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-xl font-medium">Agendar Novo Conselho</span>
            </div>

            <div className="text-right">
              <h2 className="text-2xl font-bold">{turma}</h2>
              <p className="text-sm">{currentDate}</p>
            </div>
        </div>
    )
}