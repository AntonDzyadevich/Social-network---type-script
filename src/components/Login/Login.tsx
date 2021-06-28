import React from 'react';
import {reduxForm, InjectedFormProps} from "redux-form";
import {createField, Input} from "../common/Preloader/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect, useDispatch, useSelector} from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootStateType } from '../../Redux/redux-store';
import {login} from "../../Redux/auth-reducer";
import s from '../common/Preloader/FormsControls/FormsControls.module.css'

type LoginFormOwnProps = {
    captchaUrl: string | null
}


export type GetStringKeys<T> = Extract<keyof T, string>
type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>


export const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType,LoginFormOwnProps> & LoginFormOwnProps>
    = ({handleSubmit,error,captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormValuesTypeKeys>('Email', 'email', [required], Input)}
            {createField<LoginFormValuesTypeKeys>('Password', 'password', [required], Input, {type: 'password'})}
            {createField<LoginFormValuesTypeKeys>(undefined, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}

            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField<LoginFormValuesTypeKeys>("Symbols from image", 'captcha', [required], Input, {}) }


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

export type LoginFormValuesType = {
    captcha: string
    rememberMe: boolean
    password: string
    email: string
}
const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm)

// const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
//
//     const onSubmit = (formData: LoginFormValuesType) => {
//         props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
//     }
//
//     if(props.isAuth) {
//         return <Redirect to={"/profile"} />
//     }
//
//     return (
//         <div>
//             <h1>Login</h1>
//             < LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
//         </div>
//         )
// }
// type  MapStatePropsType = {
//     isAuth: boolean
// }
//
// type MapDispatchPropsType = {
//     login: (email:string, password: string, rememberMe: boolean, captcha: string) => void
// }
//
// const mapStateToProps = (state: RootStateType) => ({
//     captchaUrl: state.auth.captchaUrl,
//     isAuth: state.auth.isAuth
// })
// export default connect <MapStatePropsType,MapDispatchPropsType, {} , RootStateType>(mapStateToProps,{login} ) (Login);



export const LoginPage: React.FC = () => {
    const captchaUrl = useSelector((state: RootStateType) => state.auth.captchaUrl)
    const isAuth = useSelector((state: RootStateType) => state.auth.isAuth)
    const dispatch = useDispatch()

    const onSubmit = (formData: LoginFormValuesType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
    </div>
}