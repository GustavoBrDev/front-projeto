import React from "react";
import Image from "next/image";

export const PedagogicalTitle = ( { iconWidth, iconHeight, textSize, onClick }) => {
    return (
        <div className="flex items-center gap-4" onClick={onClick}>
            <Image src="public/assets/supervisor-account.png" alt="Icone de usuários" width={iconWidth} height={iconHeight} priority={true} objectFit="contain" />
            <h1 className="text-${textSize} font-bold font-(family-name:<Montserrat>) text-[var(--white)]">Pedagógico</h1>
        </div>
    )
}