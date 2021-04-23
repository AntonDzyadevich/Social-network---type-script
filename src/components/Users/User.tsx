import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/Anton.jpg";
import {NavLink} from 'react-router-dom';


export type PhotosType = {
    small: string | null
    large: string | null
}

export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}

export type UserPropsType = {
    user: UserType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<number>
}

const User: React.FC<UserPropsType> = ({
                                           user,
                                           followingInProgress,
                                           unfollow,
                                           follow
                                       }) => {

    return <div>
                <span>
                    <div className={s.photo}>
                       <NavLink to={'profile/' + user.id}> <img
                           src={user.photos.small !== null ? user.photos.small : userPhoto}/></NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress
                                .some(id => id === user.id)}
                                      onClick={() => {
                                          unfollow(user.id)
                                      }}>Unfollow
                            </button>

                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          follow(user.id)
                                      }}>Follow
                            </button>
                        }
                    </div>
                </span>
        <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </span>
                </span>

    </div>
}

export default User;