import Image from 'next/image';
import React from 'react';

export const ClassesTitle = ( { iconWidth, iconHeight, textSize, onClick }) => {
    return (
        <div className="flex items-center gap-4 w-auto" onClick={onClick}>
            <Image src="/assets/clipboard.png" alt="Logo" width={iconWidth} height={iconHeight} priority={true} objectFit="contain" />
            <h1 className="text-${textSize} font-bold font-(family-name:<Montserrat>) text-[var(--white)]">Turmas</h1>
        </div>
    )
}