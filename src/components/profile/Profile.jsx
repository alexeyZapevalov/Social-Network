import React from 'react';
import Style from './Profile.module.css'
import MyPosts from './My_Posts/MyPosts';
import ProfileInfo from './profieInfo/ProfileInfo';

    const Profile = (props) => {
        
        return (
            
            <div>
                
                <ProfileInfo />
                <MyPosts posts={props.profile.posts}  
                newPostText = {props.profile.newPostText} 
                dispatch={props.dispatch} />
            </div>
        )
    }
export default Profile