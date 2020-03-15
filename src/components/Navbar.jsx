import React from 'react';
import test from './Navbar.module.css';
console.log(test);

// let test = {
//     "nav": "Navbar_nav__14YqR",
//     "item": "Navbar_item__172Qi"
// };

const Navbar = () => {
    return(
        <nav className={test.nav}>
            <div className={`${test.item} ${test.active}`}><a>Profile</a></div>
            <div className={test.item}><a href="#">Messages</a></div>
            <div className={test.item}><a href="#">News</a></div>
            <div className={test.item}><a href="#">Music</a></div>
            <div className={test.item}><a href="#">Settings</a></div>
        </nav>
    )
}

export default Navbar;

