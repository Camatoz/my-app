import React from 'react';
import test from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
console.log(test);


const Navbar = () => {
    return(
        <nav className={test.nav}>
            <div className={test.item}><NavLink to="/profile" activeClassName={test.active}>Profile</NavLink></div>
            <div className={test.item}><NavLink to="/dialogs" activeClassName={test.active}>Messages</NavLink></div>
            <div className={test.item}><NavLink to="/news" activeClassName={test.active}>News</NavLink></div>
            <div className={test.item}><NavLink to="/music" activeClassName={test.active}>Music</NavLink></div>
            <div className={test.item}><NavLink to="/tuning" activeClassName={test.active}>Settings</NavLink></div>
        </nav>
    )
}

export default Navbar;

