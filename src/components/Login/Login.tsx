import React from 'react';
import {reduxForm, InjectedFormProps} from "redux-form";
import {createField, Input} from "../common/Preloader/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootStateType } from '../../Redux/redux-store';
import {login} from "../../Redux/auth-reducer";
import s from '../common/Preloader/FormsControls/FormsControls.module.css'



export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}


export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit,error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input, {type: 'password'})}
            {createField(undefined, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}
            {error && <div className={s.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div>
            <h1>Login</h1>
            < LoginReduxForm onSubmit={onSubmit}/>
        </div>
        )
}
type  MapStatePropsType = {
    isAuth: boolean
}

type MapDispatchPropsType = {
    login: (email:string, password: string, rememberMe: boolean) => void
}

const mapStateToProps = (state: RootStateType) => ({
    isAuth: state.auth.isAuth
})
export default connect <MapStatePropsType,MapDispatchPropsType, {} , RootStateType>(mapStateToProps,{login} ) (Login);