import {createStore, combineReducers, applyMiddleware, Action} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from "redux-form";


const reducers = combineReducers({
    profilePage:  profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

type ReducersType = typeof reducers;
export type RootStateType = ReturnType<ReducersType>

export type BaseThunkType<A extends Action,R = Promise<void>> =  ThunkAction<R, RootStateType, unknown, A>


const store = createStore(reducers, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store

export default store;
