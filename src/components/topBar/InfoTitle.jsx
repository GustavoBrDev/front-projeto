import Image from 'next/image';
import React from 'react';

export const InfoTitle = ( { iconWidth, iconHeight, onClick }) => {
    return (
        <div className="flex items-center gap-4 w-auto" onClick={onClick}>
            <Image src="/assets/info.svg" alt="Logo" width={iconWidth} height={iconHeight} priority={true} objectFit="contain" />
            <h1 className="text-3xl font-bold font-(family-name:<Montserrat>) text-[var(--white)]">Sobre</h1>
        </div>
    )
}