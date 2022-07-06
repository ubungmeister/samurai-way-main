import React from "react";
import s from './Post.module.css'
import {message} from "antd";

type PostPropsType = {
    id:number
    message: string
    likesCount?:number
}

type PostArrayPropsType = {
    posts: Array<PostPropsType>
}

export const Post = (props:PostArrayPropsType) => {
    return (
        <div>
            <div className={s.item}>
                <img
                    src='https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000'/>
                < div className={`${s.item} ${s.text}`}>
                    {props.posts.map((el, index)=>{
                        return(
                           <li key={index}>
                               <div>{el.message}</div>
                               <div>likes {el.likesCount}</div>
                           </li>

                    )
                    })}
                </div>
            </div>
        </div>
    )
}