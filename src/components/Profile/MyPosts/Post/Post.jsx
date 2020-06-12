import React from 'react'
import s from "./Post.module.scss"
import wolf from "../../../../imges/wolf.jpg"

const Post = ({likeCount,message}) => {
    return (
        <div className={s.postsWrap}>
            <img src={wolf}/>
            <span>{message}</span>
            <p>like {likeCount}</p>
        </div>
    )
};

export default Post