import React from 'react';
import {RootStateType, ActionsTypes} from "../../../types/entities";
import {addPostAC, updateNewPostTextAC} from '../../../Redux/profile-reducer';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



const mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        updateNewPostText: (text: string) => {
            const action = updateNewPostTextAC(text);
            dispatch(action);
        },
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        }

    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);


export default MyPostsContainer;