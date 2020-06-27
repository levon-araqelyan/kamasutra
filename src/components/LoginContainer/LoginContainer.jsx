import React from "react"
import {connect} from "react-redux";
import {loginThunkAction, logoutThunkAction} from "../../redux/redusers/authRedusers";
import {Redirect} from "react-router-dom";
import s from "./LoginContainer.module.scss"
import {LoginReduxForm} from "./LoginForm"



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