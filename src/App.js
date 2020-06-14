import React from 'react'
import './App.scss';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Route} from "react-router-dom";

function App() {
    return (
        <div className="AppWrapper">

            <Header/>
            <NavBar/>
            <div className="AppContainer">

                <Route path="/profile" render={() => <Profile/>}/>
                <Route path="/dialogs"
                       render={() => <DialogsContainer/>}/>

            </div>

        </div>
    );
}

export default App;
