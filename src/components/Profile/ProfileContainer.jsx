import React from "react"
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {loading} from "../../redux/redusers/usersRedusers";
import {getStatus, setUserProfileThunkAction, updateStatus} from "../../redux/redusers/profileRedusers";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const {userId} = this.props.match.params;
        this.props.setUserProfileThunkAction(userId);
        this.props.getStatus(userId ? userId : this.props.userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
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
    connect(mapStateToPros,{loading, setUserProfileThunkAction,updateStatus,getStatus}),
        WithAuthRedirect,
    )(ProfileContainer)