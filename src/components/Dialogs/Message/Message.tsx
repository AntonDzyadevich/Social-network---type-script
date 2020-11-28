import React from 'react';
import s from './../Dialogs.module.css';
import {MessagesType} from "../../../types/entities";


const Message: React.FC<MessagesType> = ({message}) => {
    return (
        <div className={s.message}>{message}</div>
    )
}

export default Message;