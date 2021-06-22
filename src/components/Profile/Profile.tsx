import React from 'react';
import './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileType } from '../../Redux/profile-reducer';
import ProfileInfo from "./ProfileInfo/ProfileInfo";



type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file:any) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

const Profile:React.FC<PropsType> = (props) => {

    return <div>
        < ProfileInfo isOwner={props.isOwner}
                      profile={props.profile}
                      status={props.status}
                      updateStatus={props.updateStatus}
                      savePhoto={props.savePhoto}
                      saveProfile={props.saveProfile}/>
        < MyPostsContainer />
    </div>
}

export default Profile;