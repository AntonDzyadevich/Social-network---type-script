import {authAPI, securityAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";
import {BaseThunkType, InferActionsTypes, RootStateType} from "./redux-store";



const initialState = {
    userId: null as (number | null),
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null //if null, then captcha is not required
};




const authReducer = (state
                         = initialState, action: ActionsType): InitialStateType=> {
    switch (action.type) {
        case 'SN/auth/SET_USER_DATA':
        case 'SN/auth/GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }

}


export const actions = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: 'SN/auth/SET_USER_DATA', payload: {userId, email, login, isAuth}
    } as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({
        type: 'SN/auth/GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}
    } as const)
}

type GetStateType = () => RootStateType
type DispatchType = Dispatch<ActionsType>

// thunk creator

export const getAuthUserData = () => async (dispatch: DispatchType) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(actions.setAuthUserData(id, email, login, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType =>
    async (dispatch) => {
    let response= await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    }else{
            if(response.data.resultCode === 10){
                dispatch(getCaptchaUrl())
            }
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
            dispatch(stopSubmit("login", {_error: message}));
        }
    }


export const getCaptchaUrl = (): ThunkType =>
    async (dispatch) => {
        const response = await securityAPI.getCaptchaUrl();
        const captchaUrl = response.data.url
        dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
    }



export const logout = (): ThunkType=> async (dispatch:DispatchType) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(actions.setAuthUserData(null, null, null, false))
    }
};

export default authReducer;

type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>
type InitialStateType = typeof initialState;