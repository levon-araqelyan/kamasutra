import React from 'react'
import logo from "../../imges/logo192.png";
import s from "./Header.module.scss"
import { NavLink} from "react-router-dom";
import Loading from "../Loading/Loading";

const Header = (props) => {
    if(!props.login){
        return <Loading />
    }
    return (
        <header className={s.header}>
            <img src={logo} alt="logo"/>
            <div className={s.login}>{props.login ? <p>{props.login}</p> : <NavLink to="/login">Login</NavLink>}</div>
        </header>
    )
}

export default Header