import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";
import {RootStateType} from "./redux-store";
import {ThunkAction} from "redux-thunk";


export type AppType = {
    initialized: boolean
}


const initialState = {
   initialized: false
}
// type InitialState = typeof initialState;


export const appReducer = (state= initialState, action: ActionsTypes):  AppType => {
    switch (action.type) {
        case 'INITIALIZED-SUCCESS':
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }

}



type ActionsTypes =  ReturnType<typeof initializedSuccess>

//action creators
export const initializedSuccess= () => ({type: 'INITIALIZED-SUCCESS'} as const)



type DispatchType = Dispatch<ActionsTypes>
type GetStateType = () => RootStateType


// thunk creator
export const initializeApp = (): ThunkAction<void, RootStateType,
    unknown, ActionsTypes> => (dispatch, getState: GetStateType) => {
    const promise = dispatch(getAuthUserData());

   Promise.all([promise])
       .then(() => {
        dispatch(initializedSuccess())
    })
};


export default appReducer;