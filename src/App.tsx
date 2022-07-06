import React from 'react';
import './App.css';

import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Navbar} from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";
import {RootStateType, state} from "./redux/state";

type StateType = {
    state: RootStateType
}

const App = (props: StateType) => {
    let dialogData = props.state.dialogsPage.dialogData
    let messageData = props.state.dialogsPage.messageData
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Navbar/>
                <Header/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={()=><Dialogs dialogData={dialogData} messageData={messageData}/>}/>
                    <Route path='/profile' render={()=><Profile posts={props.state.profilePage.posts}/>}/>
                </div>
            </div>
        </BrowserRouter>);
}

export default App;
