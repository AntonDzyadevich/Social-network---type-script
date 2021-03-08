import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import { PostsType } from '../../../Redux/profile-reducer';
import  {reduxForm,InjectedFormProps, Field} from "redux-form";




const MyPosts:React.FC<{posts: Array<PostsType>,
                        // newPostText: string,
                        // updateNewPostText: (text:string) => void
                        addPost: (newPostText: string) => void}> = (props) => {

    let postsElements = props.posts.map(p => < Post id={p.id} key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let onAddPost = (values: any) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}


type FormDataType = {
    newPostText: string
}

const  AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field name="newPostText" component ="textarea" />
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
        </form>



    )
}

const AddNewPostFormRedux = reduxForm<FormDataType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)



export default MyPosts;