import React, {ChangeEvent, ChangeEventHandler, MouseEventHandler} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {addPost} from "../../../redux/state";

type PostPropsType = {
    id:number
    myPost: string
    likesCount?:number
}

type PostArrayPropsType = {
    myPost:string
    posts: Array<PostPropsType>
    addPost: (postText:string)=>void
    updatePostText: (newTex:string)=>void
}
export const MyPosts = (props:PostArrayPropsType) => {
    const addPost =()=>{
        // current? znamene poku current exestuje potom prirad value. bez ? lze pres if/&&
        props.addPost(props.myPost)
        props.updatePostText('')



    }
    const newTextChangeHandler =(event: ChangeEvent<HTMLTextAreaElement>)=>{
        props.updatePostText(event.currentTarget.value)


    }
    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <textarea value={props.myPost} onChange={newTextChangeHandler}/>
            <div><button onClick={addPost}>push</button></div>
        <div className={s.posts}>
            <Post posts={props.posts}/>
        </div>
        </div>
)
}