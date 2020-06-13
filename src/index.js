import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/state"
import ReactDOM from "react-dom";
import App from "./App";

const renderEntireTree = (store)=>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(store)
store.subscribe(renderEntireTree)


serviceWorker.unregister();
