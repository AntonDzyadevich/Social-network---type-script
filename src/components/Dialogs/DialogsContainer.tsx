import React from 'react';
import {sendMessageCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ActionsTypes, DialogsPageType, RootStateType} from '../../types/entities';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { compose } from 'redux';


type MapStatePropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchPropsType = {
    onSendMessageClick: (newMessageBody: string) => void
}


const mapStateToProps = (state: RootStateType):MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        onSendMessageClick: (newMessageBody: string) => {dispatch(sendMessageCreator(newMessageBody))}
    }
}

export default compose<React.ComponentType>(
    connect<MapStatePropsType,MapDispatchPropsType, {} , RootStateType>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);