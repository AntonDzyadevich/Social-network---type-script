import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/Anton.jpg";
import {UsersType} from "../../types/entities";
import { NavLink } from 'react-router-dom';

export type UsersPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
}

const Users: React.FC<UsersPropsType> = ({
                                            users,
                                            pageSize,
                                            totalUsersCount,
                                            currentPage,
                                            follow,
                                            unfollow,
                                            onPageChanged
                                        }) => {

    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];
    for(let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return <div>
        <div>
            {pages.map(p => {
                return   <span  className = { currentPage === p ? s.selectedPage : " " }
                               onClick={ (e) => { onPageChanged(p)} }>{p}</span>
            })}

        </div>
        {
            users.map(u => <div key={u.id}>
                <span>
                    <div className={s.photo}>
                       <NavLink to={'profile' + u.id}> <img src={u.photos.small !== null ? u.photos.small : userPhoto}/></NavLink>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {unfollow(u.id)}}>Unfollow</button> :
                            <button onClick={() => {follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)

        }
    </div>
}

export default Users;