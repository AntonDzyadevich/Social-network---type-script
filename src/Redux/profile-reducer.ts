import {ProfileApi, userAPI} from "../api/api";
import {ActionsTypes} from "../types/entities";
import {Dispatch} from "redux";


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';


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

type DispatchType = Dispatch<ActionsTypes>


const initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It`s my first post", likesCount: 40},
    ],
    profile: null,
    status: ""
}


const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
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

        default:
            return state;
    }

}




export const addPostAC = (newPostText: string) => ({type: ADD_POST, newPostText}) as const;

export const setUserProfileAC = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile}) as const;

export const setStatusAC = (status: string)  => ({type: SET_STATUS, status}) as const;




// thunk creator
export const getUserProfile = (userId: string) => (dispatch: DispatchType) => {
    userAPI.getProfile (userId).then(response => {
        dispatch(setUserProfileAC(response.data))
    });
}

export const getStatus = (userId: string) => (dispatch: DispatchType) => {
    ProfileApi.getStatus (userId).then(response => {
        dispatch(setStatusAC(response.data))
    });
}

export const updateStatus = (status: string) => (dispatch: DispatchType) => {
    ProfileApi.updateStatus (status).then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setStatusAC(status))
        }

    });
}



export default profileReducer;



