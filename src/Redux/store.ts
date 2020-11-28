import profileReducer, {addPostAC, updateNewPostTextAC} from "./profile-reducer";
import dialogsReducer, {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string

}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}

export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC> | ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof sendMessageCreator>

export type StoreType = {
    _state: RootStateType
    _onChange: (state: RootStateType) =>  void
    subscribe: (observer: (state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}


const store: StoreType = {
    _state: {
        profilePage: {
            newPostText: "",
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It`s my first post", likesCount: 40},
            ],
        },
        dialogsPage: {
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

        },
        sidebar: {}
    },
    _onChange() {
        console.log("State changed")
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._onChange = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._onChange(this._state);
    }
}

export default store;