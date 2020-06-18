import {authApi, usersApi} from "../../api/api";
import {setUserProfile} from "./profileRedusers";

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
                isAuth:true
            };
        }
        default: {
            return state
        }
    }
};

export const setAuthUserData = (userId,email,login) => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId,
            email,
            login
        }
    }
};

export const getAuthUserDataThunkAction = () => {
    return  dispatch => {
         authApi.me()
            .then(({data}) => {

                if(data.resultCode === 0){
                    dispatch(setAuthUserData(data.data.id,data.data.email,data.data.login))
                }
            })
    }
};


export default authReduser

