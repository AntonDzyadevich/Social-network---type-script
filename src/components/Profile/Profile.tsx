import React from 'react';
import './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../types/entities";


export type ProfilePropsType = {
    profile: ProfileType | null
}

const Profile: React.FC<ProfilePropsType> = ({profile}) => {

    return <div>
        < ProfileInfo profile={profile} />
        < MyPostsContainer />
    </div>
}

export default Profile;