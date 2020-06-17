import React from "react"
import usersRedusers, {
    follow, followingInProgress, followThunkCreator, getUsersThunkCreator,
    loading,
    UnfollowThunkCreator,
} from "../../redux/redusers/usersRedusers";
import {connect} from "react-redux";
import Users from "./Users";
import Loading from "../Loading/Loading";


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
        users : state.usersRedusers,
        totalCount: state.usersRedusers.totalCount,
        pageSize: state.usersRedusers.pageSize,
        currentPage: state.usersRedusers.currentPage,
        isFetching : state.usersRedusers.isFetching,
        followProgress : state.usersRedusers.followProgress
    }
}


export default connect(mapStateToProps,{
    follow ,
    loading,
    followingInProgress,
    getUsersThunkCreator,
    followThunkCreator,
    UnfollowThunkCreator
})(UsersContainer)