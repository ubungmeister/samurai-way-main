import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogIteam/DialogItem";
import {Messages} from "./Messages/Messages";
import {DialogItemArrayProps, DialogItemProps, MessagesPropsType} from "../../redux/state";

// type DialogItemProps = {
//     name: string
//     id: number
// }
// type DialogItemArrayProps = {
//     dialogData: Array<DialogItemProps>
// }
// type MessagesPropsType = {
//     id: number
//     message: string
// }
//
// type MessagePropsArray = {
//     messageData: Array<MessagesPropsType>
// }

type PropsType = {
    dialogData: DialogItemProps[]
    messageData: MessagesPropsType[]

}

export const Dialogs = (props: PropsType ) => {

    let messageData = [
        {id:1, message:'Hi'},
        {id:2, message:'Privet'},
        {id:3, message:'Kak ty?'}
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div>ddd</div>
                <div className={s.dialog + ' ' + s.active}>
                    <div>
                        <DialogItem dialogData={props.dialogData}/>
                    </div>
                </div>
                <Messages messageData={props.messageData}/>

            </div>
        </div>
    );
};

