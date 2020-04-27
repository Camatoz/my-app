import React from 'react';
import test from './Navbar.module.css';
console.log(test);


const Navbar = () => {
    return(
        <nav className={test.nav}>
            <div className={`${test.item} ${test.active}`}><a href="/profile">Profile</a></div>
            <div className={test.item}><a href="/dialogs">Messages</a></div>
            <div className={test.item}><a href="/news">News</a></div>
            <div className={test.item}><a href="/music">Music</a></div>
            <div className={test.item}><a href="/tuning">Settings</a></div>
        </nav>
    )
}

export default Navbar;

