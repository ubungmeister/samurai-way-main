import React from 'react';

type MessagesPropsType = {
    id: number
    message: string
}

type MessagePropsArray = {
    messageData: Array<MessagesPropsType>
}

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

