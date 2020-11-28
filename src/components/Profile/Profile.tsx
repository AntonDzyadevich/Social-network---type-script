import React from 'react';
import './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../types/entities";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile: React.FC<{store: StoreType}> =
    (props) => {

    return <div>
        < ProfileInfo/>
        < MyPostsContainer store={props.store} />
    </div>
}

export default Profile;