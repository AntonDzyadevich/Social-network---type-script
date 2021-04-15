import {RootStateType} from "../types/entities";
import {userAPI} from "../api/api";
import {Dispatch} from "redux";


// const FOLLOW = 'FOLLOW';
// const UNFOLLOW = 'UNFOLLOW';
// const SET_USERS = 'SET-USERS';
// const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
// const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
// const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
// const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';


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
        case 'FOLLOW':
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
        case 'UNFOLLOW':
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
        case 'SET-USERS':
            return{
                ...state,
                users:  action.users
            }
            case 'SET-CURRENT-PAGE':
            return{
                ...state, currentPage: action.currentPage
            }
            case  'SET-TOTAL-USERS-COUNT':
            return{
                ...state, totalUsersCount: action.count
            }
            case  'TOGGLE-IS-FETCHING':
            return{
                ...state, isFetching: action.isFetching
            }
            case  'TOGGLE-IS-FOLLOWING-PROGRESS':
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

type GetStateType = () => RootStateType
type DispatchType = Dispatch<ActionsTypes>



export type ActionsTypes = | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof  setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleIsFollowingProgress>



export const followSuccess = (userId: number) => ({type: 'FOLLOW', userId} as const);
export const unfollowSuccess = (userId: number) => ({type: 'UNFOLLOW', userId} as const);
export const setUsers = (users: Array<UsersType>) => ({type: 'SET-USERS', users} as const);
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage}as const);
export const setTotalUsersCount = (totalUsersCount: number) => ({type: 'SET-TOTAL-USERS-COUNT', count: totalUsersCount}as const)  ;
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const);
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => ({type: 'TOGGLE-IS-FOLLOWING-PROGRESS', isFetching, userId}as const);



//thunk-creators
export const requestUsers = (page: number, pageSize: number ) => {
    return (dispatch: DispatchType, getState: GetStateType) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))
        userAPI.getUsers(page, pageSize).then(data => {
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



