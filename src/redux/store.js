import dialogsReduser from "./redusers/dialogsRedusers";
import profileReduser from "./redusers/profileRedusers";
import sidebarReduser from "./redusers/sidebarReduser";

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
        sidebarPage: {}
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
        this._state.dialogsPage =  dialogsReduser(this._state.dialogsPage , action);
        this._state.profilePage =  profileReduser(this._state.profilePage , action);
        this._state.sidebarPage =  sidebarReduser(this._state.sidebarPage , action);

        this._renderEntireTree(this)

    }

};


export default store;
