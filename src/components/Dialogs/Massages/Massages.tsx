import React,{FC} from "react"
import s from "./Messages.module.scss"

type PropsType = {
    text:string
}

const Massages:FC<PropsType> = ({text}) => {
    return (
        <div className={s.message}>{text}</div>
    )
}

export default Massages