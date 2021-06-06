import React from 'react';
import './Profile.module.css';

import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileType } from '../../Redux/profile-reducer';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';



export type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file:any) => void
    saveProfile: (formData: any) => void
}

const Profile: React.FC<ProfilePropsType> = ({profile, status,updateStatus,isOwner, savePhoto, saveProfile}) => {

    return <div>
        < ProfileInfo isOwner={isOwner}
                      profile={profile}
                      status={status}
                      updateStatus={updateStatus}
                      savePhoto={savePhoto}
                      saveProfile={saveProfile}/>
        < MyPostsContainer />
    </div>
}

export default Profile;