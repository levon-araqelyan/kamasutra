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
                 {id: "1", name: "Levon"},
                 {id: "2", name: "Artur"},
                 {id: "3", name: "Maria"},
                 {id: "4", name: "Papa"},
                 {id: "5", name: "Mama"},
             ]
         },
     },
     getState(){
         return this._state
     },
    _renderEntireTree: () => {
        console.log("ubdate")
    },
    addPost() {
        let newObj = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 1
        };
        this._state.profilePage.postData.push(newObj);
        this._state.profilePage.newPostText = "";

        this._renderEntireTree(this)
    },
    setNewPostText(text) {
        store._state.profilePage.newPostText = text;
        store._renderEntireTree(this)
    },
    subscribe(observer){
        this._renderEntireTree = observer
    }
};

export default store;

// let renderEntireTree = () => {
//     console.log("ubdate")
// }
//
// export const state = {
//     profilePage: {
//         postData: [
//             {id: 1, message: "my first post", likeCount: 1},
//             {id: 2, message: "yes", likeCount: 11},
//             {id: 3, message: "no", likeCount: 22},
//             {id: 4, message: "true", likeCount: 8},
//             {id: 5, message: "false", likeCount: 6},
//         ],
//         newPostText: ""
//     },
//     dialogsPage: {
//         dialogsData: [
//             {id: "1", name: "Levon"},
//             {id: "2", name: "Artur"},
//             {id: "3", name: "Maria"},
//             {id: "4", name: "Papa"},
//             {id: "5", name: "Mama"},
//         ],
//         messegesData: [
//             {id: "1", name: "Levon"},
//             {id: "2", name: "Artur"},
//             {id: "3", name: "Maria"},
//             {id: "4", name: "Papa"},
//             {id: "5", name: "Mama"},
//         ]
//     },
// };
//
// export const addPost = () => {
//
//     const newObj = {
//         id: 5,
//         message: state.profilePage.newPostText,
//         likeCount: 1
//     };
//     state.profilePage.postData.push(newObj);
//     state.profilePage.newPostText = "";
//
//     renderEntireTree()
//
// };
//
// export const setNewPostText = (text) => {
//
//     state.profilePage.newPostText = text;
//     renderEntireTree()
// };
//
// export const subscribe = (observer) => {
//     renderEntireTree = observer
// }