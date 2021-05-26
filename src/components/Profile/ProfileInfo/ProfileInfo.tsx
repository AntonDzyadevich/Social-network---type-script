import React, { ChangeEvent } from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import {ProfilePropsType} from "../Profile";
import userPhoto from "../../../assets/images/Anton.jpg";
import ProfileStatusWithHook from "../ProfileStatusWithHook";


const ProfileInfo: React.FC<ProfilePropsType> = ({profile, status, updateStatus,isOwner,savePhoto}) => {
    if (!profile) {
        return < Preloader/>
    }
    const photo = profile.photos.large || userPhoto;

    const mainPhotoSelected = (e:ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files.length) {
           savePhoto(e.target.files[0])
        }
    }

    return <div>
        <div className={s.descriptionBlock}>
            <img src={photo}/>
            {isOwner && <input onChange={mainPhotoSelected} type={"file"}/>}
            < ProfileStatusWithHook status={status} updateStatus={updateStatus}/>
        </div>
    </div>
}

export default ProfileInfo;