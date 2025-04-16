import React from "react";
import Image from "next/image";

export const TeacherTitle = ( { iconWidth, iconHeight, textSize, onClick }) => {
    return (
        <div className="flex items-center gap-4" onClick={onClick}>
            <Image src="public/assets/teachers.png" alt="Icone de usuários" width={iconWidth} height={iconHeight} priority={true} objectFit="contain" />
            <h1 className="text-${textSize} font-bold font-(family-name:<Montserrat>) text-[var(--white)]">Professores</h1>
        </div>
    )
}