import {maxLengthCreator, requiredFild} from "../../utils/validation/validation";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import InputComponent from "../Input/InputComponent";
import s from "./LoginContainer.module.scss";
import Button from "../Button/Button";
import React,{FC} from "react";
import {LoginFormValuesType} from "./LoginContainer"

let maxLength20 = maxLengthCreator(40);

type LoginFormOwnProps = {
    captchaUrl:string | null
}

const LoginForm:FC<InjectedFormProps<LoginFormValuesType,LoginFormOwnProps> & LoginFormOwnProps> = ({error,handleSubmit,captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    placeholder={"Login"}
                    name="login"
                    component={InputComponent}
                    validate={[requiredFild, maxLength20]}
                />
            </div>
            <div>
                <Field
                    placeholder={"Password"}
                    name="password"
                    component={InputComponent}
                    validate={[requiredFild, maxLength20]}
                    type="password"
                />
            </div>
            <div>
                <Field type="checkbox" name="rememberMy" component={"input"}/> : remember my
            </div>
            {captchaUrl && <img src={captchaUrl} />}
            {captchaUrl &&  <Field
                placeholder={"captcha"}
                name="captcha"
                component={InputComponent}
                validate={[requiredFild, maxLength20]}
            />}
            {
                error && (<div className={s.allError}>{error}</div>)
            }
            <div>
                <Button>Login</Button>
            </div>
        </form>
    )
};

export const LoginReduxForm = reduxForm<LoginFormValuesType,LoginFormOwnProps>({
    form: 'login',
})(LoginForm);