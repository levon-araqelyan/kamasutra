import React, {Component} from 'react'
import './App.scss';
import NavBar from "./components/NavBar/NavBar";
import {Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/LoginContainer/LoginContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/redusers/appRedusers";
import Loading from "./components/Loading/Loading";
import {WithSuspanse} from "./hoc/WithSuspanse";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

class App extends Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) return <Loading/>;
        return (
            <div className="AppWrapper">

                <HeaderContainer/>
                <NavBar/>
                <div className="AppContainer">

                    <Route path="/profile/:userId?" render={WithSuspanse(ProfileContainer)}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <LoginContainer/>}/>
                    <Route path="/dialogs"
                           render={WithSuspanse(DialogsContainer)}/>

                </div>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    initialized: state.appReduser.initialized
});

export default compose(
    connect(mapStateToProps, {initializeApp})
)(App);
