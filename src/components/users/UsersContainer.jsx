import React from "react"
import usersRedusers, {followAc, setUsersAc, unFollowAc} from "../../redux/redusers/usersRedusers";
import {connect} from "react-redux";
import Users from "./Users";

const mapStateToProps =(state)=> {
    return {
        users : state.usersRedusers
    }
}

const mapDispatchToProps =(dispatch)=> {
    return {
        follow : (userId) => dispatch(followAc(userId)),
        Unfollow : (userId) => dispatch(unFollowAc(userId)),
        setUsers : (users) => dispatch(setUsersAc(users)),
    }
}
const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)

export default UsersContainer