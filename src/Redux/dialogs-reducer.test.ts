import {DialogsPageType} from "../types/entities";
import dialogsReducer, {sendMessageCreator} from "./dialogs-reducer";




test('correct message should be added from correct array', () => {
    const startState: DialogsPageType = {
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
    };

    const action = sendMessageCreator();

    const endState = dialogsReducer(startState, action)

    expect(endState).toEqual({
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
            {id: 6, message: "Hello"},
            {id: 7, message: "Hey hi"}
        ],
        newMessageBody: ""
    });
});