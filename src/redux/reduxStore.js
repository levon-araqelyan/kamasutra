import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReduser from "./redusers/dialogsRedusers";
import sidebarReduser from "./redusers/sidebarReduser";
import profileReduser from "./redusers/profileRedusers";
import usersRedusers from "./redusers/usersRedusers";
import authReduser from "./redusers/authRedusers";
import thunkMiddleware from "redux-thunk"

const redusers= combineReducers({
    profileReduser,
    dialogsReduser,
    sidebarReduser,
    usersRedusers,
    auth: authReduser,
})

const store = createStore(redusers,applyMiddleware(thunkMiddleware));

export default store