import React from "react"
import s from "./Dialogs.module.scss"

const Dialogs = () => {
    return (
        <div className={s.dialogWrap}>
            <div className={s.dialogItems}>
                <div className={`${s.dialog} ${s.dialogAActive}`}>Levon</div>
                <div className={s.dialog}>Artur</div>
                <div className={s.dialog}>Maria</div>
                <div className={s.dialog}>Papa</div>
                <div className={s.dialog}>Mama</div>

            </div>
            <div className={s.messages}>
                <div className={s.message}>yo</div>
                <div className={s.message}>ba ba</div>
                <div className={s.message}>go go</div>
            </div>
        </div>
    )
}

export default Dialogs