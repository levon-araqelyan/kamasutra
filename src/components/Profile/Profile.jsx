import React from 'react'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({postData}) => {

    return (
        <>
           <ProfileInfo />
            <MyPosts postData={postData}/>
        </>
    )
}

export default Profile