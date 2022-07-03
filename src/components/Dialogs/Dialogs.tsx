import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogIteam/DialogItem";
import {Messages} from "./Messages";


export const Dialogs = () => {

    let dialogData = [
        {id:1, name:'Max'},
        {id:3, name:'Sveta'},
        {id:4, name:'Tanya'}
    ]
    let messageData = [
        {id:1, message:'Hi'},
        {id:2, message:'Privet'},
        {id:3, message:'Kak ty?'}
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <div className={s.dialog + ' ' + s.active}>
                    <div>
                        <DialogItem dialogData={dialogData}/>
                    </div>
                </div>
                <Messages messageData={messageData}/>

            </div>
        </div>
    );
};

