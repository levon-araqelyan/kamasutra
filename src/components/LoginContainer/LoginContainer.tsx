import React from "react"
import {connect} from "react-redux";
import {loginThunkAction, logoutThunkAction} from "../../redux/redusers/authRedusers";
import {Redirect} from "react-router-dom";
import s from "./LoginContainer.module.scss"
import {LoginReduxForm} from "./LoginForm"
import {UsersType} from "../../types/types";
import {AppStateType} from "../../redux/reduxStore";

type MapStatePropsType = {
    isAuth: boolean,
    captchaUrl: string | null
}

type MapDispatchPropsType = {
    loginThunkAction:(email: string, password: string, rememberMe: boolean, captcha: string | null)=> void
    logoutThunkAction:(login:string, password:string, rememberMy:boolean ,captcha:string | null)=> void
}

type OwnPropsType = {
}


type PropsType = OwnPropsType & MapDispatchPropsType & MapStatePropsType
export type LoginFormValuesType = {
    login:string
    password:string
    rememberMy :boolean
    captcha:string | null
}

class LoginContainer extends React.Component<PropsType> {
    onSubmit = (formData:LoginFormValuesType) => {
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

const mapStateToProps = (state:AppStateType):MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
});

export default connect(mapStateToProps, {loginThunkAction, logoutThunkAction})(LoginContainer)