import React from 'react'
import Header from "./Header";
import { logoutThunkAction} from "../../redux/redusers/authRedusers";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";

type MapStatePropsType = {
    isAuth:boolean
    login:string | null
}

type MapDispatchPropsType = {
    logoutThunkAction:()=> void
}

type OwnPropsType = {
}

type PropsType = OwnPropsType & MapDispatchPropsType & MapStatePropsType

class HeaderContainer extends React.Component<PropsType>{
    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state:AppStateType) => ({
    isAuth: state.auth.isAuth,
    login : state.auth.login
});

export default connect<MapStatePropsType,MapDispatchPropsType,OwnPropsType,AppStateType>(mapStateToProps,{logoutThunkAction})(HeaderContainer)