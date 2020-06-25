import {getAuthUserDataThunkAction} from "./authRedusers";

const INITIALIZED_SUCSSES = "INITIALIZED_SUCSSES";

export type initialStateType = {
    initialized : boolean
};

const initialState:initialStateType = {
  initialized : false
};

const appReduser = (state:initialStateType = initialState, action:any):initialStateType => {

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

type initializedSucssedActionType = {
    type:typeof INITIALIZED_SUCSSES
}

export const initializedSucssedAction = ():initializedSucssedActionType => {
    return {
        type: INITIALIZED_SUCSSES
    }
};

export const initializeApp = () => {
    return  async (dispatch:any) => {

       await dispatch(getAuthUserDataThunkAction())
        dispatch(initializedSucssedAction())

            }
};

export default appReduser

