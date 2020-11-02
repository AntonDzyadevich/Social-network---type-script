import React from 'react';
import s from './../Dialogs.module.css';
import {MessagesType} from "../../../Redux/state";




const Message: React.FC<MessagesType> = ({message}) => {
    return (
        <div className={s.message}>{message}</div>
    )
}

export default Message;