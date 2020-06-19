import React from "react"
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredFild} from "../../utils/validation/validation";
import InputComponent from "../Input/InputComponent";
import {connect} from "react-redux";
import {loginThunkAction, logoutThunkAction} from "../../redux/redusers/authRedusers";
import {Redirect} from "react-router-dom";
import s from "./LoginContainer.module.scss"


class LoginContainer extends React.Component {
    onSubmit = (formData) => {
        const {login, password, rememberMy} = formData;
        this.props.loginThunkAction(login, password, rememberMy)
    };

    render() {
        if (this.props.isAuth) {
            return <Redirect to={"/profile"}/>
        }
        return (
            <div>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {loginThunkAction, logoutThunkAction})(LoginContainer)

let maxLength20 = maxLengthCreator(40);
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
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
                />
            </div>
            <div>
                <Field type="checkbox" name="rememberMy" component={"input"}/> : remember my
            </div>
            {
                props.error && (<div className={s.allError}>{props.error}</div>)
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm);