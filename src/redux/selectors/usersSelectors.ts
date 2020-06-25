import {createSelector} from "reselect"
import {AppStateType} from "../reduxStore"


const getUsers = (state:AppStateType) => {
    return state.usersRedusers
}

export const getUsersWithSelector = createSelector( getUsers ,(users)=>{
    return  users.users
})

export const getTotalCount = (state:AppStateType) => {
    return state.usersRedusers.totalCount
}


export const getPageSize= (state:AppStateType) => {
    return state.usersRedusers.pageSize
}

export const getCurrentPage= (state:AppStateType) => {
    return state.usersRedusers.currentPage
}

export const getIsFetching= (state:AppStateType) => {
    return state.usersRedusers.isFetching
}

export const getFollowProgress= (state:AppStateType) => {
    return state.usersRedusers.followProgress
}