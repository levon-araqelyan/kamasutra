import React from 'react'
import s from "./MyPosts.module.scss"
import Post from "./Post/Post";
import {addPostActionCreator, setNewPostTextActionCreator} from "../../../redux/state";
import MessengerChatInput from "../../MessengerChatInput/MessengerChatInput";

const MyPosts = ({postData,newPostText,dispatch}) => {


    const addPosts = () => {
        dispatch(addPostActionCreator());
    };

    const handleTextareaChange = (value) => {
        dispatch( setNewPostTextActionCreator(value))
    };

    return (
        <div className={s.wrap}>
            <h3>my post</h3>
            <div>
                <MessengerChatInput setValue={handleTextareaChange} sendMessage={addPosts}  valueOfInput={newPostText}/>
            </div>
            <div>
                {postData.map(item => (
                    <Post key={item.id} message={item.message} likeCount={item.likeCount}/>
                ))}
            </div>
        </div>
    )
}

export default MyPosts