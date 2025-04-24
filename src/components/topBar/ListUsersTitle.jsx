import Image from 'next/image';
import React from 'react';
import { PedagogicalTitle } from './PedagogicalTitle';
import { UsersTitle } from './UsersTitle';
import { TeacherTitle } from './TeacherTitle';
import { SupervisorTitle } from './SupervisorTitle';

export const ListUsersTitle = ( { iconWidth, iconHeight, textSize, onClick, type }) => {
    if (type === "Users"){
        return <UsersTitle iconHeight={iconHeight} iconWidth={iconWidth} textSize={textSize} onClick={onClick}/>
    }
    else if (type === "Teachers"){
        return <TeacherTitle iconHeight={iconHeight} iconWidth={iconWidth} textSize={textSize} onClick={onClick}/>
    }
    else if (type === "Pedagogicals"){
        return <PedagogicalTitle iconHeight={iconHeight} iconWidth={iconWidth} textSize={textSize} onClick={onClick}/>
    }
    else if(type ==="Supervisores"){
        return <SupervisorTitle iconHeight={iconHeight} iconWidth={iconWidth} textSize={textSize} onClick={onClick}/>
    }

}
