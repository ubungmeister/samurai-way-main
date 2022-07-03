import React from 'react';
import s from './ProfileInfo.module.css'
export const ProfileInfo = () => {
    return (
        <div>
            <div>
                ava + discription
            </div>
            <div className={s.content}>
                <img
                    src='https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'/>
            </div>
        </div>
    );
};
