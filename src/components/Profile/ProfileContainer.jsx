import React from "react"
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {loading} from "../../redux/redusers/usersRedusers";
import {
    getStatus,
    savePhoto,
    saveProfile,
    setUserProfileThunkAction,
    updateStatus
} from "../../redux/redusers/profileRedusers";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
      this.refreshProfile()
    }
    refreshProfile(){
        const {userId} = this.props.match.params;
        this.props.setUserProfileThunkAction(userId ? userId : this.props.userId);
        this.props.getStatus(userId ? userId : this.props.userId)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params !== prevProps.match.params){
            this.refreshProfile()
        }

    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                isOwer={!this.props.match.params.userId}
                savePhoto={this.props.savePhoto}
            />
        )
    }
}

const mapStateToPros = (state) => ({
    profile: state.profileReduser.profile,
    status:state.profileReduser.status,
    userId: state.auth.userId
});

export default compose(
    withRouter,
    connect(mapStateToPros,{loading, setUserProfileThunkAction,updateStatus,getStatus,savePhoto,saveProfile}),
        WithAuthRedirect,
    )(ProfileContainer)