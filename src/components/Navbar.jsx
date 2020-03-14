import React from 'react';
import classes from './Navbar.module.css';

let test = {
    "nav": "Navbar_nav__14YqR",
    "item": "Navbar_item__172Qi"
};

const Navbar = () => {
    return(
        <nav className={test.nav}>
            <div className={test.item}><a href="#">Profile</a></div>
            <div className={test.item}><a href="#">Messages</a></div>
            <div className={test.item}><a href="#">News</a></div>
            <div className={test.item}><a href="#">Music</a></div>
            <div className={test.item}><a href="#">Settings</a></div>
        </nav>
    )
}

export default Navbar;

