import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../types/entities";
import { Redirect } from 'react-router-dom';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';


const Dialogs: React.FC<{onNewMessageChange: (body:string) => void,
                        onSendMessageClick: (newMessageBody: string) => void,
                        dialogsPage: DialogsPageType,
                        isAuth: boolean
} >
    = (props) => {

    const state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id}/>);


    let addNewMessage = (values: any) => {
        props.onSendMessageClick(values.newMessageBody)
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
                    <AddMessageFormRedux onSubmit={addNewMessage}/>

                </div>
            </div>
        </div>
    )
}


type FormDataType = {
    newMessageBody: string
}


const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
               <Field component= "textarea" name = "newMessageBody" placeholder= "Enter your message"/>

                {/*<textarea value={newMessageBody}*/}
                {/*           onChange={ onNewMessageChange }*/}
                {/*           placeholder ="Enter your message">*/}
                {/*    */}
                {/*</textarea>*/}
            </div>
            <div><button>Send</button></div>

        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'}) (AddMessageForm)

export default Dialogs;