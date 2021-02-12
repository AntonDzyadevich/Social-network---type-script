import React from 'react';
import './Profile.module.css';
import Profile from './Profile';
import {ProfileType, RootStateType} from "../../types/entities";
import {connect} from "react-redux";
import {getUserProfile} from "../../Redux/profile-reducer";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { compose } from 'redux';


type MapStatePropsType = {
    profile: ProfileType | null
}

type MapDispatchPropsType = {
    getUserProfile:(userId: string) => void
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

export default compose<React.ComponentType>(
    connect<MapStatePropsType,MapDispatchPropsType, {} , RootStateType>(mapStateToProps,
        {getUserProfile}),
    withRouter,
    withAuthRedirect,
) (ProfileContainer)