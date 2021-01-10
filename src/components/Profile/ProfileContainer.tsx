import React from 'react';
import './Profile.module.css';
import Profile from './Profile';
import axios from "axios";
import {ProfileType, RootStateType} from "../../types/entities";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../Redux/profile-reducer";
import { withRouter, RouteComponentProps } from 'react-router-dom';


type MapStatePropsType = {
    profile: ProfileType | null
}

type MapDispatchPropsType = {
    setUserProfileAC:(profile: ProfileType) => void

}


type PathParamsType = {
    userId:  string
}

type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType;
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType



class ProfileContainer extends React.Component<PropsType>{

    componentDidMount() {
        debugger;

        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = '2';
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect<MapStatePropsType,MapDispatchPropsType, {} , RootStateType>(mapStateToProps,
    {setUserProfileAC}) (WithUrlDataContainerComponent);