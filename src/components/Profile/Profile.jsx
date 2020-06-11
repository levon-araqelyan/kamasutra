import React from 'react'
import wolf from "../../imges/wolff.jpg";
import Avatar from "../../imges/avatar.jpg";
import s from "./Profile.module.scss"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <>
            <div className={s.imgWrap}>
                <img src={wolf}/>
            </div>

            <div className={s.avatar}>
                <img src={Avatar}/>
                + description
            </div>

            <MyPosts/>

        </>
    )
}

export default Profile