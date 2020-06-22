import React from "react"
import s from "./Users.module.scss";
import emoji from "../../imges/emoji.jpg";
import {NavLink} from "react-router-dom";

const User = ({
                   user,
                   handleFollowed,
                   followProgress
               }) => {

    return (


        <div className={s.usersWrap}>

            <div className={s.imgWrap}>
                <NavLink to={`/profile/${user.id}`}>
                    <img src={user.photos.small ? user.photos.small : emoji} alt="user img"/>
                </NavLink>
                <button
                    onClick={() => handleFollowed(user.followed, user.id)}
                    disabled={followProgress.some(i => i === user.id)}
                >
                    {user.followed ? "Unfollow" : "follow"}
                </button>
            </div>

            <div className={s.infoWrap}>
                <div className={s.name}>
                    <div className={s.fullName}>{user.name}</div>
                    <div className={s.status}>{user.status}</div>
                </div>
                <div className={s.city}>
                    <div className={s.fullName}>{"el.location.country"}</div>
                    <div className={s.status}>{"el.location.city"}</div>
                </div>
            </div>


        </div>
    )
};

export default User