import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ActionsTypes, RootStateType} from '../../types/entities';



const mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        onNewMessageChange: (body: string) => {dispatch(updateNewMessageBodyCreator(body))},
        onSendMessageClick: () => {dispatch(sendMessageCreator())}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);




export default DialogsContainer;