import React from 'react';
import {StoreType} from "../../types/entities";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer: React.FC<{ store: StoreType}> = (props) => {

    const state = props.store.getState().dialogsPage

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body:string) => {
       props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return < Dialogs onNewMessageChange={onNewMessageChange}
                     onSendMessageClick={onSendMessageClick}
                     dialogsPage={state}

            />
}


export default DialogsContainer;