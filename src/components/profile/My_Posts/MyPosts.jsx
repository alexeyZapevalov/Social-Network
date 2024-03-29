import React from 'react';
import Style from './MyPosts.module.css'
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer'




    const MyPosts = (props) => {
        let postElements 
        = props.posts.map( p => <Post message={p.post} likeCount={p.likesCount} />)
        
        let newPostElement = React.createRef();
        let addPost = ()=>{
            props.dispatch(addPostActionCreator());
        };

        let onPostChange = () =>{
            let text = newPostElement.current.value;
            props.dispatch(updateNewPostTextActionCreator(text));
        }
        return (
                <div className={Style.postBlock}>
                    <h3>My posts </h3>
                    <div>
                        <div>
                            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                        </div>
                        <div>
                            <button onClick={addPost}>Add post</button>
                        </div>
                    </div>
                     {postElements}
                </div>
        )
    }
export default MyPosts