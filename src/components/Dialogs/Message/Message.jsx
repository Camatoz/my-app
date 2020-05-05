import React from 'react';
import test from './../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={test.message}>
            <div className={test.circle}></div>
            <div>{props.message}</div>
        </div>
    )
}

export default Message;

