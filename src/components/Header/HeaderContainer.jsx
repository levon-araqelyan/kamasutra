import React from 'react'
import Header from "./Header";
import {getAuthUserDataThunkAction, setAuthUserData} from "../../redux/redusers/authRedusers";
import {connect} from "react-redux";

class HeaderContainer extends React.Component{

    componentDidMount() {
        this.props.getAuthUserDataThunkAction()
    }
    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    login : state.auth.login
});

export default connect(mapStateToProps,{getAuthUserDataThunkAction})(HeaderContainer)