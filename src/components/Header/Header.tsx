import React,{FC} from 'react'
import logo from "../../imges/logo192.png";
import s from "./Header.module.scss"
import { NavLink} from "react-router-dom";
import Button from "../Button/Button";

type PropsType = {
    login?:string | null
    logoutThunkAction?:()=> void
}
const Header:FC<PropsType> = (props) => {
    return (
        <header className={s.header}>
            <img src={logo} alt="logo"/>
            <div className={s.login}>
                {props.login ?
                    <p>{props.login} <Button onClick={props.logoutThunkAction}>Logout</Button></p>
                    : <NavLink to="/login">Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header