import React from 'react';
import './Header.module.css';
import Header from "./Header";
import {connect} from "react-redux";
import { RootStateType} from '../../types/entities';
import {logout} from "../../Redux/auth-reducer";


export type MapStatePropsType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

export type MapDispatchPropsType = {
    logout: any
}

export type AuthContainerPropsType = MapStatePropsType & MapDispatchPropsType




class HeaderContainer extends React.Component<AuthContainerPropsType> {




    render() {
        return <Header {...this.props}/>

    }

}
const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
    id: state.auth.userId,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth,
});

export default  connect<MapStatePropsType,MapDispatchPropsType, {} , RootStateType>(mapStateToProps, {logout})
(HeaderContainer);



