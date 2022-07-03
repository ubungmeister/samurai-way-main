import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
export const MyPosts = () => {
    let posts = [
        {id:1, message:'Today is a perfect day', likesCount: 2},
        {id:2, message:'Tomorrow will be a perfect day', likesCount: 4},
        {id:3, message:'Everyday is a perfect day', likesCount: 22}
    ]
    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div><textarea></textarea></div>
            <div><button>push</button></div>
        <div className={s.posts}>
            <Post posts={posts}/>
        </div>
        </div>
)
}