import React from "react";
import Image from "next/image";

export const PreCouncilTitle = ( { iconWidth, iconHeight, textSize, onClick }) => {
    return (
        <div className="flex items-center gap-4" onClick={onClick}>
            <Image src="/assets/pre-councils/white-pre-council.svg" alt="Icone de pré-conselho" width={iconWidth} height={iconHeight} priority={true} objectFit="contain" />
            <h1 className="text-${textSize} font-bold font-(family-name:<Montserrat>) text-[var(--white)]">Pré-Conselhos</h1>
        </div>
    )
}