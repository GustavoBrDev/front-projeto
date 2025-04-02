import Image from 'next/image';
import React from 'react';

export const FeedbackTitle = () => {
    return (
        <div className="flex items-center mx-auto gap-4">
            <Image src="/assets/feedbacks/white-feedbacks.png" alt="Logo" width={44} height={44} priority={true} objectFit="contain" />
            <h1 className="text-4xl font-bold font-(family-name:<Montserrat>) text-[var(--white)]">Feedbacks</h1>
        </div>
    )
}