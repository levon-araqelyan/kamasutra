import {createSelector} from "reselect"


const getUsers = state => {
    return state.usersRedusers
}

export const getUsersWithSelector = createSelector( getUsers ,(users)=>{
    return  users
})

export const getTotalCount = state => {
    return state.usersRedusers.totalCount
}


export const getPageSize= state => {
    return state.usersRedusers.pageSize
}

export const getCurrentPage= state => {
    return state.usersRedusers.currentPage
}

export const getIsFetching= state => {
    return state.usersRedusers.isFetching
}

export const getFollowProgress= state => {
    return state.usersRedusers.followProgress
}