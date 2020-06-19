import {getAuthUserDataThunkAction} from "./authRedusers";

const INITIALIZED_SUCSSES = "INITIALIZED_SUCSSES";

const initialState = {
  initialized : false
};

const appReduser = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCSSES : {
            return {
                ...state,
                initialized : true
            };
        }
        default: {
            return state
        }
    }
};

export const initializedSucssedAction = () => {
    return {
        type: INITIALIZED_SUCSSES
    }
};

export const initializeApp = () => {
    return  async dispatch => {

       await dispatch(getAuthUserDataThunkAction())
        dispatch(initializedSucssedAction())

            }
};

export default appReduser

