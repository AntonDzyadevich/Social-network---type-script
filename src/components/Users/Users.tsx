import React from 'react';
import {UsersType} from "../../Redux/users-reducer";
import Paginator from '../common/Paginator/Paginator';
import User from './User';


export type UsersPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<number>
}

const Users: React.FC<UsersPropsType> = ({
                                             users,
                                             pageSize,
                                             totalUsersCount,
                                             currentPage,
                                             follow,
                                             unfollow,
                                             onPageChanged,
                                             followingInProgress
                                         }) => {

    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalUsersCount={totalUsersCount} pageSize={pageSize}/>

        <div>
            {
                users.map(u => <User user={u}
                                     followingInProgress={followingInProgress}
                                     key={u.id}
                                     unfollow={unfollow}
                                     follow={follow}

                />)
            }
        </div>
    </div>
}

export default Users;