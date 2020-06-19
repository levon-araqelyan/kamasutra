import {authApi} from "../../api/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
  userId: null,
    email:null,
    login:null,
    isAuth:false
};

const authReduser = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA : {
            return {
                ...state,
                ...action.payload,
            };
        }
        default: {
            return state
        }
    }
};

export const setAuthUserData = (userId,email,login,isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId,
            email,
            login,
            isAuth
        }
    }
};

export const getAuthUserDataThunkAction = () => {
    return  dispatch => {
        return  authApi.me()
            .then(({data}) => {
                if(data.resultCode === 0){
                    dispatch(setAuthUserData(data.data.id,data.data.email,data.data.login,true))
                }
            })
    }
};

export const loginThunkAction = (email,password,rememberMe) => {
    return  dispatch => {

        authApi.login(email,password,rememberMe)
            .then(({data}) => {

                if(data.resultCode === 0){
                    dispatch(getAuthUserDataThunkAction())
                }else {
                    let message = data.messages.length > 0 ? data.messages[0] : "yor login or password not true";
                    dispatch(stopSubmit("login",{_error:message}))
                }
            })
    }
};

export const logoutThunkAction = () => {
    return  dispatch => {
        authApi.logout()
            .then(({data}) => {

                if(data.resultCode === 0){
                    dispatch(setAuthUserData(null,null,null,false))
                }
            })
    }
};


export default authReduser

