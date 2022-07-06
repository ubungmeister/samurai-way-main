import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

type PostPropsType = {
    id:number
    message: string
    likesCount?:number
}

type PostArrayPropsType = {
    posts: Array<PostPropsType>
}
export const MyPosts = (props:PostArrayPropsType) => {

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div><textarea></textarea></div>
            <div><button>push</button></div>
        <div className={s.posts}>
            <Post posts={props.posts}/>
        </div>
        </div>
)
}