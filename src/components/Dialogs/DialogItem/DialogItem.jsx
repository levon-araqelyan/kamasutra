import React from "react"
import s from "./DialogItem.module.scss"
import {NavLink} from "react-router-dom";

const DialogItem = ({name, id}) => {
    return (
        <div className={`${s.dialog} ${s.dialogAActive}`}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    )
}

export default DialogItem