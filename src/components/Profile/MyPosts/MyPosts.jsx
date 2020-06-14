import React from 'react'
import s from "./MyPosts.module.scss"
import Post from "./Post/Post";
import MessengerChatInput from "../../MessengerChatInput/MessengerChatInput";


const MyPosts = ({addPosts,handleTextareaChange,postData}) => {

    return (
        <div className={s.wrap}>
            <h3>my post</h3>
            <div>
                <MessengerChatInput setValue={handleTextareaChange} sendMessage={addPosts}  valueOfInput={postData.newPostText}/>
            </div>
            <div>
                {postData.postData.map(item => (
                    <Post key={item.id} message={item.message} likeCount={item.likeCount}/>
                ))}
            </div>
        </div>
    )
}

export default MyPosts