import React from 'react'
import s from "./MyPosts.module.scss"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.wrap}>
            my post
            <div>new post</div>
            <div>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}

export default MyPosts