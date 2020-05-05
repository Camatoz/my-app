import React from 'react';
import test from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={test.dialog + ' ' + test.active}>
            <NavLink to={path}>
                <div className={test.avaName}>
                    <div className={test.ava}>
                        <img src="https://pluspng.com/img-png/smily-png-hd-smiley-face-png-418.png" alt="ava"/>
                    </div>
                    <div>{props.name}</div>
                </div>
            </NavLink>
        </div>
    )
}

export default DialogItem;

