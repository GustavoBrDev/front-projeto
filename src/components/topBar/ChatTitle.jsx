import React from "react";
import Image from "next/image";

export const ChatTitle = ( { iconWidth, iconHeight, textSize, onClick }) => {
    return (
        <div className="flex items-center gap-4" onClick={onClick}>
            <Image src="/assets/chats/white-chat.png" alt="Icone do chat" width={iconWidth} height={iconHeight} priority={true} objectFit="contain" />
            <h1 className="text-${textSize} font-bold font-(family-name:<Montserrat>) text-[var(--white)]">Chat</h1>
        </div>
    )
}