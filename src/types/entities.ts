import {addPostAC, updateNewPostTextAC} from "../Redux/profile-reducer";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../Redux/dialogs-reducer";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC, toggleIsFetchingAC,
    unFollowAC
} from "../Redux/users-reducer";


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


export type UsersType = {
    name: string
    id: number
    photos: { small: string, large: string }
    status: string
    followed: boolean
}

export type UsersPageType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}



export type UsersPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) =>void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount:(totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

export type GetUsersResponseType= {
    items: Array<UsersType>
    totalCount: number
    error: string | null
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
    usersPage: UsersPageType
}

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof updateNewMessageBodyCreator> | ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof followAC> | ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC> | ReturnType<typeof setUsersTotalCountAC> | ReturnType<typeof toggleIsFetchingAC>


export type StoreType = {
    _state: RootStateType
    _onChange: (state: RootStateType) =>  void
    subscribe: (observer: (state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}
