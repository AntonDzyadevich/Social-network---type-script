import {ActionsTypes, DialogsPageType} from "../types/entities";


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

}

 const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes): DialogsPageType => {
     switch (action.type) {
         case SEND_MESSAGE:
             let body = action.newMessageBody;
             return  {
                 ...state,
                 messages: [...state.messages, {id: 7, message: body}]
             };
         default:
             return state;
     }
 }

export const sendMessageCreator = (newMessageBody: string) => ({type: SEND_MESSAGE, newMessageBody}) as const;





export default dialogsReducer;