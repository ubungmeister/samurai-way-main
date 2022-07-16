import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogIteam/DialogItem";
import {Messages} from "./Messages/Messages";
import {DialogItemArrayProps, DialogItemProps, MessagePropsArray, MessagesPropsType} from "../../redux/state";

// почему в импорте DialogItemProps а в пропсах  DialogItemProps[] и почему я не могу ссылаться на DialogItemArrayProps
type PropsType = {
    dialogData: Array<DialogItemProps>
    messageData: Array<MessagesPropsType>
}



export const Dialogs = (props: PropsType ) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div>ddd</div>
                <div className={s.dialog + ' ' + s.active}>
                    <div>
                        <DialogItem dialogData={props.dialogData} />
                    </div>
                </div>
                <Messages messageData={props.messageData}/>

            </div>
        </div>
    );
};

