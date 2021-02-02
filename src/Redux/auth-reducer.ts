import {ActionsTypes} from "../types/entities";
import {authAPI} from "../api/api";
import {DispatchType} from "./users-reducer";


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

// thunk creator
export const getAuthUserData = () => (dispatch: DispatchType) => {
    authAPI.me()
        .then(response => {
            if(response.data.resultCode === 0) {
                const {id,email,login} = response.data.data
                dispatch (setAuthUserData(id, email, login))
            }
        });
};


export default authReducer;