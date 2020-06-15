import {combineReducers, createStore} from "redux";
import dialogsReduser from "./redusers/dialogsRedusers";
import sidebarReduser from "./redusers/sidebarReduser";
import profileReduser from "./redusers/profileRedusers";
import usersRedusers from "./redusers/usersRedusers";

const redusers= combineReducers({
    profileReduser,
    dialogsReduser,
    sidebarReduser,
    usersRedusers,
})

const store = createStore(redusers);

export default store