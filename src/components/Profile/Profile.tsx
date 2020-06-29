import React, {FC} from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MypostContainer";
import {PrfileType} from "../../types/types";

type PropsTypes = {
    isOwer: boolean
    profile: PrfileType | null
    status: string
    updateStatus: () => void
    savePhoto: () => void
    saveProfile: () => void
}

const Profile: FC<PropsTypes> = ({isOwer, profile, status, updateStatus, savePhoto, saveProfile}) => {
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
            <MyPostsContainer/>
        </>
    )
};

export default Profile