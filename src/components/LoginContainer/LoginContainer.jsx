import React from "react"
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredFild} from "../../utils/validation/validation";
import InputComponent from "../Input/InputComponent";
import {connect} from "react-redux";
import {loginThunkAction, logoutThunkAction} from "../../redux/redusers/authRedusers";
import {Redirect} from "react-router-dom";
import s from "./LoginContainer.module.scss"
import Button from "../Button/Button";


class LoginContainer extends React.Component {
    onSubmit = (formData) => {
        const {login, password, rememberMy , captcha} = formData;
        this.props.loginThunkAction(login, password, rememberMy ,captcha)
    };

    render() {
        if (this.props.isAuth) {
            return <Redirect to={"/profile"}/>
        }
        return (
            <div className={s.loginWrap}>
                <div>registration is paid, but you can use my page
                    <p><b>login</b> : Levon.araqelyan.89@gmail.com</p>
                    <p><b>password</b> : 101089lev</p>
                </div>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={this.onSubmit} captchaUrl={this.props.captchaUrl}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
});

export default connect(mapStateToProps, {loginThunkAction, logoutThunkAction})(LoginContainer)

let maxLength20 = maxLengthCreator(40);
const LoginForm = ({error,handleSubmit,captchaUrl}) => {
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

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm);