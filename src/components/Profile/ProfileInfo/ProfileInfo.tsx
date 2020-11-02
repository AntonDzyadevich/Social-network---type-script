import React from 'react';
import s from './ProfileInfo.module.css';




const ProfileInfo = () => {
    return <div>
        <div className={s.item}>
            <img src="https://funart.pro/uploads/posts/2020-05/1590059146_6-p-mstiteli-era-altrona-film-30.jpg" alt=""/>
        </div>
        <div className={s.descriptionBlock}>
            ava+description
        </div>
    </div>
}

export default ProfileInfo ;