import {ActionsTypes, PostsType, RootStateType, ProfilePageType} from "./store";



const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }

}


export const addPostAC = (newPostText: string) => ({type: "ADD-POST", postMessage: newPostText}) as const;

export const updateNewPostTextAC = (newText: string ) => ({type: 'UPDATE-NEW-POST-TEXT', newText: newText})  as const;



export default profileReducer;



