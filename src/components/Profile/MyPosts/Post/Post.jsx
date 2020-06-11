import React from 'react'
import s from "./Post.module.scss"
import wolf from "../../../../imges/wolf.jpg"

const Post = () => {
    return (
        <div className={s.postsWrap}><img src={wolf}/><span>post 1</span></div>
    )
}

export default Post