import React, {useState} from 'react'
import s from "./ProfileInfo.module.scss"
import emoji from "../../../imges/emoji.jpg";
import Loading from "../../Loading/Loading";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import ProfileDataForm from "../ProfileDataForm/ProfileDataForm";


const ProfileInfo = ({isOwer, profile, status, updateStatus, savePhoto,saveProfile}) => {

    const [isEditMod,setIsEditMod] = useState(false);
    // const [visibleMobileMenu, setVisibleMobileMenu] = useState(false)

    if (!profile) {
        return <Loading />
    }

    const onMyPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }

    };

    const onSubmit = (formData) => {
       saveProfile(formData);
        setIsEditMod(false)
    }

    return (
        <div className={s.infoWrap}>
            <div className={s.avatar}>
                <img src={profile.photos.large || emoji} alt="no photo"/>
                {isOwer && <input type="file" onChange={onMyPhotoSelected}/>}
                {isEditMod ? <ProfileDataForm  profile={profile} onSubmit={onSubmit}/> :
                    <ProfileData profile={profile} isOwer={isOwer} useEditeMod={() => setIsEditMod(true)}/>}

                <ProfileStatus status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )
};

export default ProfileInfo

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div>
            <b>{contactTitle}</b> : {contactValue}
        </div>
    )
};

const ProfileData = ({profile, isOwer, useEditeMod}) => {
    return (
        <div>
            {isOwer && <button onClick={useEditeMod}>edit</button>}
            <div>
                <b>full Name</b> : {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b> : {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {
                profile.lookingForAJob &&
                <div>
                    <b>My professionals skills</b> : {profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>About my</b> : {profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b> : {Object.keys(profile.contacts).map(key =>
                <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            )}
            </div>
        </div>
    )
};
