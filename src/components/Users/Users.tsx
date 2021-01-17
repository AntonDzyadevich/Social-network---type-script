import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/Anton.jpg";
import {UsersType} from "../../Redux/users-reducer";
import { NavLink } from 'react-router-dom';
import axios from "axios";

export type UsersPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
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
                                             toggleIsFollowingProgress,
                                            followingInProgress
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
                        {u.followed
                            ? <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                                toggleIsFollowingProgress(true, u.id)
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "2e8dfc3a-ddd8-4664-a36b-eb1d4d5042e7"
                                        }
                                    })
                                    .then(response => {
                                        if (response.data.resultCode === 0){
                                            unfollow(u.id)
                                        }
                                        toggleIsFollowingProgress(false, u.id)
                                    });

                            }}>Unfollow</button>

                            : <button  disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                                toggleIsFollowingProgress(true, u.id)
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                    {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "2e8dfc3a-ddd8-4664-a36b-eb1d4d5042e7"
                                        }
                                    })
                                    .then(response => {
                                        if (response.data.resultCode === 0){
                                            follow(u.id)
                                        }
                                        toggleIsFollowingProgress(false, u.id)
                                });


                            }}>Follow</button>}
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