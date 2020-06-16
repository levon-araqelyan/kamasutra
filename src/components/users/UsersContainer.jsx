import React from "react"
import usersRedusers, {
    follow,
    loading,
    setCorrentPage,
    setUsers,
    unFollow,
} from "../../redux/redusers/usersRedusers";
import {connect} from "react-redux";
import * as axios from "axios";
import Users from "./Users";
import Loading from "../Loading/Loading";

class UsersContainer extends React.Component {

    handleFollowed = (followed, id) => {
        followed ? this.props.follow(id) : this.props.unFollow(id)
    };

    changePage = (e) => {

        this.props.loading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${e.target.value}&count=${this.props.pageSize}`).then(({data}) => {
            this.props.setUsers(data.items)
            this.props.loading(false)
        });

        this.props.setCorrentPage(e.target.value)
    };

    componentDidMount() {
        this.props.loading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(({data}) => {
            this.props.setUsers(data.items, data.totalCount);
            this.props.loading(false)
        })
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
        isFetching : state.usersRedusers.isFetching
    }
}


export default connect(mapStateToProps,{
    follow ,
    unFollow,
    setUsers,
    setCorrentPage,
    loading
})(UsersContainer)