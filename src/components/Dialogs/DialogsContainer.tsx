import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ActionsTypes, RootStateType} from '../../types/entities';



// const DialogsContainer: React.FC = () => {
//     return <StoreContext.Consumer>
//         { (store) => {
//
//             let onSendMessageClick = () => {
//                 store.dispatch(sendMessageCreator())}
//
//             let onNewMessageChange = (body: string) => {
//                 store.dispatch(updateNewMessageBodyCreator(body))}
//
//             return < Dialogs onNewMessageChange={onNewMessageChange}
//                              onSendMessageClick={onSendMessageClick}
//                              dialogsPage={store.getState().dialogsPage}/>
//             }
//         }
//     </StoreContext.Consumer>
//
// }

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