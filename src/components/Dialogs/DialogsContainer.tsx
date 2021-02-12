import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ActionsTypes, DialogsPageType, RootStateType} from '../../types/entities';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { compose } from 'redux';


type MapStatePropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchPropsType = {
    onNewMessageChange: (body: string) => void
    onSendMessageClick: () => void
}


const mapStateToProps = (state: RootStateType):MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        onNewMessageChange: (body: string) => {dispatch(updateNewMessageBodyCreator(body))},
        onSendMessageClick: () => {dispatch(sendMessageCreator())}
    }
}

export default compose<React.ComponentType>(
    connect<MapStatePropsType,MapDispatchPropsType, {} , RootStateType>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);