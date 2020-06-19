import React from 'react'
import logo from "../../imges/logo192.png";
import s from "./Header.module.scss"
import { NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src={logo} alt="logo"/>
            <div className={s.login}>
                {props.login ?
                    <p>{props.login} <button onClick={props.logoutThunkAction}>Logout</button></p>
                    : <NavLink to="/login">Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header