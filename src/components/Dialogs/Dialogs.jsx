import React from "react"
import s from "./Dialogs.module.scss"
import DialogItem from "./DialogItem/DialogItem";
import Massages from "./Massages/Massages";

const Dialogs = ({messegesData,dialogsData}) => {

    return (
        <div className={s.dialogWrap}>
            <div className={s.dialogItems}>
                {dialogsData.map(item => (
                    <DialogItem name={item.name} id={item.id} key={item.id}/>
                ))}
            </div>
            <div className={s.messages}>
                {messegesData.map(item => (
                    <Massages key={item.id} text={item.text}/>
                ))}
            </div>
        </div>
    )
}

export default Dialogs