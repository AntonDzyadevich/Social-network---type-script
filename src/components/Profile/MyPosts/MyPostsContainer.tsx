import React from 'react';
import {StoreType} from "../../../types/entities";
import {addPostAC, updateNewPostTextAC} from '../../../Redux/profile-reducer';
import MyPosts from "./MyPosts";
import StoreContext from '../../../StoreContext';



const MyPostsContainer:React.FC = () => {

    // let state = props.store.getState();

    return (
        <StoreContext.Consumer>
            { (store) => {
                const state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostAC(state.profilePage.newPostText));
                }
                let onPostChange = (text: string) => {
                    const action = updateNewPostTextAC(text);
                    store.dispatch(action);
                }
              return  < MyPosts updateNewPostText={onPostChange}
                          addPost={addPost}
                          posts={state.profilePage.posts}
                          newPostText={state.profilePage.newPostText}/>
                    }
            }
                </StoreContext.Consumer>
            )
}

export default MyPostsContainer;