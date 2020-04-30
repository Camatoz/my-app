import React from 'react';
import test from './../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={test.message}>{props.message}</div>
    )
}

export default Message;

