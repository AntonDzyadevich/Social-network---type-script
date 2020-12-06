import {PostsType, ActionsTypes, ProfilePageType} from "../types/entities";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


const initialState = {
    newPostText: "",
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It`s my first post", likesCount: 40},
    ],
}


const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes):ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            const stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = '';
            return stateCopy;
        case UPDATE_NEW_POST_TEXT:
        {
            const stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }

        default:
            return state;
    }

}


export const addPostAC = (newPostText: string) => ({type: "ADD-POST", postMessage: newPostText}) as const;

export const updateNewPostTextAC = (newText: string ) => ({type: 'UPDATE-NEW-POST-TEXT', newText: newText})  as const;



export default profileReducer;



