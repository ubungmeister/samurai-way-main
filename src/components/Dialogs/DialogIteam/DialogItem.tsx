import React from 'react';
import {NavLink} from "react-router-dom";
import {DialogItemArrayProps} from "../../../redux/state";

//как вообще до этого дошло?


export const DialogItem = (props: DialogItemArrayProps) => {
    return (
<ul> {props.dialogData.map((el,index)=>{
    return(
    <li key={el.id}><NavLink to={'/dialogs'+el.id}>{el.name}</NavLink></li>

    )})}
</ul>
    );
};

