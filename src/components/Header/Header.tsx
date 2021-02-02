import React from 'react';
import './Header.module.css';
import s from './Header.module.css'
import { NavLink } from 'react-router-dom';

type AuthPropsType = {
    isAuth: boolean
    login: string | null
}


const Header: React.FC<AuthPropsType> = ({isAuth,login}) => {
    debugger
    return <header className={s.header}>
        <img src="https://i.pinimg.com/736x/7f/bf/a5/7fbfa58f7132f24c62da23d85c849e30.jpg" alt=""/>
        <div className={s.loginBlock}>
            {isAuth ? login
            : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
}

export default  Header;