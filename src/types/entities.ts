import {sendMessageCreator} from "../Redux/dialogs-reducer";
import {
    followSuccess,
    setCurrentPage,
    setUsers,
    setTotalUsersCount, toggleIsFetching,
    unfollowSuccess,
    UsersPageType,
    toggleIsFollowingProgress
} from "../Redux/users-reducer";
import {AuthType, setAuthUserData} from "../Redux/auth-reducer";
import {addPostAC, ProfilePageType, setStatusAC, setUserProfileAC} from "../Redux/profile-reducer";




export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}


export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>

}

export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
    usersPage: UsersPageType
    auth: AuthType
}

export type ActionsTypes =
    ReturnType<typeof setStatusAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof sendMessageCreator>
    // | ReturnType<typeof followSuccess>
    // | ReturnType<typeof unfollowSuccess>
    // | ReturnType<typeof setUsers>
    // | ReturnType<typeof setCurrentPage>
    // | ReturnType<typeof  setTotalUsersCount>
    // | ReturnType<typeof toggleIsFetching>
    // | ReturnType<typeof toggleIsFollowingProgress>
    // | ReturnType<typeof setAuthUserData>

// export type StoreType = {
//     _state: RootStateType
//     _onChange: (state: RootStateType) =>  void
//     subscribe: (observer: (state: RootStateType) => void) => void
//     getState: () => RootStateType
//     dispatch: (action: ActionsTypes) => void
// }
