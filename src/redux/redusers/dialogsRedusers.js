const SET_NEW_MESSAGE_TEXT = "SET_NEW_MESSAGE_TEXT";
const ADD_DIALOGS_MESSAGE = "ADD_DIALOGS_MESSAGE";

const initialState = {
    dialogsData: [
        {id: "1", name: "Levon"},
        {id: "2", name: "Artur"},
        {id: "3", name: "Maria"},
        {id: "4", name: "Papa"},
        {id: "5", name: "Mama"},
    ],
    messegesData: [
        {id: "1", text: "how are yo"},
        {id: "2", text: "yu"},
        {id: "3", text: "yo"},
        {id: "4", text: "yo"},
    ],
    newMessageText: ""
};

const dialogsReduser = (state = initialState, action) => {

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
                messegesData: [...state.messegesData, {id: state.dialogsData.length + 1, text: state.newMessageText}]
            }
        }
        default: {
            return state
        }
    }
};

export const setNewMessageTextActionCreator = (value) => {
    return {
        type: SET_NEW_MESSAGE_TEXT,
        payload: value
    }
};

export const addDialogsMessageDataActionCreator = () => {
    return {
        type: ADD_DIALOGS_MESSAGE,
    }
};

export default dialogsReduser

