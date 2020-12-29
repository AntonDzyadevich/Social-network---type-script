import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import {ProfilePropsType} from "../Profile";
import defaultAvatar from "../../../assets/images/defaultAvatar.gif"





const ProfileInfo: React.FC<ProfilePropsType> = ({profile}) => {
    if (!profile) {
       return < Preloader/>
    }
    const photo = profile.photos.small ? profile.photos.large : defaultAvatar;

    return <div>
        <div className={s.item}>
            <img src="https://www.comicbookraw.com/wp-content/uploads/2019/05/avengers-endgame-uhdpaper.com-8K-94.jpg"/>
        </div>
        <div className={s.descriptionBlock}>
            <img src = { photo } />
            ava+description
        </div>
    </div>
}

export default ProfileInfo ;