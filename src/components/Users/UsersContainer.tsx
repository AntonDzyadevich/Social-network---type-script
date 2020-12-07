import React from 'react';
import {connect} from "react-redux";
import {ActionsTypes, RootStateType, UsersType} from "../../types/entities";
import Users from "./Users";
import {followAC, setUsersAC, unFollowAC} from '../../Redux/users-reducer';


const mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;