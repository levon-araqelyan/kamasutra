const SET_NEW_MESSAGE_TEXT = "SET_NEW_MESSAGE_TEXT";
const ADD_DIALOGS_MESSAGE = "ADD_DIALOGS_MESSAGE";

type DialogType ={
    id:string,
    name:string
}

type MessegesDataType = {
    id:string
    text:string
}

const initialState = {
    dialogsData: [
        {id: "1", name: "Levon"},
        {id: "2", name: "Artur"},
        {id: "3", name: "Maria"},
        {id: "4", name: "Papa"},
        {id: "5", name: "Mama"},
    ] as Array<DialogType>,
    messegesData: [
        {id: "1", text: "how are yo"},
        {id: "2", text: "yu"},
        {id: "3", text: "yo"},
        {id: "4", text: "yo"},
    ] as Array<MessegesDataType>,
    newMessageText : ""
};

export type initialStateType = typeof initialState

const dialogsReduser = (state = initialState, action:ActionsType):initialStateType => {

    switch (action.type) {
        case SET_NEW_MESSAGE_TEXT : {
            return {
                ...state,
                newMessageText: action.payload
            };
        }
        case ADD_DIALOGS_MESSAGE : {

            return {
                ...state,
                newMessageText: "",
                messegesData: [...state.messegesData, {id: `${state.dialogsData.length + 1}`, text: state.newMessageText}]
            }
        }
        default: {
            return state
        }
    }
};

type ActionsType = SetNewMessageTextActionCreatorType | AddDialogsMessageDataActionCreatorType

type SetNewMessageTextActionCreatorType = {
    type:typeof SET_NEW_MESSAGE_TEXT,
    payload: string,
}

export const setNewMessageTextActionCreator = (value:string):SetNewMessageTextActionCreatorType => {
    return {
        type: SET_NEW_MESSAGE_TEXT,
        payload: value
    }
};

type AddDialogsMessageDataActionCreatorType = {
    type: typeof ADD_DIALOGS_MESSAGE,
}

export const addDialogsMessageDataActionCreator = ():AddDialogsMessageDataActionCreatorType => {
    return {
        type: ADD_DIALOGS_MESSAGE,
    }
};

export default dialogsReduser

