import React from "react"
import s from "./Messages.module.scss"


const Massages = ({text}) => {
    return (
        <div className={s.message}>{text}</div>
    )
}

export default Massages