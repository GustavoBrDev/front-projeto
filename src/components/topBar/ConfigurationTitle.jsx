import React from "react";
import Image from "next/image";

export const ConfigurationTitle = ( { iconWidth, iconHeight, textSize, onClick }) => {
    return (
        <div className="flex items-center gap-4" onClick={onClick}>
            <Image src="/assets/settings/white-settings.png" alt="Icone de configuração" width={iconWidth} height={iconHeight} priority={true} objectFit="contain" />
            <h1 className="text-${textSize} font-bold font-(family-name:<Montserrat>) text-[var(--white)]">Configuração</h1>
        </div>
    )
}