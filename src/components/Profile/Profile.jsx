import React from 'react'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({state:{postData,newPostText},addPost,setNewPostText}) => {

    return (
        <>
           <ProfileInfo />
            <MyPosts postData={postData} addPost={addPost} newPostText={newPostText} setNewPostText={setNewPostText}/>
        </>
    )
}

export default Profile