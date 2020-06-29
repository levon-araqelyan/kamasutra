import React from "react"
import Profile from "./Profile";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {
    getStatus,
    savePhoto,
    saveProfile,
    setUserProfileThunkAction,
    updateStatus
} from "../../redux/redusers/profileRedusers";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import Loading from "../Loading/Loading";
import {PrfileType, UsersType} from "../../types/types";
import {AppStateType} from "../../redux/reduxStore";

type MapStatePropsType = {
    profile: PrfileType | null
    status: string
    userId: number | null
    isLoading: boolean
}

type MapDispatchPropsType = {
    setUserProfileThunkAction:(userId:number | null)=> void
    updateStatus:()=> void
    getStatus:(userId:number | string)=> void
    savePhoto:()=> void
    saveProfile:()=> void
}

type OwnPropsType = {

}


type PropsType = OwnPropsType & MapDispatchPropsType & MapStatePropsType & RouteComponentProps<any>

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.refreshProfile()
    }

    refreshProfile() {
        const {userId} = this.props.match.params;
        this.props.setUserProfileThunkAction(userId ? userId : this.props.userId);
        this.props.getStatus(userId ? userId : this.props.userId)
    }

    componentDidUpdate(prevProps:PropsType) {
        if (this.props.match.params !== prevProps.match.params) {
            this.refreshProfile()
        }

    }

    render() {
        let {isLoading} = this.props;
        return (
            <div>
                {
                    isLoading ? <Loading small={false}/> :
                        (<Profile
                            {...this.props}
                            profile={this.props.profile}
                            status={this.props.status}
                            updateStatus={this.props.updateStatus}
                            isOwer={!this.props.match.params.userId}
                            savePhoto={this.props.savePhoto}
                        />)
                }
            </div>
        )
    }
}

const mapStateToPros = (state:AppStateType) => ({
    profile: state.profileReduser.profile,
    status: state.profileReduser.status,
    userId: state.auth.userId,
    isLoading: state.profileReduser.isLoading
});

export default compose(
    withRouter,
    connect(mapStateToPros, {setUserProfileThunkAction, updateStatus, getStatus, savePhoto, saveProfile}),
    WithAuthRedirect,
)(ProfileContainer)