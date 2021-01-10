import {addPostAC, updateNewPostTextAC, setUserProfileAC} from "../Redux/profile-reducer";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../Redux/dialogs-reducer";
import {
    follow,
    setCurrentPage,
    setUsers,
    setTotalUsersCount, toggleIsFetching,
    unFollow,
    UsersPageType
} from "../Redux/users-reducer";
import {setAuthUserData, AuthType} from "../Redux/auth-reducer";




export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    profile: ProfileType | null
}

export type ProfileType = {
    aboutMe: string | null,
    contacts: {
        facebook: string | null,
        website: string | null,
        vk: string | null,
        twitter: string | null,
        instagram: string | null,
        youtube: string | null,
        github: string | null,
        mainLink: string | null,
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: null | string,
    fullName: string,
    userId: number,
    photos: {
        small: string | undefined,
        large: string | undefined,
    }
}



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
    newMessageBody: string
}

export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
    usersPage: UsersPageType
    auth: AuthType
}

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof updateNewMessageBodyCreator> | ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof follow> | ReturnType<typeof unFollow> | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage> | ReturnType<typeof  setTotalUsersCount> | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfileAC> | ReturnType<typeof setAuthUserData>


// export type StoreType = {
//     _state: RootStateType
//     _onChange: (state: RootStateType) =>  void
//     subscribe: (observer: (state: RootStateType) => void) => void
//     getState: () => RootStateType
//     dispatch: (action: ActionsTypes) => void
// }
