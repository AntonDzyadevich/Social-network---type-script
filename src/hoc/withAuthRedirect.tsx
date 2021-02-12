import React, { ComponentType } from 'react';
import {connect} from "react-redux";
import {RootStateType} from "../types/entities";
import {Redirect} from 'react-router-dom';


type mapStateForRedirectPropsType = {
    isAuth: boolean
}

const mapStateToPropsForRedirect = (state:RootStateType):mapStateForRedirectPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect <T>(Component: ComponentType<T>){

    function RedirectComponent(props: mapStateForRedirectPropsType) {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to='/login'/>

        return <Component {...restProps as T}/>
    }

    const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect) (RedirectComponent)

    return ConnectedAuthRedirectComponent;
}

