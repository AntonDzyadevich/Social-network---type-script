import React from 'react';
import './Profile.module.css';
import Profile from './Profile';
import { RootStateType} from "../../types/entities";
import {connect} from "react-redux";
import {getStatus, getUserProfile, ProfileType, updateStatus} from "../../Redux/profile-reducer";
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { compose } from 'redux';


type MapStatePropsType = {
    profile: ProfileType | null
    status: string
}

type MapDispatchPropsType = {
    getUserProfile:(userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}


type PathParamsType = {
    userId:  string
}



type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType;
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType


class ProfileContainer extends React.Component<PropsType>{

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = '13173';
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {

        return (
            <Profile {...this.props} profile={ this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}


const mapStateToProps = (state:RootStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose<React.ComponentType>(
    connect<MapStatePropsType,MapDispatchPropsType, {} , RootStateType>(mapStateToProps,
        {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect,
) (ProfileContainer)