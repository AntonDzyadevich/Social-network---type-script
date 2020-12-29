import React from 'react';
import './Profile.module.css';
import Profile from './Profile';
import axios from "axios";
import {ProfileType, RootStateType} from "../../types/entities";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../Redux/profile-reducer";


type MapStatePropsType = {
    profile: ProfileType | null
}

type MapDispatchPropsType = {
    setUserProfileAC:(profile: ProfileType) => void

}
export type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType;



class ProfileContainer extends React.Component<ProfileContainerPropsType>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/8040`)
        .then(response => {
            this.props.setUserProfileAC(response.data);
            
        });
    }


    render() {
        return (
            <Profile {...this.props} profile={ this.props.profile}/>
        )
    }
}

const mapStateToProps = (state:RootStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }

}


export default connect<MapStatePropsType,MapDispatchPropsType, {} , RootStateType>(mapStateToProps, {setUserProfileAC}) (ProfileContainer);