import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return <div>
        <div className={s.item}>
            <img src="https://www.comicbookraw.com/wp-content/uploads/2019/05/avengers-endgame-uhdpaper.com-8K-94.jpg"/>
        </div>
        <div className={s.descriptionBlock}>
            ava+description
        </div>
    </div>
}

export default ProfileInfo ;