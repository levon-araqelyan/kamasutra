import React from "react"
import s from "./Button.module.scss"

const Button = (props) => {
    return(
        <div className={s.buttonWrap}>
            <button {...props}>
                {props.children}
            </button>
        </div>

    )
}

export default Button