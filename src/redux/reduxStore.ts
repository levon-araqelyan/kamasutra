import {applyMiddleware, combineReducers, createStore,compose } from "redux";
import dialogsReduser from "./redusers/dialogsRedusers";
import sidebarReduser from "./redusers/sidebarReduser";
import profileReduser from "./redusers/profileRedusers";
import usersRedusers from "./redusers/usersRedusers";
import authRedusers from "./redusers/authRedusers";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReduser from "./redusers/appRedusers";

const Rootredusers= combineReducers({
    profileReduser,
    dialogsReduser,
    sidebarReduser,
    appReduser,
    usersRedusers,
    auth: authRedusers,
    form:formReducer
})

type RootredusersType = typeof Rootredusers
export type AppStateType = ReturnType<RootredusersType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(Rootredusers,composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store