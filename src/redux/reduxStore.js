import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import dialogsReduser from "./redusers/dialogsRedusers";
import sidebarReduser from "./redusers/sidebarReduser";
import profileReduser from "./redusers/profileRedusers";
import usersRedusers from "./redusers/usersRedusers";
import authReduser from "./redusers/authRedusers";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReduser from "./redusers/appRedusers";

const redusers= combineReducers({
    profileReduser,
    dialogsReduser,
    sidebarReduser,
    appReduser,
    usersRedusers,
    auth: authReduser,
    form:formReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(redusers,composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store