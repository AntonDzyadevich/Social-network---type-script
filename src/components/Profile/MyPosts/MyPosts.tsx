import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {ActionsTypes, PostsType} from "../../../Redux/store";
import { addPostAC, updateNewPostTextAC } from '../../../Redux/profile-reducer';


const MyPosts:React.FC<{posts: Array<PostsType>, dispatch: (action: ActionsTypes) => void, newPostText: string}> =
    (props) => {

    let postsElements = props.posts.map( p=> < Post  id={p.id} message={p.message} likesCount={p.likesCount}/>)



    let addPost = () => {
            props.dispatch(addPostAC(props.newPostText));

    }

    let onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let text =  e.currentTarget.value
        props.dispatch(updateNewPostTextAC(text))

    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;