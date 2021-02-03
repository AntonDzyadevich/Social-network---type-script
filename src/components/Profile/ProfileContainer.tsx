import React from 'react';
import './Profile.module.css';
import Profile from './Profile';
import {ProfileType, RootStateType} from "../../types/entities";
import {connect} from "react-redux";
import {getUserProfile} from "../../Redux/profile-reducer";
import { withRouter, RouteComponentProps, Redirect } from 'react-router-dom';


type MapStatePropsType = {
    profile: ProfileType | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    // setUserProfileAC:(profile: ProfileType) => void
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

        if(!this.props.isAuth) return <Redirect to='/login'/>
        return (
            <Profile {...this.props} profile={ this.props.profile}/>
        )
    }
}

const mapStateToProps = (state:RootStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }

}

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect<MapStatePropsType,MapDispatchPropsType, {} , RootStateType>(mapStateToProps,
    {getUserProfile}) (WithUrlDataContainerComponent);