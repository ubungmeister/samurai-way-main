import React from 'react';
import './App.css';

import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Navbar} from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";


const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Navbar/>
                <Header/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/profile' component={Profile}/>
                </div>
            </div>
        </BrowserRouter>);
}

export default App;
