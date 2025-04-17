import React from "react";
import Image from "next/image";

export const HomeTitle = ({ iconWidth, iconHeight, textSize, onClick }) => {
  return (
    <div className="flex items-center gap-4" onClick={onClick}>
      <Image
        src="/assets/home.png"
        alt="Icone da home"
        width={iconWidth}
        height={iconHeight}
        priority={true}
        objectFit="contain"
      />
      <h1 className="text-${textSize} font-bold font-(family-name:<Montserrat>) text-[var(--white)]">
        Página inicial
      </h1>
    </div>
  );
};
