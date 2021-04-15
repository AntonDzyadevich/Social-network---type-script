import React from 'react';
import {Field, reduxForm, InjectedFormProps} from "redux-form";
import {Input} from "../common/Preloader/FormsControls/FormsControls";
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


export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"}
                       name={"email"}
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field placeholder={"password"}
                       name={"password"}
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field  type={"checkbox"}
                        name={"rememberMe"}
                        component={Input}

                />
                Remember me
            </div>
            {props.error && <div className={s.formSummaryError}>
                {props.error}
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