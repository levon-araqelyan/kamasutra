import React from 'react'
import Header from "./Header";
import * as axios from "axios";
import {setAuthUserData} from "../../redux/redusers/authRedusers";
import {connect} from "react-redux";

class HeaderContainer extends React.Component{

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials:true}).then(({data}) => {

            if(data.resultCode === 0){
                this.props.setAuthUserData(data.data.id,data.data.email,data.data.login)
            }
        })
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

export default connect(mapStateToProps,{setAuthUserData})(HeaderContainer)