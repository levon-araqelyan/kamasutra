import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MypostContainer";

const Profile = ({isOwer,profile,status,updateStatus,savePhoto,saveProfile}) => {
    return (
        <>
           <ProfileInfo
               saveProfile={saveProfile}
               savePhoto={savePhoto}
               isOwer={isOwer}
               profile={profile}
               status={status}
               updateStatus={updateStatus}
           />
            <MyPostsContainer />
        </>
    )
}

export default Profile