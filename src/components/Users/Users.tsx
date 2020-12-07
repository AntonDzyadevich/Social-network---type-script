import React from 'react';
import {UsersType} from "../../types/entities";
import s from "./Users.module.css"


const Users: React.FC<{ follow: (userId: number) => void,
                        unfollow: (userId: number) =>void,
                        setUsers: (users: Array<UsersType>) => void,
                        users: Array<UsersType>}> =( props)  => {

    if(props.users.length === 0){
        props.setUsers([
            {id: 1, photoUrl: "https://i.pinimg.com/736x/78/a4/f0/78a4f0ce672a91e4cf8c9663cbab5069.jpg", followed: false, fullName: "Anton", status: "SUPERman!!!", location:{city: "Vitebsk", country: "Belarus"}},
            {id: 2, photoUrl: "https://i.pinimg.com/736x/78/a4/f0/78a4f0ce672a91e4cf8c9663cbab5069.jpg", followed: true, fullName: "Dimych", status: "I am boss!!!", location:{city: "Minsk", country: "Belarus"}},
            {id: 3, photoUrl: "https://i.pinimg.com/736x/78/a4/f0/78a4f0ce672a91e4cf8c9663cbab5069.jpg", followed: false, fullName: "Natalya", status: "Good day!", location:{city: "Kiev", country: "Ukraine"}},
            {id: 4, photoUrl: "https://i.pinimg.com/736x/78/a4/f0/78a4f0ce672a91e4cf8c9663cbab5069.jpg", followed: true, fullName: "Kolya", status: "I am boss too!!!", location:{city: "Moscow", country: "Russia"}}
        ]
        )
    }


    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div className={s.photo}>
                        <img src={u.photoUrl}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> :
                            <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)

        }
    </div>
}

export default Users;