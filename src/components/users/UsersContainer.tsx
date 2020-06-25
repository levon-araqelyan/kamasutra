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
    getUsersWithSelector
} from "../../redux/selectors/usersSelectors";
import {UsersType} from "../../types/types"
import {AppStateType} from "../../redux/reduxStore";

type MapStatePropsType = {
    currentPage:number
    pageSize:number
    isFetching:boolean
    totalCount:number
    users:Array<UsersType>
    followProgress: Array<number>
}

type MapDispatchPropsType = {
    getUsersThunkCreator:(currentPage: number, pageSize: number)=> void
    followingInProgress:(id:number,bool:boolean)=> void
    UnfollowThunkCreator:(id:number)=>void
    followThunkCreator:(id:number)=>void
}

type OwnPropsType = {
    pageTitle: string
}


type PropsType = OwnPropsType & MapDispatchPropsType & MapStatePropsType

class UsersContainer extends React.Component<PropsType> {

    handleFollowed = (followed:boolean, id:number) => {

           this.props.followingInProgress(id,false);
        if(!followed){
            this.props.UnfollowThunkCreator(id)
        }else{

            this.props.followThunkCreator(id)
        }
    };

    changePage = (e:any) => {
        this.props.getUsersThunkCreator(e.target.value,this.props.pageSize)
    };

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)
    }

    render() {
        return (
            <>
                <h1>{this.props.pageTitle}</h1>
           { !this.props.isFetching ? <Users
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                changePage={this.changePage}
                users={this.props.users}
                handleFollowed={this.handleFollowed}
                followProgress={this.props.followProgress}

           /> : <Loading small={false}/>}
            </>
        )
    }
}

const mapStateToProps =(state:AppStateType):MapStatePropsType=> {
    return {
        users : getUsersWithSelector(state),
        totalCount: getTotalCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching : getIsFetching(state),
        followProgress : getFollowProgress(state)
    }
}

export default compose(
    connect<MapStatePropsType,MapDispatchPropsType,OwnPropsType,AppStateType>(mapStateToProps,{
        followingInProgress,
        getUsersThunkCreator,
        followThunkCreator,
        UnfollowThunkCreator
    }),
    WithAuthRedirect,
)(UsersContainer)

