import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../types/entities";
import { Redirect } from 'react-router-dom';


const Dialogs: React.FC<{onNewMessageChange: (body:string) => void,
                        onSendMessageClick: () => void,
                        dialogsPage: DialogsPageType,
                        isAuth: boolean
} >
    = (props) => {

    const state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.onSendMessageClick()
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
       let body =  e.target.value;
       props.onNewMessageChange(body)
    }

    if(!props.isAuth) return  <Redirect to={'/login'} />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{ messagesElements }</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={ onNewMessageChange }
                                   placeholder ="Enter your message"></textarea></div>
                    <div><button onClick={ onSendMessageClick }>Send</button></div>
                </div>
            </div>
        </div>
    )
}


export default Dialogs;