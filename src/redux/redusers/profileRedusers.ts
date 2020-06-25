import {profileApi} from "../../api/api";
import {stopSubmit} from "redux-form";
import {PhotosType, PostDataType, PrfileType} from "../../types/types";

const SET_NEW_POST_TEXT = "SET_NEW_POST_TEXT";
const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SAVE_FOTO_SCCSES = "SAVE_FOTO_SCCSES";
const LOADING_SHOW = "LOADING_SHOW";

const initialState = {
    postData: [
        {id: 1, message: "my first post", likeCount: 1},
        {id: 2, message: "yes", likeCount: 11},
    ] as Array<PostDataType>,
    profile: null as PrfileType | null,
    newPostText: "",
    isLoading: false,
    status: ""
};

export type initialStateType = typeof initialState

const profileReduser = (state = initialState, action:any):initialStateType => {
    switch (action.type) {
        case ADD_POST : {
            return {
                ...state,
                postData: [{
                    id: state.postData.length + 1,
                    message: state.newPostText,
                    likeCount: 1
                }, ...state.postData],
                newPostText: ""
            }

        }

        case LOADING_SHOW : {
            return {
                ...state,
                isLoading: !state.isLoading
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
        case SAVE_FOTO_SCCSES : {
            return {
                ...state,
                profile: {...state.profile, photos: action.payload}as PrfileType
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

type AddPostActionCreatorType = {
    type:typeof ADD_POST
}

export const addPostActionCreator = ():AddPostActionCreatorType => {
    return {
        type: ADD_POST
    }
};

type ShowLoadingLogicsType = {
    type:typeof LOADING_SHOW
}

export const showLoadingLogics = ():ShowLoadingLogicsType => {
    return {
        type: LOADING_SHOW
    }
};

type SetNewPostTextActionCreatorType = {
    type:typeof SET_NEW_POST_TEXT
    payload: string
}

export const setNewPostTextActionCreator = (value:string):SetNewPostTextActionCreatorType => {
    return {
        type: SET_NEW_POST_TEXT,
        payload: value
    }
};

type SetUserProfileType = {
    type:typeof SET_USER_PROFILE
    payload: PrfileType
}

export const setUserProfile = (data:PrfileType):SetUserProfileType => {
    return {
        type: SET_USER_PROFILE,
        payload: data
    }
};

type SetStatusType = {
    type:typeof SET_STATUS
    payload: string
}

export const setStatus = (status:string):SetStatusType => {
    return {
        type: SET_STATUS,
        payload: status
    }
};

export const getStatus = (userId:number) => {
    return async (dispatch:any) => {

       const {data} = await profileApi.getStatus(userId)

                dispatch(setStatus(data));

    }
};

export const updateStatus = (status:string) => {

    return async (dispatch:any) => {
       const {data} = await profileApi.updateStatus(status)

                if (data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
    }
};

export const setUserProfileThunkAction = (userId:number) => {

    return async (dispatch:any) => {
        dispatch(showLoadingLogics());
       const {data} = await profileApi.getProfile(userId);

        dispatch(setUserProfile(data));
        dispatch(showLoadingLogics())

    }
};

export const savePhoto = (photo:PhotosType) => {
    return async (dispatch:any) => {
       const {data} = await profileApi.savePhoto(photo);

                dispatch(savePhotoSuccses(data.data.photos));

    }
};

export const saveProfile = (profile:PrfileType) => {
    return async (dispatch:any, getState:any) => {
        const userId = getState().auth.userId;
        let response = await profileApi.saveProfile({...profile, userId});
        if (response.data.resultCode === 0) {
            dispatch(setUserProfileThunkAction(userId));
        } else {
            const error = response.data.messages[0];
            let index = error.indexOf("Contacts->");
            let rez = error.slice(index + 10, error.length - 1).toLowerCase();

            dispatch(stopSubmit("edit-profile", {"contacts": {[rez]: error}}))

            return Promise.reject(error)

        }


    }
};

type SavePhotoSuccsesType = {
    type:typeof SAVE_FOTO_SCCSES,
    payload: PhotosType
}

export const savePhotoSuccses = (fotos:any):SavePhotoSuccsesType => {
    return {
        type: SAVE_FOTO_SCCSES,
        payload: fotos
    }
};

export default profileReduser













