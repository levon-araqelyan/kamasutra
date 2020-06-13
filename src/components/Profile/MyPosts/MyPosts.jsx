import React from 'react'
import s from "./MyPosts.module.scss"
import Post from "./Post/Post";

const MyPosts = ({postData, addPost,newPostText,setNewPostText}) => {


    const addPosts = () => {
        addPost();
    };

    const handleTextareaChange = (e) => {
       setNewPostText(e.target.value)
    };

    return (
        <div className={s.wrap}>
            <h3>my post</h3>
            <div><textarea onChange={(e)=> handleTextareaChange(e)} value={newPostText}/></div>
            <button onClick={addPosts}>New post</button>
            <div>
                {postData.map(item => (
                    <Post key={item.id} message={item.message} likeCount={item.likeCount}/>
                ))}
            </div>
        </div>
    )
}

export default MyPosts