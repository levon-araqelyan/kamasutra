import React from 'react'
import './App.scss';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App({postData,messegesData,dialogsData}) {
    return (
        <div className="AppWrapper">
            <BrowserRouter>
                <Header/>
                <NavBar/>
                <div className="AppContainer">

                        <Route path="/profile" render={()=><Profile postData={postData}/>}/>
                        <Route path="/dialogs" render={()=> <Dialogs messegesData={messegesData} dialogsData={dialogsData}/>}/>


                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
