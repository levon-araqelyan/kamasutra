import React,{FC} from "react"
import s from "./DialogItem.module.scss"
import {NavLink} from "react-router-dom";

type PropsType = {
    name:string
    id:string
}

const DialogItem:FC<PropsType> = ({name, id}) => {
    return (
        <div className={`${s.dialog} ${s.dialogAActive}`}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    )
}

export default DialogItem