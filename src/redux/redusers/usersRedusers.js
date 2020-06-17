import { usersApi} from "../../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FETCHING_PROGRESS = "TOGGLE_IS_FETCHING_PROGRESS";

const initialState = {
    users: [],
    totalCount : 0,
    pageSize: 4,
    currentPage: 1,
    isFetching : false,
    followProgress: []
};


const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return  {
                ...state,
                users: action.payload.users,
                totalCount: action.payload.totalCount ? action.payload.totalCount : state.totalCount

            }
        }

        case TOGGLE_IS_FETCHING_PROGRESS: {
            return  {
                ...state,
                followProgress: action.payload.bull ?
                    state.followProgress.filter(id => id !== action.payload.id)
                    :[...state.followProgress,action.payload.id]
            }
        }
        case FOLLOW : {
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload ? {...el,followed:true}: el)
            }
        }
        case UNFOLLOW :{
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload ? {...el,followed:false}: el)
            }
        }
        case SET_CURRENT_PAGE :{
            return {
                ...state,
                currentPage: action.payload
            }
        }
        case TOGGLE_IS_FETCHING :{
            return {
                ...state,
                isFetching: action.payload
            }
        }
        default: {
            return state
        }
    }
}

export const follow = (userId) => {
    return {
        type: FOLLOW,
        payload: userId
    }
};

export const unFollow = (userId) => {
    return {
        type: UNFOLLOW,
        payload: userId
    }
};

export const setUsers = (users,totalCount) => {
    return {
        type: SET_USERS,
        payload: {
            users,
            totalCount
        }
    }
};

export const setCorrentPage = (i) => {

    return {
        type: SET_CURRENT_PAGE,
        payload: i
    }
};

export const loading = (bull) => {
    return {
        type: TOGGLE_IS_FETCHING,
        payload: bull
    }
};

export const followingInProgress = (id,bull) => {
    return {
        type: TOGGLE_IS_FETCHING_PROGRESS,
        payload: {
            id,
            bull
        }
    }
};

export const getUsersThunkCreator =(currentPage,pageSize)=> {

    return dispatch => {
        dispatch(loading(true));
        usersApi.getUsers(currentPage,pageSize)
            .then((data) => {
                dispatch(setUsers(data.items, data.totalCount));
                dispatch(loading(false));
                dispatch(setCorrentPage(currentPage))
            })
    }

}

export const followThunkCreator =(id)=> {

    return dispatch => {
        usersApi.follow(id)
            .then(({data}) => {
                if(data.resultCode === 0){
                    dispatch(unFollow(id))
                }
                dispatch(followingInProgress(id,true))
            })
    }
}

export const UnfollowThunkCreator =(id)=> {
    return dispatch => {
        usersApi.Unfollow(id)
            .then(({data}) => {

                if(data.resultCode === 0){
                    dispatch(follow(id))
                }
                dispatch(followingInProgress(id,true))
            })
    }
}




export default usersReduser













