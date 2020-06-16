import React from "react"
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import * as axios from "axios";
import {connect} from "react-redux";
import {loading} from "../../redux/redusers/usersRedusers";
import {setUserProfile} from "../../redux/redusers/profileRedusers";

class ProfileContainer extends React.Component{
    componentDidMount() {
        const {userId} = this.props.match.params;
        this.props.loading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId ? userId : 8}`).then(({data}) => {
            this.props.setUserProfile(data);
            this.props.loading(false)
        })
    }

    render (){
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToPros = (state) => ({
    profile : state.profileReduser.profile
})

export default withRouter(connect(mapStateToPros,{loading,setUserProfile})(ProfileContainer))