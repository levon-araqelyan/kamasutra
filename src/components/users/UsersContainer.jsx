import React from "react"
import usersRedusers, {
    follow, followingInProgress, followThunkCreator, getUsersThunkCreator,
    loading,
    UnfollowThunkCreator,
} from "../../redux/redusers/usersRedusers";
import {connect} from "react-redux";
import Users from "./Users";
import Loading from "../Loading/Loading";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {
    getCurrentPage,
    getFollowProgress,
    getIsFetching,
    getPageSize,
    getTotalCount,
    getUsers
} from "../../redux/selectors/usersSelectors";


class UsersContainer extends React.Component {

    handleFollowed = (followed, id) => {

           this.props.followingInProgress(id,false);
        if(!followed){
            this.props.UnfollowThunkCreator(id)
        }else{

            this.props.followThunkCreator(id)
        }
    };

    changePage = (e) => {
        this.props.getUsersThunkCreator(e.target.value,this.props.pageSize)
    };

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)
    }

    render() {
        return (
            <>
           { !this.props.isFetching ? <Users
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                changePage={this.changePage}
                users={this.props.users.users}
                handleFollowed={this.handleFollowed}
                followProgress={this.props.followProgress}

           /> : <Loading />}
            </>
        )
    }
}

const mapStateToProps =(state)=> {
    return {
        users : getUsers(state),
        totalCount: getTotalCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching : getIsFetching(state),
        followProgress : getFollowProgress(state)
    }
}

export default compose(
    connect(mapStateToProps,{
        follow ,
        loading,
        followingInProgress,
        getUsersThunkCreator,
        followThunkCreator,
        UnfollowThunkCreator
    }),
    WithAuthRedirect,
)(UsersContainer)

