import React from 'react'
import './App.scss';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App({state: {profilePage, dialogsPage}, dispatch}) {
    return (
        <div className="AppWrapper">
            <BrowserRouter>
                <Header/>
                <NavBar/>
                <div className="AppContainer">

                    <Route path="/profile" render={() => <Profile state={profilePage} dispatch={dispatch}/>}/>
                    <Route path="/dialogs"
                           render={() => <Dialogs dispatch={dispatch} messagesData={dialogsPage.messegesData}
                                                  dialogsData={dialogsPage.dialogsData}
                                                  newMessageText={dialogsPage.newMessageText}/>}/>


                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
