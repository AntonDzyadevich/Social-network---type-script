import {ActionsTypes, UsersPageType, UsersType} from "../types/entities";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';




const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: true
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

        default:
            return state;
    }

}


export const followAC = (userId: number) => ({type: FOLLOW, userId}) as const;
export const unFollowAC = (userId: number) => ({type: UNFOLLOW, userId})  as const;
export const setUsersAC = (users: Array<UsersType>) => ({type: SET_USERS, users})  as const;
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})  as const
export const setUsersTotalCountAC = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})  as const;
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching})  as const;



export default usersReducer;



