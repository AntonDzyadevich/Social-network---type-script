import React from 'react';
import './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../types/entities";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile: React.FC = () => {

    return <div>
        < ProfileInfo/>
        < MyPostsContainer />
    </div>
}

export default Profile;