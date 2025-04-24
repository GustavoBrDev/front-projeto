import Image from 'next/image';
import React from 'react';

export const FeedbackTitle = ( { iconWidth, iconHeight, textSize, onClick }) => {
    return (
        <div className="flex items-center gap-4 w-auto" onClick={onClick}>
            <Image src="/assets/feedbacks/white-feedbacks.svg" alt="Logo" width={iconWidth} height={iconHeight} priority={true} objectFit="contain" />
            <h1 className="text-${textSize} font-bold font-(family-name:<Montserrat>) text-[var(--white)]">Feedbacks</h1>
        </div>
    )
}