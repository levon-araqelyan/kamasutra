import React from "react"
import s from "./Users.module.scss";
import emoji from "../../imges/emoji.jpg";
import Pagination from "../Pagination/Pagination";
import {NavLink} from "react-router-dom";
import Button from "../Button/Button";

const Users = ({totalCount, pageSize, currentPage, changePage, users, handleFollowed,followProgress}) => {
    return (

        <div>
            <Pagination pageSize={pageSize} totalCount={totalCount} pageButtons={changePage} page={currentPage}/>
            {users.map(el => (
                <div className={s.usersWrap}>

                    <div className={s.imgWrap}>
                        <NavLink to={`/profile/${el.id}`}>
                            <img src={el.photos.small ? el.photos.small : emoji} alt="user img"/>
                        </NavLink>
                        <Button
                            onClick={() => handleFollowed(el.followed, el.id)}
                            disabled={followProgress.some(i => i === el.id)}
                        >
                            {el.followed ? "Unfollow" : "follow"}
                        </Button>
                    </div>

                    <div className={s.infoWrap}>
                        <div className={s.name}>
                            <div className={s.fullName}>{el.name}</div>
                            <div className={s.status}>{el.status}</div>
                        </div>
                        <div className={s.city}>
                            <div className={s.fullName}>{"el.location.country"}</div>
                            <div className={s.status}>{"el.location.city"}</div>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default Users