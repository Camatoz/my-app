import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Tuning from './components/Tuning/Tuning';


const App = (props) => {

    return (
      <div className="app-wrapper">
        <Header/>
        <Navbar state={props.state.friendsPart} />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={ () => 
            <Dialogs dialogsPage={props.state.dialogsPage}
                     newDialogText={props.state.dialogsPage.newDialogText}
                     updateNewDialogText={props.updateNewDialogText}
                     addDialog={props.addDialog}  /> } />
          <Route path="/profile" render={ () => 
            <Profile profilePage={props.state.profilePage}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText} /> } />
          <Route path="/news" render={ () => 
            <News state={props.state.newsPage} /> } />
          <Route path="/music" component={Music} />
          <Route path="/tuning" component={Tuning} />
        </div>
      </div>
    );
}


export default App;
