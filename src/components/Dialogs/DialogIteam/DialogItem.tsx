import React from 'react';
import {NavLink} from "react-router-dom";
type DialogItemProps = {
    name: string
    id: number
}
type DialogItemArrayProps = {
 dialogData: Array<DialogItemProps>
}

export const DialogItem = (props2: DialogItemArrayProps) => {
    return (
<ul> {props2.dialogData.map((el,index)=>{
    return(
    <li key={el.id}><NavLink to={'/dialogs'+el.id}>{el.name}</NavLink></li>

    )})}
</ul>
    );
};

