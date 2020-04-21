import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/footer';


const App = () => {
    return (
        <div className="app-wrapper">
          <Header/>
          <Navbar/>
          <Profile/>
          <Footer/>
        </div>
    );
}


export default App;
