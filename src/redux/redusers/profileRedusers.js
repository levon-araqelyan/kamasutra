const SET_NEW_POST_TEXT = "SET_NEW_POST_TEXT";
const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

const initialState = {
    postData: [
        {id: 1, message: "my first post", likeCount: 1},
        {id: 2, message: "yes", likeCount: 11},
        {id: 3, message: "no", likeCount: 22},
        {id: 4, message: "true", likeCount: 8},
        {id: 5, message: "false", likeCount: 6},
    ],
    profile:null,
    newPostText: ""
};


const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST : {
            return {
                ...state,
                postData:[...state.postData,{id: state.postData.length + 1,message:state.newPostText,likeCount:1}],
                newPostText:""
            }

        }

        case SET_NEW_POST_TEXT : {
           return {
               ...state,
               newPostText: action.payload
           }

        }

        case SET_USER_PROFILE : {
            return {
                ...state,
                profile: action.payload
            }

        }

        default: {
            return state
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};

export const setNewPostTextActionCreator = (value) => {
    return {
        type: SET_NEW_POST_TEXT,
        payload: value
    }
};

export const setUserProfile = (data) => {
    return {
        type: SET_USER_PROFILE,
        payload: data
    }
};


export default profileReduser













