import React from 'react';
import './App.css';
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {Navbar} from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";
import {PostPropsType, RootStateType, state, updatePostText} from "./redux/state";
;



type StateType = {
    state: RootStateType
    addPost: (postText:string)=>void
    myPost:string
    updatePostText: (newTex:string)=>void
}


const App = (props:StateType) => {
    let dialogData = props.state.dialogsPage.dialogData
    let messageData = props.state.dialogsPage.messageData
    let posts =  props.state.profilePage.posts
    return (
            <div className='app-wrapper'>
                <Navbar/>
                <Header/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={()=><Dialogs dialogData={dialogData} messageData={messageData}/>}/>
                    <Route path='/profile' render={()=>
                        <Profile posts={posts}
                                 addPost={props.addPost}
                                 updatePostText={props.updatePostText}
                                 myPost={props.myPost}

                        />}
                    />
                </div>
            </div>);
}

export default App;
