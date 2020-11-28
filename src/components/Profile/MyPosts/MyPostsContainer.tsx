import React from 'react';
import {StoreType} from "../../../types/entities";
import {addPostAC, updateNewPostTextAC} from '../../../Redux/profile-reducer';
import MyPosts from "./MyPosts";



const MyPostsContainer:React.FC<{store: StoreType}> =
    (props) => {

    let state = props.store.getState();


    let addPost = () => {
            props.store.dispatch(addPostAC(state.profilePage.newPostText));

    }

    let onPostChange = (text: string) => {
        const action = updateNewPostTextAC(text);
        props.store.dispatch(action);
    }


    return (< MyPosts updateNewPostText={onPostChange}
                      addPost={addPost}
                      posts={state.profilePage.posts}
                      newPostText={state.profilePage.newPostText}/>)
}

export default MyPostsContainer;