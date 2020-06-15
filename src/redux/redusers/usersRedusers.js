const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
    users: [

    ]
};


const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
          return  {
                ...state,
              users: [...state.users,...action.payload]
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
        default: {
            return state
        }
    }
}

export const followAc = (userId) => {
    return {
        type: FOLLOW,
        payload: userId
    }
};

export const unFollowAc = (userId) => {
    return {
        type: UNFOLLOW,
        payload: userId
    }
};

export const setUsersAc = (users) => {

    return {
        type: SET_USERS,
        payload: users
    }
};




export default usersReduser













