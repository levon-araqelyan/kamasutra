import React from 'react'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({state:{postData,newPostText},dispatch}) => {

    return (
        <>
           <ProfileInfo />
            <MyPosts postData={postData} newPostText={newPostText} dispatch={dispatch}/>
        </>
    )
}

export default Profile