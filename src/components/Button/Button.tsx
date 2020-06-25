import React, {FC} from "react"
import  "./Button.module.scss"

type PropsType = {
    children: string | number
    onClick?:()=> void
    value?:string | number
    type?: "submit" | undefined | "button" | "reset"
    style?:{
        color:string
    }
    disabled?:boolean
}

const Button: FC<PropsType> = (props) => {
    return (
            <button
                value={props.value}
                type={props.type}
                style={props.style}
                onClick={props.onClick}
                disabled={props.disabled}
            >
                {props.children}
            </button>
    )
};

export default Button