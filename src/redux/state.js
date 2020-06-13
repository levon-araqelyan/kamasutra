const SET_NEW_POST_TEXT = "SET_NEW_POST_TEXT";
const ADD_POST = "ADD_POST";
const SET_NEW_MESSAGE_TEXT = "SET_NEW_MESSAGE_TEXT";
const ADD_DIALOGS_MESSAGE = "ADD_DIALOGS_MESSAGE";

const store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: "my first post", likeCount: 1},
                {id: 2, message: "yes", likeCount: 11},
                {id: 3, message: "no", likeCount: 22},
                {id: 4, message: "true", likeCount: 8},
                {id: 5, message: "false", likeCount: 6},
            ],
            newPostText: ""
        },
        dialogsPage: {
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
            newMessageText:""
        },
    },
    _renderEntireTree: () => {
        console.log("ubdate")
    },

    subscribe(observer) {
        this._renderEntireTree = observer
    },
    getState() {
        return this._state
    },

    dispatch(action){
        if(action.type === ADD_POST){
            let newObj = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 1
            };
            this._state.profilePage.postData.push(newObj);
            this._state.profilePage.newPostText = "";

            this._renderEntireTree(this)
        }else if(action.type === SET_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.payload;
            this._renderEntireTree(this)
        }else if(action.type === SET_NEW_MESSAGE_TEXT){
            this._state.dialogsPage.newMessageText = action.payload;
            this._renderEntireTree(this)
        }else if(action.type === ADD_DIALOGS_MESSAGE){
            let newObj = {
                id: 5,
                text: this._state.dialogsPage.newMessageText,
            };
            this._state.dialogsPage.messegesData.push(newObj);
            this._state.dialogsPage.newMessageText = "";
            this._renderEntireTree(this)
        }


    }

};

export const addPostActionCreator = ()=>{
    return {
        type:ADD_POST
    }
};

export const setNewPostTextActionCreator = (value)=>{
    return {
        type:SET_NEW_POST_TEXT,
        payload: value
    }
};

export const setNewMessageTextActionCreator = (value)=>{
    return {
        type:SET_NEW_MESSAGE_TEXT,
        payload: value
    }
};

export const addDialogsMessageDataActionCreator = ()=>{
    return {
        type: ADD_DIALOGS_MESSAGE,
    }
};


export default store;
