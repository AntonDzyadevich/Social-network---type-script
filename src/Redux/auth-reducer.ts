import {ActionsTypes} from "../types/entities";


const SET_USER_DATA = 'SET-USER-DATA';



export type AuthType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}


const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}


const authReducer = (state: AuthType = initialState, action: ActionsTypes):AuthType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state;
    }

}


export const setAuthUserData = (userId: number, email: string, login: string) => ({type: SET_USER_DATA,
    data: {userId, email, login}}) as const;




export default authReducer;