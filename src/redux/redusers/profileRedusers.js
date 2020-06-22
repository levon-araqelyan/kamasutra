import {profileApi} from "../../api/api";

const SET_NEW_POST_TEXT = "SET_NEW_POST_TEXT";
const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

const initialState = {
    postData: [
        {id: 1, message: "my first post", likeCount: 1},
        {id: 2, message: "yes", likeCount: 11},
    ],
    profile: null,
    newPostText: "",
    status: ""
};


const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST : {
            return {
                ...state,
                postData: [...state.postData, {
                    id: state.postData.length + 1,
                    message: state.newPostText,
                    likeCount: 1
                }],
                newPostText: ""
            }

        }

        case SET_NEW_POST_TEXT : {
            return {
                ...state,
                newPostText: action.payload
            }

        }

        case SET_STATUS : {
            return {
                ...state,
                status: action.payload
            }

        }

        case SET_USER_PROFILE : {
            return {
                ...state,
                profile: action.payload
            }

        }

        case DELETE_POST : {
            return {
                ...state,
                postData: state.postData.filter(el => el.id !== action.payload)
            }

        }

        default: {
            return state
        }
    }
};

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

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        payload: status
    }
};

export const getStatus = (userId) => {
    return async dispatch => {

        const {data} = await profileApi.getStatus(userId);
        dispatch(setStatus(data));
    }
};

export const updateStatus = (status) => {

    return async dispatch => {
        const {data} = await profileApi.updateStatus(status);

        if (data.resultCode === 0) {
            dispatch(setStatus(status));
        }

    }
};

export const setUserProfileThunkAction = (userId) => {
    return async dispatch => {
        const {data} = await profileApi.getProfile(userId);
        dispatch(setUserProfile(data));
    }
};

export const deletePost = (id) => {
    return {
        type: DELETE_POST,
        payload: id
    }

};

export default profileReduser













