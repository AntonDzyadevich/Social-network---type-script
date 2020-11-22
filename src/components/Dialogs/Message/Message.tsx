import React from 'react';
import s from './../Dialogs.module.css';
import {MessagesType} from "../../../Redux/store";




const Message: React.FC<MessagesType> = ({message}) => {
    return (
        <div className={s.message}>{message}</div>
    )
}

export default Message;