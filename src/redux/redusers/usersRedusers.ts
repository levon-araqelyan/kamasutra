import {usersApi} from "../../api/api";
import {UsersType} from "../../types/types";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FETCHING_PROGRESS = "TOGGLE_IS_FETCHING_PROGRESS";


const initialState = {
    users: [] as Array<UsersType>,
    totalCount: 0,
    pageSize: 4,
    currentPage: 1,
    isFetching: false,
    followProgress: [] as Array<number>
};

type initialStateType = typeof initialState

const usersReduser = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                users: action.payload.users,
                totalCount: action.payload.totalCount ? action.payload.totalCount : state.totalCount

            }
        }

        case TOGGLE_IS_FETCHING_PROGRESS: {
            return {
                ...state,
                followProgress: action.payload.bull ?
                    state.followProgress.filter(id => id !== action.payload.id)
                    : [...state.followProgress, action.payload.id]
            }
        }
        case FOLLOW : {
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload ? {...el, followed: true} : el)
            }
        }
        case UNFOLLOW : {
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload ? {...el, followed: false} : el)
            }
        }
        case SET_CURRENT_PAGE : {
            return {
                ...state,
                currentPage: action.payload
            }
        }
        case TOGGLE_IS_FETCHING : {
            return {
                ...state,
                isFetching: action.payload
            }
        }
        default: {
            return state
        }
    }
};

type FollowType = {
    type: typeof FOLLOW,
    payload: number
}

export const follow = (userId: number): FollowType => {
    return {
        type: FOLLOW,
        payload: userId
    }
};

type UnFollowType = {
    type: typeof UNFOLLOW,
    payload: number
}

export const unFollow = (userId: number): UnFollowType => {
    return {
        type: UNFOLLOW,
        payload: userId
    }
};

type SetUsersType = {
    type: typeof SET_USERS,
    payload: {
        users: UsersType
        totalCount: number
    }
}

export const setUsers = (users: UsersType, totalCount: number): SetUsersType => {
    return {
        type: SET_USERS,
        payload: {
            users,
            totalCount
        }
    }
};

type SetCorrentPagetaype = {
    type: typeof SET_CURRENT_PAGE,
    payload: number
}

export const setCorrentPage = (i: number): SetCorrentPagetaype => {

    return {
        type: SET_CURRENT_PAGE,
        payload: i
    }
};

type LoadingType = {
    type: typeof TOGGLE_IS_FETCHING,
    payload: boolean
}

export const loading = (bull: boolean): LoadingType => {
    return {
        type: TOGGLE_IS_FETCHING,
        payload: bull
    }
};

type FollowingInProgressType = {
    type: typeof TOGGLE_IS_FETCHING_PROGRESS,
    payload: {
        id: number
        bull: boolean
    }
}

export const followingInProgress = (id: number, bull: boolean): FollowingInProgressType => {
    return {
        type: TOGGLE_IS_FETCHING_PROGRESS,
        payload: {
            id,
            bull
        }
    }
};

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {

    return async (dispatch: any) => {
        dispatch(loading(true));
        const data = await usersApi.getUsers(currentPage, pageSize);
        dispatch(setUsers(data.items, data.totalCount));
        dispatch(loading(false));
        dispatch(setCorrentPage(currentPage))
    }

};

export const followThunkCreator = (id: number) => {

    return async (dispatch: any) => {
        const {data} = await usersApi.follow(id);
        if (data.resultCode === 0) {
            dispatch(unFollow(id))
        }
        dispatch(followingInProgress(id, true))
    }
};

export const UnfollowThunkCreator = (id: number) => {
    return async (dispatch: any) => {
        const {data} = await usersApi.Unfollow(id);

        if (data.resultCode === 0) {
            dispatch(follow(id))
        }
        dispatch(followingInProgress(id, true))

    }
};


export default usersReduser













