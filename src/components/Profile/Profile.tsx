import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {addPost, updatePostText} from "../../redux/state";
type PostPropsType = {
    id:number
    myPost: string
    likesCount?:number
}

type PostArrayPropsType = {
    posts: Array<PostPropsType>
    myPost:string
    addPost: (postText:string)=>void
    updatePostText: (newTex:string)=>void
}
export const Profile = (props:PostArrayPropsType) => {

    return (

        <div >
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     addPost={props.addPost}
                     updatePostText={props.updatePostText}
                     myPost={props.myPost}

            />
        </div>
    )
}