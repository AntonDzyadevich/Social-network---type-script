import React from 'react';
import './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileType } from '../../Redux/profile-reducer';



export type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file:any) => void
}

const Profile: React.FC<ProfilePropsType> = ({profile, status,updateStatus,isOwner, savePhoto}) => {

    return <div>
        < ProfileInfo isOwner={isOwner} profile={profile} status={status} updateStatus={updateStatus} savePhoto={savePhoto}/>
        < MyPostsContainer />
    </div>
}

export default Profile;