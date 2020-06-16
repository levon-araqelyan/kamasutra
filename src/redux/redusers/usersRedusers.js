const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

const initialState = {
    users: [],
    totalCount : 0,
    pageSize: 4,
    currentPage: 1,
    isFetching : false
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
        case TOGGLE_IS_FETCHING: {
            return  {
                ...state,
                isFetching:action.payload
            }
        }
        case FOLLOW : {
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload ? {...el,followed:false}: el)
            }
        }
        case UNFOLLOW :{
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload ? {...el,followed:true}: el)
            }
        }
        case SET_CURRENT_PAGE :{
            return {
                ...state,
                currentPage: action.payload
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




export default usersReduser













