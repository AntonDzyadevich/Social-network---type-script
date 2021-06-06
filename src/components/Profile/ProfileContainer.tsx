import React from 'react';
import './Profile.module.css';
import Profile from './Profile';
import {RootStateType} from "../../types/entities";
import {connect} from "react-redux";
import {
    getStatus,
    getUserProfile,
    ProfileType,
    savePhoto,
    saveProfile,
    updateStatus
} from "../../Redux/profile-reducer";
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {compose} from 'redux';


type MapStatePropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (file:any) => void
}


type PathParamsType = {
    userId: string
}


type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType;
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType


class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId: number | null = +this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        if (!userId) {
            console.error("ID should exist in URI params or in state('authorizedUzerId ')")
        } else {
            this.props.getUserProfile(userId)
            this.props.getStatus(userId)
        }


    }


    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if(this.props.match.params.userId != prevProps.match.params.userId)
        this.refreshProfile()
    }


    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}
                     isOwner={!this.props.match.params.userId}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}

            />
        )
    }
}


const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    connect<MapStatePropsType, {}, MapDispatchPropsType, RootStateType>(mapStateToProps,
        {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    // withAuthRedirect,
)(ProfileContainer)