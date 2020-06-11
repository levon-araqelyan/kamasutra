import React from 'react'
import s from "./NavBar.module.scss"
import { NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <NavLink to="profile" activeClassName={s.active}><div className={s.items}>Profile</div></NavLink>
            <NavLink to="dialogs" activeClassName={s.active}><div className={s.items}>Messages</div></NavLink>
            <NavLink to="news" activeClassName={s.active}><div className={s.items}>News</div></NavLink>
            <NavLink to="music" activeClassName={s.active}><div className={s.items}>Music</div></NavLink>
            <NavLink to="settings" activeClassName={s.active}><div className={s.items}>Settings</div></NavLink>
        </nav>
    )
}

export default NavBar