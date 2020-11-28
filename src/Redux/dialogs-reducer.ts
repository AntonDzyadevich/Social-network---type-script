import {ActionsTypes, DialogsPageType} from "../types/entities";


const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE'


const initialState = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Anton"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Alex"},
        {id: 5, name: "Nikolai"},
        {id: 6, name: "Valery"}
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Hello, no problem"},
        {id: 3, message: "Hi, how are you?"},
        {id: 4, message: "Hi"},
        {id: 5, message: "Hi, how are you?"},
        {id: 6, message: "Hello"}
    ],
    newMessageBody: ""
}

 const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes): DialogsPageType => {

     switch (action.type) {
         case UPDATE_NEW_MESSAGE_BODY:
             state.newMessageBody = action.body;
             return state;
         case SEND_MESSAGE:
             let body = state.newMessageBody;
             state.newMessageBody = "";
             state.messages.push({id: 6, message: body});
             return state;
         default:
             return state;
     }
 }

export const sendMessageCreator = () => ({type: SEND_MESSAGE}) as const;

export const updateNewMessageBodyCreator = (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body}) as const;




export default dialogsReducer;