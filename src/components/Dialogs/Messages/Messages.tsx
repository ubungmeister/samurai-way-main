import React from 'react';
import {MessagePropsArray} from "../../../redux/state";

export const Messages = (props:MessagePropsArray) => {
    return (
        <ul>
            {props.messageData.map((el,index)=>{
                return(
                    <li key={index}>{el.message}</li>
                )
            })}
        </ul>
    );
};

