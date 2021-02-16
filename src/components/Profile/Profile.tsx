import React from 'react';
import './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileType } from '../../Redux/profile-reducer';



export type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

const Profile: React.FC<ProfilePropsType> = ({profile, status,updateStatus}) => {

    return <div>
        < ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
        < MyPostsContainer />
    </div>
}

export default Profile;