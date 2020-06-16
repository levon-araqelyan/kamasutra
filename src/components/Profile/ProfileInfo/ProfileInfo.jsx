import React from 'react'
import wolf from "../../../imges/wolff.jpg";
import s from "./ProfileInfo.module.scss"
import emoji from "../../../imges/emoji.jpg";
import Loading from "../../Loading/Loading";


const ProfileInfo = (props) => {
    if(!props.profile){
        return <Loading />
    }

    return (
        <div className={s.infoWrap}>
            <div className={s.imgWrap}>
                <img src={wolf}/>
            </div>
            <div className={s.avatar}>
                <img src={props.profile.photos.large || emoji} alt="no photo"/>
                + description
            </div>
        </div>
    )
}

export default ProfileInfo