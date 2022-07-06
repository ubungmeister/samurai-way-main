import React from 'react';
import {NavLink} from "react-router-dom";
import {DialogItemArrayProps} from "../../../redux/state";
// type DialogItemProps = {
//     name: string
//     id: number
// }
// type DialogItemArrayProps = {
//  dialogData: Array<DialogItemProps>
// }

export const DialogItem = (props: DialogItemArrayProps) => {
    return (
<ul> {props.dialogData.map((el,index)=>{
    return(
    <li key={el.id}><NavLink to={'/dialogs'+el.id}>{el.name}</NavLink></li>

    )})}
</ul>
    );
};

