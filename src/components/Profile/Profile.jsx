import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MypostContainer";

const Profile = (props) => {
    return (
        <>
           <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </>
    )
}

export default Profile