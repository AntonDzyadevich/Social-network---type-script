import {addPostAC, updateNewPostTextAC} from "../Redux/profile-reducer";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../Redux/dialogs-reducer";
import {followAC, setUsersAC, unFollowAC} from "../Redux/users-reducer";


export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type LocationType ={
    city: string
    country: string
}

export type UsersType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}

export type SidebarType = {}

export type UsersPageType = {
    users: Array<UsersType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
    usersPage: UsersPageType
}

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC> | ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof sendMessageCreator> | ReturnType<typeof followAC> | ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>


export type StoreType = {
    _state: RootStateType
    _onChange: (state: RootStateType) =>  void
    subscribe: (observer: (state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}
