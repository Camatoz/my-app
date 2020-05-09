import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/footer';
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
          {/* <Route path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={Profile} /> */}
          <Route path="/dialogs" render={ () => 
            <Dialogs one={props.state.dialogsPage}  /> } />
          <Route path="/profile" render={ () => 
            <Profile state={props.state.profilePage}
                      addPost={props.addPost} /> } />
          <Route path="/news" render={ () => 
            <News state={props.state.newsPage} /> } />
          <Route path="/music" component={Music} />
          <Route path="/tuning" component={Tuning} />
        </div>
      </div>
    );
}


export default App;
