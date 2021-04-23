import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import {ProfilePropsType} from "../Profile";
import defaultAvatar from "../../../assets/images/defaultAvatar.gif"
import ProfileStatusWithHook from "../ProfileStatusWithHook";


const ProfileInfo: React.FC<ProfilePropsType> = ({profile, status, updateStatus}) => {
    if (!profile) {
        return < Preloader/>
    }
    const photo = profile.photos.small ? profile.photos.large : defaultAvatar;

    return <div>
        <div className={s.descriptionBlock}>
            <img src={photo}/>
            < ProfileStatusWithHook status={status} updateStatus={updateStatus}/>
        </div>
    </div>
}

export default ProfileInfo;