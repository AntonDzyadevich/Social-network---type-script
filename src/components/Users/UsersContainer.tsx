import React from 'react';
import {connect} from "react-redux";
import {RootStateType} from "../../types/entities";
import {
    UsersType,
    getUsers, follow, unfollow} from '../../Redux/users-reducer';
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";




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
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default connect<MapStatePropsType, MapDispatchPropsType, {}, RootStateType>(mapStateToProps, {
   follow, unfollow , getUsers }) (UsersContainer);

