import React from 'react';
import test from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const Dialogs = (props) => {
    return(
        <div className={test.dialogs}>
            <div className={test.dialogsItems}>
                <div className={test.dialog + ' ' + test.active}><NavLink to="dialog/1">Dimych</NavLink></div>
                <div className={test.dialog}><NavLink to="dialog/2">Andrey</NavLink></div>
                <div className={test.dialog}><NavLink to="dialog/3">Sergey</NavLink></div>
                <div className={test.dialog}><NavLink to="dialog/4">Ryslan</NavLink></div>
                <div className={test.dialog}><NavLink to="dialog/5">Olga</NavLink></div>
                <div className={test.dialog}><NavLink to="dialog/6">Anna</NavLink></div>
                <div className={test.dialog}><NavLink to="dialog/7">Rita</NavLink></div>
                <div className={test.dialog}><NavLink to="dialog/8">Bububu</NavLink></div>
            </div>
            <div className={test.messages}>
                <div className={test.message}>Hi!</div>
                <div className={test.message}>Hello!</div>
                <div className={test.message}>That's up!</div>
                <div className={test.message}>Good Day!</div>
                <div className={test.message}>Hi man!</div>
            </div>
        </div>
    )
}

export default Dialogs;

