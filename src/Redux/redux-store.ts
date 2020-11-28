import {createStore, combineReducers} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import { StoreType } from "../types/entities";


const reducers = combineReducers({
    profilePage:  profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

const store:StoreType = createStore(reducers);





export default store;
