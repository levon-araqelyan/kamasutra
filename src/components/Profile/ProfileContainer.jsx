import React from "react"
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {loading} from "../../redux/redusers/usersRedusers";
import {setUserProfileThunkAction} from "../../redux/redusers/profileRedusers";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const {userId} = this.props.match.params;
        this.props.setUserProfileThunkAction(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToPros = (state) => ({
    profile: state.profileReduser.profile,
});

export default compose(
    withRouter,
    connect(mapStateToPros,{loading, setUserProfileThunkAction}),
        WithAuthRedirect,
    )(ProfileContainer)