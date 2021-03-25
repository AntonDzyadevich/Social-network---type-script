import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {BaseThunkType} from "./redux-store";


export type AuthType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}


const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}


type DispatchType = Dispatch<ActionsTypes>

type ActionsTypes =  ReturnType<typeof setAuthUserData>
type ThunkType = BaseThunkType<ActionsTypes>



const authReducer = (state: AuthType = initialState, action: ActionsTypes):AuthType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }

}

//action creators

export const setAuthUserData = (userId: number  | null, email: string | null, login: string | null, isAuth: boolean) => ({type: 'SET-USER-DATA',
    payload: {userId, email, login, isAuth}} as const)





// thunk creator
export const getAuthUserData = () => (dispatch: DispatchType)=> {
    authAPI.me()
        .then(response => {
            if(response.data.resultCode === 0) {
                const {id,email,login, isAuth} = response.data.data
                dispatch (setAuthUserData(id, email, login, true))
            }
        });
};
export const login = (email: string , password: string, rememberMe: boolean) => (dispatch: any) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        });
};

export const logout= () => (dispatch: DispatchType) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch (setAuthUserData(null, null, null, false))
            }
        });
};

export default authReducer;