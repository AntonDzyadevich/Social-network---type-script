import React from 'react';
import './Header.module.css';
import Header from "./Header";
import {connect} from "react-redux";
import { RootStateType} from '../../types/entities';
import {getAuthUserData} from "../../Redux/auth-reducer";


type MapStatePropsType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

type MapDispatchPropsType = {
    getAuthUserData: () => void
}

export type AuthContainerPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<AuthContainerPropsType> {
    componentDidMount() {
      this.props.getAuthUserData()

    }

    render() {
        return <Header {...this.props}/>

    }

}
const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
    id: state.auth.id,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth

});

export default  connect<MapStatePropsType,MapDispatchPropsType, {} , RootStateType>(mapStateToProps, {getAuthUserData})
(HeaderContainer);



