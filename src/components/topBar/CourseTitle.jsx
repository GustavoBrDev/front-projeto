import Image from 'next/image';
import React from 'react';

export const CourseTitle = ( { iconWidth, iconHeight, textSize, onClick }) => {
    return (
        <div className="flex items-center gap-4 w-auto" onClick={onClick}>
            <Image src="/assets/mortarboards/mortarboard.png" alt="Logo" width={iconWidth} height={iconHeight} priority={true} objectFit="contain" />
            <h1 className="text-${textSize} font-bold font-(family-name:<Montserrat>) text-[var(--white)]">Cursos</h1>
        </div>
    )
}