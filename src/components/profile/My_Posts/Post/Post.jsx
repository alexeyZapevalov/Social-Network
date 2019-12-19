import React from 'react';
import Style from './Post.module.css'


    const Post = (props) => {
        return (
            <div className={Style.item}>
                <img src='https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'></img>
                {props.message}
                <div>
                    <span>Like <span>{props.likeCount}</span></span>
                </div>
            </div>      
        )
    }
export default Post