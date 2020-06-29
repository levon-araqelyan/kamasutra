import React from "react"
import s from "./InputComponent.module.scss"
import {WrappedFieldProps} from "redux-form";

type PropsType = {
    type: string
}

const InputComponent: React.FC<WrappedFieldProps & PropsType> = ({input, meta, ...props}) => {
    const hesError = meta.touched && meta.error;
    return (
        <div className={s.inputWrap + " " + (hesError ? s.errorWrap : "")}>
            {props.type === "textarea" ? <textarea className={s.textarea} {...input} {...props}/> :
                <input {...input} {...props}/>}
            {hesError && <span className={s.errorMessage}>{meta.error}</span>}
        </div>
    )
};

export default InputComponent