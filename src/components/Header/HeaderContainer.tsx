import React from 'react';
import './Header.module.css';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import { RootStateType} from '../../types/entities';
import {setAuthUserData} from "../../Redux/auth-reducer";

type MapStatePropsType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

type MapDispatchPropsType = {
    setAuthUserData: (userId: number, email: string, login: string) => void
}

export type AuthContainerPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<AuthContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true}).then(response => {
            if(response.data.resultCode === 0) {
                const {id,email,login} = response.data.data
                this.props.setAuthUserData(id,email,login)
            }
        });


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
export default  connect<MapStatePropsType,MapDispatchPropsType, {} , RootStateType>(mapStateToProps, {setAuthUserData}) (HeaderContainer);