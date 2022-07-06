import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
type PostPropsType = {
    id:number
    message: string
    likesCount?:number
}

type PostArrayPropsType = {
    posts: Array<PostPropsType>
}
export const Profile = (props:PostArrayPropsType) => {

    return (

        <div >
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}