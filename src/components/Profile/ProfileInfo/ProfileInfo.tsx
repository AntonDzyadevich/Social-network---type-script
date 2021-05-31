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

            <div>
                <b>Full name</b>: {profile.fullName}
            </div>

             <div>
                 <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
             </div>
            {profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>:{profile.lookingForAJobDescription}
            </div>
            }
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                   return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]}/>
            })}
            </div>
            < ProfileStatusWithHook status={status} updateStatus={updateStatus}/>
        </div>
    </div>
}
type ContactsPropsType = {
    contactTitle: string
    contactValue: string | null
}

 type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

const Contact: React.FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
    return  <div className={s.contact}><b>{contactTitle}</b>:{contactValue}</div>
}


export default ProfileInfo;