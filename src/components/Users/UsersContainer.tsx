import React from 'react';
import {connect} from "react-redux";

import {
    UsersType,
    requestUsers, follow, unfollow} from '../../Redux/users-reducer';
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { compose } from 'redux';
import {
    getCurrentPage,
    getFollowingInProgress, getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers,
} from '../../Redux/users-selector';
import {RootStateType} from "../../Redux/redux-store";



type MapStatePropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) =>void
    getUsers:(currentPage: number, pageSize: number) => void
}

export type UsersContainerPropsType = MapStatePropsType & MapDispatchPropsType;


class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize);
    }

    render() {
        return <>
           <div>
                { this.props.isFetching ?  < Preloader /> : null}
            </div>

            < Users totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


const mapStateToProps = (state: RootStateType):MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, RootStateType>(mapStateToProps, {
        follow, unfollow , getUsers: requestUsers })
) (UsersContainer)