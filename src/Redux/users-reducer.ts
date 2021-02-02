import {ActionsTypes, RootStateType} from "../types/entities";
import {userAPI} from "../api/api";
import {Dispatch} from "redux";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';


export type UsersType = {
    name: string
    id: number
    photos: { small: string, large: string }
    status: string
    followed: boolean
}

export type UsersPageType = {
    users: Array<UsersType>
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: true,
    followingInProgress: []
}


const usersReducer = (state: UsersPageType = initialState, action: ActionsTypes):UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return  {
                ...state,
                // users: [...state, users],
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u;
                }),

            }
        case UNFOLLOW:
            return {
                ...state,
                // users: [...state, users],
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return{
                ...state,
                users:  action.users
            }
            case SET_CURRENT_PAGE:
            return{
                ...state, currentPage: action.currentPage
            }
            case  SET_TOTAL_USERS_COUNT:
            return{
                ...state, totalUsersCount: action.count
            }
            case  TOGGLE_IS_FETCHING:
            return{
                ...state, isFetching: action.isFetching
            }
            case  TOGGLE_IS_FOLLOWING_PROGRESS:
            return{
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }

        default:
            return state;
    }

}


export const followSuccess = (userId: number) => ({type: FOLLOW, userId}) as const;
export const unfollowSuccess = (userId: number) => ({type: UNFOLLOW, userId})  as const;
export const setUsers = (users: Array<UsersType>) => ({type: SET_USERS, users})  as const;
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})  as const
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})  as const;
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching})  as const;
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})  as const;

type GetStateType = () => RootStateType
export type DispatchType = Dispatch<ActionsTypes>

//thunk-creators
export const getUsers = (currentPage: number, pageSize: number ) => {
    return (dispatch: DispatchType, getState: GetStateType) => {
        dispatch(toggleIsFetching(true))
        userAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));

        });
    }
}

export const follow = (userId: number) => {
    return (dispatch: DispatchType, getState: GetStateType) => {
        dispatch(toggleIsFollowingProgress(true, userId));

        userAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0){
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId))
            });

    }
}

export const unfollow = (userId: number) => {
    return (dispatch: DispatchType, getState: GetStateType) => {
        dispatch(toggleIsFollowingProgress(true, userId))

        userAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0){
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId))
            });
    }
}




export default usersReducer;



