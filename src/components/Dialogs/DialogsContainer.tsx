import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";



const DialogsContainer: React.FC = () => {
    return <StoreContext.Consumer>
        { (store) => {

            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator())}

            let onNewMessageChange = (body: string) => {
                store.dispatch(updateNewMessageBodyCreator(body))}

            return < Dialogs onNewMessageChange={onNewMessageChange}
                             onSendMessageClick={onSendMessageClick}
                             dialogsPage={store.getState().dialogsPage}/>
            }
        }
    </StoreContext.Consumer>

}


export default DialogsContainer;