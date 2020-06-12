import React from 'react'
import wolf from "../../../imges/wolff.jpg";
import s from "./ProfileInfo.module.scss"
import Avatar from "../../../imges/avatar.jpg";


const ProfileInfo = () => {
    return (
        <div className={s.infoWrap}>
            <div className={s.imgWrap}>
                <img src={wolf}/>
            </div>
            <div className={s.avatar}>
                <img src={Avatar}/>
                + description
            </div>
        </div>
    )
}

export default ProfileInfo