import React from 'react';
import Style from './ProfileInfo.module.css'

    const ProfileInfo = () => {
        return (
            <div>
                <div>
                <img src='https://s.hi-news.ru/wp-content/uploads/2014/11/Star-Wars-The-Force-Awakens-750x419.jpg'></img>
                
                </div>
                <div className={Style.descriptionBlock}>       
                    ava + description
                </div>
            </div>
        )
    }
export default ProfileInfo