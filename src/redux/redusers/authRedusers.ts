import {authApi, securityApi} from "../../api/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = "SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS";

const initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
};

type initialStateType = typeof initialState

const authRedusers = (state = initialState, action: any): initialStateType => {

    switch (action.type) {
        case SET_USER_DATA : {
            return {
                ...state,
                ...action.payload,
            };
        }
        case GET_CAPTCHA_URL_SUCCESS : {
            return {
                ...state,
                captchaUrl: action.payload,
            };
        }
        default: {
            return state
        }
    }
};

type SetAuthUserDataType = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserPayloadType
}

type SetAuthUserPayloadType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean):
    SetAuthUserDataType => {
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
    return async (dispatch: any) => {
        const {data} = await authApi.me();
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(data.data.id, data.data.email, data.data.login, true))
        }
        return data
    }
};

export const loginThunkAction = (email: string, password: string, rememberMe: boolean, captcha: string | null) => {
    return async (dispatch: any) => {

        const {data} = await authApi.login(email, password, rememberMe, captcha);


        if (data.resultCode === 0) {
            dispatch(getAuthUserDataThunkAction())
        } else {
            if (data.resultCode === 10) {
                dispatch(getCaptchaUrl())
            }
            let message = data.messages.length > 0 ? data.messages[0] : "yor login or password not true";
            dispatch(stopSubmit("login", {_error: message}))
        }

    }
};

export const logoutThunkAction = () => {
    return async (dispatch: any) => {
        const {data} = await authApi.logout();

        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }

    }
};

export const getCaptchaUrl = () => {
    return async (dispatch: any) => {
        const {data} = await securityApi.getCaptchaUrl();
        const captchaUrl = data.url;
        dispatch(getCaptchaUrlSuccsess(captchaUrl))
    }
};

type GetCaptchaUrlSuccsess = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    payload: string
}

export const getCaptchaUrlSuccsess = (captchaUrl: string): GetCaptchaUrlSuccsess => {
    return {
        type: GET_CAPTCHA_URL_SUCCESS,
        payload: captchaUrl
    }
};

export default authRedusers


