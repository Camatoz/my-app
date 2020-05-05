import React from 'react';
import test from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/friends';


const Navbar = (props) => {
    return(
        <div>
            <nav className={test.nav}>
                <div className={test.item}><NavLink to="/profile" activeClassName={test.active}>Profile</NavLink></div>
                <div className={test.item}><NavLink to="/dialogs" activeClassName={test.active}>Messages</NavLink></div>
                <div className={test.item}><NavLink to="/news" activeClassName={test.active}>News</NavLink></div>
                <div className={test.item}><NavLink to="/music" activeClassName={test.active}>Music</NavLink></div>
                <div className={test.item}><NavLink to="/tuning" activeClassName={test.active}>Settings</NavLink></div>
            </nav>
            
            <Friends name={props.state.friendsData} />
        </div>
    )
}

export default Navbar;




