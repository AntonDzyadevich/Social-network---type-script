import React from 'react';
import {connect} from "react-redux";
import {RootStateType} from "../../types/entities";
import {
    follow,
    setCurrentPage,
    setUsers,
    setTotalUsersCount,
    toggleIsFetching,
    unFollow, UsersType
} from '../../Redux/users-reducer';
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { userAPI } from '../../api/api';



type MapStatePropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean

}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) =>void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount:(totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export type UsersContainerPropsType = MapStatePropsType & MapDispatchPropsType



class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)

        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount)
        });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
        //     {
        //     withCredentials: true
        // })
        userAPI.getUsers(pageNumber, this.props.pageSize).then(data=> {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            });
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
                    unfollow={this.props.unFollow}
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
        isFetching: state.usersPage.isFetching
    }
}


export default connect<MapStatePropsType,MapDispatchPropsType, {} , RootStateType>(mapStateToProps, {follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})
(UsersContainer);

