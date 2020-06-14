import {combineReducers, createStore} from "redux";
import dialogsReduser from "./redusers/dialogsRedusers";
import sidebarReduser from "./redusers/sidebarReduser";
import profileReduser from "./redusers/profileRedusers";

const redusers= combineReducers({
    profileReduser,
    dialogsReduser,
    sidebarReduser
})

const store = createStore(redusers);

export default store