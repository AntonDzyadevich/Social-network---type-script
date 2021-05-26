import {ProfileApi, userAPI} from "../api/api";
import {Dispatch} from "redux";


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';



export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostsType>
    profile: ProfileType | null
    status: string
}

export type PhotosType = {
    small: string | null
    large: string | null
}

export type ContactsType = {
    facebook: string | null,
    website: string | null,
    vk: string | null,
    twitter: string | null,
    instagram: string | null,
    youtube: string | null,
    github: string | null,
    mainLink: string | null,
}

export type ProfileType = {
    lookingForAJob: boolean,
    lookingForAJobDescription: null | string,
    fullName: string,
    userId: number,
    contacts: ContactsType,
    photos: PhotosType,
    aboutMe: string | null
}


// export type ProfileType = {
//     aboutMe: string | null,
//     contacts: {
//         facebook: string | null,
//         website: string | null,
//         vk: string | null,
//         twitter: string | null,
//         instagram: string | null,
//         youtube: string | null,
//         github: string | null,
//         mainLink: string | null,
//     },
//     lookingForAJob: boolean,
//     lookingForAJobDescription: null | string,
//     fullName: string,
//     userId: number,
//     photos: {
//         small: string | undefined,
//         large: string | undefined,
//     }
// }

type DispatchType = Dispatch<ActionsTypes>
export type InitialStateType = typeof initialState

const initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It`s my first post", likesCount: 40},
    ] as Array<PostsType>,
    profile: null as ProfileType | null,
    status: "",
}


type ActionsTypes = ReturnType<typeof setStatusAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof savePhotoSuccess>


const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes):  InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostsType = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],

            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            }
        default:
            return state;
    }

}


export const addPostAC = (newPostText: string) => ({type: ADD_POST, newPostText}) as const;

export const setUserProfileAC = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile}) as const;

export const setStatusAC = (status: string) => ({type: SET_STATUS, status}) as const;

export const deletePost = (postId: number) => ({type: DELETE_POST, postId}) as const;

export const savePhotoSuccess = (photos: any) => ({type: SAVE_PHOTO_SUCCESS, photos}) as const;


// thunk creator
export const getUserProfile = (userId: string) => async (dispatch: DispatchType) => {
    let response = await userAPI.getProfile(userId)
    dispatch(setUserProfileAC(response.data))
}

export const getStatus = (userId: string) => async (dispatch: DispatchType) => {
    let response = await ProfileApi.getStatus(userId)
    dispatch(setStatusAC(response.data))
}

export const updateStatus = (status: string) => async (dispatch: DispatchType) => {
    let response = await ProfileApi.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatusAC(status))
    }
}
export const savePhoto = (file: any) => async (dispatch: DispatchType) => {
    let response = await ProfileApi.updateStatus(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export default profileReducer;



