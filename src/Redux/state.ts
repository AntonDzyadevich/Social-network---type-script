// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
// const SEND_MESSAGE = 'SEND-MESSAGE'


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


// export type AddPostActionType = {
//     type:  'ADD-POST'
//     postMessage: string
// }
// export type AddPostActionType = ReturnType<typeof addPostAC>
//
// export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>

// export type  UpdateNewPostTextActionType = {
//     type: 'UPDATE-NEW-POST-TEXT'
//     newText: string
// }


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
        if (action.type === 'ADD-POST') {
            let newPost: PostsType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._onChange(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._onChange(this._state);
        } else if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
            this._state.dialogsPage.newMessageBody = action.body;
            this._onChange(this._state);
        } else if (action.type === "SEND-MESSAGE") {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = "";
            this._state.dialogsPage.messages.push({id: 6, message: body});
            this._onChange(this._state);
        }
    }
}

export const addPostAC = (newPostText: string) => ({type: "ADD-POST", postMessage: newPostText}) as const;

export const updateNewPostTextAC = (newText: string ) => ({type: 'UPDATE-NEW-POST-TEXT', newText: newText})  as const;

export const sendMessageCreator = () => ({type: "SEND-MESSAGE"}) as const;

export const updateNewMessageBodyCreator = (body: string) => ({type: "UPDATE-NEW-MESSAGE-BODY", body: body}) as const;




export default store;