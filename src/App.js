import React from 'react'
import './App.scss';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Route} from "react-router-dom";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App() {
    return (
        <div className="AppWrapper">

            <Header/>
            <NavBar/>
            <div className="AppContainer">

                <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/dialogs"
                       render={() => <DialogsContainer/>}/>

            </div>

        </div>
    );
}

export default App;
