import React from 'react';
import './Profile.module.css';
import MyPosts  from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../Redux/state";



const Profile: React.FC<{profilePage: ProfilePageType, dispatch: (action: ActionsTypes) => void}> =
    (props) => {

    return <div>
        < ProfileInfo/>
        < MyPosts posts ={props.profilePage.posts}
                  newPostText = {props.profilePage.newPostText}
                  dispatch = {props.dispatch}

        />
    </div>
}

export default Profile;